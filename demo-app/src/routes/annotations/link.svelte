<svelte:head>
  <title>Link</title>
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
      

  
  <Title>Link</Title>




  <Header level={1}>1. Notion original</Header>
<Image url="/assets/annotations/link/50b8f6b3-f2aa-47f5-bf05-b5b59183d3ce.png">Note how Notion gives the external link a slightly slimmer font weight</Image>
<Header level={1}>2. Notion API</Header>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"0538fec5-3bc6-4c24-815d-78b5ce846819","created_time":"2022-01-28T20:26:00.000Z","last_edited_time":"2022-01-28T20:28:00.000Z"}}>
<InlineColor value='gray'>Partial output of </InlineColor><InlineColor value='gray'><em>src/routes/[slug].json</em></InlineColor>
</Paragraph>
<Code code={`\{
      …
            "plain_text": "Internal page mention",
      …
    \{
      …
      "bulleted_list_item": \{
        "text": [
          \{
            "type": "mention",
            "mention": \{
              "type": "page",
              "page": \{
                "id": "57ec9a2d-b854-4bf6-94a4-5f0e2a0b68d1"
              }
            },
            "annotations": \{…},
            "plain_text": "Writing Good Slugs",
            "href": "https://www.notion.so/57ec9a2db8544bf694a45f0e2a0b68d1"
          }
        ]
      }
    },
    \{
      …
            "plain_text": "Internal alias",
      …
    },
    \{
      …
      "bulleted_list_item": \{
        "text": [
          \{
            "type": "text",
            "text": \{
              "content": "Writing Good Snails",
              "link": \{
                "url": "/57ec9a2db8544bf694a45f0e2a0b68d1"
              }
            },
            "annotations": \{…},
            "plain_text": "Writing Good Snails",
            "href": "/57ec9a2db8544bf694a45f0e2a0b68d1"
          }
        ]
      }
    },
    \{
      …
            "plain_text": "External link",
      …
    },
    \{
      …
      "bulleted_list_item": \{
        "text": [
          \{
            "type": "text",
            "text": \{
              "content": "Writing Good Puppy Dog Tales",
              "link": \{
                "url": "https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F"
              }
            },
            "annotations": \{…},
            "plain_text": "Writing Good Puppy Dog Tales",
            "href": "https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F"
          }
        ]
      }
    }`} language="json">There’s so much going on here, it can be a bit overwhelming!</Code><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"64d8f7b1-a938-4124-8da8-fdf1536c49a5","created_time":"2022-01-30T10:07:00.000Z","last_edited_time":"2022-01-30T22:43:00.000Z"}}>
Without even getting into bookmarks and user mentions, et al, things are already kinda complex:
</Paragraph>
<BulletedListItem>We have 2 types of object but 3 different styles of link!</BulletedListItem>
<IndentGroup>
  <BulletedListItem><InlineCode code={"type:mention"} /></BulletedListItem>
<IndentGroup>
  <BulletedListItem>1 link style</BulletedListItem>
<IndentGroup>
  <BulletedListItem><em>page mention</em></BulletedListItem>

</IndentGroup>

</IndentGroup>
<BulletedListItem><InlineCode code={"text"} />+<InlineCode code={"url"} /></BulletedListItem>
<IndentGroup>
  <BulletedListItem>2 link styles</BulletedListItem>
<IndentGroup>
  <BulletedListItem><em>relative to root</em> (starts with <InlineCode code={"/"} />)</BulletedListItem>
<BulletedListItem><em>absolute</em> (starts with protocol: http, mailto, et al)</BulletedListItem>

</IndentGroup>

