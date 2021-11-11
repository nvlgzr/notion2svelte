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
	<title>Cover with Emoji Icon</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={'🦦'}
/>
<Title>Cover with Emoji Icon</Title>

<Magic
	page={{
		object: 'page',
		id: 'ddc1044b-b946-4de8-89f5-ec771d11276e',
		created_time: '2021-11-01T20:39:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
		icon: {
			type: 'emoji',
			emoji: '🦦'
		},
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
							content: 'cover',
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
						plain_text: 'cover',
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
							content: 'Cover with Emoji Icon',
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
						plain_text: 'Cover with Emoji Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-with-Emoji-Icon-ddc1044bb9464de889f5ec771d11276e',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '8c7cd2f1-51e9-4840-8c3c-7648c5cd1f99',
		created_time: '2021-11-02T08:11:00.000Z',
		last_edited_time: '2021-11-02T08:11:00.000Z',
		has_children: true,
		archived: false,
		type: 'synced_block',
		synced_block: {
			synced_from: {
				type: 'block_id',
				block_id: '5090a3d9-a163-4323-a5b5-eb9bd6124717'
			}
		},
		blocks: [
			{
				object: 'block',
				id: '457718e4-a27e-4848-860f-0bd87484fee0',
				created_time: '2021-11-02T08:10:00.000Z',
				last_edited_time: '2021-11-02T08:11:00.000Z',
				has_children: true,
				archived: false,
				type: 'toggle',
				toggle: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Icon Tests',
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
							plain_text: 'Icon Tests',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '75519013-64a2-425b-8ad0-3d72db68366c',
						created_time: '2021-11-02T08:11:00.000Z',
						last_edited_time: '2021-11-02T08:11:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'mention',
									mention: {
										type: 'page',
										page: {
											id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3'
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
									plain_text: 'Uploaded File Icon',
									href: 'https://www.notion.so/c7ae46cde8e64c4f8617b35aac4809a3'
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
					},
					{
						object: 'block',
						id: 'a3439734-6b9f-4735-b720-da354d67fde2',
						created_time: '2021-11-02T08:10:00.000Z',
						last_edited_time: '2021-11-02T08:11:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'mention',
									mention: {
										type: 'page',
										page: {
											id: 'c5194121-d72d-40b5-9cc1-9be0b7193bfc'
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
									plain_text: 'External File Icon',
									href: 'https://www.notion.so/c5194121d72d40b59cc19be0b7193bfc'
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
					},
					{
						object: 'block',
						id: 'a5a67c27-e13c-4650-be9d-b1fe2cc8f16f',
						created_time: '2021-11-02T08:11:00.000Z',
						last_edited_time: '2021-11-02T08:11:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'mention',
									mention: {
										type: 'page',
										page: {
											id: 'ddc1044b-b946-4de8-89f5-ec771d11276e'
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
									plain_text: 'Cover with Emoji Icon',
									href: 'https://www.notion.so/ddc1044bb9464de889f5ec771d11276e'
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
					}
				]
			}
		]
	}}
	>synced_block<IndentGroup>
		<Toggle
			>Icon Tests
			<span slot="children"
				><div>
					<MagicLink href="uploaded-file-icon">Uploaded File Icon</MagicLink>&thinsp;
				</div>
				<div>
					<MagicLink href="external-file-icon">External File Icon</MagicLink>&thinsp;
				</div>
				<div>
					<MagicLink href="cover">Cover with Emoji Icon</MagicLink>&thinsp;
				</div>
			</span></Toggle
		>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'ddc1044b-b946-4de8-89f5-ec771d11276e',
		created_time: '2021-11-01T20:39:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
		icon: {
			type: 'emoji',
			emoji: '🦦'
		},
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
							content: 'cover',
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
						plain_text: 'cover',
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
							content: 'Cover with Emoji Icon',
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
						plain_text: 'Cover with Emoji Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-with-Emoji-Icon-ddc1044bb9464de889f5ec771d11276e',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '93a1b2f8-30b8-475b-b72a-b412b6580341',
		created_time: '2021-11-01T20:40:00.000Z',
		last_edited_time: '2021-11-01T20:40:00.000Z',
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
		id: 'ddc1044b-b946-4de8-89f5-ec771d11276e',
		created_time: '2021-11-01T20:39:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
		icon: {
			type: 'emoji',
			emoji: '🦦'
		},
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
							content: 'cover',
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
						plain_text: 'cover',
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
							content: 'Cover with Emoji Icon',
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
						plain_text: 'Cover with Emoji Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-with-Emoji-Icon-ddc1044bb9464de889f5ec771d11276e',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '48ef9c4a-966b-4237-b176-7fd509673cd0',
		created_time: '2021-11-01T20:40:00.000Z',
		last_edited_time: '2021-11-01T20:40:00.000Z',
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
		id: 'ddc1044b-b946-4de8-89f5-ec771d11276e',
		created_time: '2021-11-01T20:39:00.000Z',
		last_edited_time: '2021-11-11T13:08:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
			}
		},
		icon: {
			type: 'emoji',
			emoji: '🦦'
		},
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
							content: 'cover',
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
						plain_text: 'cover',
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
							content: 'Cover with Emoji Icon',
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
						plain_text: 'Cover with Emoji Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Cover-with-Emoji-Icon-ddc1044bb9464de889f5ec771d11276e',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '09d4d9fb-6dbd-4c86-a2c5-030bb948ae79',
		created_time: '2021-11-01T20:44:00.000Z',
		last_edited_time: '2021-11-01T20:44:00.000Z',
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
