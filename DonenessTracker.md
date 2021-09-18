# MVP — Full Stack Transformation: just title and plaintext

§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

-

# 🐝 Tasks/Ideas

- Add support for rendering annotations in text blocks:
  - Remaining Annotations
    - color
- Add support for rendering child blocks (e.g., indented):
  - All Block types. The ones in bold have a `children` block representing indented blocks
    - **paragraph**
    - heading_1
    - heading_2
    - heading_3
    - **bulleted_list_item**
    - **numbered_list_item**
    - **to_do**
    - **toggle**
    - **child_page**
    - embed
    - image
    - video
    - file
    - pdf
    - bookmark
    - unsupported
- Improve support for numbered items (currently have no way to get the number shown in Notion, which means having to maintain a stateful count to show the right number which means a bit more careful thinking, architecturally.)

# Icebox

- Replace App.svelte with version that has the animated logo centered
- Duplicate barebones leveluptuts blog index page
