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

<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '5db03761-ca67-415e-bc18-b27460fb36bb',
		created_time: '2022-01-27T22:52:00.000Z',
		last_edited_time: '2022-01-28T23:35:00.000Z'
	}}
>
	That’s is the page Title ↑
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '1d483a96-d4bc-4a24-991d-83599b279fec',
		created_time: '2022-01-27T22:53:00.000Z',
		last_edited_time: '2022-01-27T22:53:00.000Z'
	}}
/>
<ColumnList cols={2}
	><Column
		><Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: 'ae48042e-7988-441b-a5b7-1ffd02817a04',
				created_time: '2022-01-27T23:00:00.000Z',
				last_edited_time: '2022-01-27T23:02:00.000Z'
			}}
		>
			There’s nothing much to know about titles, except perhaps that Notion’s default term for this
			concept is&ensp;<em>Name</em>, as shown in this screenshot.
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '2011c59ae02b40b682f7ee828c3d51fe',
				id: '720820bd-da7c-4685-a1f6-04d472032992',
				created_time: '2022-01-27T23:02:00.000Z',
				last_edited_time: '2022-01-28T23:38:00.000Z'
			}}
		>
			Since I’m building&ensp;<em>notion2svelte&ensp;</em>in the context of publishing written
			pieces (as opposed to tracking TODOs or any of the other myriad things that a notion Page
			might be “naming”), I chose&ensp;<em>Title</em>&ensp;as the more contextually appropriate
			component name.
		</Paragraph>
	</Column><Column
		><Image
			url="/assets/page-level-components/title/45f4b177-1575-412a-9686-36a88bc1602b.png"
			caption=""
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
><Header level={1}><strong>Notion API (as of this writing)</strong></Header>
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
/><Header level={1}><strong>Svelte output</strong></Header>
<Code
	code={`&lt;svelte:head&gt;
  &lt;title&gt;Title (aka Name)&lt;/title&gt;
&lt;/svelte:head&gt;

&lt;Title&gt;Title (aka Name)&lt;/Title&gt;`}
	language="html"
	>Note that&ensp;<em>notion2svelte</em>&ensp;sets both the browser tab title, as well as rendering
	a Title component</Code
><Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: '7bae5cd5-b698-46e5-9a9a-f32d71760429',
		created_time: '2022-01-28T23:12:00.000Z',
		last_edited_time: '2022-01-28T23:12:00.000Z'
	}}
/>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: 'da6e854f-8314-4104-a301-4622f0c24376',
		created_time: '2022-01-28T23:12:00.000Z',
		last_edited_time: '2022-01-31T07:55:00.000Z'
	}}
>
	<InlineColor value="gray">For the code used to render&ensp;</InlineColor><InlineColor value="gray"
		><em>this</em></InlineColor
	><InlineColor value="gray">&ensp;page’s Title, see&ensp;</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Title.svelte"
		><InlineColor value="gray">Title.svelte</InlineColor></Link
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '2011c59ae02b40b682f7ee828c3d51fe',
		id: 'd3d1a805-183c-4d3a-a583-19513c753ee1',
		created_time: '2022-01-27T23:08:00.000Z',
		last_edited_time: '2022-01-28T23:12:00.000Z'
	}}
/>
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
