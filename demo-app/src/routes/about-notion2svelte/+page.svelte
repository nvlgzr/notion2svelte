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
	import { setContext } from 'svelte';

	setContext('pageStuff', {
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		title: ''
	});
</script>

<svelte:head>
	<title />
</svelte:head>

<Cover
	coverURL={'/assets/about-notion2svelte/cover.jpg'}
	iconEmojiOrURL={'/assets/about-notion2svelte/icon.png'}
/>
<Title />

<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: 'b0408b84-5dd5-49db-805e-a1ec19657fb8',
		created_time: '2022-12-02T05:23:00.000Z',
		last_edited_time: '2022-12-02T05:26:00.000Z'
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
		last_edited_time: '2022-01-31T05:21:00.000Z'
	}}
>
	Just like it sounds,&nbsp;<em>notion2svelte</em>&nbsp;transforms Notion-based content into&nbsp;<em
		>.svelte</em
	>&nbsp;pages:
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
<BulletedListItem
	>Write-your-own&nbsp;<Link type="alias" href="/components">components</Link></BulletedListItem
>
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
		last_edited_time: '2022-12-02T05:26:00.000Z'
	}}
>
	It’s a bit of an adventure. Kinda like driving stick for the first time: it’s fun!…but takes some
	getting used to.
</Paragraph>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: 'dea56b44-ef7e-4c81-8e77-ab8eb3fbbf0f',
		created_time: '2022-01-11T00:55:00.000Z',
		last_edited_time: '2022-01-27T06:45:00.000Z'
	}}
>
	I hope you’ll give it&nbsp;<Link
		type="absolute"
		href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">a quick try</Link
	>&nbsp;and, if you’re feeling the vibe, let me know what you think in&nbsp;<Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/discussions/1">the Discussions</Link
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
		last_edited_time: '2022-02-18T07:03:00.000Z'
	}}
>
	Everything you see on this site was…
</Paragraph>
<NumberedListItem number="1">…written in Notion</NumberedListItem>
<NumberedListItem number="2">
	…exported as a&nbsp;<em>.svelte</em>&nbsp;file by running&nbsp;<em>notion2svelte</em
	></NumberedListItem
>
<NumberedListItem number="3">…published normally using&nbsp;<em>Svelte Kit</em></NumberedListItem>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: '229fe91d-a7ee-42b2-9d81-1c9ad4804d5b',
		created_time: '2022-01-09T05:40:00.000Z',
		last_edited_time: '2022-01-09T05:40:00.000Z'
	}}
/>
<Image url="/assets/about-notion2svelte/dfbc55c9-68a1-4ea3-ac5a-904e086dfe26.png"
	>The screenshot on the right is from early-ish in the project, when I was using the Svelte Kit
	demo app as my test site; hence the light blue background & (if you zoom way in) familiar top nav</Image
>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: '87844166-99b9-417f-9479-2076b0f1576e',
		created_time: '2022-01-09T05:40:00.000Z',
		last_edited_time: '2022-02-01T03:40:00.000Z'
	}}
/>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: '6f8cf24b-d59b-470c-930f-9e9f24e201ca',
		created_time: '2022-01-04T23:43:00.000Z',
		last_edited_time: '2022-02-01T03:47:00.000Z'
	}}
>
	The&nbsp;<em>.svelte</em>&nbsp;files output by&nbsp;<em>notion2svelte</em>&nbsp;are incomplete in
	that they rely on a pre-defined set of&nbsp;<em>Svelte</em>&nbsp;components — stored in&nbsp;<em
		>src/lib/notion2svelte&nbsp;</em
	>— to do the actual rendering. That’s where&nbsp;<strong>you</strong>&nbsp;come in!
</Paragraph>
<ColumnList cols={2}
	><Column
		><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: 'f59e36b5-bd5a-4284-9abc-648a1b432b14',
				created_time: '2022-02-01T03:47:00.000Z',
				last_edited_time: '2022-12-02T06:25:00.000Z'
			}}
		>
			As the author of these components, you get to make them look & behave however you want. As a
			for-instance: you can hover over this — or any other — paragraph to access metadata about its
			source block in Notion.
		</Paragraph>
	</Column><Column
		><Image url="/assets/about-notion2svelte/844f4edc-dd62-48b2-b82b-3e55f686b115.png"
			><InlineColor value="gray">See&nbsp;</InlineColor><Link
				type="mention"
				href="/high-level-discussion/block-props"
				><InlineColor value="gray"
					><span style="text-decoration:underline;">blockProps</span></InlineColor
				></Link
			><InlineColor value="gray">.</InlineColor></Image
		>
	</Column></ColumnList
