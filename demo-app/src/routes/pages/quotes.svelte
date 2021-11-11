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
	<title>Quote Blocks</title>
</svelte:head>

<Title>Quote Blocks</Title>

<Magic
	page={{
		object: 'page',
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'a310c1ff-61c0-48fb-8b19-39a1fd2cc313',
		created_time: '2021-10-31T03:12:00.000Z',
		last_edited_time: '2021-10-31T03:16:00.000Z',
		has_children: false,
		archived: false,
		type: 'quote',
		quote: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'"Everyone deserves a voice, but not everyone deserves a microphone." —Kara Swisher, I think',
						link: null
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
						'"Everyone deserves a voice, but not everyone deserves a microphone." —Kara Swisher, I think',
					href: null
				}
			]
		}
	}}
	><Quote
		>"Everyone deserves a voice, but not everyone deserves a microphone." —Kara Swisher, I think</Quote
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '92db9a94-b3b3-4c0b-87af-850964d38187',
		created_time: '2021-10-31T03:14:00.000Z',
		last_edited_time: '2021-10-31T03:27:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Keep in mind that Quotes are now containerable: "Is the quote bug happening here, too?"',
						link: null
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
						'Keep in mind that Quotes are now containerable: "Is the quote bug happening here, too?"',
					href: null
				}
			]
		}
	}}
	><div>
		Keep in mind that Quotes are now containerable: "Is the quote bug happening here, too?"
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'e4e70c44-1386-4754-970b-35722ce8abe0',
		created_time: '2021-10-31T03:27:00.000Z',
		last_edited_time: '2021-10-31T03:27:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: "'and is it on single quotes, too?'",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: "'and is it on single quotes, too?'",
					href: null
				}
			]
		}
	}}
	><div>'and is it on single quotes, too?'</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '0277e588-66f3-42ca-911d-07bf319779ef',
		created_time: '2021-10-31T03:14:00.000Z',
		last_edited_time: '2021-10-31T06:23:00.000Z',
		has_children: true,
		archived: false,
		type: 'quote',
		quote: {
			text: [
				{
					type: 'text',
					text: {
						content: 'notion2svelte',
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
					plain_text: 'notion2svelte',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							" lets us style the first quote block separately from the others. Not sure whether that's worth keeping, but I'll check it in for now.",
						link: null
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
						" lets us style the first quote block separately from the others. Not sure whether that's worth keeping, but I'll check it in for now.",
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: 'c48af9fa-2111-492f-996e-c6cd413e1037',
				created_time: '2021-10-31T06:14:00.000Z',
				last_edited_time: '2021-10-31T06:14:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			},
			{
				object: 'block',
				id: '1f00d8c4-0b85-438f-b48a-4acbf94a07bc',
				created_time: '2021-10-31T03:15:00.000Z',
				last_edited_time: '2021-10-31T06:14:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '"Eat it, I say!"',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '"Eat it, I say!"',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '7958b9a7-9a7e-40fe-beb5-abf869413870',
				created_time: '2021-10-31T03:28:00.000Z',
				last_edited_time: '2021-10-31T06:14:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: "'and is it on single quotes, too?'",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: "'and is it on single quotes, too?'",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'fb660a97-8d09-495f-905f-24cfcdbdfce0',
				created_time: '2021-10-31T03:17:00.000Z',
				last_edited_time: '2021-10-31T06:14:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: "                                —Sumbuddy's Dadduh",
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: "                                —Sumbuddy's Dadduh",
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '01ccd7e1-2852-4a15-9a1d-fe3beafb34f7',
				created_time: '2021-10-31T06:14:00.000Z',
				last_edited_time: '2021-10-31T06:14:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			},
			{
				object: 'block',
				id: 'c30807cf-c23f-48a2-a757-776bb9206d6b',
				created_time: '2021-10-31T05:38:00.000Z',
				last_edited_time: '2021-10-31T06:20:00.000Z',
				has_children: false,
				archived: false,
				type: 'quote',
				quote: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Wait. Notion (and ',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Wait. Notion (and ',
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
								italic: false,
								strikethrough: false,
								underline: false,
								code: true,
								color: 'default'
							},
							plain_text: 'notion2svelte',
							href: null
						},
						{
							type: 'text',
							text: {
								content:
									' can nest a quote inside a quote??? Not that I have anything useful to say in this quote. I just want to have a long enough run of text to see the effects of text-align-last on a multi-line element.',
								link: null
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
								' can nest a quote inside a quote??? Not that I have anything useful to say in this quote. I just want to have a long enough run of text to see the effects of text-align-last on a multi-line element.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '1ca5a107-1443-4c25-87f7-75fda4687f78',
				created_time: '2021-10-31T05:39:00.000Z',
				last_edited_time: '2021-10-31T06:16:00.000Z',
				has_children: true,
				archived: false,
				type: 'toggle',
				toggle: {
					text: [
						{
							type: 'text',
							text: {
								content: 'And even a quote',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'And even a quote',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '458db28b-d2d2-47bd-8a06-93ad02e5ea33',
						created_time: '2021-10-31T05:39:00.000Z',
						last_edited_time: '2021-10-31T05:39:00.000Z',
						has_children: false,
						archived: false,
						type: 'quote',
						quote: {
							text: [
								{
									type: 'text',
									text: {
										content: 'inside a toggle?',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'inside a toggle?',
									href: null
								}
							]
						}
					},
					{
						object: 'block',
						id: '58d7f41d-0afa-4bac-a265-81a6f95e83ab',
						created_time: '2021-10-31T05:39:00.000Z',
						last_edited_time: '2021-10-31T05:40:00.000Z',
						has_children: false,
						archived: false,
						type: 'heading_1',
						heading_1: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Quazy!',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Quazy!',
									href: null
								}
							]
						}
					}
				]
			}
		]
	}}
	><Quote
		><InlineCode>notion2svelte</InlineCode>&thinsp;lets us style the first quote block separately
		from the others. Not sure whether that's worth keeping, but I'll check it in for now.<span
			slot="children"
			><div />
			<div>"Eat it, I say!"</div>
			<div>'and is it on single quotes, too?'</div>
			<div>&thinsp; —Sumbuddy's Dadduh</div>
			<div />
			<Quote
				>Wait. Notion (and&thinsp;<InlineCode>notion2svelte</InlineCode>&thinsp;can nest a quote
				inside a quote??? Not that I have anything useful to say in this quote. I just want to have
				a long enough run of text to see the effects of text-align-last on a multi-line element.</Quote
			><Toggle
				>And even a quote
				<span slot="children"
					><Quote>inside a toggle?</Quote>
					<h1>Quazy!</h1>
				</span></Toggle
			></span
		></Quote
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '21e62933-b367-4a79-9eec-e4e6aa38cd9d',
		created_time: '2021-10-31T06:16:00.000Z',
		last_edited_time: '2021-10-31T06:16:00.000Z',
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
		id: 'b03746aa-d83a-4564-b879-b7a5dda81159',
		created_time: '2021-10-31T03:12:00.000Z',
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
							content: 'quotes',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'quotes',
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
							content: 'Quote Blocks',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Quote Blocks',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Quote-Blocks-b03746aad83a4564b879b7a5dda81159',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '3a0f4c62-98ba-4a57-8ef6-f2ef06a1c567',
		created_time: '2021-10-31T06:16:00.000Z',
		last_edited_time: '2021-10-31T06:16:00.000Z',
		has_children: true,
		archived: false,
		type: 'quote',
		quote: {
			text: []
		},
		blocks: [
			{
				object: 'block',
				id: '19aad121-a9c0-456f-bf36-465527c76ab6',
				created_time: '2021-10-31T06:16:00.000Z',
				last_edited_time: '2021-10-31T06:16:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'This is an empty quote with one  text child and one empty text child.',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'This is an empty quote with one  text child and one empty text child.',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '46aa2755-e2cd-4761-87b9-e210840510f8',
				created_time: '2021-10-31T06:16:00.000Z',
				last_edited_time: '2021-10-31T06:16:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: []
				}
			}
		]
	}}
	><Quote
		><span slot="children"
			><div>This is an empty quote with one text child and one empty text child.</div>
			<div />
		</span></Quote
	></Magic
>
<br style="display:none;" />
