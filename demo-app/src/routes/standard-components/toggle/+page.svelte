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
	import { setContext } from 'svelte';

	setContext('pageStuff', {
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		title: 'Toggle'
	});
</script>

<svelte:head>
	<title>Toggle</title>
</svelte:head>

<Title>Toggle</Title>

<Header level={1}>1. Notion original</Header>
<Image url="/assets/standard-components/toggle/e5092254-6e02-4260-99c1-884342401cb3.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
		created_time: '2022-01-28T20:26:00.000Z',
		last_edited_time: '2022-01-28T20:28:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&nbsp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug].json</em></InlineColor
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		id: '577562ee-dfd9-42bd-889c-e04479602dd8',
		created_time: '2022-01-31T20:31:00.000Z',
		last_edited_time: '2022-01-31T20:31:00.000Z'
	}}
/>
<Code
	code={`\{
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;e59ee620-4589-45e0-a0fa-7edb3e8a13c3&quot;,
  &quot;created_time&quot;: &quot;2022-01-26T09:18:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-27T21:37:00.000Z&quot;,
  &quot;has_children&quot;: true,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;toggle&quot;,
  &quot;toggle&quot;: \{
    &quot;text&quot;: [
      \{
        &quot;type&quot;: &quot;text&quot;,
        &quot;text&quot;: \{
          &quot;content&quot;: &quot;Open saysme!&quot;,
          &quot;link&quot;: null
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: false,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;Open saysme!&quot;,
        &quot;href&quot;: null
      }
    ]
  },
  &quot;blocks&quot;: [
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;eabfbb8b-b876-4110-ac73-4001d0c9d543&quot;,
      &quot;created_time&quot;: &quot;2022-01-26T09:23:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-26T09:23:00.000Z&quot;,
      &quot;has_children&quot;: false,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;image&quot;,
      &quot;image&quot;: \{
        &quot;caption&quot;: [],
        &quot;type&quot;: &quot;external&quot;,
        &quot;external&quot;: \{
          &quot;url&quot;: &quot;https://static.wikia.nocookie.net/disney/images/a/ae/Profile_-_Magica_De_Spell.jpg/revision/latest/scale-to-width-down/371?cb=20091223024521&quot;
        }
      }
    }
  ]
}`}
	language="javascript"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
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
	code={`&lt;Toggle&gt;
  Open saysme!
  &lt;span slot=&quot;children&quot;
    &gt;&lt;Image url=&quot;/assets/components/toggle/eabfbb8b-b876-4110-ac73-4001d0c9d543.jpg&quot; /&gt;
  &lt;/span&gt;
&lt;/Toggle&gt;`}
	language="html"
/><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		id: '4d8e4016-763d-494f-9283-3d7b08fe25fe',
		created_time: '2022-01-28T22:01:00.000Z',
		last_edited_time: '2022-01-28T22:02:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by&nbsp;</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Toggle.svelte"
		><InlineColor value="gray">Toggle.svelte</InlineColor></Link
	>
</Paragraph>
<Toggle
	>Open saysme!
	<span slot="children"
		><Image url="/assets/standard-components/toggle/eabfbb8b-b876-4110-ac73-4001d0c9d543.jpg" />
	</span></Toggle
><Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		id: '689f8f64-9bbc-40f9-b1c6-50ff899188be',
		created_time: '2022-01-27T21:37:00.000Z',
		last_edited_time: '2022-01-27T21:37:00.000Z'
	}}
/>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
	><Link type="absolute" href="https://github.com/nvlgzr/notion2svelte"
		>https://github.com/nvlgzr/notion2svelte</Link
	></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
	blockProps={{
		pageId: '8f280d4faa58438293aaf666f6c7ca0e',
		id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
		created_time: '2022-01-26T09:47:00.000Z',
		last_edited_time: '2022-01-27T05:11:00.000Z'
	}}
>
	Open your Terminal.app* and follow along to 👉🏿 “<Link
		type="absolute"
		href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
	>”!
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '8f280d4faa58438293aaf666f6c7ca0e',
			id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
			created_time: '2022-01-26T09:47:00.000Z',
			last_edited_time: '2022-01-27T05:14:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
			works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
		><Link type="absolute" href="https://fishshell.com/"
			><InlineColor value="gray">fish shell</InlineColor></Link
		><InlineColor value="gray"
			>&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
			after all, so it should be pretty portable!</InlineColor
		>
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '8f280d4faa58438293aaf666f6c7ca0e',
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
			pageId: '8f280d4faa58438293aaf666f6c7ca0e',
			id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
			created_time: '2022-01-27T05:10:00.000Z',
			last_edited_time: '2022-01-27T05:10:00.000Z'
		}}
	/>
</IndentGroup>
<Divider />
<Header level={2}
	>Browse the docs ⚘&nbsp;<Link type="alias" href="/about-notion2svelte">🏠</Link>
</Header>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>
		</BulletedListItem>
		<BulletedListItem><Link type="mention" href="/components">Components</Link></BulletedListItem>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/rules-for-writing-good-slugs"
				>Writing Good Slugs</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/block-props">blockProps</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/nested-blocks">Nested Blocks</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/synced-blocks">Synced Blocks</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/dot-env">Configuring your .env</Link>
		</BulletedListItem>
		<Header level={3}>Turn-intoable Block Components</Header>
		<BulletedListItem
			><Link type="mention" href="/standard-components/paragraph">Paragraph (aka “Text”)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/header">Header (3 types in 1!)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/child-page">ChildPage</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/todo-item">TodoItem</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/bulleted-list-item">BulletedListItem</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/numbered-list-item">NumberedListItem</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/toggle">Toggle</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/code">Code</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/quote">Quote</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/callout">Callout</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/equation">Equation</Link></BulletedListItem
		>
		<BulletedListItem
			>Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
			></BulletedListItem
		>
	</Column><Column
		><Header level={3}>Layout-only Components</Header>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link>
		</BulletedListItem>
		<Header level={3}>Page-level Components</Header>
		<BulletedListItem
			><Link type="mention" href="/page-level-components/title">Title (aka Name)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/page-level-components/cover">Cover (Image & Icon)</Link
			></BulletedListItem
		>
		<Header level={3}>Annotation Components</Header>
		<BulletedListItem
			><strong>bold</strong>&nbsp;→&nbsp;<InlineCode code={'&lt;strong&gt;'} />
		</BulletedListItem>
		<BulletedListItem
			><em>italic</em>&nbsp;→&nbsp;<InlineCode code={'&lt;em&gt;'} /></BulletedListItem
		>
		<BulletedListItem><s>strikethrough</s>&nbsp;→ NYI</BulletedListItem>
		<BulletedListItem
			><span style="text-decoration:underline;">underline</span>&nbsp;→ NYI</BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/inline-code">InlineCode</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/inline-color">InlineColor</Link></BulletedListItem
		>
		<BulletedListItem><Link type="mention" href="/annotations/link">Link</Link></BulletedListItem>
		<BulletedListItem
			><Link type="mention" href="/standard-components/equation">Equation</Link></BulletedListItem
		>
		<Header level={3}>Other Components</Header>
		<BulletedListItem
			><Link type="mention" href="/other-components/divider">Divider</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/embed">Embed</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/image">Image</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/error">Error</Link></BulletedListItem
		>
	</Column></ColumnList
>
