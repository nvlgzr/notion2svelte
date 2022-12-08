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

<Title>Column & ColumnList</Title>

<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'c976cab2-f979-490f-9016-5256a19d42bf',
		created_time: '2022-01-27T22:30:00.000Z',
		last_edited_time: '2022-01-27T22:32:00.000Z'
	}}
>
	There’s not much point in documenting these components separately. Needless to say, Columns live
	inside ColumnLists. As defined by Notion, every ColumnList is effectively just a single row
	of&ensp;<em>n</em>&ensp;columns.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'f36e2f14-201b-4eff-b11b-7f8b8f757ee8',
		created_time: '2022-01-27T22:30:00.000Z',
		last_edited_time: '2022-01-27T22:30:00.000Z'
	}}
>
	Both are intended to be layout-only, though you’re certainly welcome to add backgrounds and
	outlines and gradients and wtf you want because&ensp;<em>that’s the whole point</em>&ensp;of
	extracting your content from Notion! 😉
</Paragraph>
<Header level={1}>1. Notion original</Header>
<Image url="/assets/layout-only-components/columns/5943669d-e80c-478d-9f17-870261454e36.png"
	>In case you’re curious, the marks over the images are Balinese digits: 1 2 3. Gotta love that
	Unicode!</Image
>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
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
  &quot;id&quot;: &quot;f1d9ec6b-ddd7-45b4-9401-c3e2d2ebbf29&quot;,
  &quot;created_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-27T22:18:00.000Z&quot;,
  &quot;has_children&quot;: true,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;column_list&quot;,
  &quot;column_list&quot;: \{},
  &quot;blocks&quot;: [
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;3caa91fd-6079-44cd-9e84-1eafada318f3&quot;,
      &quot;created_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
      &quot;has_children&quot;: true,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;column&quot;,
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;d02b0197-e66f-43a5-8207-c1f42bbc59a0&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:18:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;heading_1&quot;,
          &quot;heading_1&quot;: \{
            &quot;text&quot;: [
              \{
                &quot;type&quot;: &quot;text&quot;,
                &quot;text&quot;: \{
                  &quot;content&quot;: &quot;᭑&quot;,
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
                &quot;plain_text&quot;: &quot;᭑&quot;,
                &quot;href&quot;: null
              }
            ]
          }
        },
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;a8410bc7-07a4-4648-8516-bde1bcbffe1b&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;image&quot;,
          &quot;image&quot;: \{
            &quot;caption&quot;: [],
            &quot;type&quot;: &quot;file&quot;,
            &quot;file&quot;: \{
              &quot;url&quot;: &quot;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83942994-9c55-4fa3-87f6-28e3c8ed09c8/CD2C6E7F-78F1-4354-A4D5-58E76D10C886_1_201_a.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220127%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220127T222902Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=00076f4328fc27cd6669838eab76249a7effa5468834b3850a2a45cb00e9668e&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&quot;,
              &quot;expiry_time&quot;: &quot;2022-01-27T23:29:02.937Z&quot;
            }
          }
        }
      ]
    },
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;d775da15-baad-4019-a671-9f9ea4e9fbcf&quot;,
      &quot;created_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
      &quot;has_children&quot;: true,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;column&quot;,
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;47b74b38-dec4-42d1-89d1-0649386e8f4f&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;heading_1&quot;,
          &quot;heading_1&quot;: \{
            &quot;text&quot;: [
              \{
                &quot;type&quot;: &quot;text&quot;,
                &quot;text&quot;: \{
                  &quot;content&quot;: &quot;᭒&quot;,
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
                &quot;plain_text&quot;: &quot;᭒&quot;,
                &quot;href&quot;: null
              }
            ]
          }
        },
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;8e423534-3965-453e-a56a-ea041fcc2cce&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:17:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;image&quot;,
          &quot;image&quot;: \{
            &quot;caption&quot;: [],
            &quot;type&quot;: &quot;file&quot;,
            &quot;file&quot;: \{
              &quot;url&quot;: &quot;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b0df0d64-acca-4cbc-836a-743329690882/812669A3-6EC3-4B0B-A554-64648E122F2E_1_201_a.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220127%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220127T222902Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=5e3c2a1e64c3287030a4ba68c428a8b53f19d9c95c4b1c13ba8af81701878558&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&quot;,
              &quot;expiry_time&quot;: &quot;2022-01-27T23:29:02.929Z&quot;
            }
          }
        }
      ]
    },
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;30a857dc-ff04-474d-86f6-95bab140d43e&quot;,
      &quot;created_time&quot;: &quot;2022-01-27T22:18:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
      &quot;has_children&quot;: true,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;column&quot;,
      &quot;column&quot;: \{},
      &quot;blocks&quot;: [
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;7ced39ac-32b6-4118-a7e2-0f3b5ad6b209&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:19:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;heading_1&quot;,
          &quot;heading_1&quot;: \{
            &quot;text&quot;: [
              \{
                &quot;type&quot;: &quot;text&quot;,
                &quot;text&quot;: \{
                  &quot;content&quot;: &quot;᭓&quot;,
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
                &quot;plain_text&quot;: &quot;᭓&quot;,
                &quot;href&quot;: null
              }
            ]
          }
        },
        \{
          &quot;object&quot;: &quot;block&quot;,
          &quot;id&quot;: &quot;dcd84270-50b5-4033-83dc-83dc41e7c5b8&quot;,
          &quot;created_time&quot;: &quot;2022-01-27T22:18:00.000Z&quot;,
          &quot;last_edited_time&quot;: &quot;2022-01-27T22:18:00.000Z&quot;,
          &quot;has_children&quot;: false,
          &quot;archived&quot;: false,
          &quot;type&quot;: &quot;image&quot;,
          &quot;image&quot;: \{
            &quot;caption&quot;: [],
            &quot;type&quot;: &quot;file&quot;,
            &quot;file&quot;: \{
              &quot;url&quot;: &quot;https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cb323a02-365d-4301-ad51-1683d71cedb5/7D7F17EE-121E-4CD0-B053-23E23C892981_1_105_c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220127%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20220127T222902Z&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=d2873089ccda4af4941d462f13c5dc2844250b79144ebe461e849af00f35c7b4&amp;X-Amz-SignedHeaders=host&amp;x-id=GetObject&quot;,
              &quot;expiry_time&quot;: &quot;2022-01-27T23:29:02.970Z&quot;
            }
          }
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
		last_edited_time: '2022-01-28T22:56:00.000Z'
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
	><InlineColor value="gray">&ensp;(wHeader and Image)</InlineColor>
</Paragraph>
<ColumnList cols={3}
	><Column
		><Header level={1}>᭑</Header>
		<Image url="/assets/layout-only-components/columns/a8410bc7-07a4-4648-8516-bde1bcbffe1b.heic" />
	</Column><Column
		><Header level={1}>᭒</Header>
		<Image url="/assets/layout-only-components/columns/8e423534-3965-453e-a56a-ea041fcc2cce.heic" />
	</Column><Column
		><Header level={1}>᭓</Header>
		<Image url="/assets/layout-only-components/columns/dcd84270-50b5-4033-83dc-83dc41e7c5b8.jpg" />
	</Column></ColumnList
><Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: '9799c5c6-946e-43a9-8e4e-1a76d1554ca6',
		created_time: '2022-01-27T22:40:00.000Z',
		last_edited_time: '2022-01-27T22:49:00.000Z'
	}}
