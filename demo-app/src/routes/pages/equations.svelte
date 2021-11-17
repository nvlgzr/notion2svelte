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
	<title>Equations, rendered by katex</title>
</svelte:head>

<Title>Equations, rendered by katex</Title>

<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '8d981066-899d-49e0-9b23-31f8b7f5ddff',
		created_time: '2021-11-13T08:47:00.000Z',
		last_edited_time: '2021-11-13T09:58:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Inline',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Inline',
					href: null
				}
			]
		}
	}}
	><h1>Inline</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '9022e93d-63df-46ed-9a79-c0354105b740',
		created_time: '2021-11-13T09:57:00.000Z',
		last_edited_time: '2021-11-13T10:33:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'In ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'In ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'physics',
						link: {
							url: 'https://en.wikipedia.org/wiki/Physics'
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
					plain_text: 'physics',
					href: 'https://en.wikipedia.org/wiki/Physics'
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'mass–energy equivalence',
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
					plain_text: 'mass–energy equivalence',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' is the relationship between ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' is the relationship between ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'mass',
						link: {
							url: 'https://en.wikipedia.org/wiki/Mass'
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
					plain_text: 'mass',
					href: 'https://en.wikipedia.org/wiki/Mass'
				},
				{
					type: 'text',
					text: {
						content: ' and ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' and ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'energy',
						link: {
							url: 'https://en.wikipedia.org/wiki/Energy'
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
					plain_text: 'energy',
					href: 'https://en.wikipedia.org/wiki/Energy'
				},
				{
					type: 'text',
					text: {
						content: " in a system's ",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: " in a system's ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'rest frame',
						link: {
							url: 'https://en.wikipedia.org/wiki/Rest_frame'
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
					plain_text: 'rest frame',
					href: 'https://en.wikipedia.org/wiki/Rest_frame'
				},
				{
					type: 'text',
					text: {
						content:
							', where the two values differ only by a constant and the units of measurement. The principle is described by the physicist ',
						link: null
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
						', where the two values differ only by a constant and the units of measurement. The principle is described by the physicist ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'Albert Einstein',
						link: {
							url: 'https://en.wikipedia.org/wiki/Albert_Einstein'
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
					plain_text: 'Albert Einstein',
					href: 'https://en.wikipedia.org/wiki/Albert_Einstein'
				},
				{
					type: 'text',
					text: {
						content: "'s famous formula: ",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: "'s famous formula: ",
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: 'E = mc^2'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'E = mc^2',
					href: null
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
		In <MagicLink href="https://en.wikipedia.org/wiki/Physics">physics</MagicLink>,
		<strong>mass–energy equivalence</strong>
		is the relationship between <MagicLink href="https://en.wikipedia.org/wiki/Mass">mass</MagicLink
		> and <MagicLink href="https://en.wikipedia.org/wiki/Energy">energy</MagicLink> in a system's <MagicLink
			href="https://en.wikipedia.org/wiki/Rest_frame">rest frame</MagicLink
		>, where the two values differ only by a constant and the units of measurement. The principle is
		described by the physicist <MagicLink href="https://en.wikipedia.org/wiki/Albert_Einstein"
			>Albert Einstein</MagicLink
		>'s famous formula:&thinsp;<Equation block={false} katexString="E = mc^2" />.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '33e55147-2478-4bd1-8f49-2c09c3c49275',
		created_time: '2021-11-13T09:58:00.000Z',
		last_edited_time: '2021-11-13T09:58:00.000Z',
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
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'ac929074-5b0d-4be3-9246-8179e604c7e4',
		created_time: '2021-11-13T09:57:00.000Z',
		last_edited_time: '2021-11-13T09:57:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression: '\\KaTeX\\ | \\LaTeX\\ is\\ HUGE!'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\KaTeX\\ | \\LaTeX\\ is\\ HUGE!',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation block={false} katexString="\KaTeX\ | \LaTeX\ is\ HUGE!" />
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'bba8a2b2-3394-41e6-a298-4fe545764f44',
		created_time: '2021-11-13T09:58:00.000Z',
		last_edited_time: '2021-11-13T09:58:00.000Z',
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
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '008a4c6c-21c4-414d-bbf4-41fdfdda6db9',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:27:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'This is an inline ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'This is an inline ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression:
							'|x| = \\begin{cases}\n  x, &\\quad x \\geq 0 \\\\\n  -x, &\\quad x < 0 \\\\\n  0, &\\quad x < 0 \\\\\n  -y, &\\enspace bar = baz \\\\\n\\end{cases}'
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
						'|x| = \\begin{cases}\n  x, &\\quad x \\geq 0 \\\\\n  -x, &\\quad x < 0 \\\\\n  0, &\\quad x < 0 \\\\\n  -y, &\\enspace bar = baz \\\\\n\\end{cases}',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' equation! Visuals? Stunning. Maths? Garbage.',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' equation! Visuals? Stunning. Maths? Garbage.',
					href: null
				}
			]
		}
	}}
	><div>
		This is an inline&thinsp;<Equation
			block={false}
			katexString="|x| = \begin{'{'}cases}
  x, &\quad x \geq 0 \\
  -x, &\quad x < 0 \\
  0, &\quad x < 0 \\
  -y, &\enspace bar = baz \\
\end{'{'}cases}"
		/>&thinsp;equation! Visuals? Stunning. Maths? Garbage.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'aa225eb0-e88e-45a3-9950-a9cb6080575b',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
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
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '9fa8309c-80a6-401d-a5d6-f023066c931d',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Accents',
						link: {
							url: 'https://katex.org/docs/supported.html'
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
					plain_text: 'Accents',
					href: 'https://katex.org/docs/supported.html'
				},
				{
					type: 'text',
					text: {
						content: ' supported by ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' supported by ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\KaTeX'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\KaTeX',
					href: null
				}
			]
		}
	}}
	><h3>
		<MagicLink href="https://katex.org/docs/supported.html">Accents</MagicLink>&thinsp;supported
		by&thinsp;<Equation block={false} katexString="\KaTeX" />
	</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'e8bd8814-4656-44ee-afbc-b94d225a8d6e',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							"a'\\ a''\\ a^{\\prime}\\ \\acute{a}\\ \\bar{y}\\ \\breve{a}\\ \\check{a}\\ \\dot{a}\\ \\ddot{a}\\ \\grave{a}\\ \\hat{\\theta}\\ \\widehat{widehat}"
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
						"a'\\ a''\\ a^{\\prime}\\ \\acute{a}\\ \\bar{y}\\ \\breve{a}\\ \\check{a}\\ \\dot{a}\\ \\ddot{a}\\ \\grave{a}\\ \\hat{\\theta}\\ \\widehat{widehat}",
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="a'\ a''\ a^{'{'}\prime}\ \acute{'{'}a}\ \bar{'{'}y}\ \breve{'{'}a}\ \check{'{'}a}\ \dot{'{'}a}\ \ddot{'{'}a}\ \grave{'{'}a}\ \hat{'{'}\theta}\ \widehat{'{'}widehat}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd8f9ff00-d479-450a-b0bc-7aff193223ab',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\tilde{tilde}\\ \\widetilde{widetilde}\\ \\utilde{utilde}\\ \\vec{vec}\\ \\overleftarrow{overleftarrow}\\ \\underleftarrow{underleftarrow}'
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
						'\\tilde{tilde}\\ \\widetilde{widetilde}\\ \\utilde{utilde}\\ \\vec{vec}\\ \\overleftarrow{overleftarrow}\\ \\underleftarrow{underleftarrow}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\tilde{'{'}tilde}\ \widetilde{'{'}widetilde}\ \utilde{'{'}utilde}\ \vec{'{'}vec}\ \overleftarrow{'{'}overleftarrow}\ \underleftarrow{'{'}underleftarrow}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '021fbb7c-f973-4ecf-aa5f-f253a5508865',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\overleftharpoon{overleftharpoon}\\ \\overleftrightarrow{overleftrightarrow}\\ \\underleftrightarrow{underleftrightarrow}'
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
						'\\overleftharpoon{overleftharpoon}\\ \\overleftrightarrow{overleftrightarrow}\\ \\underleftrightarrow{underleftrightarrow}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\overleftharpoon{'{'}overleftharpoon}\ \overleftrightarrow{'{'}overleftrightarrow}\ \underleftrightarrow{'{'}underleftrightarrow}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '219304b1-470b-4cb0-a545-7155737556c8',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\overline{overline}\\ \\underline{underline}\\ \\ \\underbar{underbar}\\ \\widecheck{widecheck}'
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
						'\\overline{overline}\\ \\underline{underline}\\ \\ \\underbar{underbar}\\ \\widecheck{widecheck}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\overline{'{'}overline}\ \underline{'{'}underline}\ \ \underbar{'{'}underbar}\ \widecheck{'{'}widecheck}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '438ca2f3-44da-42fb-a343-cba4510823d4',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\mathring{mathring}\\ \\overgroup{overgroup}\\ \\undergroup{undergroup}\\ \\Overrightarrow{Overrightarrow}'
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
						'\\mathring{mathring}\\ \\overgroup{overgroup}\\ \\undergroup{undergroup}\\ \\Overrightarrow{Overrightarrow}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\mathring{'{'}mathring}\ \overgroup{'{'}overgroup}\ \undergroup{'{'}undergroup}\ \Overrightarrow{'{'}Overrightarrow}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '649e0620-5aa9-4796-bec5-5acf18a96d88',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:21:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\overrightarrow{overrightarrow}\\ \\underrightarrow{underrightarrow}\\ \\overrightharpoon{overrightharpoon}\\ \\overbrace{overbrace}'
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
						'\\overrightarrow{overrightarrow}\\ \\underrightarrow{underrightarrow}\\ \\overrightharpoon{overrightharpoon}\\ \\overbrace{overbrace}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\overrightarrow{'{'}overrightarrow}\ \underrightarrow{'{'}underrightarrow}\ \overrightharpoon{'{'}overrightharpoon}\ \overbrace{'{'}overbrace}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '4cfe8a39-5293-4b43-aedf-e850ea2a43c8',
		created_time: '2021-11-13T10:21:00.000Z',
		last_edited_time: '2021-11-13T10:22:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\underbrace{underbrace}\\ \\overlinesegment{overlinesegment}\\ \\underlinesegment{underlinesegment}\\ \\underbar{underbar}'
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
						'\\underbrace{underbrace}\\ \\overlinesegment{overlinesegment}\\ \\underlinesegment{underlinesegment}\\ \\underbar{underbar}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\underbrace{'{'}underbrace}\ \overlinesegment{'{'}overlinesegment}\ \underlinesegment{'{'}underlinesegment}\ \underbar{'{'}underbar}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'fbe00c41-baf4-4c0c-a781-9aaad9926a8f',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Delimiters',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Delimiters',
					href: null
				}
			]
		}
	}}
	><h3>Delimiters</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'd1d9f657-af9f-4839-91d7-723106a7db0a',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'(foo)\\ [foo]\\ \\{foo\\}\\ \\lang{foo}\\rang\\  |foo|\\ \\|foo\\|\\ \\lt{foo}\\gt\\ \\lceil{foo}\\rceil\\ \\lfloor{foo}\\rfloor'
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
						'(foo)\\ [foo]\\ \\{foo\\}\\ \\lang{foo}\\rang\\  |foo|\\ \\|foo\\|\\ \\lt{foo}\\gt\\ \\lceil{foo}\\rceil\\ \\lfloor{foo}\\rfloor',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="(foo)\ [foo]\ \{'{'}foo\}\ \lang{'{'}foo}\rang\  |foo|\ \|foo\|\ \lt{'{'}foo}\gt\ \lceil{'{'}foo}\rceil\ \lfloor{'{'}foo}\rfloor"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '98503973-cdfb-4e24-8a37-373b19e56341',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\lmoustache{foo}\\rmoustache\\ \\lgroup{foo}\\rgroup\\ \\ulcorner{foo}\\urcorner\\ \\llcorner{foo}\\lrcorner\\ \\llbracket{foo}\\rrbracket\\ ↑\\ ↓\\ \\updownarrow\\ ⇑\\ ⇓\\ \\Updownarrow\\ \\backslash \\lBrace{foo}\\rBrace'
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
						'\\lmoustache{foo}\\rmoustache\\ \\lgroup{foo}\\rgroup\\ \\ulcorner{foo}\\urcorner\\ \\llcorner{foo}\\lrcorner\\ \\llbracket{foo}\\rrbracket\\ ↑\\ ↓\\ \\updownarrow\\ ⇑\\ ⇓\\ \\Updownarrow\\ \\backslash \\lBrace{foo}\\rBrace',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\lmoustache{'{'}foo}\rmoustache\ \lgroup{'{'}foo}\rgroup\ \ulcorner{'{'}foo}\urcorner\ \llcorner{'{'}foo}\lrcorner\ \llbracket{'{'}foo}\rrbracket\ ↑\ ↓\ \updownarrow\ ⇑\ ⇓\ \Updownarrow\ \backslash \lBrace{'{'}foo}\rBrace"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1394c41e-cc08-442c-8546-9678e0ff40a3',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Delimiter Sizing',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Delimiter Sizing',
					href: null
				}
			]
		}
	}}
	><h3>Delimiter Sizing</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '67bbc6e5-747d-4b87-bed8-88eb31fd7fff',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression: '\\left\\lang\\LARGE{LARGE}\\right\\rang'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\left\\lang\\LARGE{LARGE}\\right\\rang',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation block={false} katexString="\left\lang\LARGE{'{'}LARGE}\right\rang" />
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'be0cfdfe-2cbb-4205-b7a8-789351d5b70a',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression: '\\lang\\big\\lang\\Big\\lang\\bigg\\lang\\Bigg\\lang'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\lang\\big\\lang\\Big\\lang\\bigg\\lang\\Bigg\\lang',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation block={false} katexString="\lang\big\lang\Big\lang\bigg\lang\Bigg\lang" />
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1abe22ae-68c3-44ca-bf89-d58717e495c3',
		created_time: '2021-11-13T10:46:00.000Z',
		last_edited_time: '2021-11-13T10:46:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Note: ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Note: ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\left',
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
					plain_text: '\\left',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\middle',
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
					plain_text: '\\middle',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', and ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', and ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\right',
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
					plain_text: '\\right',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							" don't seem to be supported. Also, it's unclear to me what the differences are between, say, ",
						link: null
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
						" don't seem to be supported. Also, it's unclear to me what the differences are between, say, ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\big',
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
					plain_text: '\\big',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\bigl',
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
					plain_text: '\\bigl',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\bigm',
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
					plain_text: '\\bigm',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', and ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', and ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\bigr',
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
					plain_text: '\\bigr',
					href: null
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
		Note:&thinsp;<InlineCode>\left</InlineCode>,&thinsp;<InlineCode>\middle</InlineCode>,
		and&thinsp;<InlineCode>\right</InlineCode>&thinsp;don't seem to be supported. Also, it's unclear
		to me what the differences are between, say,&thinsp;<InlineCode>\big</InlineCode
		>,&thinsp;<InlineCode>\bigl</InlineCode>,&thinsp;<InlineCode>\bigm</InlineCode>, and&thinsp;<InlineCode
			>\bigr</InlineCode
		>.
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '38ba6890-cd52-4e92-bd7d-aafb313015c0',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T10:55:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_3',
		heading_3: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Environments',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Environments',
					href: null
				}
			]
		}
	}}
	><h3>Environments</h3>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '51f6b5a4-a565-4dfb-9856-a78c9087c869',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:01:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{matrix}…',
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
					plain_text: '\\begin{matrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{matrix}\n   a & b \\\\\n   c & d\n\\end{matrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{matrix}\n   a & b \\\\\n   c & d\n\\end{matrix}',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' , which is ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' , which is ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'almost',
						link: {
							url: 'https://tex.stackexchange.com/questions/324455/matrix-vs-array-environments'
						}
					},
					annotations: {
						bold: false,
						italic: true,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'almost',
					href: 'https://tex.stackexchange.com/questions/324455/matrix-vs-array-environments'
				},
				{
					type: 'text',
					text: {
						content: ' identical to ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' identical to ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'array',
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
					plain_text: 'array',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{array}{cc}a & b \\\\ c & d \\end{array}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{array}{cc}a & b \\\\ c & d \\end{array}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}matrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}matrix}
   a & b \\
   c & d
\end{'{'}matrix}"
		/>&thinsp;, which is&thinsp;<MagicLink
			href="https://tex.stackexchange.com/questions/324455/matrix-vs-array-environments"
			><em>almost</em></MagicLink
		>&thinsp;identical to&thinsp;<InlineCode>array</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}array}{'{'}cc}a & b \\ c & d \end{'{'}array}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c933ed4e-b007-422b-a736-b8beea2284af',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{pmatrix}…',
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
					plain_text: '\\begin{pmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{pmatrix}\n   a & b \\\\\n   c & d\n\\end{pmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{pmatrix}\n   a & b \\\\\n   c & d\n\\end{pmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}pmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}pmatrix}
   a & b \\
   c & d
