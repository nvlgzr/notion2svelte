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
		pageId: '991f1062fc784019aea56e890ca04ca2',
		title: 'ChildPage'
	});
</script>

<svelte:head>
	<title>ChildPage</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>ChildPage</Title>

<Header level={1}>1. Notion original</Header>
<Image
	url="/assets/standard-components/child-page/53c83b37-2af7-4eeb-9248-3aa5c19fea63.png"
	caption=""
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
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
      …
      &quot;type&quot;: &quot;child_page&quot;,
      &quot;child_page&quot;: \{
        &quot;title&quot;: &quot;I’m a child page with 3 blocks: some Lorem, another child page, and a link to same&quot;
      },
      &quot;blocks&quot;: [
        \{
          …
          &quot;paragraph&quot;: \{
                …
                &quot;plain_text&quot;: &quot;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.&quot;,
                …
          }
        },
        \{
          &quot;object&quot;: &quot;block&quot;,
          …
          &quot;type&quot;: &quot;child_page&quot;,
          &quot;child_page&quot;: \{
            &quot;title&quot;: &quot;I’m the grandchild&quot;
          }
        },
        \{
          …
          &quot;paragraph&quot;: \{
            &quot;text&quot;: [
                …
                &quot;plain_text&quot;: &quot;I’m the grandchild&quot;,
                &quot;href&quot;: &quot;https://www.notion.so/ebe7d6569bd440b18435d8f6f792227b&quot;
              },
              \{
                …
                &quot;plain_text&quot;: &quot; &quot;,
                …
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
		pageId: '991f1062fc784019aea56e890ca04ca2',
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
	code={`&lt;ChildPage
  title=&quot;I’m a child page with 3 blocks: some Lorem, another child page, and a link to same&quot;
  &gt;
  &lt;Paragraph blockProps=\{\{…}}&gt;
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
  &lt;/Paragraph&gt;
  &lt;p
    style=&quot;display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; &quot;
    &gt;⚠️ child_page: &lt;span
      style=&quot;font-weight: 600; display: inline; padding: 3px; border-radius: 3px;&quot;
      &gt;I’m the grandchild.&lt;/span
    &gt;&amp;nbsp;has no content&lt;/p
  &gt;
  &lt;Error
    pageId=&quot;991f1062fc784019aea56e890ca04ca2&quot;
    blockId=&quot;116422a3e16e4329b95d3f8575a43781&quot;
    message=&quot;pageId is not defined&quot;
    stack=&quot;ReferenceError: pageId is not defined
    at linkOrWarning (file:///Users/c/Documents/1-Due/notion2svelte/lib/decorators.js:124:40)
    at maybeLink (file:///Users/c/Documents/1-Due/notion2svelte/lib/decorators.js:132:14)
    at decorateInlineContent (file:///Users/c/Documents/1-Due/notion2svelte/lib/decorators.js:165:14)
    at file:///Users/c/Documents/1-Due/notion2svelte/lib/sveltifier.js:23:23
    at Array.map (&lt;anonymous&gt;)
    at richText (file:///Users/c/Documents/1-Due/notion2svelte/lib/sveltifier.js:23:12)
    at renderBlock (file:///Users/c/Documents/1-Due/notion2svelte/lib/sveltifier.js:298:35)
    at file:///Users/c/Documents/1-Due/notion2svelte/lib/sveltifier.js:208:20
    at Array.map (&lt;anonymous&gt;)
    at renderBlock (file:///Users/c/Documents/1-Due/notion2svelte/lib/sveltifier.js:206:10)&quot;
  /&gt;
&lt;/ChildPage&gt;`}
	language="html"
	>By including a grandchild page&ensp;<em>and</em>&ensp;a link to the same grandchild page, we’ve
	generated two distinct errors. The first (⚠️) is a “warning” generated while rendering “annotated”
	spans of text. The second (the wiggly one below) is a catch-all for all uncaught errors thrown
	during&ensp;<em>notion2svelte&ensp;</em>execution.
	<br />
	See&ensp;<Link type="mention" href="/other-components/error">Error</Link>.</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: 'af0e0b8c-b185-420f-8c27-aec8f5620bb5',
		created_time: '2022-01-28T21:03:00.000Z',
		last_edited_time: '2022-01-28T21:03:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/ChildPage.svelte"
		><InlineColor value="gray">ChildPage.svelte</InlineColor></Link
	>
</Paragraph>
<ChildPage
	title="I’m a child page with 3 blocks: some Lorem, another child page, and a link to same"
	><Paragraph
		blockProps={{
			pageId: '991f1062fc784019aea56e890ca04ca2',
			id: '92e27557-4d07-495a-95d7-212e663bcb59',
			created_time: '2022-01-26T10:03:00.000Z',
			last_edited_time: '2022-12-08T22:46:00.000Z'
		}}
	>
		This is the first block. It’s just a simple paragraph. Next comes another sub-page — call it a
		grandchild? — which&ensp;<em>notion2svelte</em>&ensp;isn’t currently equipped to handle. The
		block after that, which also errors out, is an&ensp;<em>alias</em>&ensp;to the same grandchild
		page.
	</Paragraph>
	<p
		style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
	>
		⚠️ child_page: <span
			style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
			>I’m the grandchild.</span
		>&nbsp;has no content
	</p>
	<Paragraph
		blockProps={{
			pageId: '991f1062fc784019aea56e890ca04ca2',
			id: '116422a3-e16e-4329-b95d-3f8575a43781',
			created_time: '2022-01-26T09:58:00.000Z',
			last_edited_time: '2022-01-26T10:03:00.000Z'
		}}
	>
		<p
			style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
		>
			⚠️ l(t, type, url): <span
				style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
				>I’m the grandchild.</span
			>&nbsp;No slug found for mention w/text: I’m the grandchild'. Have you imported the target
			page with notion2svelte yet?
		</p>
		&ensp;
	</Paragraph>
</ChildPage><Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: '55b9b70d-efa7-4899-8f79-ab31c5a0c291',
		created_time: '2022-01-26T21:17:00.000Z',
		last_edited_time: '2022-01-28T21:03:00.000Z'
	}}
/>
<Callout emoji="🚧"
	>Just to reiterate: with this current version of&ensp;<em>notion2svelte</em>, it’s best to either
	avoid nesting child pages, or perhaps just have your ChildPage component generate a link back to
	the original Notion page?<span slot="children"
		><Paragraph
			blockProps={{
				pageId: '991f1062fc784019aea56e890ca04ca2',
				id: '52edfaa5-44bb-4ca4-92b7-d3cae9f85964',
				created_time: '2022-01-31T07:15:00.000Z',
				last_edited_time: '2022-01-31T07:17:00.000Z'
			}}
		>
			(I’m personally thinking about using ‘em as a replacement for footnotes, which, of course,
			aren’t explicitly supported by Notion.)
		</Paragraph>
	</span></Callout
><Header level={2}>↑ About that Error</Header>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: 'ab32307f-75a7-4621-973a-fe326ac952e3',
		created_time: '2022-01-31T06:44:00.000Z',
		last_edited_time: '2022-12-08T22:44:00.000Z'
	}}
