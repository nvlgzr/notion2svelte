<svelte:head>
  <title>Title (aka Name)</title>
</svelte:head>
      <script>
        import Error from "$lib/notion2svelte/Error.svelte";
        import Cover from "$lib/notion2svelte/Cover.svelte"
        import Title from "$lib/notion2svelte/Title.svelte"
        import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
        import Callout from "$lib/notion2svelte/Callout.svelte"
        import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
        import Code from "$lib/notion2svelte/Code.svelte"
        import ColumnList from "$lib/notion2svelte/ColumnList.svelte"
        import Column from "$lib/notion2svelte/Column.svelte"
        import Divider from "$lib/notion2svelte/Divider.svelte"
        import Embed from "$lib/notion2svelte/Embed.svelte"
        import Header from "$lib/notion2svelte/Header.svelte"
        import Image from "$lib/notion2svelte/Image.svelte"
        import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
        import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
        import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
        import Equation from "$lib/notion2svelte/Equation.svelte"
        import Link from "$lib/notion2svelte/Link.svelte"
        import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
        import Paragraph from "$lib/notion2svelte/Paragraph.svelte"
        import Quote from "$lib/notion2svelte/Quote.svelte"
        import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
        import Toggle from "$lib/notion2svelte/Toggle.svelte"
      </script>
      

  
  <Title>Title (aka Name)</Title>




  <Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"5db03761-ca67-415e-bc18-b27460fb36bb","created_time":"2022-01-27T22:52:00.000Z","last_edited_time":"2022-01-28T23:35:00.000Z"}}>
That’s is the page Title ↑
</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"1d483a96-d4bc-4a24-991d-83599b279fec","created_time":"2022-01-27T22:53:00.000Z","last_edited_time":"2022-01-27T22:53:00.000Z"}}>

</Paragraph>
<ColumnList cols={2}><Column><Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"ae48042e-7988-441b-a5b7-1ffd02817a04","created_time":"2022-01-27T23:00:00.000Z","last_edited_time":"2022-01-27T23:02:00.000Z"}}>
There’s nothing much to know about titles, except perhaps that Notion’s default term for this concept is <em>Name</em>, as shown in this screenshot.
</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"720820bd-da7c-4685-a1f6-04d472032992","created_time":"2022-01-27T23:02:00.000Z","last_edited_time":"2022-01-28T23:38:00.000Z"}}>
Since I’m building <em>notion2svelte </em>in the context of publishing written pieces (as opposed to tracking TODOs or any of the other myriad things that a notion Page might be “naming”), I chose <em>Title</em> as the more contextually appropriate component name.
</Paragraph>
</Column><Column><Image url="/assets/page-level-components/title/45f4b177-1575-412a-9686-36a88bc1602b.png"></Image>
</Column></ColumnList><Callout emoji="💁🏼">You don’t have to include a title on every page. In fact, the title of this site’s <Link type="alias" href='/about-notion2svelte'>home page</Link> has no title.<span slot="children"><Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"d24b7f7f-3656-4c49-9c40-68b885b805b6","created_time":"2022-01-27T22:56:00.000Z","last_edited_time":"2022-01-27T23:00:00.000Z"}}>
Every page does, however, need a <Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'>slug</Link>.
</Paragraph>
</span></Callout><Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Code code={`\{
  "object": "page",
  …
  "properties": \{
    …
    "Name": \{
      "id": "title",
      "type": "title",
      "title": [
        \{
          "type": "text",
          "text": \{
            "content": "Title (aka Name)",
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
          "plain_text": "Title (aka Name)",
          "href": null
        }
      ]
    }
  }
}`} language="javascript"></Code><Header level={1}><strong>Svelte output</strong></Header>
<Code code={`<svelte:head>
  <title>Title (aka Name)</title>
</svelte:head>

<Title>Title (aka Name)</Title>`} language="html">Note that <em>notion2svelte</em> sets both the browser tab title, as well as rendering a Title component</Code><Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"7bae5cd5-b698-46e5-9a9a-f32d71760429","created_time":"2022-01-28T23:12:00.000Z","last_edited_time":"2022-01-28T23:12:00.000Z"}}>

</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"da6e854f-8314-4104-a301-4622f0c24376","created_time":"2022-01-28T23:12:00.000Z","last_edited_time":"2022-01-31T07:55:00.000Z"}}>
<InlineColor value='gray'>For the code used to render </InlineColor><InlineColor value='gray'><em>this</em></InlineColor><InlineColor value='gray'> page’s Title, see </InlineColor><Link type="absolute" href='https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Title.svelte'><InlineColor value='gray'>Title.svelte</InlineColor></Link>
</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"d3d1a805-183c-4d3a-a583-19513c753ee1","created_time":"2022-01-27T23:08:00.000Z","last_edited_time":"2022-01-28T23:12:00.000Z"}}>