\end{'{'}pmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'f8453136-b405-4a28-8ecd-0aa0b8e260e4',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{bmatrix}…',
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
					plain_text: '\\begin{bmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{bmatrix}\n   a & b \\\\\n   c & d\n\\end{bmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{bmatrix}\n   a & b \\\\\n   c & d\n\\end{bmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}bmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}bmatrix}
   a & b \\
   c & d
\end{'{'}bmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '990851b3-3fa3-456d-a949-2f23da8a5ab7',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{vmatrix}…',
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
					plain_text: '\\begin{vmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{vmatrix}\n   a & b \\\\\n   c & d\n\\end{vmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{vmatrix}\n   a & b \\\\\n   c & d\n\\end{vmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}vmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}vmatrix}
   a & b \\
   c & d
\end{'{'}vmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'a520f532-ee14-4183-b1c9-88f360c1e9c0',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{Vmatrix}…',
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
					plain_text: '\\begin{Vmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{Vmatrix}\n   a & b \\\\\n   c & d\n\\end{Vmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{Vmatrix}\n   a & b \\\\\n   c & d\n\\end{Vmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}Vmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}Vmatrix}
   a & b \\
   c & d
\end{'{'}Vmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '887a0b18-bcb0-47fc-8f08-c6c2f89dc597',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{Bmatrix}…',
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
					plain_text: '\\begin{Bmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{Bmatrix}\n   a & b \\\\\n   c & d\n\\end{Bmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{Bmatrix}\n   a & b \\\\\n   c & d\n\\end{Bmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}Bmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}Bmatrix}
   a & b \\
   c & d
