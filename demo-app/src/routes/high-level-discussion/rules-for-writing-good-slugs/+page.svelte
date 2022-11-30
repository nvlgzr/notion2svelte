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
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		title: 'Writing Good Slugs'
	});
</script>

<svelte:head>
	<title>Writing Good Slugs</title>
</svelte:head>

<Title>Writing Good Slugs</Title>

<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '5fbe6813-cfc8-4e97-93c2-5eb06cb60ed9',
		created_time: '2022-01-22T04:48:00.000Z',
		last_edited_time: '2022-01-22T04:49:00.000Z'
	}}
/>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'a791530a-4bce-4a26-8675-2e59621ee378',
		created_time: '2022-01-22T03:12:00.000Z',
		last_edited_time: '2022-11-30T10:26:00.000Z'
	}}
>
	In this first version,&nbsp;<em>notion2svelte&nbsp;</em>treats Slugs at face value. If your page
	has a Slug of “foo/bar/baz,”&nbsp;<em>notion2svelte</em>&nbsp;will save a file at&nbsp;<em
		>src/routes/foo/bar/baz/</em
	><em>+page.svelte</em><em>.</em>&nbsp;This has subtle consequences…which can be&nbsp;<em
		>ignored</em
	>&nbsp;if you follow one simple rule:
</Paragraph>
<NumberedListItem number="1">
	<strong>Use site-relative Slugs, by always starting them with&nbsp;</strong><InlineCode
		code={'/'}
	/></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: 'dc80706a-0a34-4493-ba2a-abf48a444cd2',
			created_time: '2022-01-24T06:54:00.000Z',
			last_edited_time: '2022-01-24T06:59:00.000Z'
		}}
	>
		❌ <InlineCode code={'blog/best-post-ever'} />
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '00fa6781-22ea-40a6-8145-9d762cfbb746',
			created_time: '2022-01-24T06:54:00.000Z',
			last_edited_time: '2022-11-30T10:26:00.000Z'
		}}
	>
		✅ <InlineCode code={'/blog/best-post-ever'} />
	</Paragraph>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'b3f01428-12b9-4154-8366-5994a7083261',
		created_time: '2022-01-24T06:59:00.000Z',
		last_edited_time: '2022-01-24T06:59:00.000Z'
	}}
/>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'f0c20577-92ab-4793-9810-8ec25ed5454b',
		created_time: '2022-01-24T06:59:00.000Z',
		last_edited_time: '2022-11-30T10:27:00.000Z'
	}}
>
	Keep reading for details. Or not. ↑ This is all you really need to know. 😎
</Paragraph>
<Header level={1}>Use site-relative Slugs</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '75adb1d0-1a88-4138-ba09-4bcafb1edc26',
		created_time: '2022-01-22T03:17:00.000Z',
		last_edited_time: '2022-11-30T10:49:00.000Z'
	}}
>
	Relative links are important because they decouple internal links from the site’s domain. However,
	there are two kinds of&nbsp;<em>relative</em>: site-relative, and page-relative. Let’s start with
	the more problematic: page-relative links.
</Paragraph>
<Header level={3}>❌ Page-relative links</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '7eb98333-64bc-468c-bacd-4e999fb427b8',
		created_time: '2022-01-22T03:39:00.000Z',
		last_edited_time: '2022-11-30T10:30:00.000Z'
	}}
>
	Say we have a page in our Notion database with the Slug,&nbsp;<InlineCode
		code={'mantis-shrimp'}
	/>. Running&nbsp;<em>notion2svelte</em>&nbsp;gets you…
</Paragraph>
<BulletedListItem
	>A Svelte page:&nbsp;<InlineCode
		code={'src/routes/mantis-shrimp/+page.svelte'}
	/></BulletedListItem
>
<BulletedListItem
	>Links to this page will (probably*) look something like:&nbsp;<InlineCode
		code={'&lt;a href=&quot;link-target&quot;&gt;Link&lt;/a&gt;'}
	/></BulletedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '8bdb254e-322c-41b1-a284-edfaed25760d',
			created_time: '2022-01-27T07:12:00.000Z',
			last_edited_time: '2022-11-30T10:30:00.000Z'
		}}
	>
		*I say&nbsp;<em>probably</em>, because it’s up to you how you implement your&nbsp;<Link
			type="mention"
			href="/annotations/link">Link</Link
		>&nbsp;component.&nbsp;
	</Paragraph>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '665df6a5-4fe9-4227-9da8-ce9d080b37b5',
		created_time: '2022-01-22T03:46:00.000Z',
		last_edited_time: '2022-11-30T10:32:00.000Z'
	}}
