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
	import Magic from '$lib/notion2svelte/Magic.svelte';
	import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
	<title>Soft Carriage Returns</title>
</svelte:head>

<Title>Soft Carriage Returns</Title>

<Magic
	page={{
		object: 'page',
		id: '454e8b89-4aa5-4533-b494-8853e8fb4df1',
		created_time: '2021-10-31T02:24:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
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
							content: 'soft-carriage-returns',
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
						plain_text: 'soft-carriage-returns',
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
							content: 'Soft Carriage Returns',
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
						plain_text: 'Soft Carriage Returns',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Soft-Carriage-Returns-454e8b894aa54533b4948853e8fb4df1',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '915a2199-df9c-46e6-865a-35e130a59ed8',
		created_time: '2021-10-31T02:28:00.000Z',
		last_edited_time: '2021-10-31T02:28:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'This is the first line\nand this is the second',
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
					plain_text: 'This is the first line\nand this is the second',
					href: null
				}
			]
		}
	}}
	><div>
		This is the first line
		<br />
		and this is the second
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '454e8b89-4aa5-4533-b494-8853e8fb4df1',
		created_time: '2021-10-31T02:24:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
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
							content: 'soft-carriage-returns',
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
						plain_text: 'soft-carriage-returns',
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
							content: 'Soft Carriage Returns',
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
						plain_text: 'Soft Carriage Returns',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Soft-Carriage-Returns-454e8b894aa54533b4948853e8fb4df1',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ff5fa045-ed74-4a54-82bb-42d5c25635af',
		created_time: '2021-10-31T02:28:00.000Z',
		last_edited_time: '2021-10-31T02:28:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'This block also has\n2 lines',
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
					plain_text: 'This block also has\n2 lines',
					href: null
				}
			]
		}
	}}
	><div>
		This block also has
		<br />
		2 lines
	</div>
</Magic>
<br style="display:none;" />
