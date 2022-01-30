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
</script>

<svelte:head>
  <title>Components</title>
</svelte:head>

<Title>Components</Title>

<Header level={1}>A quick word about terminology</Header>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: '3961f6a0-e487-4735-9879-39138ed7627e',
    created_time: '2022-01-26T08:09:00.000Z',
    last_edited_time: '2022-01-26T08:43:00.000Z'
  }}
>
  Let’s talk about&nbsp;<em><strong>elements</strong></em>,&nbsp;<em><strong>blocks</strong></em>,
  and&nbsp;<em><strong>components</strong></em>. Structurally, these are interchangeable because
  they all use tripartite units comprising a required&nbsp;<em>type</em>, optional&nbsp;<em
    >attributes</em
  >&nbsp;and&nbsp;<em>content</em>, also optional.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: 'ec0c84b3-6161-4f89-ac77-d17655adbb74',
    created_time: '2022-01-26T08:41:00.000Z',
    last_edited_time: '2022-01-26T08:45:00.000Z'
  }}
>
  That said, in titling this doc&nbsp;<em>Components</em>, I’m referring specifically to&nbsp;<em
    >Svelte</em
  >&nbsp;components, i.e., pages ending in&nbsp;<em>.svelte</em>, for it’s these that make up&nbsp;<em
    >notion2svelte’s</em
  >&nbsp;final output. In short:
</Paragraph>
<BulletedListItem
  >The Web’s got&nbsp;<em>elements</em>:&nbsp;<InlineCode code={'&lt;hr /&gt;'} />,&nbsp;<InlineCode
    code={'&lt;a href=…&gt;🔗&lt;/a&gt;'}
  />, etc.</BulletedListItem
