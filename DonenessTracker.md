# MVP — Full Stack Transformation: just title and plaintext

§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

-

# 🐝 Tasks/Ideas

- Add functional Toggle component
- Pass svelte output through https://github.com/sveltejs/prettier-plugin-svelte
- Add password-based Admin mode with links back to Notion pages
  - MVP: security through obscurity -> type secret into the void to magically toggle
  - Later: Add actual Auth^2, but still with no affordances
- Choose a set of pages to release as the first version of the site, and test each one, fixing what are sure to be numerous issues, as they crop up. Note that this is (still) not about getting the layout and cosmetic design right. It's about ensuring that the functionality will work as hoped for, and also getting a feel for the sorts of future modifications I'm likely to want on this list! ↓
- Improve support for numbered items (currently have no way to get the number shown in Notion, which means having to maintain a stateful count to show the right number which means a bit more careful thinking, architecturally.)
- Download and embed images so that Amazon expiry timestamps don't break the site.
- Add a Katex interpreter for `expression`s?
- Experiment with having the script do a git commit after successfully saving. Here, I suspect, many monsters lurk, so probably the first working something will be pretty problematic
- Mark the transformed page `4. Published` in Notion

# Icebox

- Side note: I think image embeds are going to be an issue pretty soon. Consider asking for help with this piece!!!
- Publish to npm
- Extract page processing from db access so that individual pages can be targeted for rapid exploration
- Replace App.svelte with version that has the animated logo centered
- Duplicate barebones leveluptuts blog index page
- Add config for custom component names so that naming conflicts can be avoided.
- Default to `prerender=true`?
