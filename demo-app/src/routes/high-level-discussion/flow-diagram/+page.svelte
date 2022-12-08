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
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		title: 'Where notion2svelte Fits'
	});
</script>

<svelte:head>
	<title>Where notion2svelte Fits</title>
</svelte:head>

<Cover
	coverURL={'/assets/high-level-discussion/flow-diagram/cover.png'}
	iconEmojiOrURL={'undefined'}
/>

<Title>Where notion2svelte Fits</Title>

<Header level={1}>Two obvious assumptions</Header>
<NumberedListItem number="1">You want to write in Notion</NumberedListItem>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '98837014-5630-4695-a790-321603f74f72',
			created_time: '2022-02-17T21:54:00.000Z',
			last_edited_time: '2022-02-17T21:54:00.000Z'
		}}
	/>
	<Image
		url="/assets/high-level-discussion/flow-diagram/0702cae0-fa81-4d2d-a67e-a9234ee44bb1.png"
		caption=""
	/>
</IndentGroup>
<NumberedListItem number="2">You want to publish from Svelte</NumberedListItem>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '545738ac-b8e0-4a9d-be01-f6598a68b09f',
			created_time: '2022-02-17T21:54:00.000Z',
			last_edited_time: '2022-02-17T21:54:00.000Z'
		}}
	/>
	<Image
		url="/assets/high-level-discussion/flow-diagram/30d993da-1075-4f62-9ab6-0af73f1fdfe2.png"
		caption=""
	/>
</IndentGroup>
<Header level={1}>One unusual assumption</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '29bf3a83-71b3-4bdc-a58d-a6675d839f2b',
		created_time: '2022-02-17T21:52:00.000Z',
		last_edited_time: '2022-12-04T01:07:00.000Z'
	}}
>
	You want all long-lived content to be stored in git as a means toward:
</Paragraph>
<IndentGroup>
	<BulletedListItem>Rich content diffs</BulletedListItem>
	<BulletedListItem>Zero dependencies between Notion and Svelte</BulletedListItem>
	<BulletedListItem>Guaranteed synchronicity between code and content</BulletedListItem>
	<Image
		url="/assets/high-level-discussion/flow-diagram/e015942f-62ad-4df0-9f4a-16d117d5d01f.png"
		caption=""
	/>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'c4c2bf3c-e552-436a-b8e8-1f584ba6cb18',
		created_time: '2022-02-17T22:00:00.000Z',
		last_edited_time: '2022-12-04T01:07:00.000Z'
	}}
>
	Which brings us to&ensp;<em>notion2svelte,&ensp;</em>a tool whose sole purpose is transforming
	Notion pages into&ensp;<em>.svelte</em>&ensp;files
</Paragraph>
<Header level={1}>Fetching</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '78f95021-c376-4fe4-bd13-d3fbc28f18a9',
		created_time: '2022-02-17T22:02:00.000Z',
		last_edited_time: '2022-12-04T01:07:00.000Z'
	}}
>
	I forgot to include it in these diagrams, but you’ll need a&ensp;<em>.env</em
	>&ensp;file,&ensp;<Link type="alias" href="/high-level-discussion/dot-env"
		>properly configured</Link
	>, and stored wherever you intend to run&ensp;<InlineCode code={'npx notion2svelte'} />:
	typically, the root of your Svelte app
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '14e60cd2-3d44-4ec2-8495-4ac8d298567f',
		created_time: '2022-02-17T23:05:00.000Z',
		last_edited_time: '2022-02-17T23:07:00.000Z'
	}}
>
	Anyway, once it’s able to query your document database in Notion,&ensp;<em>notion2svelte</em
	>&ensp;first fetches top-level data for all pages where&ensp;<em>Status: Publishable*…</em>
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '2b0544a4-a504-410e-b402-2dd8cdf73582',
			created_time: '2022-02-17T23:06:00.000Z',
			last_edited_time: '2022-02-17T23:07:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>*Or some other value, if you’ve set an override in your .env</InlineColor
		>
	</Paragraph>
</IndentGroup>
<Image
	url="/assets/high-level-discussion/flow-diagram/911d9023-87e7-4a51-aae9-11241ce75c9d.png"
	caption=""
