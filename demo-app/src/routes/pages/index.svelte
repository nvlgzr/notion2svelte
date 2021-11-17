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
	<title>This is notion2svelte</title>
</svelte:head>

<Title>This is notion2svelte</Title>

<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'b2ceba29-49e0-4c84-bb5c-9f0c6471b502',
		created_time: '2021-11-15T10:51:00.000Z',
		last_edited_time: '2021-11-15T21:31:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: '"What am I looking at?"',
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
					plain_text: '"What am I looking at?"',
					href: null
				}
			]
		}
	}}
	><h1>"What am I looking at?"</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '7f6c24c0-dda1-4f00-96dd-4919541eb829',
		created_time: '2021-11-15T10:51:00.000Z',
		last_edited_time: '2021-11-15T10:56:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'These are the demo pages for ',
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
					plain_text: 'These are the demo pages for ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '@nvlgzr/notion2svelte',
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
					plain_text: '@nvlgzr/notion2svelte',
					href: 'https://github.com/nvlgzr/notion2svelte'
				},
				{
					type: 'text',
					text: {
						content:
							', a command-line tool for transforming Notion pages into websites of arbitrary complexity. But what does that mean, exactly? Well, at a basic level, it means that ',
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
						', a command-line tool for transforming Notion pages into websites of arbitrary complexity. But what does that mean, exactly? Well, at a basic level, it means that ',
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
						content: ' lets you treat Notion as a ',
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
					plain_text: ' lets you treat Notion as a ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'sort',
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
					plain_text: 'sort',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' of CMS for your web site!',
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
					plain_text: ' of CMS for your web site!',
					href: null
				}
			]
		}
	}}
	><div>
		These are the demo pages for&thinsp;<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>@nvlgzr/notion2svelte</MagicLink
		>, a command-line tool for transforming Notion pages into websites of arbitrary complexity. But
		what does that mean, exactly? Well, at a basic level, it means that&thinsp;<em>notion2svelte</em
		>&thinsp;lets you treat Notion as a&thinsp;<em>sort</em>&thinsp;of CMS for your web site!
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'aa590e7e-cfa8-42c4-8e2c-0a3ce9fcf4b4',
		created_time: '2021-11-15T11:01:00.000Z',
		last_edited_time: '2021-11-15T11:01:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'dc331323-bbc1-4741-9fc0-aad0e89eeb9b',
		created_time: '2021-11-15T11:01:00.000Z',
		last_edited_time: '2021-11-15T11:16:00.000Z',
		has_children: false,
		archived: false,
		type: 'image',
		image: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'A gross over-simplification',
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
					plain_text: 'A gross over-simplification',
					href: null
				}
			],
			type: 'file',
			file: {
				url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48603e70-6ae6-4dd3-a047-51e131f83e57/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040524Z&X-Amz-Expires=3600&X-Amz-Signature=23aeffe042cba1b406a89c3de19f125db2244617f14eb7824a538c9ca17a7128&X-Amz-SignedHeaders=host',
				expiry_time: '2021-11-16T05:05:24.203Z'
			}
		}
	}}
	><Image url="/images/index/dc331323-bbc1-4741-9fc0-aad0e89eeb9b.png"
		>A gross over-simplification</Image
	>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '2ba94893-3640-4fba-95b7-7a16e1257134',
		created_time: '2021-11-15T11:01:00.000Z',
		last_edited_time: '2021-11-15T11:02:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_2',
		heading_2: {
			text: [
				{
					type: 'text',
					text: {
						content: 'What sorts of features are supported?',
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
					plain_text: 'What sorts of features are supported?',
					href: null
				}
			]
		}
	}}
	><h2>What sorts of features are supported?</h2>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '6b2fd1ce-0b07-4a7e-9f0b-3cc024df5e4d',
		created_time: '2021-11-15T11:04:00.000Z',
		last_edited_time: '2021-11-15T11:04:00.000Z',
		has_children: true,
		archived: false,
		type: 'column_list',
		column_list: {},
		blocks: [
			{
				object: 'block',
				id: '1e5f9cb6-b51e-48ce-9423-27590436f194',
				created_time: '2021-11-15T11:04:00.000Z',
				last_edited_time: '2021-11-15T11:04:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: '700e5644-5a86-45cc-b7e8-c221e6240b5d',
						created_time: '2021-11-15T11:02:00.000Z',
						last_edited_time: '2021-11-15T11:04:00.000Z',
						has_children: true,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'These major ',
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
									plain_text: 'These major ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'Block',
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
									plain_text: 'Block',
									href: null
								},
								{
									type: 'text',
									text: {
										content: ' types:',
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
									plain_text: ' types:',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: '9aeac042-5249-4cf6-8cb2-cf8a5e78b137',
								created_time: '2021-11-15T11:02:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'paragraph',
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
											plain_text: 'paragraph',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'b48a83cd-b0c6-469e-ad2a-235a4a3a7f15',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'bulleted_list_item',
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
											plain_text: 'bulleted_list_item',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '993b39f5-92bb-4273-af41-9a414c9596ab',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'numbered_list_item',
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
											plain_text: 'numbered_list_item',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'd3c8bc4a-b2b6-40fd-8f29-b91d699903b3',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'toggle',
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
											plain_text: 'toggle',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '65f70a6e-d015-4626-bbd6-20c580f5c7ad',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'to_do',
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
											plain_text: 'to_do',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'f1324cc7-547f-4430-828e-ab339ff90bf1',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'quote',
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
											plain_text: 'quote',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'e80aafa1-276a-4e45-a2d1-79d3e894be06',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:03:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'callout',
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
											plain_text: 'callout',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '4339d578-e035-4642-8944-6b1990382684',
								created_time: '2021-11-15T11:03:00.000Z',
								last_edited_time: '2021-11-15T11:20:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'child_page*',
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
											plain_text: 'child_page*',
											href: null
										}
									]
								}
							}
						]
					}
				]
			},
			{
				object: 'block',
				id: '6a2becd6-6688-4d38-9472-67878bc56ff2',
				created_time: '2021-11-15T11:04:00.000Z',
				last_edited_time: '2021-11-15T11:14:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: '894f401b-327b-4bf8-a075-ba919239e5da',
						created_time: '2021-11-15T11:04:00.000Z',
						last_edited_time: '2021-11-15T11:58:00.000Z',
						has_children: true,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'All ',
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
									plain_text: 'All ',
									href: null
								},
								{
									type: 'text',
									text: {
										content: 'Annotation',
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
									plain_text: 'Annotation',
									href: null
								},
								{
									type: 'text',
									text: {
										content: ' types (aka styles):',
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
									plain_text: ' types (aka styles):',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: 'e3a799ee-9ece-4dd8-9254-57bbe58e2f81',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:04:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'bold',
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
											plain_text: 'bold',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '4d82cee6-60d1-46de-a36f-0763b98704e8',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:04:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'italic',
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
											plain_text: 'italic',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '402175fd-93fe-4c1b-a181-7e90dce4c5be',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:05:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'strikethrough',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: true,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: 'strikethrough',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'ac4f6ba4-626a-43c7-8f59-8e143aa81954',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:52:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'underline',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: true,
												code: false,
												color: 'default'
											},
											plain_text: 'underline',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: 'af4aadb0-a22d-4179-9ea6-cb18b7e46908',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:58:00.000Z',
								has_children: true,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
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
										}
									]
								},
								blocks: [
									{
										object: 'block',
										id: '795f6a66-a89d-4a17-9106-3cdf0d0a5aa2',
										created_time: '2021-11-15T11:58:00.000Z',
										last_edited_time: '2021-11-15T11:58:00.000Z',
										has_children: false,
										archived: false,
										type: 'paragraph',
										paragraph: {
											text: [
												{
													type: 'text',
													text: {
														content: '(Including background ',
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
													plain_text: '(Including background ',
													href: null
												},
												{
													type: 'text',
													text: {
														content: 'c',
														link: null
													},
													annotations: {
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'green_background'
													},
													plain_text: 'c',
													href: null
												},
												{
													type: 'text',
													text: {
														content: 'o',
														link: null
													},
													annotations: {
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'orange_background'
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
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'pink_background'
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
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'purple_background'
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
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'blue_background'
													},
													plain_text: 'r',
													href: null
												},
												{
													type: 'text',
													text: {
														content: 's',
														link: null
													},
													annotations: {
														bold: true,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'brown_background'
													},
													plain_text: 's',
													href: null
												},
												{
													type: 'text',
													text: {
														content: ')',
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
													plain_text: ')',
													href: null
												}
											]
										}
									}
								]
							},
							{
								object: 'block',
								id: '11358ab6-2357-488f-b7e3-fce7cf59debb',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:07:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'code',
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
											plain_text: 'code',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '316a7ac4-daca-4040-8043-ff85228ac520',
								created_time: '2021-11-15T11:07:00.000Z',
								last_edited_time: '2021-11-15T11:07:00.000Z',
								has_children: false,
								archived: false,
								type: 'paragraph',
								paragraph: {
									text: [
										{
											type: 'text',
											text: {
												content: 'and',
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
											plain_text: 'and',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '882e71e5-5bdc-4d6f-9941-652d8346748c',
								created_time: '2021-11-15T11:04:00.000Z',
								last_edited_time: '2021-11-15T11:20:00.000Z',
								has_children: false,
								archived: false,
								type: 'bulleted_list_item',
								bulleted_list_item: {
									text: [
										{
											type: 'text',
											text: {
												content: 'external',
												link: {
													url: 'https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html'
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
											plain_text: 'external',
											href: 'https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html'
										},
										{
											type: 'text',
											text: {
												content: ' & ',
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
											plain_text: ' & ',
											href: null
										},
										{
											type: 'text',
											text: {
												content: 'internal links',
												link: {
													url: '/00ab16ed9990405bad93af936fbebdce'
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
											plain_text: 'internal links',
											href: '/00ab16ed9990405bad93af936fbebdce'
										}
									]
								}
							}
						]
					}
				]
			}
		]
	}}
	><ColumnList cols={2}
		><Column
			><BulletedListItem>These major&thinsp;<strong>Block</strong>&thinsp;types:</BulletedListItem>
			<IndentGroup>
				<BulletedListItem>paragraph</BulletedListItem>
				<BulletedListItem>bulleted_list_item</BulletedListItem>
				<BulletedListItem>numbered_list_item</BulletedListItem>
				<BulletedListItem>toggle</BulletedListItem>
				<BulletedListItem>to_do</BulletedListItem>
				<BulletedListItem>quote</BulletedListItem>
				<BulletedListItem>callout</BulletedListItem>
				<BulletedListItem>child_page*</BulletedListItem>
			</IndentGroup>
		</Column><Column
			><BulletedListItem
				>All&thinsp;<strong>Annotation</strong>&thinsp;types (aka styles):</BulletedListItem
			>
			<IndentGroup>
				<BulletedListItem><strong>bold</strong></BulletedListItem>
				<BulletedListItem><em>italic</em></BulletedListItem>
				<BulletedListItem><s>strikethrough</s></BulletedListItem>
				<BulletedListItem
					><span style="text-decoration:underline;">underline</span></BulletedListItem
				>
				<BulletedListItem
					><InlineColor value="red">C</InlineColor><InlineColor value="orange">o</InlineColor
					><InlineColor value="yellow">l</InlineColor><InlineColor value="green">o</InlineColor
					><InlineColor value="blue">r</InlineColor></BulletedListItem
				>
				<IndentGroup>
					<div>
						(Including background&thinsp;<InlineColor value="green_background"
							><strong>c</strong></InlineColor
						><InlineColor value="orange_background"><strong>o</strong></InlineColor><InlineColor
							value="pink_background"><strong>l</strong></InlineColor
						><InlineColor value="purple_background"><strong>o</strong></InlineColor><InlineColor
							value="blue_background"><strong>r</strong></InlineColor
						><InlineColor value="brown_background"><strong>s</strong></InlineColor>)
					</div>
				</IndentGroup>
				<BulletedListItem><InlineCode>code</InlineCode></BulletedListItem>
				<div>and</div>
				<BulletedListItem
					><MagicLink
						href="https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html"
						>external</MagicLink
					>&thinsp;&&thinsp;<a href="links-and-sub_pages">internal links</a></BulletedListItem
				>
			</IndentGroup>
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ff80bb1a-d2e1-496d-ac92-10f43385bfc3',
		created_time: '2021-11-15T11:14:00.000Z',
		last_edited_time: '2021-11-15T23:11:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"You may also have noticed that we've got columns here ↑. These match the 2-column layout I created in the ",
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
						"You may also have noticed that we've got columns here ↑. These match the 2-column layout I created in the ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'source doc',
						link: {
							url: '/2c97ea2f4abe4fcb80ed0e478560ab04'
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
					plain_text: 'source doc',
					href: '/2c97ea2f4abe4fcb80ed0e478560ab04'
				},
				{
					type: 'text',
					text: {
						content: ' on Notion.',
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
					plain_text: ' on Notion.',
					href: null
				}
			]
		}
	}}
	><div>
		You may also have noticed that we've got columns here ↑. These match the 2-column layout I
		created in the&thinsp;<a href="index">source doc</a>&thinsp;on Notion.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '155057d1-07a3-471a-b7ed-fab6fb166353',
		created_time: '2021-11-15T23:11:00.000Z',
		last_edited_time: '2021-11-15T23:12:00.000Z',
		has_children: true,
		archived: false,
		type: 'callout',
		callout: {
			text: [],
			icon: {
				type: 'emoji',
				emoji: '🌟'
			}
		},
		blocks: [
			{
				object: 'block',
				id: '3ebbfa5b-9c78-40cb-887b-d456c0313826',
				created_time: '2021-11-15T23:12:00.000Z',
				last_edited_time: '2021-11-15T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_1',
				heading_1: {
					text: [
						{
							type: 'text',
							text: {
								content: "But wait, there's more!",
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
							plain_text: "But wait, there's more!",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '562a6c7d-3551-45c9-8360-d441d3e13964',
				created_time: '2021-11-15T23:11:00.000Z',
				last_edited_time: '2021-11-15T23:11:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			}
		]
	}}
	><Callout emoji="🌟"
		><span slot="children"
			><h1>But wait, there's more!</h1>
			<div />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '89085547-1e11-455e-9e01-2cb451a6592a',
		created_time: '2021-11-15T11:16:00.000Z',
		last_edited_time: '2021-11-15T11:23:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: "We've got ",
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
					plain_text: "We've got ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'equations',
						link: {
							url: '/83792b449a184037ae2415bc07543054'
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
					plain_text: 'equations',
					href: '/83792b449a184037ae2415bc07543054'
				},
				{
					type: 'text',
					text: {
						content: ', inline and block, ',
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
					plain_text: ', inline and block, ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'embeds',
						link: {
							url: '/3eb9830ee68e4c5d81712b75660a2e34'
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
					plain_text: 'embeds',
					href: '/3eb9830ee68e4c5d81712b75660a2e34'
				},
				{
					type: 'text',
					text: {
						content: ', images (downloaded directly to a directory of your choice), ',
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
					plain_text: ', images (downloaded directly to a directory of your choice), ',
					href: null
				}
			]
		}
	}}
	><div>
		We've got&thinsp;<a href="equations">equations</a>, inline and block,&thinsp;<a href="embeds"
			>embeds</a
		>, images (downloaded directly to a directory of your choice),&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'e8b3495b-3f94-4690-b3e1-95db3819424c',
		created_time: '2021-11-15T11:18:00.000Z',
		last_edited_time: '2021-11-15T11:34:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'In addition, ',
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
					plain_text: 'In addition, ',
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
							" automatically handles arbitrary levels of indentation (including 1./a./i. outlining), page covers, and page icons. There are still some things — e.g., synced blocks, databases, and link previews — that notion2svelte doesn't yet handle, but all the basics are here.",
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
						" automatically handles arbitrary levels of indentation (including 1./a./i. outlining), page covers, and page icons. There are still some things — e.g., synced blocks, databases, and link previews — that notion2svelte doesn't yet handle, but all the basics are here.",
					href: null
				}
			]
		}
	}}
	><div>
		In addition,&thinsp;<em>notion2svelte</em>&thinsp;automatically handles arbitrary levels of
		indentation (including 1./a./i. outlining), page covers, and page icons. There are still some
		things — e.g., synced blocks, databases, and link previews — that notion2svelte doesn't yet
		handle, but all the basics are here.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '21af8422-ae20-40d4-8236-3bc33dc8fa76',
		created_time: '2021-11-15T23:12:00.000Z',
		last_edited_time: '2021-11-15T23:12:00.000Z',
		has_children: true,
		archived: false,
		type: 'callout',
		callout: {
			text: [],
			icon: {
				type: 'emoji',
				emoji: '🤯'
			}
		},
		blocks: [
			{
				object: 'block',
				id: '2dc25b7b-91ae-4246-bb4f-63c188b94429',
				created_time: '2021-11-15T23:12:00.000Z',
				last_edited_time: '2021-11-15T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_1',
				heading_1: {
					text: [
						{
							type: 'text',
							text: {
								content: "Wait, what? There's more?",
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
							plain_text: "Wait, what? There's more?",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '167c8ed4-9789-4621-bcfa-abbe19489a06',
				created_time: '2021-11-15T23:12:00.000Z',
				last_edited_time: '2021-11-15T23:12:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			}
		]
	}}
	><Callout emoji="🤯"
		><span slot="children"
			><h1>Wait, what? There's more?</h1>
			<div />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '9763591e-ba97-4668-ab86-80fccf4b0036',
		created_time: '2021-11-15T11:23:00.000Z',
		last_edited_time: '2021-11-15T11:24:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Yep!',
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
					plain_text: 'Yep!',
					href: null
				}
			]
		}
	}}
	><h3>Yep!</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '6b40a63e-547c-4262-affe-dc63b2087b35',
		created_time: '2021-11-15T11:24:00.000Z',
		last_edited_time: '2021-11-15T11:27:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Since ',
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
					plain_text: 'Since ',
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
							" lets you† create your own components and styles, the sky's the limit to the customizations you can make to your site. Put things where you want. Make them behave how you want. All while leveraging Notion's delightful writing experience for content creation.",
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
						" lets you† create your own components and styles, the sky's the limit to the customizations you can make to your site. Put things where you want. Make them behave how you want. All while leveraging Notion's delightful writing experience for content creation.",
					href: null
				}
			]
		}
	}}
	><div>
		Since&thinsp;<em>notion2svelte</em>&thinsp;lets you† create your own components and styles, the
		sky's the limit to the customizations you can make to your site. Put things where you want. Make
		them behave how you want. All while leveraging Notion's delightful writing experience for
		content creation.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '08bb40c8-d417-470c-ad08-14e5dc0a9d28',
		created_time: '2021-11-15T11:28:00.000Z',
		last_edited_time: '2021-11-15T11:30:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"Since that's kinda abstract, I've added a handful of arbitrary customizations to ",
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
						"Since that's kinda abstract, I've added a handful of arbitrary customizations to ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: "notion2svelte's",
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
					plain_text: "notion2svelte's",
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' otherwise-hastily-implemented design.',
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
					plain_text: ' otherwise-hastily-implemented design.',
					href: null
				}
			]
		}
	}}
	><div>
		Since that's kinda abstract, I've added a handful of arbitrary customizations to&thinsp;<em
			>notion2svelte's</em
		>&thinsp;otherwise-hastily-implemented design.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ff6cd1f1-4e9f-4528-a97c-56bc7dea8e84',
		created_time: '2021-11-15T11:30:00.000Z',
		last_edited_time: '2021-11-15T11:30:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'To see what I mean, check out…',
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
					plain_text: 'To see what I mean, check out…',
					href: null
				}
			]
		}
	}}
	><div>To see what I mean, check out…</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '26436380-b9e0-4fd9-b0b4-3fb829faeab6',
		created_time: '2021-11-15T11:37:00.000Z',
		last_edited_time: '2021-11-15T11:37:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '2cff855b-d3df-4b8d-b012-223b2c919f81',
		created_time: '2021-11-15T11:30:00.000Z',
		last_edited_time: '2021-11-15T11:37:00.000Z',
		has_children: false,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Color-changing callouts',
						link: {
							url: '/97c150a64f394fd5b10b8e8cc0d2ec82'
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
					plain_text: 'Color-changing callouts',
					href: '/97c150a64f394fd5b10b8e8cc0d2ec82'
				}
			]
		}
	}}
	><BulletedListItem><a href="callouts">Color-changing callouts</a></BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '9060670d-9828-49ab-b1f2-a1b34c5cbb2f',
		created_time: '2021-11-15T11:31:00.000Z',
		last_edited_time: '2021-11-15T23:51:00.000Z',
		has_children: false,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Animate your cover art',
						link: {
							url: '/8eb305de5ebe43a480cb0ec7c9df5ab7'
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
					plain_text: 'Animate your cover art',
					href: '/8eb305de5ebe43a480cb0ec7c9df5ab7'
				}
			]
		}
	}}
	><BulletedListItem><a href="cover-only">Animate your cover art</a></BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1904638b-69bf-47e2-8217-331f462581d3',
		created_time: '2021-11-15T11:34:00.000Z',
		last_edited_time: '2021-11-15T11:37:00.000Z',
		has_children: false,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Custom navigation (see bottom of each demo page)',
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
					plain_text: 'Custom navigation (see bottom of each demo page)',
					href: null
				}
			]
		}
	}}
	><BulletedListItem>Custom navigation (see bottom of each demo page)</BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '0e8a3608-50f4-44e8-a75b-1ab094e9c5b8',
		created_time: '2021-11-15T11:36:00.000Z',
		last_edited_time: '2021-11-15T11:37:00.000Z',
		has_children: true,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content: 'and even custom dividers like this one ↓',
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
					plain_text: 'and even custom dividers like this one ↓',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: '94145b36-c3d9-480b-a359-f8c3ac46a08a',
				created_time: '2021-11-15T11:36:00.000Z',
				last_edited_time: '2021-11-15T11:36:00.000Z',
				has_children: false,
				archived: false,
				type: 'divider',
				divider: {}
			}
		]
	}}
	><BulletedListItem>and even custom dividers like this one ↓</BulletedListItem>
	<IndentGroup>
		<Divider />
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '474730f5-767a-475a-acb3-663a5abbd115',
		created_time: '2021-11-15T11:30:00.000Z',
		last_edited_time: '2021-11-15T23:13:00.000Z',
		has_children: false,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Lastly, if you want to see all the crazy things in a single chaotic document, you ',
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
						'Lastly, if you want to see all the crazy things in a single chaotic document, you ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'can',
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
					plain_text: 'can',
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
	><BulletedListItem
		>Lastly, if you want to see all the crazy things in a single chaotic document, you&thinsp;<a
			href="kitchen-sink">can</a
		>.</BulletedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '11a793cd-b4b4-428d-8d12-c323a685e7d4',
		created_time: '2021-11-15T23:15:00.000Z',
		last_edited_time: '2021-11-15T23:16:00.000Z',
		has_children: true,
		archived: false,
		type: 'callout',
		callout: {
			text: [],
			icon: {
				type: 'emoji',
				emoji: '🤔'
			}
		},
		blocks: [
			{
				object: 'block',
				id: '66744765-4834-4198-b924-4a7441b1a743',
				created_time: '2021-11-15T23:15:00.000Z',
				last_edited_time: '2021-11-15T23:15:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_1',
				heading_1: {
					text: [
						{
							type: 'text',
							text: {
								content: '"Lastly," huh? You sure this isn\'t one of those Steve Jobs ',
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
							plain_text: '"Lastly," huh? You sure this isn\'t one of those Steve Jobs ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'one more thing',
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
							plain_text: 'one more thing',
							href: null
						},
						{
							type: 'text',
							text: {
								content: ' scenarios?',
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
							plain_text: ' scenarios?',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'b477d701-6772-40ae-a130-19e2fc4d571f',
				created_time: '2021-11-15T23:15:00.000Z',
				last_edited_time: '2021-11-15T23:15:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			}
		]
	}}
	><Callout emoji="🤔"
		><span slot="children"
			><h1>
				"Lastly," huh? You sure this isn't one of those Steve Jobs&thinsp;<em>one more thing</em
				>&thinsp;scenarios?
			</h1>
			<div />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ea7ed30b-c6b6-4d90-b306-f92b978c2781',
		created_time: '2021-11-15T23:15:00.000Z',
		last_edited_time: '2021-11-15T23:16:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Ok. You got me. Let me introduce you to a highly-experimental pair of features I call…',
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
						'Ok. You got me. Let me introduce you to a highly-experimental pair of features I call…',
					href: null
				}
			]
		}
	}}
	><div>Ok. You got me. Let me introduce you to a highly-experimental pair of features I call…</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '23a8c6b6-ab22-4fae-9b98-9e63137e5060',
		created_time: '2021-11-15T11:37:00.000Z',
		last_edited_time: '2021-11-15T11:40:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Magic',
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
					plain_text: 'Magic',
					href: null
				}
			]
		}
	}}
	><h3>Magic</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '810c3f08-d2fa-4ac1-b3c5-e64b6c1902f7',
		created_time: '2021-11-15T11:39:00.000Z',
		last_edited_time: '2021-11-15T12:07:00.000Z',
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
						content: ' wraps every block in a ',
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
					plain_text: ' wraps every block in a ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '&lt;Magic>',
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
					plain_text: '&lt;Magic>',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							' component and passes it the associated JSON for both the page and the block.  I plan to use it to attach a feedback UX to every published block, but this demo shows something slightly less ambitious.',
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
						' component and passes it the associated JSON for both the page and the block.  I plan to use it to attach a feedback UX to every published block, but this demo shows something slightly less ambitious.',
					href: null
				}
			]
		}
	}}
	><div>
		<em>notion2svelte</em>&thinsp;wraps every block in a&thinsp;<InlineCode>&lt;Magic></InlineCode
		>&thinsp;component and passes it the associated JSON for both the page and the block. I plan to
		use it to attach a feedback UX to every published block, but this demo shows something slightly
		less ambitious.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ec4be7bb-c165-4e44-8b98-e3ca68137f47',
		created_time: '2021-11-15T11:49:00.000Z',
		last_edited_time: '2021-11-15T11:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'To see what I mean, type ',
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
					plain_text: 'To see what I mean, type ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'i',
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
					plain_text: 'i',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							" on your keyboard, then mouse over any block. If all goes well, you should see the source JSON, straight from Notion's API, for the block in question. Personally, I use this all the time while developing notion2svelte because it significantly reduces the time required to compare the input JSON with the html output.",
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
						" on your keyboard, then mouse over any block. If all goes well, you should see the source JSON, straight from Notion's API, for the block in question. Personally, I use this all the time while developing notion2svelte because it significantly reduces the time required to compare the input JSON with the html output.",
					href: null
				}
			]
		}
	}}
	><div>
		To see what I mean, type&thinsp;<InlineCode>i</InlineCode>&thinsp;on your keyboard, then mouse
		over any block. If all goes well, you should see the source JSON, straight from Notion's API,
		for the block in question. Personally, I use this all the time while developing notion2svelte
		because it significantly reduces the time required to compare the input JSON with the html
		output.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '883b7ffa-f35b-4ab7-950f-28206ec12ce9',
		created_time: '2021-11-15T11:49:00.000Z',
		last_edited_time: '2021-11-15T11:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Magic Links',
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
					plain_text: 'Magic Links',
					href: null
				}
			]
		}
	}}
	><h3>Magic Links</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '7fdf9fab-6083-4c39-a970-8d846863a630',
		created_time: '2021-11-15T11:49:00.000Z',
		last_edited_time: '2021-11-15T12:08:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Similarly, links are rendered as ',
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
					plain_text: 'Similarly, links are rendered as ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '&lt;MagicLink>',
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
					plain_text: '&lt;MagicLink>',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							' components, making it possible, for example, to toggle all external-facing links on the page. Try it out! Type ',
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
						' components, making it possible, for example, to toggle all external-facing links on the page. Try it out! Type ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'd',
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
					plain_text: 'd',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' (for "distractions") to see ',
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
					plain_text: ' (for "distractions") to see ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'links like this one',
						link: {
							url: 'https://xkcd.com/2536/'
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
					plain_text: 'links like this one',
					href: 'https://xkcd.com/2536/'
				},
				{
					type: 'text',
					text: {
						content: " toggle between 'hint' and 'live' modes.",
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
					plain_text: " toggle between 'hint' and 'live' modes.",
					href: null
				}
			]
		}
	}}
	><div>
		Similarly, links are rendered as&thinsp;<InlineCode>&lt;MagicLink></InlineCode
		>&thinsp;components, making it possible, for example, to toggle all external-facing links on the
		page. Try it out! Type&thinsp;<InlineCode>d</InlineCode>&thinsp;(for "distractions") to
		see&thinsp;<MagicLink href="https://xkcd.com/2536/">links like this one</MagicLink
		>&thinsp;toggle between 'hint' and 'live' modes.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '4619b7b2-d2f4-4de3-8beb-fd67140f234e',
		created_time: '2021-11-15T11:44:00.000Z',
		last_edited_time: '2021-11-15T11:44:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '8c9eacdf-099c-4688-9489-aecd27fca0db',
		created_time: '2021-11-15T11:44:00.000Z',
		last_edited_time: '2021-11-15T11:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: ' How you use this is up to you.',
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
					plain_text: ' How you use this is up to you.',
					href: null
				}
			]
		}
	}}
	><div>&thinsp;How you use this is up to you.</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'fc0662ca-3bb0-4700-b769-aca9086d649c',
		created_time: '2021-11-15T11:45:00.000Z',
		last_edited_time: '2021-11-15T11:45:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: []
		}
	}}
	><h1 />
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'dfbd74d8-b0dc-4385-8e18-466a04f69740',
		created_time: '2021-11-15T10:56:00.000Z',
		last_edited_time: '2021-11-15T11:45:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: "What's next?",
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
					plain_text: "What's next?",
					href: null
				}
			]
		}
	}}
	><h1>What's next?</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '7cea1e54-4c58-4551-bfb6-5167de918465',
		created_time: '2021-11-15T11:27:00.000Z',
		last_edited_time: '2021-11-15T11:28:00.000Z',
		has_children: false,
		archived: false,
		type: 'bulleted_list_item',
		bulleted_list_item: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Explore the various test pages at the bottom of the page to see all of this in action.',
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
						'Explore the various test pages at the bottom of the page to see all of this in action.',
					href: null
				}
			]
		}
	}}
	><BulletedListItem
		>Explore the various test pages at the bottom of the page to see all of this in action.</BulletedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '48d04be7-0b37-4f7d-bc94-16eda5b1ec19',
		created_time: '2021-11-15T11:28:00.000Z',
		last_edited_time: '2021-11-15T11:28:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '37c63408-5f95-4d94-931e-2c9c4aa73cbc',
		created_time: '2021-11-15T10:53:00.000Z',
		last_edited_time: '2021-11-15T10:54:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Well, with ',
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
					plain_text: 'Well, with ',
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
						content: ', you ',
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
					plain_text: ', you ',
					href: null
				}
			]
		}
	}}
	><div>
		Well, with&thinsp;<em>notion2svelte</em>, you&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd168982e-a30d-4f26-bde0-98d5253edfc0',
		created_time: '2021-11-09T21:55:00.000Z',
		last_edited_time: '2021-11-09T22:17:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: "I write. A lot. And most of the time, I'm writing in ",
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
					plain_text: "I write. A lot. And most of the time, I'm writing in ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'Notion',
						link: {
							url: 'https://notion.so'
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
					plain_text: 'Notion',
					href: 'https://notion.so'
				},
				{
					type: 'text',
					text: {
						content:
							". That's just a fact, and it defines the Input side of my publishing dreams. But what about the output? That's a bit complex because there isn't an existing tool (that I know of) that covers my strange and geeky criteria for my Ideal Publishing Platform (IPP).",
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
						". That's just a fact, and it defines the Input side of my publishing dreams. But what about the output? That's a bit complex because there isn't an existing tool (that I know of) that covers my strange and geeky criteria for my Ideal Publishing Platform (IPP).",
					href: null
				}
			]
		}
	}}
	><div>
		I write. A lot. And most of the time, I'm writing in&thinsp;<MagicLink href="https://notion.so"
			>Notion</MagicLink
		>. That's just a fact, and it defines the Input side of my publishing dreams. But what about the
		output? That's a bit complex because there isn't an existing tool (that I know of) that covers
		my strange and geeky criteria for my Ideal Publishing Platform (IPP).
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c0519dcc-c60b-49ae-ad30-772bce67aaf0',
		created_time: '2021-11-09T22:17:00.000Z',
		last_edited_time: '2021-11-09T22:21:00.000Z',
		has_children: true,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: []
		},
		blocks: [
			{
				object: 'block',
				id: '252c7baf-7658-47af-a061-8c8d0278ff51',
				created_time: '2021-11-09T22:17:00.000Z',
				last_edited_time: '2021-11-09T22:18:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'My IPP (codenamed in my notes, ',
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
							plain_text: 'My IPP (codenamed in my notes, ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'Ouroboros',
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
							plain_text: 'Ouroboros',
							href: null
						},
						{
							type: 'text',
							text: {
								content: ') has these criteria:',
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
							plain_text: ') has these criteria:',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '6608ed68-9f06-4640-9686-828620712afd',
				created_time: '2021-11-09T22:18:00.000Z',
				last_edited_time: '2021-11-09T22:19:00.000Z',
				has_children: false,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: "Custom domain (pretty standard, but Notion still doesn't support it)",
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
							plain_text: "Custom domain (pretty standard, but Notion still doesn't support it)",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'fa777048-46e5-42a7-b0a1-692620af0400',
				created_time: '2021-11-09T22:19:00.000Z',
				last_edited_time: '2021-11-09T22:21:00.000Z',
				has_children: false,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Custom design — my own styles, layout, navigation, etc.',
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
							plain_text: 'Custom design — my own styles, layout, navigation, etc.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '5e7a2cae-599c-4c36-9216-b9c97f286de8',
				created_time: '2021-11-09T22:15:00.000Z',
				last_edited_time: '2021-11-09T22:21:00.000Z',
				has_children: false,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Maximum long-term maintainability',
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
							plain_text: 'Maximum long-term maintainability',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '358e1587-0d20-46f0-bea7-79ffbf433b38',
				created_time: '2021-11-09T22:21:00.000Z',
				last_edited_time: '2021-11-09T22:21:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			},
			{
				object: 'block',
				id: '52047d69-c79c-4555-8e06-4bda03586622',
				created_time: '2021-11-09T22:20:00.000Z',
				last_edited_time: '2021-11-09T22:30:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'In short: ',
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
							plain_text: 'In short: ',
							href: null
						},
						{
							type: 'text',
							text: {
								content: 'maximum freedom, minimum fuss.',
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
							plain_text: 'maximum freedom, minimum fuss.',
							href: null
						}
					]
				}
			}
		]
	}}
	><div />
	<IndentGroup>
		<div>
			My IPP (codenamed in my notes,&thinsp;<em>Ouroboros</em>) has these criteria:
		</div>
		<BulletedListItem
			>Custom domain (pretty standard, but Notion still doesn't support it)</BulletedListItem
		>
		<BulletedListItem>Custom design — my own styles, layout, navigation, etc.</BulletedListItem>
		<BulletedListItem>Maximum long-term maintainability</BulletedListItem>
		<div />
		<div>
			In short:&thinsp;<strong>maximum freedom, minimum fuss.</strong>
		</div>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '69967da3-4111-4787-8741-d3559cbcf55e',
		created_time: '2021-11-09T22:38:00.000Z',
		last_edited_time: '2021-11-09T22:38:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c51de137-bd0c-4029-9366-3abab25f46d6',
		created_time: '2021-11-09T22:38:00.000Z',
		last_edited_time: '2021-11-09T22:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"Whereas Notion makes writing prose easy and beautiful and, dare I say, even fun, Svelte does the same for the code side of things. Once my words are in the context of Svelte pages, the sky's the limit for not just how they look, but also how they ",
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
						"Whereas Notion makes writing prose easy and beautiful and, dare I say, even fun, Svelte does the same for the code side of things. Once my words are in the context of Svelte pages, the sky's the limit for not just how they look, but also how they ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'work',
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
					plain_text: 'work',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '. As Michael Butterick put it: ',
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
					plain_text: '. As Michael Butterick put it: ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'the book is a program',
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
					plain_text: 'the book is a program',
					href: 'https://docs.racket-lang.org/pollen/'
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
		Whereas Notion makes writing prose easy and beautiful and, dare I say, even fun, Svelte does the
		same for the code side of things. Once my words are in the context of Svelte pages, the sky's
		the limit for not just how they look, but also how they&thinsp;<em>work</em>. As Michael
		Butterick put it:&thinsp;<MagicLink href="https://docs.racket-lang.org/pollen/"
			>the book is a program</MagicLink
		>.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ce87a363-0c67-4b4c-9004-addcd0852e48',
		created_time: '2021-11-09T22:47:00.000Z',
		last_edited_time: '2021-11-09T22:47:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '14380520-4943-4de2-afc1-68a976a65d51',
		created_time: '2021-11-09T22:47:00.000Z',
		last_edited_time: '2021-11-09T22:47:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'How does ',
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
					plain_text: 'How does ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
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
					plain_text: 'notion2svelte',
					href: 'https://github.com/nvlgzr/notion2svelte'
				},
				{
					type: 'text',
					text: {
						content: " fit in? Well, if the name isn't enough of a giveaway, I use ",
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
					plain_text: " fit in? Well, if the name isn't enough of a giveaway, I use ",
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
						content: ' to convert my notion pages into .svelte files.',
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
					plain_text: ' to convert my notion pages into .svelte files.',
					href: null
				}
			]
		}
	}}
	><div>
		How does&thinsp;<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>notion2svelte</MagicLink
		>&thinsp;fit in? Well, if the name isn't enough of a giveaway, I use&thinsp;<em
			>notion2svelte</em
		>&thinsp;to convert my notion pages into .svelte files.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd2ab2bc3-4c0c-4435-88df-b3efc6e572b1',
		created_time: '2021-11-09T22:47:00.000Z',
		last_edited_time: '2021-11-09T22:47:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '33661f34-b34d-4778-96a9-d94e8705d24e',
		created_time: '2021-11-09T22:47:00.000Z',
		last_edited_time: '2021-11-09T22:47:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '863447c9-a397-455b-a0eb-5734c15d81b7',
		created_time: '2021-11-09T21:40:00.000Z',
		last_edited_time: '2021-11-09T21:53:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'So. What are we looking at here?',
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
					plain_text: 'So. What are we looking at here?',
					href: null
				}
			]
		}
	}}
	><div>So. What are we looking at here?</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '648c086c-3aea-400e-b667-ff0283fde7a4',
		created_time: '2021-11-09T21:40:00.000Z',
		last_edited_time: '2021-11-09T21:40:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ef251b52-7096-474c-8aa7-5b29112634e8',
		created_time: '2021-11-09T21:40:00.000Z',
		last_edited_time: '2021-11-09T21:49:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"Each page below started life as a page in a single Notion database. It's open to the public, so you can can ",
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
						"Each page below started life as a page in a single Notion database. It's open to the public, so you can can ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'check it out if you like',
						link: {
							url: '/c317033af18a479fbbfb7072cc7f53da?v=d6af76dea3be43eeb9428efce104d242'
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
					plain_text: 'check it out if you like',
					href: '/c317033af18a479fbbfb7072cc7f53da?v=d6af76dea3be43eeb9428efce104d242'
				},
				{
					type: 'text',
					text: {
						content:
							". If you're into publishing jargon, think of Notion as the CMS in this scenario.",
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
						". If you're into publishing jargon, think of Notion as the CMS in this scenario.",
					href: null
				}
			]
		}
	}}
	><div>
		Each page below started life as a page in a single Notion database. It's open to the public, so
		you can can&thinsp;<MagicLink
			href="/c317033af18a479fbbfb7072cc7f53da?v=d6af76dea3be43eeb9428efce104d242"
			>check it out if you like</MagicLink
		>. If you're into publishing jargon, think of Notion as the CMS in this scenario.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'dc632771-ca65-46cf-981a-dbc1d96a07ac',
		created_time: '2021-11-09T21:49:00.000Z',
		last_edited_time: '2021-11-09T21:49:00.000Z',
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
<Magic
	page={{
		object: 'page',
		id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
		created_time: '2021-11-09T21:40:00.000Z',
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
							content: 'index',
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
						plain_text: 'index',
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
							content: 'This is notion2svelte',
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
						plain_text: 'This is notion2svelte',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/This-is-notion2svelte-2c97ea2f4abe4fcb80ed0e478560ab04',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '380eea2e-ff3c-4fef-9c11-cda8051cb0fa',
		created_time: '2021-11-09T21:49:00.000Z',
		last_edited_time: '2021-11-09T21:53:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'When I was ready to pre-flight each page, I marked its Status as ',
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
					plain_text: 'When I was ready to pre-flight each page, I marked its Status as ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'Publish me! ',
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
					plain_text: 'Publish me! ',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							'in the page props, gave the page a slug to determine its eventual URL, then ran ',
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
						'in the page props, gave the page a slug to determine its eventual URL, then ran ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
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
					plain_text: 'notion2svelte',
					href: 'https://github.com/nvlgzr/notion2svelte'
				},
				{
					type: 'text',
					text: {
						content: ' on my laptop. (There was som setup involved there. See the ',
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
					plain_text: ' on my laptop. (There was som setup involved there. See the ',
					href: null
				}
			]
		}
	}}
	><div>
		When I was ready to pre-flight each page, I marked its Status as&thinsp;<em
			>Publish me!&thinsp;</em
		>in the page props, gave the page a slug to determine its eventual URL, then ran&thinsp;<MagicLink
			href="https://github.com/nvlgzr/notion2svelte">notion2svelte</MagicLink
		>&thinsp;on my laptop. (There was som setup involved there. See the&thinsp;
	</div>
</Magic>
<br style="display:none;" />
