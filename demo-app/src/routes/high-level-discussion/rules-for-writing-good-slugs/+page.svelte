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
		last_edited_time: '2022-01-27T07:10:00.000Z'
	}}
>
	In this first version, <em>notion2svelte </em>treats Slugs at face value. If your page has a slug
	of “foo/bar/baz,” <em>notion2svelte</em> will save a file at
	<em>src/routes/foo/bar/baz.svelte.</em>
	This has subtle consequences…which can be <em>ignored</em> if you follow two simple rules:
</Paragraph>
<NumberedListItem number="1">
	<strong>Use site-relative Slugs, by always starting them with </strong><InlineCode
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
			last_edited_time: '2022-01-24T06:57:00.000Z'
		}}
	>
		✅ <InlineCode code={'/blog/best-post-ever'} />
	</Paragraph>
</IndentGroup>
<NumberedListItem number="2">
	<strong>Avoid using </strong><InlineCode code={'index'} /></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '6deb92b8-fa3e-4571-ab5d-db6453021503',
			created_time: '2022-01-24T06:55:00.000Z',
			last_edited_time: '2022-01-24T06:59:00.000Z'
		}}
	>
		❌ <InlineCode code={'/blog/index'} /> → <InlineCode code={'/routes/blog/index.svelte'} />
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '8364a73c-239d-4ba2-b596-659d0faf99ee',
			created_time: '2022-01-24T06:55:00.000Z',
			last_edited_time: '2022-01-24T06:59:00.000Z'
		}}
	>
		✅ <InlineCode code={'/blog'} /> → <InlineCode code={'/routes/blog.svelte'} />
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
		last_edited_time: '2022-01-24T07:00:00.000Z'
	}}
>
	Keep reading for details.
</Paragraph>
<Header level={1}>Use site-relative Slugs</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '75adb1d0-1a88-4138-ba09-4bcafb1edc26',
		created_time: '2022-01-22T03:17:00.000Z',
		last_edited_time: '2022-01-22T03:39:00.000Z'
	}}
>
	Relative links are important because they decouple internal links from the site’s domain. However,
	there are two kinds of <em>relative</em>: site-relative, and page-relative. Let’s start with the
	more problematic: page-relative links.
</Paragraph>
<Header level={3}>Page-relative links</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '7eb98333-64bc-468c-bacd-4e999fb427b8',
		created_time: '2022-01-22T03:39:00.000Z',
		last_edited_time: '2022-01-27T07:15:00.000Z'
	}}
>
	Say we have a page in our Notion database with the Slug, <InlineCode code={'link-target'} />. Then
	you run <em>notion2svelte</em>. This’ll get you…
</Paragraph>
<BulletedListItem
	>A Svelte page: <InlineCode code={'src/routes/link-target.svelte'} /></BulletedListItem
>
<BulletedListItem
	>Links to this page will (probably*) look something like: <InlineCode
		code={'&lt;a href=&quot;link-target&quot;&gt;Link&lt;/a&gt;'}
	/></BulletedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
			id: '8bdb254e-322c-41b1-a284-edfaed25760d',
			created_time: '2022-01-27T07:12:00.000Z',
			last_edited_time: '2022-01-27T07:13:00.000Z'
		}}
	>
		*I say <em>probably</em>, because it’s up to you how you implement your <Link
			type="mention"
			href="/annotations/link">Link</Link
		> component.
	</Paragraph>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '665df6a5-4fe9-4227-9da8-ce9d080b37b5',
		created_time: '2022-01-22T03:46:00.000Z',
		last_edited_time: '2022-01-27T07:16:00.000Z'
	}}
>
	Now let’s say that you have two pages linking <em>to</em> “link-target”, <em>one</em> and
	<em>two</em>, like so
</Paragraph>
<Code
	code={`├── src
│   └── routes
│       ├── one.svelte
│       ├── target.svelte
│       └── subpages
│           ├── two.svelte
│           …`}
	language="javascript"
/><Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '47b867f6-d6ae-48ae-81cb-9bf0aabdd0b9',
		created_time: '2022-01-22T03:51:00.000Z',
		last_edited_time: '2022-01-27T07:17:00.000Z'
	}}
>
	To keep things concrete, let’s say you publish your site at <em>https://foo.io</em>. When you
	click the <InlineCode code={'href=&quot;link-target&quot;'} /> link in the page generated from
	<em>one.svelte</em>
	(<em>https://foo.io/one),</em> the URL resolves to <em>https://foo.io</em> + <em>link-target</em>
	⇒ <em>https://foo.io/link-target</em>. So far so good!
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '74890dd3-67ae-44e6-89cd-b9aacc851579',
		created_time: '2022-01-22T03:53:00.000Z',
		last_edited_time: '2022-01-27T07:17:00.000Z'
	}}
>
	But now let’s look at the same link (href=”link-target”) clicked from <em
		>https://foo.io//subpages/two</em
	>. Here, the relative root is no longer <em>https://foo.io</em>, but
	<em>https://foo.io/subpages</em>. Now, when we click the link, it resolves to
	<em>htttps://foo.io/subpages/link-target</em> which, of course, does not exist, leading to a 404 😥.
