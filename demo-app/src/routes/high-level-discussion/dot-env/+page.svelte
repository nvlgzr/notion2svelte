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
		pageId: '3c584e911b5c4378b120e3cf62797212',
		title: 'Configuring your .env'
	});
</script>

<svelte:head>
	<title>Configuring your .env</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'📄'} />
<Title>Configuring your .env</Title>

<Callout emoji="🧸"
	>This information on this page can also be found in&nbsp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/.env-sample"><em>.env-sample</em></Link
	></Callout
><Header level={1}>Required key</Header>
<Code code={`NOTION_API_KEY=secret_QoIn8edvksjn…`} language="typescript" /><Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'f25daf26-976e-4775-88e5-ba8db824bf47',
		created_time: '2022-02-17T22:10:00.000Z',
		last_edited_time: '2022-02-18T07:45:00.000Z'
	}}
>
	In order to fetch data from your Notion account,&nbsp;<em>notion2svelte</em>&nbsp;needs a
	“secret,” which you can generate by following&nbsp;<Link
		type="absolute"
		href="https://developers.notion.com/docs/getting-started">these instructions</Link
	>.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'd4db75fb-3ab2-461a-b777-534cc6ec7f0e',
		created_time: '2022-02-17T22:14:00.000Z',
		last_edited_time: '2022-02-18T07:45:00.000Z'
	}}
>
	<em>notion2svelte</em>&nbsp;is designed to interface with your pages via a Notion database, so
	make sure that said database is connected to whatever secret you use for&nbsp;<InlineCode
		code={'NOTION_API_KEY'}
	/>&nbsp;via a Notion “Integration”.
</Paragraph>
<Header level={1}>Optional keys</Header>
<Header level={2}>Regular use</Header>
<Code
	code={`PUBLISHABLE_STATUS=Publishable
OUTPUT_PATH=
OUTPUT_STATIC_FOLDER=`}
	language="typescript">Default values if left unset</Code
><Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: '128fc387-9f0f-4fe2-9a36-25ad25d5eda6',
		created_time: '2022-02-17T22:21:00.000Z',
		last_edited_time: '2022-02-18T07:45:00.000Z'
	}}
>
	<InlineCode code={'PUBLISHABLE_STATUS'} />&nbsp;defines the string that&nbsp;<em>notion2svelte</em
	>&nbsp;uses to filter against your pages’&nbsp;<em>Status</em>&nbsp;prop; if&nbsp;<em>Status</em
	>&nbsp;is not set to (by default)&nbsp;<em>Publishable</em>, the page won’t be included.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'e355ca46-72cc-48fa-9aae-85861f9f9f8f',
		created_time: '2022-02-17T22:23:00.000Z',
		last_edited_time: '2022-02-18T07:45:00.000Z'
	}}
>
	<InlineCode code={'OUTPUT_PATH'} />&nbsp;tells&nbsp;<em>notion2svelte</em>&nbsp;where to
	save&nbsp;<em>.svelte</em>&nbsp;files. If left empty (the default),&nbsp;<em>notion2svelte</em
	>&nbsp;will output to the current directory.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: '32c7e402-c4a5-4cc3-9982-0ae0703c7d01',
		created_time: '2022-02-17T22:26:00.000Z',
		last_edited_time: '2022-02-18T07:46:00.000Z'
	}}
>
	<InlineCode code={'OUTPUT_STATIC_FOLDER'} />&nbsp;tells&nbsp;<em>notion2svelte</em>&nbsp;where to
	save&nbsp;<em>media</em>&nbsp;files, esp. images. Again, the default is empty, meaning images will
	be stored in&nbsp;<em>./static/<page-id>/…</page-id></em>
</Paragraph>
<Header level={2}>Debugging</Header>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: '002268c4-b0a1-4666-8da4-f8247f5d093f',
		created_time: '2022-02-17T22:32:00.000Z',
		last_edited_time: '2022-02-18T07:46:00.000Z'
	}}
>
	While building&nbsp;<em>notion2svelte</em>, I found myself frequently needing to rerun the tool
	repeatedly on a single page.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: '234f0621-3ee4-4b73-ba58-c1a060278090',
		created_time: '2022-02-17T22:33:00.000Z',
		last_edited_time: '2022-02-18T07:46:00.000Z'
	}}
