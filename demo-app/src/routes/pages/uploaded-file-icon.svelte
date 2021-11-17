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
	<title>Uploaded File Icon</title>
</svelte:head>
<Cover coverURL={''} iconEmojiOrURL={'/images/uploaded-file-icon/icon.png'} />
<Title>Uploaded File Icon</Title>

<Magic
	page={{
		object: 'page',
		id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3',
		created_time: '2021-11-01T09:34:00.000Z',
		cover: null,
		icon: {
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a61cbc7-8c85-4cea-9806-94d0ee9205bc/navelgazer-third-eye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040529Z&X-Amz-Expires=3600&X-Amz-Signature=807a6b45cc6cd959729796249e2078b1bca49b8f5a308d319cb5263f7923ac16&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:29.373Z'
			}
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
							content: 'uploaded-file-icon',
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
						plain_text: 'uploaded-file-icon',
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
							content: 'Uploaded File Icon',
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
						plain_text: 'Uploaded File Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Uploaded-File-Icon-c7ae46cde8e64c4f8617b35aac4809a3',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '5090a3d9-a163-4323-a5b5-eb9bd6124717',
		created_time: '2021-11-02T08:11:00.000Z',
		last_edited_time: '2021-11-02T08:11:00.000Z',
		has_children: true,
		archived: false,
		type: 'synced_block',
		synced_block: {
			synced_from: null
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
		id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3',
		created_time: '2021-11-01T09:34:00.000Z',
		cover: null,
		icon: {
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a61cbc7-8c85-4cea-9806-94d0ee9205bc/navelgazer-third-eye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040529Z&X-Amz-Expires=3600&X-Amz-Signature=807a6b45cc6cd959729796249e2078b1bca49b8f5a308d319cb5263f7923ac16&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:29.373Z'
			}
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
							content: 'uploaded-file-icon',
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
						plain_text: 'uploaded-file-icon',
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
							content: 'Uploaded File Icon',
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
						plain_text: 'Uploaded File Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Uploaded-File-Icon-c7ae46cde8e64c4f8617b35aac4809a3',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd1af2374-4b7a-4920-ad91-544f37ee22ed',
		created_time: '2021-11-01T19:56:00.000Z',
		last_edited_time: '2021-11-01T19:56:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Some Content',
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
					plain_text: 'Some Content',
					href: null
				}
			]
		}
	}}
	><h1>Some Content</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3',
		created_time: '2021-11-01T09:34:00.000Z',
		cover: null,
		icon: {
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a61cbc7-8c85-4cea-9806-94d0ee9205bc/navelgazer-third-eye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040529Z&X-Amz-Expires=3600&X-Amz-Signature=807a6b45cc6cd959729796249e2078b1bca49b8f5a308d319cb5263f7923ac16&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:29.373Z'
			}
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
							content: 'uploaded-file-icon',
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
						plain_text: 'uploaded-file-icon',
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
							content: 'Uploaded File Icon',
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
						plain_text: 'Uploaded File Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Uploaded-File-Icon-c7ae46cde8e64c4f8617b35aac4809a3',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'bd9b1774-834b-48d8-a7ad-350f21b15949',
		created_time: '2021-11-01T19:56:00.000Z',
		last_edited_time: '2021-11-01T19:56:00.000Z',
		has_children: false,
		archived: false,
		type: 'numbered_list_item',
		numbered_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'First the Lorem',
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
					plain_text: 'First the Lorem',
					href: null
				}
			]
		}
	}}
	><NumberedListItem number="1">First the Lorem</NumberedListItem>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3',
		created_time: '2021-11-01T09:34:00.000Z',
		cover: null,
		icon: {
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a61cbc7-8c85-4cea-9806-94d0ee9205bc/navelgazer-third-eye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040529Z&X-Amz-Expires=3600&X-Amz-Signature=807a6b45cc6cd959729796249e2078b1bca49b8f5a308d319cb5263f7923ac16&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:29.373Z'
			}
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
							content: 'uploaded-file-icon',
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
						plain_text: 'uploaded-file-icon',
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
							content: 'Uploaded File Icon',
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
						plain_text: 'Uploaded File Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Uploaded-File-Icon-c7ae46cde8e64c4f8617b35aac4809a3',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c4e8d77a-19f9-455b-8c21-a78a709aeac5',
		created_time: '2021-11-01T19:56:00.000Z',
		last_edited_time: '2021-11-01T19:56:00.000Z',
		has_children: false,
		archived: false,
		type: 'numbered_list_item',
		numbered_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Then the ipsum',
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
					plain_text: 'Then the ipsum',
					href: null
				}
			]
		}
	}}
	><NumberedListItem number="2">Then the ipsum</NumberedListItem>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'c7ae46cd-e8e6-4c4f-8617-b35aac4809a3',
		created_time: '2021-11-01T09:34:00.000Z',
		cover: null,
		icon: {
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a61cbc7-8c85-4cea-9806-94d0ee9205bc/navelgazer-third-eye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040529Z&X-Amz-Expires=3600&X-Amz-Signature=807a6b45cc6cd959729796249e2078b1bca49b8f5a308d319cb5263f7923ac16&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:29.373Z'
			}
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
							content: 'uploaded-file-icon',
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
						plain_text: 'uploaded-file-icon',
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
							content: 'Uploaded File Icon',
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
						plain_text: 'Uploaded File Icon',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Uploaded-File-Icon-c7ae46cde8e64c4f8617b35aac4809a3',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '607811b6-a16f-448b-9ee4-711cbe6f076a',
		created_time: '2021-11-01T19:56:00.000Z',
		last_edited_time: '2021-11-01T19:56:00.000Z',
		has_children: false,
		archived: false,
		type: 'numbered_list_item',
		numbered_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Then the dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
						'Then the dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
					href: null
				}
			]
		}
	}}
	><NumberedListItem number="3">
		Then the dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
		est Lorem ipsum dolor sit amet.</NumberedListItem
	>
</Magic>
<br style="display:none;" />
