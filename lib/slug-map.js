import { readFileSync, writeFileSync } from 'fs';

const filename = 'notion2svelte_id-to-slug.json';

export const slugForId = (id) => {
  try {
    const slug = readMap().get(id);
    return slug ?? '';
  } catch (e) {
    console.log(`⚠️ Error attempting to read slug for Page #${id}. ${err}`);
    return '';
  }
};

export const setSlugForId = (id, slug) => {
  try {
    let map = readMap();
    map.set(id, slug);
    saveMap(map);
  } catch (e) {
    console.log(`🚨 setSlugForId failed: ${e}`);
  }
};

function readMap() {
  try {
    const json = readFileSync(filename, 'utf-8');
    const map = new Map(JSON.parse(json));
    return map;
  } catch (e) {
    // There's probably no map file yet.
    // We'll create it on write.
    return new Map();
  }
}

function saveMap(map) {
  const json = JSON.stringify(Array.from(map.entries()));
  writeFileSync(filename, json);
}
