import { promises as fs, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

function ensureDirectoryExistence(filePath) {
  var dir = dirname(filePath);
  if (existsSync(dir)) {
    return true;
  }
  ensureDirectoryExistence(dir);
  mkdirSync(dir);
}

export { ensureDirectoryExistence, fs, join };
