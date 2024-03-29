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
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		title: 'Error'
	});
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Error</Title>

<Header level={1}>Motivation</Header>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '6c2f4ec0-ec56-43d8-b167-197c024ed45e',
		created_time: '2022-01-31T20:49:00.000Z',
		last_edited_time: '2022-01-31T20:52:00.000Z'
	}}
>
	While in the middle of developing&ensp;<em>notion2svelte</em>, I became frustrated whenever some
	uncaught error would crash&ensp;<em>notion2svelte</em>. First there would be the confusion of “why
	isn’t it rendering as I expected?”. Then there was an inevitable scramble to look in various
	consoles for an error.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '8446f18f-d5a5-4310-8140-4475a04989ec',
		created_time: '2022-01-31T20:52:00.000Z',
		last_edited_time: '2022-01-31T20:53:00.000Z'
	}}
>
	So I added a top-level catch-all for unexpected rendering errors that allows you to present them
	in-context and with as much (or as little!) visual presence as desired.
</Paragraph>
<Header level={1}>Demo</Header>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: 'ea40e332-ab16-4628-af73-cb7dae8a6f8f',
		created_time: '2022-01-31T20:57:00.000Z',
		last_edited_time: '2022-12-08T08:51:00.000Z'
	}}
>
	In the Notion database that hosts my source files for this site, I have a page called&ensp;<em
		>README (For Visitors)</em
	>. I don’t ever intend to publish that file here, and so it has no slug, nor have I marked it
	Publishable before running&ensp;<em>notion2svelte.</em>&ensp;Point being,&ensp;<em
		>notion2svelte</em
	>&ensp;doesn’t recognize it, and so it throws an error.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '3919a7a0-4bc5-4844-a974-b0aade6e8a55',
		created_time: '2022-01-31T21:00:00.000Z',
		last_edited_time: '2022-12-08T08:56:00.000Z'
	}}
>
	Rather than bring the entire process to a halt or hoping that you notice an error in the Console,
	notion2svelte handles the error by rendering it right into your document using the&ensp;<InlineCode
		code={'Error'}
	/>&ensp;component. There, you can simply render something hideous and obviously wrong that you
	couldn’t possibly ship on accident, or you could maybe use the component to pass such errors
	through to a notification system, or to collate errors into a single report.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: 'e9387481-3d80-4145-a72c-0d246cf05d93',
		created_time: '2022-12-08T08:56:00.000Z',
		last_edited_time: '2022-12-08T08:56:00.000Z'
	}}
>
	Ok, enough with the hypotheticals. Time for that demo.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: 'a32c97dd-3644-4f9e-94a9-386ac4591024',
		created_time: '2022-01-31T21:01:00.000Z',
		last_edited_time: '2022-01-31T21:02:00.000Z'
	}}
>
	<em>Ready?</em>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '7f37dad1-a0c6-4950-8b61-7e141fee0698',
		created_time: '2022-01-31T21:01:00.000Z',
		last_edited_time: '2022-01-31T21:02:00.000Z'
	}}
>
	Here we go.
</Paragraph>
<Header level={1}>1. Notion original</Header>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '13d85d1a-f21a-4e07-bbef-61ef5d788e53',
		created_time: '2022-12-08T08:50:00.000Z',
		last_edited_time: '2022-12-08T09:07:00.000Z'
	}}
>
	Because&ensp;<Link
		type="absolute"
		href="https://notion.so/nvlgzr/README-For-Visitors-4bd575791670432f9125a2fb8d3d8af7"
		>↓ this page</Link
	>&ensp;has never been marked Publishable during a local run of&ensp;<em>notion2svelte…</em>
</Paragraph>
<Image url="/assets/other-components/error/719944fb-1ec8-42b5-9e29-4d4f54a31f4f.png" caption="" />
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: 'bb996f3c-5c3b-41e7-a1d7-4b8bff9503a5',
		created_time: '2022-12-08T08:58:00.000Z',
		last_edited_time: '2022-12-08T09:10:00.000Z'
	}}
>
	…attempts to link to it fail because&ensp;<em>notion2svelte</em>&ensp;recognizes it as an internal
	site link, but can’t find a mapping for it in&ensp;<em>notion2svelte_id-to-slug.json.</em
	>&ensp;You don’t need to understand it. The point is, it’s enough to trigger a rendering error.
</Paragraph>
<Header level={1}>2. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '46e3a8bc-fa08-46a6-882c-d94023fe4e10',
		created_time: '2022-01-28T00:11:00.000Z',
		last_edited_time: '2022-12-08T08:49:00.000Z'
	}}
>
	Rendered by <Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Error.svelte"
		>Error.svelte</Link
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: '94cefb63-d7d8-4190-a17b-07da543c24a9',
		created_time: '2022-12-08T08:45:00.000Z',
		last_edited_time: '2022-12-08T08:49:00.000Z'
	}}
>
	<p
		style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
	>
		⚠️ l(t, type, url): <span
			style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
			>README (For Visitors).</span
		>&nbsp;No slug found for mention w/text: README (For Visitors)'. Have you imported the target
		page with notion2svelte yet?
	</p>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f8b93766ebbc4211a1e74d4475d3d8a4',
		id: 'deb0312e-c7dd-426f-9236-ec48afa175c4',
		created_time: '2022-12-08T08:35:00.000Z',
		last_edited_time: '2022-12-08T08:35:00.000Z'
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
	</Column></ColumnList
>
