import { slugForId } from './slug-map.js';

export const stripDashes = (pageId) => pageId.replace(/-/g, '');
export const stripLeadingSlash = (str) => str.replace(/^\//g, '');
export const escapeBackticks = (str) => str.replace(/`/g, '\\`');
export const escapeOpenCurlies = (str) => str.replace(/{/g, '\\{');

export const escapeHtml = (str) => {
  // Note: the &nbsp; replacement is a hack to reverse the effect of
  // `preserveEdgeSpaces` in what will eventually be a <pre> context.
  return str
    .replaceAll('&ensp;', ' ')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const warning = (callingContext, ref, message, inline = true) =>
  `<p style="${
    inline ? 'display: inline-block; ' : ''
  }background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ ${callingContext}: <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">${ref}.</span>&nbsp;${message}</p>`;

export const decorateBlockContent = {
  alwaysThrows: () => {
    // Call this function to test rendering of `error` (See next function ↓)
    throw new Error('Best not to call this function in production, neh?');
  },
  error: (pageId, blockId, message, stack) =>
    `<Error pageId="${stripDashes(pageId)}" blockId="${stripDashes(
      blockId
    )}" message="${message}" stack="${stack}" />`,
  _: '\n\n',
  ___: '<hr />',
  divider: '<Divider />\n',
  embed: (url, caption) => `<Embed url="${url}">${caption}</Embed>`,
  titleText: (page) => richText(page.Name.title),
  headTitle: (title) => `<svelte:head>\n  <title>${title}</title>\n</svelte:head>`,
  title: (title) => `<Title>${title}</Title>\n\n`,
  cover: (coverURL, iconEmojiOrURL) =>
    `<Cover coverURL={"${coverURL}"} iconEmojiOrURL={"${iconEmojiOrURL}"} />`,
  heading_1: (contents) => `<Header level={1}>${contents}</Header>\n`,
  heading_2: (contents) => `<Header level={2}>${contents}</Header>\n`,
  heading_3: (contents) => `<Header level={3}>${contents}</Header>\n`,
  paragraph: (props, contents) =>
    `<Paragraph blockProps={${JSON.stringify(props)}}>\n${contents}\n</Paragraph>\n`,
  todo: (checked, contents) => `<TodoItem checked={${checked}}>${contents}</TodoItem>\n`,
  bulleted_list_item: (contents) => `<BulletedListItem>${contents}</BulletedListItem>\n`,
  numbered_list_item: (contents, outlineSymbol) =>
    `<NumberedListItem number=${outlineSymbol}> ${contents}</NumberedListItem>\n`,
  callout: (root, emoji, children) =>
    children
      ? `<Callout emoji="${emoji}">${root}<span slot="children">${children}</span></Callout>`
      : `<Callout emoji="${emoji}">${root}</Callout>`,
  childPage: (title, children) => `<ChildPage title="${title}">${children}</ChildPage>`,
  columnList: (numColumns, children) => `<ColumnList cols={${numColumns}}>${children}</ColumnList>`,
  column: (children) => `<Column>${children}</Column>`,
  code: (code, language, caption) =>
    `<Code code={${'`'}${escapeHtml(
      escapeOpenCurlies(escapeBackticks(code))
    )}${'`'}} language="${language}">${caption}</Code>`,
  equation: (expression) =>
    `<Equation block={true} katexString="${expression.replace(/\{/g, `{'{'}`)}" />`,
  quote: (root, children) =>
    children
      ? `<Quote>${root}<span slot="children">${children}</span></Quote>`
      : `<Quote>${root}</Quote>`,
  toggle: (root, children) =>
    `<Toggle>${root}\n<span slot="children">${children ? children : ''}</span></Toggle>`,
  image: (url, caption) => `<Image url="${url}">${caption}</Image>\n`,
  indent: (contents) =>
    `\
<IndentGroup>
  ${contents}
</IndentGroup>
`,
  syncedBlock: (contents) => contents
};

/**
 * Note that components are assumed to exist in the target Svelte project's
 * `$lib/notion2svelte` directory.
 */
export const decorateInlineContent = (span, keepReturns = false) => {
  const b = (t) => `<strong>${t}</strong>`;
  const i = (t) => `<em>${t}</em>`;
  const s = (t) => `<s>${t}</s>`;
  const u = (t) => `<span style='text-decoration:underline;'>${t}</span>`;
  const c = (t) => `<InlineCode code={"${escapeHtml(t)}"} />`;
  const r = (t, color) =>
    color === 'default' ? t : `<InlineColor value='${color ?? 'inherit'}'>${t}</InlineColor>`;
  const x = (t) => `<Equation block={false} katexString="${t.replace(/\{/g, `{'{'}`)}" />`;

  const l = (t, type, url) =>
    url
      ? `<Link type="${type}" href='${url}'>${t}</Link>`
      : warning(
          'l(t, url)',
          t,
          `No URL provided for ${t}.<br /><br />Did you give it a Slug, mark it Publishable, and run _notion2svelte_?`
        );

  const linkOrWarning = (text, type, slug) => {
    return slug
      ? l(text, type, slug)
      : warning(
          'l(t, type, url)',
          text,
          `No slug found for ${type} w/text: ${text}'. Have you imported the target page with notion2svelte yet?`
        );
  };

  const maybeLink = (rendered, span) => {
    if (span.type === 'mention' && span.mention.type === 'page') {
      const pageId = span.mention.page.id;
      const slug = slugForId(stripDashes(pageId));
      return linkOrWarning(rendered, 'mention', slug);
    }

    const url = span[span.type].link?.url;
    if (url) {
      if (url.match(/^\/[a-f0-9]{32}$/)) {
        /* E.g., "/57ec9a2db8544bf694a45f0e2a0b68d1" */
        const slug = slugForId(stripDashes(stripLeadingSlash(url)));
        return linkOrWarning(rendered, 'alias', slug);
      } else {
        return linkOrWarning(rendered, 'absolute', url);
      }
    }
    return rendered;
  };

  // See this [open Svelte issue](https://github.com/sveltejs/svelte/issues/4731) for details
  const fixEdgeSpaces = (t) => t.replace(/(^ | $)/g, '&ensp;');
  const cr2br = (t) => t.replace(/\n/g, '\n<br />\n');

  let firstFix = fixEdgeSpaces(span.plain_text);
  let secondFix = span.type === 'equation' || keepReturns ? firstFix : cr2br(firstFix);
  let rendered = secondFix.replace('"', '"');

  if (span.annotations.bold) rendered = b(rendered);
  if (span.annotations.italic) rendered = i(rendered);
  if (span.annotations.strikethrough) rendered = s(rendered);
  if (span.annotations.underline) rendered = u(rendered);
  if (span.annotations.code) rendered = c(rendered);
  if (span.annotations.color) {
    rendered = r(rendered, span.annotations.color);
  }
  if (span[span.type].expression) rendered = x(rendered);

  rendered = maybeLink(rendered, span);

  return rendered;
};
