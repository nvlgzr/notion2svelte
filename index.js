import log from './lib/log.js'
import { fetchAllPages, fetchPageBlocks, pageTitle, plain } from './lib/notion.js'

fetchAllPages().then(pages => {
  const title = plain(pageTitle(pages[0]))
  console.log(
    `<h1>${title}</h1>`
  )
})