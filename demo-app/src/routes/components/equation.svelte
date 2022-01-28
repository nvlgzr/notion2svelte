<script>
  import Error from '$lib/notion2svelte/Error.svelte';
  import Cover from '$lib/notion2svelte/Cover.svelte';
  import Title from '$lib/notion2svelte/Title.svelte';
  import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
  import Callout from '$lib/notion2svelte/Callout.svelte';
  import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
  import Code from '$lib/notion2svelte/Code.svelte';
  import ColumnList from '$lib/notion2svelte/ColumnList.svelte';
  import Column from '$lib/notion2svelte/Column.svelte';
  import Divider from '$lib/notion2svelte/Divider.svelte';
  import Embed from '$lib/notion2svelte/Embed.svelte';
  import Header from '$lib/notion2svelte/Header.svelte';
  import Image from '$lib/notion2svelte/Image.svelte';
  import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
  import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
  import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
  import Equation from '$lib/notion2svelte/Equation.svelte';
  import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>Equation</title>
</svelte:head>

<Title>Equation</Title>

<Header level={1}><strong>In Notion</strong></Header>
<Image url="/assets/components/equation/40267217-ee20-4205-a8b0-36923db0531c.png" />
<Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Code
  code={`\{
  "object": "block",
  "id": "63423e49-abae-40ac-b485-83ee14260386",
  "created_time": "2022-01-26T09:55:00.000Z",
  "last_edited_time": "2022-01-26T09:55:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "equation",
  "equation": \{
    "expression": "\\begin\{CD}\nA @>a>> B \\\\\n@VbVV @AAcA \\\\\nC @= D\n\\end\{CD}"
  }
}`}
  language="javascript"
  caption=""
/><Header level={1}><strong>Svelte output</strong></Header>
<Code
  code={`<Equation
  block=\{true}
  katexString="\begin\{'\{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end\{'\{'}CD}"
/>`}
  language="html"
  caption=""
/><Header level={1}><strong>Example Rendering</strong></Header>
<Equation
  block={true}
  katexString="\begin{'{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end{'{'}CD}"
/><Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><MagicLink href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</MagicLink
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<MagicLink
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
    >notion2svelte in 10** minutes</MagicLink
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'ef8517977d17431889a3ae09285cfef8',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><MagicLink href="https://fishshell.com/"
      ><InlineColor value="gray">fish shell</InlineColor></MagicLink
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'ef8517977d17431889a3ae09285cfef8',
      id: 'fc7a7eef-1c40-431e-9842-85d97d1e1d49',
      created_time: '2022-01-27T05:11:00.000Z',
      last_edited_time: '2022-01-27T05:11:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30
      minutes to allow for your own play time. 🧫</InlineColor
    >🧪
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'ef8517977d17431889a3ae09285cfef8',
      id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
      created_time: '2022-01-27T05:10:00.000Z',
      last_edited_time: '2022-01-27T05:10:00.000Z'
    }}
  />
</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘&nbsp;<a href="/about-notion2svelte">🏠</a>&nbsp;</Header>
<ColumnList cols={2}
  ><Column
    ><Header level={3}>High-level Discussion</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Components.</span
        >&nbsp;No URL provided for Components.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Writing Good Slugs.</span
        >&nbsp;No URL provided for Writing Good Slugs.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >blockProps.</span
        >&nbsp;No URL provided for blockProps.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Nested Blocks.</span
        >&nbsp;No URL provided for Nested Blocks.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Synced Blocks.</span
        >&nbsp;No URL provided for Synced Blocks.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Paragraph (aka “Text”).</span
        >&nbsp;No URL provided for Paragraph (aka “Text”).<br /><br />Did you give it a Slug, mark
        it Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Header (3 types in 1!).</span
        >&nbsp;No URL provided for Header (3 types in 1!).<br /><br />Did you give it a Slug, mark
        it Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >ChildPage.</span
        >&nbsp;No URL provided for ChildPage.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >TodoItem.</span
        >&nbsp;No URL provided for TodoItem.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >BulletedListItem.</span
        >&nbsp;No URL provided for BulletedListItem.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >NumberedListItem.</span
        >&nbsp;No URL provided for NumberedListItem.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Toggle.</span
        >&nbsp;No URL provided for Toggle.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Code.</span
        >&nbsp;No URL provided for Code.<br /><br />Did you give it a Slug, mark it Publishable, and
        run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Quote.</span
        >&nbsp;No URL provided for Quote.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Callout.</span
        >&nbsp;No URL provided for Callout.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Equation.</span
        >&nbsp;No URL provided for Equation.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >IndentGroup.</span
        >&nbsp;No URL provided for IndentGroup.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/columns">Column & ColumnList</MagicLink>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/title">Title (aka Name)</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/cover">Cover</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/icon">Icon</MagicLink></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/inline-code">InlineCode</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/inline-color">InlineColor</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/internal-link">InternalLink</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Equation.</span
        >&nbsp;No URL provided for Equation.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <Header level={3}>Other Components</Header>
    <BulletedListItem><MagicLink href="/components/divider">Divider</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/embed">Embed</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/image">Image</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/error">Error</MagicLink></BulletedListItem>
  </Column></ColumnList
>