\end{'{'}Bmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'a4dd9bdb-0af7-4b67-abf8-c3315fa3f76e',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\def\\arraystretch{1.5}…',
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
					plain_text: '\\def\\arraystretch{1.5}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression:
							'\\def\\arraystretch{1.5}\n\\begin{array}{c:c:c}\n   a & b & c \\\\ \\hline\n   d & e & f \\\\\n   \\hdashline\n   g & h & i\n\\end{array}'
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
						'\\def\\arraystretch{1.5}\n\\begin{array}{c:c:c}\n   a & b & c \\\\ \\hline\n   d & e & f \\\\\n   \\hdashline\n   g & h & i\n\\end{array}',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' (also demos ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' (also demos ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\hline',
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
					plain_text: '\\hline',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' and ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' and ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\hdashline',
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
					plain_text: '\\hdashline',
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
	}}
	><div>
		<InlineCode>\def\arraystretch{'{'}1.5}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\def\arraystretch{'{'}1.5}
\begin{'{'}array}{'{'}c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{'{'}array}"
		/>&thinsp;(also demos&thinsp;<InlineCode>\hline</InlineCode>&thinsp;and&thinsp;<InlineCode
			>\hdashline</InlineCode
		>)
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '14ea2e81-e588-4b0b-b821-b3b50873230d',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{cases}…',
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
					plain_text: '\\begin{cases}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression:
							'x = \\begin{cases}\n   a &\\text{if } b \\\\\n   c &\\text{if } d\n\\end{cases}'
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
						'x = \\begin{cases}\n   a &\\text{if } b \\\\\n   c &\\text{if } d\n\\end{cases}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}cases}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="x = \begin{'{'}cases}
   a &\text{'{'}if } b \\
   c &\text{'{'}if } d
