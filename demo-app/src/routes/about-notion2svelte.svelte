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
  import Magic from '$lib/notion2svelte/Magic.svelte';
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
<Magic blockId={undefined}><Title /></Magic>

<Magic blockId={'1ceeb64a-bae5-458f-855b-912a863940bb'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'b42d087f-eab4-4397-a745-b6cced23489c'}
  ><Quote
    ><span slot="children"
      ><Paragraph>
        <strong>Write</strong>&nbsp;in Notion
      </Paragraph>
      <Paragraph>
        <strong>Publish</strong>&nbsp;in Svelte
      </Paragraph>
      <Paragraph>
        <strong>Control</strong>&nbsp;with&nbsp;<em>notion2svelte</em>
      </Paragraph>
    </span></Quote
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'5941868f-ef96-4d1b-89a0-a80996db442e'}
  ><Header level="1">Introducing&nbsp;<InlineCode code={'notion2svelte'} /></Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'0828193e-9eaa-4b99-a0f9-599a801c99e5'}
  ><Paragraph>
    Just like it sounds,&nbsp;<em>notion2svelte</em>&nbsp;transforms Notion-based content into
    .svelte pages:
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'12cce161-4ef0-4bd2-b15e-d653b5087abb'}
  ><Equation block={true} katexString="Notion → notion2svelte → Svelte" /></Magic
>
<br style="display:none;" />
<Magic blockId={'02200191-88cc-4786-bff4-d59207c010be'}
  ><ColumnList cols={2}
    ><Column
      ><Header level="2">Source (Notion)</Header>
      <Image url="/assets/about-notion2svelte/ed21d11c-9389-4694-9db4-549e002a1b92.png" />
      <BulletedListItem>😃 Awesome editing experience</BulletedListItem>
      <BulletedListItem>🤨 Domain-locked to&nbsp;<em>notion.so</em></BulletedListItem>
      <BulletedListItem>😐 Proprietary limitations</BulletedListItem>
    </Column><Column
      ><Header level="2">Destination (Svelte)</Header>
      <Image url="/assets/about-notion2svelte/ce917906-431b-4d6a-9134-506027e66805.png" />
      <BulletedListItem>👘 Your styles</BulletedListItem>
      <BulletedListItem>🤔 Your domain</BulletedListItem>
      <BulletedListItem>🪡 Infinite possibilities</BulletedListItem>
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'61796918-fc47-49a4-afac-5fd27d353ed3'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'f5f51bbb-8ed7-4571-9d94-deab8b4b4f2d'}
  ><Header level="1">Why&nbsp;<em>notion2svelte</em>?</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'39f3ef9f-cf32-4207-ab2b-01617d119576'}
  ><ColumnList cols={3}
    ><Column
      ><Paragraph>
        I like&nbsp;<strong>writing in Notion</strong>
      </Paragraph>
    </Column><Column
      ><Paragraph>
        I like&nbsp;<strong>coding in Svelte</strong>
      </Paragraph>
    </Column><Column
      ><Paragraph>
        I like the&nbsp;<strong>safety of git</strong>
      </Paragraph>
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'bc826337-f4e9-410c-98ad-c2f079734c82'}
  ><Paragraph>
    That, in a nutshell, is what got me started on&nbsp;<em>notion2svelte.&nbsp;</em>It’s not the
    best project out there, but it’s the only one that does what I want. Namely:
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'7f501118-1695-469b-abb0-8c63c49a44df'}
  ><BulletedListItem>Store intermediary artifacts to-disk</BulletedListItem>
  <IndentGroup>
    <Paragraph>
      <em>Benefits</em>
    </Paragraph>
    <BulletedListItem>My content is safely stored in git</BulletedListItem>
    <BulletedListItem
      >I can access the full, raw JSON for every page from within my app, allowing me to add
      interactivity that Notion doesn’t allow</BulletedListItem
    >
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'5a04b931-7165-4b9a-bec3-e00f1dee7011'}
  ><BulletedListItem
    >Command-line tool, rather than runtime&nbsp;<em>npm</em>&nbsp;package</BulletedListItem
  >
  <IndentGroup>
    <Paragraph>
      <em>Benefits</em>
    </Paragraph>
    <BulletedListItem
      >100% decoupled tooling: want to “eject” from&nbsp;<em>notion2svelte</em>? No problem. Just
      stop using it. From the perspective of your Svelte app, the pages created by&nbsp;<em
        >notion2svelte</em
      >&nbsp;are no different than pages you code yourself</BulletedListItem
    >
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'47cae4e7-ec66-4e18-8597-d5a5acdecac6'}
  ><BulletedListItem>Write-your-own components</BulletedListItem>
  <IndentGroup>
    <Paragraph>
      <em>Benefits</em>
    </Paragraph>
    <BulletedListItem>Provides wide creative freedom</BulletedListItem>
    <BulletedListItem>Keeps&nbsp;<em>notion2svelte</em>&nbsp;simple</BulletedListItem>
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'087070bf-e5ee-4290-9623-b469145725d5'}
  ><Header level="1">Why NOT&nbsp;<em>notion2svelte</em>?</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'e1efebff-c2de-4355-a194-0f0f18d0c3a7'}
  ><Paragraph>
    Why&nbsp;<em>not</em>&nbsp;use it? Mainly because it’s early days and, while&nbsp;<em
      >notion2svelte</em
    >&nbsp;isn’t&nbsp;<em>capable</em>&nbsp;of breaking your app, you may not have the patience for
    its idiosyncrasies.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'dea56b44-ef7e-4c81-8e77-ab8eb3fbbf0f'}
  ><Paragraph>
    That said, I hope you’ll at least give it&nbsp;<MagicLink
      href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
      ><InlineColor value="yellow_background">a quick try</InlineColor></MagicLink
    >&nbsp;and, if you’re feeling the vibe, let me know what you think in&nbsp;<MagicLink
      href="https://github.com/nvlgzr/notion2svelte/discussions/1">the Discussions</MagicLink
    >.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'bd881cf3-41e5-4c9e-bfa7-67c48734378b'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'e8965b5e-a183-45af-bbb8-e16d68b5e7ca'}
  ><Header level="1">How it works, grossly oversimplified</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'74c878b3-7a75-4063-8bfa-7c5fcc939256'}
  ><Paragraph>Everything you see on this page was…</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'ca7e990e-b63a-4081-b283-952df0dae70b'}
  ><NumberedListItem number="1">…written in Notion</NumberedListItem>
