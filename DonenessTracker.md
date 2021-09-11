// console.log(process.cwd())
/Users/c/Documents/1-Due/notion2svelte
Example Input
See allPagesReduced

# ToDo

## MVP the full stack

Note: Start with a working Svelte Kit app that has slug-based routing in play.

- For each incoming page, output to a specific directory: `npm run start -- --output=../myproj/src/routes/blog/` → foo.svelte. Contents, something like
    <h1>Dummy Title</h1> // how to integrate w/_layout, again?
    <div>First block</div>
    <div>Second block</div>
    …
- For each incoming page, replace title with post title and output to {title}.svelte
- For each incoming page, for each block, output a div with that block's plain_text
