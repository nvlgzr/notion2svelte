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
	import Underline from '$lib/notion2svelte/Underline.svelte';
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
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		title: 'Title (aka Name)'
	});
</script>

<svelte:head>
	<title>Title (aka Name)</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Title (aka Name)</Title>

<Header level={1}>Why “Title” instead of “Name”?</Header>
<ColumnList cols={2}
	><Column
		><Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '657fc3aa-b994-4b2b-b3ba-2722047de038',
				created_time: '2022-12-08T21:10:00.000Z',
				last_edited_time: '2022-12-08T21:11:00.000Z'
			}}
		>
			What Notion calls a page&ensp;<InlineCode code={'Name'} />,&ensp;<em>notion2svelte</em
			>&ensp;calls&ensp;<InlineCode code={'&lt;Title&gt;'} />. Why?
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: 'bb3b7391-b4b0-465d-8853-7815ae82c4ff',
				created_time: '2022-01-27T23:00:00.000Z',
				last_edited_time: '2022-12-08T21:21:00.000Z'
			}}
		/>
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '468d8c0d-68bb-4c1a-b22b-2fd4ed8aa0fb',
				created_time: '2022-01-27T23:00:00.000Z',
				last_edited_time: '2022-12-08T21:21:00.000Z'
			}}
		>
			Well, Notion pages tend to represent a variety of content types…pages, databases, to-dos,
			etc., so “Name” works as a generic term.&ensp;<em>notion2svelte</em>&ensp;is more targeted
			toward the publishing of creative writing, and&ensp;<InlineCode
				code={'&lt;Name&gt;Your page title&lt;/Name&gt;'}
			/>&ensp;just doesn’t feel right.
		</Paragraph>
	</Column><Column
		><Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '5f1b724d-2a6b-4384-b537-ccb7b87ffbbb',
				created_time: '2022-12-08T21:18:00.000Z',
				last_edited_time: '2022-12-08T21:19:00.000Z'
			}}
		>
			So…
		</Paragraph>
		<Image
			url="/assets/page-level-components/title/dc978147-eb34-4ad0-8b8b-75f795e735e7.png"
			caption=""
		/>
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '218902cb-f2d2-42b6-9aee-6cbe0ef3ff51',
				created_time: '2022-12-08T21:11:00.000Z',
				last_edited_time: '2022-12-08T21:18:00.000Z'
			}}
		>
			…becomes…
		</Paragraph>
		<Image
			url="/assets/page-level-components/title/2d566ebd-a19d-4260-92f1-db393aa585be.png"
			caption=""
		/>
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: 'd3a5cf17-4a9e-4be7-a5a4-6300498386e2',
				created_time: '2022-12-08T21:18:00.000Z',
				last_edited_time: '2022-12-08T21:18:00.000Z'
			}}
		/>
	</Column></ColumnList
><Callout emoji="💁🏼"
	>You don’t have to include a title on every page. In fact, the title of this site’s&ensp;<Link
		type="alias"
		href="/about-notion2svelte">home page</Link
	>&ensp;has no title.<span slot="children"
		><Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: 'd24b7f7f-3656-4c49-9c40-68b885b805b6',
				created_time: '2022-01-27T22:56:00.000Z',
				last_edited_time: '2022-01-27T23:00:00.000Z'
			}}
		>
			Every page does, however, need a&ensp;<Link
				type="alias"
				href="/high-level-discussion/rules-for-writing-good-slugs">slug</Link
			>.
		</Paragraph>
	</span></Callout
><Header level={1}>1. Notion original</Header>
<Image
	url="/assets/page-level-components/title/05ea4b27-27c0-4d3f-8d0e-9e35bbdde07f.png"
	caption=""
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
		created_time: '2022-01-28T20:26:00.000Z',
		last_edited_time: '2022-12-08T08:39:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&ensp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug]/notion-export.js</em></InlineColor
	>
</Paragraph>
<Code
	code={`\{
  &quot;object&quot;: &quot;page&quot;,
  …
  &quot;properties&quot;: \{
    …
    &quot;Name&quot;: \{
      &quot;id&quot;: &quot;title&quot;,
      &quot;type&quot;: &quot;title&quot;,
      &quot;title&quot;: [
        \{
          &quot;type&quot;: &quot;text&quot;,
          &quot;text&quot;: \{
            &quot;content&quot;: &quot;Title (aka Name)&quot;,
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
          &quot;plain_text&quot;: &quot;Title (aka Name)&quot;,
          &quot;href&quot;: null
        }
      ]
    }
  }
}`}
	language="javascript"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '28871a46-c697-4500-b517-1c526797ab38',
		created_time: '2022-01-28T20:32:00.000Z',
		last_edited_time: '2022-01-28T20:32:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&ensp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug].svelte</em></InlineColor
	>
</Paragraph>
<Code
	code={`&lt;svelte:head&gt;
	&lt;title&gt;Title (aka Name)&lt;/title&gt;
&lt;/svelte:head&gt;

&lt;Title&gt;Title (aka Name)&lt;/Title&gt;`}
	language="html"
	><em>notion2svelte</em>&ensp;renders&ensp;<InlineCode code={'&lt;svelte:head&gt;'} />&ensp;so that
	the browser tab matches the page title</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '96d976f1-b433-4aab-9fd5-2a9730267ccc',
		created_time: '2022-12-08T21:32:00.000Z',
		last_edited_time: '2022-12-08T21:35:00.000Z'
	}}
>
	See top of this page, rendered by&ensp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Title.svelte"
		>Title.svelte</Link
	>
</Paragraph>
<Divider />
<Header level={2}
	><Link type="alias" href="/about-notion2svelte">🏠</Link>&ensp;Browse the docs ⚘</Header
>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>&ensp;</BulletedListItem
		>
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
			><Link type="mention" href="/high-level-discussion/dot-env">Configuring your .env</Link
			>&ensp;</BulletedListItem
		>
		<Header level={3}>Turn-intoable Block Components</Header>
		<BulletedListItem
			><Link type="mention" href="/standard-components/paragraph">Paragraph (aka “Text”)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/header">Header</Link></BulletedListItem
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
			>Toggle Headings<InlineColor value="gray">&ensp;(not yet implemented)</InlineColor
			></BulletedListItem
		>
	</Column><Column
		><Header level={3}>Layout-only Components</Header>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link
			>&ensp;</BulletedListItem
		>
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
			><strong>bold</strong>&ensp;→&ensp;<InlineCode
				code={'&lt;strong&gt;'}
			/>&ensp;</BulletedListItem
		>
		<BulletedListItem
			><em>italic</em>&ensp;→&ensp;<InlineCode code={'&lt;em&gt;'} /></BulletedListItem
		>
		<BulletedListItem
			><s>strikethrough</s>&ensp;→&ensp;<InlineCode code={'&lt;s&gt;'} /></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/underline">Underline</Link></BulletedListItem
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
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '438eb05a-caea-4ef3-b64f-ab9e15140545',
				created_time: '2022-01-27T23:50:00.000Z',
				last_edited_time: '2022-01-27T23:50:00.000Z'
			}}
		/>
	</Column></ColumnList
>
