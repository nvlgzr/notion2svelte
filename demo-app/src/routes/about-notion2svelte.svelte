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
  <title />
</svelte:head>

<Cover
  coverURL={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
  iconEmojiOrURL={'/assets/about-notion2svelte/icon.png'}
/>
<Title />

<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '1ceeb64a-bae5-458f-855b-912a863940bb',
    created_time: '2022-01-04T05:46:00.000Z',
    last_edited_time: '2022-01-04T06:03:00.000Z'
  }}
/>
<Quote
  ><span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '2078b770-e823-4735-8902-46ee0c72a688',
        created_time: '2022-01-10T12:14:00.000Z',
        last_edited_time: '2022-01-10T12:14:00.000Z'
      }}
    >
      <strong>Write</strong>&nbsp;in Notion
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '09081134-be83-46c6-aa34-ed83fc9f6886',
        created_time: '2022-01-10T04:36:00.000Z',
        last_edited_time: '2022-01-10T12:14:00.000Z'
      }}
    >
      <strong>Publish</strong>&nbsp;in Svelte
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '05f134f0-aa60-4ab9-9d40-859f1efbfccd',
        created_time: '2022-01-10T04:36:00.000Z',
        last_edited_time: '2022-01-10T12:14:00.000Z'
      }}
    >
      <strong>Control</strong>&nbsp;with&nbsp;<em>notion2svelte</em>
    </Paragraph>
  </span></Quote
><Header level={1}>Introducing&nbsp;<InlineCode code={'notion2svelte'} /></Header>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '0828193e-9eaa-4b99-a0f9-599a801c99e5',
    created_time: '2022-01-04T05:41:00.000Z',
    last_edited_time: '2022-01-09T05:16:00.000Z'
  }}
>
  Just like it sounds,&nbsp;<em>notion2svelte</em>&nbsp;transforms Notion-based content into .svelte
  pages:
</Paragraph>
<Equation block={true} katexString="Notion → notion2svelte → Svelte" /><ColumnList cols={2}
  ><Column
    ><Header level={2}>Source (Notion)</Header>
    <Image url="/assets/about-notion2svelte/ed21d11c-9389-4694-9db4-549e002a1b92.png" />
    <BulletedListItem>😃 Awesome editing experience</BulletedListItem>
    <BulletedListItem>🤨 Domain-locked to&nbsp;<em>notion.so</em></BulletedListItem>
    <BulletedListItem>😐 Proprietary limitations</BulletedListItem>
  </Column><Column
    ><Header level={2}>Destination (Svelte)</Header>
    <Image url="/assets/about-notion2svelte/ce917906-431b-4d6a-9134-506027e66805.png" />
    <BulletedListItem>👘 Your styles</BulletedListItem>
    <BulletedListItem>🤔 Your domain</BulletedListItem>
    <BulletedListItem>🪡 Infinite possibilities</BulletedListItem>
  </Column></ColumnList
><Divider />
<Header level={1}>Why&nbsp;<em>notion2svelte</em>?</Header>
<ColumnList cols={3}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '1a3dbe14-a40b-4e9c-b68f-40ba89d8f61f',
        created_time: '2022-01-04T23:37:00.000Z',
        last_edited_time: '2022-01-11T00:49:00.000Z'
      }}
    >
      I like&nbsp;<strong>writing in Notion</strong>
    </Paragraph>
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '8475311a-9f1f-408d-b669-20417b76b69c',
        created_time: '2022-01-09T05:22:00.000Z',
        last_edited_time: '2022-01-09T05:22:00.000Z'
      }}
    >
      I like&nbsp;<strong>coding in Svelte</strong>
    </Paragraph>
  </Column><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '1e6295ec-cf6a-4f9b-abe0-ad5cf64b8356',
        created_time: '2022-01-09T05:22:00.000Z',
        last_edited_time: '2022-01-11T00:49:00.000Z'
      }}
    >
      I like the&nbsp;<strong>safety of git</strong>
    </Paragraph>
  </Column></ColumnList
><Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'bc826337-f4e9-410c-98ad-c2f079734c82',
    created_time: '2022-01-09T05:22:00.000Z',
    last_edited_time: '2022-01-09T05:23:00.000Z'
  }}
>
  That, in a nutshell, is what got me started on&nbsp;<em>notion2svelte.&nbsp;</em>It’s not the best
  project out there, but it’s the only one that does what I want. Namely:
