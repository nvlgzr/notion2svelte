import { promises as fs } from "fs";
import { join } from 'path'
import { exec } from 'child_process'
import { fetchAllPages, fetchFullPage } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h, { slug } from './lib/sveltifier.js'
import env from './env.js'

const out = resolveTilde(env.OUTPUT_PATH);
const testPageId = env.NOTION_TEST_PAGE_ID
const db = env.NOTION_DATABASE_ID;
const cacheToken = env.CACHE_TOKEN

async function go() {
  if (testPageId) {
    console.log('🐞', testPageId)

    const testPagePath = join(out, 'test.json')
    let pageJSON = ''

    try {
      console.log(`0. Checking for existing test cache…`)
      const cache = await fs.readFile(testPagePath, "utf-8")
      console.log(`1. Cache found. Parsing.`)
      pageJSON = JSON.parse(cache)
    }
    catch (e) {
      // Usually just means the file's not there, which is expected
      // behavior, e.g., on first run, so there's no point spamming
      // the console.
      // console.log(`💥🐛: ${e}`)
    }

    if (!pageJSON || testPageId !== cacheToken) {
      try {
        console.log(`1a. Cache empty or broken. Fetching fresh page data for #${testPageId}`)
        pageJSON = await fetchFullPage(testPageId)
      }
      catch (e1) {
        console.error('💥🙉 Abort! Abort!', e1, testPageId)
        return
      }

      try {
        console.log('1b. Writing to test cache.')
        await fs.writeFile(testPagePath, JSON.stringify(pageJSON, null, 2))
        exec(
          `perl -pi.bak -e 's/CACHE_TOKEN=.*/CACHE_TOKEN=${testPageId}/g' .env; rm .env.bak`,
          (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`);
              return;
            }
            if (stderr && !stderr.includes('Debugger attached')) {
              console.log(`stderr: ${stderr}`);
              return;
            }
            console.log(`⚘ ${stdout.trim()} ⚘`);
          });
      }
      catch (e2) {
        console.warn(`FYI: Unable to save cache to ${testPagePath}: ${e2}`)
      }
    }

    let renderedPage = '';

    try {
      console.log(`2. Rendering data`)
      renderedPage = h.renderPage(pageJSON)
    }
    catch (e3) {
      console.log(`💥🐛 Mayday! Mayday!: ${pageJSON}`)
      return
    }

    try {
      const sveltePath = join(out, 'test.svelte')
      console.log(`3. Writing rendered Svelte page to ${sveltePath}`)
      await fs.writeFile(sveltePath, renderedPage)
      console.log(`⟢ FIN ⟣\n`)
    } catch (error) {
      console.log(`⚰️ Dead at the finish line: ${error}`)
      return
    }

  } else {
    console.log('🏭')

    let pages = [''];

    try {
      console.log(`1. Fetching publishable pages from Database #${db}`)
      pages = await fetchAllPages(db)
    }
    catch (e1) {
      console.error('💥🙉 Abort! Abort!', e1)
      return
    }

    console.log(`2. Processing ${pages.length} ${pages.length === 1 ? 'page' : 'pages'}`)
    for (let page of pages) {
      console.log(` › Fetching #${page.id}`)
      const path = join(out, slug(page) + '.svelte')
      const fullPage = await fetchFullPage(page.id)

      const jsonPath = join(out, slug(page) + '.json')
      console.log(` › Writing JSON to ${jsonPath}`)
      await fs.writeFile(jsonPath, JSON.stringify(fullPage, null, 2))

      console.log(` › Rendering…`)
      const contents = h.renderPage(fullPage)

      console.log(` › Writing rendered page to #${path}`)
      await fs.writeFile(path, contents)

      console.log(` › Formatting file…`)
      exec(
        `prettier --write ${path}`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr && !stderr.includes('Debugger attached')) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`⚘ ${stdout.trim()} ⚘`);
        });
    }
    console.log(`⟢ FIN ⟣\n`)
  }
}



go()