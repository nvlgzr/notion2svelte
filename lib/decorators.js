import { slugForId } from './slug-map.js';

export const stripDashes = (pageId) => pageId.replace(/-/g, '')

export const warning = (callingContext, ref, message, inline = true) => `<p style="${inline ? "display: inline-block; " : ''}background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ ${callingContext}: <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">${ref}.</span>&nbsp;${message}</p>`

export const decorateBlockContent = {
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br style="display:none;"/>\n',
  divider: "<Divider />\n",
  embed: (url, caption) => `<Embed url="${url}">${caption}</Embed>`,
  titleText: page => richText(page.Title.title),
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<Title>${title}</Title>\n\n`,
  cover: (coverURL, iconEmojiOrURL) => `<Cover coverURL={"${coverURL}"} iconEmojiOrURL={"${iconEmojiOrURL}"} />`,
  heading_1: contents => `<Header level="1">${contents}</Header>\n`,
  heading_2: contents => `<Header level="2">${contents}</Header>\n`,
  heading_3: contents => `<Header level="3">${contents}</Header>\n`,
  paragraph: contents => `<Paragraph>\n${contents}\n</Paragraph>\n`,
  todo: (checked, contents) =>
    `<TodoItem checked={${checked}}>${contents}</TodoItem>\n`,
  bulleted_list_item: (contents) =>
    `<BulletedListItem>${contents}</BulletedListItem>\n`,
  numbered_list_item: (contents, outlineSymbol) =>
    `<NumberedListItem number=${outlineSymbol}> ${contents}</NumberedListItem>\n`,
  callout: (root, emoji, children) => children
    ? `<Callout emoji="${emoji}">${root}<span slot="children">${children}</span></Callout>`
    : `<Callout emoji="${emoji}">${root}</Callout>`,
  childPage: (title, children) => `<ChildPage title="${title}">${children}</ChildPage>`,
  columnList: (numColumns, children) => `<ColumnList cols={${numColumns}}>${children}</ColumnList>`,
  column: (children) => `<Column>${children}</Column>`,
  equation: (expression) =>`<Equation block={true} katexString="${expression.replace(/\{/g, `{'{'}`)}" />`,
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

/**
 * Note that some custom components are assumed to exist in the target
 * Svelte project's `$lib/notion2svelte` directory…notably InlineCode
 * and MagicLink.
 */
export const decorateInlineContent = (span) => {
  const b = t => `<strong>${t}</strong>`;
  const i = t => `<em>${t}</em>`;
  const s = t => `<s>${t}</s>`;
  const u = t => `<span style='text-decoration:underline;'>${t}</span>`;
  const c = t => `<InlineCode>${t.replace(/\{/g, `{'{'}`)}</InlineCode>`;
  const l = (t, color) => color === 'default' ? t : `<InlineColor value='${color ?? "inherit"}'>${t}</InlineColor>`;
  const x = (t) => `<Equation block={false} katexString="${t.replace(/\{/g, `{'{'}`)}" />`;

  // (lin)K
  const k = (t, url) => {
    if (url.match(/^\/[a-f0-9]{32}$/)) {
      const noLeadingSlash = url.slice(1);
      const slug = slugForId(noLeadingSlash);
      return slug
        ? `<a href='${slug}'>${t}</a>`
        : warning("k(t, url)", t, `No slug found for page id ${noLeadingSlash}`);
    } else {
      return url ? `<MagicLink href='${url}'>${t}</MagicLink>` : warning('k(t, url)', t, `No URL provided for ${t}`);
    }
  };

  // See this [open Svelte issue](https://github.com/sveltejs/svelte/issues/4731) for details
  const fixEdgeSpaces = t => t.replace(/(^ | $)/g, '&thinsp;');
  const cr2br = t => t.replace(/\n/g, '\n<br />\n');

  let firstFix = fixEdgeSpaces(span.plain_text);
  let secondFix = span.type === 'equation' ? firstFix : cr2br(firstFix);
  let rendered = secondFix.replace('\"', '"');

  if (span.annotations.bold)
    rendered = b(rendered);
  if (span.annotations.italic)
    rendered = i(rendered);
  if (span.annotations.strikethrough)
    rendered = s(rendered);
  if (span.annotations.underline)
    rendered = u(rendered);
  if (span.annotations.code)
    rendered = c(rendered);
  if (span.annotations.color)
    rendered = l(rendered, span.annotations.color);
  if (span[span.type].expression)
    rendered = x(rendered);
  if (span[span.type].link?.url?.length)
    rendered = k(rendered, span[span.type].link.url, '🩸');
  if (span.type === 'mention')
    rendered = k(rendered, slugForId(stripDashes(span.mention[span.mention.type].id)));

  return rendered;
}