/>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '693c3a13-597e-4932-985d-2a92e5f5b0da',
		created_time: '2022-02-17T23:07:00.000Z',
		last_edited_time: '2022-02-17T23:07:00.000Z'
	}}
>
	…then, for each fetched page,&ensp;<em>notion2svelte</em>&ensp;recursively fetches all blocks
	needed to render that page
</Paragraph>
<Image
	url="/assets/high-level-discussion/flow-diagram/601efbcd-7b58-4854-b6ec-1e984c227018.png"
	caption=""
/>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'fe5c5749-da8d-458c-b271-6da8e78359c5',
		created_time: '2022-02-17T23:09:00.000Z',
		last_edited_time: '2022-02-17T23:12:00.000Z'
	}}
>
	The end result is a fully-fleshed out, in-memory* Page object
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '0ab60f0b-c2d7-4c06-9556-6d9b84de07aa',
			created_time: '2022-02-17T23:10:00.000Z',
			last_edited_time: '2022-02-17T23:12:00.000Z'
		}}
	>
		<InlineColor value="gray">*As of&ensp;</InlineColor><InlineColor value="gray"
			><em>notion2svelte 0.0.1</em></InlineColor
		><InlineColor value="gray">, this object gets serialized to a&ensp;</InlineColor><InlineColor
			value="gray"><em>.json</em></InlineColor
		><InlineColor value="gray"
			>&ensp;file with the same root filename as the output&ensp;</InlineColor
		><InlineColor value="gray"><em>.svelte</em></InlineColor><InlineColor value="gray"
			>, providing maximum flexibility to the end user with minimal effort on my part 😬</InlineColor
		>
	</Paragraph>
</IndentGroup>
<Header level={1}>Rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'fad77505-c88a-4b3a-8648-abdeb3965e88',
		created_time: '2022-02-17T23:12:00.000Z',
		last_edited_time: '2022-02-17T23:19:00.000Z'
	}}
>
	Once the entire page has been collated,&ensp;<em>notion2svelte</em>&ensp;converts every* element
	on the page — title, cover art, icon, and blocks — into a corresponding Svelte component, nesting
	components as appropriate, and providing imports in a&ensp;<InlineCode
		code={'&lt;script&gt;'}
	/>&ensp;tag
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '149d3bb8-348e-483e-bc7a-487f82c4df60',
			created_time: '2022-02-17T23:16:00.000Z',
			last_edited_time: '2022-12-08T05:20:00.000Z'
		}}
	>
		<InlineColor value="gray">*Well, not&ensp;</InlineColor><InlineColor value="gray"
			><em>every</em></InlineColor
		><InlineColor value="gray"
			>&ensp;element. I haven’t gotten around to the hybrid Toggle Header blocks, nor to tables. Nor
			have I looked into supporting any of the custom 3rd party integrations, not having had the
			need. Oh, and while page props aren’t rendered by notion2svelte, you can do what you wish with
			them by exposing Notion props as&ensp;</InlineColor
		><Link type="mention" href="/high-level-discussion/block-props"
			><InlineColor value="gray">blockProps</InlineColor></Link
		><InlineColor value="gray">.</InlineColor>
	</Paragraph>
</IndentGroup>
<Image
	url="/assets/high-level-discussion/flow-diagram/82f08bf6-fa03-4e0a-b758-844225cf9e9e.png"
	caption=""
/>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '913f1214-f3f1-4d39-a621-7ab9541b749e',
		created_time: '2022-02-17T23:19:00.000Z',
		last_edited_time: '2022-02-17T23:21:00.000Z'
	}}
>
	You provide the actual component implementations, stored in&ensp;<em>src/lib/notion2svelte</em>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '883893b5-a0c9-42cf-a369-4f36b64a3e79',
		created_time: '2022-02-17T23:21:00.000Z',
		last_edited_time: '2022-02-17T23:22:00.000Z'
	}}
>
	On the surface, there’s not much else to say about this particular detail, as this is basically
	just Svelte 101!
