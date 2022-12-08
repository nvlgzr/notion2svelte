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
		pageId: 'e47378442dd540b287a96ce548dd9cf2',
		title: 'Image'
	});
</script>

<svelte:head>
	<title>Image</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Image</Title>

<Toggle
	>A brief digression:&ensp;<strong>How&ensp;</strong><em><strong>notion2svelte</strong></em><strong
		>&ensp;handles images</strong
	>
	<span slot="children"
		><Header level={1}>How&ensp;<em>notion2svelte</em>&ensp;handles images</Header>
		<Paragraph
			blockProps={{
				pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
				pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
				pageId: 'e47378442dd540b287a96ce548dd9cf2',
				id: 'ea73c6b2-261c-4d8a-a7ba-7cacb135d140',
				created_time: '2022-01-28T03:02:00.000Z',
				last_edited_time: '2022-12-08T19:40:00.000Z'
			}}
		/>
		<Paragraph
			blockProps={{
				pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
<Image url="/assets/other-components/image/c8f08868-31f2-4707-a987-5b0f2e660e8f.png" caption="" />
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;4b8866c2-40ba-4b69-9570-b433e2261e63&quot;,
  &quot;created_time&quot;: &quot;2022-01-28T00:10:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-28T00:11:00.000Z&quot;,
  &quot;has_children&quot;: false,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;image&quot;,
  &quot;image&quot;: \{
    &quot;caption&quot;: [],
    &quot;type&quot;: &quot;file&quot;,
    &quot;file&quot;: \{
      &quot;url&quot;: &quot;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c737e93-7d21-42a1-9b66-23a53ecc0bca/282A2480-D6DE-4CA4-889E-068415F73B90_1_105_c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220131%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220131T203424Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b9b59221adc2ec38dc21fe86a6d9adfff3966e77511b6be3185a5b6439eab0f3&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&quot;,
      &quot;expiry_time&quot;: &quot;2022-01-31T21:34:23.999Z&quot;
    }
  }
}`}
	language="json"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: 'e47378442dd540b287a96ce548dd9cf2',
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
	code={`&lt;Image url=&quot;/assets/other-components/image/64680bf8-12ce-46f7-adfb-2c9822d2346b.jpg&quot;&gt;cyborg tita&lt;/Image&gt;`}
	language="html">The image is stored locally, using block id as the filename.</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'e47378442dd540b287a96ce548dd9cf2',
		id: '11e5671f-39af-473f-a882-6223df544835',
		created_time: '2022-01-31T20:37:00.000Z',
		last_edited_time: '2022-01-31T20:48:00.000Z'
	}}
>
	Rendered by <Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Image.svelte"
		>Image.svelte</Link
	>
</Paragraph>
<Image
	url="/assets/other-components/image/49e27561-bc60-4051-8279-743be252fd51.jpg"
	caption="Found Art">Found Art</Image
>
<Paragraph
	blockProps={{
		pageId: 'e47378442dd540b287a96ce548dd9cf2',
		id: '122fac80-fc59-40ac-9f81-d763c13ff30d',
		created_time: '2022-01-28T00:21:00.000Z',
		last_edited_time: '2022-01-28T00:21:00.000Z'
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
