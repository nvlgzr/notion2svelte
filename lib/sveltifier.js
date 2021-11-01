import { join } from 'path'
import { existsSync } from 'fs'
import { exec } from 'child_process'
import { resolveTilde } from './resolve-tilde.js'
import romans from 'romans'
import alphaCount from './alphaCount.js';
import env from '../env.js'

const staticOrPublicFolder = resolveTilde(env.OUTPUT_STATIC_FOLDER);
const ignoreCache = env.FORCE_REFRESH

// TODO: Export this to more clearly illustrate that it's independent of Notion's API structure
const h = {
  renderPage: renderPage,
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br style="display:none;"/>\n',
  divider: "<Divider />\n",
  titleText: page => richText(page.Title.title),
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<Title>${title}</Title>\n\n`,
  cover: (coverURL, iconEmoji) => `<PageCover coverURL={"${coverURL}"} iconEmoji={"${iconEmoji}"} />`,
  heading_1: contents => `<h1>${contents}</h1>\n`,
  heading_2: contents => `<h2>${contents}</h2>\n`,
  heading_3: contents => `<h3>${contents}</h3>\n`,
  paragraph: contents => `<div>\n${contents}\n</div>\n`,
  div: contents => `<div>\n${contents}\n</div>\n`,
  todo: (checked, contents) =>
    `<TodoItem checked={${checked}}>${JSON.stringify(contents)}</TodoItem>\n`,
  bulleted_list_item: (contents) =>
    `<BulletedListItem>${JSON.stringify(contents)}</BulletedListItem>\n`,
  numbered_list_item: (contents, outlineSymbol) =>
    `<NumberedListItem number=${outlineSymbol}> ${contents}</NumberedListItem>\n`,
  callout: (root, emoji, children) => children
    ? `<Callout emoji="${emoji}">${root}<span slot="children">${children}</span></Callout>`
    : `<Callout emoji="${emoji}">${root}</Callout>`,
  quote: (root, children) => children ? `<Quote>${root}<span slot="children">${children}</span></Quote>` : `<Quote>${root}</Quote>`,
  toggle: (root, children) => `<Toggle>${root}\n<span slot="children">${children ? children : ''}</span></Toggle>`,
  image: (url, caption) =>
    `<Image url="${url}">${caption}</Image>\n`,
  indent: (contents) =>
    `\
<IndentGroup>
  ${contents}
</IndentGroup>
`,
}
export default h;

const richText = blockExtras => blockExtras.map(s => enrich(s)).join('');

function enrich(span) {
  const b = t => `<strong>${t}</strong>`;
  const i = t => `<em>${t}</em>`;
  const s = t => `<s>${t}</s>`;
  const u = t => `<span style="text-decoration:underline;">${t}</span>`;
  const c = t => `<InlineCode>${t}</InlineCode>`;
  const l = (t, color) => color === 'default' ? t : `<InlineColor value='${color ?? "inherit"}'>${t}</InlineColor>`;
  const x = (t) => '⟣' + c(t) + '⟢';
  const k = (t, url) => `<a href="${url}">${t}</a>`;

  // See this [open Svelte issue](https://github.com/sveltejs/svelte/issues/4731) for details
  const fixEdgeSpaces = t => t.replace(/(^ | $)/g, '&thinsp;');
  const cr2br = t => t.replace(/\n/g, '\n<br />\n');

  let firstFix = fixEdgeSpaces(span.plain_text)
  let secondFix = cr2br(firstFix)
  let rendered = secondFix.replace('\"', '"')

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

export const pageTitle = (page, titleFieldName = "Name") => {
  return page.properties[titleFieldName].title
}

export const slug = (page) =>
  page.properties.Slug[page.properties.Slug.type][0].plain_text

export const plain = (title) => title.reduce(
  (acc, curr, idx) => acc + curr.plain_text,
  "")

export const plainText = blockExtras =>
  blockExtras.map(s => s.plain_text).join('');

class Outliner {
  constructor(count = 0, format = 0) {
    this.count = count;
    this.format = format;
  }
  formatName() {
    return ['decimal', 'letter', 'roman'][this.format]
  }
  formatted() {
    switch (this.format) {
      case 1: // 'letter'
        return alphaCount(this.count)
        break;

      case 2: // 'roman'
        return romans.romanize(this.count + 1).toLowerCase() // The Romans hadn't invented zero yet…
        break;

      default: // 'decimal'
        return this.count + 1; // Display counting starts at 1, not zero 😉
        break;
    }

  }
  step() {
    ++this.count
  }
  stepFormat() {
    this.count = 0;
    this.format = (this.format + 1) % 3
  }
  reset() {
    this.count = 0;
    this.format = 0;
  }
}

function renderPage(page, titleFieldName) {
  const titleText = plain(pageTitle(page, titleFieldName))
  const coverURL = page.cover[page.cover.type].url ?? ''
  const iconEmoji = page.icon[page.icon.type] ?? ''
  const pageCover = coverURL ? h.cover(coverURL, iconEmoji) : ''
  const pathToComponents = "$lib/notion2svelte"
  let script = `\
<script>
  import PageCover from "${pathToComponents}/PageCover.svelte"
  import Title from "${pathToComponents}/Title.svelte"
  import BulletedListItem from "${pathToComponents}/BulletedListItem.svelte"
  import Callout from "${pathToComponents}/Callout.svelte"
  import Divider from "${pathToComponents}/Divider.svelte"
  import Image from "${pathToComponents}/Image.svelte"
  import IndentGroup from "${pathToComponents}/IndentGroup.svelte"
  import InlineCode from "${pathToComponents}/InlineCode.svelte"
  import InlineColor from "${pathToComponents}/InlineColor.svelte"
  import NumberedListItem from "${pathToComponents}/NumberedListItem.svelte"
  import Quote from "${pathToComponents}/Quote.svelte"
  import TodoItem from "${pathToComponents}/TodoItem.svelte"
  import Toggle from "${pathToComponents}/Toggle.svelte"

  let curtainDrawn = false
</script>
`
  let html = `\
  ${pageCover}
  ${h.title(titleText)}

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by ${process.env.npm_package_name} ${process.env.npm_package_version} 𒅒</button>
`;
  // ↑ This npm stuff is mainly just an excuse to remind myself of this
  //   interesting-but-probably-useless-to-me tip that I encountered the
  //   other day, presented as a package.json _script_ entry:
  //
  //   `"check-env": "node -e 'console.log(process.env)' | grep npm"

  let renderedBlocks = '';
  const blocks = page.blocks;
  const outliner = new Outliner()

  for (let block of blocks) {
    try {
      if (block.type !== 'unsupported') {
        const comp = renderBlock(block, slug(page), outliner)
        renderedBlocks += comp + h.br
      }
    } catch (e) {
      const message = `\n🚨 Top Level #${block.id} →\n\n${e}\n\nblock →\n${JSON.stringify(block)}`
      renderedBlocks += `<!-- ${message}\n\ntrace → ${e.stack} -->`
      console.log(message + '😳')
    }
  }

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

  return h.headTitle(titleText) + script + html
}

