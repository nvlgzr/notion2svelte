import { join } from "path";
import { existsSync } from "fs";
import { exec } from "child_process";
import { resolveTilde } from "./resolve-tilde.js";
import { setSlugForId } from "./slug-map.js";
import romans from "romans";
import alphaCount from "./alphaCount.js";
import env from "../env.js";
import {
  decorateBlockContent as h,
  decorateInlineContent,
  warning,
} from "./decorators.js";

const staticOrPublicFolder = resolveTilde(env.OUTPUT_STATIC_FOLDER);
const ignoreCache = env.FORCE_REFRESH;

// TODO: Extract this and other small helpers into reusable utils
// https://stackoverflow.com/questions/208105/remove-properties-from-objects-javascript
const removeProperty = (propKey, { [propKey]: propValue, ...rest }) => rest;

const richText = (subTexts, keepReturns = false) =>
  subTexts.map((s) => decorateInlineContent(s, keepReturns)).join("");

export const pageTitle = (page) => {
  return page.properties.Name.title;
};

export const slugFrom = (page) => {
  if (!page.properties.Slug[page.properties.Slug.type].length) {
    throw new Error(`Page #${page.id} has no slug`);
  }
  return page.properties.Slug[page.properties.Slug.type][0].plain_text;
};
export const stripDashes = (pageId) => pageId.replace(/-/g, "");

export const plain = (title) =>
  title.reduce((acc, curr, idx) => acc + curr.plain_text, "");

export const plainText = (blockExtras) =>
  blockExtras.map((s) => s.plain_text).join("");