</Paragraph>
<Header level={3}>Site-relative links</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'dd21dba5-8353-49af-a4c6-f2eeb36c1e38',
		created_time: '2022-01-22T03:20:00.000Z',
		last_edited_time: '2022-01-27T07:17:00.000Z'
	}}
>
	When you prepend a Slug with <InlineCode code={'/'} />, <em>notion2svelte </em>creates
	<strong>site</strong>-relative links. Now, instead of <InlineCode
		code={'&lt;a href=&quot;link-target&quot;&gt;Link&lt;/a&gt;'}
	/>, we have <InlineCode code={'&lt;a href=&quot;/link-target&quot;&gt;Link&lt;/a&gt;'} /> Now, no matter
	where you link to the ”target” page, the link will be resolved using the site root, leading us infallibly
	to <InlineCode code={'https://foo.io/link-target'} /><em>.</em>
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
<Header level={1}>Avoid using <InlineCode code={'index'} /></Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: '14854b49-94e6-4520-a212-273030be2e9f',
		created_time: '2022-01-22T03:11:00.000Z',
		last_edited_time: '2022-01-22T04:22:00.000Z'
	}}
>
	As you probably know, Svelte has special rules for it handles pages named <em>index.svelte</em>.
	In particular, Svelte expects the page name to <em>not</em> be referenced when navigating to an index
	page.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'ddfe9f5a-c106-435e-ba10-d0530deb0a6c',
		created_time: '2022-01-22T04:22:00.000Z',
		last_edited_time: '2022-01-22T04:22:00.000Z'
	}}
>
	Continuing our example from above, say we’ve got a sub-route called <em>subpages</em>
</Paragraph>
<Code
	code={`├── src
│   └── routes
│       ├ …
│       └── subpages
│           ├── index.svelte &lt;&lt;
│           ├── …`}
	language="javascript"
/><Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'c4e44c91-0288-4cd6-8818-7e1ec3f2b486',
		created_time: '2022-01-22T04:24:00.000Z',
		last_edited_time: '2022-01-22T04:30:00.000Z'
	}}
>
	<em>notion2svelte</em> can create such a page easily enough. Just give the page a Slug of /<em
		>subpages/index</em
	>. The problem here is that links created by <em>notion2svelte</em> will end up with URLs like <InlineCode
		code={'https://foo.io/subpages/index'}
	/>, which Svelte doesn’t recognize.
</Paragraph>
<Header level={3}>Workaround</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'df166d88-4159-4b95-943c-130851ce5405',
		created_time: '2022-01-22T04:30:00.000Z',
		last_edited_time: '2022-01-22T04:32:00.000Z'
	}}
>
	The workaround for index pages is simple enough: just remove the “index” part from your Slug:
</Paragraph>
<BulletedListItem>Slug: <em>/subpages</em></BulletedListItem>
<BulletedListItem>Output:</BulletedListItem>
<IndentGroup>
	<Code
		code={`├── src
│   └── routes
│       ├ subpages.svelte &lt;&lt;
│       └── subpages
│           ├── …`}
		language="javascript"
	/>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'bd1940fc-dccc-4ea0-92cd-f6f24d707927',
		created_time: '2022-01-22T04:33:00.000Z',
		last_edited_time: '2022-01-22T04:35:00.000Z'
	}}
>
	Now, links created by <em>notion2svelte </em>to this page look like <InlineCode
		code={'https://foo.io/subpages'}
	/>.
</Paragraph>
<Header level={3}>Limitation of the Workaround</Header>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'b07ec7eb-3c42-4675-a564-122427bb0f00',
		created_time: '2022-01-22T04:36:00.000Z',
		last_edited_time: '2022-01-22T04:38:00.000Z'
	}}
>
	All is well and good with this approach, so long as you aren’t taking advantage of Svelte Kit’s <em
		>__layout.svelte</em
	> pages.
</Paragraph>
<Code
	code={`├── src
│   └── routes
│       ├ subpages.svelte
│       └── subpages
│           ├── __layout.svelte &lt;&lt;
│           ├── two.svelte`}
	language="javascript"
/><Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'f7a8799a-9b0c-441e-a3af-135dac570a48',
		created_time: '2022-01-22T04:36:00.000Z',
		last_edited_time: '2022-01-22T04:42:00.000Z'
	}}
>
	Unlike a <em>subpages/index.svelte</em> page, <em>subpages.svelte</em> is unable to participate in
	whatever behaviors and/or styles are on offer by <em>__layout.svelte</em>.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '57ec9a2db8544bf694a45f0e2a0b68d1',
		id: 'a8aacb94-a943-48e1-9def-29bc3276922b',
		created_time: '2022-01-22T04:42:00.000Z',
		last_edited_time: '2022-01-22T04:44:00.000Z'
	}}
>
	This is a real problem, hopefully to be addressed by a future version of <em>notion2svelte.</em>
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