</Magic>
<br style="display:none;" />
<Magic blockId={'3f3cd63e-8095-47f1-9279-d415597cfb31'}
  ><NumberedListItem number="2">
    …exported as .svelte files, targeted to&nbsp;<InlineCode
      code={'src/routes/&lt;Slug&gt;.svelte'}
    />, using&nbsp;<em>notion2svelte</em></NumberedListItem
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'4248e3a3-c088-49cb-9400-b43bfe1ed3d6'}
  ><NumberedListItem number="3">…Published normally using Svelte Kit</NumberedListItem>
</Magic>
<br style="display:none;" />
<Magic blockId={'229fe91d-a7ee-42b2-9d81-1c9ad4804d5b'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'dfbc55c9-68a1-4ea3-ac5a-904e086dfe26'}
  ><Image url="/assets/about-notion2svelte/dfbc55c9-68a1-4ea3-ac5a-904e086dfe26.png"
    >An early run, back when the base project was the Svelte Kit Demo App</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'373fc2b7-6d70-4c1b-98bd-3f9e21005607'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'6f8cf24b-d59b-470c-930f-9e9f24e201ca'}
  ><Paragraph>
    The output .svelte files make use of user-defined components to do the actual rendering. Let’s
    use a Notion “callout” as a simple example.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'fb0f84ae-a551-4ace-a699-0aef7dfa7024'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'f69bb522-315c-4fd4-988f-643088e9a8df'}
  ><Image url="/assets/about-notion2svelte/f69bb522-315c-4fd4-988f-643088e9a8df.png"
    >Screenshot of original Notion callout</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'ed6d421e-f74b-4dfe-8e1d-8af801e9e6ed'}
  ><Paragraph>How do we get from this ↑ to something like this ↓?</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'e3a6ad2e-71a9-4492-84fe-f78df05f43d7'}
  ><Callout emoji="🦦">Hi. I’m a sea otter.</Callout></Magic
