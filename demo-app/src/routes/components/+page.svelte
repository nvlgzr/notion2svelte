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
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		title: 'Components'
	});
</script>

<svelte:head>
	<title>Components</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Components</Title>

<Header level={1}>A quick word about terminology</Header>
<Paragraph
	blockProps={{
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		id: '3961f6a0-e487-4735-9879-39138ed7627e',
		created_time: '2022-01-26T08:09:00.000Z',
		last_edited_time: '2022-12-04T02:33:00.000Z'
	}}
>
	Let’s talk about&ensp;<em><strong>elements</strong></em>,&ensp;<em><strong>blocks</strong></em>,
	and&ensp;<em><strong>components</strong></em>. Structurally, these are interchangeable because
	they all use tripartite units comprising a required&ensp;<em><strong>type</strong></em>, and,
	optionally&ensp;<em><strong>attributes</strong></em>&ensp;and&ensp;<em
		><strong>content</strong></em
	>.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		id: 'ec0c84b3-6161-4f89-ac77-d17655adbb74',
		created_time: '2022-01-26T08:41:00.000Z',
		last_edited_time: '2022-12-04T02:36:00.000Z'
	}}
>
	That said, in titling this doc&ensp;<em>Components</em>, I’m referring specifically to&ensp;<em
		>Svelte</em
	>&ensp;components, i.e., XML tags with presentation & behavior dictated by the contents of&ensp;<InlineCode
		code={'&lt;component-name&gt;.svelte'}
	/>&ensp;pages, for it’s these that make up&ensp;<em>notion2svelte’s</em>&ensp;final output.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		id: '86635ef8-ed08-4bb5-8c8a-495836191f25',
		created_time: '2022-12-04T02:36:00.000Z',
		last_edited_time: '2022-12-04T02:36:00.000Z'
	}}
>
	In short:
</Paragraph>
<BulletedListItem
	>The Web’s got&ensp;<em>elements</em>:&ensp;<InlineCode code={'&lt;hr /&gt;'} />,&ensp;<InlineCode
		code={'&lt;a href=…&gt;🔗&lt;/a&gt;'}
	/>, etc.</BulletedListItem
>
<Toggle
	>Notion’s got&ensp;<em>blocks</em>&ensp;<InlineColor value="gray"
		>(toggle for details)</InlineColor
	>
	<span slot="children"
		><Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '9a95285c-c21c-4bed-b01f-fec9e4240922',
				created_time: '2022-01-26T08:29:00.000Z',
				last_edited_time: '2022-01-26T08:30:00.000Z'
			}}
		>
			Of course, most Notion content exists in whatever proprietary structure they’ve created in
			their database, and blocks are usually generated via the GUI…
		</Paragraph>
		<Image url="/assets/components/4c421841-a417-4ca0-af7a-f80dda7ef09a.png" caption="" />
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '88b44a35-b4d7-4f78-a68b-1d75ed77bfa4',
				created_time: '2022-01-26T08:27:00.000Z',
				last_edited_time: '2022-01-26T08:32:00.000Z'
			}}
		>
			…while the API affords computer-focussed interactions with Notion’s pages & blocks.
		</Paragraph>
		<Code
			code={`\{
  …
  &quot;blocks&quot; : [
    \{
      …
      &quot;type&quot; : &quot;divider&quot;,
      …
    },
    \{
      …
      &quot;type&quot; : &quot;paragraph&quot;,
      &quot;paragraph&quot; : \{
        &quot;text&quot; : [
          \{
            …
            &quot;href&quot;: &quot;http://…&quot;,
            …
          }
        ]
      }
      …
    }
  ]
}  `}
			language="json"
		/><Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '32dc15ad-df18-424c-a615-7f8ffd318c77',
				created_time: '2022-01-26T08:32:00.000Z',
				last_edited_time: '2022-01-26T08:33:00.000Z'
			}}
		>
			And all of this complexity still boils down to the same thing:&ensp;<em>types</em>, with
			optional&ensp;<em>props & content</em>.
		</Paragraph>
	</span></Toggle
><BulletedListItem
	>Svelte’s got&ensp;<em>components</em>:&ensp;<InlineCode
		code={'&lt;Divider /&gt;'}
	/>,&ensp;<InlineCode code={'&lt;Code language=…/&gt;'} />, and these are our current topic.</BulletedListItem