\end{'{'}cases}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'db01c8a1-3724-4593-9f36-a1e3edef6447',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{rcases}…',
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
					plain_text: '\\begin{rcases}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression:
							'\\begin{rcases}\n   a &\\text{if } b \\\\\n   c &\\text{if } d\n\\end{rcases}⇒…'
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
						'\\begin{rcases}\n   a &\\text{if } b \\\\\n   c &\\text{if } d\n\\end{rcases}⇒…',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}rcases}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}rcases}
   a &\text{'{'}if } b \\
   c &\text{'{'}if } d
\end{'{'}rcases}⇒…"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c967e63d-1bd4-448e-a581-c20ac7fc640b',
		created_time: '2021-11-13T10:55:00.000Z',
		last_edited_time: '2021-11-13T11:00:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: '\\begin{smallmatrix}…',
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
					plain_text: '\\begin{smallmatrix}…',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ' → ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ' → ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: '\\begin{smallmatrix}\n   a & b \\\\\n   c & d\n\\end{smallmatrix}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\begin{smallmatrix}\n   a & b \\\\\n   c & d\n\\end{smallmatrix}',
					href: null
				}
			]
		}
	}}
	><div>
		<InlineCode>\begin{'{'}smallmatrix}…</InlineCode>&thinsp;→&thinsp;<Equation
			block={false}
			katexString="\begin{'{'}smallmatrix}
   a & b \\
   c & d