</IndentGroup>
<Toggle>How <em>notion2svelte</em> handles this
<span slot="children"><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"fb5d474c-0abe-43a2-b703-fe71fdd13992","created_time":"2022-01-30T23:23:00.000Z","last_edited_time":"2022-01-30T23:23:00.000Z"}}>
I may be misinterpreting the distinction between the two text+url link types, but this doesn’t really matter. What matters is that Notion has demonstrated in their own UI that these two link styles can be treated differently — even if the only difference is a slight shift in font-weight — and so there’s no reason we can’t consider a similar option.
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"aa9ef751-6fb0-4964-9ff4-97ec5331f0dc","created_time":"2022-01-30T23:19:00.000Z","last_edited_time":"2022-01-30T23:23:00.000Z"}}>
Of course, if you want to go the other way, nothing’s stopping you from ignoring the <InlineCode code={"type"} /> prop in your Link component:
</Paragraph>
<Code code={`<script>
  export let url;
</script>

<a href=\{url}><slot/></a>`} language="html">The minimum Link.svelte</Code></span></Toggle>
</IndentGroup>
<BulletedListItem>There’s duplicate data:</BulletedListItem>
<IndentGroup>
  <BulletedListItem>As far as I can tell, <InlineCode code={"text[n].text.link.url"} /> is <em>always</em> identical to the adjacent <InlineCode code={"text[n].href"} /></BulletedListItem>
<BulletedListItem><InlineCode code={"text[n].mention.page.id"} /> is just <InlineCode code={"text[n].href"} /> without the host — <em>https://www.notion.so/</em> — sliced off</BulletedListItem>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"2271926f-ea39-46d2-bd8e-f721e99bbb2c","created_time":"2022-01-30T23:25:00.000Z","last_edited_time":"2022-01-30T23:34:00.000Z"}}>
<em>notion2svelte</em> reduces these duplications to a single <InlineCode code={"href"} /> prop.
</Paragraph>

</IndentGroup>
<Header level={1}>3. Svelte output</Header>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"28871a46-c697-4500-b517-1c526797ab38","created_time":"2022-01-28T20:32:00.000Z","last_edited_time":"2022-01-28T20:32:00.000Z"}}>
<InlineColor value='gray'>Partial output of </InlineColor><InlineColor value='gray'><em>src/routes/[slug].svelte</em></InlineColor>
</Paragraph>
<Code code={`…
  Internal page mention
…
<BulletedListItem>
  <Link type="mention" href="/rules-for-writing-good-slugs">
    Writing Good Slugs
  </Link>
</BulletedListItem>
…
  Internal alias
…
<BulletedListItem>
  <Link type="internal" href="/rules-for-writing-good-slugs">
    Writing Good Snails
  </Link>
</BulletedListItem>
…
  External link
…
<BulletedListItem>
  <Link type="external" href="https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F">
    Writing Good Puppy Dog Tales
    </Link>
</BulletedListItem>`} language="html"> </Code><Header level={1}>4. Example rendering</Header>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"37637bb7-2a74-4905-8474-3d3ed2994a92","created_time":"2022-01-29T04:11:00.000Z","last_edited_time":"2022-01-31T03:40:00.000Z"}}>
<InlineColor value='gray'>Rendered by </InlineColor><Link type="absolute" href='https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Link.svelte'><InlineColor value='gray'>Link.svelte</InlineColor></Link>
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"469b3cb0-70a9-4129-84f5-00f620532ad6","created_time":"2022-01-28T00:01:00.000Z","last_edited_time":"2022-01-30T06:57:00.000Z"}}>
The Link component lets you differentiate between ⑴ internal page mentions, ⑵ links to internal pages — I like to think of these as aliased mentions — and ⑶ links to external pages:
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"32835464-e2aa-4cde-8f03-494320c60659","created_time":"2022-01-29T22:13:00.000Z","last_edited_time":"2022-01-29T22:15:00.000Z"}}>
<strong>Internal page mention</strong>
</Paragraph>
<BulletedListItem><Link type="mention" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing Good Slugs</Link></BulletedListItem>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"691abeb0-ad0e-4eb6-b0d2-7859fa479552","created_time":"2022-01-29T22:14:00.000Z","last_edited_time":"2022-01-29T23:44:00.000Z"}}>
<strong>Internal alias</strong>
</Paragraph>
<BulletedListItem><Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing Good Snails</Link></BulletedListItem>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"48f36011-893c-4d85-8be6-b7fec8be13e4","created_time":"2022-01-29T22:14:00.000Z","last_edited_time":"2022-01-29T22:16:00.000Z"}}>
<strong>External link</strong>
</Paragraph>
<BulletedListItem><Link type="absolute" href='https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F'>Writing Good Puppy Dog Tales</Link></BulletedListItem>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"72c30aa3-a7d4-4491-b33d-522996ece908","created_time":"2022-01-30T06:38:00.000Z","last_edited_time":"2022-01-30T06:45:00.000Z"}}>

