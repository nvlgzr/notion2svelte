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
	import Header from '$lib/notion2svelte/Header.svelte';
	import Image from '$lib/notion2svelte/Image.svelte';
	import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
	import Equation from '$lib/notion2svelte/Equation.svelte';
	import Magic from '$lib/notion2svelte/Magic.svelte';
	import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
	<title>Why is this site so hideous?</title>
</svelte:head>
<Cover
	coverURL={'https://images.unsplash.com/photo-1615726719242-47aaf6305fa3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'}
	iconEmojiOrURL={'undefined'}
/>
<Magic
	sourceJSON={{
		object: 'page',
		id: '166c0029-be6a-4c7b-9011-5d5325424344',
		created_time: '2021-12-04T01:01:00.000Z',
		last_edited_time: '2021-12-04T01:20:00.000Z',
		cover: {
			type: 'external',
			external: {
				url: 'https://images.unsplash.com/photo-1615726719242-47aaf6305fa3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb'
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
							content: 'a-word-about-styles',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'a-word-about-styles',
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
							content: 'Why is this site so hideous?',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Why is this site so hideous?',
						href: null
					}
				]
			}
		},
		url: 'https://www.notion.so/Why-is-this-site-so-hideous-166c0029be6a4c7b90115d5325424344'
	}}
	><Title>Why is this site so hideous?</Title>
</Magic>

