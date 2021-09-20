import log from './lib/log.js'

import fs from 'fs'
import { join } from 'path'
import { fetchAllPages, fetchPageBlocks, plain, pageTitle, slug } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;
const styles = fs.readFileSync('./styles.css', { encoding: 'utf8' })

async function go() {
  const pages = await fetchAllPages()
  for (let page of pages) {
    const titleText = plain(pageTitle(page))
    const path = join(resolveTilde(out), slug(page) + '.svelte')
    const title = + h.title(titleText);
    let scriptChunks = new Set([
      'import Title from "$lib/notion2svelte/Title.svelte"',
      'import InlineCode from "$lib/notion2svelte/InlineCode.svelte"',
      'import InlineColor from "$lib/notion2svelte/InlineColor.svelte"',
    ])
    let html = h.title(titleText);
    let renderedBlocks = '';

    const blocks = await fetchPageBlocks(page);

    for (let block of blocks) {
      try {
        if (block.type !== 'unsupported') {
          const [comp, code] = h.fromNotion(block)
          renderedBlocks += comp + h.br
          scriptChunks.add(code)
        }
      } catch (error) {
        log(
          `🚨 Error → ${error} | block → ${JSON.stringify(block)}`
        )
      }
    }

    scriptChunks.add(`\nlet curtainDrawn = false`)

    html += `
{#if !curtainDrawn }
  ${renderedBlocks}
{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify(${JSON.stringify(blocks, null, 2)}, null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify(${JSON.stringify(page, null, 2)}, null, 2)}</pre>
{/if}
    `

    let script = `
<script>
${Array.from(scriptChunks).join('\n')}
</script>

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by ${process.env.npm_package_name} ${process.env.npm_package_version} 𒅒</button>
`
    // ↑ This npm stuff is mainly just an excuse to remind myself of this
    //   interesting-but-probably-useless-to-me tip that I encountered the
    //   other day, presented as a package.json _script_ entry:
    //
    //   `"check-env": "node -e 'console.log(process.env)' | grep npm"

    const contents = h.headTitle(titleText) + script + html

    fs.writeFile(path, contents, (err) => {
      if (err) throw err;

      log(`Page saved to ${path}`, `${new Date()}`, { emoji: '\n⇓ ', delimiter: '⇓\n\n' });
    })
  }
}

go()