</Paragraph>
<BulletedListItem>Store intermediary artifacts to-disk</BulletedListItem>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'fdc65179a8bd451caf6759019204cfde',
      id: '3baba495-ee38-4c6f-902b-9ac9bd7e9465',
      created_time: '2022-01-04T23:37:00.000Z',
      last_edited_time: '2022-01-04T23:37:00.000Z'
    }}
  >
    <em>Benefits</em>
  </Paragraph>
  <BulletedListItem>My content is safely stored in git</BulletedListItem>
  <BulletedListItem
    >I can access the full, raw JSON for every page from within my app, allowing me to add
    interactivity that Notion doesn’t allow</BulletedListItem
  >
</IndentGroup>
<BulletedListItem
  >Command-line tool, rather than runtime&nbsp;<em>npm</em>&nbsp;package</BulletedListItem
>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'fdc65179a8bd451caf6759019204cfde',
      id: 'eca98c65-0eea-4d31-a416-2e678804ef88',
      created_time: '2022-01-04T23:37:00.000Z',
      last_edited_time: '2022-01-04T23:37:00.000Z'
    }}
  >
    <em>Benefits</em>
  </Paragraph>
  <BulletedListItem
    >100% decoupled tooling: want to “eject” from&nbsp;<em>notion2svelte</em>? No problem. Just stop
    using it. From the perspective of your Svelte app, the pages created by&nbsp;<em
      >notion2svelte</em
    >&nbsp;are no different than pages you code yourself</BulletedListItem
  >
</IndentGroup>
<BulletedListItem>Write-your-own components</BulletedListItem>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'fdc65179a8bd451caf6759019204cfde',
      id: '889ec8ee-25c6-419c-832d-e437d32f905f',
      created_time: '2022-01-04T23:37:00.000Z',
      last_edited_time: '2022-01-04T23:37:00.000Z'
    }}
  >
    <em>Benefits</em>
  </Paragraph>
  <BulletedListItem>Provides wide creative freedom</BulletedListItem>
  <BulletedListItem>Keeps&nbsp;<em>notion2svelte</em>&nbsp;simple</BulletedListItem>
</IndentGroup>
<Header level={1}>Why NOT&nbsp;<em>notion2svelte</em>?</Header>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'e1efebff-c2de-4355-a194-0f0f18d0c3a7',
    created_time: '2022-01-09T05:34:00.000Z',
    last_edited_time: '2022-01-23T21:07:00.000Z'
  }}
>
  Why&nbsp;<em>not</em>&nbsp;use it? Mainly because it’s early days and, while&nbsp;<em
    >notion2svelte</em
  >&nbsp;isn’t&nbsp;<em>capable</em>&nbsp;of breaking your app, you may not have the patience for
  its idiosyncrasies.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'e8632bf0-7ed4-407b-a1c1-402b916dc158',
    created_time: '2022-01-27T06:27:00.000Z',
    last_edited_time: '2022-01-27T06:30:00.000Z'
  }}
>
  It’s a bit of an adventure. Kinda like driving stick for the first time, in that it’s fun, once
  you get the hang of it.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'dea56b44-ef7e-4c81-8e77-ab8eb3fbbf0f',
    created_time: '2022-01-11T00:55:00.000Z',
    last_edited_time: '2022-01-27T06:45:00.000Z'
  }}
>
  I hope you’ll give it&nbsp;<MagicLink href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
    >a quick try</MagicLink
  >&nbsp;and, if you’re feeling the vibe, let me know what you think in&nbsp;<MagicLink
    href="https://github.com/nvlgzr/notion2svelte/discussions/1">the Discussions</MagicLink
  >.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '4bd234b3-ccaf-4fc2-9b7e-71dcbe39cf88',
    created_time: '2022-01-27T06:30:00.000Z',
    last_edited_time: '2022-01-27T06:30:00.000Z'
  }}
/>
<Divider />
<Header level={1}>How it works, grossly oversimplified</Header>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '74c878b3-7a75-4063-8bfa-7c5fcc939256',
    created_time: '2022-01-04T23:43:00.000Z',
    last_edited_time: '2022-01-11T05:18:00.000Z'
  }}
>
  Everything you see on this page was…
</Paragraph>
<NumberedListItem number="1">…written in Notion</NumberedListItem>
<NumberedListItem number="2">
  …exported as .svelte files, targeted to&nbsp;<InlineCode
    code={'src/routes/&lt;Slug&gt;.svelte'}
  />, using&nbsp;<em>notion2svelte</em></NumberedListItem
