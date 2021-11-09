/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

const handleError = ({ status, path, referrer, referenceType }) => {
  if (path.startsWith('/blog')) throw new Error('Missing a blog page!');
  console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
};

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),
    prerender: {
      onError: handleError
    }
  }
};

export default config;
