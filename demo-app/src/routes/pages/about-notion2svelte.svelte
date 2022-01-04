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
<Magic sourceJSON={undefined}><Title>Introducing notion2svelte (draft)</Title></Magic>

<Magic
	sourceJSON={{
		object: 'block',
		id: '1ceeb64a-bae5-458f-855b-912a863940bb',
		created_time: '2022-01-04T05:46:00.000Z',
		last_edited_time: '2022-01-04T06:03:00.000Z',
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
		id: '720886ad-c6f4-4e1a-86bf-1d1871a55013',
		created_time: '2022-01-04T05:41:00.000Z',
		last_edited_time: '2022-01-04T06:03:00.000Z',
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
		id: 'bf385444-460c-4278-b850-4681361221f1',
		created_time: '2022-01-04T05:41:00.000Z',
		last_edited_time: '2022-01-04T06:03:00.000Z',
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
		id: 'e875c718-04a6-439f-a1b8-19e3502e5882',
		created_time: '2022-01-04T05:41:00.000Z',
		last_edited_time: '2022-01-04T06:03:00.000Z',
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
		id: '02200191-88cc-4786-bff4-d59207c010be',
		created_time: '2022-01-04T23:20:00.000Z',
		last_edited_time: '2022-01-04T23:20:00.000Z',
		has_children: true,
		archived: false,
		type: 'column_list',
		column_list: {},
		blocks: [
			{
				object: 'block',
				id: '6e019a7d-9f08-419c-a1ed-a190caf12666',
				created_time: '2022-01-04T23:20:00.000Z',
				last_edited_time: '2022-01-04T23:20:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: 'dfd5b0a6-f19e-4c81-8024-68dfbeb5a1fc',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:20:00.000Z',
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
						id: 'ed21d11c-9389-4694-9db4-549e002a1b92',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:21:00.000Z',
						has_children: false,
						archived: false,
						type: 'image',
						image: {
							caption: [],
							type: 'file',
							file: {
								url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cd6ca920-8720-4fdd-bafa-02578e54e4ed/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T233238Z&X-Amz-Expires=3600&X-Amz-Signature=f75344533da8f35b22434c7a53c6dc58a9401971a8838ddff5cbf075c22bbbdf&X-Amz-SignedHeaders=host&x-id=GetObject',
								expiry_time: '2022-01-05T00:32:38.693Z'
							}
						}
					},
					{
						object: 'block',
						id: '7bac921b-ddaf-4304-9a27-71112cb5d5e9',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:20:00.000Z',
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
						id: '54f999ba-a125-4dee-8b63-e4b38a9765cc',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:20:00.000Z',
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
						id: '026f37a9-2a3c-46b7-8750-2bec21c60d7a',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:20:00.000Z',
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
				id: '6875c4ea-6537-4579-bea0-979f8df1867e',
				created_time: '2022-01-04T23:20:00.000Z',
				last_edited_time: '2022-01-04T23:21:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: '5fdf296b-d570-4b34-8b78-7adfe9b27bb3',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:20:00.000Z',
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
						id: 'ce917906-431b-4d6a-9134-506027e66805',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:21:00.000Z',
						has_children: false,
						archived: false,
						type: 'image',
						image: {
							caption: [],
							type: 'file',
							file: {
								url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0ed159d5-2d44-4146-9926-1d60d3598a62/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T233238Z&X-Amz-Expires=3600&X-Amz-Signature=0af99fd93696bb7261cf2e4f465570be7a1e4d7fde24003d5313e0c2a66b326e&X-Amz-SignedHeaders=host&x-id=GetObject',
								expiry_time: '2022-01-05T00:32:38.704Z'
							}
						}
					},
					{
						object: 'block',
						id: '33942c60-d631-4352-92f1-cb91db16130e',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:21:00.000Z',
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
						id: '2f1796b5-8068-4fe6-8eb3-289aa08b7e2a',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:21:00.000Z',
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
						id: '9d9c2603-ece7-407a-8300-49ca4c8c38e8',
						created_time: '2022-01-04T05:41:00.000Z',
						last_edited_time: '2022-01-04T23:21:00.000Z',
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
