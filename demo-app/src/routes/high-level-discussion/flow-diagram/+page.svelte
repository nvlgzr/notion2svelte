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
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		title: 'Where notion2svelte Fits'
	});
</script>

<svelte:head>
	<title>Where notion2svelte Fits</title>
</svelte:head>

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
	/>
</IndentGroup>
<Header level={1}>One unusual assumption</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '29bf3a83-71b3-4bdc-a58d-a6675d839f2b',
		created_time: '2022-02-17T21:52:00.000Z',
		last_edited_time: '2022-02-17T21:56:00.000Z'
	}}
>
	You want all long-lived content to be stored in git as a means toward:
</Paragraph>
<BulletedListItem>Rich content diffs</BulletedListItem>
<BulletedListItem>Zero dependencies between Notion and Svelte</BulletedListItem>
<BulletedListItem>Guaranteed synchronicity between code and content</BulletedListItem>
<BulletedListItem>…and more!</BulletedListItem>
<IndentGroup>
	<Image
		url="/assets/high-level-discussion/flow-diagram/e015942f-62ad-4df0-9f4a-16d117d5d01f.png"
	/>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'c4c2bf3c-e552-436a-b8e8-1f584ba6cb18',
		created_time: '2022-02-17T22:00:00.000Z',
		last_edited_time: '2022-02-17T22:02:00.000Z'
	}}
>
	Which brings us to <em>notion2svelte</em>…a tool whose sole purpose is transforming Notion pages
	into <em>.svelte</em> files
</Paragraph>
<Header level={1}>Fetching</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '78f95021-c376-4fe4-bd13-d3fbc28f18a9',
		created_time: '2022-02-17T22:02:00.000Z',
		last_edited_time: '2022-02-18T07:45:00.000Z'
	}}
>
	I forgot to include it in these diagrams, but you’ll need a <em>.env</em> file, <Link
		type="alias"
		href="/high-level-discussion/dot-env">properly configured</Link
	>, and stored wherever you intend to run <InlineCode code={'npx notion2svelte'} />…typically, the
	root of your Svelte app
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '14e60cd2-3d44-4ec2-8495-4ac8d298567f',
		created_time: '2022-02-17T23:05:00.000Z',
		last_edited_time: '2022-02-17T23:07:00.000Z'
	}}
>
	Anyway, once it’s able to query your document database in Notion, <em>notion2svelte</em> first
	fetches top-level data for all pages where <em>Status: Publishable*…</em>
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
<Image url="/assets/high-level-discussion/flow-diagram/911d9023-87e7-4a51-aae9-11241ce75c9d.png" />
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '693c3a13-597e-4932-985d-2a92e5f5b0da',
		created_time: '2022-02-17T23:07:00.000Z',
		last_edited_time: '2022-02-17T23:07:00.000Z'
	}}
>
	…then, for each fetched page, <em>notion2svelte</em> recursively fetches all blocks needed to render
	that page
</Paragraph>
<Image url="/assets/high-level-discussion/flow-diagram/601efbcd-7b58-4854-b6ec-1e984c227018.png" />
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
		<InlineColor value="gray">*As of</InlineColor><InlineColor value="gray"
			><em>notion2svelte 0.0.1</em></InlineColor
		><InlineColor value="gray">, this object gets serialized to a</InlineColor><InlineColor
			value="gray"><em>.json</em></InlineColor
		><InlineColor value="gray">
			file with the same root filename as the output
		</InlineColor><InlineColor value="gray"><em>.svelte</em></InlineColor><InlineColor value="gray"
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
	Once the entire page has been collated, <em>notion2svelte</em> converts every* element on the page
	— title, cover art, icon, and blocks — into a corresponding Svelte component, nesting components
	as appropriate, and providing imports in a <InlineCode code={'&lt;script&gt;'} /> tag
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '149d3bb8-348e-483e-bc7a-487f82c4df60',
			created_time: '2022-02-17T23:16:00.000Z',
			last_edited_time: '2022-02-17T23:19:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>*Except for newer types not yet implemented (looking at you, Toggle Header blocks & tables!),
			all the special
		</InlineColor><InlineColor value="gray"><em>embed-type</em></InlineColor><InlineColor
			value="gray"
		>
			blocks, and page props</InlineColor
		>
	</Paragraph>
