## 🐞 Known Bugs

# 🐝 Tasks/Ideas

- Fix ugly old design decisions:
  - Weird bottom-nav
- Rewrite _About notion2svelte_
  - Try to fix `code` blocks by doing a pre-emptive > → &lt replacement
  - Cut down to a diamond
    - Make a demo gif with Terminal in the middle for README page
    - Crystallize benefit to user
    - Ask for help -> Doc design, code, usability
- Document: 3 required props in db: Name, Slug & Status
- Publish to npm
- Update **About _notion2svelte_**
  - Remember to call out keyboard interactions:
    - O: Displays sub-pages. Not sure why I chose 'O'
    - D: Distraction mode (shows external links)
    - I: Inspector mode
- Create Guide
  - Specify Component interfaces
    - ColumnList
    - BulletedListItem
    - Callout
    - ChildPage
    - Column
    - Cover
    - Divider
    - divider
    - Embed
    - Equation
    - Header
    - HeroImage
    - Icon
    - Image
    - IndentGroup
    - InlineCode
    - InlineColor
    - Magic
    - MagicLink
    - NumberedListItem
    - Paragraph
    - Portal
    - Quote
    - Title
    - TodoItem
    - Toggle

# Icebox

- Add media queries to smooth out the worst layout bugs…possibly using https://github.com/cibernox/svelte-media? (I tried using https://www.npmjs.com/package/svelte-media-query but it didn't work)
- Implement `code` blocks
- Implement `video` and `file` types
- Add support for auto-linking raw URLs
- Add config for custom component names so that naming conflicts can be avoided.
- Change the transformed page's Status to `Published` in Notion (w/appropriate .env override)
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
