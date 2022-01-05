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
	<title>Introducing notion2svelte (draft)</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={'/assets/about-notion2svelte/icon.png'}
/>
<Magic blockId={undefined}><Title>Introducing notion2svelte (draft)</Title></Magic>

<Magic blockId={'1ceeb64a-bae5-458f-855b-912a863940bb'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'720886ad-c6f4-4e1a-86bf-1d1871a55013'}
	><Quote
		><strong>Write</strong>&nbsp;in Notion,&nbsp;<strong>publish</strong>&nbsp;in Svelte,&nbsp;<strong
			>control</strong
		>&nbsp;with&nbsp;<em>notion2svelte</em></Quote
	></Magic
>
<br style="display:none;" />
<Magic blockId={'bf385444-460c-4278-b850-4681361221f1'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'e875c718-04a6-439f-a1b8-19e3502e5882'}><Divider /></Magic>
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
			<BulletedListItem>👘 Your style</BulletedListItem>
			<BulletedListItem>🤔 Your domain</BulletedListItem>
			<BulletedListItem>🪡 Infinite possibilities</BulletedListItem>
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic blockId={'61796918-fc47-49a4-afac-5fd27d353ed3'}
	><Header level="1">A little bit of background</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'7dceeab0-41f4-4336-9123-5ae1d3d7ed93'}
	><Toggle
		>The Long Story
		<span slot="children"
			><Header level="3">A Novel Idea</Header>
			<Paragraph>፠ 2015 ፠</Paragraph>
			<Paragraph>
				I made the mistake of saying, "Hey, this would make a good novel!" out loud. It was Saturday
				morning on a tropical island with family, on vacation from my gray job in a gray building
				developing endless prototypes for gray people at a gray company. A few of us had broken away
				from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one:
				a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.
			</Paragraph>
			<Paragraph>
				I could not tell you what was on my mind in the moments before The Muse slapped its sticker
				on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day,
				an&nbsp;<em>author!</em>” A few minutes earlier, the conversation had stalled in favor a
				full-bellied silence. My sister, who had been scrolling through something on her phone,
				finally gave the screen several taps and then placed the small slab face down on the table
				with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by
				Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought
				might work well with her son.
			</Paragraph>
			<Paragraph>
				The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool
				mid-morning breeze:&nbsp;<em
					>At what point are we, as parents, mere vehicles for the technology that's raising our
					children?</em
				>&nbsp;Sure, the advice had, in thisninstance, come from a post written by an Actual
				Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What
				would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with
				insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT
				cribs?
			</Paragraph>
			<Quote>This brain is expressing hunger</Quote><Quote
				>This brain is expressing exhaustion</Quote
			><Quote>This brain just shit itself</Quote><Paragraph>
				And if the skull caps succeed, what next?
			</Paragraph>
			<Divider />
			<Header level="3">Options Paralysis</Header>
			<Paragraph>
				I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the
				cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare
				and intense optimism. Now that I had a core question, I could write a novel. Right? I
				mean…why the hell not? By the time we got back to the hotel, my fingers were itching with
				fictions.&nbsp;
			</Paragraph>
			<Paragraph>
				There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I
				made to write stories. These usually amounted to little more than rambling monologues,
				incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character
				details. The trouble with writing by hand is that I'm one of those methodically-slow
				readers, and my handwriting tends toward illegibility. If writing is rewriting, and
				rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my
				laptop, where the limitations of paper gave way to the opposite problem: what writing app to
				choose?
			</Paragraph>
			<Paragraph>
				My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at
				canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what
				size, and whether Low Sodium is the better- or worse option.
			</Paragraph>
			<Paragraph>First there was Scrivener.</Paragraph>
			<Paragraph>Then there was Ulysses.</Paragraph>
			<Paragraph>
				And now, finally — after various flirtations and even repeat dalliances with the likes of
				Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even&nbsp;<em>DevonThink</em>,
				for Pete's sake! — I have settled on Notion as&nbsp;<em
					>the Thing That Least Often Feels Torturous</em
				>. (Mind you, this is for prose. For source, I usually turn to VS Code.)
			</Paragraph>
			<Paragraph>
				<strong>In case you weren't counting, that's over six years of&nbsp;</strong>pausing on the
				bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching
				from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on
				the edge of the tub, shower paused, spitting out solutions to the various problems one gives
				oneself when inventing characters and events and physics from scratch. Over&nbsp;<em
					>half a decade</em
				>&nbsp;of world-building notes that describe, in chaotic fits and starts, the future of our
				planet, from roughly yesterday until roughly 20,000 lifetimes hence.
			</Paragraph>
			<Paragraph>
				How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings,
				and&nbsp;<em>Eureka!</em>&nbsp;moments, transform them into a coherent story? More
				specifically, how to do this before running out of money and dying on the streets? In a
				world devoted to distraction, in a body that's already managed to reject its own colon (!),
				how can I transition to writing loads of shite that no one should ever read to writing loads
				of gems so enticing they make readers ache to shower me with bitcoin?
			</Paragraph>
			<Paragraph>2021</Paragraph>
			<Paragraph>
				The problem with knowing how to code is…you get&nbsp;<em>ideas</em>. You read a bit of&nbsp;<MagicLink
					href="https://docs.racket-lang.org/pollen/">Butterick</MagicLink
				>, and suddenly you can't shake the idea — arrogant, foolhardy — that your book is&nbsp;<em
					>alive…</em
				>too alive for the confines of Medium or ePub. But still, most of the text will be simple
				prose, so, for the most part, a simple export from Notion should suffice for most of what
				you publish.
			</Paragraph>
			<Paragraph>
				You want a platform that's free of arbitrary constraints. It must work on anyone's device.
				You want to be able to customize the output for print, just in case you manage to Andy Weir
				your way into the bizarro world of tree-pulp publishing. You want the option of toggling the
				swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your
				characters and (with any luck) your community.
			</Paragraph>
			<Paragraph>
				You want future-proof tech that can scale gracefully. It should work on as many devices as
				possible, without incurring high maintenance or design costs. One person should be able to
				keep it running without ever worrying that the entire edifice will crumble like a 12-story
				house of cards assembled without hot glue.
			</Paragraph>
			<Paragraph>
				What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello
				modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can
				make&nbsp;<MagicLink href="https://fngrng.navelgazer.club/">cool things</MagicLink
				>&nbsp;with you, even though my college degree was in theater!
			</Paragraph>
			<Paragraph />
			<Paragraph>
				So that's the background that you never wanted to know in the first place. I wanted a No
				Code<InlineColor value="blue"><strong>†</strong></InlineColor>&nbsp;workflow with Notion as
				the primary (but by no means exclusive!) source, and the good old WWW as the destination,
				with no built-in fences between me and potential readers (other than the ubiquitous barrier
				of natural obscurity), and, I&nbsp;<em>think</em>, I've found it!&nbsp;
			</Paragraph>
			<Paragraph>
				To learn more about how notion2svelte works, explore the pages below. You might want to
				start with&nbsp;
				<p
					style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
				>
					⚠️ k(t, url): <span
						style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
						>Untitled.</span
					>&nbsp;No URL provided for Untitled
				</p>
				,&nbsp;
				<p
					style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
				>
					⚠️ k(t, url): <span
						style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
						>Untitled.</span
					>&nbsp;No URL provided for Untitled
				</p>
				, or perhaps&nbsp;
				<p
					style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
				>
					⚠️ k(t, url): <span
						style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
						>Untitled.</span
					>&nbsp;No URL provided for Untitled
				</p>
				&nbsp;.
			</Paragraph>
			<Paragraph />
			<IndentGroup>
				<Paragraph>
					<InlineColor value="blue"><strong>†</strong></InlineColor><InlineColor value="blue"
						>Well…no code, aside from the occasional creation of new components</InlineColor
					>
				</Paragraph>
			</IndentGroup>
		</span></Toggle
	></Magic