</Paragraph>
<Toggle><strong>A word about links with “annotations”</strong>
<span slot="children"><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"d98a87c9-bdfb-4e44-b102-644b0f3229a0","created_time":"2022-01-30T00:22:00.000Z","last_edited_time":"2022-01-30T00:28:00.000Z"}}>
Notion’s handling of links is buggy. Specifically, as soon as you start applying styles to <em>parts</em> of the link, you suddenly end up with <em>more than one link</em>! Don’t believe me? Follow along by opening this page’s <Link type="alias" href='/annotations/link'>original in Notion</Link>, and inspect the raw source these example links ↓
</Paragraph>
<NumberedListItem number=1> Let’s begin with our <em>internal alias</em> example: <Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing Good Snails</Link>. Stripping Notion’s HTML to its structural bones, we see that this link is rendered as:</NumberedListItem>
<IndentGroup>
  <Code code={`<a><span>Writing Good Snails</span></a>`} language="html"></Code><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"056e44d0-c749-41d9-a978-7c73f2bbb64a","created_time":"2022-01-30T00:31:00.000Z","last_edited_time":"2022-01-30T00:31:00.000Z"}}>
All well and good.
</Paragraph>

</IndentGroup>
<NumberedListItem number=2> Now let’s add some internal emphasis: <Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing </Link><Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'><em>Great!</em></Link><Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'> Snails</Link>. In Notion, this still appears, at first glance, to be a single link because the underlines touch.font</NumberedListItem>
<IndentGroup>
  <Image url="/assets/annotations/link/d45218c3-2429-4256-8d4d-9ca06e51cefb.png"></Image>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"efcaf3e8-7a67-4a1f-8985-d644dba0ef63","created_time":"2022-01-30T00:33:00.000Z","last_edited_time":"2022-01-30T02:45:00.000Z"}}>
Now take a look at the source again. If you were implementing this by hand, you’d write (again, just the structure)…
</Paragraph>
<Code code={`<a>
	<span>Writing </span>
	<span>Great! </span>
	<span>Snails</span>
</a>`} language="html">Makes sense, right? 🤷🏻</Code><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"aacb614f-5064-432f-a70a-709e5b46d12d","created_time":"2022-01-30T02:51:00.000Z","last_edited_time":"2022-01-30T02:51:00.000Z"}}>
…but here’s what Notion gets you:
</Paragraph>
<Code code={`<a><span>Writing </span></a>
<a><span>Great! </span></a>
<a><span>Snails</span></a>`} language="html"><em><strong>The cake is a lie! </strong></em>🙀 </Code>
</IndentGroup>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"9ca116e5-6eb8-4432-9709-9e4ba749bfaf","created_time":"2022-01-30T02:44:00.000Z","last_edited_time":"2022-01-30T06:32:00.000Z"}}>
The same thing happens with external links. 😤
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"f10f8e4b-f778-40dd-89b1-05761c9a7c4e","created_time":"2022-01-30T06:32:00.000Z","last_edited_time":"2022-01-30T06:32:00.000Z"}}>
If this bothers you, let Notion know. I don’t think my solo complaint is likely to move the needle on something that probably affects their entire stack. 😬
</Paragraph>
<Header level={3}>How this affects <em>notion2svelte</em></Header>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"52e26993-066d-4db7-a359-b5ccadf6db6d","created_time":"2022-01-30T06:33:00.000Z","last_edited_time":"2022-01-30T06:39:00.000Z"}}>
I can see a future where I get sick of this situation and complicate <em>notion2svelte</em> by having it stitch together adjacent links if they share a target URL. In these early days, however, it’s just too much scope for this little tool, so this is the kind of thing you’re looking at if you venture outside of Notion’s implicit rejection of links with margins.
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"e9382baf-5f52-4e2b-805d-e3d961ec3fe0","created_time":"2022-01-30T06:39:00.000Z","last_edited_time":"2022-01-30T06:40:00.000Z"}}>