><Header level={1}>Example Time! 🧐</Header>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: 'c76cdd2e-c9fc-4bfe-92c4-04a3e65d12b1',
		created_time: '2022-02-01T05:24:00.000Z',
		last_edited_time: '2022-02-01T05:25:00.000Z'
	}}
>
	How do we get from this…
</Paragraph>
<Image url="/assets/about-notion2svelte/f69bb522-315c-4fd4-988f-643088e9a8df.png"
	>Screenshot of original Notion callout</Image
>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: 'ed6d421e-f74b-4dfe-8e1d-8af801e9e6ed',
		created_time: '2022-01-11T07:12:00.000Z',
		last_edited_time: '2022-02-01T05:26:00.000Z'
	}}
>
	…to something like this ↓?
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
			<em>notion2svelte</em>&nbsp;uses the values in your .env to fetch all “Publishable” pages from
			a specified Notion database. To be&nbsp;<em>publishable</em>, a page must have a property
			named&nbsp;<em>Status</em>&nbsp;with a value of&nbsp;<em>Publishable</em>.</NumberedListItem
		>
		<NumberedListItem number="b">
			Recursively fetching all the blocks on a page, we stitch together a single JSON representation
			of the page, stored to disk in case you need it.</NumberedListItem
		>
		<NumberedListItem number="c">
			The resulting JSON gets parsed into a .svelte page built entirely from components defined
			outside the page. This keeps the boundary clear between content and presentation.</NumberedListItem
		>
	</span></Toggle
><ColumnList cols={2}
	><Column
		><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '78683661-4ef6-41df-9e8e-d652f6f4ecd8',
				created_time: '2022-12-02T06:15:00.000Z',
				last_edited_time: '2022-12-02T06:15:00.000Z'
			}}
		>
			<strong>Before</strong>
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '90055a54-d77c-4cda-81f2-f44f83461964',
				created_time: '2022-01-22T20:25:00.000Z',
				last_edited_time: '2022-12-02T06:15:00.000Z'
			}}
		>
			This big JSON object shows our example callout as rendered by the Notion API.
		</Paragraph>
		<Code
			code={`\{
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;011d46be-4bf6-4817-a0da-a849ec16f1aa&quot;,
  &quot;created_time&quot;: &quot;2021-12-20T10:00:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2021-12-20T10:04:00.000Z&quot;,
  &quot;has_children&quot;: false,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;callout&quot;,
  &quot;callout&quot;: \{
    &quot;text&quot;: [
      \{
        &quot;type&quot;: &quot;text&quot;,
        &quot;text&quot;: \{
          &quot;content&quot;: &quot;Hi. I’m a sea otter.&quot;,
          &quot;link&quot;: null
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: false,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;Hi. I’m a sea otter.&quot;,
        &quot;href&quot;: null
      }
    ],
    &quot;icon&quot;: \{
      &quot;type&quot;: &quot;emoji&quot;,
      &quot;emoji&quot;: &quot;🦦&quot;
    }
  }
}`}
			language="json"
		/></Column
	><Column
		><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '05f09fd6-4489-4393-a23c-d2fcbe6fa3a3',
				created_time: '2022-12-02T06:15:00.000Z',
				last_edited_time: '2022-12-02T06:15:00.000Z'
			}}
		>
			<strong>After</strong>
		</Paragraph>
		<Paragraph
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
			code={`&lt;Callout emoji=&quot;🦦&quot;
  blockProps=\{\{
	  pageId: &#039;fdc65179a8bd451caf67x9019204cfde&#039;,
		id: &#039;011d46be-4bf6-4817-a0da-a849ec16f1aa&#039;,
		created_time: &#039;2021-12-20T10:00:00.000Z&#039;,
		last_edited_time: &#039;2021-12-20T10:04:00.000Z&#039;
	}}&gt;
  Hi. I’m a sea otter.
&lt;/Callout&gt;`}
			language="html"
			>The&nbsp;<em>block-props</em>&nbsp;attribute gives your component implementations access to
			Notion’s most relevant block metadata.</Code
		><Paragraph
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
		last_edited_time: '2022-02-18T07:41:00.000Z'
	}}