// formats: 0: 'decimal', 1: 'letter', 2: 'roman']
const n = {
  decimal: 0,
  format: 0,
}

function renderBlock(block, slug, outliner = new Outliner()) {
  const type = block.type

  let rendered = ''
  let error = ''

  try {

    if (block.type !== 'numbered_list_item') {
      outliner.reset()
    }

    if (block.unsupported)
      return '<div style="padding: 2rem; outline: plain silver solid">💥</div>'

    if (block.has_children) {
      const outlinerForChildren = new Outliner(0, outliner.format + 1)
      const renderedChildren = block.blocks.map(b => {
        try {
          return renderBlock(b, slug, outlinerForChildren)
        } catch (e) {
          throw new Error(`Children of #${block.id} failed: ${e.message}\n\ntrace → ${e.stack}`)
        }
      }).join('')

      if (block.type === 'callout') {
        try {
          return h.callout(richText(block.callout.text), block.callout.icon.emoji, renderedChildren)
        } catch (e) {
          throw new Error(`Callout #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }
      } else if (block.type === 'toggle') {
        try {
          return h.toggle(richText(block.toggle.text), renderedChildren)
        } catch (e) {
          throw new Error(`Toggle #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }
      } else if (block.type === 'quote') {
        try {
          return h.quote(richText(block.quote.text), renderedChildren)
        } catch (e) {
          throw new Error(`Quote #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }
      } else {
        try {
          const renderedParent = renderBlock({ ...block, slug, has_children: false }, outliner)
          return renderedParent + h.indent(renderedChildren)
        } catch (e) {
          throw new Error(`፠ Block #${block.id} ፠\n ${e.message}\n\ntrace → ${e.stack}`)
        }
      }
    }

    switch (type) {
      // case 'child_page':
      //   log(block) // TODO: Create a link to the given page using block[block.type].title and a link created from block.id (?)

      case 'image':
        try {
          const originalURL = block.image.file?.url || block.image.external.url;
          const renderedURL = resolveNotionImageURL(originalURL, slug, block.id)
          const caption = block.image.caption

          console.log('🔫', caption, block.image.caption)

          return h.image(
            renderedURL,
            richText(caption)
          )
        } catch (e) {
          throw new Error(`Image #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }

      case 'to_do':
        try {
          return h.todo(
            block.to_do.checked,
            richText(block.to_do.text)
          )
        } catch (e) {
          throw new Error(`To-Do #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }

      case 'bulleted_list_item':
        try {
          return h.bulleted_list_item(
            richText(block.bulleted_list_item.text)
          )
        } catch (e) {
          throw new Error(`Bullet #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }

      case 'numbered_list_item':
        try {
          let outlineSymbol = outliner.formatted();
          outliner.step()

          return h.numbered_list_item(
            richText(block.numbered_list_item.text),
            outlineSymbol
          )
        } catch {
          throw new Error(`Number #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }

      case 'callout':
        try {
          return h.callout(richText(block.callout.text), block.callout.icon.emoji)
        } catch (e) {
          throw new Error(`Callout #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }

      case 'divider':
        return h.divider

      default:
        try {
          if (h[type]) {
            return h[type](richText(block[type].text))
          }
        } catch {
          throw new Error(`${h[type]} #${block.id}: ${e.message}\n\ntrace → ${e.stack}`)
        }
    }
    return type
  } catch (aggregate) {
    throw new Error(`Render error: ${aggregate}`)
  }
}

function resolveNotionImageURL(url, slug, blockId) {
  const imageURL = join('/images/', slug, `${blockId}.jpg`)
  const fileTarget = join(staticOrPublicFolder, imageURL)
  if (!existsSync(fileTarget) || ignoreCache) {
    download(fileTarget, url)
  }
  return imageURL
}

function download(fileTarget, url) {
  exec(
    `curl --create-dirs --output ${fileTarget} '${url}'`,
    (e, stdout, stderr) => {
      if (e) {
        console.log(`Image download error: ${e.message}\n\ntrace → ${e.stack}`);
        return;
      }
      if (stderr) {
        console.log(`🖼 ${url} ⇒ ${fileTarget}↴\n${stderr}`);
        return;
      }
      console.log(`Image download ${stdout.trim()}`);
    }
  )
}
