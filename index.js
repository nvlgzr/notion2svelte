import { promises as fs } from "fs";
import { join } from 'path'
import { exec } from 'child_process'
import { fetchAllPages, fetchFullPage } from './lib/notion.js'
import { resolveTilde } from './lib/resolve-tilde.js'
import h, { slug } from './lib/sveltifier.js'
import env from './env.js'

const out = env.OUTPUT_PATH;

async function go() {
  let pages = [''];
  let fake;
  try {
    const page = await fs.readFile("./nested-text.json", "utf-8")
    fake = JSON.parse(page)
  } catch (error) {
    pages = await fetchAllPages()
  }

  for (let page of pages) {
    if (fake) page = fake
    const path = join(resolveTilde(out), slug(page) + '.svelte')
    const fullPage = fake ? fake : await fetchFullPage(page.id)

    const jpath = join('./', slug(page) + '.json')
    await fs.writeFile(jpath, JSON.stringify(fullPage, null, 2))

    const contents = h.renderPage(fullPage)

    await fs.writeFile(path, contents)

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
}

go()