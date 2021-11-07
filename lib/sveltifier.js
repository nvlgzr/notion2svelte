import { join } from 'path'
import { existsSync } from 'fs'
import { exec } from 'child_process'
import { resolveTilde } from './resolve-tilde.js'
import { setSlugForId } from './slug-map.js'
import romans from 'romans'
import alphaCount from './alphaCount.js';
import env from '../env.js'
import { decorateBlockContent as h, decorateInlineContent, warning } from './decorators.js'

const staticOrPublicFolder = resolveTilde(env.OUTPUT_STATIC_FOLDER);
const ignoreCache = env.FORCE_REFRESH

const richText = subTexts => subTexts.map(s => decorateInlineContent(s)).join('');

export const pageTitle = (page, titleFieldName = "Name") => {
  return page.properties[titleFieldName].title
}

export const slug = (page) =>
  page.properties.Slug[page.properties.Slug.type][0].plain_text

export const stripDashes = (pageId) => pageId.replace(/-/g, '')

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

/**
 * 
 * @param {object} page Notion `page` object
 * @param {string} titleFieldName Defaults to "Name"
 * @returns String that can be saved as a valid (🤞) Svelte file
 * 
 * Note: it feels a little bit wrong to have the file editing side-
 *       effect a the end of this function. Other ideas welcome! 😀
 */
export function renderPage(page, titleFieldName) {
  const titleText = plain(pageTitle(page, titleFieldName))
  const coverURL = page.cover !== null && page.cover.external.url || ''
  const icon = page.icon !== null && (page.icon.emoji ?? page.icon.file?.url ?? page.icon.external?.url ?? '') || ''
  const pageCover = (coverURL || icon) && (h.cover(coverURL, icon) ?? '')
  const pathToComponents = "$lib/notion2svelte"
  let script = `\
      <script>
        import Cover from "${pathToComponents}/Cover.svelte"
        import Title from "${pathToComponents}/Title.svelte"
        import BulletedListItem from "${pathToComponents}/BulletedListItem.svelte"
        import Callout from "${pathToComponents}/Callout.svelte"
        import ChildPage from "${pathToComponents}/ChildPage.svelte"
        import Divider from "${pathToComponents}/Divider.svelte"
        import Image from "${pathToComponents}/Image.svelte"
        import IndentGroup from "${pathToComponents}/IndentGroup.svelte"
        import InlineCode from "${pathToComponents}/InlineCode.svelte"
        import InlineColor from "${pathToComponents}/InlineColor.svelte"
        import Magic from "${pathToComponents}/Magic.svelte"
        import NumberedListItem from "${pathToComponents}/NumberedListItem.svelte"
        import Quote from "${pathToComponents}/Quote.svelte"
        import TodoItem from "${pathToComponents}/TodoItem.svelte"
        import Toggle from "${pathToComponents}/Toggle.svelte"

        let curtainDrawn = true
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
        renderedBlocks += `<Magic page={JSON.stringify(${JSON.stringify(page, null, 2)}, null, 2)} block={JSON.stringify(${JSON.stringify(block, null, 2)}, null, 2)} show={curtainDrawn}>${comp}</Magic> ${h.br}`
      }
    } catch (e) {
      const message = `\n🚨 Top Level #${block.id} →\n\n${e}\n\nblock →\n${JSON.stringify(block)}`
      renderedBlocks += `<!-- ${message}\n\ntrace → ${e.stack} -->`
      console.log(message + '😳')
    }
  }

  html += `
  ${renderedBlocks}
  `

  setSlugForId(stripDashes(page.id), slug(page))

  return h.headTitle(titleText) + script + html
}

function renderBlock(block, slug, outliner = new Outliner()) {
  const type = block.type

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
      } else if (block.type === 'child_page') {
        return h.childPage(block.child_page.title, renderedChildren)
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
      case 'child_page':

        return warning('child_page', block.child_page.title, "has no content")

      case 'image':
        try {
          const originalURL = block.image.file?.url || block.image.external.url;
          const renderedURL = resolveNotionImageURL(originalURL, slug, block.id)
          const caption = block.image.caption

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
        } catch (e) {
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
