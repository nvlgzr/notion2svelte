import { promises as fs } from "fs";
import { join } from 'path'
import { exec } from 'child_process'
import { fetchAllPages, fetchFullPage } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h, { slug } from './lib/sveltifier.js'
import env from './env.js'

const out = resolveTilde(env.OUTPUT_PATH)
const testPageId = env.NOTION_TEST_PAGE_ID
const db = env.NOTION_DATABASE_ID
const cacheToken = env.CACHE_TOKEN
const ignoreCache = env.FORCE_REFRESH

function go() {
  if (testPageId) {
    runTest()
  } else {
    run()
  }
}

async function run() {
  console.log('🏭')

  let pages = [''];

  try {
    console.log(`1. Fetching publishable pages from Database #${db}`)
    pages = await fetchAllPages(db)
  }
  catch (e) {
    console.error('💥🙉 Abort! Abort!', e)
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
      (e, stdout, stderr) => {
        if (e) {
          console.log(` › error: ${e.message}`);
          return;
        }
        if (stderr && !stderr.includes('Debugger attached')) {
          console.log(` › stderr: ${stderr}`);
          return;
        }
        console.log(` › ${stdout.trim()}`);
      });
  }
  console.log(`⟢ FIN ⟣\n`)
}

async function runTest() {
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

  if (!pageJSON || testPageId !== cacheToken || ignoreCache) {
    try {
      console.log(`1a. Cache empty or broken. Fetching fresh page data for #${testPageId}`)
      pageJSON = await fetchFullPage(testPageId)
    }
    catch (e) {
      console.error('💥🙉 Abort! Abort!', e, testPageId)
      return
    }

    try {
      console.log('1b. Writing to test cache.')
      await fs.writeFile(testPagePath, JSON.stringify(pageJSON, null, 2))
      exec(
        `perl -pi.bak -e 's/CACHE_TOKEN=.*/CACHE_TOKEN=${testPageId}/g' .env; rm .env.bak`,
        (e, stdout, stderr) => {
          if (e) {
            console.log(`1b. error: ${e.message}`);
            return;
          }
          if (stderr) {
            console.log(`1b. stderr: ${stderr}`);
            return;
          }
          console.log(`1b. ${stdout.trim()}`);
        });
    }
    catch (e) {
      console.warn(`FYI: Unable to save cache to ${testPagePath}: ${e}`)
    }
  }

  let renderedPage = '';

  try {
    console.log(`2. Rendering data`)
    renderedPage = h.renderPage(pageJSON)
  }
  catch (e) {
    console.log(`💥🐛 Mayday! Mayday!:\n\n${e}\n\njson ↴\n${JSON.stringify(pageJSON)}\n\n`)
    return
  }

  try {
    const sveltePath = join(out, 'test.svelte')
    console.log(`3. Writing rendered Svelte page to ${sveltePath}`)
    await fs.writeFile(sveltePath, renderedPage)
    console.log(`⟢ FIN ⟣\n`)
  } catch (e) {
    console.log(`⚰️ Dead at the finish line: ${e}`)
    return
  }
}

go()