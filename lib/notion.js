import { Client } from "@notionhq/client"
import env from '../env.js'

const apiKey = env.NOTION_API_KEY;
const db = env.NOTION_DATABASE_ID;
const notion = new Client({ auth: apiKey })

export async function fetchAllPages(dbId = db) {
  try {
    const resource = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Publish me!'
        }
      }
    })
    return resource.results
  } catch (error) {
    console.error(`💥 Database Access Error: ${error}\ndatabase_id: ${dbId}`)
  }
}

export async function fetchPageBlocks(page) {
  try {
    // Support either the ID or the page object (if avail.)
    const pageId = page.id || page
    const results = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    })
    return results.results
  } catch (error) {
    console.error('💥', error)
  }
}

export const pageTitle = (page) => page.properties.Name.title

export const slug = (page) => page.properties.Slug[page.properties.Slug.type][0].plain_text

export const plain = (title) => title.reduce(
  (acc, curr, idx) => acc + curr.plain_text,
  "")
