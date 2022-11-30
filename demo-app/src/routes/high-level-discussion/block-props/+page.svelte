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
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		title: 'blockProps'
	});
</script>

<svelte:head>
	<title>blockProps</title>
</svelte:head>

<Title>blockProps</Title>

<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '1b3d6de1-8b7a-48c5-bf63-9ea5b3a17906',
		created_time: '2022-01-28T20:36:00.000Z',
		last_edited_time: '2022-01-28T20:37:00.000Z'
	}}
>
	<em>notion2svelte</em> passes <InlineCode code={'blockProps'} /> to every paragraph* so that your component
	implementation can optionally make use of Notion’s block metadata.
</Paragraph>
<Code
	code={`&lt;Paragraph
  &lt;InlineColor value=&#039;purple&#039;&gt;blockProps&lt;/InlineColor&gt;=\{\{
    pageId: …,
    id: …,
    created_time: …,
    last_edited_time: …
  }}
&gt;
  ur content
&lt;/Paragraph&gt;`}
	language="javascript"
/><Header level={1}>Intended Uses</Header>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '90ece235-05ce-413f-a94f-c4904fd66d66',
		created_time: '2022-01-26T23:57:00.000Z',
		last_edited_time: '2022-01-27T21:05:00.000Z'
	}}
>
	<InlineCode code={'blockProps'} /> take the most useful pieces of block metadata and provide them to
	your components* to use (or ignore) however you see fit. On my own personal site, I expect to use them
	to:
</Paragraph>
<BulletedListItem
	>Provide a UX, built into each block, whereby readers can provide feedback with the reference page
	& block automatically included in the message</BulletedListItem
>
<BulletedListItem
	>Support automatic “bookmarking” as readers progress through my online fiction</BulletedListItem
>
<BulletedListItem>Enable precision links…</BulletedListItem>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '38ed521bf46e49be8d2af67a53a37c6e',
			id: '50c85f1b-03f9-495d-ad2c-0a159c7eee23',
			created_time: '2022-01-27T21:00:00.000Z',
			last_edited_time: '2022-01-27T21:00:00.000Z'
		}}
	>
		<InlineCode code={'https://navelgazer.club/somepage#[block-id]'} />
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '38ed521bf46e49be8d2af67a53a37c6e',
			id: '6f626dc8-8597-4779-9893-a7b24f5e6a41',
			created_time: '2022-01-27T21:00:00.000Z',
			last_edited_time: '2022-01-27T21:01:00.000Z'
		}}
	>
		…similar to Notion’s block links: <Link
			type="absolute"
			href="/b266b66cecc74e218f494f80f5c820cc#1f965316ac104b8182e19bb1b6658357">(for example)</Link
		>
	</Paragraph>
</IndentGroup>
<BulletedListItem>Feed into site analytics</BulletedListItem>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '17281e52-ae81-4950-8a31-02ac16500c6c',
		created_time: '2022-01-26T23:54:00.000Z',
		last_edited_time: '2022-01-26T23:56:00.000Z'
	}}
/>
<Callout emoji="🚧"
	>*As of this writing, the <InlineCode code={'blockProps'} /> attribute only gets passed to
	<em>Paragraph</em>
	components. At some point, I expect to do the grunt work required to pass them in to <em>all</em> components.
	Watch this space, I guess. 🙄</Callout
><Header level={1}>Accessing Notion metadata</Header>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: 'db2902be-7276-4575-8ced-f9b9e3c64d0d',
		created_time: '2022-01-27T00:05:00.000Z',
		last_edited_time: '2022-01-27T00:06:00.000Z'
	}}
>
	Say you’ve got a simple paragraph in Notion, exported to Svelte via <em>notion2svelte</em>. The
	resulting <em>.svelte</em> file will include something like this
</Paragraph>
<Code
	code={`…
import Paragraph from &#039;$lib/notion2svelte/Paragraph.svelte&#039;;
…

…
&lt;Paragraph blockProps=\{\{
  pageId: &quot;38ed521bf46e49be8d2af67a53b37c6e&quot;
  id: &quot;db9fe47b407a41ea952e1c6e891ecd23b1a25fff&quot;,
  created_time: &quot;2022-01-09T05:46:00.000Z&quot;,
  last_edited_time: &quot;2022-01-24T01:05:00.000Z&quot;
}}&gt;
  Dying is the greatest, most interesting thing any of us get to do. If I knew I could do it twice, I’d do it right now. As it is, I’ll probably avoid it as long as possible. Save the best for last, you know?
&lt;/Paragraph&gt;
…`}
	language="html"