>
<NumberedListItem number="3">…Published normally using Svelte Kit</NumberedListItem>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '229fe91d-a7ee-42b2-9d81-1c9ad4804d5b',
    created_time: '2022-01-09T05:40:00.000Z',
    last_edited_time: '2022-01-09T05:40:00.000Z'
  }}
/>
<Image url="/assets/about-notion2svelte/dfbc55c9-68a1-4ea3-ac5a-904e086dfe26.png"
  >An early run, back when the base project was the Svelte Kit Demo App</Image
>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '373fc2b7-6d70-4c1b-98bd-3f9e21005607',
    created_time: '2022-01-09T05:40:00.000Z',
    last_edited_time: '2022-01-09T05:40:00.000Z'
  }}
/>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '6f8cf24b-d59b-470c-930f-9e9f24e201ca',
    created_time: '2022-01-04T23:43:00.000Z',
    last_edited_time: '2022-01-11T07:07:00.000Z'
  }}
>
  The output .svelte files make use of user-defined components to do the actual rendering. Let’s use
  a Notion “callout” as a simple example.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'fb0f84ae-a551-4ace-a699-0aef7dfa7024',
    created_time: '2022-01-11T07:07:00.000Z',
    last_edited_time: '2022-01-11T07:07:00.000Z'
  }}
/>
<Image url="/assets/about-notion2svelte/f69bb522-315c-4fd4-988f-643088e9a8df.png"
  >Screenshot of original Notion callout</Image
>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'ed6d421e-f74b-4dfe-8e1d-8af801e9e6ed',
    created_time: '2022-01-11T07:12:00.000Z',
    last_edited_time: '2022-01-11T07:12:00.000Z'
  }}
>
  How do we get from this ↑ to something like this ↓?
</Paragraph>
<Callout emoji="🦦">Hi. I’m a sea otter.</Callout><Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '03b9b730-6d2d-4fcc-9a7d-0862f036da69',
    created_time: '2022-01-11T05:22:00.000Z',
    last_edited_time: '2022-01-22T20:23:00.000Z'
  }}
>
  <InlineColor value="gray">The same callout, after transformation by&nbsp;</InlineColor
  ><InlineColor value="gray"><em>notion2svelte</em></InlineColor>
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'e0d09d3c-49f8-4d89-9d76-95541ffaee5f',
    created_time: '2022-01-11T07:12:00.000Z',
    last_edited_time: '2022-01-11T07:12:00.000Z'
  }}
/>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'ce11109f-74bf-41ab-89bc-ef70af26e805',
    created_time: '2022-01-11T07:12:00.000Z',
    last_edited_time: '2022-01-22T20:28:00.000Z'
  }}
>
  The first step&nbsp;<em>notion2svelte</em>&nbsp;takes is to query the Notion API.
</Paragraph>
<Toggle
  >How notion2svelte uses the Notion API
  <span slot="children"
    ><NumberedListItem number="a">
      We use the values in your .env to fetch all “Publishable” pages from a specified Notion
      database. To be&nbsp;<em>publishable</em>, a page must have a property named&nbsp;<em
        >Status</em
      >&nbsp;with a value of&nbsp;<em>Publishable</em>.</NumberedListItem
    >
    <NumberedListItem number="b">
      Recursively fetching all the blocks on a page, we stitch together a single JSON representation
      of the page, stored to disk in case you need it.</NumberedListItem
    >
    <NumberedListItem number="c">
      The resulting JSON the gets parsed into a .svelte page built entirely from components defined
      outside the page. This keeps the boundary clear between content and presentation.</NumberedListItem
    >
  </span></Toggle
><Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '90055a54-d77c-4cda-81f2-f44f83461964',
    created_time: '2022-01-22T20:25:00.000Z',
    last_edited_time: '2022-01-22T20:34:00.000Z'
  }}
>
  &nbsp;This big JSON object shows our example callout as rendered by the Notion API.