>
<br style="display:none;" />
<Magic blockId={'1a3dbe14-a40b-4e9c-b68f-40ba89d8f61f'}
	><Toggle
		>The Short Version
		<span slot="children"
			><Paragraph>
				I like&nbsp;<strong>writing in Notion</strong>. I like&nbsp;<strong>coding in Svelte</strong
				>. I like the&nbsp;<strong>safety of git</strong>.
			</Paragraph>
			<Paragraph>
				That, in a nutshell, is what got me started on&nbsp;<em>notion2svelte.</em>
			</Paragraph>
		</span></Toggle
	></Magic
>
<br style="display:none;" />
<Magic blockId={'2d317da5-9aee-4068-95bf-ddac497eb3a4'}
	><Paragraph>
		It’s not the best project out there, but it’s the only one that does what I want, namely:
	</Paragraph>
	<IndentGroup>
		<BulletedListItem>Store intermediary artifacts to-disk</BulletedListItem>
		<IndentGroup>
			<Paragraph>
				<em>Benefits</em>
			</Paragraph>
			<BulletedListItem>My content is safely stored in git</BulletedListItem>
			<BulletedListItem
				>I can access the full, raw JSON for every page from within my app, allowing me to add
				interactivity that Notion doesn’t allow.</BulletedListItem
			>
			<IndentGroup>
				<Toggle
					><InlineColor value="gray">Example</InlineColor>
					<span slot="children"
						><Paragraph>
							Press the&nbsp;<InlineCode code="I" />&nbsp;key to toggle Inspection Mode on this
							page, then hover over various blocks. For instance, here’s a screenshot from me
							hovering over the title above after enabling Inspection Mode.
						</Paragraph>
						<IndentGroup>
							<Image url="/assets/about-notion2svelte/eb37be13-d1a8-4a1c-94a6-5dd915dda784.png"
								>Inspection Mode is&nbsp;<em>not</em>&nbsp;a feature of&nbsp;<em>notion2svelte.</em
								>&nbsp;Rather,&nbsp;<em>notion2svelte</em>&nbsp;<em>enables</em>&nbsp;this sort of
								thing by wrapping every component in a &lt;Magic> component.</Image
							>
						</IndentGroup>
						<Paragraph>
							(<MagicLink href="https://github.com/nvlgzr/notion2svelte/issues">Pester me</MagicLink
							>&nbsp;if you are reading this and I still haven’t gotten around to documenting the
							whole &lt;Magic> thing!)
						</Paragraph>
					</span></Toggle
				>
			</IndentGroup>
		</IndentGroup>
		<BulletedListItem
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
		<BulletedListItem>Write-your-own components</BulletedListItem>
		<IndentGroup>
			<Paragraph>
				<em>Benefits</em>
			</Paragraph>
			<BulletedListItem>Avoids constraining your creativity</BulletedListItem>
			<BulletedListItem>Keeps&nbsp;<em>notion2svelte</em>&nbsp;simple</BulletedListItem>
		</IndentGroup>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'bd881cf3-41e5-4c9e-bfa7-67c48734378b'}><Divider /></Magic>
