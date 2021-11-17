§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

# 🐝 Tasks/Ideas

- Replace standard HTML outputs with the more powerful Svelte components. For the MVP implementation, just output whatever we currently use… paragraph→div, heading_1→h1.
- Provide all components with standard, highly-reduced inputs from the incoming JSON:
  - page
    - id
    - title
    - slug
    - created_on
    - last_edited
  - block*
    - id
    - Set `HEAVY_PAYLOADS=true` in .env to send the block's entire JSON instead of just the ID, in order to support Inspection mode.
- Update ReadMe
  - Remember to call out keyboard interactions:
    - O: Displays sub-pages. Not sure why I chose 'O'
    - D: Distraction mode (shows external links)
    - I: Inspector mode
- Publish to npm

# Icebox

- Implement `video` and `file` types
- Add config for custom component names so that naming conflicts can be avoided.
- Change the transformed page's Status to `Published` in Notion (w/appropriate .env override)
- Add a Katex interpreter for `expression`s?
- Experiment with having the script do a git commit after successfully saving. Here, I suspect, many monsters lurk, so probably the first working something will be pretty problematic
- Default to `prerender=true`?
- Add password-based Admin mode with links back to Notion pages
  - MVP: security through obscurity -> type secret into the void to magically toggle
  - Later: Add actual Auth^2, but still with no affordances
- Implement all `mention` types
- Implement `bookmark`?
- Implement `table_of_contents`?
- Implement `breadcrumb`?
- Implement `link_preview` (Not sure how to make one of these in Notion 😬)
- Add support for auto-linking raw URLs