</IndentGroup>
<Image url="/assets/high-level-discussion/flow-diagram/82f08bf6-fa03-4e0a-b758-844225cf9e9e.png" />
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '913f1214-f3f1-4d39-a621-7ab9541b749e',
		created_time: '2022-02-17T23:19:00.000Z',
		last_edited_time: '2022-02-17T23:21:00.000Z'
	}}
>
	You provide the actual component implementations, stored in <em>src/lib/notion2svelte</em>
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
<Image url="/assets/high-level-discussion/flow-diagram/66b337c4-3c7c-49ef-8a55-ed177bc39e02.png" />
<BulletedListItem
	>You’ve got <em>.svelte</em> files output by <em>notion2svelte</em></BulletedListItem
>
<BulletedListItem>These import components from <em>src/lib/notion2svelte</em></BulletedListItem>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: 'b10c3166-7a1e-4782-9c26-806b638c47da',
		created_time: '2022-02-17T23:25:00.000Z',
		last_edited_time: '2022-02-17T23:27:00.000Z'
	}}
>
	Those two banal statements are at the root of <em>notion2svelte’s</em> power. Put another way,
	<em>notion2svelte</em> is as flexible and as powerful as Svelte, because, in the end, Svelte is all
	you’re really dealing with…and Svelte is forking awesome!
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
<Image url="/assets/high-level-discussion/flow-diagram/c0a3133a-068a-49b8-bc3c-0f9bb69bd69f.png"
	>The full* workflow</Image
>
<Header level={3}>The role of <em>Publishable</em></Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '6cfda875-62bc-4b37-a8da-2f30708ed05e',
		created_time: '2022-02-17T23:33:00.000Z',
		last_edited_time: '2022-02-17T23:34:00.000Z'
	}}
>
	Notion’s API requires a <em>minimum</em> of n+1 fetches for every page, where n is the number of blocks
	on the page
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
		last_edited_time: '2022-02-17T23:48:00.000Z'
	}}
>
	As such, you’ll probably want to change each page’s Status to <em>Published</em> (or whatever)
	once it’s been processed by <em>notion2svelte</em>
</Paragraph>
<Image url="/assets/high-level-discussion/flow-diagram/72ff9d21-461b-4559-b4f1-b1a9f8357499.png" />
<Header level={1}>Ejecting</Header>
<Paragraph
	blockProps={{
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
		id: '7a182a01-3a79-43a0-9c51-927349ed304f',
		created_time: '2022-02-17T23:48:00.000Z',
		last_edited_time: '2022-02-17T23:51:00.000Z'
	}}
>
	There is no <em>eject</em> function for <em>notion2svelte</em>, nor is one needed because it is
	intentionally decoupled from Notion: to “eject,” just don’t run <em>notion2svelte</em> again 😜
</Paragraph>
<Image url="/assets/high-level-discussion/flow-diagram/b63f62ad-5afc-452b-8a58-df4a022d0703.png" />
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
		pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
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
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
			created_time: '2022-01-26T09:47:00.000Z',
			last_edited_time: '2022-01-27T05:14:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
			works for you if you’re not running macOS! That said, I suspect my reliance on
		</InlineColor><Link type="absolute" href="https://fishshell.com/"
			><InlineColor value="gray">fish shell</InlineColor></Link
		><InlineColor value="gray">
			is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app, after
			all, so it should be pretty portable!</InlineColor
		>
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
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
			pageId: 'f16dfed7beb54a71b67435e17e7e33e5',
			id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
			created_time: '2022-01-27T05:10:00.000Z',
			last_edited_time: '2022-01-27T05:10:00.000Z'
		}}
	/>
</IndentGroup>
<Divider />
<Header level={2}
	>Browse the docs ⚘ <Link type="alias" href="/about-notion2svelte">🏠</Link>
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
			>Toggle Headings<InlineColor value="gray">
				(not yet implemented)</InlineColor
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
			><strong>bold</strong> → <InlineCode code={'&lt;strong&gt;'} />
		</BulletedListItem>
		<BulletedListItem><em>italic</em> → <InlineCode code={'&lt;em&gt;'} /></BulletedListItem>
		<BulletedListItem><s>strikethrough</s> → NYI</BulletedListItem>
		<BulletedListItem
			><span style="text-decoration:underline;">underline</span> → NYI</BulletedListItem
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