>
	Now let’s say that you have two pages linking&nbsp;<em>to</em
	>&nbsp;“link-target”,&nbsp;<InlineColor value="blue"><em>one</em></InlineColor
	>&nbsp;and&nbsp;<InlineColor value="purple"><em>two</em></InlineColor>, like so
</Paragraph>
<Code
	code={`├── src
│   └── routes
│       ├── &lt;InlineColor value=&#039;blue&#039;&gt;&lt;em&gt;&lt;strong&gt;one&lt;/strong&gt;&lt;/em&gt;&lt;/InlineColor&gt;.svelte
│       ├── &lt;strong&gt;mantis-shrimp&lt;/strong&gt;/+page.svelte
│       └── subpages
│           ├── &lt;InlineColor value=&#039;purple&#039;&gt;&lt;strong&gt;two&lt;/strong&gt;&lt;/InlineColor&gt;.svelte
│           …`}
	language="javascript"
/><Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '47b867f6-d6ae-48ae-81cb-9bf0aabdd0b9',
		created_time: '2022-01-22T03:51:00.000Z',
		last_edited_time: '2022-11-30T10:33:00.000Z'
	}}
>
	To keep things concrete, let’s say you publish your site at&nbsp;<em>https://foo.io</em>. When you
	click the&nbsp;<InlineCode code={'href=&quot;mantis-shrimp&quot;'} />&nbsp;link in the page
	generated from&nbsp;<em>one.svelte</em>&nbsp;(<em>https://foo.io/one),</em>&nbsp;the URL resolves
	to&nbsp;<em>https://foo.io</em>&nbsp;+&nbsp;<em>mantis-shrimp</em>&nbsp;⇒&nbsp;<em
		>https://foo.io/mantis-shrimp</em
	>. So far so good!
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '74890dd3-67ae-44e6-89cd-b9aacc851579',
		created_time: '2022-01-22T03:53:00.000Z',
		last_edited_time: '2022-11-30T10:42:00.000Z'
	}}
>
	But now let’s look at the same link (href=”mantis-shrimp”) clicked from&nbsp;<em
		>https://foo.io//subpages/two</em
	>. Here, the relative root is no longer&nbsp;<em>https://foo.io</em>, but&nbsp;<em
		>https://foo.io/subpages</em
	>. Now, when we click the link, it resolves to&nbsp;<em>htttps://foo.io/subpages/mantis-shrimp</em
	>&nbsp;which, of course, does not exist, leading to a&nbsp;<InlineCode code={'404'} />&nbsp;😥.
</Paragraph>
<Header level={3}>🌞👍 Site-relative links</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'dd21dba5-8353-49af-a4c6-f2eeb36c1e38',
		created_time: '2022-01-22T03:20:00.000Z',
		last_edited_time: '2022-01-27T07:17:00.000Z'
	}}
>
	When you prepend a Slug with&nbsp;<InlineCode code={'/'} />,&nbsp;<em>notion2svelte&nbsp;</em
	>creates&nbsp;<strong>site</strong>-relative links. Now, instead of &nbsp;<InlineCode
		code={'&lt;a href=&quot;link-target&quot;&gt;Link&lt;/a&gt;'}
	/>, we have &nbsp;<InlineCode
		code={'&lt;a href=&quot;/link-target&quot;&gt;Link&lt;/a&gt;'}
	/>&nbsp;Now, no matter where you link to the ”target” page, the link will be resolved using the
	site root, leading us infallibly to&nbsp;<InlineCode code={'https://foo.io/link-target'} /><em
		>.</em
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'f7242e88-3cdf-4b2f-b28b-2475630359a4',
		created_time: '2022-01-22T04:17:00.000Z',
		last_edited_time: '2022-01-22T04:17:00.000Z'
	}}
>
	Which is what we want.
</Paragraph>
<Equation block={true} katexString="\huge{'{'}🦦}" /><Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '8847f7c2-bcfe-4046-83ed-abe41b1bc2f5',
		created_time: '2022-01-24T07:01:00.000Z',
		last_edited_time: '2022-01-24T07:01:00.000Z'
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
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
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
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
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
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
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
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
			created_time: '2022-01-27T05:10:00.000Z',
			last_edited_time: '2022-01-27T05:10:00.000Z'
		}}
	/>
</IndentGroup>
<Divider />
<Header level={2}
	>Browse the docs ⚘&nbsp;<Link type="alias" href="/about-notion2svelte">🏠</Link>&nbsp;</Header
>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>&nbsp;</BulletedListItem
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
			>&nbsp;</BulletedListItem
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
			><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link
			>&nbsp;</BulletedListItem
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
			><strong>bold</strong>&nbsp;→&nbsp;<InlineCode
				code={'&lt;strong&gt;'}
			/>&nbsp;</BulletedListItem
		>
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
