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
  <title>Image</title>
</svelte:head>

<Title>Image</Title>

<Callout emoji="🧚🏿"
  >What you’re about to read is from a Synced Block shared with the Cover component. It applies
  equally here.</Callout
><Paragraph
  blockProps={{
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
    id: 'f3ea5730-83cc-4323-9ab8-7b8f6d620c43',
    created_time: '2022-01-28T10:57:00.000Z',
    last_edited_time: '2022-01-28T10:57:00.000Z'
  }}
/>
<Header level={1}>How&nbsp;<em>notion2svelte</em>&nbsp;handles images</Header>
<Paragraph
  blockProps={{
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
    id: '96511cc9-60c5-458e-8e25-66df77c86cd9',
    created_time: '2022-01-28T02:46:00.000Z',
    last_edited_time: '2022-01-28T10:59:00.000Z'
  }}
>
  Notion uses Amazon for image hosting, and a side effect of that choices is that the image URLs on
  offer from the Notion API have a super-short shelf life. For this initial release,&nbsp;<em
    >notion2svelte</em
  >&nbsp;handles this in a rather naive fashion. Here’s the flow:
</Paragraph>
<IndentGroup>
  <NumberedListItem number="a">Fetch the actual image</NumberedListItem>
  <NumberedListItem number="b">
    Store it in&nbsp;<em>static/assets/<page-id>…</page-id></em></NumberedListItem
  >
  <NumberedListItem number="c">
    Use relative links to point the&nbsp;<InlineCode code={'src'} />&nbsp;attribute at the (full
    res! 🙀) images</NumberedListItem
  >
</IndentGroup>
<Paragraph
  blockProps={{
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
    id: 'de9d5124-60cb-4388-99a1-c608e0a079fe',
    created_time: '2022-01-28T02:46:00.000Z',
    last_edited_time: '2022-01-28T02:46:00.000Z'
  }}
>
  Yes, I know this isn’t awesome. No, I haven’t done any research yet to figure out current
  best-practices, or, perhaps, some sort of extensible API.
</Paragraph>
<Header level={1}><strong>In Notion</strong></Header>
<Paragraph
  blockProps={{
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
    id: 'c8d19daf-54da-4e7b-ab4a-2261d0713174',
    created_time: '2022-01-28T00:10:00.000Z',
    last_edited_time: '2022-01-28T00:10:00.000Z'
  }}
/>
<Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Code code={`[tc]`} language="javascript" caption="" /><Header level={1}
  ><strong>Svelte output</strong></Header
>
<Code code={`[tc]`} language="html" caption="" /><Header level={1}
  ><strong>Example Rendering</strong></Header
>
<Image url="/assets/components/image/4b8866c2-40ba-4b69-9570-b433e2261e63.jpg" />
<Paragraph
  blockProps={{
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
    id: '122fac80-fc59-40ac-9f81-d763c13ff30d',
    created_time: '2022-01-28T00:21:00.000Z',
    last_edited_time: '2022-01-28T00:21:00.000Z'
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
    pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
      pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
      pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
      pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
      ><MagicLink href="/bulleted-list-item">BulletedListItem</MagicLink></BulletedListItem
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
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><MagicLink href="/components/divider">Divider</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/embed">Embed</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/image">Image</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/error">Error</MagicLink></BulletedListItem>
  </Column></ColumnList
>