\end{'{'}smallmatrix}"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'c69fb98d-ac4c-4e9d-bfab-d2bc55fa8422',
		created_time: '2021-11-13T11:02:00.000Z',
		last_edited_time: '2021-11-13T11:04:00.000Z',
		has_children: true,
		archived: false,
		type: 'column_list',
		column_list: {},
		blocks: [
			{
				object: 'block',
				id: '515dc0a9-ab10-40cc-bce4-060248dc2962',
				created_time: '2021-11-13T11:02:00.000Z',
				last_edited_time: '2021-11-13T11:04:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: 'b2d90d89-49bb-464b-ba80-cd7feee783d6',
						created_time: '2021-11-13T10:55:00.000Z',
						last_edited_time: '2021-11-13T11:04:00.000Z',
						has_children: true,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: [
								{
									type: 'text',
									text: {
										content: '\\sum_…subarray…',
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
									plain_text: '\\sum_…subarray…',
									href: null
								},
								{
									type: 'text',
									text: {
										content: ' → ',
										link: null
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: 'default'
									},
									plain_text: ' → ',
									href: null
								},
								{
									type: 'equation',
									equation: {
										expression:
											'\\sum_{\n\\begin{subarray}{l}\n   i\\in\\Lambda\\\\\n   0<j<n\n\\end{subarray}}'
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
										'\\sum_{\n\\begin{subarray}{l}\n   i\\in\\Lambda\\\\\n   0<j<n\n\\end{subarray}}',
									href: null
								}
							]
						},
						blocks: [
							{
								object: 'block',
								id: 'cb546737-6a3e-4372-9b22-3ba90d59ae8b',
								created_time: '2021-11-13T10:55:00.000Z',
								last_edited_time: '2021-11-13T10:55:00.000Z',
								has_children: false,
								archived: false,
								type: 'paragraph',
								paragraph: {
									text: [
										{
											type: 'text',
											text: {
												content: 'Though ',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: 'Though ',
											href: null
										},
										{
											type: 'text',
											text: {
												content: 'katex.org',
												link: {
													url: 'http://katex.org'
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
											plain_text: 'katex.org',
											href: 'http://katex.org'
										},
										{
											type: 'text',
											text: {
												content: ' renders it like →',
												link: null
											},
											annotations: {
												bold: false,
												italic: false,
												strikethrough: false,
												underline: false,
												code: false,
												color: 'default'
											},
											plain_text: ' renders it like →',
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
				id: 'f16a431b-d987-4043-989f-bb916c6aae36',
				created_time: '2021-11-13T11:04:00.000Z',
				last_edited_time: '2021-11-13T11:04:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: 'fc38af8d-720b-45d3-a381-49e68fcac598',
						created_time: '2021-11-13T11:04:00.000Z',
						last_edited_time: '2021-11-13T11:04:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: []
						}
					}
				]
			},
			{
				object: 'block',
				id: '8a61a5cb-c0ef-41eb-b276-79524434ac1b',
				created_time: '2021-11-13T11:02:00.000Z',
				last_edited_time: '2021-11-13T11:04:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: 'fc9eb6d7-5110-4711-bbdf-74959ab555d5',
						created_time: '2021-11-13T10:55:00.000Z',
						last_edited_time: '2021-11-13T11:02:00.000Z',
						has_children: false,
						archived: false,
						type: 'image',
						image: {
							caption: [],
							type: 'file',
							file: {
								url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8008d292-129c-4c61-b33e-4157fd36c4b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211116T040523Z&X-Amz-Expires=3600&X-Amz-Signature=4d3e9227155d71153ca4870d11a586295067868f3f3e68d6bbef37ebdb290057&X-Amz-SignedHeaders=host',
								expiry_time: '2021-11-16T05:05:23.597Z'
							}
						}
					}
				]
			},
			{
				object: 'block',
				id: '7dbebf28-f979-4162-939b-34ade2e37ed5',
				created_time: '2021-11-13T11:04:00.000Z',
				last_edited_time: '2021-11-13T11:04:00.000Z',
				has_children: true,
				archived: false,
				type: 'column',
				column: {},
				blocks: [
					{
						object: 'block',
						id: '825513a4-3a08-4fdf-aaf0-18af2363456f',
						created_time: '2021-11-13T11:04:00.000Z',
						last_edited_time: '2021-11-13T11:04:00.000Z',
						has_children: false,
						archived: false,
						type: 'paragraph',
						paragraph: {
							text: []
						}
					}
				]
			}
		]
	}}
	><ColumnList cols={4}
		><Column
			><div>
				<InlineCode>\sum_…subarray…</InlineCode>&thinsp;→&thinsp;<Equation
					block={false}
					katexString="\sum_{'{'}
\begin{'{'}subarray}{'{'}l}
   i\in\Lambda\\
   0<j<n