>
	In a traditional file directory, there is a distinction between, well, files and directories. Not
	so with Notion, where the parent of any given page is either another page or the sidebar. This
	presents a challenge when mapping Notion pages to files in a directory tree, which is what’s
	required on the output side of&ensp;<em>notion2svelte</em>.
</Paragraph>
<Callout emoji="🤔"
	>What is the “right” way to represent a&ensp;<em>child_page</em>&ensp;in&ensp;<em>src/routes</em
	>?</Callout
><Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: 'ee467e10-ad5b-401f-98af-7eb873ea0950',
		created_time: '2022-01-26T20:59:00.000Z',
		last_edited_time: '2022-12-08T22:44:00.000Z'
	}}
>
	For this first release,&ensp;<em>notion2svelte&ensp;</em>gives you more than you probably need
	when it comes to child pages…enough to render the entire page, in fact (minus the
	title/cover/icon…)! But this comes with a caveat: it’s&ensp;<em>not</em>&ensp;recursive. That
	means that you’ll get errors wherever&ensp;<em>notion2svelte&ensp;</em>encounters a child page
	inside another child page.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: '2c754530-a3ae-457a-b61c-7c104d4587c5',
		created_time: '2022-01-27T21:11:00.000Z',
		last_edited_time: '2022-12-08T22:44:00.000Z'
	}}
>
	The demo component I made for this site goes the unusual route of&ensp;<em>inlining</em>&ensp;the
	child page. There’s no practical motivation behind this…it was fast and cheap to do.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: '8aa8092b-51d2-4251-82fb-47644ce16065',
		created_time: '2022-01-31T06:50:00.000Z',
		last_edited_time: '2022-12-08T22:44:00.000Z'
	}}
/>
<Paragraph
	blockProps={{
		pageId: '991f1062fc784019aea56e890ca04ca2',
		id: 'd808c897-a441-40eb-a8a7-34e640e4cfda',
		created_time: '2022-01-31T06:50:00.000Z',
		last_edited_time: '2022-12-08T22:44:00.000Z'
	}}
>
	This is one of the components most likely to change in future versions. Got a great idea for how
	this&ensp;should work?&ensp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/discussions">Let me know</Link
	>!
</Paragraph>
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
		<Paragraph
			blockProps={{
				pageId: '991f1062fc784019aea56e890ca04ca2',
				id: '1839e83e-6035-435e-99ba-2ee2aabd2564',
				created_time: '2022-01-26T21:23:00.000Z',
				last_edited_time: '2022-01-26T21:23:00.000Z'
			}}
		/>
	</Column></ColumnList
>
