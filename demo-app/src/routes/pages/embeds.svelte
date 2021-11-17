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
	<title>Embeds</title>
</svelte:head>

<Title>Embeds</Title>

<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1f3a0c8b-028e-4c40-b049-283519c6cba4',
		created_time: '2021-11-15T08:34:00.000Z',
		last_edited_time: '2021-11-15T10:29:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							"Here's some text to give some visual context for how embeds will look when combined with other blocks. From here on out, irrelevant ",
						link: null
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
						"Here's some text to give some visual context for how embeds will look when combined with other blocks. From here on out, irrelevant ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'Wikipedia lorem',
						link: {
							url: 'https://www.boom-online.co.uk/lorem-ipsum/##results'
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
					plain_text: 'Wikipedia lorem',
					href: 'https://www.boom-online.co.uk/lorem-ipsum/##results'
				},
				{
					type: 'text',
					text: {
						content:
							'. Dysphoria (from Greek: δύσφορος (dysphoros), δυσ-, difficult and φέρειν, to bear) is a profound state of unease or dissatisfaction. It is the opposite of euphoria. In a psychiatric context, dysphoria may accompany depression, anxiety or agitation.',
						link: null
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
						'. Dysphoria (from Greek: δύσφορος (dysphoros), δυσ-, difficult and φέρειν, to bear) is a profound state of unease or dissatisfaction. It is the opposite of euphoria. In a psychiatric context, dysphoria may accompany depression, anxiety or agitation.',
					href: null
				}
			]
		}
	}}
	><div>
		Here's some text to give some visual context for how embeds will look when combined with other
		blocks. From here on out, irrelevant&thinsp;<MagicLink
			href="https://www.boom-online.co.uk/lorem-ipsum/##results">Wikipedia lorem</MagicLink
		>. Dysphoria (from Greek: δύσφορος (dysphoros), δυσ-, difficult and φέρειν, to bear) is a
		profound state of unease or dissatisfaction. It is the opposite of euphoria. In a psychiatric
		context, dysphoria may accompany depression, anxiety or agitation.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'a72a51e3-a22f-4a1a-8268-d2dd51362d7a',
		created_time: '2021-11-15T08:12:00.000Z',
		last_edited_time: '2021-11-15T09:26:00.000Z',
		has_children: false,
		archived: false,
		type: 'embed',
		embed: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'Ahhh…Svelte. What a beauty, eh?',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Ahhh…Svelte. What a beauty, eh?',
					href: null
				}
			],
			url: 'https://svelte.dev/repl/c1e8404607f549e68621a4f353a686d2?version=3.44.1'
		}
	}}
	><Embed url="https://svelte.dev/repl/c1e8404607f549e68621a4f353a686d2?version=3.44.1"
		>Ahhh…Svelte. What a beauty, eh?</Embed
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '8b3e0156-7464-43e6-a43d-02fd8e3646e2',
		created_time: '2021-11-15T08:33:00.000Z',
		last_edited_time: '2021-11-15T09:26:00.000Z',
		has_children: false,
		archived: false,
		type: 'embed',
		embed: {
			caption: [
				{
					type: 'text',
					text: {
						content: 'https://kwize.com/quote-of-the-day/embed/&txt=0',
						link: {
							url: 'https://kwize.com/quote-of-the-day/embed/&txt=0'
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
					plain_text: 'https://kwize.com/quote-of-the-day/embed/&txt=0',
					href: 'https://kwize.com/quote-of-the-day/embed/&txt=0'
				}
			],
			url: 'https://kwize.com/quote-of-the-day/embed/&txt=0'
		}
	}}
	><Embed url="https://kwize.com/quote-of-the-day/embed/&txt=0"
		><MagicLink href="https://kwize.com/quote-of-the-day/embed/&txt=0"
			>https://kwize.com/quote-of-the-day/embed/&txt=0</MagicLink
		></Embed
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd6f796dc-2644-48dc-99f0-4c75ac4eacce',
		created_time: '2021-11-15T08:36:00.000Z',
		last_edited_time: '2021-11-15T09:26:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content:
							'Intense states of distress and unease increase the risk of suicide, as well as being unpleasant in themselves. Relieving dysphoria is therefore a priority of psychiatric treatment. One may treat underlying causes such as depression or bipolar disorder as well as the dysphoric symptoms themselves.',
						link: null
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
						'Intense states of distress and unease increase the risk of suicide, as well as being unpleasant in themselves. Relieving dysphoria is therefore a priority of psychiatric treatment. One may treat underlying causes such as depression or bipolar disorder as well as the dysphoric symptoms themselves.',
					href: null
				}
			]
		}
	}}
	><div>
		Intense states of distress and unease increase the risk of suicide, as well as being unpleasant
		in themselves. Relieving dysphoria is therefore a priority of psychiatric treatment. One may
		treat underlying causes such as depression or bipolar disorder as well as the dysphoric symptoms
		themselves.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'abc728c9-096e-45a6-ba89-bef307ef8d28',
		created_time: '2021-11-15T08:33:00.000Z',
		last_edited_time: '2021-11-15T09:26:00.000Z',
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
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'eac0c3f3-1008-4d0f-86bb-c142608a9504',
		created_time: '2021-11-15T22:01:00.000Z',
		last_edited_time: '2021-11-15T22:10:00.000Z',
		has_children: false,
		archived: false,
		type: 'embed',
		embed: {
			caption: [],
			url: 'https://codepen.io/leandrosimoes/pen/VqZxaG'
		}
	}}><Embed url="https://codepen.io/leandrosimoes/pen/VqZxaG" /></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '3eb9830e-e68e-4c5d-8171-2b75660a2e34',
		created_time: '2021-11-15T07:01:00.000Z',
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
							content: 'embeds',
							link: null
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
							content: 'Embeds',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Embeds',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Embeds-3eb9830ee68e4c5d81712b75660a2e34',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ce5320e8-4f0a-47df-a7e1-440f5f761fe0',
		created_time: '2021-11-15T22:09:00.000Z',
		last_edited_time: '2021-11-15T22:10:00.000Z',
		has_children: false,
		archived: false,
		type: 'embed',
		embed: {
			caption: [],
			url: 'https://codepen.io/JacobStone/pen/GfLEn'
		}
	}}><Embed url="https://codepen.io/JacobStone/pen/GfLEn" /></Magic
>
<br style="display:none;" />
