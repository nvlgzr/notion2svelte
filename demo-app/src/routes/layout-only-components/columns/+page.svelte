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
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		title: 'Column & ColumnList'
	});
</script>

<svelte:head>
	<title>Column & ColumnList</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Column & ColumnList</Title>

<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'c976cab2-f979-490f-9016-5256a19d42bf',
		created_time: '2022-01-27T22:30:00.000Z',
		last_edited_time: '2022-12-08T21:38:00.000Z'
	}}
>
	There’s not much point in documenting these components separately. Needless to say,&ensp;<InlineCode
		code={'Columns'}
	/>&ensp;live inside&ensp;<InlineCode code={'ColumnLists'} />. As defined by Notion, every column
	list is effectively just a single row of&ensp;<em>n</em>&ensp;columns.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'f36e2f14-201b-4eff-b11b-7f8b8f757ee8',
		created_time: '2022-01-27T22:30:00.000Z',
		last_edited_time: '2022-12-08T21:38:00.000Z'
	}}
>
	Both are intended to be layout-only, though you’re certainly welcome to add backgrounds and
	outlines and gradients, etc. to your heart’s content.&ensp;<em>That’s the whole point&ensp;</em>of
	extracting your content from Notion! 😉
</Paragraph>
<Header level={1}>1. Notion original</Header>
<Image
	url="/assets/layout-only-components/columns/5943669d-e80c-478d-9f17-870261454e36.png"
	caption="In case you’re curious, the marks over the images are Balinese digits: 1 2 3. Gotta love that Unicode!"
	>In case you’re curious, the marks over the images are Balinese digits: 1 2 3. Gotta love that
	Unicode!</Image
>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
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
  &quot;type&quot;: &quot;column_list&quot;,
  &quot;column_list&quot;: \{},
  &quot;blocks&quot;: [
    \{
      &quot;object&quot;: &quot;block&quot;,
      …
      &quot;type&quot;: &quot;column&quot;,
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{
          …&quot;heading_1&quot;: \{…&quot;plain_text&quot;: &quot;᭑&quot;,…}
        },
        \{
          …&quot;image&quot;: \{…}
        }
      ]
    },
    \{
      &quot;object&quot;: &quot;block&quot;,
      …
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{
          …&quot;heading_1&quot;: \{…&quot;plain_text&quot;: &quot;᭒&quot;,…}
        },
        \{
          …&quot;image&quot;: \{…}
        }
      ]
    },
    \{
      &quot;object&quot;: &quot;block&quot;,
      …
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{ …&quot;heading_1&quot;: \{…&quot;plain_text&quot;: &quot;᭓&quot;,…}
        },
        \{
          …&quot;image&quot;: \{…}
        }
      ]
    }
  ]
}`}
	language="javascript"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
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
	code={`&lt;ColumnList cols=\{3}&gt;
  &lt;Column&gt;
    &lt;Header level=&quot;1&quot;&gt;᭑&lt;/Header&gt;
    &lt;Image url=&quot;/assets/components/columns/a8410bc7-07a4-4648-8516-bde1bcbffe1b.heic&quot; /&gt;
  &lt;/Column&gt;
  &lt;Column&gt;
    &lt;Header level=&quot;1&quot;&gt;᭒&lt;/Header&gt;
    &lt;Image url=&quot;/assets/components/columns/8e423534-3965-453e-a56a-ea041fcc2cce.heic&quot; /&gt;
  &lt;/Column&gt;
  &lt;Column&gt;
    &lt;Header level=&quot;1&quot;&gt;᭓&lt;/Header&gt;
    &lt;Image url=&quot;/assets/components/columns/dcd84270-50b5-4033-83dc-83dc41e7c5b8.jpg&quot; /&gt;
  &lt;/Column&gt;
