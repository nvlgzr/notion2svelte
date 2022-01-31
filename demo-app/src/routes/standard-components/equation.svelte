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
  <title>Equation</title>
</svelte:head>

<Title>Equation</Title>

<Header level={1}>1. Notion original</Header>
<Header level={3}>Inline</Header>
<Image url="/assets/standard-components/equation/49dff063-66e4-4113-b5ba-71511c705bb8.png" />
<Header level={3}>Block</Header>
<Image url="/assets/standard-components/equation/40267217-ee20-4205-a8b0-36923db0531c.png" />
<Header level={1}>2. Notion API</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
    created_time: '2022-01-28T20:26:00.000Z',
    last_edited_time: '2022-01-28T20:28:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].json</em></InlineColor
  >
</Paragraph>
<Header level={3}>Inline</Header>
<Code
  code={`\{
  "object": "block",
  …
  "type": "paragraph",
  "paragraph": \{
    "text": [
      …
      \{
        "type": "equation",
        "equation": \{
          "expression": "E=mc^2"
        },
        "annotations": \{
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default"
        },
        "plain_text": "E=mc^2",
        "href": null
      },
      \{
        …
        "plain_text": " might be the most well-known equation on the planet, I’m slightly more fond of ",
        …
      },
      \{
        "type": "equation",
        "equation": \{
          "expression": "e^\{iπ}=-1"
        },
        "annotations": \{
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default"
        },
        "plain_text": "e^\{iπ}=-1",
        "href": null
      },
      …
    ]
  }
}`}
  language="json"
/><Header level={3}>Block</Header>
<Code
  code={`\{
  "object": "block",
  "id": "63423e49-abae-40ac-b485-83ee14260386",
  "created_time": "2022-01-26T09:55:00.000Z",
  "last_edited_time": "2022-01-26T09:55:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "equation",
  "equation": \{
    "expression": "\\begin\{CD}\nA @>a>> B \\\\\n@VbVV @AAcA \\\\\nC @= D\n\\end\{CD}"
  }
}`}
  language="json"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '28871a46-c697-4500-b517-1c526797ab38',
    created_time: '2022-01-28T20:32:00.000Z',
    last_edited_time: '2022-01-28T20:32:00.000Z'
  }}
>
  <InlineColor value="gray">Partial output of</InlineColor><InlineColor value="gray"
    ><em>src/routes/[slug].svelte</em></InlineColor
  >
</Paragraph>
<Header level={3}>Inline</Header>
<Code
  code={`<Paragraph blockProps=\{\{…}}>
  Although <Equation block=\{false} katexString="E=mc^2" /> might be the most well-known equation on the
  planet, I’m slightly more fond of <Equation block=\{false} katexString="e^\{'\{'}iπ}=-1" />. Euler
  needs better branding.
</Paragraph>`}
  language="html"><InlineCode code={'block={false}'} /></Code
><Header level={3}>Block</Header>
<Code
  code={`<Equation
  block=\{true}
  katexString="\begin\{'\{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end\{'\{'}CD}"
/>`}
  language="html"><InlineCode code={'block={true}'} /></Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: 'f01f769b-c9b9-4d68-a1ee-b9de396170fe',
    created_time: '2022-01-28T22:42:00.000Z',
    last_edited_time: '2022-01-28T22:44:00.000Z'
  }}
>
  <InlineColor value="gray">Rendered by</InlineColor><Link
    type="absolute"
    href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Equation.svelte"
    ><InlineColor value="gray">Equation.svelte</InlineColor></Link
  ><InlineColor value="gray">, which relies on</InlineColor><Link
    type="absolute"
    href="https://katex.org/"><InlineColor value="gray">katex</InlineColor></Link
  ><InlineColor value="gray">for typesetting</InlineColor>
</Paragraph>
<Header level={3}>Inline</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '2f038578-9c57-4074-905c-ce6237ba700d',
    created_time: '2022-01-27T23:51:00.000Z',
    last_edited_time: '2022-01-28T23:50:00.000Z'
  }}
>
  Although <Equation block={false} katexString="E=mc^2" /> might be the most well-known equation on the
  planet, I’m slightly more fond of <Equation block={false} katexString="e^{'{'}iπ}=-1" />. Euler
  needs better branding.
</Paragraph>
<Header level={3}>Block</Header>
<Equation
  block={true}
  katexString="\begin{'{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end{'{'}CD}"
/><Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '27d68652-33ab-4179-b563-98554eee3c28',
    created_time: '2022-01-28T22:48:00.000Z',
    last_edited_time: '2022-01-28T22:48:00.000Z'
  }}
/>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><Link type="absolute" href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</Link
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: 'ef8517977d17431889a3ae09285cfef8',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<Link
    type="absolute"
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'ef8517977d17431889a3ae09285cfef8',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on
    </InlineColor><Link type="absolute" href="https://fishshell.com/"
      ><InlineColor value="gray">fish shell</InlineColor></Link
    ><InlineColor value="gray">
      is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app, after
      all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'ef8517977d17431889a3ae09285cfef8',
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
      pageId: 'ef8517977d17431889a3ae09285cfef8',
      id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
      created_time: '2022-01-27T05:10:00.000Z',
      last_edited_time: '2022-01-27T05:10:00.000Z'
    }}
  />
</IndentGroup>
<Divider />
<Header level={2}
  >Browse the docs ⚘ <Link type="alias" href="/about-notion2svelte">🏠</Link>
</Header>
<ColumnList cols={2}
  ><Column
    ><Header level={3}>High-level Discussion</Header>
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
      >Toggle Headings<InlineColor value="gray">
        (not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem
      ><Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
      ></BulletedListItem
    >
    <BulletedListItem
      ><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link>
    </BulletedListItem>
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
      ><strong>bold</strong> → <InlineCode code={'&lt;strong&gt;'} />
    </BulletedListItem>
    <BulletedListItem><em>italic</em> → <InlineCode code={'&lt;em&gt;'} /></BulletedListItem>
    <BulletedListItem><s>strikethrough</s> → NYI</BulletedListItem>
    <BulletedListItem
      ><span style="text-decoration:underline;">underline</span> → NYI</BulletedListItem
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
