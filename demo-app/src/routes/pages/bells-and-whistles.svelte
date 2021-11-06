<script>
	import Cover from '$lib/notion2svelte/Cover.svelte';
	import Title from '$lib/notion2svelte/Title.svelte';
	import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
	import Callout from '$lib/notion2svelte/Callout.svelte';
	import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
	import Divider from '$lib/notion2svelte/Divider.svelte';
	import Image from '$lib/notion2svelte/Image.svelte';
	import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';

	let curtainDrawn = false;
</script>

<svelte:head>
	<title>Test Page w/Some Bells and Whistles 🎉</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={'🦦'}
/>
<Title>Test Page w/Some Bells and Whistles 🎉</Title>

<button on:click={() => (curtainDrawn = !curtainDrawn)}
	>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button
>

{#if !curtainDrawn}
	<Divider />

	<br style="display:none;" />
	<h1>&thinsp;Here's some paragraphs about some stuff</h1>

	<br style="display:none;" />
	<div>
		<em>(Mostly penguins)</em>
	</div>

	<br style="display:none;" />
	<Callout emoji="💡"
		>I guess callouts just have to be treated as comments?<span slot="children"
			><div>
				At any rate, the "lorem" paragraphs below about penguins come, fwiw, from&thinsp;<a
					href="https://www.boom-online.co.uk/lorem-ipsum/##results"
					>https://www.boom-online.co.uk/lorem-ipsum/##results</a
				>.
			</div>
		</span></Callout
	>
	<br style="display:none;" />
	<div>
		Link to another&thinsp;
		<p
			style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
		>
			⚠️ k(t, url): <span
				style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
				>Notion page.</span
			>&nbsp;No slug found for page id 816f31ee96514a398960841d33a9f2d4
		</p>
	</div>

	<br style="display:none;" />
	<div>
		Eventually, plain_text isn't going to cut it. It doesn't display&thinsp;<em>italics</em
		>,&thinsp;<strong>bold</strong>,&thinsp;<s>strikethrough</s>,&thinsp;<InlineCode
			>code</InlineCode
		>,&thinsp;<InlineColor value="red"><strong>c</strong></InlineColor><InlineColor value="orange"
			><strong>o</strong></InlineColor
		><InlineColor value="yellow"><strong>l</strong></InlineColor><InlineColor value="green"
			><strong>o</strong></InlineColor
		><InlineColor value="blue"><strong>r</strong></InlineColor><InlineColor value="purple"
			><strong>s</strong></InlineColor
		>, or, of course,&thinsp;<a href="https://ilovelife.com">links</a>. (Let alone&thinsp;<em
			><strong>crazy</strong></em
		>&thinsp;<a href="http://navelgazer.club"><InlineColor value="purple">co</InlineColor></a><a
			href="http://navelgazer.club"
			><InlineColor value="green_background"><em>m</em></InlineColor></a
		><a href="http://navelgazer.club"><InlineColor value="purple">b</InlineColor></a><a
			href="http://navelgazer.club"><InlineColor value="purple"><strong>i</strong></InlineColor></a
		><a href="http://navelgazer.club"><strong>na</strong></a><a href="http://navelgazer.club"
			><InlineColor value="orange_background"><strong>ti</strong></InlineColor></a
		><a href="http://navelgazer.club"><InlineColor value="orange_background">o</InlineColor></a><a
			href="http://navelgazer.club">ns</a
		>&thinsp;of these.) Eventually, there's no reason to think&thinsp;<InlineCode
			>notion2svelte</InlineCode
		>&thinsp;couldn't also handle inline & block latex, and, well, anything Notion cares to expose!
	</div>

	<br style="display:none;" />
	<div>
		Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage.
		These are called&thinsp;<InlineColor value="red_background"
			>isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to
			live shorter lives than</InlineColor
		>&thinsp;normal<InlineColor value="yellow_background">&thinsp;penguins, as they are</InlineColor
		>&thinsp;not well-<InlineColor value="green">camouflaged</InlineColor>&thinsp;against the deep
		and are often passed over as mates.
	</div>

	<br style="display:none;" />
	<div>
		In addition to formatted text and links, we can also expect plenty of&thinsp;<InlineColor
			value="red_background">embedded</InlineColor
		>&thinsp;images, and (maybe) other media types. For now, images w/out sizing and alt=caption is
		good enough to be getting on.
	</div>

	<br style="display:none;" />
	<div>
		Although almost all penguin species are native to the Southern Hemisphere, they are not found
		only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live
		so far south. Several species live in the temperate zone;
	</div>

	<br style="display:none;" />
	<div>Several authors have suggested that penguins are a good example of Bergmann's Rule</div>

	<br style="display:none;" />
	<div>
		Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile,
		Namibia, New Zealand, and South Africa.
	</div>

	<br style="display:none;" />
	<div>
		Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and
		Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins
		to several hundred thousand in the case of king, macaroni and chinstrap penguins.
	</div>

	<br style="display:none;" />
	<div />

	<br style="display:none;" />
	<Divider />

	<br style="display:none;" />
	<h1>This is a header size 1&thinsp;<em>with formatting</em></h1>

	<br style="display:none;" />
	<h2>Header size 2</h2>

	<br style="display:none;" />
	<Image url="/images/bells-and-whistles/c877cf0a-9681-4e15-a321-bdd5c5bfce1f.jpg"
		>Captions, too, can inclue&thinsp;<em>italics</em>,&thinsp;<strong>bold</strong>,&thinsp;<s
			>strikethrough</s
		>,&thinsp;<InlineCode>code</InlineCode>,&thinsp;<InlineColor value="red"
			><strong>c</strong></InlineColor
		><InlineColor value="orange"><strong>o</strong></InlineColor><InlineColor value="yellow"
			><strong>l</strong></InlineColor
		><InlineColor value="green"><strong>o</strong></InlineColor><InlineColor value="blue"
			><strong>r</strong></InlineColor
		><InlineColor value="purple"><strong>s</strong></InlineColor>, and&thinsp;<a
			href="https://ilovelife.com">links</a
		></Image
	>

	<br style="display:none;" />
	<Image url="/images/bells-and-whistles/2a886060-dcff-46f3-87a1-fa80ea583025.jpg"
		>From unsplash</Image
	>

	<br style="display:none;" />
	<Image url="/images/bells-and-whistles/655a2330-d9fa-427c-b592-152d547c94c5.jpg"
		>cresting orca</Image
	>

	<br style="display:none;" />
	<h3>h3</h3>

	<br style="display:none;" />
	<Callout emoji="☣️"
		>*Note: the title has more than one element because I bolded the asterisk<span slot="children"
			><BulletedListItem>"This callout has two sub-blocks, btw"</BulletedListItem>
		</span></Callout
	>
	<br style="display:none;" />
	<TodoItem checked={false}>"I should finish this"</TodoItem>

	<br style="display:none;" />
	<TodoItem checked={true}>"This is finished"</TodoItem>

	<br style="display:none;" />
	<TodoItem checked={false}>"And one for good luck &thinsp;"</TodoItem>

	<br style="display:none;" />
	<div>This simple text block has 3 children</div>
	<IndentGroup>
		<div>1️⃣</div>
		<div>👬</div>
		<div>🕒</div>
	</IndentGroup>

	<br style="display:none;" />
	<div />

	<br style="display:none;" />
	<Toggle
		>Toggle label
		<br />
		soft return!
		<span slot="children"
			><div>Toggle contents</div>
			<div>More toggle contents</div>
		</span></Toggle
	>
	<br style="display:none;" />
	<p
		style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
	>
		⚠️ child_page: <span
			style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
			>Inline subpage w/no content, icon, or cover.</span
		>&nbsp;has no content
	</p>
	<br style="display:none;" />
	<BulletedListItem>"This is a&thinsp;<InlineCode>bulleted_list_item</InlineCode>"</BulletedListItem
	>

	<br style="display:none;" />
	<BulletedListItem>"And here's another one"</BulletedListItem>
	<IndentGroup>
		<BulletedListItem
			>"All good things come in threes, so they say, but this 3rd bullet point is nested, so
			presumably only shows up by getting children of the parent block?"</BulletedListItem
		>
	</IndentGroup>

	<br style="display:none;" />
	<NumberedListItem number="1">
		This is a&thinsp;<InlineCode>numbered_list_item</InlineCode></NumberedListItem
	>

	<br style="display:none;" />
	<NumberedListItem number="2">What numbered item is this? 1 or 2? (hint: it's 2)</NumberedListItem>

	<br style="display:none;" />
	<NumberedListItem number="3">Good thing (because it's number 3</NumberedListItem>

	<br style="display:none;" />
	<Quote>Why aren't quotes supported? This is insane?</Quote>
	<br style="display:none;" />
	<Divider />

	<br style="display:none;" />
	<div>↑ Dividers are now supported! 8D</div>

	<br style="display:none;" />
	<div>↑ Whole-block page links are also, I believe, not supported :(</div>

	<br style="display:none;" />
	<div>
		Would be cool for&thinsp;<InlineCode>ouroboros</InlineCode>&thinsp;to support latex —&thinsp;⟣<InlineCode
			>E = mc^2</InlineCode
		>⟢&thinsp;— and whatnot
	</div>

	<br style="display:none;" />
	<div />

	<br style="display:none;" />
	<div>↑ empty block</div>

	<br style="display:none;" />
	<div />

	<br style="display:none;" />
	<div>
		Whoa. Check it out. Sub-pages are currently have their children rendered inline, which is why
		Images Sub-Page isn't shown here, but instead we see its images, indented ↓!
	</div>

	<br style="display:none;" />
	<ChildPage title="Images Sub-Page"
		><Image url="/images/bells-and-whistles/f3cee0d8-b99c-4bb0-8004-ebf84e83c165.jpg"
			>Obsolescence</Image
		>
		<div>↓ image block</div>
		<Image url="/images/bells-and-whistles/e639ccd6-3a44-43cb-a020-b1bd52454a19.jpg"
			>Aphid Caption</Image
		>
		<Image url="/images/bells-and-whistles/b27dd7c2-235a-482a-af83-80595baeebae.jpg"
			>I'm guessing presentation sizing info isn't part of images. This one's identical to-, but
			presented smaller than-, the first</Image
		>
	</ChildPage>
	<br style="display:none;" />
	<h1>Synced Blocks</h1>

	<br style="display:none;" />
	<h1>3 Columns</h1>

	<br style="display:none;" />
	column_list<IndentGroup>
		column<IndentGroup>
			<div>
				I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?
			</div>
		</IndentGroup>
		column<IndentGroup>
			<div>
				I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?
			</div>
		</IndentGroup>
		column<IndentGroup>
			<div>
				I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?
			</div>
		</IndentGroup>
	</IndentGroup>

	<br style="display:none;" />
{:else}
	<h1>Blocks</h1>
	<pre>{JSON.stringify([
  {
    "object": "block",
    "id": "8d749953-c2f4-4314-be4b-8b9d68b4b69c",
    "created_time": "2021-11-01T03:00:00.000Z",
    "last_edited_time": "2021-11-01T03:03:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  },
  {
    "object": "block",
    "id": "1aca2b38-169f-412f-93d6-81dd6b59b19b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-11-05T00:26:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": " Here's some paragraphs about some stuff",
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
          "plain_text": " Here's some paragraphs about some stuff",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "91f7d335-e78e-49f1-839d-d87809ab262f",
    "created_time": "2021-09-20T23:36:00.000Z",
    "last_edited_time": "2021-09-20T23:36:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "(Mostly penguins)",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "(Mostly penguins)",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f862ec49-86ca-440d-9c96-abbf21a79225",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-11-01T03:44:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "callout",
    "callout": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "I guess callouts just have to be treated as comments?",
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
          "plain_text": "I guess callouts just have to be treated as comments?",
          "href": null
        }
      ],
      "icon": {
        "type": "emoji",
        "emoji": "💡"
      }
    },
    "blocks": [
      {
        "object": "block",
        "id": "4078c58c-2aa3-4f80-91ee-e4937b301f3a",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "At any rate, the \"lorem\" paragraphs below about penguins come, fwiw, from ",
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
              "plain_text": "At any rate, the \"lorem\" paragraphs below about penguins come, fwiw, from ",
              "href": null
            },
            {
              "type": "text",
              "text": {
                "content": "https://www.boom-online.co.uk/lorem-ipsum/##results",
                "link": {
                  "url": "https://www.boom-online.co.uk/lorem-ipsum/##results"
                }
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": "https://www.boom-online.co.uk/lorem-ipsum/##results",
              "href": "https://www.boom-online.co.uk/lorem-ipsum/##results"
            },
            {
              "type": "text",
              "text": {
                "content": ".",
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
              "plain_text": ".",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "69871bc6-2a89-4e3f-87a7-4c71fad3849b",
    "created_time": "2021-09-20T10:11:00.000Z",
    "last_edited_time": "2021-09-20T10:15:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Link to another ",
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
          "plain_text": "Link to another ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "Notion page",
            "link": {
              "url": "/816f31ee96514a398960841d33a9f2d4"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Notion page",
          "href": "/816f31ee96514a398960841d33a9f2d4"
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f1183c50-4b09-4203-a55a-588cc42d7cc7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Eventually, plain_text isn't going to cut it. It doesn't display ",
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
          "plain_text": "Eventually, plain_text isn't going to cut it. It doesn't display ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "italics",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "italics",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "bold",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "bold",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "strikethrough",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": true,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "strikethrough",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "code",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "code",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "c",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red"
          },
          "plain_text": "c",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "blue"
          },
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", or, of course, ",
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
          "plain_text": ", or, of course, ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "links",
            "link": {
              "url": "https://ilovelife.com"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "links",
          "href": "https://ilovelife.com"
        },
        {
          "type": "text",
          "text": {
            "content": ". (Let alone ",
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
          "plain_text": ". (Let alone ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "crazy",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "crazy",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " ",
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
          "plain_text": " ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "co",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "co",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "m",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green_background"
          },
          "plain_text": "m",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "b",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "b",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "i",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "i",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "na",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "na",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "ti",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange_background"
          },
          "plain_text": "ti",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange_background"
          },
          "plain_text": "o",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "ns",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "ns",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": " of these.) Eventually, there's no reason to think ",
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
          "plain_text": " of these.) Eventually, there's no reason to think ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "notion2svelte",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "notion2svelte",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " couldn't also handle inline & block latex, and, well, anything Notion cares to expose!",
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
          "plain_text": " couldn't also handle inline & block latex, and, well, anything Notion cares to expose!",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "86ab1425-3931-44bd-b010-3a75422b75fc",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage. These are called ",
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
          "plain_text": "Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage. These are called ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to live shorter lives than",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to live shorter lives than",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " normal",
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
          "plain_text": " normal",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " penguins, as they are",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow_background"
          },
          "plain_text": " penguins, as they are",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " not well-",
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
          "plain_text": " not well-",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "camouflaged",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "camouflaged",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " against the deep and are often passed over as mates.",
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
          "plain_text": " against the deep and are often passed over as mates.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "2b83405d-e15c-4877-ba12-f87526bdbc83",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "In addition to formatted text and links, we can also expect plenty of ",
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
          "plain_text": "In addition to formatted text and links, we can also expect plenty of ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "embedded",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "embedded",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " images, and (maybe) other media types. For now, images w/out sizing and alt=caption is good enough to be getting on.",
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
          "plain_text": " images, and (maybe) other media types. For now, images w/out sizing and alt=caption is good enough to be getting on.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "debc298d-8fb5-4c7f-8a00-41d84d48ae5f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Although almost all penguin species are native to the Southern Hemisphere, they are not found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. Several species live in the temperate zone;",
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
          "plain_text": "Although almost all penguin species are native to the Southern Hemisphere, they are not found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. Several species live in the temperate zone;",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "db39727b-1057-4eeb-8a47-6a6f3a9b7bfd",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Several authors have suggested that penguins are a good example of Bergmann's Rule",
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
          "plain_text": "Several authors have suggested that penguins are a good example of Bergmann's Rule",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e666a879-0009-46d0-bc59-ffe677b18963",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile, Namibia, New Zealand, and South Africa.",
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
          "plain_text": "Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile, Namibia, New Zealand, and South Africa.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "32fa47dc-5a9e-4aeb-b3e0-1142530e3556",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins to several hundred thousand in the case of king, macaroni and chinstrap penguins.",
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
          "plain_text": "Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins to several hundred thousand in the case of king, macaroni and chinstrap penguins.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "cdd23b0b-e9c9-4f78-b181-0bee34b0ef63",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "d81c01f3-e5de-4425-9605-2982e6c29c5d",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  },
  {
    "object": "block",
    "id": "f71d7859-80a6-4179-af1c-9bcdae9ba72c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-28T10:00:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a header size 1 ",
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
          "plain_text": "This is a header size 1 ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "with formatting",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "with formatting",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "46ca3835-bdb8-45ca-acde-dcb3510864b5",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_2",
    "heading_2": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Header size 2",
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
          "plain_text": "Header size 2",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "c877cf0a-9681-4e15-a321-bdd5c5bfce1f",
    "created_time": "2021-09-28T09:06:00.000Z",
    "last_edited_time": "2021-09-28T09:09:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "Captions, too, can inclue ",
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
          "plain_text": "Captions, too, can inclue ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "italics",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "italics",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "bold",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "bold",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "strikethrough",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": true,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "strikethrough",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "code",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "code",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", ",
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
          "plain_text": ", ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "c",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red"
          },
          "plain_text": "c",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "blue"
          },
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", and ",
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
          "plain_text": ", and ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "links",
            "link": {
              "url": "https://ilovelife.com"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "links",
          "href": "https://ilovelife.com"
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211106T093217Z&X-Amz-Expires=3600&X-Amz-Signature=f889d4c0d1b95853e4e63969aae4eb4ce299b3ccb481951ba85ecd122864eb84&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-11-06T10:32:17.867Z"
      }
    }
  },
  {
    "object": "block",
    "id": "2a886060-dcff-46f3-87a1-fa80ea583025",
    "created_time": "2021-09-28T09:06:00.000Z",
    "last_edited_time": "2021-09-28T09:06:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "From unsplash",
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
          "plain_text": "From unsplash",
          "href": null
        }
      ],
      "type": "external",
      "external": {
        "url": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
      }
    }
  },
  {
    "object": "block",
    "id": "655a2330-d9fa-427c-b592-152d547c94c5",
    "created_time": "2021-09-28T09:06:00.000Z",
    "last_edited_time": "2021-09-28T09:06:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "cresting orca",
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
          "plain_text": "cresting orca",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c7ef8e9-8eb7-4b76-ab4a-9c859e998a8e/IMG_0741.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211106T093217Z&X-Amz-Expires=3600&X-Amz-Signature=81146024d0d18a912cd72e75483c2cf5813eac09cbf8ab72f304e5f5f3aa1624&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-11-06T10:32:17.878Z"
      }
    }
  },
  {
    "object": "block",
    "id": "7d405da9-5cec-4724-b56b-391f21542043",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_3",
    "heading_3": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "h3",
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
          "plain_text": "h3",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "7f986cdb-e93b-4665-a027-02007184b2d4",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "callout",
    "callout": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "*Note: the title has more than one element because I bolded the asterisk",
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
          "plain_text": "*Note: the title has more than one element because I bolded the asterisk",
          "href": null
        }
      ],
      "icon": {
        "type": "emoji",
        "emoji": "☣️"
      }
    },
    "blocks": [
      {
        "object": "block",
        "id": "fbb374de-b3a9-4b42-8529-d020be53ed07",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "bulleted_list_item",
        "bulleted_list_item": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "This callout has two sub-blocks, btw",
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
              "plain_text": "This callout has two sub-blocks, btw",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "d9c985a2-67a8-42bf-8a9a-92d6693e7e05",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "I should finish this",
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
          "plain_text": "I should finish this",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "046218a7-08ce-48ba-8b3b-2c3218d5d43e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is finished",
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
          "plain_text": "This is finished",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "5f01eab5-e7d1-4988-a064-259ae3628b7f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "And one for good luck    ",
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
          "plain_text": "And one for good luck    ",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "dfd35b92-2351-44d7-a3c3-3ccf785db494",
    "created_time": "2021-09-20T21:47:00.000Z",
    "last_edited_time": "2021-09-20T21:48:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This simple text block has 3 children",
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
          "plain_text": "This simple text block has 3 children",
          "href": null
        }
      ]
    },
    "blocks": [
      {
        "object": "block",
        "id": "9540076a-c281-408a-ad7c-820d9b88c2a7",
        "created_time": "2021-09-20T21:47:00.000Z",
        "last_edited_time": "2021-09-20T21:47:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "1️⃣",
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
              "plain_text": "1️⃣",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "4a53af32-a646-44f8-abb6-eeb331a63f5b",
        "created_time": "2021-09-20T21:47:00.000Z",
        "last_edited_time": "2021-09-20T21:48:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "👬",
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
              "plain_text": "👬",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "5c4dacf1-8f90-4fea-80c6-2c94312f72ce",
        "created_time": "2021-09-20T21:48:00.000Z",
        "last_edited_time": "2021-09-20T21:48:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "🕒",
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
              "plain_text": "🕒",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "597f34c5-8acc-45d0-88be-fd726b30161f",
    "created_time": "2021-09-20T21:47:00.000Z",
    "last_edited_time": "2021-09-20T21:48:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "8c8a2656-3a2f-4978-a3c2-88937f71a613",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "toggle",
    "toggle": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Toggle label\nsoft return!",
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
          "plain_text": "Toggle label\nsoft return!",
          "href": null
        }
      ]
    },
    "blocks": [
      {
        "object": "block",
        "id": "55a65dfe-f717-46e9-a07d-dabb5dd2bfad",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "Toggle contents",
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
              "plain_text": "Toggle contents",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "3ceeec79-20b1-4331-9026-b0552168c4ed",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "More toggle contents",
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
              "plain_text": "More toggle contents",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "1b46fc3d-1bb3-4351-8abe-f2fbc2562f90",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": "Inline subpage w/no content, icon, or cover"
    }
  },
  {
    "object": "block",
    "id": "25a41cc0-1e6e-42f5-85fe-9a1928b95e4e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a ",
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
          "plain_text": "This is a ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "bulleted_list_item",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "bulleted_list_item",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "d95ca015-5625-499f-9dd7-e629694f3e99",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "And here's another one",
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
          "plain_text": "And here's another one",
          "href": null
        }
      ]
    },
    "blocks": [
      {
        "object": "block",
        "id": "3de7536c-3c0b-4706-847e-f15d5664519a",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "bulleted_list_item",
        "bulleted_list_item": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "All good things come in threes, so they say, but this 3rd bullet point is nested, so presumably only shows up by getting children of the parent block?",
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
              "plain_text": "All good things come in threes, so they say, but this 3rd bullet point is nested, so presumably only shows up by getting children of the parent block?",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "d7565143-adf1-45c7-b17f-e70943425bb7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a ",
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
          "plain_text": "This is a ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "numbered_list_item",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "numbered_list_item",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "4eba6149-47f4-47b6-91fe-6baf7962947f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "What numbered item is this? 1 or 2? (hint: it's 2)",
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
          "plain_text": "What numbered item is this? 1 or 2? (hint: it's 2)",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "5477436f-7760-41b0-a800-b306bd2695c0",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Good thing (because it's number 3",
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
          "plain_text": "Good thing (because it's number 3",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "8c593de7-7950-4011-a707-340fa2b29aa9",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "quote",
    "quote": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Why aren't quotes supported? This is insane?",
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
          "plain_text": "Why aren't quotes supported? This is insane?",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "a0fa14c9-a200-4527-b8ad-9798f88ac13c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  },
  {
    "object": "block",
    "id": "38fe9223-4636-45f9-a0c9-fdff7cbbb779",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-10-31T10:06:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ Dividers are now supported! 8D",
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
          "plain_text": "↑ Dividers are now supported! 8D",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e5ef9242-55d5-4c60-ba9a-0b70fdafa07b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "86402c3d-7749-4f02-a3a9-ba59dd0748a1",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ Whole-block page links are also, I believe, not supported :(",
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
          "plain_text": "↑ Whole-block page links are also, I believe, not supported :(",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "09ffb394-800c-4d2e-b4f2-c7cf0a2de7ce",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Would be cool for ",
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
          "plain_text": "Would be cool for ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "ouroboros",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "ouroboros",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " to support latex — ",
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
          "plain_text": " to support latex — ",
          "href": null
        },
        {
          "type": "equation",
          "equation": {
            "expression": "E = mc^2"
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "E = mc^2",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " — and whatnot",
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
          "plain_text": " — and whatnot",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "b9082e4a-ed48-4ec2-acd5-57c78cf1681a",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "6209fbaf-915a-44ab-8c41-c033ebbfe620",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ empty block",
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
          "plain_text": "↑ empty block",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "c546e0f9-0595-4799-a1e0-f9972e455b38",
    "created_time": "2021-09-28T09:06:00.000Z",
    "last_edited_time": "2021-09-28T09:06:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "6b5c0bda-d1ae-4fc2-b4b6-468d05d9f19c",
    "created_time": "2021-09-20T23:34:00.000Z",
    "last_edited_time": "2021-09-28T09:06:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Whoa. Check it out. Sub-pages are currently have their children rendered inline, which is why Images Sub-Page isn't shown here, but instead we see its images, indented ↓!",
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
          "plain_text": "Whoa. Check it out. Sub-pages are currently have their children rendered inline, which is why Images Sub-Page isn't shown here, but instead we see its images, indented ↓!",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "b9d69a79-0544-4908-b449-cdba8550df08",
    "created_time": "2021-09-20T23:35:00.000Z",
    "last_edited_time": "2021-09-28T09:06:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": "Images Sub-Page"
    },
    "blocks": [
      {
        "object": "block",
        "id": "f3cee0d8-b99c-4bb0-8004-ebf84e83c165",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T23:36:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "image",
        "image": {
          "caption": [
            {
              "type": "text",
              "text": {
                "content": "Obsolescence",
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
              "plain_text": "Obsolescence",
              "href": null
            }
          ],
          "type": "file",
          "file": {
            "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4fb6a51-b030-4964-be16-7d43e1518546/IMG_0242.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211106T093218Z&X-Amz-Expires=3600&X-Amz-Signature=0435c2e663856a47ed1ffbc0fb9f9475346dda3753d9fdaff245649b66d15650&X-Amz-SignedHeaders=host",
            "expiry_time": "2021-11-06T10:32:18.009Z"
          }
        }
      },
      {
        "object": "block",
        "id": "11f72f5f-7152-4eda-835b-0d6e2925efe8",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T23:40:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "↓ image block",
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
              "plain_text": "↓ image block",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "e639ccd6-3a44-43cb-a020-b1bd52454a19",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T23:40:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "image",
        "image": {
          "caption": [
            {
              "type": "text",
              "text": {
                "content": "Aphid Caption",
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
              "plain_text": "Aphid Caption",
              "href": null
            }
          ],
          "type": "file",
          "file": {
            "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211106T093218Z&X-Amz-Expires=3600&X-Amz-Signature=f5f66f4a596e303ffbe1989c399203471699c0c022ca549a5ca1ed7507f68ee5&X-Amz-SignedHeaders=host",
            "expiry_time": "2021-11-06T10:32:18.007Z"
          }
        }
      },
      {
        "object": "block",
        "id": "b27dd7c2-235a-482a-af83-80595baeebae",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T23:40:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "image",
        "image": {
          "caption": [
            {
              "type": "text",
              "text": {
                "content": "I'm guessing presentation sizing info isn't part of images. This one's identical to-, but presented smaller than-, the first",
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
              "plain_text": "I'm guessing presentation sizing info isn't part of images. This one's identical to-, but presented smaller than-, the first",
              "href": null
            }
          ],
          "type": "file",
          "file": {
            "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211106T093218Z&X-Amz-Expires=3600&X-Amz-Signature=f5f66f4a596e303ffbe1989c399203471699c0c022ca549a5ca1ed7507f68ee5&X-Amz-SignedHeaders=host",
            "expiry_time": "2021-11-06T10:32:18.008Z"
          }
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "43f48af4-5d47-445e-b676-acba023eadd7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Synced Blocks",
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
          "plain_text": "Synced Blocks",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f7f29332-919a-4b3a-a70b-bcd2cd33e66c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "7af83e89-caae-460d-ac1f-d0d557f7ffd9",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "eef9c1c4-fe12-450e-8ef5-5de6b6f7460e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "3 Columns",
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
          "plain_text": "3 Columns",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "b55eb00b-22b1-4fa3-a48a-ba26feae584b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "column_list",
    "column_list": {},
    "blocks": [
      {
        "object": "block",
        "id": "c07959d4-01c4-438f-91d1-267a5ec63c57",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": true,
        "archived": false,
        "type": "column",
        "column": {},
        "blocks": [
          {
            "object": "block",
            "id": "674cd117-fb68-4b19-8ee9-79f998a878dc",
            "created_time": "2021-09-20T10:05:00.000Z",
            "last_edited_time": "2021-09-20T10:05:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": {
                    "content": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
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
                  "plain_text": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
                  "href": null
                }
              ]
            }
          }
        ]
      },
      {
        "object": "block",
        "id": "1b1e463e-66f1-42ac-9040-ec8590ce80f6",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": true,
        "archived": false,
        "type": "column",
        "column": {},
        "blocks": [
          {
            "object": "block",
            "id": "832fae03-5bac-45f8-9c44-77d9ebdb5c70",
            "created_time": "2021-09-20T10:05:00.000Z",
            "last_edited_time": "2021-09-20T10:05:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": {
                    "content": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
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
                  "plain_text": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
                  "href": null
                }
              ]
            }
          }
        ]
      },
      {
        "object": "block",
        "id": "38834f3e-d361-47fd-9c13-23381ad4cfa2",
        "created_time": "2021-09-20T10:05:00.000Z",
        "last_edited_time": "2021-09-20T10:05:00.000Z",
        "has_children": true,
        "archived": false,
        "type": "column",
        "column": {},
        "blocks": [
          {
            "object": "block",
            "id": "e3fe4148-ad82-450f-8804-cb7a3d19d2d0",
            "created_time": "2021-09-20T10:05:00.000Z",
            "last_edited_time": "2021-09-20T10:05:00.000Z",
            "has_children": false,
            "archived": false,
            "type": "paragraph",
            "paragraph": {
              "text": [
                {
                  "type": "text",
                  "text": {
                    "content": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
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
                  "plain_text": "I'm also guessing that side-by-side stacking info isn't passed on by the API, amiright?",
                  "href": null
                }
              ]
            }
          }
        ]
      }
    ]
  }
], null, 2)}</pre>
	<h1>Dis Page</h1>
	<pre>{JSON.stringify({
  "object": "page",
  "id": "6bca4379-f362-45a6-90cf-d35beebba87a",
  "created_time": "2021-09-20T10:05:00.000Z",
  "last_edited_time": "2021-11-05T23:32:00.000Z",
  "cover": {
    "type": "external",
    "external": {
      "url": "https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
    }
  },
  "icon": {
    "type": "emoji",
    "emoji": "🦦"
  },
  "parent": {
    "type": "database_id",
    "database_id": "c317033a-f18a-479f-bbfb-7072cc7f53da"
  },
  "archived": false,
  "properties": {
    "Slug": {
      "id": "Yj%3E%3C",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "bells-and-whistles",
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
          "plain_text": "bells-and-whistles",
          "href": null
        }
      ]
    },
    "Status": {
      "id": "Yyjg",
      "type": "select",
      "select": {
        "id": "2d2d6d67-3785-4f26-97e0-02ec594cb931",
        "name": "Publish me!",
        "color": "pink"
      }
    },
    "URL": {
      "id": "lKGS",
      "type": "url",
      "url": null
    },
    "Title": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "Test Page",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Test Page",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " w/Some Bells and Whistles 🎉",
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
          "plain_text": " w/Some Bells and Whistles 🎉",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Test-Page-w-Some-Bells-and-Whistles-6bca4379f36245a690cfd35beebba87a",
  "blocks": "…see above"
}, null, 2)}</pre>
{/if}
