import log from './lib/log.js'
import dotenv from 'dotenv'
import { Client } from "@notionhq/client"

dotenv.config()

const apiKey = process.env.NOTION_API_KEY;
const dbId = process.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: apiKey })

async function fetchAllPages() {
  try {
    const response = await notion.databases.query({
      database_id: dbId,
    })
    const results = response.results
    console.log(JSON.stringify(results, null, 2))

  } catch (error) {
    console.error('💥', error)
  }
}

fetchAllPages()
