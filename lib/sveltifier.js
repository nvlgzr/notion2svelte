import log from './log.js'

import { fetchPageBlocks, plain, pageTitle, slug } from './notion.js'
import { resolveTilde } from './resolve-tilde.js'

const h = {
  renderPage: renderPage,
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br style="display:none;"/>\n',
  titleText: page => richText(page.Title.title),
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<Title>${title}</Title>\n`,
  heading_1: contents => `<h1>${contents}</h1>`,
  heading_2: contents => `<h2>${contents}</h2>`,
  heading_3: contents => `<h3>${contents}</h3>`,
  paragraph: contents => `<p>${contents}</p>`,
  div: contents => `<div>${contents}</div>`,
  todo: (checked, contents) => `<TodoItem checked={${checked}}>${JSON.stringify(contents)}</TodoItem>`,
  bulleted_list_item: (contents) => `<BulletedListItem>${JSON.stringify(contents)}</BulletedListItem>`,
  numbered_list_item: (contents) => `<NumberedListItem>${JSON.stringify(contents)}</NumberedListItem>`,
  image: (url, caption) => `<Image url="${url}" caption="${caption}" />`,
}
export default h;

const richText = blockExtras => blockExtras.map(s => enrich(s)).join('');

function enrich(span) {
  const b = t => `<strong>${t}</strong>`;
  const i = t => `<em>${t}</em>`;
  const s = t => `<s>${t}</s>`;
  const u = t => `<span style="text-decoration:underline;">${t}</span>`;
  const c = t => `<InlineCode>${t}</InlineCode>`;
  const l = (t, color) => `<InlineColor value='${color ?? "inherit"}'>${t}</InlineColor>`;
  const x = (t) => '⟣' + c(t) + '⟢';
  const k = (t, url) => `<a href="${url}">${t}</a>`;

  // See this [open Svelte issue](https://github.com/sveltejs/svelte/issues/4731) for details
  const fixEdgeSpaces = t => t.replace(/(^ | $)/g, '&thinsp;');

  let rendered = fixEdgeSpaces(span.plain_text)

  if (span.annotations.bold) rendered = b(rendered)
  if (span.annotations.italic) rendered = i(rendered)
  if (span.annotations.strikethrough) rendered = s(rendered)
  if (span.annotations.underline) rendered = u(rendered)
  if (span.annotations.code) rendered = c(rendered)
  if (span.annotations.color) rendered = l(rendered, span.annotations.color)
  if (span[span.type].expression) rendered = x(rendered)
  if (span[span.type].link?.url?.length)
    rendered = k(rendered, span[span.type].link.url, '🩸')

  return rendered
}

const plainText = blockExtras => blockExtras.map(s => s.plain_text).join('');

async function renderPage(page) {
  const titleText = plain(pageTitle(page))
  const title = + h.title(titleText);
  let scriptChunks = new Set([
    'import Title from "$lib/notion2svelte/Title.svelte"',
    'import InlineCode from "$lib/notion2svelte/InlineCode.svelte"',
    'import InlineColor from "$lib/notion2svelte/InlineColor.svelte"',
  ])
  let html = h.title(titleText);
  let renderedBlocks = '';

  const blocks = await fetchPageBlocks(page);

  for (let block of blocks) {
    try {
      if (block.type !== 'unsupported') {
        const [comp, code] = renderBlock(block)
        renderedBlocks += comp + h.br
        scriptChunks.add(code)
      }
    } catch (error) {
      const message = `🚨 Error → ${error} | block → ${JSON.stringify(block)}`
      renderedBlocks += `<!-- ${message} -->`
      log(message)
    }
  }

  scriptChunks.add(`\nlet curtainDrawn = false`)

  html += `
{#if !curtainDrawn }
  ${renderedBlocks}
{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify(${JSON.stringify(blocks, null, 2)}, null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify(${JSON.stringify(page, null, 2)}, null, 2)}</pre>
{/if}
  `

  let script = `
<script>
${Array.from(scriptChunks).join('\n')}
</script>

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by ${process.env.npm_package_name} ${process.env.npm_package_version} 𒅒</button>
`
  // ↑ This npm stuff is mainly just an excuse to remind myself of this
  //   interesting-but-probably-useless-to-me tip that I encountered the
  //   other day, presented as a package.json _script_ entry:
  //
  //   `"check-env": "node -e 'console.log(process.env)' | grep npm"

  return h.headTitle(titleText) + script + html
}

function renderBlock(block) {
  const type = block.type

  if (block.unsupported)
    return ['<div style="padding: 2rem; outline: plain silver solid">💥</div>', '']

  if (block.has_children)
    return [h.paragraph(`(<b>${type}</b> has children)`), '']

  switch (type) {
    // case 'child_page':
    //   log(block) // TODO: Create a link to the given page using block[block.type].title and a link created from block.id (?)

    case 'image':
      return [h.image(
        block.image.file.url,
        richText(block.image.caption)
      ), "import Image from '$lib/notion2svelte/Image.svelte';"]

    case 'to_do':
      return [h.todo(
        block.to_do.checked,
        richText(block.to_do.text)
      ), "import TodoItem from '$lib/notion2svelte/TodoItem.svelte';"]

    case 'bulleted_list_item':
      return [h.bulleted_list_item(
        richText(block.bulleted_list_item.text)
      ), 'import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte";']

    case 'numbered_list_item':
      return [h.numbered_list_item(
        richText(block.numbered_list_item.text)
      ), 'import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte";']

    default:
      if (h[type]) {
        return [h[type](richText(block[type].text)), '']
      }
  }
  return [type, '']
}