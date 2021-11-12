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
	<title>Circular Reference 5</title>
</svelte:head>
undefined
<Title>Circular Reference 5</Title>

<Magic
	page={{
		object: 'page',
		id: 'c28e5b36-4325-445e-b309-d25bbc682958',
		created_time: '2021-11-05T10:49:00.000Z',
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
							content: 'cr5',
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
						plain_text: 'cr5',
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
							content: 'Circular Reference 5',
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
						plain_text: 'Circular Reference 5',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Circular-Reference-5-c28e5b364325445eb309d25bbc682958',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '61368a6c-45c9-40f9-a52d-9ef1f2f9fd09',
		created_time: '2021-11-05T10:49:00.000Z',
		last_edited_time: '2021-11-05T10:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Back to ',
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
					plain_text: 'Back to ',
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
						content: ' again',
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
					plain_text: ' again',
					href: null
				}
			]
		}
	}}
	><div>
		Back to&thinsp;<MagicLink href="cr1">Circular Reference 1</MagicLink>&thinsp;again
	</div>
</Magic>
<br style="display:none;" />
