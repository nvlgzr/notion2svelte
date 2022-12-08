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
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		title: 'Synced Blocks'
	});
</script>

<svelte:head>
	<title>Synced Blocks</title>
</svelte:head>

<Title>Synced Blocks</Title>

<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: '01f3b7de-9853-4455-8784-1eda7287705e',
		created_time: '2022-01-26T09:05:00.000Z',
		last_edited_time: '2022-01-26T09:08:00.000Z'
	}}
>
	In my experience thus far, synced blocks are something of a mess. Sometimes the API delivers full
	data on a synced block…and sometimes synced blocks seem to get corrupted, existing in a strange,
	nigh-unselectable form on a page, detectable primarily because these show up as essentially empty
	blocks with a “synced_block” type and maybe an ID.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: '4a81cc60-f063-414b-be28-307d8cf9335a',
		created_time: '2022-01-26T09:08:00.000Z',
		last_edited_time: '2022-01-26T22:18:00.000Z'
	}}
>
	In such cases, I find myself having to go into Notion to add a pair of temporary blocks with dummy
	content which I move around, trying to surround the invisible broken blocks. Once I can see
	(via&ensp;<em>notion2svelte’s</em>&ensp;output) that my temp blocks have bookended the broken
	ones, I can select everything between the two temp blocks, inclusive, and delete. Then rerun&ensp;<em
		>notion2svelte</em
	>.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: '53f19461-f718-4e40-9066-65060b41e408',
		created_time: '2022-01-26T22:18:00.000Z',
		last_edited_time: '2022-01-27T07:21:00.000Z'
	}}
>
	Despite this hassle, I’m using synced blocks, for now,* to consistently generate the end material
	on every page, which serves as both navigation and, thanks to CSS’s&ensp;<InlineCode
		code={':visited'}
	/>, as a map of the docs you’ve read…or at least glanced at.
</Paragraph>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: 'b266b66cecc74e218f494f80f5c820cc',
			id: '1286a89a-f0e2-43de-8e45-3f3e939fcc92',
			created_time: '2022-01-26T22:21:00.000Z',
			last_edited_time: '2022-01-26T22:26:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>*There are multiple possibilities for implementing more “standard” web navigation with&ensp;</InlineColor
		><InlineColor value="gray"><em>notion2svelte</em></InlineColor><InlineColor value="gray"
			>. For instance, navigation could be built at compile time using Svelte Kit’s&ensp;</InlineColor
		><InlineColor value="gray"><InlineCode code={'load'} /></InlineColor><InlineColor value="gray"
			>&ensp;to scan the file system.</InlineColor
		>
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'b266b66cecc74e218f494f80f5c820cc',
			id: 'f0e50cbe-e5b7-48d2-9c4c-7a0d2aee0edb',
			created_time: '2022-01-26T22:26:00.000Z',
			last_edited_time: '2022-01-26T22:26:00.000Z'
		}}
	>
		<InlineColor value="gray"
			>Some of your navigation might simply be hand-coded. There’s probably room to incorporate some
			sort of Notion-driven nav in&ensp;</InlineColor
		><InlineColor value="gray"><em>notion2svelte,&ensp;</em></InlineColor><InlineColor value="gray"
			>but for now, that’s out of scope.</InlineColor
		>
	</Paragraph>
</IndentGroup>
<Header level={1}>1. Notion original</Header>
<Image url="/assets/high-level-discussion/synced-blocks/70ee826f-ca3c-4842-a7e1-bc3723d04390.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
      &quot;id&quot;: &quot;86c3e92c-c510-4fe0-866b-be3b74049989&quot;,
      &quot;created_time&quot;: &quot;2022-01-26T22:27:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-26T22:40:00.000Z&quot;,
      &quot;has_children&quot;: true,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;synced_block&quot;,
      &quot;synced_block&quot;: \{
        &quot;synced_from&quot;: null
      },
      &quot;blocks&quot;: [
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;c9fa3a33-f652-4e81-bd97-6b9af4436111&quot;,
          &quot;created_time&quot;: &quot;2022-01-26T22:27:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-26T22:40:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;paragraph&quot;: \{
            &quot;text&quot;: [
              \{
                &quot;type&quot;: &quot;text&quot;,
                &quot;text&quot;: \{
                  &quot;content&quot;: &quot;I’m syncable!&quot;,
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
                &quot;plain_text&quot;: &quot;I’m syncable!&quot;,
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
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
	code={`&lt;Paragraph
  blockProps=\{\{
    pageId: &#039;b266b66cecc74e218f494f80f5c820cc&#039;,
    id: &#039;c9fa3a33-f652-4e81-bd97-6b9af4436111&#039;,
    created_time: &#039;2022-01-26T22:27:00.000Z&#039;,
    last_edited_time: &#039;2022-01-26T22:40:00.000Z&#039;
  }}
&gt;
  I’m syncable!
&lt;/Paragraph&gt;`}
	language="html"
/><Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: '1f965316-ac10-4b81-82e1-9bb1b6658357',
		created_time: '2022-01-27T07:27:00.000Z',
		last_edited_time: '2022-01-28T20:40:00.000Z'
	}}
>
	At present,&ensp;<em>notion2svelte</em>&ensp;responds to Synced Blocks by simply stripping them
	away. I wasn’t able to think of a more interesting use for them, given that they are primarily an
	input tool.
</Paragraph>
<Header level={1}>4. Example rendering</Header>
<Header level={3}>The Original</Header>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: 'c9fa3a33-f652-4e81-bd97-6b9af4436111',
		created_time: '2022-01-26T22:27:00.000Z',
		last_edited_time: '2022-01-28T20:42:00.000Z'
	}}
>
	🚰 Everything but the kitchen sync
</Paragraph>
<Header level={3}>Synced</Header>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: 'c9fa3a33-f652-4e81-bd97-6b9af4436111',
		created_time: '2022-01-26T22:27:00.000Z',
		last_edited_time: '2022-01-28T20:42:00.000Z'
	}}
>
	🚰 Everything but the kitchen sync
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'b266b66cecc74e218f494f80f5c820cc',
		id: 'f50fd89d-601b-4524-8339-f6e0a13ab11d',
		created_time: '2022-01-27T07:28:00.000Z',
		last_edited_time: '2022-01-27T07:28:00.000Z'
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