<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '16bbc00c-1b1c-4c2d-93fb-318bd814c591',
			created_time: '2021-12-04T01:02:00.000Z',
			last_edited_time: '2021-12-04T01:03:00.000Z',
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				text: [
					{
						type: 'text',
						text: {
							content: 'Here\'s how I "designed" this site. I…',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Here\'s how I "designed" this site. I…',
						href: null
					}
				]
			}
		}
	}}
	><Paragraph>Here's how I "designed" this site. I…</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '3e46f1a3-7675-4816-b79a-4dc3289fae28',
			created_time: '2021-12-04T01:03:00.000Z',
			last_edited_time: '2021-12-04T01:03:00.000Z',
			has_children: false,
			archived: false,
			type: 'bulleted_list_item',
			bulleted_list_item: {
				text: [
					{
						type: 'text',
						text: {
							content: "…started with SvelteKit's Demo App…don't recall why",
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: "…started with SvelteKit's Demo App…don't recall why",
						href: null
					}
				]
			}
		}
	}}
	><BulletedListItem>…started with SvelteKit's Demo App…don't recall why</BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: 'c934793d-6070-420d-8d98-9811a23ca36b',
			created_time: '2021-12-04T01:03:00.000Z',
			last_edited_time: '2021-12-04T01:06:00.000Z',
			has_children: false,
			archived: false,
			type: 'bulleted_list_item',
			bulleted_list_item: {
				text: [
					{
						type: 'text',
						text: {
							content: '…while implementing each block type supported by ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: '…while implementing each block type supported by ',
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
								', I applied what seemed like the minimal amount of styling needed to get the output looking at least ',
							link: null
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
							', I applied what seemed like the minimal amount of styling needed to get the output looking at least ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'kinda',
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
						plain_text: 'kinda',
						href: null
					},
					{
						type: 'text',
						text: {
							content:
								" ok, often blindly accepting some variation of GitHub Copilot's suggestions, and ",
							link: null
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
							" ok, often blindly accepting some variation of GitHub Copilot's suggestions, and ",
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'always',
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
						plain_text: 'always',
						href: null
					},
					{
						type: 'text',
						text: {
							content: ' caring less than I "should"',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: ' caring less than I "should"',
						href: null
					}
				]
			}
		}
	}}
	><BulletedListItem
		>…while implementing each block type supported by&thinsp;<em>notion2svelte</em>, I applied what
		seemed like the minimal amount of styling needed to get the output looking at least&thinsp;<em
			>kinda</em
		>&thinsp;ok, often blindly accepting some variation of GitHub Copilot's suggestions, and&thinsp;<em
			>always</em
		>&thinsp;caring less than I "should"</BulletedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '72e1ae3b-dde0-46bf-857e-3dfcd6ec005a',
			created_time: '2021-12-04T01:05:00.000Z',
			last_edited_time: '2021-12-04T01:07:00.000Z',
			has_children: false,
			archived: false,
			type: 'bulleted_list_item',
			bulleted_list_item: {
				text: [
					{
						type: 'text',
						text: {
							content:
								"…on rare occasions, I allowed myself to modify the demo app's global styles / nav",
							link: null
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
							"…on rare occasions, I allowed myself to modify the demo app's global styles / nav",
						href: null
					}
				]
			}
		}
	}}
	><BulletedListItem
		>…on rare occasions, I allowed myself to modify the demo app's global styles / nav</BulletedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: 'c2afb500-11e5-4c5a-b226-c4715b855ab5',
			created_time: '2021-12-04T01:07:00.000Z',
			last_edited_time: '2021-12-04T01:17:00.000Z',
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				text: [
					{
						type: 'text',
						text: {
							content:
								'The goal for this first version was to explore customization opportunities — hence the ☙-shaped list bullets above, the weird curlicue dividers, and the swooshing animation on the cover art. Rather than worrying too much about a comprehensive look to my test app.',
							link: null
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
							'The goal for this first version was to explore customization opportunities — hence the ☙-shaped list bullets above, the weird curlicue dividers, and the swooshing animation on the cover art. Rather than worrying too much about a comprehensive look to my test app.',
						href: null
					}
				]
			}
		}
	}}
	><Paragraph>
		The goal for this first version was to explore customization opportunities — hence the ☙-shaped
		list bullets above, the weird curlicue dividers, and the swooshing animation on the cover art.
		Rather than worrying too much about a comprehensive look to my test app.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '86d4891f-b89a-4935-9d60-83dc83d99fcb',
			created_time: '2021-12-04T01:17:00.000Z',
			last_edited_time: '2021-12-04T01:18:00.000Z',
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				text: [
					{
						type: 'text',
						text: {
							content:
								"Then the test app became the Docs app, and I'm having second thoughts…while also feeling wary of my tendency to procrastinate. Not wanting to delay this first release anymore, ugly wins. Think of it as me learning this simple lesson, relayed to me by a long lost friend and colleague:",
							link: null
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
							"Then the test app became the Docs app, and I'm having second thoughts…while also feeling wary of my tendency to procrastinate. Not wanting to delay this first release anymore, ugly wins. Think of it as me learning this simple lesson, relayed to me by a long lost friend and colleague:",
						href: null
					}
				]
			}
		}
	}}
	><Paragraph>
		Then the test app became the Docs app, and I'm having second thoughts…while also feeling wary of
		my tendency to procrastinate. Not wanting to delay this first release anymore, ugly wins. Think
		of it as me learning this simple lesson, relayed to me by a long lost friend and colleague:
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: 'da1705ee-550b-4e5a-887e-9e7092f82738',
			created_time: '2021-12-04T01:11:00.000Z',
			last_edited_time: '2021-12-04T01:18:00.000Z',
			has_children: false,
			archived: false,
			type: 'quote',
			quote: {
				text: [
					{
						type: 'text',
						text: {
							content: 'Make it work, then make it slick',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'Make it work, then make it slick',
						href: null
					}
				]
			}
		}
	}}><Quote>Make it work, then make it slick</Quote></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '4ff78679-a6b6-4105-a817-11c90f82cc0f',
			created_time: '2021-12-04T01:12:00.000Z',
			last_edited_time: '2021-12-04T01:20:00.000Z',
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				text: [
					{
						type: 'text',
						text: {
							content:
								'Doing this "right" will require a duplication of much of the thinking that Notion must have done when they were first refining their own designs. For instance, how to prevent the title from becoming unreadable when there\'s a Cover but no Icon? How to ensure that images look good in- or out of columns? Not to mention testing on mobile, a revamp of the navigation, etc. etc.',
							link: null
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
							'Doing this "right" will require a duplication of much of the thinking that Notion must have done when they were first refining their own designs. For instance, how to prevent the title from becoming unreadable when there\'s a Cover but no Icon? How to ensure that images look good in- or out of columns? Not to mention testing on mobile, a revamp of the navigation, etc. etc.',
						href: null
					}
				]
			}
		}
	}}
	><Paragraph>
		Doing this "right" will require a duplication of much of the thinking that Notion must have done
		when they were first refining their own designs. For instance, how to prevent the title from
		becoming unreadable when there's a Cover but no Icon? How to ensure that images look good in- or
		out of columns? Not to mention testing on mobile, a revamp of the navigation, etc. etc.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '166c0029-be6a-4c7b-9011-5d5325424344',
			slug: 'a-word-about-styles',
			createdOn: '2021-12-04T01:01:00.000Z',
			lastEdited: '2021-12-04T01:20:00.000Z'
		},
		block: {
			object: 'block',
			id: '1bc2cb21-7477-4768-862a-07692c98eaf4',
			created_time: '2021-12-04T01:20:00.000Z',
			last_edited_time: '2021-12-04T01:20:00.000Z',
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				text: [
					{
						type: 'text',
						text: {
							content: 'TL;DR—We are, currently, very much in the ',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'TL;DR—We are, currently, very much in the ',
						href: null
					},
					{
						type: 'text',
						text: {
							content: 'Make it work',
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
						plain_text: 'Make it work',
						href: null
					},
					{
						type: 'text',
						text: {
							content: ' phase. 😬',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: ' phase. 😬',
						href: null
					}
				]
			}
		}
	}}
	><Paragraph>
		TL;DR—We are, currently, very much in the&thinsp;<em>Make it work</em>&thinsp;phase. 😬
	</Paragraph>
</Magic>
<br style="display:none;" />
