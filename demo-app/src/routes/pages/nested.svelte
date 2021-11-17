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
	<title>Nested Text</title>
</svelte:head>

<Title>Nested Text</Title>

<Magic
	page={{
		object: 'page',
		id: 'ad21e02e-f808-44e5-94d6-5719dd58e27b',
		created_time: '2021-09-21T03:33:00.000Z',
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
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
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
							content: 'Nested Text',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Nested Text',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '5ba1ffd4-fa84-46cf-a70d-524b1dd808ed',
		created_time: '2021-09-21T10:49:00.000Z',
		last_edited_time: '2021-09-27T03:06:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: "Headers can't have children, FYI",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: "Headers can't have children, FYI",
					href: null
				}
			]
		}
	}}
	><h1>Headers can't have children, FYI</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'ad21e02e-f808-44e5-94d6-5719dd58e27b',
		created_time: '2021-09-21T03:33:00.000Z',
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
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
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
							content: 'Nested Text',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Nested Text',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd5d23e50-560a-44ee-8897-bf6b7687a796',
		created_time: '2021-09-21T03:34:00.000Z',
		last_edited_time: '2021-09-26T04:05:00.000Z',
		has_children: true,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'A root block',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'A root block',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: 'd86ababe-c1bc-4168-bf1f-e1efc9857087',
				created_time: '2021-09-26T02:08:00.000Z',
				last_edited_time: '2021-09-26T04:05:00.000Z',
				has_children: true,
				archived: false,
				type: 'toggle',
				toggle: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indented Toggle 1',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indented Toggle 1',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '3eb0e3bf-b83e-4d91-813e-024fde2660f2',
						created_time: '2021-09-26T04:05:00.000Z',
						last_edited_time: '2021-09-26T04:06:00.000Z',
						has_children: true,
						archived: false,
						type: 'toggle',
						toggle: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Indented Toggle 2',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Indented Toggle 2',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: '027547b0-ac19-4a54-bac7-1734a0fd88c4',
								created_time: '2021-09-26T04:05:00.000Z',
								last_edited_time: '2021-09-26T04:05:00.000Z',
								has_children: false,
								archived: false,
								type: 'paragraph',
								paragraph: {
									text: [
										{
											type: 'text',
											text: {
												content: 'Toggle content',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: 'Toggle content',
											href: null
										}
									]
								}
							},
							{
								object: 'block',
								id: '2b993123-d9bf-463e-8296-cb8171258222',
								created_time: '2021-09-26T03:15:00.000Z',
								last_edited_time: '2021-09-26T04:06:00.000Z',
								has_children: false,
								archived: false,
								type: 'toggle',
								toggle: {
									text: [
										{
											type: 'text',
											text: {
												content: 'Inented Toggle 3 (empty)',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: 'Inented Toggle 3 (empty)',
											href: null
										}
									]
								}
							}
						]
					},
					{
						object: 'block',
						id: '2c36cdb4-90d1-45c2-82a3-fcf9727b001b',
						created_time: '2021-09-26T02:08:00.000Z',
						last_edited_time: '2021-09-26T02:08:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Toggle content',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Toggle content',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: '41d54add-1c88-4a65-b5d1-ee2affa8c74b',
				created_time: '2021-09-21T03:34:00.000Z',
				last_edited_time: '2021-09-26T03:21:00.000Z',
				has_children: true,
				archived: false,
				type: 'to_do',
				to_do: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Child block: Indent Level 1',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Child block: Indent Level 1',
							href: null
						}
					],
					checked: false
				},
				blocks: [
					{
						object: 'block',
						id: '200253b9-b2d5-44cf-a81c-1a998d8c6d28',
						created_time: '2021-09-21T03:34:00.000Z',
						last_edited_time: '2021-09-26T00:00:00.000Z',
						has_children: false,
						archived: false,
						type: 'bulleted_list_item',
						bulleted_list_item: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Child block: Indent Level 2',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Child block: Indent Level 2',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: 'c76d2af2-a7bc-4015-9a2e-cdb6fa6169d4',
				created_time: '2021-09-26T02:08:00.000Z',
				last_edited_time: '2021-09-26T03:21:00.000Z',
				has_children: false,
				archived: false,
				type: 'child_page',
				child_page: {
					title: 'Indented Child Page'
				}
			}
		]
	}}
	><div>A root block</div>
	<IndentGroup>
		<Toggle
			>Indented Toggle 1
			<span slot="children"
				><Toggle
					>Indented Toggle 2
					<span slot="children"
						><div>Toggle content</div>
						<Toggle
							>Inented Toggle 3 (empty)
							<span slot="children" /></Toggle
						></span
					></Toggle
				>
				<div>Toggle content</div>
			</span></Toggle
		><TodoItem checked={false}>Child block: Indent Level 1</TodoItem>
		<IndentGroup>
			<BulletedListItem>Child block: Indent Level 2</BulletedListItem>
		</IndentGroup>
		<p
			style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
		>
			⚠️ child_page: <span
				style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
				>Indented Child Page.</span
			>&nbsp;has no content
		</p>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'ad21e02e-f808-44e5-94d6-5719dd58e27b',
		created_time: '2021-09-21T03:33:00.000Z',
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
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
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
							content: 'Nested Text',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Nested Text',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '75fa2a28-0370-461d-a004-85cf46cbef7a',
		created_time: '2021-09-26T02:05:00.000Z',
		last_edited_time: '2021-09-26T02:05:00.000Z',
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
		id: 'ad21e02e-f808-44e5-94d6-5719dd58e27b',
		created_time: '2021-09-21T03:33:00.000Z',
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
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
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
							content: 'Nested Text',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Nested Text',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '3256383e-60ea-4437-8e58-1065f83a502b',
		created_time: '2021-09-26T02:05:00.000Z',
		last_edited_time: '2021-09-26T02:07:00.000Z',
		has_children: true,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Root',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Root',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: '3db3c5c7-371e-4151-9234-214745aaa85d',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:07:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_1',
				heading_1: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indented H1',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indented H1',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'f4c09281-3d86-4e70-ac9d-7b106915e80c',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:07:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_2',
				heading_2: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indented H2',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indented H2',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'ba9bdd39-4b95-47d2-9ff6-6797b9184302',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:07:00.000Z',
				has_children: false,
				archived: false,
				type: 'heading_3',
				heading_3: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indented H3',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indented H3',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'e9463576-6046-4671-b82e-7f6c2c441ebe',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:07:00.000Z',
				has_children: true,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indent Level One',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indent Level One',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: '6b08fa1c-8af5-4ce2-903b-c402320a8fa7',
						created_time: '2021-09-26T02:07:00.000Z',
						last_edited_time: '2021-09-26T03:20:00.000Z',
						has_children: true,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: 'Indent Level Two',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: 'Indent Level Two',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: '4fe3c05e-5ec9-4e03-9007-13a0117992a6',
								created_time: '2021-09-26T02:07:00.000Z',
								last_edited_time: '2021-09-26T03:20:00.000Z',
								has_children: true,
								archived: false,
								type: 'paragraph',
								paragraph: {
									text: [
										{
											type: 'text',
											text: {
												content: 'Indent Level Three',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: 'Indent Level Three',
											href: null
										}
									]
								},
								blocks: [
									{
										object: 'block',
										id: '88b4ecdd-71a7-4517-a3f2-d6463b6f36d6',
										created_time: '2021-09-26T02:07:00.000Z',
										last_edited_time: '2021-09-26T02:07:00.000Z',
										has_children: true,
										archived: false,
										type: 'paragraph',
										paragraph: {
											text: [
												{
													type: 'text',
													text: {
														content: 'Indent Level Four',
														link: null
													},
													annotations: {
														bold: false,
														italic: false,
														strikethrough: false,
														underline: false,
														code: false,
														color: 'default'
													},
													plain_text: 'Indent Level Four',
													href: null
												}
											]
										},
										blocks: [
											{
												object: 'block',
												id: '11b42786-275d-41f5-b739-b0c9bad3ac6c',
												created_time: '2021-09-26T02:05:00.000Z',
												last_edited_time: '2021-09-26T03:20:00.000Z',
												has_children: true,
												archived: false,
												type: 'paragraph',
												paragraph: {
													text: [
														{
															type: 'text',
															text: {
																content: 'Indent Level Five',
																link: null
															},
															annotations: {
																bold: false,
																italic: false,
																strikethrough: false,
																underline: false,
																code: false,
																color: 'default'
															},
															plain_text: 'Indent Level Five',
															href: null
														}
													]
												},
												blocks: [
													{
														object: 'block',
														id: 'd6bfcd35-113d-4709-9915-c3a8242d498d',
														created_time: '2021-09-26T02:05:00.000Z',
														last_edited_time: '2021-09-26T02:05:00.000Z',
														has_children: true,
														archived: false,
														type: 'paragraph',
														paragraph: {
															text: [
																{
																	type: 'text',
																	text: {
																		content: 'Indent Level Six',
																		link: null
																	},
																	annotations: {
																		bold: false,
																		italic: false,
																		strikethrough: false,
																		underline: false,
																		code: false,
																		color: 'default'
																	},
																	plain_text: 'Indent Level Six',
																	href: null
																}
															]
														},
														blocks: [
															{
																object: 'block',
																id: '714b574a-8d09-4b98-acfd-517a17da67e0',
																created_time: '2021-09-26T02:05:00.000Z',
																last_edited_time: '2021-09-26T02:05:00.000Z',
																has_children: true,
																archived: false,
																type: 'paragraph',
																paragraph: {
																	text: [
																		{
																			type: 'text',
																			text: {
																				content: 'Indent Level Seven',
																				link: null
																			},
																			annotations: {
																				bold: false,
																				italic: false,
																				strikethrough: false,
																				underline: false,
																				code: false,
																				color: 'default'
																			},
																			plain_text: 'Indent Level Seven',
																			href: null
																		}
																	]
																},
																blocks: [
																	{
																		object: 'block',
																		id: 'ea179340-30dc-450d-bb47-139813137221',
																		created_time: '2021-09-26T02:05:00.000Z',
																		last_edited_time: '2021-09-26T02:05:00.000Z',
																		has_children: true,
																		archived: false,
																		type: 'paragraph',
																		paragraph: {
																			text: [
																				{
																					type: 'text',
																					text: {
																						content: 'Indent Level Eight',
																						link: null
																					},
																					annotations: {
																						bold: false,
																						italic: false,
																						strikethrough: false,
																						underline: false,
																						code: false,
																						color: 'default'
																					},
																					plain_text: 'Indent Level Eight',
																					href: null
																				}
																			]
																		},
																		blocks: [
																			{
																				object: 'block',
																				id: 'd7a60473-a9e4-442c-bf06-8c1d71472249',
																				created_time: '2021-09-26T02:05:00.000Z',
																				last_edited_time: '2021-09-26T02:05:00.000Z',
																				has_children: true,
																				archived: false,
																				type: 'paragraph',
																				paragraph: {
																					text: [
																						{
																							type: 'text',
																							text: {
																								content: 'Indent Level Nine',
																								link: null
																							},
																							annotations: {
																								bold: false,
																								italic: false,
																								strikethrough: false,
																								underline: false,
																								code: false,
																								color: 'default'
																							},
																							plain_text: 'Indent Level Nine',
																							href: null
																						}
																					]
																				},
																				blocks: [
																					{
																						object: 'block',
																						id: '411a5ff3-824c-4136-b671-d61d0a561611',
																						created_time: '2021-09-26T02:05:00.000Z',
																						last_edited_time: '2021-09-26T02:05:00.000Z',
																						has_children: true,
																						archived: false,
																						type: 'paragraph',
																						paragraph: {
																							text: [
																								{
																									type: 'text',
																									text: {
																										content: 'Indent Level Ten',
																										link: null
																									},
																									annotations: {
																										bold: false,
																										italic: false,
																										strikethrough: false,
																										underline: false,
																										code: false,
																										color: 'default'
																									},
																									plain_text: 'Indent Level Ten',
																									href: null
																								}
																							]
																						},
																						blocks: [
																							{
																								object: 'block',
																								id: '4f485413-c5d4-46e1-b6d3-142b5d726584',
																								created_time: '2021-09-26T02:05:00.000Z',
																								last_edited_time: '2021-09-26T02:05:00.000Z',
																								has_children: true,
																								archived: false,
																								type: 'paragraph',
																								paragraph: {
																									text: [
																										{
																											type: 'text',
																											text: {
																												content: 'Indent Level Eleven',
																												link: null
																											},
																											annotations: {
																												bold: false,
																												italic: false,
																												strikethrough: false,
																												underline: false,
																												code: false,
																												color: 'default'
																											},
																											plain_text: 'Indent Level Eleven',
																											href: null
																										}
																									]
																								},
																								blocks: [
																									{
																										object: 'block',
																										id: '5eb2633c-1153-435b-ab17-10483b831910',
																										created_time: '2021-09-26T02:05:00.000Z',
																										last_edited_time: '2021-09-26T02:05:00.000Z',
																										has_children: true,
																										archived: false,
																										type: 'paragraph',
																										paragraph: {
																											text: [
																												{
																													type: 'text',
																													text: {
																														content: 'Indent Level Twelve',
																														link: null
																													},
																													annotations: {
																														bold: false,
																														italic: false,
																														strikethrough: false,
																														underline: false,
																														code: false,
																														color: 'default'
																													},
																													plain_text: 'Indent Level Twelve',
																													href: null
																												}
																											]
																										},
																										blocks: [
																											{
																												object: 'block',
																												id: 'f5b2bd54-581a-4f85-aeb4-a40b57bbced8',
																												created_time: '2021-09-26T02:05:00.000Z',
																												last_edited_time:
																													'2021-09-26T02:05:00.000Z',
																												has_children: true,
																												archived: false,
																												type: 'paragraph',
																												paragraph: {
																													text: [
																														{
																															type: 'text',
																															text: {
																																content: 'Indent Level Thirteen',
																																link: null
																															},
																															annotations: {
																																bold: false,
																																italic: false,
																																strikethrough: false,
																																underline: false,
																																code: false,
																																color: 'default'
																															},
																															plain_text: 'Indent Level Thirteen',
																															href: null
																														}
																													]
																												},
																												blocks: [
																													{
																														object: 'block',
																														id: '93fe11bb-386f-47bd-b755-5791277cf01f',
																														created_time:
																															'2021-09-26T02:05:00.000Z',
																														last_edited_time:
																															'2021-09-26T02:05:00.000Z',
																														has_children: true,
																														archived: false,
																														type: 'paragraph',
																														paragraph: {
																															text: [
																																{
																																	type: 'text',
																																	text: {
																																		content:
																																			'Indent Level Fourteen',
																																		link: null
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
																																		'Indent Level Fourteen',
																																	href: null
																																}
																															]
																														},
																														blocks: [
																															{
																																object: 'block',
																																id: 'd5674304-9427-4147-a87e-df33f1ca46d0',
																																created_time:
																																	'2021-09-26T02:05:00.000Z',
																																last_edited_time:
																																	'2021-09-26T02:05:00.000Z',
																																has_children: true,
																																archived: false,
																																type: 'paragraph',
																																paragraph: {
																																	text: [
																																		{
																																			type: 'text',
																																			text: {
																																				content:
																																					'Indent Level Fifteen',
																																				link: null
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
																																				'Indent Level Fifteen',
																																			href: null
																																		}
																																	]
																																},
																																blocks: [
																																	{
																																		object: 'block',
																																		id: '7ee91f7f-17c4-4797-a45e-423a6bb41ae2',
																																		created_time:
																																			'2021-09-26T02:05:00.000Z',
																																		last_edited_time:
																																			'2021-09-26T02:05:00.000Z',
																																		has_children: true,
																																		archived: false,
																																		type: 'paragraph',
																																		paragraph: {
																																			text: [
																																				{
																																					type: 'text',
																																					text: {
																																						content:
																																							'Indent Level Sixteen',
																																						link: null
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
																																						'Indent Level Sixteen',
																																					href: null
																																				}
																																			]
																																		},
																																		blocks: [
																																			{
																																				object: 'block',
																																				id: '54ae1a39-3e4c-4f92-ae5e-67b6ba4654eb',
																																				created_time:
																																					'2021-09-26T02:05:00.000Z',
																																				last_edited_time:
																																					'2021-09-26T02:05:00.000Z',
																																				has_children: true,
																																				archived: false,
																																				type: 'paragraph',
																																				paragraph: {
																																					text: [
																																						{
																																							type: 'text',
																																							text: {
																																								content:
																																									'Indent Level Seventeen',
																																								link: null
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
																																								'Indent Level Seventeen',
																																							href: null
																																						}
																																					]
																																				},
																																				blocks: [
																																					{
																																						object: 'block',
																																						id: 'fe28ad4a-bc1d-4896-bbab-18d73805e396',
																																						created_time:
																																							'2021-09-26T02:05:00.000Z',
																																						last_edited_time:
																																							'2021-09-26T02:05:00.000Z',
																																						has_children: true,
																																						archived: false,
																																						type: 'paragraph',
																																						paragraph: {
																																							text: [
																																								{
																																									type: 'text',
																																									text: {
																																										content:
																																											'Indent Level Eighteen',
																																										link: null
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
																																										'Indent Level Eighteen',
																																									href: null
																																								}
																																							]
																																						},
																																						blocks: [
																																							{
																																								object: 'block',
																																								id: '4cf5ca1a-2449-4c05-b51a-4895ea20b238',
																																								created_time:
																																									'2021-09-26T02:05:00.000Z',
																																								last_edited_time:
																																									'2021-09-26T02:05:00.000Z',
																																								has_children: true,
																																								archived: false,
																																								type: 'paragraph',
																																								paragraph: {
																																									text: [
																																										{
																																											type: 'text',
																																											text: {
																																												content:
																																													'Indent Level Nineteen',
																																												link: null
																																											},
																																											annotations: {
																																												bold: false,
																																												italic: false,
																																												strikethrough: false,
																																												underline: false,
																																												code: false,
																																												color:
																																													'default'
																																											},
																																											plain_text:
																																												'Indent Level Nineteen',
																																											href: null
																																										}
																																									]
																																								},
																																								blocks: [
																																									{
																																										object: 'block',
																																										id: '1b6dd27c-55cc-4ce5-97b6-af99a9db864b',
																																										created_time:
																																											'2021-09-26T02:05:00.000Z',
																																										last_edited_time:
																																											'2021-09-26T02:05:00.000Z',
																																										has_children: false,
																																										archived: false,
																																										type: 'paragraph',
																																										paragraph: {
																																											text: [
																																												{
																																													type: 'text',
																																													text: {
																																														content:
																																															'Indent Level Twenty',
																																														link: null
																																													},
																																													annotations:
																																														{
																																															bold: false,
																																															italic: false,
																																															strikethrough: false,
																																															underline: false,
																																															code: false,
																																															color:
																																																'default'
																																														},
																																													plain_text:
																																														'Indent Level Twenty',
																																													href: null
																																												}
																																											]
																																										}
																																									}
																																								]
																																							}
																																						]
																																					}
																																				]
																																			}
																																		]
																																	}
																																]
																															}
																														]
																													}
																												]
																											}
																										]
																									}
																								]
																							}
																						]
																					}
																				]
																			}
																		]
																	}
																]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				object: 'block',
				id: '9455a94a-9990-468c-9eb5-6934565f8d1e',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indent Level One (#2)',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indent Level One (#2)',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: '28713765-cb14-4bc2-b3c2-0a1bd69e56df',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: 'Indent Level One (#3)',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: 'Indent Level One (#3)',
							href: null
						}
					]
				}
			}
		]
	}}
	><div>Root</div>
	<IndentGroup>
		<h1>Indented H1</h1>
		<h2>Indented H2</h2>
		<h3>Indented H3</h3>
		<div>Indent Level One</div>
		<IndentGroup>
			<div>Indent Level Two</div>
			<IndentGroup>
				<div>Indent Level Three</div>
				<IndentGroup>
					<div>Indent Level Four</div>
					<IndentGroup>
						<div>Indent Level Five</div>
						<IndentGroup>
							<div>Indent Level Six</div>
							<IndentGroup>
								<div>Indent Level Seven</div>
								<IndentGroup>
									<div>Indent Level Eight</div>
									<IndentGroup>
										<div>Indent Level Nine</div>
										<IndentGroup>
											<div>Indent Level Ten</div>
											<IndentGroup>
												<div>Indent Level Eleven</div>
												<IndentGroup>
													<div>Indent Level Twelve</div>
													<IndentGroup>
														<div>Indent Level Thirteen</div>
														<IndentGroup>
															<div>Indent Level Fourteen</div>
															<IndentGroup>
																<div>Indent Level Fifteen</div>
																<IndentGroup>
																	<div>Indent Level Sixteen</div>
																	<IndentGroup>
																		<div>Indent Level Seventeen</div>
																		<IndentGroup>
																			<div>Indent Level Eighteen</div>
																			<IndentGroup>
																				<div>Indent Level Nineteen</div>
																				<IndentGroup>
																					<div>Indent Level Twenty</div>
																				</IndentGroup>
																			</IndentGroup>
																		</IndentGroup>
																	</IndentGroup>
																</IndentGroup>
															</IndentGroup>
														</IndentGroup>
													</IndentGroup>
												</IndentGroup>
											</IndentGroup>
										</IndentGroup>
									</IndentGroup>
								</IndentGroup>
							</IndentGroup>
						</IndentGroup>
					</IndentGroup>
				</IndentGroup>
			</IndentGroup>
		</IndentGroup>
		<div>Indent Level One (#2)</div>
		<div>Indent Level One (#3)</div>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: 'ad21e02e-f808-44e5-94d6-5719dd58e27b',
		created_time: '2021-09-21T03:33:00.000Z',
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
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
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
							content: 'Nested Text',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Nested Text',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '0c9c42fd-b013-4afc-bd6e-7c608cda1e8a',
		created_time: '2021-09-26T02:05:00.000Z',
		last_edited_time: '2021-09-26T02:05:00.000Z',
		has_children: true,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Other Root',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Other Root',
					href: null
				}
			]
		},
		blocks: [
			{
				object: 'block',
				id: '9e2782a3-c7d0-44e6-ad25-cf2ad598e4be',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: true,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '1',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '1',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: 'ce02c391-b771-4714-93c6-b4cc5c32baaa',
						created_time: '2021-09-26T02:05:00.000Z',
						last_edited_time: '2021-09-26T02:05:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: '1.1',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '1.1',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: '5e758d7f-e477-47a1-9f5a-efaa4eb40458',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '2',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '2',
							href: null
						}
					]
				}
			},
			{
				object: 'block',
				id: 'ae2958a1-6749-411c-bba5-d2ebc91db462',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: true,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '3',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '3',
							href: null
						}
					]
				},
				blocks: [
					{
						object: 'block',
						id: 'd24ac72f-81ca-49d2-ba06-a12a0c09e7a8',
						created_time: '2021-09-26T02:05:00.000Z',
						last_edited_time: '2021-09-26T02:05:00.000Z',
						has_children: true,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: '3.1',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '3.1',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: '0308e3e4-c1f4-475b-9ea0-c4570298c73f',
								created_time: '2021-09-26T02:05:00.000Z',
								last_edited_time: '2021-09-26T02:05:00.000Z',
								has_children: false,
								archived: false,
								type: 'paragraph',
								paragraph: {
									text: [
										{
											type: 'text',
											text: {
												content: '3.1.1',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: '3.1.1',
											href: null
										}
									]
								}
							}
						]
					},
					{
						object: 'block',
						id: '0f93322c-3bb5-4e01-bc33-5c8a006109c2',
						created_time: '2021-09-26T02:05:00.000Z',
						last_edited_time: '2021-09-26T02:05:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: '3.2',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: '3.2',
									href: null
								}
							]
						}
					}
				]
			},
			{
				object: 'block',
				id: 'a967dfe6-96a0-451f-b808-c5c7bc7647f5',
				created_time: '2021-09-26T02:05:00.000Z',
				last_edited_time: '2021-09-26T02:05:00.000Z',
				has_children: false,
				archived: false,
				type: 'paragraph',
				paragraph: {
					text: [
						{
							type: 'text',
							text: {
								content: '4',
								link: null
							},
							annotations: {
								bold: false,
								italic: false,
								strikethrough: false,
								underline: false,
								code: false,
								color: 'default'
							},
							plain_text: '4',
							href: null
						}
					]
				}
			}
		]
	}}
	><div>Other Root</div>
	<IndentGroup>
		<div>1</div>
		<IndentGroup>
			<div>1.1</div>
		</IndentGroup>
		<div>2</div>
		<div>3</div>
		<IndentGroup>
			<div>3.1</div>
			<IndentGroup>
				<div>3.1.1</div>
			</IndentGroup>
			<div>3.2</div>
		</IndentGroup>
		<div>4</div>
	</IndentGroup>
</Magic>
<br style="display:none;" />
