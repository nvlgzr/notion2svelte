import fs from 'fs'
import { fetchAllPages, fetchPageBlocks, pageTitle, plain, slug } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;
const styles = fs.readFileSync('./styles.css', { encoding: 'utf8' })

fetchAllPages().then(pages => {
  for (let page of pages) {
    fetchPageBlocks(page).then(blocks => {
      const title = plain(pageTitle(page))
      const path = resolveTilde(out) + slug(page) + '.svelte'
      let contents = h.headTitle(title) + h._ + h.title(title)
      let scriptChunks = new Set()

      for (let block of blocks) {
        try {
          const [html, code] = h.fromNotion(block)
          contents += html + h.br
          scriptChunks.add(code)
        } catch (error) {
          if (block.type !== 'unsupported') {
            // This isn't worth reporting as Notion simply, well
            // doesn't support some blocks yet.
          } else {
            console.log(
              `🚨 Error → ${error} | block → ${JSON.stringify(block)}`
            )
          }
        }
      }

      contents += h._ + `<style>\n${styles}\n</style>`;
      let scriptSection = `<script>${Array.from(scriptChunks).join('\n')}\n</script>`
      contents = scriptSection + h._ + contents

      fs.writeFile(path, contents, (err) => {
        if (err) throw err;

        console.log(`File saved to ${path}\n↓\n`, contents);
      });
    })
  }
})