>
<Paragraph
	blockProps={{
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		id: '8db0ea76-9a07-4a68-874b-437675723688',
		created_time: '2022-01-26T08:35:00.000Z',
		last_edited_time: '2022-01-26T08:47:00.000Z'
	}}
>
	Capisce?
</Paragraph>
<Header level={1}>The 4 stages of component transformation</Header>
<Callout emoji="🦦"
	>This is pretty self-explanatory, so feel free to skip straight down to the docs.</Callout
><Paragraph
	blockProps={{
		pageId: '98564b233ea84b78ad3147e3a0971ef5',
		id: 'aedae2ac-d168-4e90-b78d-ab383e3d8f8c',
		created_time: '2022-01-17T08:19:00.000Z',
		last_edited_time: '2022-12-04T02:42:00.000Z'
	}}
>
	To orient you as you read the docs below, they are all organized using the same four headers, each
	intended to give you a clear vision of the&ensp;<em>before-</em>,&ensp;<em>during-</em>, and&ensp;<em
		>after</em
	>
</Paragraph>
<NumberedListItem number="1">
	<InlineColor value="green"><strong>As rendered in Notion</strong></InlineColor></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: 'd884d4a3-70d5-4f3a-9ba9-b4f722ab42bd',
			created_time: '2022-01-17T08:11:00.000Z',
			last_edited_time: '2022-12-04T02:43:00.000Z'
		}}
	>
		Individual components start their lives as blocks in Notion, completely independent, of course,
		from&ensp;<em>notion2svelte</em>
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: '069e3c93-f8ff-4b19-a6b9-a76915748654',
			created_time: '2022-12-04T02:43:00.000Z',
			last_edited_time: '2022-12-04T02:43:00.000Z'
		}}
	>
		You’ll find a screenshot of each component at the top of each doc. Specifically, each “Step 1”
		image is a screenshot of “Step 4,” as rendered on the source page on&ensp;<em>notion.so</em>
	</Paragraph>
</IndentGroup>
<NumberedListItem number="2">
	<InlineColor value="green"><strong>Notion API</strong></InlineColor></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: '3b20c3de-269f-4eff-92f6-bc10fe60b773',
			created_time: '2022-01-17T08:11:00.000Z',
			last_edited_time: '2022-12-04T02:42:00.000Z'
		}}
	>
		<em>notion2svelte</em>&ensp;recursively fetches all the blocks on a page and stores the result
		in a single&ensp;<em>notion-export.js</em>&ensp;file next to the final&ensp;<em>+page.svelte</em
		>&ensp;output
	</Paragraph>
</IndentGroup>
<NumberedListItem number="3">
	<InlineColor value="green"><strong>Svelte output&ensp;</strong></InlineColor></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: 'f0d25453-e9fc-4b83-b233-f5fd8d1dee3b',
			created_time: '2022-01-17T08:11:00.000Z',
			last_edited_time: '2022-12-04T02:42:00.000Z'
		}}
	>
		Here you can see the specific block-level transformation applied to get from Notion’s JSON
		output to Svelte’s component syntax
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: '7809f2ce-b37b-40c1-8131-a7b1496b8d8e',
			created_time: '2022-01-17T08:11:00.000Z',
			last_edited_time: '2022-12-04T02:40:00.000Z'
		}}
	>
		<InlineCode code={'{&quot;type&quot;:&quot;thingy&quot;…}'} />&ensp;→&ensp;<InlineCode
			code={'&lt;Thingy&gt;…&lt;/Thingy&gt;'}
		/>
	</Paragraph>
</IndentGroup>
<NumberedListItem number="4">
	<InlineColor value="green"><strong>Rendered content</strong></InlineColor></NumberedListItem
>
<IndentGroup>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: '9f35b586-ab18-4f4d-8182-e1b48be8e1b4',
			created_time: '2022-01-17T08:12:00.000Z',
			last_edited_time: '2022-12-04T02:44:00.000Z'
		}}
	>
		By this step,&ensp;<em>notion2svelte</em>&ensp;is out of the picture but, just as it’s helpful
		to see a screenshot of a block type in its original&ensp;<em>notion.so</em>&ensp;context, so
		it’s helpful to see a&ensp;<em>version</em>&ensp;of the rendered Svelte component
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: '98564b233ea84b78ad3147e3a0971ef5',
			id: 'f99679b8-3a7a-4ec0-b475-4791d63184a8',
			created_time: '2022-12-04T02:44:00.000Z',
			last_edited_time: '2022-12-04T02:45:00.000Z'
		}}
	>
		Once you bring your own CSS and behaviors to the mix, the results will, of course, vary
	</Paragraph>
