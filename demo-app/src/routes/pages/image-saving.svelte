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
	<title>Image Saving Test</title>
</svelte:head>

<Title>Image Saving Test</Title>

<Magic
	page={{
		object: 'page',
		id: '2000dfbb-5b5a-435c-b32d-9009c7466476',
		created_time: '2021-09-27T07:09:00.000Z',
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
							content: 'image-saving',
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
						plain_text: 'image-saving',
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
							content: 'Image Saving Test',
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
						plain_text: 'Image Saving Test',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Image-Saving-Test-2000dfbb5b5a435cb32d9009c7466476',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'aa2941b1-13b6-4111-bb26-068c7f5065df',
		created_time: '2021-09-27T07:09:00.000Z',
		last_edited_time: '2021-10-30T22:57:00.000Z',
		has_children: false,
		archived: false,
		type: 'image',
		image: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'What do we do about ',
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
					plain_text: 'What do we do about ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'annotations, including',
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
					plain_text: 'annotations, including',
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
						content: 'C',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'red'
					},
					plain_text: 'C',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'o',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'orange'
					},
					plain_text: 'o',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'l',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'yellow'
					},
					plain_text: 'l',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'o',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'green'
					},
					plain_text: 'o',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'r',
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
					plain_text: 'r',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 's ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'brown'
					},
					plain_text: 's ',
					href: null
				},
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
					type: 'text',
					text: {
						content: 'links',
						link: {
							url: 'https://www.beyonce.com/'
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
					plain_text: 'links',
					href: 'https://www.beyonce.com/'
				},
				{
					type: 'text',
					text: {
						content: '?',
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
					plain_text: '?',
					href: null
				}
			],
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T184109Z&X-Amz-Expires=3600&X-Amz-Signature=2d29ce084a01a4281a278d2452b82c40257253adbb96dfb71fe9465f4396e1a4&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-11T19:41:09.063Z'
			}
		}
	}}
	><Image url="/images/image-saving/aa2941b1-13b6-4111-bb26-068c7f5065df.jpg"
		>What do we do about&thinsp;<strong>annotations, including</strong>&thinsp;<InlineColor
			value="red">C</InlineColor
		><InlineColor value="orange">o</InlineColor><InlineColor value="yellow">l</InlineColor
		><InlineColor value="green">o</InlineColor><InlineColor value="blue">r</InlineColor><InlineColor
			value="brown">s&thinsp;</InlineColor
		>and&thinsp;<MagicLink href="https://www.beyonce.com/">links</MagicLink>?</Image
	>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2000dfbb-5b5a-435c-b32d-9009c7466476',
		created_time: '2021-09-27T07:09:00.000Z',
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
							content: 'image-saving',
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
						plain_text: 'image-saving',
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
							content: 'Image Saving Test',
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
						plain_text: 'Image Saving Test',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Image-Saving-Test-2000dfbb5b5a435cb32d9009c7466476',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '5bc5c0dc-dbad-4b37-9741-bc18736e0c27',
		created_time: '2021-09-27T09:02:00.000Z',
		last_edited_time: '2021-10-01T01:48:00.000Z',
		has_children: false,
		archived: false,
		type: 'image',
		image: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'From unsplash',
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
					plain_text: 'From unsplash',
					href: null
				}
			],
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		}
	}}
	><Image url="/images/image-saving/5bc5c0dc-dbad-4b37-9741-bc18736e0c27.jpg">From unsplash</Image>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2000dfbb-5b5a-435c-b32d-9009c7466476',
		created_time: '2021-09-27T07:09:00.000Z',
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
							content: 'image-saving',
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
						plain_text: 'image-saving',
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
							content: 'Image Saving Test',
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
						plain_text: 'Image Saving Test',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Image-Saving-Test-2000dfbb5b5a435cb32d9009c7466476',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '0e08e06e-8780-460e-a7b0-37f1cf0eeb3a',
		created_time: '2021-09-27T09:03:00.000Z',
		last_edited_time: '2021-09-27T09:03:00.000Z',
		has_children: false,
		archived: false,
		type: 'image',
		image: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'cresting orca',
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
					plain_text: 'cresting orca',
					href: null
				}
			],
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c7ef8e9-8eb7-4b76-ab4a-9c859e998a8e/IMG_0741.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T184109Z&X-Amz-Expires=3600&X-Amz-Signature=d37baf030d4873393ee720ead0c609fd8b9d32e42e26aeb858d44d5ea21b1e5d&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-11T19:41:09.063Z'
			}
		}
	}}
	><Image url="/images/image-saving/0e08e06e-8780-460e-a7b0-37f1cf0eeb3a.jpg">cresting orca</Image>
</Magic>
<br style="display:none;" />
