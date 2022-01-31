## 🐞 Known Bugs

See https://github.com/nvlgzr/notion2svelte/issues.

# 🐝 Tasks/Ideas

- More documentation tweaks
  - Ask for explicit help -> Doc design, code, usability
- Publish to npm
- Update **About _notion2svelte_**
  - Remember to call out keyboard interactions:
    - O: Displays sub-pages. Not sure why I chose 'O'
    - D: Distraction mode (shows external links)
    - I: Inspector mode

# Icebox

- Add support for page creation/last edit datetimes
- Update weird bottom-nav with something more menu-ish
  - To be truly practical, navigation should probably _not_ be done as I've shown it here, as this essentially requires the entire site to be re-fetched with _notion2svelte_ every time the nav changes. "This is a huge waste of resources." (←GitHub Copilot's response to the opening sentence.) Toy with options. E.g., straight-up Svelte-only, using file system to implicitly build the nav? and/or a separate _notion2svelte_-like tool to generate a component (used by _notion2svelte_?) to generate the nav?
- Add media queries to smooth out the worst layout bugs…possibly using https://github.com/cibernox/svelte-media? (I tried using https://www.npmjs.com/package/svelte-media-query but it didn't work)
- Implement `video` and `file` types
- Add support for auto-linking raw URLs
- Add config for custom component names so that naming conflicts can be avoided.
- Use the API to set the transformed page's Status to `Published` in Notion (w/appropriate .env override)
- Experiment with having the script do a git commit after successfully saving. Here, I suspect, many monsters lurk, so probably the first working something will be pretty problematic
- Default to `prerender=true`?
- Add password-based Admin mode with links back to Notion pages
  - MVP: security through obscurity -> type secret into the void to magically toggle
  - Later: Add actual Auth^2, but still with no affordances
- Implement all `mention` types
- Implement `bookmark`?
- Implement `table_of_contents`?
- Implement `breadcrumb`?
- Implement `link_preview`? (https://www.notion.so/guides/notion-api-link-previews-feature)
- Add a depth prop to bulleted list items — similar to what Numbered List Items get — in order to allow different bullet styles at different indentation levels