</IndentGroup>
<Header level={1}>Supported Components</Header>
<ColumnList cols={2}
	><Column
		><Header level={3}>“Regular” Blocks</Header>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: 'd8419068-e2bd-4a42-a92b-002f79352d9f',
				created_time: '2022-12-04T03:55:00.000Z',
				last_edited_time: '2022-12-04T07:38:00.000Z'
			}}
		>
			<em>notion2svelte</em>&ensp;is aimed primarily toward rendering “turn-intoable” Notion blocks
			👇
		</Paragraph>
		<Image
			url="/assets/components/3fab1818-a16b-449b-9753-1c82d682eba9.png"
			caption="Notion’s interchangeable block types, as of 12/3/22"
			>Notion’s interchangeable block types, as of 12/3/22</Image
		>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '68f9420d-f6f5-4658-a4df-decca5ec7841',
				created_time: '2022-12-04T07:40:00.000Z',
				last_edited_time: '2022-12-04T07:42:00.000Z'
			}}
		>
			<em>notion2svelte</em>&ensp;does&ensp;<em>not</em>&ensp;yet support Notion’s newer&ensp;<em
				>Toggle headings</em
			><InlineColor value="purple"><em>*</em></InlineColor>
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '028524e6-3788-4552-9b2e-46b1665fa3ba',
				created_time: '2022-12-04T07:42:00.000Z',
				last_edited_time: '2022-12-04T07:42:00.000Z'
			}}
		>
			<InlineColor value="purple">*Pull requests welcome!</InlineColor>
		</Paragraph>
	</Column><Column
		><Header level={3}>Specialized Blocks</Header>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: 'f7f931bf-9be6-41aa-b64c-05c057a3b8fe',
				created_time: '2022-12-04T04:10:00.000Z',
				last_edited_time: '2022-12-04T07:42:00.000Z'
			}}
		>
			Since the goal isn’t to replicate Notion entirely, but to rather to use it as a near-wysiwyg
			editor,&ensp;<em>notion2svelte</em>&ensp;doesn’t support<InlineColor value="purple"
				>*</InlineColor
			>&ensp;most of the 3rd-party links and embeds that Notion provides
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '047d2962-41b8-4a41-b8e3-98f99126b892',
				created_time: '2022-12-04T07:34:00.000Z',
				last_edited_time: '2022-12-04T07:43:00.000Z'
			}}
		>
			<em>notion2svelte</em>&ensp;does, however, provide support for Dividers, Images (including
			captions), and general-purpose Embeds
		</Paragraph>
		<Header level={3}>Inline Markup</Header>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: 'b1e4e3d1-cce9-4a0f-8669-08dba3b25b73',
				created_time: '2022-12-04T07:43:00.000Z',
				last_edited_time: '2022-12-04T08:11:00.000Z'
			}}
		>
			When it comes to what Notion calls “annotations,”&ensp;<em>notion2svelte</em>&ensp;supports
			them all.
		</Paragraph>
		<Header level={3}>Synced blocks</Header>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '6d4eb01d-ee20-45ca-a1cf-0838b0de2402',
				created_time: '2022-12-04T04:10:00.000Z',
				last_edited_time: '2022-12-04T07:30:00.000Z'
			}}
		>
			Synced blocks are effectively invisible to notion2svelte, but you can use them to create
			reusable content across pages published via&ensp;<em>notion2svelte</em>
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '378c90d7-23a0-4396-958c-7c6ed0506f70',
				created_time: '2022-12-04T04:08:00.000Z',
				last_edited_time: '2022-12-04T07:41:00.000Z'
			}}
		>
			Most of these are supported, as documented&ensp;<strong>Turn-intoable Block Components</strong
			>&ensp;below, but I haven’t yet turned my attention to&ensp;
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '98564b233ea84b78ad3147e3a0971ef5',
				id: '042c448e-d86d-4dfa-99da-1b823077d84f',
				created_time: '2022-12-04T04:16:00.000Z',
				last_edited_time: '2022-12-04T07:29:00.000Z'
			}}
		>
			The ToC ↓ demonstrates this synced-block technique
		</Paragraph>
	</Column></ColumnList
><Divider />
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
