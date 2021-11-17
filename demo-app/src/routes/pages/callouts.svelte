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
	<title>Callouts</title>
</svelte:head>

<Title>Callouts</Title>

<Magic
	page={{
		object: 'page',
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '20c310ca-8ae0-4590-90a5-756b664e23df',
		created_time: '2021-10-31T09:36:00.000Z',
		last_edited_time: '2021-10-31T09:36:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: "Here's some normal text, for reference.",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: "Here's some normal text, for reference.",
					href: null
				}
			]
		}
	}}
	><div>Here's some normal text, for reference.</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1a0a06cb-1897-4275-ae7f-c55d422427f3',
		created_time: '2021-10-31T06:27:00.000Z',
		last_edited_time: '2021-11-13T04:47:00.000Z',
		has_children: false,
		archived: false,
		type: 'callout',
		callout: {
			text: [
				{
					type: 'text',
					text: {
						content: 'The simplest of callouts, with default styling',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'The simplest of callouts, with default styling',
					href: null
				}
			],
			icon: {
				type: 'emoji',
				emoji: '🦥'
			}
		}
	}}><Callout emoji="🦥">The simplest of callouts, with default styling</Callout></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '3a8117d1-b7d0-4dc2-a974-6d61a552e777',
		created_time: '2021-10-31T06:27:00.000Z',
		last_edited_time: '2021-10-31T09:44:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"Here's some more normal text, for reference. Repeated for to fill ze space: Here's some more normal text, for reference. Repeated for to fill ze space: Here's some more normal text, for reference. ",
						link: null
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
						"Here's some more normal text, for reference. Repeated for to fill ze space: Here's some more normal text, for reference. Repeated for to fill ze space: Here's some more normal text, for reference. ",
					href: null
				}
			]
		}
	}}
	><div>
		Here's some more normal text, for reference. Repeated for to fill ze space: Here's some more
		normal text, for reference. Repeated for to fill ze space: Here's some more normal text, for
		reference.&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '3bf9da91-ada1-44da-8bc3-626538f67bec',
		created_time: '2021-10-31T06:27:00.000Z',
		last_edited_time: '2021-10-31T09:54:00.000Z',
		has_children: true,
		archived: false,
		type: 'callout',
		callout: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'This callout has an orange background (not available via the API as of this writing), ',
						link: null
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
						'This callout has an orange background (not available via the API as of this writing), ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'colored text',
						link: null
					},
					annotations: {
						bold: true,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'red'
					},
					plain_text: 'colored text',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', and children…',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', and children…',
					href: null
				}
			],
			icon: {
				type: 'emoji',
				emoji: '🦥'
			}
		},
		blocks: [
			{
				object: 'block',
				id: '6126c5b4-cbf8-4499-8d7f-c22807d02721',
				created_time: '2021-10-31T06:29:00.000Z',
				last_edited_time: '2021-10-31T06:29:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '…like this',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '…like this',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'bc195d52-f3c3-42e3-9e97-385603c1470f',
				created_time: '2021-10-31T06:29:00.000Z',
				last_edited_time: '2021-10-31T06:29:00.000Z',
				has_children: false,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'and this',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'and this',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '7f231e02-eaa9-4baf-8606-ffe43e8dc639',
				created_time: '2021-10-31T06:29:00.000Z',
				last_edited_time: '2021-10-31T06:29:00.000Z',
				has_children: false,
				archived: false,
				type: 'bulleted_list_item',
				bulleted_list_item: {
					text: [
						{
							type: 'text',
							text: {
								content: 'and this',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'and this',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'd2076c78-1038-4d47-b395-bc3c49294822',
				created_time: '2021-10-31T06:29:00.000Z',
				last_edited_time: '2021-10-31T06:29:00.000Z',
				has_children: true,
				archived: false,
				type: 'toggle',
				toggle: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Oh, and also…',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Oh, and also…',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '1eeb9632-86e1-4b1a-93b3-de4011ea858d',
						created_time: '2021-10-31T06:29:00.000Z',
						last_edited_time: '2021-10-31T09:53:00.000Z',
						has_children: false,
						archived: false,
						type: 'callout',
						callout: {
							text: [
								{
									type: 'text',
									text: {
										content: "Here's a nested callout with a sea otter",
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: "Here's a nested callout with a sea otter",
									href: null
								}
							],
							icon: {
								type: 'emoji',
								emoji: '🦦'
							}
						}
					}
				]
			}
		]
	}}
	><Callout emoji="🦥"
		>This callout has an orange background (not available via the API as of this writing),&thinsp;<InlineColor
			value="red"><strong>colored text</strong></InlineColor
		>, and children…<span slot="children"
			><div>…like this</div>
			<BulletedListItem>and this</BulletedListItem>
			<BulletedListItem>and this</BulletedListItem>
			<Toggle
				>Oh, and also…
				<span slot="children"
					><Callout emoji="🦦">Here's a nested callout with a sea otter</Callout></span
				></Toggle
			></span
		></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'e00f1793-4602-4a08-b0a3-60709be28e71',
		created_time: '2021-10-31T06:27:00.000Z',
		last_edited_time: '2021-10-31T06:29:00.000Z',
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
		id: '97c150a6-4f39-4fd5-b10b-8e8cc0d2ec82',
		created_time: '2021-10-31T06:26:00.000Z',
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
							content: 'callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'callouts',
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
							content: 'Callouts',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Callouts',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Callouts-97c150a64f394fd5b10b8e8cc0d2ec82',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '60abf1cb-64c1-4bd4-a0c4-919c8d7fd64c',
		created_time: '2021-10-31T06:29:00.000Z',
		last_edited_time: '2021-10-31T06:29:00.000Z',
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
