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
	<title>Introducing notion2svelte</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={'/assets/about-notion2svelte/icon.png'}
/>
<Magic sourceJSON={undefined}><Title>Introducing notion2svelte</Title></Magic>

<Magic
	sourceJSON={{
		object: 'block',
		id: 'a9f42ae7-9c5e-4610-afc8-15d3db4b20a5',
		created_time: '2021-12-12T20:38:00.000Z',
		last_edited_time: '2021-12-12T20:38:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: []
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '299f612f-e1cd-4e88-b886-feb35132b68c',
		created_time: '2021-12-12T20:38:00.000Z',
		last_edited_time: '2021-12-19T23:52:00.000Z',
		has_children: false,
		archived: false,
		type: 'quote',
		quote: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Write',
						link: null
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Write',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' in Notion, ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' in Notion, ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'publish',
						link: null
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'publish',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' in Svelte, ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' in Svelte, ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'control',
						link: null
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'control',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' with ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' with ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
						link: null
					},
					annotations: {
						bold: false,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'notion2svelte',
					href: null
				}
			]
		}
	}}
	><Quote
		><strong>Write</strong>&nbsp;in Notion,&nbsp;<strong>publish</strong>&nbsp;in Svelte,&nbsp;<strong
			>control</strong
		>&nbsp;with&nbsp;<em>notion2svelte</em></Quote
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '14277349-e2ba-448b-8883-c5cfeb9624e2',
		created_time: '2021-12-03T05:32:00.000Z',
		last_edited_time: '2021-12-03T05:32:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: []
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '8100913b-c185-40a4-aba7-cb7e2da199d5',
		created_time: '2021-12-02T22:53:00.000Z',
		last_edited_time: '2021-12-02T22:53:00.000Z',
		has_children: false,
		archived: false,
		type: 'divider',
		divider: {}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '775d645c-d32d-438b-882d-a945b5ad1a90',
		created_time: '2021-12-02T22:23:00.000Z',
		last_edited_time: '2021-12-19T23:05:00.000Z',
		has_children: true,
		archived: false,
		type: 'column_list',
		column_list: {},
		blocks: [
			{
				object: 'block',
				id: '91402850-1ac9-47c6-9b85-aea136b5b2a9',
				created_time: '2021-12-02T22:23:00.000Z',
				last_edited_time: '2021-12-19T23:06:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: '5ad9351a-0f44-45c7-89c9-0e51d70f1b99',
						created_time: '2021-12-02T22:23:00.000Z',
						last_edited_time: '2021-12-19T22:48:00.000Z',
						has_children: false,
						archived: false,
						type: 'heading_2',
						heading_2: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Source (Notion)',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Source (Notion)',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '162bca62-5a93-4d07-85e7-a186c8b8265b',
						created_time: '2021-12-19T23:06:00.000Z',
						last_edited_time: '2021-12-19T23:06:00.000Z',
						has_children: false,
						archived: false,
						type: 'image',
						image: {
							caption: [],
							type: 'file',
							file: {
								url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cd6ca920-8720-4fdd-bafa-02578e54e4ed/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211220T102724Z&X-Amz-Expires=3600&X-Amz-Signature=7aa971113c679b3b4c1a742dcdb8c1da59fa7bf944102cf1488e59a51d55762f&X-Amz-SignedHeaders=host&x-id=GetObject',
								expiry_time: '2021-12-20T11:27:24.066Z'
							}
						}
					},
					{
						object: 'block',
						id: '5b244198-2703-4db3-971c-5e5813bddd63',
						created_time: '2021-12-03T20:43:00.000Z',
						last_edited_time: '2021-12-12T20:36:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '😃 Awesome editing experience',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '😃 Awesome editing experience',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '4c270d55-edb7-43cc-9cd8-6116e396d4be',
						created_time: '2021-12-03T08:19:00.000Z',
						last_edited_time: '2021-12-12T20:37:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '🤨 Domain-locked to ',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '🤨 Domain-locked to ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'notion.so',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'notion.so',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: 'f89f1cda-b8d9-4f4a-8879-053586c7fa83',
						created_time: '2021-12-03T08:20:00.000Z',
						last_edited_time: '2021-12-19T22:59:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '😐 Proprietary limitations',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '😐 Proprietary limitations',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: '1ea83eac-dd3c-4382-b661-930f008f4417',
				created_time: '2021-12-02T22:23:00.000Z',
				last_edited_time: '2021-12-19T23:08:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: 'a3d1c2a4-a7d5-4ffa-a699-14be9d447b00',
						created_time: '2021-12-02T22:23:00.000Z',
						last_edited_time: '2021-12-19T23:00:00.000Z',
						has_children: false,
						archived: false,
						type: 'heading_2',
						heading_2: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Destination (Svelte)',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Destination (Svelte)',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '83019813-e27f-41f7-844f-3945bf1214c0',
						created_time: '2021-12-19T23:07:00.000Z',
						last_edited_time: '2021-12-19T23:07:00.000Z',
						has_children: false,
						archived: false,
						type: 'image',
						image: {
							caption: [],
							type: 'file',
							file: {
								url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0ed159d5-2d44-4146-9926-1d60d3598a62/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211220T102724Z&X-Amz-Expires=3600&X-Amz-Signature=6982195de79bca28dfe11c672891295a9e7b85a9ff87dc6bca5e8a6a81b0eb1d&X-Amz-SignedHeaders=host&x-id=GetObject',
								expiry_time: '2021-12-20T11:27:24.052Z'
							}
						}
					},
					{
						object: 'block',
						id: '840b5de6-e71e-46f6-89e2-a7ffafedc9bd',
						created_time: '2021-12-12T20:41:00.000Z',
						last_edited_time: '2021-12-19T22:59:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '👘 Your style',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '👘 Your style',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '9e97f85c-5933-4c75-9785-8ff516f6fa85',
						created_time: '2021-12-03T08:17:00.000Z',
						last_edited_time: '2021-12-19T22:59:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '🤔 Your domain',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '🤔 Your domain',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '5d108b37-79d7-47b2-9d8f-7b91c3b379d8',
						created_time: '2021-12-12T20:42:00.000Z',
						last_edited_time: '2021-12-12T20:44:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '🪡 Infinite possibilities',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '🪡 Infinite possibilities',
									href: null
								}
							]
						}
					}
				]
			}
		]
	}}
	><ColumnList cols={2}
		><Column
			><Header level="2">Source (Notion)</Header>
			<Image url="/assets/about-notion2svelte/162bca62-5a93-4d07-85e7-a186c8b8265b.png" />
			<BulletedListItem>😃 Awesome editing experience</BulletedListItem>
			<BulletedListItem>🤨 Domain-locked to&nbsp;<em>notion.so</em></BulletedListItem>
			<BulletedListItem>😐 Proprietary limitations</BulletedListItem>
		</Column><Column
			><Header level="2">Destination (Svelte)</Header>
			<Image url="/assets/about-notion2svelte/83019813-e27f-41f7-844f-3945bf1214c0.png" />
			<BulletedListItem>👘 Your style</BulletedListItem>
			<BulletedListItem>🤔 Your domain</BulletedListItem>
			<BulletedListItem>🪡 Infinite possibilities</BulletedListItem>
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'b3b2abbb-4dfd-4305-b59b-02a3eabfdf30',
		created_time: '2021-12-02T23:08:00.000Z',
		last_edited_time: '2021-12-20T03:12:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'A little bit of background',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'A little bit of background',
					href: null
				}
			]
		}
	}}
	><Header level="1">A little bit of background</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'c3ef5111-5fbc-45d7-9231-8f6ad9ea48a4',
		created_time: '2021-12-19T23:12:00.000Z',
		last_edited_time: '2021-12-20T03:12:00.000Z',
		has_children: true,
		archived: false,
		type: 'toggle',
		toggle: {
			text: [
				{
					type: 'text',
					text: {
						content: 'The Long Story',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'The Long Story',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: '363ee185-f5fc-4c6b-9b84-69501016ee9f',
				created_time: '2021-12-02T23:11:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_3',
				heading_3: {
					text: [
						{
							type: 'text',
							text: {
								content: 'A Novel Idea',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'A Novel Idea',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '61780f45-06e6-43d8-bd67-5a91af24c87f',
				created_time: '2021-12-04T23:42:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '፠ 2015 ፠',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '፠ 2015 ፠',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'a4bf8591-1449-4e7f-a0cf-19d927a21346',
				created_time: '2021-12-02T23:23:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'I made the mistake of saying, "Hey, this would make a good novel!" out loud. It was Saturday morning on a tropical island with family, on vacation from my gray job in a gray building developing endless prototypes for gray people at a gray company. A few of us had broken away from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one: a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'I made the mistake of saying, "Hey, this would make a good novel!" out loud. It was Saturday morning on a tropical island with family, on vacation from my gray job in a gray building developing endless prototypes for gray people at a gray company. A few of us had broken away from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one: a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '51345024-30ec-4644-96da-c2db7a598dd9',
				created_time: '2021-12-14T02:53:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'I could not tell you what was on my mind in the moments before The Muse slapped its sticker on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day, an ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'I could not tell you what was on my mind in the moments before The Muse slapped its sticker on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day, an ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'author!',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'author!',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									'” A few minutes earlier, the conversation had stalled in favor a full-bellied silence. My sister, who had been scrolling through something on her phone, finally gave the screen several taps and then placed the small slab face down on the table with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought might work well with her son.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'” A few minutes earlier, the conversation had stalled in favor a full-bellied silence. My sister, who had been scrolling through something on her phone, finally gave the screen several taps and then placed the small slab face down on the table with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought might work well with her son.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '8b71d629-e707-4500-8ec5-c1ad70d10189',
				created_time: '2021-12-12T20:50:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool mid-morning breeze: ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool mid-morning breeze: ',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									"At what point are we, as parents, mere vehicles for the technology that's raising our children?",
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								"At what point are we, as parents, mere vehicles for the technology that's raising our children?",
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									" Sure, the advice had, in thisninstance, come from a post written by an Actual Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT cribs?",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								" Sure, the advice had, in thisninstance, come from a post written by an Actual Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT cribs?",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '185e2b0e-236a-4167-8617-acdf68da1b4b',
				created_time: '2021-12-12T20:55:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'quote',
				quote: {
					text: [
						{
							type: 'text',
							text: {
								content: 'This brain is expressing hunger',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'This brain is expressing hunger',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'b8e7a20a-2bd4-4f4e-8901-fd214c178eaa',
				created_time: '2021-12-12T20:55:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'quote',
				quote: {
					text: [
						{
							type: 'text',
							text: {
								content: 'This brain is expressing exhaustion',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'This brain is expressing exhaustion',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '71935d95-438a-437c-8f5a-a32f97bd5875',
				created_time: '2021-12-12T20:55:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'quote',
				quote: {
					text: [
						{
							type: 'text',
							text: {
								content: 'This brain just shit itself',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'This brain just shit itself',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'ff618e43-4b7e-44bb-a232-59b3a4f1acf3',
				created_time: '2021-12-14T03:03:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'And if the skull caps succeed, what next?',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'And if the skull caps succeed, what next?',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '5012700c-8e17-4d9e-9454-cc9a791f1700',
				created_time: '2021-12-03T05:32:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'divider',
				divider: {}
			},
			{
				object: 'block',
				id: 'c813ffce-bb60-46c2-8ed2-defd5e3c310e',
				created_time: '2021-12-04T23:21:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_3',
				heading_3: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Options Paralysis',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Options Paralysis',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'ac2b5c1f-e609-4a83-b3d8-906f719efaf0',
				created_time: '2021-12-04T23:09:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									"I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare and intense optimism. Now that I had a core question, I could write a novel. Right? I mean…why the hell not? By the time we got back to the hotel, my fingers were itching with fictions. ",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								"I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare and intense optimism. Now that I had a core question, I could write a novel. Right? I mean…why the hell not? By the time we got back to the hotel, my fingers were itching with fictions. ",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '97c0cba4-3c60-43a5-95f4-6a1d595e0b1f',
				created_time: '2021-12-02T23:30:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									"There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I made to write stories. These usually amounted to little more than rambling monologues, incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character details. The trouble with writing by hand is that I'm one of those methodically-slow readers, and my handwriting tends toward illegibility. If writing is rewriting, and rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my laptop, where the limitations of paper gave way to the opposite problem: what writing app to choose?",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								"There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I made to write stories. These usually amounted to little more than rambling monologues, incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character details. The trouble with writing by hand is that I'm one of those methodically-slow readers, and my handwriting tends toward illegibility. If writing is rewriting, and rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my laptop, where the limitations of paper gave way to the opposite problem: what writing app to choose?",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '5596db13-aa64-4c59-a3c7-dbd21837d51e',
				created_time: '2021-12-14T07:50:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what size, and whether Low Sodium is the better- or worse option.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what size, and whether Low Sodium is the better- or worse option.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '01218903-a1ed-4747-b30a-294e48246ec8',
				created_time: '2021-12-03T04:56:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'First there was Scrivener.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'First there was Scrivener.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'a2f36f1e-654a-4928-a596-2a3af636f896',
				created_time: '2021-12-03T04:56:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Then there was Ulysses.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Then there was Ulysses.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'a138ecea-d5a4-4c0a-b273-2f102ae8e556',
				created_time: '2021-12-03T04:56:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'And now, finally — after various flirtations and even repeat dalliances with the likes of Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'And now, finally — after various flirtations and even repeat dalliances with the likes of Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'DevonThink',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'DevonThink',
							href: null
						},
						{
							type: 'text',
							text: {
								content: ", for Pete's sake! — I have settled on Notion as ",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ", for Pete's sake! — I have settled on Notion as ",
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'the Thing That Least Often Feels Torturous',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'the Thing That Least Often Feels Torturous',
							href: null
						},
						{
							type: 'text',
							text: {
								content: '. (Mind you, this is for prose. For source, I usually turn to VS Code.)',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '. (Mind you, this is for prose. For source, I usually turn to VS Code.)',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '414e484e-f1fc-4236-9b36-c9da11ed0554',
				created_time: '2021-12-03T05:03:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: "In case you weren't counting, that's over six years of ",
								link: null
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: "In case you weren't counting, that's over six years of ",
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									'pausing on the bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on the edge of the tub, shower paused, spitting out solutions to the various problems one gives oneself when inventing characters and events and physics from scratch. Over ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'pausing on the bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on the edge of the tub, shower paused, spitting out solutions to the various problems one gives oneself when inventing characters and events and physics from scratch. Over ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'half a decade',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'half a decade',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									' of world-building notes that describe, in chaotic fits and starts, the future of our planet, from roughly yesterday until roughly 20,000 lifetimes hence.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								' of world-building notes that describe, in chaotic fits and starts, the future of our planet, from roughly yesterday until roughly 20,000 lifetimes hence.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '674295ed-524a-491d-8bc9-6dd80a814716',
				created_time: '2021-12-02T23:08:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings, and ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings, and ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'Eureka!',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Eureka!',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									" moments, transform them into a coherent story? More specifically, how to do this before running out of money and dying on the streets? In a world devoted to distraction, in a body that's already managed to reject its own colon (!), how can I transition to writing loads of shite that no one should ever read to writing loads of gems so enticing they make readers ache to shower me with bitcoin?",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								" moments, transform them into a coherent story? More specifically, how to do this before running out of money and dying on the streets? In a world devoted to distraction, in a body that's already managed to reject its own colon (!), how can I transition to writing loads of shite that no one should ever read to writing loads of gems so enticing they make readers ache to shower me with bitcoin?",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '57a4f8a9-13c3-401a-8ced-2f3dd2d32d1a',
				created_time: '2021-12-03T05:54:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '2021',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '2021',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'd55eb944-ef60-42e2-a2a7-9af12c4845d5',
				created_time: '2021-12-03T05:54:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'The problem with knowing how to code is…you get ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'The problem with knowing how to code is…you get ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'ideas',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'ideas',
							href: null
						},
						{
							type: 'text',
							text: {
								content: '. You read a bit of ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '. You read a bit of ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'Butterick',
								link: {
									url: 'https://docs.racket-lang.org/pollen/'
								}
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Butterick',
							href: 'https://docs.racket-lang.org/pollen/'
						},
						{
							type: 'text',
							text: {
								content:
									", and suddenly you can't shake the idea — arrogant, foolhardy — that your book is ",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								", and suddenly you can't shake the idea — arrogant, foolhardy — that your book is ",
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'alive…',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'alive…',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									'too alive for the confines of Medium or ePub. But still, most of the text will be simple prose, so, for the most part, a simple export from Notion should suffice for most of what you publish.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'too alive for the confines of Medium or ePub. But still, most of the text will be simple prose, so, for the most part, a simple export from Notion should suffice for most of what you publish.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'd0495662-9904-4766-bd40-e19f5ce96849',
				created_time: '2021-12-03T05:59:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									"You want a platform that's free of arbitrary constraints. It must work on anyone's device. You want to be able to customize the output for print, just in case you manage to Andy Weir your way into the bizarro world of tree-pulp publishing. You want the option of toggling the swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your characters and (with any luck) your community.",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								"You want a platform that's free of arbitrary constraints. It must work on anyone's device. You want to be able to customize the output for print, just in case you manage to Andy Weir your way into the bizarro world of tree-pulp publishing. You want the option of toggling the swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your characters and (with any luck) your community.",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'dc466bb6-f78b-4f8d-a0df-f92ba8df3e9f',
				created_time: '2021-12-03T06:04:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'You want future-proof tech that can scale gracefully. It should work on as many devices as possible, without incurring high maintenance or design costs. One person should be able to keep it running without ever worrying that the entire edifice will crumble like a 12-story house of cards assembled without hot glue.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'You want future-proof tech that can scale gracefully. It should work on as many devices as possible, without incurring high maintenance or design costs. One person should be able to keep it running without ever worrying that the entire edifice will crumble like a 12-story house of cards assembled without hot glue.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '12592432-b969-40d8-a970-07bd7f067126',
				created_time: '2021-12-03T06:13:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can make ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can make ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'cool things',
								link: {
									url: 'https://fngrng.navelgazer.club/'
								}
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'cool things',
							href: 'https://fngrng.navelgazer.club/'
						},
						{
							type: 'text',
							text: {
								content: ' with you, even though my college degree was in theater!',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ' with you, even though my college degree was in theater!',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '68114a38-ed04-40bd-bf80-a8466b32f514',
				created_time: '2021-12-03T06:19:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			},
			{
				object: 'block',
				id: 'bfd86648-6f23-4538-be03-e511590396d3',
				created_time: '2021-12-03T06:19:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									"So that's the background that you never wanted to know in the first place. I wanted a No Code",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								"So that's the background that you never wanted to know in the first place. I wanted a No Code",
							href: null
						},
						{
							type: 'text',
							text: {
								content: '†',
								link: null
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'blue'
							},
							plain_text: '†',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									' workflow with Notion as the primary (but by no means exclusive!) source, and the good old WWW as the destination, with no built-in fences between me and potential readers (other than the ubiquitous barrier of natural obscurity), and, I ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								' workflow with Notion as the primary (but by no means exclusive!) source, and the good old WWW as the destination, with no built-in fences between me and potential readers (other than the ubiquitous barrier of natural obscurity), and, I ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'think',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'think',
							href: null
						},
						{
							type: 'text',
							text: {
								content: ", I've found it! ",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ", I've found it! ",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '22a11045-886e-4834-8bc4-d542bab942fc',
				created_time: '2021-12-02T22:25:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content:
									'To learn more about how notion2svelte works, explore the pages below. You might want to start with ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text:
								'To learn more about how notion2svelte works, explore the pages below. You might want to start with ',
							href: null
						},
						{
							type: 'mention',
							mention: {
								type: 'page',
								page: {
									id: '8719f802-5098-40a6-b273-90c58f147f0a'
								}
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'How to Set Up notion2svelte',
							href: 'https://www.notion.so/8719f802509840a6b27390c58f147f0a'
						},
						{
							type: 'text',
							text: {
								content: ', ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ', ',
							href: null
						},
						{
							type: 'mention',
							mention: {
								type: 'page',
								page: {
									id: '729b8b1e-7b6a-4bed-852f-85e9d0e343e1'
								}
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Why notion2svelte?',
							href: 'https://www.notion.so/729b8b1e7b6a4bed852f85e9d0e343e1'
						},
						{
							type: 'text',
							text: {
								content: ', or perhaps ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ', or perhaps ',
							href: null
						},
						{
							type: 'mention',
							mention: {
								type: 'page',
								page: {
									id: '166c0029-be6a-4c7b-9011-5d5325424344'
								}
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Why is this site so hideous?',
							href: 'https://www.notion.so/166c0029be6a4c7b90115d5325424344'
						},
						{
							type: 'text',
							text: {
								content: ' .',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ' .',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '33a5e5e3-4b12-49c9-8bc3-1e93fba89c5e',
				created_time: '2021-12-03T06:31:00.000Z',
				last_edited_time: '2021-12-19T23:12:00.000Z',
				has_children: true,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				},
				blocks: [
					{
						object: 'block',
						id: '70805e85-9640-4473-9016-20f931a40e57',
						created_time: '2021-12-03T06:07:00.000Z',
						last_edited_time: '2021-12-04T01:21:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: '†',
										link: null
									},
									annotations: {
										bold: true,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'blue'
									},
									plain_text: '†',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'Well…no code, aside from the occasional creation of new components',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'blue'
									},
									plain_text: 'Well…no code, aside from the occasional creation of new components',
									href: null
								}
							]
						}
					}
				]
			}
		]
	}}
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
						>How to Set Up notion2svelte.</span
					>&nbsp;No URL provided for How to Set Up notion2svelte
				</p>
				,&nbsp;
				<p
					style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
				>
					⚠️ k(t, url): <span
						style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
						>Why notion2svelte?.</span
					>&nbsp;No URL provided for Why notion2svelte?
				</p>
				, or perhaps&nbsp;
				<p
					style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
				>
					⚠️ k(t, url): <span
						style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
						>Why is this site so hideous?.</span
					>&nbsp;No URL provided for Why is this site so hideous?
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
<Magic
	sourceJSON={{
		object: 'block',
		id: '2ec31f25-9f1f-423e-8bec-a494cda14982',
		created_time: '2021-12-19T23:12:00.000Z',
		last_edited_time: '2021-12-20T03:12:00.000Z',
		has_children: true,
		archived: false,
		type: 'toggle',
		toggle: {
			text: [
				{
					type: 'text',
					text: {
						content: 'The Short Version',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'The Short Version',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: 'd8d52dcd-1573-4da2-95a3-b1844c6416be',
				created_time: '2021-12-19T23:12:00.000Z',
				last_edited_time: '2021-12-19T23:15:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'I like ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'I like ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'writing in Notion',
								link: null
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'writing in Notion',
							href: null
						},
						{
							type: 'text',
							text: {
								content: '. I like ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '. I like ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'coding in Svelte',
								link: null
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'coding in Svelte',
							href: null
						},
						{
							type: 'text',
							text: {
								content: '. I like the ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '. I like the ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'safety of git',
								link: null
							},
							annotations: {
								bold: true,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'safety of git',
							href: null
						},
						{
							type: 'text',
							text: {
								content: '.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '796b6a0c-5565-48e2-a4d2-84bc81604352',
				created_time: '2021-12-19T23:14:00.000Z',
				last_edited_time: '2021-12-19T23:47:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'That, in a nutshell, is what got me started on ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'That, in a nutshell, is what got me started on ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'notion2svelte.',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'notion2svelte.',
							href: null
						}
					]
				}
			}
		]
	}}
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
<Magic
	sourceJSON={{
		object: 'block',
		id: 'bd00cfd1-cd2c-456b-9cd5-b8e96e7b2a42',
		created_time: '2021-12-19T23:28:00.000Z',
		last_edited_time: '2021-12-20T03:12:00.000Z',
		has_children: true,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'It’s not the best project out there, but it’s the only one that does what I want, namely:',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text:
						'It’s not the best project out there, but it’s the only one that does what I want, namely:',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: '9767e1c2-f7ef-4c2d-b30e-fda89d93ff6c',
				created_time: '2021-12-19T23:15:00.000Z',
				last_edited_time: '2021-12-20T00:13:00.000Z',
				has_children: true,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Store intermediary artifacts to-disk',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Store intermediary artifacts to-disk',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: 'b346fe64-122b-49c4-a03f-44b16afb8dc5',
						created_time: '2021-12-19T23:28:00.000Z',
						last_edited_time: '2021-12-19T23:28:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Benefits',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Benefits',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '572cb6f4-9ebb-45c3-bc5d-22de8117daee',
						created_time: '2021-12-19T23:16:00.000Z',
						last_edited_time: '2021-12-19T23:17:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'My content is safely stored in git',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'My content is safely stored in git',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: 'fd145b69-f98d-401a-b8a8-43b742668c01',
						created_time: '2021-12-19T23:18:00.000Z',
						last_edited_time: '2021-12-20T00:13:00.000Z',
						has_children: true,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content:
											'I can access the full, raw JSON for every page from within my app, allowing me to add interactivity that Notion doesn’t allow.',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text:
										'I can access the full, raw JSON for every page from within my app, allowing me to add interactivity that Notion doesn’t allow.',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: 'f9c9a8aa-07eb-424c-a15f-971b3e95262c',
								created_time: '2021-12-19T23:20:00.000Z',
								last_edited_time: '2021-12-20T00:13:00.000Z',
								has_children: true,
								archived: false,
								type: 'toggle',
								toggle: {
									text: [
										{
											type: 'text',
											text: {
												content: 'Example',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'gray'
											},
											plain_text: 'Example',
											href: null
										}
									]
								},
								blocks: [
									{
										object: 'block',
										id: '34818624-23ba-4a38-8783-dfd9fe47fdc5',
										created_time: '2021-12-19T23:20:00.000Z',
										last_edited_time: '2021-12-20T00:15:00.000Z',
										has_children: true,
										archived: false,
										type: 'paragraph',
										paragraph: {
											text: [
												{
													type: 'text',
													text: {
														content: 'Press the ',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text: 'Press the ',
													href: null
												},
												{
													type: 'text',
													text: {
														content: 'I',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: true,
														color: 'default'
													},
													plain_text: 'I',
													href: null
												},
												{
													type: 'text',
													text: {
														content:
															' key to toggle Inspection Mode on this page, then hover over various blocks. For instance, here’s a screenshot from me hovering over the title above after enabling Inspection Mode.',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text:
														' key to toggle Inspection Mode on this page, then hover over various blocks. For instance, here’s a screenshot from me hovering over the title above after enabling Inspection Mode.',
													href: null
												}
											]
										},
										blocks: [
											{
												object: 'block',
												id: 'ffdee43d-42a6-49e5-9f16-60af87bffe79',
												created_time: '2021-12-19T23:21:00.000Z',
												last_edited_time: '2021-12-20T00:13:00.000Z',
												has_children: false,
												archived: false,
												type: 'image',
												image: {
													caption: [
														{
															type: 'text',
															text: {
																content: 'Inspection Mode is ',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'Inspection Mode is ',
															href: null
														},
														{
															type: 'text',
															text: {
																content: 'not',
																link: null
															},
															annotations: {
																bold: false,
																italic: true,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'not',
															href: null
														},
														{
															type: 'text',
															text: {
																content: ' a feature of ',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: ' a feature of ',
															href: null
														},
														{
															type: 'text',
															text: {
																content: 'notion2svelte.',
																link: null
															},
															annotations: {
																bold: false,
																italic: true,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'notion2svelte.',
															href: null
														},
														{
															type: 'text',
															text: {
																content: ' Rather, ',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: ' Rather, ',
															href: null
														},
														{
															type: 'text',
															text: {
																content: 'notion2svelte',
																link: null
															},
															annotations: {
																bold: false,
																italic: true,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'notion2svelte',
															href: null
														},
														{
															type: 'text',
															text: {
																content: ' ',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: ' ',
															href: null
														},
														{
															type: 'text',
															text: {
																content: 'enables',
																link: null
															},
															annotations: {
																bold: false,
																italic: true,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'enables',
															href: null
														},
														{
															type: 'text',
															text: {
																content:
																	' this sort of thing by wrapping every component in a &lt;Magic> component.',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text:
																' this sort of thing by wrapping every component in a &lt;Magic> component.',
															href: null
														}
													],
													type: 'file',
													file: {
														url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b988249d-299a-468a-bb3a-74ea305240d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211220T102725Z&X-Amz-Expires=3600&X-Amz-Signature=8974bb3cce66b0b4204a9c10151f088a200b8d63e9a7b1afd8ef539a81be4d08&X-Amz-SignedHeaders=host&x-id=GetObject',
														expiry_time: '2021-12-20T11:27:25.333Z'
													}
												}
											}
										]
									},
									{
										object: 'block',
										id: 'acfe95fe-72d4-441c-b08a-f895c9ceaf85',
										created_time: '2021-12-19T23:26:00.000Z',
										last_edited_time: '2021-12-20T00:13:00.000Z',
										has_children: false,
										archived: false,
										type: 'paragraph',
										paragraph: {
											text: [
												{
													type: 'text',
													text: {
														content: '(',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text: '(',
													href: null
												},
												{
													type: 'text',
													text: {
														content: 'Pester me',
														link: {
															url: 'https://github.com/nvlgzr/notion2svelte/issues'
														}
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text: 'Pester me',
													href: 'https://github.com/nvlgzr/notion2svelte/issues'
												},
												{
													type: 'text',
													text: {
														content:
															' if you are reading this and I still haven’t gotten around to documenting the whole &lt;Magic> thing!)',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text:
														' if you are reading this and I still haven’t gotten around to documenting the whole &lt;Magic> thing!)',
													href: null
												}
											]
										}
									}
								]
							}
						]
					}
				]
			},
			{
				object: 'block',
				id: '707cb4d3-9930-4c2d-9d16-1b515e7667e2',
				created_time: '2021-12-19T23:30:00.000Z',
				last_edited_time: '2021-12-19T23:38:00.000Z',
				has_children: true,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Command-line tool, rather than runtime ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Command-line tool, rather than runtime ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'npm',
								link: null
							},
							annotations: {
								bold: false,
								italic: true,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'npm',
							href: null
						},
						{
							type: 'text',
							text: {
								content: ' package',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: ' package',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '6926fa44-a601-4bf4-9fef-ba36a70094c0',
						created_time: '2021-12-19T23:30:00.000Z',
						last_edited_time: '2021-12-19T23:39:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Benefits',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Benefits',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: 'd9b667f7-e205-4c61-814a-2666b393c8f5',
						created_time: '2021-12-19T23:26:00.000Z',
						last_edited_time: '2021-12-19T23:37:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: '100% decoupled tooling: want to “eject” from ',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '100% decoupled tooling: want to “eject” from ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'notion2svelte',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'notion2svelte',
									href: null
								},
								{
									type: 'text',
									text: {
										content:
											'? No problem. Just stop using it. From the perspective of your Svelte app, the pages created by ',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text:
										'? No problem. Just stop using it. From the perspective of your Svelte app, the pages created by ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'notion2svelte',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'notion2svelte',
									href: null
								},
								{
									type: 'text',
									text: {
										content: ' are no different than pages you code yourself',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: ' are no different than pages you code yourself',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: '506c565f-0dec-423d-bacd-28db8d57e407',
				created_time: '2021-12-19T23:34:00.000Z',
				last_edited_time: '2021-12-20T03:12:00.000Z',
				has_children: true,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Write-your-own components',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Write-your-own components',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '3c6c4a0f-27ad-416b-bdab-af6c5d9355b6',
						created_time: '2021-12-19T23:39:00.000Z',
						last_edited_time: '2021-12-19T23:40:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Benefits',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Benefits',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: 'a811f65b-d16a-4631-a2ff-d4fa8dc95a13',
						created_time: '2021-12-19T23:40:00.000Z',
						last_edited_time: '2021-12-19T23:41:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Avoids constraining your creativity',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Avoids constraining your creativity',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '1597f672-82d7-479b-acec-84394c563a54',
						created_time: '2021-12-19T23:39:00.000Z',
						last_edited_time: '2021-12-20T03:12:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Keeps ',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Keeps ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'notion2svelte',
										link: null
									},
									annotations: {
										bold: false,
										italic: true,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'notion2svelte',
									href: null
								},
								{
									type: 'text',
									text: {
										content: ' simple',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: ' simple',
									href: null
								}
							]
						}
					}
				]
			}
		]
	}}
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
							<Image url="/assets/about-notion2svelte/ffdee43d-42a6-49e5-9f16-60af87bffe79.png"
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
<Magic
	sourceJSON={{
		object: 'block',
		id: '15b80b2c-3d31-458a-96b1-4e4a724d8d12',
		created_time: '2021-12-20T03:12:00.000Z',
		last_edited_time: '2021-12-20T03:12:00.000Z',
		has_children: false,
		archived: false,
		type: 'divider',
		divider: {}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'd2b791da-0d75-49de-ba88-dda6c901cc40',
		created_time: '2021-12-20T03:07:00.000Z',
		last_edited_time: '2021-12-20T03:07:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'How it works, oversimplified',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'How it works, oversimplified',
					href: null
				}
			]
		}
	}}
	><Header level="1">How it works, oversimplified</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'abe0482e-c0f5-4036-acb9-5c525074b9e1',
		created_time: '2021-12-20T03:07:00.000Z',
		last_edited_time: '2021-12-20T03:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Everything you see on this page was written in Notion, exported as .svelte files wherever you want (e.g.,  ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text:
						'Everything you see on this page was written in Notion, exported as .svelte files wherever you want (e.g.,  ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'src/routes/pages/<slug>.svelte',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: true,
						color: 'default'
					},
					plain_text: 'src/routes/pages/<slug>.svelte',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' ) using ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' ) using ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
						link: null
					},
					annotations: {
						bold: false,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'notion2svelte',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', then published normally using Svelte Kit.',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', then published normally using Svelte Kit.',
					href: null
				}
			]
		}
	}}
	><Paragraph>
		Everything you see on this page was written in Notion, exported as .svelte files wherever you
		want (e.g., &nbsp;<InlineCode code="src/routes/pages/&lt;slug&gt;.svelte" />&nbsp;) using&nbsp;<em
			>notion2svelte</em
		>, then published normally using Svelte Kit.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '58d8d8dc-2ecb-4df2-9dcb-0e50553a3a9f',
		created_time: '2021-12-20T04:26:00.000Z',
		last_edited_time: '2021-12-20T10:04:00.000Z',
		has_children: false,
		archived: false,
		type: 'image',
		image: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
						link: null
					},
					annotations: {
						bold: false,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'notion2svelte',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', grossly over-simplified',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', grossly over-simplified',
					href: null
				}
			],
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/065b59a4-70ad-47f7-8157-f76790c60cc4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211220T102723Z&X-Amz-Expires=3600&X-Amz-Signature=4cbbb52a2cd2c7d9cefa448069376ffe547133bb3d4c8ce3605460ab9fe34d53&X-Amz-SignedHeaders=host&x-id=GetObject',
				expiry_time: '2021-12-20T11:27:23.561Z'
			}
		}
	}}
	><Image url="/assets/about-notion2svelte/58d8d8dc-2ecb-4df2-9dcb-0e50553a3a9f.png"
		><em>notion2svelte</em>, grossly over-simplified</Image
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '6ae6723f-b83a-42e0-8f0a-4812c81be013',
		created_time: '2021-12-20T03:15:00.000Z',
		last_edited_time: '2021-12-20T10:04:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'After that, what you do with the results is up to you. Let’s use a simple callout as an example.',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text:
						'After that, what you do with the results is up to you. Let’s use a simple callout as an example.',
					href: null
				}
			]
		}
	}}
	><Paragraph>
		After that, what you do with the results is up to you. Let’s use a simple callout as an example.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '011d46be-4bf6-4817-a0da-a849ec16f1aa',
		created_time: '2021-12-20T10:00:00.000Z',
		last_edited_time: '2021-12-20T10:04:00.000Z',
		has_children: false,
		archived: false,
		type: 'callout',
		callout: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Hi. I’m a sea otter.',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Hi. I’m a sea otter.',
					href: null
				}
			],
			icon: {
				type: 'emoji',
				emoji: '🦦'
			}
		}
	}}><Callout emoji="🦦">Hi. I’m a sea otter.</Callout></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '39589b61-9267-4d22-a473-d05bfb440926',
		created_time: '2021-12-20T10:05:00.000Z',
		last_edited_time: '2021-12-20T10:07:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'The Notion API renders the above callout thus:',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'The Notion API renders the above callout thus:',
					href: null
				}
			]
		}
	}}
	><Paragraph>The Notion API renders the above callout thus:</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '1a78656a-a77b-4d73-b0fb-5bd4b9570f51',
		created_time: '2021-12-20T10:26:00.000Z',
		last_edited_time: '2021-12-20T10:26:00.000Z',
		has_children: false,
		archived: false,
		type: 'divider',
		divider: {}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'b86fe364-1aef-49ad-ab73-5f0c55926fbc',
		created_time: '2021-12-20T03:11:00.000Z',
		last_edited_time: '2021-12-20T03:11:00.000Z',
		has_children: false,
		archived: false,
		type: 'divider',
		divider: {}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '3def29ed-922e-4e86-99bb-cd72c45c561a',
		created_time: '2021-12-19T23:41:00.000Z',
		last_edited_time: '2021-12-20T00:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'How to use ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'How to use ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
						link: null
					},
					annotations: {
						bold: false,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'notion2svelte',
					href: null
				}
			]
		}
	}}
	><Header level="1">How to use&nbsp;<em>notion2svelte</em></Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '022fb7fa-aeff-4bf3-92fb-1e36e5358bf4',
		created_time: '2021-12-19T23:45:00.000Z',
		last_edited_time: '2021-12-20T00:08:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'For now, the fastest way to get started is to follow along with the video tutorial:',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text:
						'For now, the fastest way to get started is to follow along with the video tutorial:',
					href: null
				}
			]
		}
	}}
	><Paragraph>
		For now, the fastest way to get started is to follow along with the video tutorial:
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: 'c5d30b2f-32c2-42b0-b650-b2140fec08b6',
		created_time: '2021-12-20T00:08:00.000Z',
		last_edited_time: '2021-12-20T00:08:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
						link: null
					},
					annotations: {
						bold: true,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'notion2svelte',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' in 10 minutes |',
						link: null
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' in 10 minutes |',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s',
						link: {
							url: 'https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'
						}
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s',
					href: 'https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'
				}
			]
		}
	}}
	><Paragraph>
		<em><strong>notion2svelte</strong></em><strong>&nbsp;in 10 minutes |</strong>&nbsp;<MagicLink
			href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
			>https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s</MagicLink
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '4f15953d-9bba-4950-b227-83cb11b276aa',
		created_time: '2021-12-20T00:09:00.000Z',
		last_edited_time: '2021-12-20T00:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Where to learn more',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Where to learn more',
					href: null
				}
			]
		}
	}}
	><Header level="1">Where to learn more</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '0cff4333-2484-42b3-82a8-ceaf976b9b69',
		created_time: '2021-12-20T00:09:00.000Z',
		last_edited_time: '2021-12-20T00:10:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Find the code, start a discussion, or report an issue on GitHub:',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Find the code, start a discussion, or report an issue on GitHub:',
					href: null
				}
			]
		}
	}}
	><Paragraph>Find the code, start a discussion, or report an issue on GitHub:</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		object: 'block',
		id: '2dbe97ad-a612-4300-89be-2f813fadf526',
		created_time: '2021-12-20T00:10:00.000Z',
		last_edited_time: '2021-12-20T00:10:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'https://github.com/nvlgzr/notion2svelte',
						link: {
							url: 'https://github.com/nvlgzr/notion2svelte'
						}
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'https://github.com/nvlgzr/notion2svelte',
					href: 'https://github.com/nvlgzr/notion2svelte'
				}
			]
		}
	}}
	><Paragraph>
		<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>https://github.com/nvlgzr/notion2svelte</MagicLink
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
