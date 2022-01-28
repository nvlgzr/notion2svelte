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
  (via&nbsp;<em>notion2svelte’s</em>&nbsp;output) that my temp blocks have bookended the broken
  ones, I can select everything between the two temp blocks, inclusive, and delete. Then rerun&nbsp;<em
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
  on every page, which serves as both navigation and, thanks to CSS’s&nbsp;<InlineCode
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
      >*There are multiple possibilities for implementing more “standard” web navigation with&nbsp;</InlineColor
    ><InlineColor value="gray"><em>notion2svelte</em></InlineColor><InlineColor value="gray"
      >. For instance, navigation could be built at compile time using Svelte Kit’s&nbsp;</InlineColor
    ><InlineColor value="gray"><InlineCode code={'load'} /></InlineColor><InlineColor value="gray"
      >&nbsp;to scan the file system.</InlineColor
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
      sort of Notion-driven nav in&nbsp;</InlineColor
    ><InlineColor value="gray"><em>notion2svelte,&nbsp;</em></InlineColor><InlineColor value="gray"
      >but for now, that’s out of scope.</InlineColor
    >
  </Paragraph>
</IndentGroup>
<Header level={1}>1. Notion original</Header>
<Image url="/assets/components/synced-blocks/70ee826f-ca3c-4842-a7e1-bc3723d04390.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
  blockProps={{
    pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
      "id": "86c3e92c-c510-4fe0-866b-be3b74049989",
      "created_time": "2022-01-26T22:27:00.000Z",
      "last_edited_time": "2022-01-26T22:40:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "synced_block",
      "synced_block": \{
        "synced_from": null
      },
      "blocks": [
        \{
          "object": "block",
          "id": "c9fa3a33-f652-4e81-bd97-6b9af4436111",
          "created_time": "2022-01-26T22:27:00.000Z",
          "last_edited_time": "2022-01-26T22:40:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "I’m syncable!",
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
                "plain_text": "I’m syncable!",
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
    pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
  code={`<Paragraph
  blockProps=\{\{
    pageId: 'b266b66cecc74e218f494f80f5c820cc',
    id: 'c9fa3a33-f652-4e81-bd97-6b9af4436111',
    created_time: '2022-01-26T22:27:00.000Z',
    last_edited_time: '2022-01-26T22:40:00.000Z'
  }}
>
  I’m syncable!
</Paragraph>`}
  language="html"
  caption=""
/><Paragraph
  blockProps={{
    pageId: 'b266b66cecc74e218f494f80f5c820cc',
    id: '1f965316-ac10-4b81-82e1-9bb1b6658357',
    created_time: '2022-01-27T07:27:00.000Z',
    last_edited_time: '2022-01-28T20:40:00.000Z'
  }}
>
  At present,&nbsp;<em>notion2svelte</em>&nbsp;responds to Synced Blocks by simply stripping them
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
    pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
      pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
      pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
      pageId: 'b266b66cecc74e218f494f80f5c820cc',
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
    <BulletedListItem
      ><MagicLink href="/components/cover">Cover (Image & Icon)</MagicLink></BulletedListItem
    >
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