<br style="display:none;" />
<Magic blockId={'e8965b5e-a183-45af-bbb8-e16d68b5e7ca'}
	><Header level="1">How it works, oversimplified</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'74c878b3-7a75-4063-8bfa-7c5fcc939256'}
	><Paragraph>
		Everything you see on this page was written in Notion, exported as .svelte files wherever you
		want (e.g., &nbsp;<InlineCode code="src/routes/pages/&lt;slug&gt;.svelte" />&nbsp;) using&nbsp;<em
			>notion2svelte</em
		>, then published normally using Svelte Kit.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'dfbc55c9-68a1-4ea3-ac5a-904e086dfe26'}
	><Image url="/assets/about-notion2svelte/dfbc55c9-68a1-4ea3-ac5a-904e086dfe26.png"
		><em>notion2svelte</em>, grossly over-simplified</Image
	>
</Magic>
<br style="display:none;" />
<Magic blockId={'6f8cf24b-d59b-470c-930f-9e9f24e201ca'}
	><Paragraph>
		After that, what you do with the results is up to you. Let’s use a simple callout as an example.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'e3a6ad2e-71a9-4492-84fe-f78df05f43d7'}
	><Callout emoji="🦦">Hi. I’m a sea otter.</Callout></Magic
>
<br style="display:none;" />
<Magic blockId={'306c4480-934c-47d3-9009-0a7142392a71'}
	><Paragraph>The Notion API renders the above callout thus:</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'650167b9-e25b-4b0f-b597-bd5db653cb7e'}
	><Code
		code={`{
  "object": "block",
  "id": "011d46be-4bf6-4817-a0da-a849ec16f1aa",
  "created_time": "2021-12-20T10:00:00.000Z",
  "last_edited_time": "2021-12-20T10:04:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "callout",
  "callout": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Hi. I’m a sea otter.",
          "link": null
        },
        "annotations": {
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
    "icon": {
      "type": "emoji",
      "emoji": "🦦"
    }
  }
}`}
		language="json"
	/></Magic