</Paragraph>
<BulletedListItem>Internal alias with styled text: <Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing </Link><Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'><InlineColor value='red'>Great!</InlineColor></Link><Link type="alias" href='/high-level-discussion/rules-for-writing-good-slugs'> Snails</Link></BulletedListItem>
<BulletedListItem>External link with styled text: <Link type="absolute" href='https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F'>Writing </Link><Link type="absolute" href='https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F'><InlineColor value='red'>Great!</InlineColor></Link><Link type="absolute" href='https://en.wikipedia.org/wiki/What_Are_Little_Boys_Made_Of%3F'> Puppy Dog Tales</Link></BulletedListItem>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"853e84b3-8591-4b41-92e1-6287ac843801","created_time":"2022-01-29T22:34:00.000Z","last_edited_time":"2022-01-30T06:44:00.000Z"}}>
Thanks to multiplying links, my choice to emulate <Link type="absolute" href='https://practicaltypography.com/free-fonts.html'>Matthew Butterick’s</Link> links — removing all special formatting from links except for a cheeky little º in the <InlineCode code={"a::after"} /> styles — comes off suddenly looking more amateur than class. Ah, well. 😞
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"637feeb4-3745-404d-932b-95ff5069c771","created_time":"2022-01-30T06:44:00.000Z","last_edited_time":"2022-01-30T06:44:00.000Z"}}>

</Paragraph>
</span></Toggle><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"959bc12b-1758-4808-9e6c-b79e1e07f919","created_time":"2022-01-28T00:20:00.000Z","last_edited_time":"2022-01-28T00:20:00.000Z"}}>

</Paragraph>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem><Link type="absolute" href='https://github.com/nvlgzr/notion2svelte'>https://github.com/nvlgzr/notion2svelte</Link></BulletedListItem>
<Header level={3}>Ready to try it?</Header>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"58ff394d-4eda-4d56-aaea-89d926fcd3da","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
Open your Terminal.app* and follow along to 👉🏿 “<Link type="absolute" href='https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'>notion2svelte in 10** minutes</Link>”!
</Paragraph>
<IndentGroup>
  <Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"b77e2c4c-0270-4680-aee3-73500e7e5e95","created_time":"2022-01-26T09:47:00.000Z","last_edited_time":"2022-01-27T05:14:00.000Z"}}>
<InlineColor value='gray'>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it works for you if you’re not running macOS! That said, I suspect my reliance on </InlineColor><Link type="absolute" href='https://fishshell.com/'><InlineColor value='gray'>fish shell</InlineColor></Link><InlineColor value='gray'> is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app, after all, so it should be pretty portable!</InlineColor>
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"fc7a7eef-1c40-431e-9842-85d97d1e1d49","created_time":"2022-01-27T05:11:00.000Z","last_edited_time":"2022-01-27T05:11:00.000Z"}}>
<InlineColor value='gray'>**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30 minutes to allow for your own play time. 🧫</InlineColor>🧪
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"86f56fbe-bc18-4df1-90bd-277d0d5a05c5","created_time":"2022-01-27T05:10:00.000Z","last_edited_time":"2022-01-27T05:10:00.000Z"}}>

</Paragraph>

</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘ <Link type="alias" href='/about-notion2svelte'>🏠</Link> </Header>
<ColumnList cols={2}><Column><Header level={3}>High-level Discussion</Header>
<BulletedListItem><Link type="mention" href='/components'>Components</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/rules-for-writing-good-slugs'>Writing Good Slugs</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/block-props'>blockProps</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/nested-blocks'>Nested Blocks</Link></BulletedListItem>
<BulletedListItem><Link type="mention" href='/high-level-discussion/synced-blocks'>Synced Blocks</Link></BulletedListItem>
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
</Column></ColumnList><Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"e1e71b2f-956d-4add-9d67-f4c3e6945324","created_time":"2022-01-30T06:29:00.000Z","last_edited_time":"2022-01-30T06:30:00.000Z"}}>
🧘🏾
</Paragraph>
<Paragraph blockProps={{"pageId":"0a81110f311a4b2f858a65ea1a45ab3a","id":"28583833-e30e-40bd-8a63-79c3dcaaf5fe","created_time":"2022-01-30T06:29:00.000Z","last_edited_time":"2022-01-30T06:30:00.000Z"}}>
<Link type="absolute" href='https://www.poetryfoundation.org/poems/47536/one-art'>https://www.poetryfoundation.org/poems/47536/one-art</Link>
</Paragraph>

  