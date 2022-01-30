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
  import Link from '$lib/notion2svelte/Link.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>Divider</title>
</svelte:head>

<Title>Divider</Title>

<Header level={1}><strong>In Notion</strong></Header>
<Paragraph
  blockProps={{
    pageId: '539eb6b1b5214fda8246b35378287ccb',
    id: '21fe5fba-16bf-48a9-86c1-1dde43a10245',
    created_time: '2022-01-28T00:04:00.000Z',
    last_edited_time: '2022-01-28T00:04:00.000Z'
  }}
/>
<Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Code code={`[tc]`} language="javascript" caption="" /><Header level={1}
  ><strong>Svelte output</strong></Header
>
<Code code={`[tc]`} language="html" caption="" /><Header level={1}
  ><strong>Example Rendering</strong></Header
>
<Divider />
<Paragraph
  blockProps={{
    pageId: '539eb6b1b5214fda8246b35378287ccb',
    id: '0cf8d8a1-1135-433a-b9d0-f696219e2f99',
    created_time: '2022-01-28T00:04:00.000Z',
    last_edited_time: '2022-01-28T00:04:00.000Z'
  }}
/>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><Link href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</Link
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: '539eb6b1b5214fda8246b35378287ccb',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<Link
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: '539eb6b1b5214fda8246b35378287ccb',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><Link href="https://fishshell.com/"><InlineColor value="gray">fish shell</InlineColor></Link
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: '539eb6b1b5214fda8246b35378287ccb',
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
      pageId: '539eb6b1b5214fda8246b35378287ccb',
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
    <BulletedListItem><Link href="/components">Components</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/rules-for-writing-good-slugs">Writing Good Slugs</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/block-props">blockProps</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/nested-blocks">Nested Blocks</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/synced-blocks">Synced Blocks</Link></BulletedListItem>
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><Link href="/components/paragraph">Paragraph (aka “Text”)</Link></BulletedListItem
    >
    <BulletedListItem
      ><Link href="/components/header">Header (3 types in 1!)</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/child-page">ChildPage</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/todo-item">TodoItem</Link></BulletedListItem>
    <BulletedListItem><Link href="/bulleted-list-item">BulletedListItem</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/numbered-list-item">NumberedListItem</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/toggle">Toggle</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/code">Code</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/quote">Quote</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/callout">Callout</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem><Link href="/components/indent-group">IndentGroup</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/columns">Column & ColumnList</Link>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem><Link href="/components/title">Title (aka Name)</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/cover">Cover</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/icon">Icon</Link></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem><Link href="/components/inline-code">InlineCode</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/inline-color">InlineColor</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/internal-link">InternalLink</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><Link href="/components/divider">Divider</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/embed">Embed</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/image">Image</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/error">Error</Link></BulletedListItem>
  </Column></ColumnList
>