>
<br style="display:none;" />
<Magic blockId={'cc8354d9-c931-4426-9d88-9d7404b4850b'}
	><Paragraph>
		Obviously, most of this is just noise. What we mainly care about — given that we haven’t
		used&nbsp;<strong>bold</strong>,&nbsp;<em>italic</em>, etc. within the callout — is the emoji,
		the content, and the fact that this is a callout.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'7d1d1eb9-0fc1-4b24-920a-fa49efe38634'}
	><Code code={`<Callout emoji="🦦">Hi. I’m a sea otter.</Callout>`} language="html" /></Magic
>
<br style="display:none;" />
<Magic blockId={'50ec1a85-2e74-4e5d-a8d7-89deca211d6e'}
	><Paragraph>Ahhh! That’s better, right?</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'1d4fa03b-5b2a-4ff9-b218-31594083e686'}
	><ColumnList cols={2}
		><Column
			><Paragraph>
				After this point, it’s basically up to you! Do you want a simple, gray callout with minimal
				styling, like this:
			</Paragraph>
		</Column><Column
			><Image url="/assets/about-notion2svelte/70a6d0d1-1eaa-493e-8af4-cd1b69690c54.png" />
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic blockId={'af211539-99ae-483a-89b2-d68fee30f3eb'}
	><Toggle
		>Code for&nbsp;<em>Callout.svelte</em>&nbsp;(gray version)
		<span slot="children"
			><Code
				code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7Cg==">{}</script>