</Paragraph>
<Image
	url="/assets/high-level-discussion/flow-diagram/66b337c4-3c7c-49ef-8a55-ed177bc39e02.png"
	caption=""
/>
<BulletedListItem
	>You’ve got&ensp;<em>.svelte</em>&ensp;files output by&ensp;<em>notion2svelte</em
	></BulletedListItem
>
<BulletedListItem>These import components from&ensp;<em>src/lib/notion2svelte</em></BulletedListItem
>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'b10c3166-7a1e-4782-9c26-806b638c47da',
		created_time: '2022-02-17T23:25:00.000Z',
		last_edited_time: '2022-02-17T23:27:00.000Z'
	}}
>
	Those two banal statements are at the root of&ensp;<em>notion2svelte’s</em>&ensp;power. Put
	another way,&ensp;<em>notion2svelte</em>&ensp;is as flexible and as powerful as Svelte, because,
	in the end, Svelte is all you’re really dealing with…and Svelte is forking awesome!
</Paragraph>
<Header level={1}>Putting it all together</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '3b75bf32-8f06-4174-b3e9-d05b927d4429',
		created_time: '2022-02-17T23:28:00.000Z',
		last_edited_time: '2022-02-17T23:32:00.000Z'
	}}
>
	Once you’ve verified that your newly-rendered page(s) look and behave as expected, and maybe
	scanned the git diff for undesirable changes, it’s time to commit and, when you’re ready for the
	changes to go publish, to push
</Paragraph>
<Image
	url="/assets/high-level-discussion/flow-diagram/c0a3133a-068a-49b8-bc3c-0f9bb69bd69f.png"
	caption="The full* workflow">The full* workflow</Image
>
<Header level={3}>The role of&ensp;<em>Publishable</em></Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '6cfda875-62bc-4b37-a8da-2f30708ed05e',
		created_time: '2022-02-17T23:33:00.000Z',
		last_edited_time: '2022-02-17T23:34:00.000Z'
	}}
>
	Notion’s API requires a&ensp;<em>minimum</em>&ensp;of n+1 fetches for every page, where n is the
	number of blocks on the page
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '8006c571-e5b3-4b24-8cb3-acab2daeedc6',
		created_time: '2022-02-17T23:34:00.000Z',
		last_edited_time: '2022-02-17T23:44:00.000Z'
	}}
>
	Aside from wasting server resources, this can also waste your time, since fetching loads of pages
	can stretch out to dozens of seconds, or even minutes
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '498eb5d4-43d3-4585-9997-76364f626c8b',
		created_time: '2022-02-17T23:44:00.000Z',
		last_edited_time: '2022-12-04T00:50:00.000Z'
	}}
>
	As such, you’ll probably want to change each page’s Status to (e.g.)&ensp;<em>Published</em
	>&ensp;once it’s been processed by&ensp;<em>notion2svelte</em>
</Paragraph>
<Image
	url="/assets/high-level-discussion/flow-diagram/72ff9d21-461b-4559-b4f1-b1a9f8357499.png"
	caption=""
/>
<Header level={1}>Ejecting</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '7a182a01-3a79-43a0-9c51-927349ed304f',
		created_time: '2022-02-17T23:48:00.000Z',
		last_edited_time: '2022-12-04T00:53:00.000Z'
	}}
>
	If you want to keep the pages generated by&ensp;<em>notion2svelte</em>, but otherwise remove its
	presence from your project:
</Paragraph>
<NumberedListItem number="1">
	Uninstall&ensp;<em>notion2svelte</em>&ensp;<InlineCode
		code={'npm uninstall -g notion2svelte'}
	/></NumberedListItem
>
<NumberedListItem number="2">
	Remove your&ensp;<em>.env</em>, or at least the bits relevant to&ensp;<em>notion2svelte</em
	></NumberedListItem
>
<NumberedListItem number="3">
	Rename the&ensp;<InlineCode code={'lib/notion2svelte/'} />&ensp;components directory, and
	references thereto</NumberedListItem
>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'bd3f7831-9b91-467a-8d23-69a71e492cde',
		created_time: '2022-12-04T01:02:00.000Z',
		last_edited_time: '2022-12-04T01:02:00.000Z'
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
