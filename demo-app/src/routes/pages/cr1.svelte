<script>
	import Cover from '$lib/notion2svelte/Cover.svelte';
	import Title from '$lib/notion2svelte/Title.svelte';
	import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
	import Callout from '$lib/notion2svelte/Callout.svelte';
	import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
	import ColumnList from '$lib/notion2svelte/ColumnList.svelte';
	import Column from '$lib/notion2svelte/Column.svelte';
	import Divider from '$lib/notion2svelte/Divider.svelte';
	import Embed from '$lib/notion2svelte/Embed.svelte';
	import Image from '$lib/notion2svelte/Image.svelte';
	import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
	import Equation from '$lib/notion2svelte/Equation.svelte';
	import Magic from '$lib/notion2svelte/Magic.svelte';
	import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
	<title>Circular Reference 1</title>
</svelte:head>

<Title>Circular Reference 1</Title>

<Magic
	page={{
		object: 'page',
		id: '51996ca0-1b56-43ef-b080-7fb7a595fcfe',
		created_time: '2021-11-05T09:14:00.000Z',
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: 'c317033a-f18a-479f-bbfb-7072cc7f53da'
		},
		archived: false,
		properties: {
			Slug: {
				id: 'Yj%3E%3C',
				type: 'rich_text',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'cr1',
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
						plain_text: 'cr1',
						href: null
					}
				]
			},
			Status: {
				id: 'Yyjg',
				type: 'select',
				select: {
					id: '2d2d6d67-3785-4f26-97e0-02ec594cb931',
					name: 'Publish me!',
					color: 'pink'
				}
			},
			URL: {
				id: 'lKGS',
				type: 'url',
				url: null
			},
			Title: {
				id: 'title',
				type: 'title',
				title: [
					{
						type: 'text',
						text: {
							content: 'Circular Reference 1',
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
						plain_text: 'Circular Reference 1',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Circular-Reference-1-51996ca01b5643efb0807fb7a595fcfe',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '7bf7d810-0fe7-46a0-a3d9-82f96b2b0a9f',
		created_time: '2021-11-05T09:15:00.000Z',
		last_edited_time: '2021-11-05T10:50:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'I point to ',
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
					plain_text: 'I point to ',
					href: null
				},
				{
					type: 'mention',
					mention: {
						type: 'page',
						page: {
							id: '1571d8d4-b31c-4de5-8ee7-4b00e59743b0'
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
					plain_text: 'Circular Reference 2',
					href: 'https://www.notion.so/1571d8d4b31c4de58ee74b00e59743b0'
				},
				{
					type: 'text',
					text: {
						content: ' and ',
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
					plain_text: ' and ',
					href: null
				},
				{
					type: 'mention',
					mention: {
						type: 'page',
						page: {
							id: '8c44a13e-832f-47c3-8650-e9e647d9bde4'
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
					plain_text: 'Circular Reference 4',
					href: 'https://www.notion.so/8c44a13e832f47c38650e9e647d9bde4'
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
				}
			]
		}
	}}
	><div>
		I point to&thinsp;<MagicLink href="cr2">Circular Reference 2</MagicLink
		>&thinsp;and&thinsp;<MagicLink href="cr4">Circular Reference 4</MagicLink>&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '51996ca0-1b56-43ef-b080-7fb7a595fcfe',
		created_time: '2021-11-05T09:14:00.000Z',
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: 'c317033a-f18a-479f-bbfb-7072cc7f53da'
		},
		archived: false,
		properties: {
			Slug: {
				id: 'Yj%3E%3C',
				type: 'rich_text',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'cr1',
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
						plain_text: 'cr1',
						href: null
					}
				]
			},
			Status: {
				id: 'Yyjg',
				type: 'select',
				select: {
					id: '2d2d6d67-3785-4f26-97e0-02ec594cb931',
					name: 'Publish me!',
					color: 'pink'
				}
			},
			URL: {
				id: 'lKGS',
				type: 'url',
				url: null
			},
			Title: {
				id: 'title',
				type: 'title',
				title: [
					{
						type: 'text',
						text: {
							content: 'Circular Reference 1',
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
						plain_text: 'Circular Reference 1',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Circular-Reference-1-51996ca01b5643efb0807fb7a595fcfe',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '98b9e0c5-a0b8-4ad3-9826-a723c8351c6c',
		created_time: '2021-11-05T09:17:00.000Z',
		last_edited_time: '2021-11-05T09:17:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
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
				}
			]
		}
	}}
	><div>&thinsp;</div>
</Magic>
<br style="display:none;" />