&lt;/ColumnList&gt;`}
	language="html"
/><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: '35cb0aad-e947-4891-87a5-ddc65f27ec0f',
		created_time: '2022-01-28T22:54:00.000Z',
		last_edited_time: '2022-12-08T21:50:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/ColumnList.svelte"
		><InlineColor value="gray">ColumnList.svelte</InlineColor></Link
	><InlineColor value="gray">&ensp;&&ensp;</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Column.svelte"
		><InlineColor value="gray">Column.svelte</InlineColor></Link
	><InlineColor value="gray">&ensp;(w/help from&ensp;</InlineColor><Link
		type="mention"
		href="/standard-components/header"><InlineColor value="gray">Header</InlineColor></Link
	><InlineColor value="gray">&ensp;&&ensp;</InlineColor><Link
		type="mention"
		href="/other-components/image"><InlineColor value="gray">Image</InlineColor></Link
	><InlineColor value="gray">&ensp;)</InlineColor>
</Paragraph>
<ColumnList cols={3}
	><Column
		><Header level={1}>᭑</Header>
		<Image
			url="/assets/layout-only-components/columns/a8410bc7-07a4-4648-8516-bde1bcbffe1b.heic"
			caption=""
		/>
	</Column><Column
		><Header level={1}>᭒</Header>
		<Image
			url="/assets/layout-only-components/columns/8e423534-3965-453e-a56a-ea041fcc2cce.heic"
			caption=""
		/>
	</Column><Column
		><Header level={1}>᭓</Header>
		<Image
			url="/assets/layout-only-components/columns/dcd84270-50b5-4033-83dc-83dc41e7c5b8.jpg"
			caption=""
		/>
	</Column></ColumnList
><Callout emoji="⚠️"
	>Oh boy… 😳<span slot="children"
		><Paragraph
			blockProps={{
				pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
				id: 'cd734fc2-4962-43d2-b1f3-eb57a2d429dd',
				created_time: '2022-12-08T21:54:00.000Z',
				last_edited_time: '2022-12-08T21:54:00.000Z'
			}}
		>
			Notice how the first two images have failed to render? It would seem that Notion’s
			Amazon-backed images are pre-processed for use in Notion pages, ensuring that they always
			render just fine, whereas the Notion API gives you back your original image which — if it
			happens to be in&ensp;<em>.heic</em>&ensp;format, as is often the case when saving from on an
			iPhone — will simply&ensp;<Link
				type="absolute"
				href="https://stackoverflow.com/questions/51135568/image-heic-not-loaded-properly-on-browsers"
				>fail</Link
			>&ensp;to render.&ensp;<Link type="absolute" href="https://caniuse.com/heif"
				><strong>Even in Safari</strong></Link
			>!
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
				id: 'bac9f4a1-105e-4587-bf34-2cc1c737f4b5',
				created_time: '2022-01-27T22:42:00.000Z',
				last_edited_time: '2022-12-08T21:54:00.000Z'
			}}
		>
			Although it’s tempting to get angry with Apple for using HEIF without properly supporting it,
			the only thing in&ensp;<em>my</em>&ensp;power is to augment&ensp;<em>notion2svelte</em
			>&ensp;to compensate.
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
				id: 'aa7828c1-17f8-4c74-96e0-1daf6f06d851',
				created_time: '2022-01-27T22:44:00.000Z',
				last_edited_time: '2022-12-08T21:54:00.000Z'
			}}
		>
			Which I plan to do.
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
				id: 'a3df10ea-2061-4493-ae3e-e0cd1746957f',
				created_time: '2022-01-27T22:45:00.000Z',
				last_edited_time: '2022-12-08T21:54:00.000Z'
			}}
		>
			Eventually.
		</Paragraph>
		<Header level={1}>😬</Header>
	</span></Callout
><Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: '672c9606-09a8-4212-90b6-d553281ec7eb',
		created_time: '2022-01-27T22:11:00.000Z',
		last_edited_time: '2022-01-27T22:11:00.000Z'
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