</Paragraph>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem><Link type="absolute" href='https://github.com/nvlgzr/notion2svelte'>https://github.com/nvlgzr/notion2svelte</Link></BulletedListItem>
<Header level={3}>Ready to try it?</Header>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"58ff394d-4eda-4d56-aaea-89d926fcd3da","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
Open your Terminal.app* and follow along to 👉🏿 “<Link type="absolute" href='https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'>notion2svelte in 10** minutes</Link>”!
</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"b77e2c4c-0270-4680-aee3-73500e7e5e95","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:14:00.000Z"}}>
<InlineColor value='gray'>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it works for you if you’re not running macOS! That said, I suspect my reliance on </InlineColor><Link type="absolute" href='https://fishshell.com/'><InlineColor value='gray'>fish shell</InlineColor></Link><InlineColor value='gray'> is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app, after all, so it should be pretty portable!</InlineColor>
</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"fc7a7eef-1c40-431e-9842-85d97d1e1d49","created_time":"2022-01-27T05:11:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
<InlineColor value='gray'>**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30 minutes to allow for your own play time. 🧫</InlineColor>🧪
</Paragraph>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"86f56fbe-bc18-4df1-90bd-277d0d5a05c5","created_time":"2022-01-27T05:10:00.000Z","last_edited_time":"2022-01-27T05:10:00.000Z"}}>

</Paragraph>

</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘ <Link type="alias" href='/about-notion2svelte'>🏠</Link> </Header>
<ColumnList cols={2}><Column><Header level={3}>High-level Discussion</Header>
<BulletedListItem><Link type="mention" href='/high-level-discussion/flow-diagram'>Where notion2svelte Fits</Link> </BulletedListItem>
<BulletedListItem><Link type="mention" href='/components'>Components</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing Good Slugs</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/block-props'>blockProps</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/nested-blocks'>Nested Blocks</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/synced-blocks'>Synced Blocks</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/dot-env'>Configuring your .env</Link> </BulletedListItem>
<Header level={3}>Turn-intoable Block Components</Header>
<BulletedListItem><Link type="mention" href='/standard-components/paragraph'>Paragraph (aka “Text”)</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/header'>Header (3 types in 1!)</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/child-page'>ChildPage</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/todo-item'>TodoItem</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/bulleted-list-item'>BulletedListItem</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/numbered-list-item'>NumberedListItem</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/toggle'>Toggle</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/code'>Code</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/quote'>Quote</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/callout'>Callout</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/equation'>Equation</Link></BulletedListItem>
<BulletedListItem>Toggle Headings<InlineColor value='gray'> (not yet implemented)</InlineColor></BulletedListItem>
</Column><Column><Header level={3}>Layout-only Components</Header>
<BulletedListItem><Link type="mention" href='/layout-only-components/indent-group'>IndentGroup</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/layout-only-components/columns'>Column & ColumnList</Link> </BulletedListItem>
<Header level={3}>Page-level Components</Header>
<BulletedListItem><Link type="mention" href='/page-level-components/title'>Title (aka Name)</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/page-level-components/cover'>Cover (Image & Icon)</Link></BulletedListItem>
<Header level={3}>Annotation Components</Header>
<BulletedListItem><strong>bold</strong> → <InlineCode code={"&lt;strong&gt;"} /> </BulletedListItem>
<BulletedListItem><em>italic</em> → <InlineCode code={"&lt;em&gt;"} /></BulletedListItem>
<BulletedListItem><s>strikethrough</s> → NYI</BulletedListItem>
<BulletedListItem><span style='text-decoration:underline;'>underline</span> → NYI</BulletedListItem>
<BulletedListItem><Link type="mention" href='/annotations/inline-code'>InlineCode</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/annotations/inline-color'>InlineColor</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/annotations/link'>Link</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/standard-components/equation'>Equation</Link></BulletedListItem>
<Header level={3}>Other Components</Header>
<BulletedListItem><Link type="mention" href='/other-components/divider'>Divider</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/other-components/embed'>Embed</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/other-components/image'>Image</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/other-components/error'>Error</Link></BulletedListItem>
<Paragraph blockProps={{"pageId":"2011c59ae02b40b682f7ee828c3d51fe","id":"438eb05a-caea-4ef3-b64f-ab9e15140545","created_time":"2022-01-27T23:50:00.000Z","last_edited_time":"2022-01-27T23:50:00.000Z"}}>

</Paragraph>
</Column></ColumnList>
  