<div class="wrapper">
	<div class="emoji">{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciB7CgkJYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7CgkJYm9yZGVyOiAxcHggc29saWQgIzMzMzsKCQltYXJnaW46IDFyZW07CgkJcGFkZGluZzogMXJlbTsKCQlib3JkZXItcmFkaXVzOiAwLjVyZW07Cgl9CgoJLmVtb2ppIHsKCQlmb250LXNpemU6IDJyZW07Cgl9Cg=="></style>`}
				language="html"
			/><Paragraph />
		</span></Toggle
	></Magic
>
<br style="display:none;" />
<Magic blockId={'1db927d3-d05b-4684-94aa-443f131c3ce0'}
	><ColumnList cols={2}
		><Column
			><Paragraph>
				Or you might do something more colorful. Here’s the code (as of this writing) for this
				documentation’s&nbsp;<em>Callout.svelte</em>:
			</Paragraph>
		</Column><Column
			><Image url="/assets/about-notion2svelte/1f440d04-1010-43c2-89f5-05b39b51aef6.png" />
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic blockId={'70ac59c2-7b1f-40b9-81f0-46c7b99990ad'}
	><Toggle
		>Code for Callout.svelte (blue version)
		<span slot="children"
			><Code
				code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7Cg==">{}</script>

<div class="wrapper">
	<div class="emoji">{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciB7CgkJZGlzcGxheTogZmxleDsKCQltYXJnaW46IDFyZW0gMXJlbSAycmVtIDA7CgkJcGFkZGluZzogMnJlbSAycmVtIDAgMnJlbTsKCQlmb250OiAxLjI1cmVtLzEuNXJlbSAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwoJCWJhY2tncm91bmQtY29sb3I6IGhzbCgxOTgsIDEwMCUsIDk3JSk7CgkJYm9yZGVyOiA0cHggc29saWQgaHNsKDIwNiwgODglLCA3MCUpOwoJCWJvcmRlci1yYWRpdXM6IDAuNXJlbTsKCX0KCS5jYWxsb3V0IHsKCQlkaXNwbGF5OiBibG9jazsKCX0KCS5lbW9qaSB7CgkJbWFyZ2luLXJpZ2h0OiAwLjVlbTsKCQloZWlnaHQ6IDNyZW07CgkJd2lkdGg6IDNyZW07CgkJZm9udC1zaXplOiAzcmVtOwoJCWxpbmUtaGVpZ2h0OiAxLjE7Cgl9Cg=="></style>`}
				language="html"
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
				Anything Svelte allows you to do, you can usually do it!
			</Paragraph>
		</Column><Column
			><Image url="/assets/about-notion2svelte/3c907829-0848-414f-9504-3cbf0a79f701.png" />
			<Paragraph>↓ click! ↓</Paragraph>
			<Image url="/assets/about-notion2svelte/04f8b689-0308-49bf-8a39-b1d93069c530.png" />
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic blockId={'674d3963-ef56-4a2f-82ff-11f0ac87be8c'}
	><Toggle
		>Code for Callout.svelte (toggle version)
		<span slot="children"
			><Code
				code={`<script ✂prettier:content✂="CglleHBvcnQgbGV0IGVtb2ppID0gJyc7CgoJZXhwb3J0IGxldCBvcGVuID0gZmFsc2U7Cg==">{}</script>

<div class="wrapper {open ? 'open' : 'closed'}" on:click={() => (open = !open)}>
	<div class="emoji">{emoji}</div>
	{#if open}
		<div class="text">
			<div class="callout">
				<slot />
			</div>
			<slot name="children" />
		</div>
	{:else}
		<div class="text">⟩</div>
	{/if}
</div>

<style ✂prettier:content✂="Cgkud3JhcHBlciB7CgkJZGlzcGxheTogZmxleDsKCQltYXJnaW46IDFyZW0gMXJlbSAycmVtIDA7CgkJcGFkZGluZzogMnJlbSAycmVtIDAgMnJlbTsKCQlmb250OiAxLjI1cmVtLzEuNXJlbSAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwoJCWJhY2tncm91bmQtY29sb3I6IGhzbCgxOTgsIDEwMCUsIDk3JSk7CgkJYm9yZGVyOiA0cHggc29saWQgaHNsKDIwNiwgODglLCA3MCUpOwoJCWJvcmRlci1yYWRpdXM6IDAuNXJlbTsKCX0KCgkuY2xvc2VkIHsKCQl3aWR0aDogOHJlbTsKCX0KCgkuY2FsbG91dCB7CgkJZGlzcGxheTogYmxvY2s7Cgl9CgoJLmVtb2ppIHsKCQltYXJnaW4tcmlnaHQ6IDAuNWVtOwoJCWhlaWdodDogM3JlbTsKCQl3aWR0aDogM3JlbTsKCQlmb250LXNpemU6IDNyZW07CgkJbGluZS1oZWlnaHQ6IDEuMTsKCX0K"></style>`}
				language="html"
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
		look at the&nbsp;<InlineCode code="import" />&nbsp;statements rendered by&nbsp;<em
			>notion2svelte</em
		>.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'ce6adbc2-db45-480f-9e10-542335ba6cd5'}
	><Paragraph>Keeping with our Callout theme, here’s the equivalent import statement.</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'2cc815fa-2e1f-458f-afb6-dc61037adfd5'}
	><Code code={`import Callout from '$lib/notion2svelte/Callout.svelte';`} language="html" /></Magic
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
		For now, the fastest way to get started is to follow along with the video tutorial:
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'1405c655-d69f-4baa-90ef-0b8332f9f9cc'}
	><Paragraph>
		<em><strong>notion2svelte</strong></em><strong>&nbsp;in 10 minutes |</strong>&nbsp;<MagicLink
			href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
			>https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s</MagicLink
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
</Magic>
<br style="display:none;" />
<Magic blockId={'bbffb33e-f242-4d97-9f48-64a3ff7e815b'}
	><Paragraph>
		<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>https://github.com/nvlgzr/notion2svelte</MagicLink
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'b9a357c7-c780-451e-9b26-6dc27bb51a3f'}><Paragraph /></Magic>
<br style="display:none;" />
