§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

# 🐝 Tasks/Ideas

Add support for…

- PageCover (cover photo & icon)
  `page.cover.type` → `page.cover.external.url` ✅
  → page.cover is null
  "(only type of "external" is supported currently)"
  `page.icon.type` → `page.icon.emoji` ✅
  → `page.icon.file.url` (includes expiry_time…which I don't currently need)
  → `page.icon.external.url`
  → page.icon is null

- Sub-pages

- Question: Do all block types currently support children correctly???
- Notion API Explorer: hover over a block to see its JSON.
- Duplicate barebones leveluptuts blog index page
- Implement internal links
- Implement child_page blocks (currently, notion2svelte is rendering sub-pages inline!)
- Add config for custom component names so that naming conflicts can be avoided.

# Icebox

- Choose a set of pages to release as the first version of the site, and test each one, fixing what are sure to be numerous issues, as they crop up. Note that this is (still) not about getting the layout and cosmetic design right. It's about ensuring that the functionality will work as hoped for, and also getting a feel for the sorts of future modifications I'm likely to want on this list! ↓

- Change the transformed page's Status to `Published` in Notion (w/appropriate .env override)
- Add a Katex interpreter for `expression`s?
- Experiment with having the script do a git commit after successfully saving. Here, I suspect, many monsters lurk, so probably the first working something will be pretty problematic
- Publish to npm
- Default to `prerender=true`?
- Add password-based Admin mode with links back to Notion pages
  - MVP: security through obscurity -> type secret into the void to magically toggle
  - Later: Add actual Auth^2, but still with no affordances
