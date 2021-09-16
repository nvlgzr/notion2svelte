# MVP — Full Stack Transformation: just title and plaintext

§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

-

# 🐝 Tasks/Ideas

- ~~Create two samples of the kind of output I'm expecting and use them to test the svelte side of things.~~

- Save {title}.svelte
- For each incoming page, replace title with post title and output to {title}.svelte
- For each incoming page, for each block, output a div with that block's plain_text
- Run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/` & verify that pages show up in the Svelte app
- Goof around and have fun!

- For each incoming page, output to a specific directory: `npm run start -- --output=../myproj/src/routes/blog/` → foo.svelte. Contents, something like
    <h1>Dummy Title</h1> // how to integrate w/_layout, again?
    <div>First block</div>
    <div>Second block</div>
    …

# Icebox

- Replace App.svelte with version that has the animated logo centered
- Duplicate barebones leveluptuts blog index page
