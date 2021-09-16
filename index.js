import fs from 'fs'
import { fetchAllPages, pageTitle, plain, slug } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;

fetchAllPages().then(pages => {
  for (let page of pages) {
    const title = plain(pageTitle(page))
    const path = resolveTilde(out) + slug(page) + '.svelte'
    let contents = h.headTitle(title) + h._ + h.title(title)

    contents += '…🐌'

    fs.writeFile(path, contents, (err) => {
      if (err) throw err;

      console.log(`File saved to ${path}\n↓\n`, contents);
    });
  }
})