</Paragraph>
<ColumnList cols={2}
  ><Column
    ><Code
      code={`\{
  "object": "block",
  "id": "011d46be-4bf6-4817-a0da-a849ec16f1aa",
  "created_time": "2021-12-20T10:00:00.000Z",
  "last_edited_time": "2021-12-20T10:04:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "callout",
  "callout": \{
    "text": [
      \{
        "type": "text",
        "text": \{
          "content": "Hi. I’m a sea otter.",
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
        "plain_text": "Hi. I’m a sea otter.",
        "href": null
      }
    ],
    "icon": \{
      "type": "emoji",
      "emoji": "🦦"
    }
  }
}`}
      language="json"
      caption=""
    /></Column
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'e619f13a-8903-4b2b-abda-d6cc6cbf8cf1',
        created_time: '2022-01-11T07:14:00.000Z',
        last_edited_time: '2022-01-11T07:14:00.000Z'
      }}
    >
      It’s pretty noisy, with all those time stamps, repetitions, and&nbsp;heavy nesting! For
      rendering purposes, most of it can be ignored.
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '400ec1a4-6393-49e3-a94d-884bc5e070a9',
        created_time: '2022-01-09T05:46:00.000Z',
        last_edited_time: '2022-01-24T01:05:00.000Z'
      }}
    >
      Here’s what&nbsp;<em>notion2svelte</em>&nbsp;spits out from all that JSON:
    </Paragraph>
    <Code
      code={`<Callout emoji="🦦" block-props=\{\{…}}>
  Hi. I’m a sea otter.
</Callout>`}
      language="html"
      caption="The&nbsp;<em>block-props</em>&nbsp;attribute gives your component implementations access to Notion’s most relevant block metadata."
    /><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'b985d513-ddb9-4ae9-9d28-35c069106fdc',
        created_time: '2022-01-11T07:15:00.000Z',
        last_edited_time: '2022-01-24T01:05:00.000Z'
      }}
    >
      Better, right?
    </Paragraph>
  </Column></ColumnList
><Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '865b4686-c6d9-4ba2-ba4a-c1fcb1cc472b',
    created_time: '2022-01-09T05:51:00.000Z',
    last_edited_time: '2022-01-11T07:17:00.000Z'
  }}
>
  <InlineColor value="gray"
    >Note that, to keep things simple, our example leaves out complicating factors like Notion
    “annotations” (i.e., character formatting), and sub-blocks.</InlineColor
  >
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '457f4383-0c7d-46fa-bee4-48f40e9ef9e8',
    created_time: '2022-01-09T05:46:00.000Z',
    last_edited_time: '2022-01-11T07:18:00.000Z'
  }}
>
  All that’s needed to render this particular example are the values for&nbsp;<InlineCode
    code={'callout.icon.emoji'}
  />,&nbsp;<InlineCode code={'callout.text[0].content'} />, and, well, the blocks’ overall
  type:&nbsp;<InlineCode code={'&quot;callout&quot;'} />. The type tells&nbsp;<em>notion2svelte</em
  >&nbsp;which component to use, in this case,&nbsp;<InlineCode code={'&lt;Callout&gt;'} />. It also
  tells&nbsp;<em>notion2svelte</em>&nbsp;how to parse the stuff under&nbsp;<InlineCode
    code={'&quot;callout&quot;'}
  />.
</Paragraph>
<ColumnList cols={2}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '3ee48864-8690-41ba-941b-de534950b5e9',
        created_time: '2022-01-09T05:52:00.000Z',
        last_edited_time: '2022-01-09T05:58:00.000Z'
      }}
    >
      That’s the basic idea. All that remains is to create a Svelte component called Callout. And
      that’s when things get fun.
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '19fdf8a0-f929-473d-af16-3030b4e42e4b',
        created_time: '2022-01-09T05:55:00.000Z',
        last_edited_time: '2022-01-09T05:56:00.000Z'
      }}
    >
      &nbsp;Do you want a simple, gray callout with minimal styling, like this:
    </Paragraph>
  </Column><Column
    ><Image url="/assets/about-notion2svelte/70a6d0d1-1eaa-493e-8af4-cd1b69690c54.png" />
  </Column></ColumnList
><Toggle
  >Here’s the code<em>&nbsp;(simple gray)</em>
  <span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '37fff433-bd2f-4ecb-ae19-74e20811f3d3',
        created_time: '2022-01-11T07:18:00.000Z',
        last_edited_time: '2022-01-11T07:18:00.000Z'
      }}
    >
      <em>Callout.svelte</em>
    </Paragraph>
    <Code
      code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7Cg==">{}</script>