>
<br style="display:none;" />
<Magic blockId={'03b9b730-6d2d-4fcc-9a7d-0862f036da69'}
  ><Paragraph>
    <InlineColor value="gray">The same callout, after transformation by&nbsp;</InlineColor
    ><InlineColor value="gray"><em>notion2svelte</em></InlineColor>
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'e0d09d3c-49f8-4d89-9d76-95541ffaee5f'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'ce11109f-74bf-41ab-89bc-ef70af26e805'}
  ><Paragraph>
    The first step&nbsp;<em>notion2svelte</em>&nbsp;takes is to query the Notion API.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'4196b8c4-788b-49cd-8aa5-2e38db65eb3a'}
  ><Toggle
    >How notion2svelte uses the Notion API
    <span slot="children"
      ><NumberedListItem number="a">
        We use the values in your .env to fetch all “Publishable” pages from a specified Notion
        database. To be&nbsp;<em>publishable</em>, a page must have a property named&nbsp;<em
          >Status</em
        >&nbsp;with a value of&nbsp;<em>Publishable</em>.</NumberedListItem
      >
      <NumberedListItem number="b">
        Recursively fetching all the blocks on a page, we stitch together a single JSON
        representation of the page, stored to disk in case you need it.</NumberedListItem
      >
      <NumberedListItem number="c">
        The resulting JSON the gets parsed into a .svelte page built entirely from components
        defined outside the page. This keeps the boundary clear between content and presentation.</NumberedListItem
      >
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'90055a54-d77c-4cda-81f2-f44f83461964'}
  ><Paragraph>
    &nbsp;This big JSON object shows our example callout as rendered by the Notion API.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'26135e20-5ee7-4633-a51b-1e0c5a3879b2'}
  ><ColumnList cols={2}
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
      ><Paragraph>
        It’s pretty noisy, with all those time stamps, repetitions, and&nbsp;heavy nesting! For
        rendering purposes, most of it can be ignored.
      </Paragraph>
      <Paragraph>
        Here’s what&nbsp;<em>notion2svelte</em>&nbsp;spits out from all that JSON:
      </Paragraph>
      <Code
        code={`<Callout emoji="🦦" block-props=\{\{…}}>
  Hi. I’m a sea otter.
</Callout>`}
        language="html"
        caption="The&nbsp;<em>block-props</em>&nbsp;attribute gives your component implementations access to Notion’s most relevant block metadata."
      /><Paragraph>Better, right?</Paragraph>
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'865b4686-c6d9-4ba2-ba4a-c1fcb1cc472b'}
  ><Paragraph>
    <InlineColor value="gray"
      >Note that, to keep things simple, our example leaves out complicating factors like Notion
      “annotations” (i.e., character formatting), and sub-blocks.</InlineColor
    >
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'457f4383-0c7d-46fa-bee4-48f40e9ef9e8'}
  ><Paragraph>
    All that’s needed to render this particular example are the values for&nbsp;<InlineCode
      code={'callout.icon.emoji'}
    />,&nbsp;<InlineCode code={'callout.text[0].content'} />, and, well, the blocks’ overall
    type:&nbsp;<InlineCode code={'&quot;callout&quot;'} />. The type tells&nbsp;<em
      >notion2svelte</em
    >&nbsp;which component to use, in this case,&nbsp;<InlineCode code={'&lt;Callout&gt;'} />. It
    also tells&nbsp;<em>notion2svelte</em>&nbsp;how to parse the stuff under&nbsp;<InlineCode
      code={'&quot;callout&quot;'}
    />.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'1d4fa03b-5b2a-4ff9-b218-31594083e686'}
  ><ColumnList cols={2}
    ><Column
      ><Paragraph>
        That’s the basic idea. All that remains is to create a Svelte component called Callout. And
        that’s when things get fun.
      </Paragraph>
      <Paragraph>
        &nbsp;Do you want a simple, gray callout with minimal styling, like this:
      </Paragraph>
    </Column><Column
      ><Image url="/assets/about-notion2svelte/70a6d0d1-1eaa-493e-8af4-cd1b69690c54.png" />
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'af211539-99ae-483a-89b2-d68fee30f3eb'}
  ><Toggle
    >Here’s the code<em>&nbsp;(simple gray)</em>
    <span slot="children"
      ><Paragraph>
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
      /><Paragraph />
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'1db927d3-d05b-4684-94aa-443f131c3ce0'}
  ><ColumnList cols={2}
    ><Column><Paragraph>Or would you prefer something more colorful?</Paragraph></Column><Column
      ><Image url="/assets/about-notion2svelte/1f440d04-1010-43c2-89f5-05b39b51aef6.png" />
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'70ac59c2-7b1f-40b9-81f0-46c7b99990ad'}
  ><Toggle
    >Here’s the code (blue border)
    <span slot="children"
      ><Paragraph>
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
      /><Paragraph />
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'fff53a7b-269d-45c5-977c-64fa8b824959'}
  ><ColumnList cols={2}
    ><Column
      ><Paragraph>
        Or you could go crazy and have a callout that doubles as a toggle. Wat!? 🙀
      </Paragraph>
      <Paragraph>
        Sure. You can add keyboard interactions, or make callouts behave according to user settings.
        Anything Svelte allows you to do, you can probably do it!
      </Paragraph>
    </Column><Column
      ><Image url="/assets/about-notion2svelte/cc26aa0c-ad05-48b8-873b-649424c032e8.png" />
      <Paragraph>↓ click! ↑</Paragraph>
      <Image url="/assets/about-notion2svelte/3c907829-0848-414f-9504-3cbf0a79f701.png" />
    </Column></ColumnList
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'674d3963-ef56-4a2f-82ff-11f0ac87be8c'}
  ><Toggle
    >Here’s the code (blue border, with toggle)
    <span slot="children"
      ><Paragraph>
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
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'8721faec-90de-418d-86f9-e04e86bb6c43'}
  ><Header level="3">A word about imports</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'eeda3d54-3e81-4b6e-afab-01b5c58fc62d'}
  ><Paragraph>
    It should go without saying, but your Sveltekit app needs to know where to actually&nbsp;<em
      >find</em
    >&nbsp;the components that match&nbsp;<em>notion2svelte</em>’s output. At present, this means
    putting them in&nbsp;<em>src/lib/notion2svelte</em>. The reason why becomes apparent when we
    look at the&nbsp;<InlineCode code={'import'} />&nbsp;statements rendered by&nbsp;<em
      >notion2svelte</em
    >.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'ce6adbc2-db45-480f-9e10-542335ba6cd5'}
  ><Paragraph>
    Don’t worry. You don’t need to explicitly remember this location. You’ll get a standard Svelte
    error if you try to run your app without the necessary components in place. After all, they’re
    just regular Svelte imports. Nothing special.
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'2cc815fa-2e1f-458f-afb6-dc61037adfd5'}
  ><Code
    code={`import Callout from '$lib/notion2svelte/Callout.svelte';`}
    language="html"
    caption=""
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'533a85a0-b745-4dc4-9ebe-50b65165bc36'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'0f0fe446-3bc2-4e04-81da-ae5ada7478da'}
  ><Header level="1">How to use&nbsp;<em>notion2svelte</em></Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'92b91cd7-462f-4129-8488-c4cf54db6035'}
  ><Paragraph>
    For now, the fastest way to get started is to follow along with the video tutorial,&nbsp;<MagicLink
      href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
      ><strong>notion2svelte in 10 minutes</strong></MagicLink
    >
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'c51ecb33-3ae5-483f-893f-92c7404b43ce'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'62411be2-364d-41eb-a1e3-9911fb2c114d'}
  ><Header level="1">Where to learn more</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'5fec1a8f-8321-47b7-890b-2f2cbc2f8690'}
  ><Paragraph>Find the code, start a discussion, or report an issue on GitHub:</Paragraph>
  <IndentGroup>
    <Paragraph>
      <MagicLink href="https://github.com/nvlgzr/notion2svelte"
        >https://github.com/nvlgzr/notion2svelte</MagicLink
      >
    </Paragraph>
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'b9a357c7-c780-451e-9b26-6dc27bb51a3f'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'ee5f7d77-9dca-4161-b5ad-47d6b192ccdc'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'354ed10f-5f2b-46cf-80b6-8b4157c7baa5'}
  ><Paragraph>
    <strong>See Also</strong>
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'9cee5919-3b5e-41c4-bd1e-17491ee8f80b'}
  ><BulletedListItem><MagicLink href="/components">Components</MagicLink></BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic blockId={'a31a7111-3314-44e3-8940-1a83d7b3ca09'}
  ><BulletedListItem
    ><MagicLink href="/components/nested-blocks">Nested Blocks</MagicLink></BulletedListItem
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'2c54242b-655a-4364-9b88-e9e6e82e75d8'}
  ><BulletedListItem
    ><MagicLink href="rules-for-writing-good-slugs">Writing Good Slugs</MagicLink
    >&nbsp;</BulletedListItem
  >
</Magic>
<br style="display:none;" />
