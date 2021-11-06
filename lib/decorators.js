import { slugForId } from './slug-map.js';

export const stripDashes = (pageId) => pageId.replace(/-/g, '')

export const warning = (callingContext, ref, message, inline = true) => `<p style="${inline ? "display: inline-block; " : ''}background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ ${callingContext}: <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">${ref}.</span>&nbsp;${message}</p>`

export const decorateBlockContent = {
  _: '\n\n',
  ___: '<hr />',
  br: '\n<br style="display:none;"/>\n',
  divider: "<Divider />\n",
  titleText: page => richText(page.Title.title),
  headTitle: title => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: title => `<Title>${title}</Title>\n\n`,
  cover: (coverURL, iconEmojiOrURL) => `<Cover coverURL={"${coverURL}"} iconEmojiOrURL={"${iconEmojiOrURL}"} />`,
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
  childPage: (title, children) => `<ChildPage title="${title}">${children}</ChildPage>`,
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

export const decorateInlineContent = (span) => {
  const b = t => `<strong>${t}</strong>`;
  const i = t => `<em>${t}</em>`;
  const s = t => `<s>${t}</s>`;
  const u = t => `<span style="text-decoration:underline;">${t}</span>`;
  const c = t => `<InlineCode>${t}</InlineCode>`;
  const l = (t, color) => color === 'default' ? t : `<InlineColor value='${color ?? "inherit"}'>${t}</InlineColor>`;

  // Wrap this in katex
  const x = (t) => '⟣' + c(t) + '⟢';

  // (lin)K
  const k = (t, url) => {
    if (url.match(/^\/[a-f0-9]{32}$/)) {
      const noLeadingSlash = url.slice(1);
      const slug = slugForId(noLeadingSlash);
      return slug
        ? `<a href="${slug}">${t}</a>`
        : warning("k(t, url)", t, `No slug found for page id ${noLeadingSlash}`);
    } else {
      return url ? `<a href="${url}">${t}</a>` : warning("k(t, url)", t, `No URL provided for ${t}`);
    }
  };

  // See this [open Svelte issue](https://github.com/sveltejs/svelte/issues/4731) for details
  const fixEdgeSpaces = t => t.replace(/(^ | $)/g, '&thinsp;');
  const cr2br = t => t.replace(/\n/g, '\n<br />\n');

  let firstFix = fixEdgeSpaces(span.plain_text);
  let secondFix = cr2br(firstFix);
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