>
	To render this particular example, all we really need from the JSON are the values for&nbsp;<InlineCode
		code={'callout.icon.emoji'}
	/>,&nbsp;<InlineCode code={'callout.text[0].content'} />, and, well, the blocks’ overall
	type:&nbsp;<InlineCode code={'&quot;callout&quot;'} />. The type tells&nbsp;<em>notion2svelte</em
	>&nbsp;which component to use, in this case,&nbsp;<InlineCode code={'&lt;Callout&gt;'} />.
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
				last_edited_time: '2022-12-02T05:29:00.000Z'
			}}
		>
			Do you want a simple, gray callout with minimal styling, like this:
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
			code={`&lt;script&gt;
	export let emoji = &#039;&#039;;
&lt;/script&gt;

&lt;div class=&quot;wrapper&quot;&gt;
	&lt;div class=&quot;emoji&quot;&gt;\{emoji}&lt;/div&gt;
	&lt;div class=&quot;text&quot;&gt;
		&lt;div class=&quot;callout&quot;&gt;
			&lt;slot /&gt;
		&lt;/div&gt;
		&lt;slot name=&quot;children&quot; /&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
	.wrapper \{
		background-color: white;
		border: 1px solid #333;
		margin: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.emoji \{
		font-size: 2rem;
	}
&lt;/style&gt;`}
			language="html"
		/><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '7b6b2e09-535b-46da-8828-be5d1503a3e7',
				created_time: '2022-01-05T00:01:00.000Z',
				last_edited_time: '2022-01-05T00:01:00.000Z'
			}}
		/>
	</span></Toggle
><Divider />
<ColumnList cols={2}
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
			code={`&lt;script&gt;
	export let emoji = &#039;&#039;;
&lt;/script&gt;

&lt;div class=&quot;wrapper&quot;&gt;
	&lt;div class=&quot;emoji&quot;&gt;\{emoji}&lt;/div&gt;
	&lt;div class=&quot;text&quot;&gt;
		&lt;div class=&quot;callout&quot;&gt;
			&lt;slot /&gt;
		&lt;/div&gt;
		&lt;slot name=&quot;children&quot; /&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
	.wrapper \{
		display: flex;
		margin: 1rem 1rem 2rem 0;
		padding: 2rem 2rem 0 2rem;
		font: 1.25rem/1.5rem &#039;Helvetica Neue&#039;, Helvetica, Arial, sans-serif;
		background-color: hsl(198, 100%, 97%);
		border: 4px solid hsl(206, 88%, 70%);
		border-radius: 0.5rem;
	}
	.callout \{
		display: block;
	}
	.emoji \{
		margin-right: 0.5em;
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
&lt;/style&gt;`}
			language="html"
		/><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: 'c7821ec8-7ee0-4428-82bd-21751cdc7f52',
				created_time: '2022-01-05T09:14:00.000Z',
				last_edited_time: '2022-01-05T09:14:00.000Z'
			}}
		/>
	</span></Toggle
><Divider />
<ColumnList cols={2}
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
				last_edited_time: '2022-12-02T05:56:00.000Z'
			}}
		>
			Sure.
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '163de697-b5ad-4563-9d12-6e1028c442e6',
				created_time: '2022-12-02T05:56:00.000Z',
				last_edited_time: '2022-12-02T06:04:00.000Z'
			}}
		>
			You can add keyboard interactions, or make callouts behave according to user settings.
			Anything Svelte allows you to do, you can (probably) do it!
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '77323ed7-8cc5-42e0-8e9c-201ec687a25c',
				created_time: '2022-12-02T06:04:00.000Z',
				last_edited_time: '2022-12-02T06:04:00.000Z'
			}}
		/>
	</Column><Column
		><Image url="/assets/about-notion2svelte/cc26aa0c-ad05-48b8-873b-649424c032e8.png"
			>Toggle closed</Image
		>
		<Image url="/assets/about-notion2svelte/3c907829-0848-414f-9504-3cbf0a79f701.png"
			>Toggle open</Image
		>
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
			code={`&lt;script&gt;
	export let emoji = &#039;&#039;;

	export let open = false;
&lt;/script&gt;

&lt;div class=&quot;wrapper \{open ? &#039;open&#039; : &#039;closed&#039;}&quot; on:click=\{() =&gt; (open = !open)}&gt;
	&lt;div class=&quot;emoji&quot;&gt;\{emoji}&lt;/div&gt;
	\{#if open}
		&lt;div class=&quot;text&quot;&gt;
			&lt;div class=&quot;callout&quot;&gt;
				&lt;slot /&gt;
			&lt;/div&gt;
			&lt;slot name=&quot;children&quot; /&gt;
		&lt;/div&gt;
	\{:else}
		&lt;div class=&quot;text&quot;&gt;⟩&lt;/div&gt;
	\{/if}
&lt;/div&gt;

&lt;style&gt;
	.wrapper \{
		display: flex;
		margin: 1rem 1rem 2rem 0;
		padding: 2rem 2rem 0 2rem;
		font: 1.25rem/1.5rem &#039;Helvetica Neue&#039;, Helvetica, Arial, sans-serif;
		background-color: hsl(198, 100%, 97%);
		border: 4px solid hsl(206, 88%, 70%);
		border-radius: 0.5rem;
	}

	.closed \{
		width: 8rem;
	}

	.callout \{
		display: block;
	}

	.emoji \{
		margin-right: 0.5em;
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
&lt;/style&gt;`}
			language="html"
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
	code={`import Callout from &#039;$lib/notion2svelte/Callout.svelte&#039;;`}
	language="html"
