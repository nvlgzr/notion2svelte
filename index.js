import log from './lib/log.js'
import dotenv from 'dotenv'
import { Client } from "@notionhq/client"

const envs = dotenv.config().parsed
const apiKey = envs.NOTION_API_KEY;
const dbId = envs.NOTION_DATABASE_ID;
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
