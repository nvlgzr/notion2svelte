import log from './lib/log.js'

import fs from 'fs'
import { fetchAllPages, fetchPageBlocks, slug } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;
const styles = fs.readFileSync('./styles.css', { encoding: 'utf8' })

async function go() {
  const pages = await fetchAllPages()
  for (let page of pages) {
    const path = resolveTilde(out) + slug(page) + '.svelte'
    const title = + h.title(page.title);
    let svelteHead = h.headTitle(title);
    let scriptChunks = new Set([
      'import InlineCode from "$lib/notion2svelte/InlineCode.svelte"',
    ])
    let html = h.title(title);
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

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒</button>
`
    fs.writeFile(path, svelteHead + script + html, (err) => {
      if (err) throw err;

      // log(`File saved to ${path}\n↓\n`, contents);
    })
  }
}

go()