>
<Toggle
  >Notion’s got&nbsp;<em>blocks</em>&nbsp;<InlineColor value="gray"
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
    <Image url="/assets/components/4c421841-a417-4ca0-af7a-f80dda7ef09a.png" />
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
  "blocks" : [
    \{
      …
      "type" : "divider",
      …
    },
    \{
      …
      "type" : "paragraph",
      "paragraph" : \{
        "text" : [
          \{
            …
            "href": "http://…",
            …
          }
        ]
      }
      …
    }
  ]
} &nbsp;`}
      language="json"
      caption=""
    /><Paragraph
      blockProps={{
        pageId: '98564b233ea84b78ad3147e3a0971ef5',
        id: '32dc15ad-df18-424c-a615-7f8ffd318c77',
        created_time: '2022-01-26T08:32:00.000Z',
        last_edited_time: '2022-01-26T08:33:00.000Z'
      }}
    >
      And all of this complexity still boils down to the same thing:&nbsp;<em>types</em>, with
      optional&nbsp;<em>props & content</em>.
    </Paragraph>
  </span></Toggle
><BulletedListItem
  >Svelte’s got&nbsp;<em>components</em>:&nbsp;<InlineCode
    code={'&lt;Divider /&gt;'}
  />,&nbsp;<InlineCode code={'&lt;Code language=…/&gt;'} />, and these are our current topic.</BulletedListItem
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
    last_edited_time: '2022-01-17T08:23:00.000Z'
  }}
>
  To orient you as you read the docs below, they are all organized using the same four headers, each
  intended to give you a clear vision of the&nbsp;<em>before-</em>,&nbsp;<em>during-</em>, and&nbsp;<em
    >after</em
  >.
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
      last_edited_time: '2022-01-17T08:11:00.000Z'
    }}
  >
    Individual components start their lives as blocks in Notion, completely independent, of course,
    from&nbsp;<em>notion2svelte</em>. You’ll find a screenshot of each component at the top of each
    doc.
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
      last_edited_time: '2022-01-17T08:11:00.000Z'
    }}
  >
    <em>notion2svelte</em>&nbsp;recursively fetches all the blocks on a page and stores the result
    in a single&nbsp;<em>.json</em>&nbsp;file next to the final&nbsp;<em>.svelte</em>&nbsp;output.
  </Paragraph>
</IndentGroup>
<NumberedListItem number="3">
  <InlineColor value="green"><strong>Svelte output</strong></InlineColor></NumberedListItem
>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: '98564b233ea84b78ad3147e3a0971ef5',
      id: 'f0d25453-e9fc-4b83-b233-f5fd8d1dee3b',
      created_time: '2022-01-17T08:11:00.000Z',
      last_edited_time: '2022-01-23T21:24:00.000Z'
    }}
  >
    <InlineCode code={'{&quot;type&quot;:&quot;thingy&quot;…}'} />&nbsp;→&nbsp;<InlineCode
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
      last_edited_time: '2022-01-17T08:12:00.000Z'
    }}
  >
    <em>notion2svelte</em>&nbsp;is out of the picture again by this step, but, just as it’s helpful
    to see a screenshot of a block type in its original&nbsp;<em>notion.so</em>&nbsp;context, so
    it’s helpful to see (one version) of the rendered Svelte component.
  </Paragraph>
</IndentGroup>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: 'd086edea-5a87-46dc-96fa-8b24aaf3da2a',
    created_time: '2022-01-17T07:54:00.000Z',
    last_edited_time: '2022-01-17T07:58:00.000Z'
  }}
>
  You may find it interesting to note that each “Step 1” image is actually a screenshot of “Step 4”
  as rendered on the source Notion page. The image effectively&nbsp;<em>freezes</em>&nbsp;the Notion
  styles, while the example Svelte-side styles are native HTML elements.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: '78e79acc-66ba-4b25-8dcf-b2b0a3951fbe',
    created_time: '2022-01-17T07:58:00.000Z',
    last_edited_time: '2022-01-17T08:23:00.000Z'
  }}
>
  This works because the pages on this site were generated using&nbsp;<em>notion2svelte!</em>
</Paragraph>
<Header level={1}>Component Docs</Header>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: '85c7a786-59e3-41ea-97a4-6610f85e9472',
    created_time: '2022-01-19T23:38:00.000Z',
    last_edited_time: '2022-01-19T23:38:00.000Z'
  }}
/>
<ColumnList cols={3}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: '98564b233ea84b78ad3147e3a0971ef5',
        id: '64f6a0d7-e349-41b4-bf0a-fb6e591edf70',
        created_time: '2022-01-26T08:49:00.000Z',
        last_edited_time: '2022-01-26T08:49:00.000Z'
      }}
    />
  </Column><Column
    ><Image url="/assets/components/effd4d29-3d15-4097-af12-f493312f7267.png"
      >Notion’s interchangeable block types, as of 1/19/22.</Image
    >
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: '98564b233ea84b78ad3147e3a0971ef5',
        id: 'd0e9de7c-da9e-4943-94b0-e6dd61e5af35',
        created_time: '2022-01-26T08:49:00.000Z',
        last_edited_time: '2022-01-26T08:49:00.000Z'
      }}
    />
  </Column></ColumnList
><Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><Link href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</Link
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<Link
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: '98564b233ea84b78ad3147e3a0971ef5',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><Link href="https://fishshell.com/"><InlineColor value="gray">fish shell</InlineColor></Link
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: '98564b233ea84b78ad3147e3a0971ef5',
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
      pageId: '98564b233ea84b78ad3147e3a0971ef5',
      id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
      created_time: '2022-01-27T05:10:00.000Z',
      last_edited_time: '2022-01-27T05:10:00.000Z'
    }}
  />
</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘&nbsp;<a href="/about-notion2svelte">🏠</a>&nbsp;</Header>
<ColumnList cols={2}
  ><Column
    ><Header level={3}>High-level Discussion</Header>
    <BulletedListItem><Link href="/components">Components</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/rules-for-writing-good-slugs">Writing Good Slugs</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/block-props">blockProps</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/nested-blocks">Nested Blocks</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/synced-blocks">Synced Blocks</Link></BulletedListItem>
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><Link href="/components/paragraph">Paragraph (aka “Text”)</Link></BulletedListItem
    >
    <BulletedListItem
      ><Link href="/components/header">Header (3 types in 1!)</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/child-page">ChildPage</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/todo-item">TodoItem</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/bulleted-list-item">BulletedListItem</Link></BulletedListItem
    >
    <BulletedListItem
      ><Link href="/components/numbered-list-item">NumberedListItem</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/toggle">Toggle</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/code">Code</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/quote">Quote</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/callout">Callout</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem><Link href="/components/indent-group">IndentGroup</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/columns">Column & ColumnList</Link>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem><Link href="/components/title">Title (aka Name)</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/cover">Cover (Image & Icon)</Link></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem><Link href="/components/inline-code">InlineCode</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/inline-color">InlineColor</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/internal-link">InternalLink</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><Link href="/components/divider">Divider</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/embed">Embed</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/image">Image</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/error">Error</Link></BulletedListItem>
  </Column></ColumnList
><Paragraph
  blockProps={{
    pageId: '98564b233ea84b78ad3147e3a0971ef5',
    id: 'fd66e0a3-b7cf-414c-b8cd-e7fa6431b613',
    created_time: '2022-01-24T06:48:00.000Z',
    last_edited_time: '2022-01-24T06:48:00.000Z'
  }}
/>
