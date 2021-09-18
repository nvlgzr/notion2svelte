# MVP — Full Stack Transformation: just title and plaintext

§goal(
I can run `npm run dev -- --out="~/2-Ongoing/navelgazer/navelgazer.club/src/routes/the-storyteller/"` with 3 Notion pages in the "The Navelgazer Club" database, 2 set to "to publish" and 1 set to "probably trash", and get two pages, named exactly the title of each "to publish" page + ".svelte", and containing exactly an h1 of the title and subsequent paragraphs for every block, with "UNSUPPORTED" output for unsupported blocks. 😩
){
status: in progress, render: true
}

## 🐞 Known Bugs

- InlineColor components are getting generated on all blocks, including color="default". This is only visible in the output .svelte…not in the rendered page.

# 🐝 Tasks/Ideas

- Add a test suite, then use it to guide a bit of refactoring in preparation for new features
- Choose a set of pages to release as the first version of the site, and test each one, fixing what are sure to be numerous issues, as they crop up. Note that this is (still) not about getting the layout and cosmetic design right. It's about ensuring that the functionality will work as hoped for, and also getting a feel for the sorts of future modifications I'm likely to want on this list! ↓
- Add support for rendering child blocks (e.g., indented):
  - Update the test doc (or make a new one) with test scenarios
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
- Download and embed images so that Amazon expiry timestamps don't break the site.
- Add a Katex interpreter for `expression`s?
- Experiment with having the script do a git commit after successfully saving. Here, I suspect, many monsters lurk, so probably the first working something will be pretty problematic
- Mark the transformed page `4. Published` in Notion

# Icebox

- Publish to npm
- Extract page processing from db access so that individual pages can be targeted for rapid exploration
- Replace App.svelte with version that has the animated logo centered
- Duplicate barebones leveluptuts blog index page
- Add config for custom component names so that naming conflicts can be avoided.
