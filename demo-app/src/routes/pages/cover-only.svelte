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
	<title>Cover-Only</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={''}
/>
<Title>Cover-Only</Title>

<Magic
	page={{
		object: 'page',
		id: '8eb305de-5ebe-43a4-80cb-0ec7c9df5ab7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
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
							content: 'cover-only',
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
						plain_text: 'cover-only',
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
							content: 'Cover-Only',
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
						plain_text: 'Cover-Only',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-Only-8eb305de5ebe43a480cb0ec7c9df5ab7',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'cd11e09a-b42d-4fb7-a6b2-c7aac14d3591',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-03T07:11:00.000Z',
		has_children: true,
		archived: false,
		type: 'synced_block',
		synced_block: {
			synced_from: {
				type: 'block_id',
				block_id: '5090a3d9-a163-4323-a5b5-eb9bd6124717'
			}
		},
		blocks: []
	}}
	>synced_block<IndentGroup />
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '8eb305de-5ebe-43a4-80cb-0ec7c9df5ab7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
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
							content: 'cover-only',
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
						plain_text: 'cover-only',
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
							content: 'Cover-Only',
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
						plain_text: 'Cover-Only',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-Only-8eb305de5ebe43a480cb0ec7c9df5ab7',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'fe6275e3-0139-417d-ba12-0f73ac552adf',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-06T10:01:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Sea Otters!',
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
					plain_text: 'Sea Otters!',
					href: null
				}
			]
		}
	}}
	><h1>Sea Otters!</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '8eb305de-5ebe-43a4-80cb-0ec7c9df5ab7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
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
							content: 'cover-only',
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
						plain_text: 'cover-only',
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
							content: 'Cover-Only',
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
						plain_text: 'Cover-Only',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-Only-8eb305de5ebe43a480cb0ec7c9df5ab7',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c4dd720a-30eb-41da-8be9-8f30684f3446',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-03T07:11:00.000Z',
		has_children: false,
		archived: false,
		type: 'divider',
		divider: {}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '8eb305de-5ebe-43a4-80cb-0ec7c9df5ab7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
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
							content: 'cover-only',
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
						plain_text: 'cover-only',
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
							content: 'Cover-Only',
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
						plain_text: 'Cover-Only',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-Only-8eb305de5ebe43a480cb0ec7c9df5ab7',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1a594bac-9024-44cb-90c6-f68533216ef7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-06T00:26:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'With any luck, this should link to the ',
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
					plain_text: 'With any luck, this should link to the ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'bells and whistles page',
						link: {
							url: '/6bca4379f36245a690cfd35beebba87a'
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
					plain_text: 'bells and whistles page',
					href: '/6bca4379f36245a690cfd35beebba87a'
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
	}}
	><div>
		With any luck, this should link to the&thinsp;<a href="bells-and-whistles"
			>bells and whistles page</a
		>.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '8eb305de-5ebe-43a4-80cb-0ec7c9df5ab7',
		created_time: '2021-11-03T07:11:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
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
							content: 'cover-only',
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
						plain_text: 'cover-only',
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
							content: 'Cover-Only',
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
						plain_text: 'Cover-Only',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-Only-8eb305de5ebe43a480cb0ec7c9df5ab7',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'bb04676a-5a39-4e4f-b427-b9fba6de9f9a',
		created_time: '2021-11-07T05:49:00.000Z',
		last_edited_time: '2021-11-07T05:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: []
		}
	}}
	><div />
</Magic>
<br style="display:none;" />