<div class="wrapper">
	<div class="emoji">\{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciBcewoJCWJhY2tncm91bmQtY29sb3I6IHdoaXRlOwoJCWJvcmRlcjogMXB4IHNvbGlkICMzMzM7CgkJbWFyZ2luOiAxcmVtOwoJCXBhZGRpbmc6IDFyZW07CgkJYm9yZGVyLXJhZGl1czogMC41cmVtOwoJfQoKCS5lbW9qaSBcewoJCWZvbnQtc2l6ZTogMnJlbTsKCX0K"></style>`}
      language="html"
      caption=""
    /><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '7b6b2e09-535b-46da-8828-be5d1503a3e7',
        created_time: '2022-01-05T00:01:00.000Z',
        last_edited_time: '2022-01-05T00:01:00.000Z'
      }}
    />
  </span></Toggle
><ColumnList cols={2}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'd2366103-9868-45e5-bf08-727eda90e585',
        created_time: '2022-01-05T09:14:00.000Z',
        last_edited_time: '2022-01-22T20:37:00.000Z'
      }}
    >
      Or would you prefer something more colorful?
    </Paragraph>
  </Column><Column
    ><Image url="/assets/about-notion2svelte/1f440d04-1010-43c2-89f5-05b39b51aef6.png" />
  </Column></ColumnList
><Toggle
  >Here’s the code (blue border)
  <span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'bd429657-3366-46a5-a70c-01844440b5a9',
        created_time: '2022-01-11T07:19:00.000Z',
        last_edited_time: '2022-01-11T07:19:00.000Z'
      }}
    >
      <em>Callout.svelte</em>
    </Paragraph>
    <Code
      code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7Cg==">{}</script>

<div class="wrapper">
	<div class="emoji">\{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciBcewoJCWRpc3BsYXk6IGZsZXg7CgkJbWFyZ2luOiAxcmVtIDFyZW0gMnJlbSAwOwoJCXBhZGRpbmc6IDJyZW0gMnJlbSAwIDJyZW07CgkJZm9udDogMS4yNXJlbS8xLjVyZW0gJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKCQliYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk4LCAxMDAlLCA5NyUpOwoJCWJvcmRlcjogNHB4IHNvbGlkIGhzbCgyMDYsIDg4JSwgNzAlKTsKCQlib3JkZXItcmFkaXVzOiAwLjVyZW07Cgl9CgkuY2FsbG91dCBcewoJCWRpc3BsYXk6IGJsb2NrOwoJfQoJLmVtb2ppIFx7CgkJbWFyZ2luLXJpZ2h0OiAwLjVlbTsKCQloZWlnaHQ6IDNyZW07CgkJd2lkdGg6IDNyZW07CgkJZm9udC1zaXplOiAzcmVtOwoJCWxpbmUtaGVpZ2h0OiAxLjE7Cgl9Cg=="></style>`}
      language="html"
      caption=""
    /><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'c7821ec8-7ee0-4428-82bd-21751cdc7f52',
        created_time: '2022-01-05T09:14:00.000Z',
        last_edited_time: '2022-01-05T09:14:00.000Z'
      }}
    />
  </span></Toggle
><ColumnList cols={2}
  ><Column
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '423ee92b-d2a6-4b89-a1d1-e4c510c908fa',
        created_time: '2022-01-05T09:14:00.000Z',
        last_edited_time: '2022-01-05T09:14:00.000Z'
      }}
    >
      Or you could go crazy and have a callout that doubles as a toggle. Wat!? 🙀
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: 'fdb3757e-6109-4405-b202-24d89dccb1e5',
        created_time: '2022-01-05T09:14:00.000Z',
        last_edited_time: '2022-01-11T07:24:00.000Z'
      }}
    >
      Sure. You can add keyboard interactions, or make callouts behave according to user settings.
      Anything Svelte allows you to do, you can probably do it!
    </Paragraph>
  </Column><Column
    ><Image url="/assets/about-notion2svelte/cc26aa0c-ad05-48b8-873b-649424c032e8.png" />
    <Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '81c37598-a496-45b7-9d9c-66d0aca7e755',
        created_time: '2022-01-05T09:14:00.000Z',
        last_edited_time: '2022-01-11T07:20:00.000Z'
      }}
    >
      ↓ click! ↑
    </Paragraph>
    <Image url="/assets/about-notion2svelte/3c907829-0848-414f-9504-3cbf0a79f701.png" />
  </Column></ColumnList
