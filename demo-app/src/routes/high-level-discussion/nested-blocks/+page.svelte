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
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		title: 'Nested Blocks'
	});
</script>

<svelte:head>
	<title>Nested Blocks</title>
</svelte:head>

<Title>Nested Blocks</Title>

<Header level={1}>General Discussion</Header>
<Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: 'd3b9a212-3dcf-4dfe-9372-8b4bbdebfc17',
		created_time: '2022-01-15T06:49:00.000Z',
		last_edited_time: '2022-01-26T05:02:00.000Z'
	}}
>
	Notion allows nesting of most, if not all, of its interchangeable block types. While there are
	probably myriad subtle design details that the Notion team have considered when rendering nested
	blocks, the most obvious visual feature of these suckers is that they’re indented…
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '6a969adc5c004dfe9242ddd1fd223d42',
			id: '524faf01-04ae-4f83-9a0f-0569d4c0bd14',
			created_time: '2022-01-26T05:00:00.000Z',
			last_edited_time: '2022-01-26T05:00:00.000Z'
		}}
	>
		…like this.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '6a969adc5c004dfe9242ddd1fd223d42',
			id: '6b0ce6ee-0a93-494f-9750-b953ffb0f276',
			created_time: '2022-01-26T05:00:00.000Z',
			last_edited_time: '2022-01-26T05:01:00.000Z'
		}}
	>
		This, and the one above it. are both sub-blocks of the main paragraph, and, as such, you’ll
		probably want to indent sub-blocks in your own code!
	</Paragraph>
</IndentGroup>
<Header level={2}>How to Indent blocks</Header>
<Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: '28d4bc03-ba2c-44a5-9464-56b5e2ebf034',
		created_time: '2022-01-26T05:02:00.000Z',
		last_edited_time: '2022-01-26T05:03:00.000Z'
	}}
>
	Indenting’s handled by the&ensp;<Link type="mention" href="/layout-only-components/indent-group"
		>IndentGroup</Link
	>&ensp;component, which is wrapped around every group of sub-blocks…hence the name.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: '8e3e8d7c-416a-4a79-af7d-9e333ca6ec70',
		created_time: '2022-01-26T05:03:00.000Z',
		last_edited_time: '2022-01-26T22:48:00.000Z'
	}}
>
	The most basic version of this component might look something like this:
</Paragraph>
<IndentGroup>
	<Code
		code={`&lt;div&gt;&lt;slot /&gt;&lt;/div&gt;

&lt; style&gt;*
  div \{
    padding-left: 1.5rem;
  }
&lt;/style&gt;`}
		language="html"
		><InlineColor value="gray">↑ [svelte-root]/</InlineColor><InlineColor value="gray"
			><em
				>src/lib/notion2svelte/IndentGroup.svelte
				<br />
			</em></InlineColor
		><em>
			<br />
		</em>*Sigh.&ensp;<em>notion2svelte</em>&ensp;has some issues, in part thanks to its (mis?)use of
		Prettier, with certain uses of angle brackets, hence the space before “style”.&ensp;<Link
			type="absolute"
			href="https://github.com/nvlgzr/notion2svelte/discussions">Message me</Link
		>&ensp;if you have some thoughts on how to completely crush this class of bugs as it’s doing my
		head in. 😬</Code
	>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: '67fffd45-af99-41fd-b434-e7da16c5df70',
		created_time: '2022-01-26T05:06:00.000Z',
		last_edited_time: '2022-01-27T07:08:00.000Z'
	}}
>
	This simple implementation is literally all you need to nest&ensp;<Link
		type="absolute"
		href="http://hyperboleandahalf.blogspot.com/2010/06/this-is-why-ill-never-be-adult.html"
		>All the Things™</Link
	>!
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: '9f2dcec3-fe75-40ef-a833-c4a3e7b4ad1e',
		created_time: '2022-01-26T05:16:00.000Z',
		last_edited_time: '2022-01-26T05:16:00.000Z'
	}}
/>
<Callout emoji="🦦"
	>To jump start your components (including your IndentGroup component), check out:&ensp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/n2s-starter-components">n2s Starter Components</Link
	>.</Callout
><Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: '673a13c8-fd25-4cec-910d-d6d2d55683f1',
		created_time: '2022-01-26T05:10:00.000Z',
		last_edited_time: '2022-01-26T05:10:00.000Z'
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
	</Column></ColumnList
><Paragraph
	blockProps={{
		pageId: '6a969adc5c004dfe9242ddd1fd223d42',
		id: 'c358d816-a554-4bdc-b9a7-b7acb802cd95',
		created_time: '2022-01-24T06:50:00.000Z',
		last_edited_time: '2022-01-24T06:50:00.000Z'
	}}
/>
