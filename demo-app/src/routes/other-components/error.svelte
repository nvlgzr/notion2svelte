<svelte:head>
  <title>Error</title>
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
      

  
  <Title>Error</Title>




  <Header level={1}>Motivation</Header>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"6c2f4ec0-ec56-43d8-b167-197c024ed45e","created_time":"2022-01-31T20:49:00.000Z","last_edited_time":"2022-01-31T20:52:00.000Z"}}>
While in the middle of developing <em>notion2svelte</em>, I became frustrated whenever some uncaught error would crash <em>notion2svelte</em>. First there would be the confusion of “why isn’t it rendering as I expected?”. Then there was an inevitable scramble to look in various consoles for an error.
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"8446f18f-d5a5-4310-8140-4475a04989ec","created_time":"2022-01-31T20:52:00.000Z","last_edited_time":"2022-01-31T20:53:00.000Z"}}>
So I added a top-level catch-all for unexpected rendering errors that allows you to present them in-context and with as much (or as little!) visual presence as desired.
</Paragraph>
<Header level={1}>Demo</Header>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"ea40e332-ab16-4628-af73-cb7dae8a6f8f","created_time":"2022-01-31T20:57:00.000Z","last_edited_time":"2022-01-31T21:00:00.000Z"}}>
In the Notion database that hosts my source files for this site, I have a page called <em>README (For Visitors)</em>. I don’t ever intend to publish that file here, and so it has no slug, nor have I marked it Publishable before running <em>notion2svelte.</em> Point being, <em>notion2svelte</em> doesn’t recognize it, and so it throws an error which, as of this writing, I don’t catch and handle in any useful way.
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"3919a7a0-4bc5-4844-a974-b0aade6e8a55","created_time":"2022-01-31T21:00:00.000Z","last_edited_time":"2022-01-31T21:01:00.000Z"}}>
Point being, as soon as I try to @mention that page, it’ll end up throwing when I run <em>notion2svelte</em>, and <em>notion2svelte</em> will take that error and render it as an <InlineCode code={"Error"} /> component in the app.
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"a32c97dd-3644-4f9e-94a9-386ac4591024","created_time":"2022-01-31T21:01:00.000Z","last_edited_time":"2022-01-31T21:02:00.000Z"}}>
<em>Ready?</em>
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"7f37dad1-a0c6-4950-8b61-7e141fee0698","created_time":"2022-01-31T21:01:00.000Z","last_edited_time":"2022-01-31T21:02:00.000Z"}}>
Here we go.
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"46e3a8bc-fa08-46a6-882c-d94023fe4e10","created_time":"2022-01-28T00:11:00.000Z","last_edited_time":"2022-01-31T21:02:00.000Z"}}>
<p style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ l(t, type, url): <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">README (For Visitors).</span>&nbsp;No slug found for mention w/text: README (For Visitors)'. Have you imported the target page with notion2svelte yet?</p>
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"fb46097d-1bb6-4a02-a4a2-4416bf51964c","created_time":"2022-01-31T21:02:00.000Z","last_edited_time":"2022-01-31T21:02:00.000Z"}}>
↑ Rendered by <Link type="absolute" href='https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Error.svelte'>Error.svelte</Link>
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"d4ccfaa1-7533-4dc6-b6ca-9af6c2be5439","created_time":"2022-01-28T00:21:00.000Z","last_edited_time":"2022-01-28T00:21:00.000Z"}}>

</Paragraph>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem><Link type="absolute" href='https://github.com/nvlgzr/notion2svelte'>https://github.com/nvlgzr/notion2svelte</Link></BulletedListItem>
<Header level={3}>Ready to try it?</Header>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"58ff394d-4eda-4d56-aaea-89d926fcd3da","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
Open your Terminal.app* and follow along to 👉🏿 “<Link type="absolute" href='https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'>notion2svelte in 10** minutes</Link>”!
</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"b77e2c4c-0270-4680-aee3-73500e7e5e95","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:14:00.000Z"}}>
<InlineColor value='gray'>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it works for you if you’re not running macOS! That said, I suspect my reliance on </InlineColor><Link type="absolute" href='https://fishshell.com/'><InlineColor value='gray'>fish shell</InlineColor></Link><InlineColor value='gray'> is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app, after all, so it should be pretty portable!</InlineColor>
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"fc7a7eef-1c40-431e-9842-85d97d1e1d49","created_time":"2022-01-27T05:11:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
<InlineColor value='gray'>**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30 minutes to allow for your own play time. 🧫</InlineColor>🧪
</Paragraph>
<Paragraph blockProps={{"pageId":"f8b93766ebbc4211a1e74d4475d3d8a4","id":"86f56fbe-bc18-4df1-90bd-277d0d5a05c5","created_time":"2022-01-27T05:10:00.000Z","last_edited_time":"2022-01-27T05:10:00.000Z"}}>

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
</Column></ColumnList>
  