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
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		title: 'Cover (Image & Icon)'
	});
</script>

<svelte:head>
	<title>Cover (Image & Icon)</title>
</svelte:head>

<Cover coverURL={'/assets/page-level-components/cover/cover.jpg'} iconEmojiOrURL={'🪲'} />

<Title>Cover (Image & Icon)</Title>

<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		id: '540e5119-9b19-4dc2-818d-e89e210ae331',
		created_time: '2022-01-28T22:59:00.000Z',
		last_edited_time: '2022-12-08T19:46:00.000Z'
	}}
>
	The Cover component gives you access to both the icon and cover image on each page
</Paragraph>
<Toggle
	>A brief digression:&ensp;<strong>How&ensp;</strong><em><strong>notion2svelte</strong></em><strong
		>&ensp;handles images</strong
	>
	<span slot="children"
		><Header level={1}>How&ensp;<em>notion2svelte</em>&ensp;handles images</Header>
		<Paragraph
			blockProps={{
				pageId: 'df34058b281e4da6badc0a15a891d18e',
				id: '96511cc9-60c5-458e-8e25-66df77c86cd9',
				created_time: '2022-01-28T02:46:00.000Z',
				last_edited_time: '2022-12-08T19:40:00.000Z'
			}}
		>
			Notion uses Amazon for image hosting, and a side effect of that choices is that the image URLs
			on offer from the Notion API have a super-short shelf life. For this initial release,&ensp;<em
				>notion2svelte</em
			>&ensp;handles this in a rather naive fashion. Here’s the flow:
		</Paragraph>
		<IndentGroup>
			<NumberedListItem number="a">Fetch the actual image</NumberedListItem>
			<NumberedListItem number="b">
				Store it in&ensp;<em>static/assets/<page-id>…</page-id></em></NumberedListItem
			>
			<NumberedListItem number="c">
				Use relative links to point the&ensp;<InlineCode code={'src'} />&ensp;attribute at the (full
				res! 🙀) images</NumberedListItem
			>
		</IndentGroup>
		<Paragraph
			blockProps={{
				pageId: 'df34058b281e4da6badc0a15a891d18e',
				id: 'de9d5124-60cb-4388-99a1-c608e0a079fe',
				created_time: '2022-01-28T02:46:00.000Z',
				last_edited_time: '2022-12-08T19:40:00.000Z'
			}}
		>
			Yes, I know this isn’t awesome. No, I haven’t done any research yet to figure out current
			best-practices, or, perhaps, some sort of extensible API.
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'df34058b281e4da6badc0a15a891d18e',
				id: 'ea73c6b2-261c-4d8a-a7ba-7cacb135d140',
				created_time: '2022-01-28T03:02:00.000Z',
				last_edited_time: '2022-12-08T19:40:00.000Z'
			}}
		/>
		<Paragraph
			blockProps={{
				pageId: 'df34058b281e4da6badc0a15a891d18e',
				id: '5875be71-fd67-4b2e-bbf9-3e6115daa59f',
				created_time: '2022-01-28T02:48:00.000Z',
				last_edited_time: '2022-12-08T19:40:00.000Z'
			}}
		>
			If you’re cool with that, there’s nothing much for you to do to display Covers except handle
			the&ensp;<em>coverURL</em>&ensp;and&ensp;<em>iconEmojiOrURL</em>&ensp;props.
		</Paragraph>
	</span></Toggle
><Header level={1}>1. Notion original</Header>
<Image
	url="/assets/page-level-components/cover/0599be75-67c3-4dc9-8b15-f64a292b1dd3.png"
	caption=""
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
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
  &quot;cover&quot;: \{
    &quot;type&quot;: &quot;file&quot;,
    &quot;file&quot;: \{
      &quot;url&quot;: &quot;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2648cd63-fb9b-47c4-9ec2-c2ea152d0c15/IMG_1865.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220128%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220128T023745Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=f43b7af10139323e63149096654253d4a6156c7cc41df6dd6ec340d969762750&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&quot;,
      &quot;expiry_time&quot;: &quot;2022-01-28T03:37:45.980Z&quot;
    }
  },
  …
}`}
	language="javascript"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
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
	code={`&lt;Cover
  coverURL=\{&#039;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2648cd63-fb9b-47c4-9ec2-c2ea152d0c15/IMG_1865.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220128%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220128T110028Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=438ced7db084ce6bd25d2a08f498b78c8e2b0b6fad1c231ba2ba148c42bc7a3d&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&#039;}
  iconEmojiOrURL=\{&#039;🪲&#039;}
/&gt;`}
	language="html"
/><Header level={3}>Why is it called&ensp;<em>iconEmojiOrURL</em>?</Header>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		id: '8db22e6a-d620-4543-86ea-8865d5d36a30',
		created_time: '2022-01-28T02:51:00.000Z',
		last_edited_time: '2022-01-28T23:03:00.000Z'
	}}
>
	A mouthful, I know. This naming reflects the uncertainty of the icon payload coming from Notion…or
	at least, of the way in which I’ve decided to handle that payload.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		id: '89d35c3e-c406-4353-8fc6-27c6388dc811',
		created_time: '2022-01-28T23:03:00.000Z',
		last_edited_time: '2022-01-28T23:08:00.000Z'
	}}
>
	Basically, you get a string, and it’s either super short, and, therefore, an emoji, or it’s lots
	longer because it starts with&ensp;<InlineCode code={'http'} />, in which case you should treat it
	as an image URL.
</Paragraph>
<Code code={`$: assumeURL = iconEmojiOrURL.length &gt; 3;`} language="javascript"
	>This assumption works because image names are UUIDs (or similar), generated by Notion/Amazon, and
	they’re all super long. Brittle, I know. ¯\_(ツ)_/¯</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		id: '64fed6e2-a06c-4173-9ef4-151ca8dd830d',
		created_time: '2022-01-28T23:09:00.000Z',
		last_edited_time: '2022-12-08T20:27:00.000Z'
	}}
>
	See cover and icon 👆 at the top of this page, rendered by&ensp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Cover.svelte"
		><InlineColor value="gray">Cover.svelte</InlineColor></Link
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'df34058b281e4da6badc0a15a891d18e',
		id: '5ba6d0c5-4382-4624-8d14-e1ea7c7cdf2f',
		created_time: '2022-01-27T23:41:00.000Z',
		last_edited_time: '2022-01-28T23:11:00.000Z'
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
