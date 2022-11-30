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
		pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
		title: 'Quote'
	});
</script>

<svelte:head>
	<title>Quote</title>
</svelte:head>

<Title>Quote</Title>

<Header level={1}>1. Notion original</Header>
<Image url="/assets/standard-components/quote/b9cabf79-0b04-4b1d-b675-7f7cf529ab11.png" />
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
<Paragraph
	blockProps={{
		pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
		id: '577562ee-dfd9-42bd-889c-e04479602dd8',
		created_time: '2022-01-31T20:31:00.000Z',
		last_edited_time: '2022-01-31T20:31:00.000Z'
	}}
/>
<Code
	code={`\{
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;8910b758-ae6f-4bb6-8fd8-86719e917c3e&quot;,
  &quot;created_time&quot;: &quot;2022-01-26T09:26:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-26T09:33:00.000Z&quot;,
  &quot;has_children&quot;: true,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;quote&quot;,
  &quot;quote&quot;: \{
    &quot;text&quot;: [
      \{
        &quot;type&quot;: &quot;text&quot;,
        &quot;text&quot;: \{
          &quot;content&quot;: &quot;Never tell a joke if you’ve got to look around before telling it.&quot;,
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
        &quot;plain_text&quot;: &quot;Never tell a joke if you’ve got to look around before telling it.&quot;,
        &quot;href&quot;: null
      }
    ]
  },
  &quot;blocks&quot;: [
    \{
      &quot;object&quot;: &quot;block&quot;,
      &quot;id&quot;: &quot;2266f93f-0222-487d-8723-2dc72e09f32c&quot;,
      &quot;created_time&quot;: &quot;2022-01-26T09:32:00.000Z&quot;,
      &quot;last_edited_time&quot;: &quot;2022-01-26T09:33:00.000Z&quot;,
      &quot;has_children&quot;: false,
      &quot;archived&quot;: false,
      &quot;type&quot;: &quot;paragraph&quot;,
      &quot;paragraph&quot;: \{
        &quot;text&quot;: [
          \{
            &quot;type&quot;: &quot;text&quot;,
            &quot;text&quot;: \{
              &quot;content&quot;: &quot;—Jimmy Carr&quot;,
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
            &quot;plain_text&quot;: &quot;—Jimmy Carr&quot;,
            &quot;href&quot;: null
          }
        ]
      }
    }
  ]
}`}
	language="javascript"
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
	code={`&lt;Quote&gt;
  Never tell a joke if you’ve got to look around before telling it.
  &lt;span slot=&quot;children&quot;&gt;
    &lt;Paragraph
      blockProps=\{\{
        pageId: &#039;aa1322ce4c004737ac1eb3015f393fe5&#039;,
        id: &#039;2266f93f-0222-487d-8723-2dc72e09f32c&#039;,
        created_time: &#039;2022-01-26T09:32:00.000Z&#039;,
        last_edited_time: &#039;2022-01-26T09:33:00.000Z&#039;
      }}
    &gt;
      —Jimmy Carr
    &lt;/Paragraph&gt;
  &lt;/span&gt;
&lt;/Quote&gt;`}
	language="html"
	>This isn’t&nbsp;<em>entirely</em>&nbsp;accurate. Prettier didn’t handle this example as well as
	I’d have liked, so I did a bit of whitespace rearranging here.</Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
		id: '8910b758-ae6f-4bb6-8fd8-86719e917c3e',
		created_time: '2022-01-28T22:38:00.000Z',
		last_edited_time: '2022-01-28T22:38:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by&nbsp;</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Quote.svelte"
		><InlineColor value="gray">Quote.svelte</InlineColor></Link
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
	><Link type="absolute" href="https://github.com/nvlgzr/notion2svelte"
		>https://github.com/nvlgzr/notion2svelte</Link
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
	Open your Terminal.app* and follow along to 👉🏿 “<Link
		type="absolute"
		href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
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
		><Link type="absolute" href="https://fishshell.com/"
			><InlineColor value="gray">fish shell</InlineColor></Link
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
<Header level={2}
	>Browse the docs ⚘&nbsp;<Link type="alias" href="/about-notion2svelte">🏠</Link>