/><Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '117e9261-954d-472f-9f8b-c7ec67c94b08',
		created_time: '2022-01-24T04:32:00.000Z',
		last_edited_time: '2022-01-27T00:12:00.000Z'
	}}
>
	Inside <em>Paragraph.svelte</em>, <InlineCode code={'blockProps'} /> gets accessed in the usual way,
	using <InlineCode code={'export let blockProps'} />. After that, the sky’s the limit.
</Paragraph>
<Header level={1}>Want an example?</Header>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: 'ffae8c5a-2339-410d-ac53-cfe8d09ba8e3',
		created_time: '2022-01-27T00:12:00.000Z',
		last_edited_time: '2022-01-27T00:28:00.000Z'
	}}
>
	You’re staring at it. In fact, you might have already noticed that, when you hover over text —
	like, say, this very paragraph — a <InlineCode code={'֍'} /> appears ← over there. If you haven’t already
	clicked one of those buttons, take a second now to give it a go!
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '1684779b-cde2-4835-a60d-7fd447b82037',
		created_time: '2022-01-27T06:56:00.000Z',
		last_edited_time: '2022-01-27T06:56:00.000Z'
	}}
>
	It should look like this ↓
</Paragraph>
<Image url="/assets/high-level-discussion/block-props/5fb082b3-d27c-4fed-b49e-c800b88faa93.png"
	>The JSON is a straight dump of <InlineCode code={'blockProps'} />. The button’s URL is assembled
	by combining <InlineCode code={'pageId'} /> with the block <InlineCode code={'id'} />. Click it to
	visit the source page in Notion.</Image
>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '7ac2fd86-b39d-48c8-b7f2-2af2fe1d4fe7',
		created_time: '2022-01-27T00:15:00.000Z',
		last_edited_time: '2022-01-27T00:15:00.000Z'
	}}
>
	Nifty, no?
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: '4bfbad02-7c29-44e5-8a5a-4aad9a1a3813',
		created_time: '2022-01-27T00:15:00.000Z',
		last_edited_time: '2022-01-27T00:15:00.000Z'
	}}
/>
<Callout emoji="🧠"
	>In case you’re wondering, this → ֍ ← is a <em>right-facing Armenian eternity sign</em>. That’s
	all I know about it. Ftw, <em>Unicode</em> also offers the
	<em>left-facing Armenian eternity sign</em>: ֎<span slot="children"
		><Paragraph
			blockProps={{
				pageId: '38ed521bf46e49be8d2af67a53a37c6e',
				id: 'ef20ae12-750b-4b9c-83ff-2cb7be543421',
				created_time: '2022-01-27T04:03:00.000Z',
				last_edited_time: '2022-01-27T05:44:00.000Z'
			}}
		>
			Elegant, no? 😃 You take a sliver-moon of just the right proportions, double it once so that
			the resulting duo has the same rotational symmetry as an S, double it again so that you’ve got
			what looks like a 4-bladed fan, then double once more, twisting the double so that its blades
			perfectly overlap the first fan to form what appears to be an impossibly-circular snip of
			rope. Lovely.
		</Paragraph>
		<Header level={1}>֍ 🤓👍 Armenian Eternity ֎</Header>
		<Paragraph
			blockProps={{
				pageId: '38ed521bf46e49be8d2af67a53a37c6e',
				id: '1da3207b-10b9-4f9c-9c26-e61fd85fffa4',
				created_time: '2022-01-27T04:09:00.000Z',
				last_edited_time: '2022-01-27T04:09:00.000Z'
			}}
		/>
	</span></Callout
><Paragraph
	blockProps={{
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
		id: 'dd6d52c8-d9de-4dd7-9b38-57be36f0e54c',
		created_time: '2022-01-27T00:26:00.000Z',
		last_edited_time: '2022-01-27T00:26:00.000Z'
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
		pageId: '38ed521bf46e49be8d2af67a53a37c6e',
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
			pageId: '38ed521bf46e49be8d2af67a53a37c6e',
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
			pageId: '38ed521bf46e49be8d2af67a53a37c6e',
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
			pageId: '38ed521bf46e49be8d2af67a53a37c6e',
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
