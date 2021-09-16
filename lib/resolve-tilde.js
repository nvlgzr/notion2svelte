import os from 'os'

/**
 * Resolves paths that start with a tilde to the user's home directory.
 *
 * @param  {string} filePath '~/GitHub/Repo/file.png'
 * @return {string}          '/home/bob/GitHub/Repo/file.png'
 * 
 * Courtesy https://stackoverflow.com/questions/21077670/expanding-resolving-in-node-js
 */
export function resolveTilde(filePath) {
  if (!filePath || typeof (filePath) !== 'string') {
    return '';
  }

  // '~/folder/path' or '~' not '~alias/folder/path'
  if (filePath.startsWith('~/') || filePath === '~') {
    return filePath.replace('~', os.homedir());
  }

  return filePath;
}
