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
  <title>ChildPage</title>
</svelte:head>

<Title>ChildPage</Title>

<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: '8321b948-c894-4cde-9c54-3bd4a017d71f',
    created_time: '2022-01-26T21:03:00.000Z',
    last_edited_time: '2022-01-27T21:09:00.000Z'
  }}
>
  The “location” of a child page in Notion forsakes the old directory/file dichotomy for a more pure
  hierarchy. This presents a challenging when mapping Notion pages to files in a directory tree.
  What is the “right” way to represent a&nbsp;<em>child_page</em>&nbsp;in&nbsp;<em>src/routes</em>?
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: 'ee467e10-ad5b-401f-98af-7eb873ea0950',
    created_time: '2022-01-26T20:59:00.000Z',
    last_edited_time: '2022-01-27T21:11:00.000Z'
  }}
>
  For this first release,&nbsp;<em>notion2svelte&nbsp;</em>gives you more than you probably need
  when it comes to child pages…enough to render the entire page, in fact (minus the
  title/cover/icon…)! But this comes with a caveat: this isn’t recursive, so you’ll get an Error
  component wherever&nbsp;<em>notion2svelte&nbsp;</em>encounters a child page inside a child page,
  as shown below.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: '2c754530-a3ae-457a-b61c-7c104d4587c5',
    created_time: '2022-01-27T21:11:00.000Z',
    last_edited_time: '2022-01-27T21:13:00.000Z'
  }}
>
  The demo component I made for this site goes the unusual route of&nbsp;<em>inlining</em>&nbsp;the
  child page, rendered with a fuchsia outline that you’ll most certainly want to avoid duplicating.
  😬&nbsp;
</Paragraph>
<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: 'c56a5e3e-01dc-4c42-97b0-1fe40718a31e',
    created_time: '2022-01-26T21:06:00.000Z',
    last_edited_time: '2022-01-26T21:10:00.000Z'
  }}
>
  This is one of the components most likely to change in future versions. Got a great idea for how
  this&nbsp;should work?&nbsp;<Link href="https://github.com/nvlgzr/notion2svelte/discussions"
    >Let me know</Link
  >!
</Paragraph>
<Header level={1}>1. Notion original</Header>
<Image url="/assets/components/child-page/53c83b37-2af7-4eeb-9248-3aa5c19fea63.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
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
      "id": "bc15f3e2-0cdf-4c7a-a7b0-2884c99779c0",
      "created_time": "2022-01-26T09:58:00.000Z",
      "last_edited_time": "2022-01-26T21:13:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "child_page",
      "child_page": \{
        "title": "I’m a child page with 3 blocks: some Lorem, another child page, and a link to same"
      },
      "blocks": [
        \{
          "object": "block",
          "id": "92e27557-4d07-495a-95d7-212e663bcb59",
          "created_time": "2022-01-26T10:03:00.000Z",
          "last_edited_time": "2022-01-26T10:03:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
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
                "plain_text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
                "href": null
              }
            ]
          }
        },
        \{
          "object": "block",
          "id": "ebe7d656-9bd4-40b1-8435-d8f6f792227b",
          "created_time": "2022-01-26T09:58:00.000Z",
          "last_edited_time": "2022-01-26T09:58:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "child_page",
          "child_page": \{
            "title": "I’m the grandchild"
          }
        },
        \{
          "object": "block",
          "id": "116422a3-e16e-4329-b95d-3f8575a43781",
          "created_time": "2022-01-26T09:58:00.000Z",
          "last_edited_time": "2022-01-26T10:03:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": \{
            "text": [
              \{
                "type": "mention",
                "mention": \{
                  "type": "page",
                  "page": \{
                    "id": "ebe7d656-9bd4-40b1-8435-d8f6f792227b"
                  }
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "I’m the grandchild",
                "href": "https://www.notion.so/ebe7d6569bd440b18435d8f6f792227b"
              },
              \{
                "type": "text",
                "text": \{
                  "content": " ",
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
                "plain_text": " ",
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
    pageId: '991f1062fc784019aea56e890ca04ca2',
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
  code={`<ChildPage
  title="I’m a child page with 3 blocks: some Lorem, another child page, and a link to same"
  ><Paragraph
    blockProps=\{\{
      pageId: '991f1062fc784019aea56e890ca04ca2',
      id: '92e27557-4d07-495a-95d7-212e663bcb59',
      created_time: '2022-01-26T10:03:00.000Z',
      last_edited_time: '2022-01-26T10:03:00.000Z'
    }}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
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
    blockProps=\{\{
      pageId: '991f1062fc784019aea56e890ca04ca2',
      id: '116422a3-e16e-4329-b95d-3f8575a43781',
      created_time: '2022-01-26T09:58:00.000Z',
      last_edited_time: '2022-01-26T10:03:00.000Z'
    }}
  >
    <p
      style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
    >
      ⚠️ k(t, url): <span
        style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
        >I’m the grandchild.</span
      >&nbsp;No URL provided for I’m the grandchild.<br /><br />Did you give it a Slug, mark it
      Publishable, and run _notion2svelte_?
    </p>
    &nbsp;
  </Paragraph>
	</ChildPage>`}
  language="html"
  caption=""
/><Header level={1}>4. Example rendering</Header>
<Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: 'af0e0b8c-b185-420f-8c27-aec8f5620bb5',
    created_time: '2022-01-28T21:03:00.000Z',
    last_edited_time: '2022-01-28T21:03:00.000Z'
  }}
>
  <InlineColor value="gray">Rendered by</InlineColor><Link
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
      last_edited_time: '2022-01-26T10:03:00.000Z'
    }}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
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
      ⚠️ k(t, url): <span
        style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
        >I’m the grandchild.</span
      >&nbsp;No URL provided for I’m the grandchild.<br /><br />Did you give it a Slug, mark it
      Publishable, and run _notion2svelte_?
    </p>
    &nbsp;
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
  >Pending further changes in this area, your best bet is probably to either avoid child pages
  entirely, use them to link back to Notion, or avoid nested child pages.</Callout
><Paragraph
  blockProps={{
    pageId: '991f1062fc784019aea56e890ca04ca2',
    id: '5016cde0-0427-480c-b5e0-0bcc8fc4df00',
    created_time: '2022-01-26T21:16:00.000Z',
    last_edited_time: '2022-01-26T21:16:00.000Z'
  }}
/>
<Divider />
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
    pageId: '991f1062fc784019aea56e890ca04ca2',
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
      pageId: '991f1062fc784019aea56e890ca04ca2',
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
      pageId: '991f1062fc784019aea56e890ca04ca2',
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
      pageId: '991f1062fc784019aea56e890ca04ca2',
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