/><Divider />
<Header level={1}>How to use&nbsp;<em>notion2svelte</em></Header>
<Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: '92b91cd7-462f-4129-8488-c4cf54db6035',
		created_time: '2022-01-05T09:14:00.000Z',
		last_edited_time: '2022-12-02T10:20:00.000Z'
	}}
>
	For now, the fastest way to get started is to follow along with the video tutorial,&nbsp;<Link
		type="absolute"
		href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
		><strong>notion2svelte in 10 minutes</strong></Link
	><strong>.</strong>
</Paragraph>
<Callout emoji="😃"
	>Here’s the checklist I follow in the video in case you want to clone it and follow along.<span
		slot="children"
		><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: 'e5440f88-0cbd-46e5-bc4a-67c1884018a5',
				created_time: '2022-12-02T10:21:00.000Z',
				last_edited_time: '2022-12-02T10:28:00.000Z'
			}}
		>
			<Link
				type="absolute"
				href="https://www.notion.so/nvlgzr/notion2svelte-Checklist-b02cf22ade7f42dd8ab54be9534fb984"
				>https://www.notion.so/nvlgzr/notion2svelte-Checklist-b02cf22ade7f42dd8ab54be9534fb984</Link
			>
		</Paragraph>
	</span></Callout
><Paragraph
	blockProps={{
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: 'cccf487c-6648-4e16-af94-f238e4faa371',
		created_time: '2022-12-02T10:21:00.000Z',
		last_edited_time: '2022-12-02T10:25:00.000Z'
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
		pageId: 'fdc65179a8bd451caf6759019204cfde',
		id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
		created_time: '2022-01-26T09:47:00.000Z',
		last_edited_time: '2022-12-03T01:36:00.000Z'
	}}
>
	Open your Terminal.app* and follow along to 👉🏿 “<Link
		type="absolute"
		href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
	>”!
</Paragraph>
<Toggle
	><InlineColor value="gray">Caveats</InlineColor>
	<span slot="children"
		><Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
				created_time: '2022-01-26T09:47:00.000Z',
				last_edited_time: '2022-12-02T06:19:00.000Z'
			}}
		>
			<InlineColor value="gray"
				>*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether
				it works for you if you’re not running macOS! This is a Node app, after all, so it should be
				pretty portable.</InlineColor
			>
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: 'fc7a7eef-1c40-431e-9842-85d97d1e1d49',
				created_time: '2022-01-27T05:11:00.000Z',
				last_edited_time: '2022-12-02T06:19:00.000Z'
			}}
		>
			<InlineColor value="gray"
				>**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30
				minutes to allow for experimentation. 🧫</InlineColor
			>🧪
		</Paragraph>
		<Paragraph
			blockProps={{
				pageId: 'fdc65179a8bd451caf6759019204cfde',
				id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
				created_time: '2022-01-27T05:10:00.000Z',
				last_edited_time: '2022-12-02T06:19:00.000Z'
			}}
		/>
	</span></Toggle
><Divider />
<Header level={2}
	>Browse the docs ⚘&nbsp;<Link type="alias" href="/about-notion2svelte">🏠</Link>&nbsp;</Header
>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>&nbsp;</BulletedListItem
		>
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
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/dot-env">Configuring your .env</Link
			>&nbsp;</BulletedListItem
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
			>Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
			></BulletedListItem
		>
	</Column><Column
		><Header level={3}>Layout-only Components</Header>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link
			>&nbsp;</BulletedListItem
		>
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
			><strong>bold</strong>&nbsp;→&nbsp;<InlineCode
				code={'&lt;strong&gt;'}
			/>&nbsp;</BulletedListItem
		>
		<BulletedListItem
			><em>italic</em>&nbsp;→&nbsp;<InlineCode code={'&lt;em&gt;'} /></BulletedListItem
		>
		<BulletedListItem><s>strikethrough</s>&nbsp;→ NYI</BulletedListItem>
		<BulletedListItem
			><span style="text-decoration:underline;">underline</span>&nbsp;→ NYI</BulletedListItem
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
