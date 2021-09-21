import log from './lib/log.js'

import fs from 'fs'
import { join } from 'path'
import { fetchAllPages, fetchPageBlocks, plain, pageTitle, slug } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;

async function go() {
  const pages = await fetchAllPages()

  for (let page of pages) {
    const contents = await h.renderPage(page)
    const path = join(resolveTilde(out), slug(page) + '.svelte')

    fs.writeFile(path, contents, (err) => {
      if (err) throw err;

      log(`︽ Page saved to ${path}`, `${new Date()}`, { emoji: '\n⇓ ', delimiter: '⇓\n\n' });
    })
  }
}

go()