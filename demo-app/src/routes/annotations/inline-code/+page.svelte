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
		pageId: '75a1725479f8411580df3c1cb67e3060',
		title: 'InlineCode'
	});
</script>

<svelte:head>
	<title>InlineCode</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>InlineCode</Title>

<Header level={1}>1. Notion original</Header>
<Image url="/assets/annotations/inline-code/1490071b-97e1-4726-a519-b85cccae2377.png" caption="" />
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
		id: '5bc36c6c-e256-46fc-b1fa-563ecdfcf028',
		created_time: '2022-01-29T03:39:00.000Z',
		last_edited_time: '2022-01-29T03:39:00.000Z'
	}}
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
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
  …
  &quot;paragraph&quot;: \{
    &quot;text&quot;: [
      \{
        …
        &quot;plain_text&quot;: &quot;“Did you really name your son &quot;,
        …
      },
      \{
        &quot;type&quot;: &quot;text&quot;,
        &quot;text&quot;: \{
          &quot;content&quot;: &quot;Robert&#039;); DROP TABLE Students;--&quot;,
          &quot;link&quot;: null
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: true,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;Robert&#039;); DROP TABLE Students;--&quot;,
        &quot;href&quot;: null
      },
      \{
        …
        &quot;plain_text&quot;: &quot;?\&quot;&quot;,
        …
      }
    ]
  }
}`}
	language="json"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
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
	code={`&lt;Paragraph blockProps=\{\{…}}&gt;
  “Did you really name your son &lt;InlineCode code=\{&quot;Robert&amp;#039;); DROP TABLE Students;--&quot;} /&gt;?&quot;
&lt;/Paragraph&gt;`}
	language="html"
/><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
		id: 'f26a8410-b47d-4f75-9760-6ac57877ddfd',
		created_time: '2022-01-28T23:45:00.000Z',
		last_edited_time: '2022-01-28T23:46:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/InlineCode.svelte"
		><InlineColor value="gray">InlineCode.svelte</InlineColor></Link
	>
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
		id: 'c9d6a1a1-e5ce-4a7b-a7b8-7918edcf006b',
		created_time: '2022-01-29T00:05:00.000Z',
		last_edited_time: '2022-11-30T07:55:00.000Z'
	}}
>
	“Did you really name your son&ensp;<InlineCode code={'Robert&#039;); DROP TABLE Students;--'} />?"
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '75a1725479f8411580df3c1cb67e3060',
		id: '0ea5cf22-1fdb-4aed-8c58-ccd4b65f0f5f',
		created_time: '2022-01-28T00:20:00.000Z',
		last_edited_time: '2022-01-28T00:20:00.000Z'
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