class Outliner {
  constructor(count = 0, format = 0) {
    this.count = count;
    this.format = format;
  }
  formatName() {
    return ["decimal", "letter", "roman"][this.format];
  }
  formatted() {
    switch (this.format) {
      case 1: // 'letter'
        return alphaCount(this.count);
        break;

      case 2: // 'roman'
        return romans.romanize(this.count + 1).toLowerCase(); // The Romans hadn't invented zero yet…
        break;

      default:
        // 'decimal'
        return this.count + 1; // Display counting starts at 1, not zero 😉
        break;
    }
  }
  step() {
    ++this.count;
  }
  stepFormat() {
    this.count = 0;
    this.format = (this.format + 1) % 3;
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
  let icon;

  if (page.icon) {
    if (page.icon.emoji) {
      icon = page.icon.emoji;
    } else {
      const url = page.icon.file?.url ?? page.icon.external?.url ?? "";
      if (url.length) {
        icon = resolveNotionImageURL(url, slugFrom(page), "icon");
      } else {
        icon = "";
      }
    }
  }

  // ADD A TYPE ANNOTATION HERE!
  const titleText = plain(pageTitle(page, titleFieldName));
  const pageOnly = removeProperty("blocks", page);
  const title = env.HEAVY_PAYLOADS
    ? `<Magic sourceJSON={${JSON.stringify(pageOnly, null, 2)}}>${h.title(
        titleText
      )}</Magic>`
    : `<Magic sourceJSON={${JSON.stringify(page.Name, null, 2)}}>${h.title(
        titleText
      )}</Magic>`;
  const coverURL = page.cover?.external?.url || page.cover?.file?.url || "";
  const pageCover =
    ((coverURL || icon) && (h.cover(coverURL, icon) ?? "")) ?? "";
  const pathToComponents = "$lib/notion2svelte";
  let script = `\
      <script>
        import Error from "${pathToComponents}/Error.svelte";
        import Cover from "${pathToComponents}/Cover.svelte"
        import Title from "${pathToComponents}/Title.svelte"
        import BulletedListItem from "${pathToComponents}/BulletedListItem.svelte"
        import Callout from "${pathToComponents}/Callout.svelte"
        import ChildPage from "${pathToComponents}/ChildPage.svelte"
        import Code from "${pathToComponents}/Code.svelte"
        import ColumnList from "${pathToComponents}/ColumnList.svelte"
        import Column from "${pathToComponents}/Column.svelte"
        import Divider from "${pathToComponents}/Divider.svelte"
        import Embed from "${pathToComponents}/Embed.svelte"
        import Header from "${pathToComponents}/Header.svelte"
        import Image from "${pathToComponents}/Image.svelte"
        import IndentGroup from "${pathToComponents}/IndentGroup.svelte"
        import InlineCode from "${pathToComponents}/InlineCode.svelte"
        import InlineColor from "${pathToComponents}/InlineColor.svelte"
        import Equation from "${pathToComponents}/Equation.svelte"
        import Magic from "${pathToComponents}/Magic.svelte"
        import MagicLink from "${pathToComponents}/MagicLink.svelte"
        import NumberedListItem from "${pathToComponents}/NumberedListItem.svelte"
        import Paragraph from "${pathToComponents}/Paragraph.svelte"
        import Quote from "${pathToComponents}/Quote.svelte"
        import TodoItem from "${pathToComponents}/TodoItem.svelte"
        import Toggle from "${pathToComponents}/Toggle.svelte"
      </script>
      `;
  let html = `\
  ${pageCover}
  ${title}

`;

  let renderedBlocks = "";
  const blocks = page.blocks;
  const outliner = new Outliner();
  const slug = slugFrom(page);
  const pageId = stripDashes(page.id);

  for (let block of blocks) {
    try {
      if (block.type !== "unsupported") {
        const comp = renderBlock(pageId, block, slug, outliner);
        // TODO: Figure out what I meant to do with this ↓
        const notionContext = {
          page: {
            id: page.id,
            slug: slug,
            createdOn: page.created_time,
            lastEdited: page.last_edited_time,
          },
          block: env.HEAVY_PAYLOADS ? block : { id: block.id },
        };

        renderedBlocks += `<Magic sourceJSON={${JSON.stringify(block, null, 2)
          .replace(/<script>/g, "<csript>")
          .replace(/<\/script>/g, "</csript>")}}>${comp}</Magic> ${h.br}`;
      }
    } catch (e) {
      const message = `\n🚨 Top Level #${
        block.id
      } →\n\n${e}\n\nblock →\n${JSON.stringify(block)}`;
      renderedBlocks += `<!-- ${message}\n\ntrace → ${e.stack} -->`;
      console.log(message + "😳");
    }
  }

  html += `
  ${renderedBlocks}
  `;

  setSlugForId(pageId, slug);

  return h.headTitle(titleText) + script + html;
}

function renderBlock(pageId, block, slug, outliner = new Outliner()) {
  const type = block.type;

  try {
    // Uncomment ↓ to test the Error component rendered by h.error
    // return h.alwaysThrows();

    if (block.type !== "numbered_list_item") {
      outliner.reset();
    }

    if (block.unsupported)
      return '<div style="padding: 2rem; outline: plain silver solid">💥</div>';

    if (block.has_children) {
      const outlinerForChildren = new Outliner(0, outliner.format + 1);
      const renderedChildren = block.blocks
        .map((b) => {
          try {
            return renderBlock(pageId, b, slug, outlinerForChildren);
          } catch (e) {
            throw new Error(
              `Children of #${block.id} failed: ${e.message}\n\ntrace → ${e.stack}`
            );
          }
        })
        .join("");

      if (block.type === "callout")
        return h.callout(
          richText(block.callout.text),
          block.callout.icon.emoji,
          renderedChildren
        );

      if (block.type === "child_page")
        return h.childPage(block.child_page.title, renderedChildren);

      if (block.type === "toggle")
        return h.toggle(richText(block.toggle.text), renderedChildren);

      if (block.type === "quote")
        return h.quote(richText(block.quote.text), renderedChildren);

      if (block.type === "column_list")
        return h.columnList(block.blocks.length, renderedChildren);

      if (block.type === "column") return h.column(renderedChildren);

      const renderedParent = renderBlock(
        pageId,
        { ...block, has_children: false },
        slug,
        outliner
      );
      return renderedParent + h.indent(renderedChildren);
    }

    switch (type) {
      case "code":
        return h.code(richText(block.code.text, true), block.code.language);

      case "child_page":
        return warning("child_page", block.child_page.title, "has no content");

      case "image":
        const originalURL = block.image.file?.url || block.image.external.url;
        const renderedURL = resolveNotionImageURL(originalURL, slug, block.id);
        const caption = block.image.caption;

        return h.image(renderedURL, richText(caption));

      case "to_do":
        return h.todo(block.to_do.checked, richText(block.to_do.text));

      case "bulleted_list_item":
        return h.bulleted_list_item(richText(block.bulleted_list_item.text));

      case "numbered_list_item":
        let outlineSymbol = outliner.formatted();
        outliner.step();

        return h.numbered_list_item(
          richText(block.numbered_list_item.text),
          outlineSymbol
        );

      case "callout":
        return h.callout(
          richText(block.callout.text),
          block.callout.icon.emoji
        );

      case "embed":
        return h.embed(block.embed.url, richText(block.embed.caption));

      case `equation`:
        return h.equation(block.equation.expression);

      case "divider":
        return h.divider;

      default:
        if (h[type]) {
          return h[type](richText(block[type].text));
        }
    }
    return type;
  } catch (e) {
    return h.error(pageId, block.id, e.message, e.stack);
  }
}

function resolveNotionImageURL(url, slug, filename) {
  const ext =
    url.includes("jpg") || url.includes("jpeg")
      ? "jpg"
      : url.includes("png")
      ? "png"
      : url.includes("gif")
      ? "gif"
      : "";

  const imageURL = join("/assets/", slug, `${filename}.${ext}`);
  const fileTarget = join(staticOrPublicFolder, imageURL);
  if (!existsSync(fileTarget) || ignoreCache) {
    download(fileTarget, url);
  }
  return imageURL;
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
        console.log(`🖼  ${url} ⇒ ${fileTarget}↴\n${stderr}`);
        return;
      }
      console.log(`Image download ${stdout.trim()}`);
    }
  );
}
