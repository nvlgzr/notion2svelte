import log from './lib/log.js'
import { Client } from "@notionhq/client"
import env from './env.js'

const apiKey = env.NOTION_API_KEY;
const dbId = env.NOTION_DATABASE_ID;
const notion = new Client({ auth: apiKey })

async function fetchAllPages() {
  try {
    const response = await notion.databases.query({
      database_id: dbId,
    })
    log(response.results, { label: 'all pages' })
  } catch (error) {
    console.error('💥', error)
  }
}

fetchAllPages()
