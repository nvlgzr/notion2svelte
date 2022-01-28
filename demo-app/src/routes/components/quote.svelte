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
  import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>Quote</title>
</svelte:head>

<Title>Quote</Title>

<Header level={1}>1. Notion original</Header>
<Image url="/assets/components/quote/b9cabf79-0b04-4b1d-b675-7f7cf529ab11.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
  blockProps={{
    pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
    id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
    created_time: '2022-01-28T20:26:00.000Z',
    last_edited_time: '2022-01-28T20:28:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of&nbsp;</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].json</em></InlineColor
  >
</Paragraph>
<Code
  code={`\{
  "object": "block",
  "id": "8910b758-ae6f-4bb6-8fd8-86719e917c3e",
  "created_time": "2022-01-26T09:26:00.000Z",
  "last_edited_time": "2022-01-26T09:33:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "quote",
  "quote": \{
    "text": [
      \{
        "type": "text",
        "text": \{
          "content": "Never tell a joke if you’ve got to look around before telling it.",
          "link": null
        },
        "annotations": \{
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default"
        },
        "plain_text": "Never tell a joke if you’ve got to look around before telling it.",
        "href": null
      }
    ]
  },
  "blocks": [
    \{
      "object": "block",
      "id": "2266f93f-0222-487d-8723-2dc72e09f32c",
      "created_time": "2022-01-26T09:32:00.000Z",
      "last_edited_time": "2022-01-26T09:33:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": \{
        "text": [
          \{
            "type": "text",
            "text": \{
              "content": "—Jimmy Carr",
              "link": null
            },
            "annotations": \{
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "—Jimmy Carr",
            "href": null
          }
        ]
      }
    }
  ]
}`}
  language="javascript"
  caption=""
/><Header level={1}>3. Svelte output</Header>
<Paragraph
  blockProps={{
    pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
    id: '28871a46-c697-4500-b517-1c526797ab38',
    created_time: '2022-01-28T20:32:00.000Z',
    last_edited_time: '2022-01-28T20:32:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of&nbsp;</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].svelte</em></InlineColor
  >
</Paragraph>
<Code
  code={`<Quote>
  Never tell a joke if you’ve got to look around before telling it.
  <span slot="children">
    <Paragraph
      blockProps=\{\{
        pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
        id: '2266f93f-0222-487d-8723-2dc72e09f32c',
        created_time: '2022-01-26T09:32:00.000Z',
        last_edited_time: '2022-01-26T09:33:00.000Z'
      }}
    >
      —Jimmy Carr
    </Paragraph>
  </span>
</Quote>`}
  language="html"
  caption="This isn’t&nbsp;<em>entirely</em>&nbsp;accurate. Prettier didn’t handle this example as well as I’d have liked, so I did a bit of whitespace rearranging here."
/><Header level={1}>4. Example rendering</Header>
<Paragraph
  blockProps={{
    pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
    id: '8910b758-ae6f-4bb6-8fd8-86719e917c3e',
    created_time: '2022-01-28T22:38:00.000Z',
    last_edited_time: '2022-01-28T22:38:00.000Z'
  }}
>
  <InlineColor value="gray">Rendered by</InlineColor><MagicLink
    href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Quote.svelte"
    ><InlineColor value="gray">Quote.svelte</InlineColor></MagicLink
  >
</Paragraph>
<Quote
  >Never tell a joke if you’ve got to look around before telling it.<span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
        id: '2266f93f-0222-487d-8723-2dc72e09f32c',
        created_time: '2022-01-26T09:32:00.000Z',
        last_edited_time: '2022-01-28T22:38:00.000Z'
      }}
    >
      —Jimmy Carr
    </Paragraph>
  </span></Quote
><Paragraph
  blockProps={{
    pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
    id: '47743bff-3869-4322-890f-b420f0a8cd48',
    created_time: '2022-01-27T21:55:00.000Z',
    last_edited_time: '2022-01-27T21:55:00.000Z'
  }}
/>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><MagicLink href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</MagicLink
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<MagicLink
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
    >notion2svelte in 10** minutes</MagicLink
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><MagicLink href="https://fishshell.com/"
      ><InlineColor value="gray">fish shell</InlineColor></MagicLink
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
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
      pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
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
    <BulletedListItem><MagicLink href="/components">Components</MagicLink></BulletedListItem>
    <BulletedListItem
      ><MagicLink href="/rules-for-writing-good-slugs">Writing Good Slugs</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/block-props">blockProps</MagicLink></BulletedListItem>
    <BulletedListItem
      ><MagicLink href="/components/nested-blocks">Nested Blocks</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/synced-blocks">Synced Blocks</MagicLink></BulletedListItem
    >
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/paragraph">Paragraph (aka “Text”)</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/header">Header (3 types in 1!)</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/child-page">ChildPage</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/todo-item">TodoItem</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/bulleted-list-item">BulletedListItem</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/numbered-list-item">NumberedListItem</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/toggle">Toggle</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/code">Code</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/quote">Quote</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/callout">Callout</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/indent-group">IndentGroup</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/columns">Column & ColumnList</MagicLink>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/title">Title (aka Name)</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/cover">Cover</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/icon">Icon</MagicLink></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/inline-code">InlineCode</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/inline-color">InlineColor</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/internal-link">InternalLink</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><MagicLink href="/components/divider">Divider</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/embed">Embed</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/image">Image</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/error">Error</MagicLink></BulletedListItem>
  </Column></ColumnList
>