\end{'{'}subarray}}"
				/>
			</div>
			<IndentGroup>
				<div>
					Though&thinsp;<MagicLink href="http://katex.org">katex.org</MagicLink>&thinsp;renders it
					like →
				</div>
			</IndentGroup>
		</Column><Column><div /></Column><Column
			><Image url="/images/equations/fc9eb6d7-5110-4711-bbdf-74959ab555d5.png" />
		</Column><Column><div /></Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'eee17428-9d8c-4bdf-b3b7-e89f3d5b0c8a',
		created_time: '2021-11-13T11:02:00.000Z',
		last_edited_time: '2021-11-13T11:04:00.000Z',
		has_children: false,
		archived: false,
		type: 'callout',
		callout: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Apparently ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Apparently ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'equation/split',
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
					plain_text: 'equation/split',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'gather',
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
					plain_text: 'gather',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'CD',
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
					plain_text: 'CD',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'align',
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
					plain_text: 'align',
					href: null
				},
				{
					type: 'text',
					text: {
						content: ', and ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: ', and ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'alignat',
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
					plain_text: 'alignat',
					href: null
				},
				{
					type: 'text',
					text: {
						content:
							' can\'t be used in inline equations because Notion doesn\'t support "display mode"???',
						link: null
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
						' can\'t be used in inline equations because Notion doesn\'t support "display mode"???',
					href: null
				}
			],
			icon: {
				type: 'emoji',
				emoji: '☝🏿'
			}
		}
	}}
	><Callout emoji="☝🏿"
		>Apparently&thinsp;<InlineCode>equation/split</InlineCode>,&thinsp;<InlineCode
			>gather</InlineCode
		>,&thinsp;<InlineCode>CD</InlineCode>,&thinsp;<InlineCode>align</InlineCode>, and&thinsp;<InlineCode
			>alignat</InlineCode
		>&thinsp;can't be used in inline equations because Notion doesn't support "display mode"???</Callout
	></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '12aa125e-4181-44ab-8fa7-63b8a9d7141f',
		created_time: '2021-11-13T11:02:00.000Z',
		last_edited_time: '2021-11-13T11:02:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression: '\\bcancel{bcancel}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '\\bcancel{bcancel}',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation block={false} katexString="\bcancel{'{'}bcancel}" />
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'cdfa5085-9821-47e0-9fa1-46b6ee7accd7',
		created_time: '2021-11-13T11:02:00.000Z',
		last_edited_time: '2021-11-13T11:06:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'equation',
					equation: {
						expression:
							'\\bigcirc\\ —\\ \\ominus\\ \\triangle\\ \\oplus\\ \\bigstar\\ \\odot\\ \\times'
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
						'\\bigcirc\\ —\\ \\ominus\\ \\triangle\\ \\oplus\\ \\bigstar\\ \\odot\\ \\times',
					href: null
				}
			]
		}
	}}
	><div>
		<Equation
			block={false}
			katexString="\bigcirc\ —\ \ominus\ \triangle\ \oplus\ \bigstar\ \odot\ \times"
		/>
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'cb8f66f2-6c26-4570-84f1-b4f28fff9aa7',
		created_time: '2021-11-13T11:04:00.000Z',
		last_edited_time: '2021-11-13T23:11:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Out-of-the-box ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Out-of-the-box ',
					href: null
				},
				{
					type: 'text',
					text: {
						content: 'katex',
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
					plain_text: 'katex',
					href: null
				},
				{
					type: 'text',
					text: {
						content: " doesn't seem to support this, though it renders fine in Notion: ",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: " doesn't seem to support this, though it renders fine in Notion: ",
					href: null
				},
				{
					type: 'text',
					text: {
						content: '\\pu{123 kJ//mol}',
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
					plain_text: '\\pu{123 kJ//mol}',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '. ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '. ',
					href: null
				}
			]
		}
	}}
	><div>
		Out-of-the-box&thinsp;<InlineCode>katex</InlineCode>&thinsp;doesn't seem to support this, though
		it renders fine in Notion:&thinsp;<InlineCode>\pu{'{'}123 kJ//mol}</InlineCode>.&thinsp;
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '1a44c724-c065-4fbe-a271-83b1d8fe9355',
		created_time: '2021-11-13T23:11:00.000Z',
		last_edited_time: '2021-11-13T23:12:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Welcome to ',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Welcome to ',
					href: null
				},
				{
					type: 'equation',
					equation: {
						expression: 'The\\ \\Complex{omplect}'
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'The\\ \\Complex{omplect}',
					href: null
				},
				{
					type: 'text',
					text: {
						content: '!',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: '!',
					href: null
				}
			]
		}
	}}
	><div>
		Welcome to&thinsp;<Equation block={false} katexString="The\ \Complex{'{'}omplect}" />!
	</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '53317945-0ebc-43dd-8ec1-b426ddd0ec49',
		created_time: '2021-11-13T09:57:00.000Z',
		last_edited_time: '2021-11-13T23:09:00.000Z',
		has_children: false,
		archived: false,
		type: 'heading_1',
		heading_1: {
			text: [
				{
					type: 'text',
					text: {
						content: 'Blocks',
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: 'Blocks',
					href: null
				}
			]
		}
	}}
	><h1>Blocks</h1>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'bf6ce139-6897-4f7b-91c8-1ca174e31c29',
		created_time: '2021-11-13T23:09:00.000Z',
		last_edited_time: '2021-11-13T23:09:00.000Z',
		has_children: false,
		archived: false,
		type: 'paragraph',
		paragraph: {
			text: [
				{
					type: 'text',
					text: {
						content: "(the content's no different, so…fewer examples)",
						link: null
					},
					annotations: {
						bold: false,
						italic: false,
						strikethrough: false,
						underline: false,
						code: false,
						color: 'default'
					},
					plain_text: "(the content's no different, so…fewer examples)",
					href: null
				}
			]
		}
	}}
	><div>(the content's no different, so…fewer examples)</div>
</Magic>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '24aadb55-1a3c-4f69-aa3a-8887dd140bc9',
		created_time: '2021-11-13T08:47:00.000Z',
		last_edited_time: '2021-11-13T08:47:00.000Z',
		has_children: false,
		archived: false,
		type: 'equation',
		equation: {
			expression: '\\begin{CD}\n   A @>a>> B \\\\\n@VbVV @AAcA \\\\\n   C @= D\n\\end{CD}'
		}
	}}
	><Equation
		block={true}
		katexString="\begin{'{'}CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{'{'}CD}"
	/></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: 'f5fba538-5a66-419d-a16b-8db72107d800',
		created_time: '2021-11-13T23:08:00.000Z',
		last_edited_time: '2021-11-13T23:08:00.000Z',
		has_children: false,
		archived: false,
		type: 'equation',
		equation: {
			expression:
				'\\def\\arraystretch{1.5}\n\\begin{array}{c:c:c}\n   a & b & c \\\\ \\hline\n   d & e & f \\\\\n   \\hdashline\n   g & h & i\n\\end{array}'
		}
	}}
	><Equation
		block={true}
		katexString="\def\arraystretch{'{'}1.5}
\begin{'{'}array}{'{'}c:c:c}
   a & b & c \\ \hline
   d & e & f \\
   \hdashline
   g & h & i
\end{'{'}array}"
	/></Magic
>
<br style="display:none;" />
<Magic
	page={{
		object: 'page',
		id: '83792b44-9a18-4037-ae24-15bc07543054',
		created_time: '2021-11-13T08:47:00.000Z',
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
							content: 'equations',
							link: null
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
							content: 'Equations, rendered by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Equations, rendered by ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'katex',
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
						plain_text: 'katex',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Equations-rendered-by-katex-83792b449a184037ae2415bc07543054',
		blocks: []
	}}
	block={{
		object: 'block',
		id: '79d3ef74-5d20-4c61-8c01-64aa0daf07c6',
		created_time: '2021-11-13T08:48:00.000Z',
		last_edited_time: '2021-11-13T08:48:00.000Z',
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