>
	Since the content of that page often didn’t change much, I also found myself wanting to run the
	JSON→.svelte conversion without re-fetching each time. Thus were born these last three options:
</Paragraph>
<Code
	code={`NOTION_TEST_PAGE_ID=b0f0dfbbthisisfakecd9039c7466476
CACHE_TOKEN=b0f0dfbbthisisfakecd9039c7466476
# FORCE_REFRESH=true`}
	language="typescript"
/><Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'f90b7543-07a8-4991-9078-657e20da25f5',
		created_time: '2022-02-17T22:35:00.000Z',
		last_edited_time: '2022-02-18T07:46:00.000Z'
	}}
>
	<InlineCode code={'NOTION_TEST_PAGE_ID'} />&nbsp;skips the pages-from-database loop, and fetches
	just the one page specified.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'caba7b12-b1ee-4a30-afe2-27531d17288c',
		created_time: '2022-02-17T22:36:00.000Z',
		last_edited_time: '2022-02-18T07:48:00.000Z'
	}}
>
	<InlineCode code={'CACHE_TOKEN'} />&nbsp;helps&nbsp;<em>notion2svelte</em>&nbsp;whether it should
	fetch the test page:
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '3c584e911b5c4378b120e3cf62797212',
			id: 'a507b69d-ba96-450f-96f1-448a763ed784',
			created_time: '2022-02-17T22:37:00.000Z',
			last_edited_time: '2022-02-18T07:51:00.000Z'
		}}
	>
		<em>If</em>&nbsp;the cache token&nbsp;<em>matches</em>&nbsp;the test page id,&nbsp;<em
			>notion2svelte</em
		>&nbsp;will skip fetching, and instead read the page object from locally-stored* JSON.
	</Paragraph>
	<IndentGroup>
		<Paragraph
			blockProps={{
				pageId: '3c584e911b5c4378b120e3cf62797212',
				id: '43be2b89-7edd-41e9-824c-617d4ebba004',
				created_time: '2022-02-17T22:45:00.000Z',
				last_edited_time: '2022-02-18T07:51:00.000Z'
			}}
		>
			<InlineColor value="gray">*In&nbsp;</InlineColor><InlineColor value="gray"
				><em>notion2svelte 0.0.1</em></InlineColor
			><InlineColor value="gray">, a&nbsp;</InlineColor><InlineColor value="gray"
				><em><slug>.json</slug></em></InlineColor
			><InlineColor value="gray">&nbsp;precursor file is output with every&nbsp;</InlineColor
			><InlineColor value="gray"><em><slug>.svelte</slug></em></InlineColor><InlineColor
				value="gray">&nbsp;page.</InlineColor
			>
		</Paragraph>
	</IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '3c584e911b5c4378b120e3cf62797212',
			id: 'bb762a3b-9dab-4cc7-83fc-097353fc5eb9',
			created_time: '2022-02-17T22:38:00.000Z',
			last_edited_time: '2022-02-18T07:50:00.000Z'
		}}
	>
		It’s a bit of a hack because&nbsp;<em>notion2svelte</em>&nbsp;actually&nbsp;<em>updates</em
		>&nbsp;the CACHE_TOKEN in your&nbsp;<em>.env</em>&nbsp;every time a test page is fetched. It
		seems wrong to have a tool editing its own&nbsp;<em>.env</em>&nbsp;file, but it worked and it
		was easy, so for now, this is how it works. ¯\_(ツ)_/¯
	</Paragraph>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '3c584e911b5c4378b120e3cf62797212',
		id: 'bd023127-2dff-4a78-a56d-adddb02238a8',
		created_time: '2022-02-17T22:39:00.000Z',
		last_edited_time: '2022-02-18T07:51:00.000Z'
	}}
>
	<InlineCode code={'FORCE_REFRESH'} />, when set to&nbsp;<InlineCode code={'true'} />, tells&nbsp;<em
		>notion2svelte</em
	>&nbsp;to ignore the cache token & hit the Notion API&nbsp;<em>every</em>&nbsp;time.
</Paragraph>
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
		pageId: '3c584e911b5c4378b120e3cf62797212',
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
			pageId: '3c584e911b5c4378b120e3cf62797212',
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
			pageId: '3c584e911b5c4378b120e3cf62797212',
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
			pageId: '3c584e911b5c4378b120e3cf62797212',
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
