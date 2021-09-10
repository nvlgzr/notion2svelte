import dotenv from 'dotenv'

dotenv.config()

const apiKey = process.env.NOTION_API_KEY;
const dbId = process.env.NOTION_DATABASE_ID;

console.log("Greetings, Planet! 👽", ` Here are your apiKey and dbId, respectively: ${apiKey} ${dbId}`);
