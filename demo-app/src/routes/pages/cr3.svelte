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
	<title>Circular Reference 3</title>
</svelte:head>
undefined
<Title>Circular Reference 3</Title>

<Magic
	page={{
		object: 'page',
		id: '67f0e3a3-711f-431a-bbfd-6ae92bc2df79',
		created_time: '2021-11-05T09:16:00.000Z',
		last_edited_time: '2021-11-12T06:26:00.000Z',
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
							content: 'cr3',
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
						plain_text: 'cr3',
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
							content: 'Circular Reference 3',
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
						plain_text: 'Circular Reference 3',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Circular-Reference-3-67f0e3a3711f431abbfd6ae92bc2df79',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '70789bbc-3c6f-4346-af61-c7b98ca911ae',
		created_time: '2021-11-05T09:16:00.000Z',
		last_edited_time: '2021-11-05T09:16:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'I reference ',
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
					plain_text: 'I reference ',
					href: null
				},
				{
					type: 'mention',
					mention: {
						type: 'page',
						page: {
							id: '51996ca0-1b56-43ef-b080-7fb7a595fcfe'
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
					plain_text: 'Circular Reference 1',
					href: 'https://www.notion.so/51996ca01b5643efb0807fb7a595fcfe'
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
		I reference&thinsp;<MagicLink href="cr1">Circular Reference 1</MagicLink>&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '67f0e3a3-711f-431a-bbfd-6ae92bc2df79',
		created_time: '2021-11-05T09:16:00.000Z',
		last_edited_time: '2021-11-12T06:26:00.000Z',
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
							content: 'cr3',
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
						plain_text: 'cr3',
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
							content: 'Circular Reference 3',
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
						plain_text: 'Circular Reference 3',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Circular-Reference-3-67f0e3a3711f431abbfd6ae92bc2df79',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'e6d00d0c-17a1-4cdc-a2eb-a70484261ae2',
		created_time: '2021-11-05T10:48:00.000Z',
		last_edited_time: '2021-11-05T10:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'and ',
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
					plain_text: 'and ',
					href: null
				},
				{
					type: 'mention',
					mention: {
						type: 'page',
						page: {
							id: 'c28e5b36-4325-445e-b309-d25bbc682958'
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
					plain_text: 'Circular Reference 5',
					href: 'https://www.notion.so/c28e5b364325445eb309d25bbc682958'
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
		and&thinsp;<MagicLink href="cr5">Circular Reference 5</MagicLink>&thinsp;
	</div>
</Magic>
<br style="display:none;" />
