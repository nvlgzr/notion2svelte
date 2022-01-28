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

<Header level={1}>1. Notion original</Header>
<Image url="/assets/components/equation/40267217-ee20-4205-a8b0-36923db0531c.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
    created_time: '2022-01-28T20:26:00.000Z',
    last_edited_time: '2022-01-28T20:28:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of&nbsp;</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].json</em></InlineColor
  >
</Paragraph>
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
/><Header level={1}>3. Svelte output</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '28871a46-c697-4500-b517-1c526797ab38',
    created_time: '2022-01-28T20:32:00.000Z',
    last_edited_time: '2022-01-28T20:32:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of&nbsp;</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].svelte</em></InlineColor
  >
</Paragraph>
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
/><Header level={1}>4. Example rendering</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: 'f01f769b-c9b9-4d68-a1ee-b9de396170fe',
    created_time: '2022-01-28T22:42:00.000Z',
    last_edited_time: '2022-01-28T22:44:00.000Z'
  }}
>
  <InlineColor value="gray">Rendered by</InlineColor><MagicLink
    href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Equation.svelte"
    ><InlineColor value="gray">Equation.svelte</InlineColor></MagicLink
  ><InlineColor value="gray">, which relies on&nbsp;</InlineColor><MagicLink
    href="https://katex.org/"><InlineColor value="gray">katex</InlineColor></MagicLink
  ><InlineColor value="gray">&nbsp;for typesetting</InlineColor>
</Paragraph>
<Equation
  block={true}
  katexString="\begin{'{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end{'{'}CD}"
/><ColumnList cols={5}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'ef8517977d17431889a3ae09285cfef8',
        id: '63990c55-ca4b-4fbe-b73d-0d89ea1e0f68',
        created_time: '2022-01-28T22:48:00.000Z',
        last_edited_time: '2022-01-28T22:48:00.000Z'
      }}
    />
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'ef8517977d17431889a3ae09285cfef8',
        id: '768ee1e2-9b8d-4c4b-b473-1b538d61d30e',
        created_time: '2022-01-28T22:49:00.000Z',
        last_edited_time: '2022-01-28T22:49:00.000Z'
      }}
    />
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'ef8517977d17431889a3ae09285cfef8',
        id: '04bc53f5-87c4-4e17-8238-88f45b1ec887',
        created_time: '2022-01-28T22:48:00.000Z',
        last_edited_time: '2022-01-28T22:49:00.000Z'
      }}
    >
      🐁↑4🗿🥚
    </Paragraph>
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'ef8517977d17431889a3ae09285cfef8',
        id: '18a42ac7-119d-4f27-9034-4b0ca76c3217',
        created_time: '2022-01-28T22:49:00.000Z',
        last_edited_time: '2022-01-28T22:49:00.000Z'
      }}
    />
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'ef8517977d17431889a3ae09285cfef8',
        id: 'faf008ef-2d7a-4636-815f-fd3f2e5c4214',
        created_time: '2022-01-28T22:48:00.000Z',
        last_edited_time: '2022-01-28T22:48:00.000Z'
      }}
    />
  </Column></ColumnList
><Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '27d68652-33ab-4179-b563-98554eee3c28',
    created_time: '2022-01-28T22:48:00.000Z',
    last_edited_time: '2022-01-28T22:48:00.000Z'
  }}
/>
<Divider />
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
    <BulletedListItem><MagicLink href="/components">Components</MagicLink></BulletedListItem>
    <BulletedListItem
      ><MagicLink href="/rules-for-writing-good-slugs">Writing Good Slugs</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/block-props">blockProps</MagicLink></BulletedListItem>
    <BulletedListItem
      ><MagicLink href="/components/nested-blocks">Nested Blocks</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/synced-blocks">Synced Blocks</MagicLink></BulletedListItem
    >
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/paragraph">Paragraph (aka “Text”)</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/header">Header (3 types in 1!)</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/child-page">ChildPage</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/todo-item">TodoItem</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/bulleted-list-item">BulletedListItem</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/numbered-list-item">NumberedListItem</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/toggle">Toggle</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/code">Code</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/quote">Quote</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/callout">Callout</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/indent-group">IndentGroup</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/columns">Column & ColumnList</MagicLink>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/title">Title (aka Name)</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/cover">Cover (Image & Icon)</MagicLink></BulletedListItem
    >
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
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><MagicLink href="/components/divider">Divider</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/embed">Embed</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/image">Image</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/error">Error</MagicLink></BulletedListItem>
  </Column></ColumnList
>
