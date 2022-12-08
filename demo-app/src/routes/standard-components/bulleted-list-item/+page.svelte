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
		pageId: 'a87a958671964be7a9fd16908da25b79',
		title: 'BulletedListItem'
	});
</script>

<svelte:head>
	<title>BulletedListItem</title>
</svelte:head>

<Title>BulletedListItem</Title>

<Header level={1}>1. Notion original</Header>
<Image
	url="/assets/standard-components/bulleted-list-item/a7d8a997-9add-4535-9473-4d302e14b58b.png"
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: 'a87a958671964be7a9fd16908da25b79',
		id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
		created_time: '2022-01-28T20:26:00.000Z',
		last_edited_time: '2022-12-06T22:00:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&ensp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug]/notion-export.js</em></InlineColor
	>
</Paragraph>
<Code
	code={`\{
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;b74983c5-eb79-44ec-a322-2201faf176e9&quot;,
  &quot;created_time&quot;: &quot;2022-01-26T08:50:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-26T08:51:00.000Z&quot;,
  &quot;has_children&quot;: true,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;bulleted_list_item&quot;,
  &quot;bulleted_list_item&quot;: \{
    &quot;text&quot;: [
      \{
        &quot;type&quot;: &quot;text&quot;,
        &quot;text&quot;: \{
          &quot;content&quot;: &quot;Let’s try nesting these…&quot;,
          &quot;link&quot;: null
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: false,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;Let’s try nesting these…&quot;,
        &quot;href&quot;: null
      }
    ]
  },
  &quot;blocks&quot;: [
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;7da104fc-d081-4437-964e-d6e3850d3215&quot;,
      &quot;created_time&quot;: &quot;2022-01-26T08:51:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-26T08:51:00.000Z&quot;,
      &quot;has_children&quot;: false,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;bulleted_list_item&quot;,
      &quot;bulleted_list_item&quot;: \{
        &quot;text&quot;: [
          \{
            &quot;type&quot;: &quot;text&quot;,
            &quot;text&quot;: \{
              &quot;content&quot;: &quot;…shall we?&quot;,
              &quot;link&quot;: null
            },
            &quot;annotations&quot;: \{
              &quot;bold&quot;: false,
              &quot;italic&quot;: false,
              &quot;strikethrough&quot;: false,
              &quot;underline&quot;: false,
              &quot;code&quot;: false,
              &quot;color&quot;: &quot;default&quot;
            },
            &quot;plain_text&quot;: &quot;…shall we?&quot;,
            &quot;href&quot;: null
          }
        ]
      }
    }
  ]
}`}
	language="javascript"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: 'a87a958671964be7a9fd16908da25b79',
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
	code={`&lt;BulletedListItem&gt;Let’s try nesting these…&lt;/BulletedListItem&gt;
&lt;IndentGroup&gt;
  &lt;BulletedListItem&gt;…shall we?&lt;/BulletedListItem&gt;
&lt;/IndentGroup&gt;`}
	language="html"
	>See&ensp;<Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
	>.</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'a87a958671964be7a9fd16908da25b79',
		id: 'b74983c5-eb79-44ec-a322-2201faf176e9',
		created_time: '2022-01-28T21:56:00.000Z',
		last_edited_time: '2022-01-28T21:56:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/BulletedListItem.svelte"
		><InlineColor value="gray">BulletedListItem.svelte</InlineColor></Link
	>
</Paragraph>
<BulletedListItem>Let’s try nesting these…</BulletedListItem>
<IndentGroup>
	<BulletedListItem>…shall we?</BulletedListItem>
</IndentGroup>
<Paragraph
	blockProps={{
		pageId: 'a87a958671964be7a9fd16908da25b79',
		id: '832c7757-d7be-47e0-8b5d-ea4f0e690a21',
		created_time: '2022-01-28T21:57:00.000Z',
		last_edited_time: '2022-01-28T21:57:00.000Z'
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
