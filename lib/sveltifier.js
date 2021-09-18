import log from './log.js'

export default {
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br style="display:none;"/>\n',
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<title>${title}</title>\n`,
  heading_1: contents => `<h1>${contents}</h1>`,
  heading_2: contents => `<h2>${contents}</h2>`,
  heading_3: contents => `<h3>${contents}</h3>`,
  paragraph: contents => `<p>${contents}</p>`,
  div: contents => `<div>${contents}</div>`,
  fromNotion: fromNotion,
  todo: (checked, contents) => `<TodoItem checked={${checked}}>${JSON.stringify(contents)}</TodoItem>`,
  bulleted_list_item: (contents) => `<BulletedListItem>${JSON.stringify(contents)}</BulletedListItem>`,
  numbered_list_item: (contents) => `<NumberedListItem>${JSON.stringify(contents)}</NumberedListItem>`,
  image: (url, caption) => `<Image url="${url}" caption="${caption}" />`,
}

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
  if (span[span.type].link?.length)
    rendered = k(rendered, span[span.type].content.link.url)

  return rendered
}

function fromNotion(block) {
  const plainText = blockExtras => blockExtras.map(s => s.plain_text).join('');
  const richText = blockExtras => blockExtras.map(s => enrich(s)).join('');

  if (block.unsupported)
    return ['<div style="padding: 2rem; outline: plain silver solid">💥</div>', '']

  if (block.has_children)
    return [this.paragraph(`(<b>${block.type}</b> has children)`), '']

  const t = block.type
  switch (t) {
    // case 'child_page':
    //   log(block) // TODO: Create a link to the given page using block[block.type].title and a link created from block.id (?)

    case 'image':
      return [this.image(
        block.image.file.url,
        richText(block.image.caption)
      ), "import Image from '$lib/notion2svelte/Image.svelte';"]

    case 'to_do':
      return [this.todo(
        block.to_do.checked,
        richText(block.to_do.text)
      ), "import TodoItem from '$lib/notion2svelte/TodoItem.svelte';"]

    case 'bulleted_list_item':
      return [this.bulleted_list_item(
        richText(block.bulleted_list_item.text)
      ), 'import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte";']

    case 'numbered_list_item':
      return [this.numbered_list_item(
        richText(block.numbered_list_item.text)
      ), 'import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte";']

    default:
      if (this[t]) {
        return [this[block.type](richText(block[block.type].text)), '']
      }
  }
  return [block.type, '']
}