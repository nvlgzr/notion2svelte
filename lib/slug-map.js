import { readFileSync, writeFileSync } from 'fs';

const filename = 'lib/id-to-slug.json';

export const slugForId = (id) => {
  try {
    const slug = readMap().get(id)
    return slug ?? '';
  } catch (e) {
    console.log(`⚠️ Error attempting to read slug for Page #${id}. ${err}`)
    return '';
  }
}

export const setSlugForId = (id, slug) => {
  try {
    let map = readMap();
    map.set(id, slug);
    saveMap(map);
  } catch (e) {
    console.log(`🚨 setSlugForId failed: ${e}`);
  }
}

function readMap() {
  const json = readFileSync(filename, 'utf8');
  const jsonMap = JSON.parse(json);
  return new Map(jsonMap);
}

function saveMap(map) {
  const json = JSON.stringify(Array.from(map.entries()));
  writeFileSync(filename, json);
}