>
	Oh boy. Notice how the first two images have failed to render? It would seem that Notion’s
	Amazon-backed images are pre-processed for use in Notion pages, ensuring that they always render
	just fine, whereas the Notion API gives you back your original image which — if it happens to be
	in&ensp;<em>.heic</em>&ensp;format, as is often the case when saving from on an iPhone — will
	simply&ensp;<Link
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
		last_edited_time: '2022-01-31T07:49:00.000Z'
	}}
>
	Although it’s tempting to get angry with Apple for using HEIF without properly supporting it, the
	only thing in&ensp;<em>my</em>&ensp;power is to augment&ensp;<em>notion2svelte</em>&ensp;to
	compensate.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'aa7828c1-17f8-4c74-96e0-1daf6f06d851',
		created_time: '2022-01-27T22:44:00.000Z',
		last_edited_time: '2022-01-27T22:45:00.000Z'
	}}
>
	Which I plan to do.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: '97e26ade6cc84c4590e7e74dbe6cb0b4',
		id: 'a3df10ea-2061-4493-ae3e-e0cd1746957f',
		created_time: '2022-01-27T22:45:00.000Z',
		last_edited_time: '2022-01-27T22:45:00.000Z'
	}}
>
	Eventually.
</Paragraph>
<Header level={1}>😬</Header>
<Paragraph
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
