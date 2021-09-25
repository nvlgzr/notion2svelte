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

export const fetchFullPage = async (pageId) => {
  const page = await fetchPageRoot(pageId)
  const blocks = await fetchBlocks(pageId)
  page.blocks = blocks;

  return page
}

export const fetchPageRoot = async (pageId) =>
  notion.pages.retrieve({ page_id: pageId });

export const fetchBlocks = async (parentId) => {
  const injectChildren = async (block, fetcher) => {
    const response = await fetcher(block.id);
    return { ...block, blocks: response };
  }

  const fetchedBlocks = await notion.blocks.children.list({
    block_id: parentId,
    page_size: 100,
  })

  if (fetchedBlocks.has_more) console.log('🚨⚠️🚨️ Pagination Encountered! 📄📄📄')

  const blocks = fetchedBlocks.results
  const result = Promise.all(
    blocks.map((b) => {
      if (b.has_children) {
        return injectChildren(b, fetchBlocks);
      }
      return Promise.resolve({ ...b });
    })
  );
  return result;
}