><Toggle
  >Here’s the code (blue border, with toggle)
  <span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'fdc65179a8bd451caf6759019204cfde',
        id: '71a5ebf4-eb48-4d02-aa6d-e7de1c7bec10',
        created_time: '2022-01-11T07:19:00.000Z',
        last_edited_time: '2022-01-11T07:20:00.000Z'
      }}
    >
      <em>Callout.svelte</em>
    </Paragraph>
    <Code
      code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7CgoJZXhwb3J0IGxldCBvcGVuID0gZmFsc2U7Cg==">{}</script>

<div class="wrapper \{open ? 'open' : 'closed'}" on:click=\{() => (open = !open)}>
	<div class="emoji">\{emoji}</div>
	\{#if open}
		<div class="text">
			<div class="callout">
				<slot />
			</div>
			<slot name="children" />
		</div>
	\{:else}
		<div class="text">⟩</div>
	\{/if}
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciBcewoJCWRpc3BsYXk6IGZsZXg7CgkJbWFyZ2luOiAxcmVtIDFyZW0gMnJlbSAwOwoJCXBhZGRpbmc6IDJyZW0gMnJlbSAwIDJyZW07CgkJZm9udDogMS4yNXJlbS8xLjVyZW0gJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKCQliYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk4LCAxMDAlLCA5NyUpOwoJCWJvcmRlcjogNHB4IHNvbGlkIGhzbCgyMDYsIDg4JSwgNzAlKTsKCQlib3JkZXItcmFkaXVzOiAwLjVyZW07Cgl9CgoJLmNsb3NlZCBcewoJCXdpZHRoOiA4cmVtOwoJfQoKCS5jYWxsb3V0IFx7CgkJZGlzcGxheTogYmxvY2s7Cgl9CgoJLmVtb2ppIFx7CgkJbWFyZ2luLXJpZ2h0OiAwLjVlbTsKCQloZWlnaHQ6IDNyZW07CgkJd2lkdGg6IDNyZW07CgkJZm9udC1zaXplOiAzcmVtOwoJCWxpbmUtaGVpZ2h0OiAxLjE7Cgl9Cg=="></style>`}
      language="html"
      caption=""
    /></span
  ></Toggle
><Header level={3}>A word about imports</Header>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'eeda3d54-3e81-4b6e-afab-01b5c58fc62d',
    created_time: '2022-01-05T09:14:00.000Z',
    last_edited_time: '2022-01-05T09:14:00.000Z'
  }}
>
  It should go without saying, but your Sveltekit app needs to know where to actually&nbsp;<em
    >find</em
  >&nbsp;the components that match&nbsp;<em>notion2svelte</em>’s output. At present, this means
  putting them in&nbsp;<em>src/lib/notion2svelte</em>. The reason why becomes apparent when we look
  at the&nbsp;<InlineCode code={'import'} />&nbsp;statements rendered by&nbsp;<em>notion2svelte</em
  >.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: 'ce6adbc2-db45-480f-9e10-542335ba6cd5',
    created_time: '2022-01-05T09:14:00.000Z',
    last_edited_time: '2022-01-09T06:01:00.000Z'
  }}
>
  Don’t worry. You don’t need to explicitly remember this location. You’ll get a standard Svelte
  error if you try to run your app without the necessary components in place. After all, they’re
  just regular Svelte imports. Nothing special.
</Paragraph>
<Code
  code={`import Callout from '$lib/notion2svelte/Callout.svelte';`}
  language="html"
  caption=""
/><Divider />
<Header level={1}>How to use&nbsp;<em>notion2svelte</em></Header>
<Paragraph
  blockProps={{
    pageId: 'fdc65179a8bd451caf6759019204cfde',
    id: '92b91cd7-462f-4129-8488-c4cf54db6035',
    created_time: '2022-01-05T09:14:00.000Z',
    last_edited_time: '2022-01-11T07:34:00.000Z'
  }}
>
  For now, the fastest way to get started is to follow along with the video tutorial,&nbsp;<MagicLink
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
    ><strong>notion2svelte in 10 minutes</strong></MagicLink
  >
</Paragraph>
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
    pageId: 'fdc65179a8bd451caf6759019204cfde',
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
      pageId: 'fdc65179a8bd451caf6759019204cfde',
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
      pageId: 'fdc65179a8bd451caf6759019204cfde',
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
      pageId: 'fdc65179a8bd451caf6759019204cfde',
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