</Header>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>
		</BulletedListItem>
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
			><Link type="mention" href="/high-level-discussion/dot-env">Configuring your .env</Link>
		</BulletedListItem>
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
			><strong>bold</strong>&nbsp;→&nbsp;<InlineCode code={'&lt;strong&gt;'} />
		</BulletedListItem>
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
><ChildPage
	title="‘A handful of people — fewer than 35 — have survived a jump from the Golden Gate Bridge. Nearly every one said afterward that they wanted to live as soon as they went over the side.’"
	><Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'e1e6512c-caf5-4dea-8224-5e989668af27',
			created_time: '2022-06-06T19:47:00.000Z',
			last_edited_time: '2022-06-06T19:48:00.000Z'
		}}
	/>
	<Divider />
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'a6b98c0b-d67d-4462-81ec-61ecfd025819',
			created_time: '2022-06-06T19:48:00.000Z',
			last_edited_time: '2022-06-06T19:48:00.000Z'
		}}
	/>
	<Callout emoji="🔖"><strong>l’appel du vide</strong></Callout><Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'fe9cc4ed-0a86-4053-93d6-0a27475c9206',
			created_time: '2022-06-06T19:47:00.000Z',
			last_edited_time: '2022-06-06T19:48:00.000Z'
		}}
	>
		Walking barrier expected to go up ~2024. I may choose to ignore this future fact. 😬
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '80d0277d-78d4-45c3-879c-576562889aa4',
			created_time: '2022-06-06T19:48:00.000Z',
			last_edited_time: '2022-06-06T19:48:00.000Z'
		}}
	/>
	<Divider />
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '86fd24cd-5d1c-47ad-90b2-c6b7a3a5035f',
			created_time: '2022-06-06T19:47:00.000Z',
			last_edited_time: '2022-06-06T19:47:00.000Z'
		}}
	/>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'd1bbc208-88fe-4164-888a-58b482bb2d2c',
			created_time: '2022-06-06T19:47:00.000Z',
			last_edited_time: '2022-06-06T19:47:00.000Z'
		}}
	/>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '87f6df13-0123-4518-a954-9ce95f86ae31',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		<Link
			type="absolute"
			href="https://thebolditalic.com/what-we-get-wrong-about-golden-gate-bridge-suicides-3a1efa76162"
			>https://thebolditalic.com/what-we-get-wrong-about-golden-gate-bridge-suicides-3a1efa76162</Link
		>
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '37980f0a-d4bb-48fb-b8e9-a29b15fbcbf0',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	/>
	<Image url="/assets/standard-components/quote/92542dea-1308-472a-93ba-2268e94266fa."
		>Photo:&nbsp;<Link type="absolute" href="https://unsplash.com/@cleipelt">Chris Leipelt</Link
		>&nbsp;via&nbsp;<Link type="absolute" href="https://unsplash.com/photos/kWd5ER2XpSg"
			>Unsplash</Link
		></Image
	>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '81a6bc1a-2af2-48ec-9c1c-da0cf993b655',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		If you’ve ever felt the sudden urge to leap off of a tall building, you’re already familiar with
		the concept of&nbsp;<em>l’appel du vide&nbsp;</em>— a French term that literally translates as
		“the call of the void” and refers to a sudden but passing urge to engage in self-destructive
		behavior. I’ve always heard this voice, although its specific suggestions change from time to
		time. Rather than jumping from a great height, for example, it might tell me to crawl down onto
		the BART tracks on my commute home or chug the drain cleaner sitting under my sink.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '27981d36-677c-4aa9-8c63-887dcdc57fd8',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		I’m far from alone in this, however. Researchers from Florida State University estimate
		that&nbsp;<Link type="absolute" href="https://www.ncbi.nlm.nih.gov/pubmed/22119089"
			>up to 30%</Link
		>&nbsp;of people experience similar intrusive thoughts. Ironically, these are rarely linked to
		true suicidal behavior. Quite the opposite, in fact — the study found that rather than
		indicating a death wish, l’appel du vide is simply a misinterpreted message from your brain
		warning you to not act recklessly.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'ce686b8b-ecbe-4765-be20-6682224567f1',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		When I began to picture myself jumping off of the Golden Gate Bridge last winter, I largely
		brushed it off as just another example of those disturbing but easily dismissed thoughts. True,
		I was feeling a little off, but I had grown so accustomed to these images throughout my life
		that I was hardly fazed by them. But as I sunk further and further into depression, I realized
		that this was something more. Jumping off the bridge was no longer just an intrusive thought. It
		was a fantasy — one that increased in strength each time I crossed the bridge in the morning on
		my way to work and in the evening on my commute home.
	</Paragraph>
	<Quote
		>Sign up for The Bold Italic newsletter to get the best of the Bay Area in your inbox every
		week.</Quote
	><Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'a406153a-daec-43ac-a3ee-ca6d6e5f9cbb',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Although I now recognize that this was a textbook example of distorted thinking, statements like
		“I am not good enough,” “I wasn’t meant to be happy,” and “there’s nothing left for me to look
		forward to” interrupted my stream of consciousness so frequently that they became as true to me
		as “the sky is blue.” After a few weeks of being constantly assaulted by these thoughts, I was
		despondent. I could hardly eat, I spent all day at work trying to hold back tears, and the only
		time I would drag myself out of my apartment was when I could no longer stand my dog’s whining
		to go outside.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '7525adc5-48cc-4607-bd34-97afa109f8f1',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Exhausted, I came to the conclusion that I only had one option to make it all go away. On a
		Thursday in late May, I wrote a note for my family and friends and began to call an Uber to take
		me to the Golden Gate Bridge.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'c94bdb46-fcb4-47de-af10-ff7ac35b8a29',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		The Golden Gate Bridge is one of the&nbsp;<Link
			type="absolute"
			href="https://en.wikipedia.org/wiki/List_of_suicide_sites"
			>top suicide sites in the world</Link
		>, surpassed only by the Yangtze River Bridge in Nanjing, China. People have jumped off of the
		bridge for nearly as long as it’s been accessible to the public; the first recorded suicide — a
		World War I veteran suspected to have suffered from post-traumatic stress disorder — took place
		less than three months after the bridge’s opening on May 27, 1937. In the years since, hundreds
		have followed suit, spanning from a five-year-old girl urged to jump by her father to John F.
		Kennedy’s 28-year-old former caddy to an 85-year-old grandfather. Currently, the total number of
		deaths by suicide on the Golden Gate Bridge is estimated to be around 1,700, although this
		figure is likely higher since not all victims are witnessed jumping, and not all bodies are
		recovered.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '04b2515d-662f-41bd-97e2-3f00aab164a8',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Golden Gate Bridge suicides have long intrigued the media and the public, sometimes to a
		disturbing degree.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'c695e177-11bf-40a8-869a-a2ebf1aa0168',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“San Francisco had been accused of taking a perverse pride in its reputation,” says Ann Garrison
		in “<Link type="absolute" href="http://www.foundsf.org/index.php?title=Suicides_from_the_Bridge"
			>Our Beautiful, Lethal Bridge</Link
		>,” a 1998 essay. “Tour bus drivers cited the death toll as they passed the bridge, the city’s
		daily papers announced each leap.”
	</Paragraph>
	<Image url="/assets/standard-components/quote/838a1e1d-7b7f-4226-8a30-65de3acd5f8f.jpg"
		>A pair of WWI boots sit in the first row of 1,300 pairs of shoes, in memory of the first person
		(a WWI veteran) who died by suicide by jumping off the Golden Gate Bridge in San Francisco. More
		than 1,300 shoes were laid down near the Golden Gate Bridge in memory of those who died from
		jumping from the bridge since 1937. Photo: Kimberly White/Corbis via Getty Images</Image
	>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '74867147-5c86-4d14-a885-f8ac17f2740e',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		This morbid fascination came to a head in 1995, when the Marin County coroner requested that
		media outlets stop keeping an official count after several people vied to become the 1,000th
		person to die by suicide on the Golden Gate Bridge. According to&nbsp;<Link
			type="absolute"
			href="https://www.newyorker.com/magazine/2003/10/13/jumpers">the</Link
		><Link type="absolute" href="https://www.newyorker.com/magazine/2003/10/13/jumpers"
			><em>&nbsp;New Yorker</em></Link
		>, “a local disk jockey went so far as to promise a case of Snapple to the family of the
		victim.” In keeping with recommended suicide prevention guidelines for the media, publications
		no longer strictly track the number of suicides on the Golden Gate Bridge and rarely report on
		individual cases unless they involve notable figures or affect the general public.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '1c80749c-cc12-44e1-8fb4-33bb53191ca4',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Of course, these measures didn’t cause the fervor to die down entirely. In the years since 1995,
		the topic of Golden Gate Bridge suicides has been prominently featured in books, documentaries,
		and more articles than can be counted. Each one begs the question: Why this bridge?
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '04b1dbed-c981-49c7-82d6-786f3c6394b6',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		You can’t help but feel a sense of wonder when you visit the Golden Gate Bridge. Even on a
		cloudy day, the view from the bridge is striking (provided that&nbsp;<Link
			type="absolute"
			href="https://twitter.com/KarlTheFog/status/1212117069593862144">Karl</Link
		>/<Link type="absolute" href="https://twitter.com/fog_karla">Karla</Link>&nbsp;the Fog isn’t
		making an appearance as well). Look out toward the city while standing on it, and you’ll see a
		magnificent panorama, spanning from the dense vegetation of the Presidio to the austere
		buildings of the financial district to the lone isle of Alcatraz to the hills of Marin, looming
		in the outskirts of your peripheral vision. All the while, some 220 feet below you, the
		turbulent water churns into frothy whitecaps.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '9815e432-ad5b-4536-a0e3-36f5eea432f0',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		It’s a poetic image, to be sure. In the public sphere, this romantic aesthetic is frequently
		cited as a reason why actively suicidal people are so drawn to the bridge. A 2005 article
		from&nbsp;<em>SFGate</em>&nbsp;entitled “<Link
			type="absolute"
			href="https://www.sfgate.com/bayarea/article/Lethal-Beauty-The-Allure-Beauty-and-an-easy-3302966.php"
			>Lethal Beauty</Link
		>” describes the last view of a Golden Gate Bridge jumper as “a panorama enthralling in its
		harmony of land, sea, and sky.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '403e769f-b252-4389-bf8d-aed3467778af',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“Even when the cooling fog blunts the view, the vast majority of jumpers take their last step
		facing east instead of west toward the Pacific,” the article notes. Other publications have
		referred to the Golden Gate Bridge as “<Link
			type="absolute"
			href="https://www.washingtonpost.com/news/morning-mix/wp/2017/04/14/after-years-and-hundreds-of-suicides-off-the-golden-gate-bridge-a-new-net-could-save-lives/"
			>a symbol of pain</Link
		>” and “<Link
			type="absolute"
			href="http://news.google.com/newspapers?nid=348&dat=19810730&id=78xLAAAAIBAJ&sjid=tjQDAAAAIBAJ&pg=6910,3640044"
			>the nation’s favorite spot for suicide</Link
		>.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'eaf7f5c1-1e1b-4a94-bde5-98c43d57e962',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Although jumping off of the Golden Gate Bridge has been glamorized to a degree, there’s a much
		bigger reason it’s become such a suicide hot spot: It’s there, and it’s accessible.
	</Paragraph>
	<Quote
		>‘Romanticizing the suicides has a tendency to get one to thinking there is nothing that can be
		done about the jumping problem. That kind of view supports taking no action to resolve the
		issue, which is exactly what happened for over 75 years at the Gate.’</Quote
	><Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '1ef9a5a6-cee3-4bf5-8a8e-44526f44728a',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“Most of the discussion about [the bridge being] ‘romanticized’ has been speculative in nature.
		As such, it takes away from the central problem — easy access to lethal means,” says Paul
		Muller, president and founding member of the&nbsp;<Link
			type="absolute"
			href="http://www.bridgerail.net/">Bridge Rail Foundation</Link
		>, an organization created with the goal of ending suicides on the Golden Gate Bridge.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '0fb8636f-996c-4f1d-819f-1f8923eed0e9',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Under scrutiny, many of the romanticized beliefs surrounding suicides on the Golden Gate Bridge
		don’t hold water. Take, for instance, the aforementioned reference to jumpers leaping from the
		east side of the bridge.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '466723d5-98b8-432c-bece-debce49d6c9e',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“There was speculation about why so many jumpers did so from the east side of the bridge, as
		though they were jumping back into the bay, away from the abyss of the ocean, back to the
		country and homeland, embracing where they came from, back to the womb, etc. However, in
		reality, the east walkway is the most open and accessible,” Muller adds.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '08ae9d4a-5b49-471f-83cb-d538aa51e0bc',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Muller’s statement surprised me at first. Truth be told, I did find something macabrely
		beautiful about jumping off the Golden Gate Bridge in my depressed state. But as I think about
		it further, I realize I likely wouldn’t have even considered jumping off of the Golden Gate
		Bridge had I not passed over it twice a day.
	</Paragraph>
	<Image url="/assets/standard-components/quote/d0926dfb-4d49-4104-88b0-6a77574a05f6.jpg"
		>A posted sign alerts people to use an emergency crisis counseling phone if in distress on the
		Golden Gate Bridge. Photo: Justin Sullivan/Getty Images</Image
	>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'e68e9a72-02ce-44a8-ba78-594353e3ad0e',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Another misconception about the Golden Gate is that it serves as an international suicide
		destination. On the contrary, “85% of bridge jumpers live within an hour’s drive of the bridge,
		and 92% live in California. Less than 8% are from out of state or abroad,” the Bridge Rail
		Foundation’s&nbsp;<Link
			type="absolute"
			href="http://www.bridgerail.net/golden-gate-bridge-suicides/demographics">website states</Link
		>.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'fc29a07a-8e82-4e59-9fc4-262d8c93f740',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		The mythos that the bridge has developed over the years isn’t just false — it’s dangerous,
		Muller says.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '7d56cd4c-5394-42ad-a0c0-b021bc7fc279',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“Romanticizing the suicides has a tendency to get one to thinking there is nothing that can be
		done about the jumping problem,” he explains. “That kind of view supports taking no action to
		resolve the issue, which is exactly what happened for over 75 years at the Gate.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '6613d9f4-ad91-4d4e-a288-d96908f20d8e',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Creating a physical barrier to prevent suicides at the Golden Gate Bridge was initially
		discussed in the 1950s, but the idea didn’t gain traction until much later. Earlier efforts to
		create a barrier faced an uphill battle as opponents declared that proposed designs, such as
		barbed wire fences, were an eyesore that would detract from the bridge’s grandeur. Besides,
		critics argued, a barrier would only encourage suicidal people to choose a different method —
		something that Muller says is untrue.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '5af22dba-8c4b-4db9-a29e-fb1965447e28',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		According to&nbsp;<Link
			type="absolute"
			href="https://www.washingtonpost.com/news/to-your-health/wp/2014/03/27/why-suicide-barriers-work-especially-at-magnets-like-the-golden-gate-bridge/"
			>one study</Link
		>&nbsp;that Muller cited, building a barrier at the Duke Ellington Bridge in Washington, D.C.,
		not only stopped suicides from taking place there, but they also did not increase at an
		unprotected bridge just blocks away. Mounting evidence of barrier effectiveness such as this, in
		addition to persistent pressure from advocacy organizations, eventually won out. After a
		yearslong bureaucratic tango, the Golden Gate Bridge board of directors approved funding in 2014
		for a net that would prevent jumpers from falling all the way down.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'dec582fc-5afd-488c-aa6b-22139edb5f3f',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Construction on the net began in 2019 and was originally projected to be completed in January
		2021, although the timeline has since been pushed back two years to January 2023 — a delay that
		is expected to cost an additional&nbsp;<Link
			type="absolute"
			href="https://www.marinij.com/2020/08/26/golden-gate-bridge-suicide-barrier-delays-to-cost-23m/"
			>$23 million</Link
		>. At least one part of the renovations, however — replacing the bridge’s maintenance traveler
		systems — isn’t slated for completion until April 2024.
	</Paragraph>
	<Quote
		>‘A handful of people — fewer than 35 — have survived a jump from the Golden Gate Bridge. Nearly
		every one said afterward that they wanted to live as soon as they went over the side.’</Quote
	><Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '2ba39dc2-13c8-47af-a4fa-74a464328227',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		The Golden Gate Bridge Highway and Transportation District pointed to a difficult transition
		period when the contractor, Shimmick Construction, was acquired by AECOM in 2017 as well as
		challenges in accessing certain work sites on the bridge and a slower-than-expected pace. The
		contractor, on the other hand, insists that the delays are a result of being asked to apply
		standards at odds with state law as well as to work outside the scope of the original project.
		While it’s not clear who exactly is responsible, what is certain is that the net will be
		completed well beyond its intended debut.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'ed3e1240-55d2-48f9-9b7c-eee04c0eb876',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		Upon hearing the news that the long-awaited barrier would be postponed, Muller felt “horror and
		disappointment.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'f831c9ae-feec-46c3-a82c-802e42662c82',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“Two years means an additional 60 or so deaths,” he added.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'ebf9f95d-647b-4e1c-ac9d-39e70a122b97',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		The history of suicides on the Golden Gate Bridge is a long and sordid one, but there is
		nevertheless reason to be hopeful. On a large scale, the soon-to-be-erected suicide net
		deterrent system is expected to save countless lives. Barriers at formerly very active suicide
		sites like the Eiffel Tower and the Empire State Building have been found to drastically reduce
		the number of deaths.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '07597778-7df0-4da1-a0da-60a093d8d226',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“Where nets have been erected as suicide barriers, they’ve proven to be 100% effective thus
		far,” Denis Mulligan, CEO and general manager of the Golden Gate Bridge Highway and
		Transportation District,&nbsp;<Link
			type="absolute"
			href="https://www.cnn.com/2014/06/27/health/golden-gate-suicide-barrier/index.html"
			>told CNN in 2014</Link
		>.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '7b0f1caf-7783-4490-8800-da50ef4664c8',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		And on an individual level, there is overwhelming evidence that the vast majority of suicidal
		episodes are only temporary.
	</Paragraph>
	<Image url="/assets/standard-components/quote/cc2036cf-e859-4204-b28d-47e595c3a710.jpg"
		>Support struts that are part of the new suicide prevention net are visible on the Golden Gate
		Bridge in December 2019. Installation of the the Golden Gate Bridge suicide prevention net has
		been delayed at least two years. The installation was scheduled to be completed in 2021 but is
		now expected to be completed by 2023. Photo by Justin Sullivan/Getty Images</Image
	>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: 'e6d5f288-9449-49c1-b5c2-3b0e0c4a6560',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“The idea that [suicidal ideation] can pass is not well understood in the public,” Muller
		explains. “<Link type="absolute" href="http://seattlefriends.org/files/seiden_study.pdf"
			>90% of people</Link
		>&nbsp;who make an attempt [to jump off the Golden Gate Bridge] and do not die as a result do
		not subsequently die by suicide.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '275838f8-f3b6-4ca4-83d0-13a5ccbb3222',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		“A handful of people — fewer than 35 — have survived a jump from the Golden Gate Bridge,” the
		Bridge Rail Foundation&nbsp;<Link
			type="absolute"
			href="http://www.bridgerail.net/golden-gate-bridge-suicides/demographics">website says</Link
		>. “Nearly every one said afterward that they wanted to live as soon as they went over the
		side.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '60e999c3-fca9-4266-b4c2-bf7a45e21dbc',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		When I was actively suicidal, I couldn’t stand hearing things like “it gets better” or “it’s
		always darkest before the dawn.” While I knew that people who offered these sentiments meant
		well, it always came across as condescending and cliché. If you’re struggling with suicidal
		thoughts, I won’t echo those same vague platitudes to you, but I will ask you to consider that
		the negative thoughts that have lodged themselves in your brain are not objective. You might
		think that there’s no point in continuing on, but you have to remember — just because you think
		something doesn’t mean it’s true. And first and foremost, I encourage you to get help from a
		professional.
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '3278990a-7015-4fc0-922f-23894092f0d8',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		It’s impossible to go about your daily life in San Francisco without seeing the Golden Gate
		Bridge. Even if you don’t live near it, you’re bound to run across it on tourists’ T-shirts,
		street art, and hell, even the&nbsp;<Link
			type="absolute"
			href="https://newsroom.cisco.com/feature-content?type=webcontent&articleId=1928468"
			>Cisco logo</Link
		>. At one time, this served as a painful reminder of the worst moment of my life. But a year and
		a half later, I’m finally able to look at that system of red towers and suspension cables and
		think, “Fuck yeah, I made it through — and I know you can too.”
	</Paragraph>
	<Paragraph
		blockProps={{
			pageId: 'aa1322ce4c004737ac1eb3015f393fe5',
			id: '6ff3f8cd-ada6-4f49-b8fb-4b9771e81d30',
			created_time: '2022-06-06T19:46:00.000Z',
			last_edited_time: '2022-06-06T19:46:00.000Z'
		}}
	>
		<em
			>Suicide is preventable. Anyone who is experiencing suicidal thoughts or a mental health
			crisis should immediately reach out for help by calling the&nbsp;</em
		><Link type="absolute" href="https://suicidepreventionlifeline.org/"
			><em>National Suicide Prevention Lifeline</em></Link
		><em>&nbsp;at 1(800)273-TALK (8255), or contact the&nbsp;</em><Link
			type="absolute"
			href="https://www.crisistextline.org/"><em>Crisis Text Line</em></Link
		><em>&nbsp;by texting TALK to 741741. You can also reach out to the local&nbsp;</em><Link
			type="absolute"
			href="https://www.sfsuicide.org/our-programs/24-hour-crisis-line/"
			><em>San Francisco Crisis Line</em></Link
		><em
			>&nbsp;by calling (415)781–0500 or texting MYLIFE to 741741 for 24/7 confidential support.</em
		>
	</Paragraph>
</ChildPage>
