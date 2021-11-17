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
	<title>This is notion2svelte</title>
</svelte:head>

<Title>This is notion2svelte</Title>

<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'bd211e29-c900-4170-a3a9-bdf075cacdb2'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'b2ceba29-49e0-4c84-bb5c-9f0c6471b502'
		}
	}}><Callout emoji="😳">What am I looking at here?</Callout></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '7f6c24c0-dda1-4f00-96dd-4919541eb829'
		}
	}}
	><Paragraph>
		These are demo pages for&thinsp;<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>@nvlgzr/notion2svelte</MagicLink
		>, a command-line tool for transforming Notion pages into websites of arbitrary complexity.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '224e9e70-0067-4361-92e8-76c0920ed6c8'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '0ee20d5c-7d9e-4a38-91d2-0a4ee6d72c71'
		}
	}}><Callout emoji="🤔">But what does that mean, exactly?</Callout></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '5b6cd08f-56bd-4dea-8c59-aac3da836b23'
		}
	}}
	><Paragraph>
		Well, at a basic level, it means that&thinsp;<em>notion2svelte</em>&thinsp;lets you treat Notion
		as sort of a CMS for your web site!
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'dc331323-bbc1-4741-9fc0-aad0e89eeb9b'
		}
	}}
	><Image url="/assets/about-notion2svelte/dc331323-bbc1-4741-9fc0-aad0e89eeb9b.png"
		>notion2svelte, grossly over-simplified</Image
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'a92c5462-8328-49d9-a04f-1100dd81e5f6'
		}
	}}
	><Paragraph>
		More specifically,&thinsp;<em>notion2svelte</em>&thinsp;outputs valid&thinsp;<em>.svelte</em
		>&thinsp;files right into the SvelteKit directory of your choosing. This, combined with custom
		components that you define in&thinsp;<InlineCode>$lib/notion2svelte/</InlineCode>&thinsp;gives
		you complete control over rendering and behavior. Once thus exported, your Notion pages are
		virtually indistinguishable from hand-written&thinsp;<em>.svelte</em>&thinsp;components. This
		means you can mix and match to your heart's content. You can even make manual adjustments
		to&thinsp;<em>notion2svelte</em>'s output, using Notion as more of a drafting space than a CMS.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '04f51424-fbad-44c9-a310-0e29e119b056'
		}
	}}
	><Paragraph>
		And because&thinsp;<em>notion2svelte</em>'s output behaves just like the rest of your&thinsp;<em
			>.svelte</em
		>&thinsp;files, you can (I'd argue&thinsp;<em>should</em>) check them in with the rest of your
		source. This gives you all the benefits of change history, diffs, et al that comes with git (or
		whatever you're using for source control).
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '3c58a99a-4b8b-40fe-9c0f-c5b6a5c40d6e'
		}
	}}
	><Paragraph>¿Claro?</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '6c8a2b4c-6712-475e-87ad-64d44905b126'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'a40f69f7-ca13-440a-a94a-238ad5bb3c6d'
		}
	}}
	><Callout emoji="🧐"
		><strong>I think what I meant was, "Why is what I'm looking at so ugly?</strong></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '569a7534-bfd4-4ccf-a4c4-c98bba7bb704'
		}
	}}
	><Paragraph>Three reasons, really.</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'd2f810a2-b77a-4d0f-b62d-eaa1c9deed6d'
		}
	}}
	><NumberedListItem number="1">
		I decided early on to leave the SvelteKit demo app's styles mostly untouched, for better or
		worse.</NumberedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'b2e36b76-af8d-46ab-b0f6-b2bc5e8b08d7'
		}
	}}
	><NumberedListItem number="2">
		All of these components were styled with the utmost haste in order to get something out the door
		before 2022 🙀. In most cases, I let GitHub Copilot take the first stab at each component's
		styles, and then tweaked the results to be a little more presentable.</NumberedListItem
	>
	<IndentGroup>
		<Paragraph>
			(Also, I just ran out of steam with some of this stuff — e.g., how to properly space annotated
			content so that the space around the formatted letters — and could probably use some help. See
			something you'd like improved? Hit me up in the GitHub chat!)
		</Paragraph>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'a7e9316a-b079-4c2c-a432-558bd394b4ce'
		}
	}}
	><NumberedListItem number="3">
		<em>notion2svelte</em>&thinsp;is all about creative freedom. It's&thinsp;<em>not</em
		>&thinsp;about doing your design work for you. 🤪 I hope that leaving the demo UX unpolished
		will make it clear that notion2svelte is meant to be tinkered with.</NumberedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '2ba94893-3640-4fba-95b7-7a16e1257134'
		}
	}}
	><Callout emoji="😎"
		>Ok, cool! What sorts of Notion features does&thinsp;<em>notion2svelte</em
		>&thinsp;support?</Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'e89663ea-4149-4ce6-ac11-5a481ce907c5'
		}
	}}
	><Paragraph>Most of the basics you'd need for a personal website</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '6b2fd1ce-0b07-4a7e-9f0b-3cc024df5e4d'
		}
	}}
	><ColumnList cols={2}
		><Column
			><BulletedListItem
				>These major&thinsp;<MagicLink href="https://developers.notion.com/reference/block"
					><strong>Block</strong></MagicLink
				><MagicLink href="https://developers.notion.com/reference/block">&thinsp;types</MagicLink
				>:</BulletedListItem
			>
			<IndentGroup>
				<BulletedListItem>paragraph</BulletedListItem>
				<BulletedListItem>bulleted_list_item</BulletedListItem>
				<BulletedListItem>numbered_list_item</BulletedListItem>
				<BulletedListItem>toggle</BulletedListItem>
				<BulletedListItem>to_do</BulletedListItem>
				<BulletedListItem>quote</BulletedListItem>
				<BulletedListItem>callout</BulletedListItem>
				<BulletedListItem>embed</BulletedListItem>
				<BulletedListItem>child_page*</BulletedListItem>
			</IndentGroup>
		</Column><Column
			><BulletedListItem
				>Most&thinsp;<MagicLink href="https://developers.notion.com/reference/rich-text"
					>Rich Text</MagicLink
				>&thinsp;features:</BulletedListItem
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
					><InlineColor value="blue">r&thinsp;</InlineColor>(Including background&thinsp;<InlineColor
						value="green_background"><strong>c</strong></InlineColor
					><InlineColor value="orange_background"><strong>o</strong></InlineColor><InlineColor
						value="pink_background"><strong>l</strong></InlineColor
					><InlineColor value="purple_background"><strong>o</strong></InlineColor><InlineColor
						value="blue_background"><strong>r</strong></InlineColor
					><InlineColor value="brown_background"><strong>s</strong></InlineColor
					>)**</BulletedListItem
				>
				<BulletedListItem><InlineCode>code</InlineCode></BulletedListItem>
				<BulletedListItem
					><MagicLink
						href="https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html"
						>external</MagicLink
					>&thinsp;&&thinsp;<a href="links-and-sub_pages">internal links</a>†</BulletedListItem
				>
			</IndentGroup>
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ff80bb1a-d2e1-496d-ac92-10f43385bfc3'
		}
	}}
	><Paragraph>
		You may also have noticed that we've got columns here ↑. These match the 2-column layout I
		created in the&thinsp;<a href="about-notion2svelte">source doc</a>&thinsp;on Notion.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '758a4224-f90e-4b68-b8f0-c2875bc85427'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '230bc242-d407-4cec-badd-f05692c4048d'
		}
	}}
	><Paragraph>
		<InlineColor value="blue">*See the&thinsp;</InlineColor><InlineColor value="blue"
			><strong>Child Page</strong></InlineColor
		><InlineColor value="blue"
			>&thinsp;section below to see the wacky thing I decided to have them do for this demo.</InlineColor
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '4190ab7e-78f8-4aba-bfb8-8ad4cab6b7da'
		}
	}}
	><Paragraph>
		<InlineColor value="blue"
			>**As of this writing, block-level colors aren't reported by the Notion API.</InlineColor
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '42fb0f6d-ab96-4fa5-96d8-eaa1d388b944'
		}
	}}
	><Paragraph>
		<InlineColor value="blue"
			>†Page mentions within the same database should work automatically when published to the same
			notion2svelte output directory. Other than that, notion2svelte currently has limited support
			for mentions. Is that a deal-breaker for you? Hit me up on the GitHub D!</InlineColor
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '394a1a8a-6710-4c74-8b8b-ec6de5a84049'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ca0ca0b6-6eb3-44f3-a503-fe2401a1f4f8'
		}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '98d345c8-4d35-4636-a21e-bad59404fc70'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '155057d1-07a3-471a-b7ed-fab6fb166353'
		}
	}}
	><Callout emoji="🌟"
		><span slot="children"
			><Header level="1">Is that it?</Header>
			<Paragraph />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '89085547-1e11-455e-9e01-2cb451a6592a'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '40a80ce4-69f1-48d0-a5f3-e3c86842ab76'
		}
	}}
	><Paragraph>
		Naaaaah! We've got&thinsp;<a href="equations">equations</a>, inline and block,&thinsp;<a
			href="embeds">embeds</a
		>, images (downloaded directly to a directory of your choice),&thinsp;
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'e8b3495b-3f94-4690-b3e1-95db3819424c'
		}
	}}
	><Paragraph>
		In addition,&thinsp;<em>notion2svelte</em>&thinsp;automatically handles arbitrary levels of
		indentation (including 1./a./i. outlining), page covers, and page icons. There are still some
		things — e.g., synced blocks, databases, and link previews — that notion2svelte doesn't yet
		handle, but all the basics are here.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'bef27992-ab6d-4a2b-85e2-c0e6e8921094'
		}
	}}
	><Paragraph>
		All of which is enough to handle the needs of your average words + pictures blogster. But if
		that's all I'd wanted, I could have used some&thinsp;<MagicLink
			href="https://github.com/leveluptuts/svelte-notion">prior</MagicLink
		>&thinsp;<MagicLink href="https://github.com/search?q=svelte+notion">art</MagicLink>. (Lord
		knows most of those projects are probably better-engineered!)
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '7ccb4516-a9d5-4d17-8b9b-7101a2dccf51'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '09544107-9191-4911-95f9-36afffff0ed7'
		}
	}}
	><Divider />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ce590e6e-2867-4478-93c2-a878d822f2d0'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '21af8422-ae20-40d4-8236-3bc33dc8fa76'
		}
	}}
	><Callout emoji="🤯"
		><span slot="children"
			><Header level="1">Wait, what? There's more?</Header>
			<Paragraph />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '0501ac34-9168-4489-b6a2-3d76c63c668c'
		}
	}}
	><Callout emoji="🙄"
		>wf: replace standard HTML tags with custom components, then define the Standard Component
		Interface to replace Magic and (MagicLink?)</Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '9763591e-ba97-4668-ab86-80fccf4b0036'
		}
	}}
	><Header level="2"><s>&lt;Enthusiastic answer="yes" /></s></Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '6b40a63e-547c-4262-affe-dc63b2087b35'
		}
	}}
	><Paragraph>
		<s
			>The sky's the limit to the customizations you can make to your site! Put things where you
			want. Make them behave how you want. All while leveraging Notion's delightful writing
			experience for content creation.</s
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '72f5dfa5-4856-4922-9076-512e8a739f88'
		}
	}}
	><Paragraph>
		<s><em>notion2svelte</em></s><s
			>&thinsp;lets you customize every component that it spits out. For example, this very
			paragraph is represented in the&thinsp;</s
		><s><em>.svelte</em></s><s>&thinsp;output thus:</s>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '074aa906-d679-4cbb-9d98-8fb908c6a004'
		}
	}}>code</Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '4695f78e-de30-4fe3-96ce-166705b7bf4c'
		}
	}}
	><Paragraph>
		<s>Your site-wide styles will determine the behavior of the&thinsp;</s><s><em>italicized</em></s
		><s
			>&thinsp;text. Meanwhile, you can implement in &ltParagraph>, whether just an empty pair
			of&thinsp;</s
		><InlineCode><s>div</s></InlineCode><s>s, or something fancy and interactive.</s>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'b1a897e5-004a-4f06-acb8-0430da4dbecc'
		}
	}}
	><Header level="2">Custom Components&thinsp;<em>notion2svelte</em>&thinsp;Creates</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'eaba3b6f-47e0-43be-8f94-5fe1e67f7c71'
		}
	}}
	><ColumnList cols={3}
		><Column
			><Paragraph>Blocks</Paragraph>
			<BulletedListItem>BulletedListItem</BulletedListItem>
			<BulletedListItem><a href="callouts">Callout</a></BulletedListItem>
			<BulletedListItem><a href="cover">Cover</a></BulletedListItem>
			<BulletedListItem>Divider</BulletedListItem>
			<BulletedListItem><a href="embeds">Embed</a></BulletedListItem>
			<BulletedListItem><a href="equations">Equation</a></BulletedListItem>
			<BulletedListItem><a href="image-saving">Image</a></BulletedListItem>
			<BulletedListItem>InlineCode</BulletedListItem>
			<BulletedListItem><a href="color">InlineColor</a></BulletedListItem>
			<BulletedListItem><a href="numbered">NumberedListItem</a></BulletedListItem>
			<BulletedListItem><a href="quotes">Quote</a></BulletedListItem>
			<BulletedListItem>Title</BulletedListItem>
			<BulletedListItem>TodoItem</BulletedListItem>
			<BulletedListItem>Toggle</BulletedListItem>
		</Column><Column
			><Paragraph>Layout</Paragraph>
			<BulletedListItem><a href="nested">IndentGroup</a></BulletedListItem>
			<BulletedListItem>Column</BulletedListItem>
			<BulletedListItem>ColumnList</BulletedListItem>
		</Column><Column
			><Paragraph>Special Mention</Paragraph>
			<BulletedListItem>ChildPage</BulletedListItem>
		</Column></ColumnList
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'b5e3aabf-b340-4308-8c03-b1f18553409b'
		}
	}}
	><Paragraph>
		<s
			>The reason these Notion block types don't get converted into standard HTML tags is that I
			didn't know of a good fit off the top of my head. Also…it's such a joy styling elements with
			Svelte's scoped CSS that I've half a mind to render&thinsp;</s
		><s><em>all</em></s><s
			>&thinsp;blocks as components, doing away with the standard tags altogether. This</s
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'bfe97211-0d5e-460f-bd83-1df4cc656493'
		}
	}}
	><Header level="3">Child Pages</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'a0a156d0-0dcc-4733-85e3-7998c0273e25'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '836d7de6-b6a9-4123-a0e0-612b8260cd9d'
		}
	}}
	><Paragraph>↑ There's a child page right here in the Notion source.&thinsp;</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'dccbd38c-5035-4b00-b559-840cc2d7662d'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '75f78e04-aa4d-425c-950f-82e816ca8620'
		}
	}}
	><BulletedListItem>Magic</BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '48cd1f9d-983f-4585-8ed7-629f860b7a7f'
		}
	}}
	><BulletedListItem>MagicLink</BulletedListItem>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '11a793cd-b4b4-428d-8d12-c323a685e7d4'
		}
	}}
	><Callout emoji="🙄"
		><span slot="children"
			><Header level="1">Let me guess. There's more.</Header>
			<Paragraph />
		</span></Callout
	></Magic
>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ea7ed30b-c6b6-4d90-b306-f92b978c2781'
		}
	}}
	><Paragraph>
		Ok. You got me. Let me introduce you to a highly-experimental pair of features I call…
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '23a8c6b6-ab22-4fae-9b98-9e63137e5060'
		}
	}}
	><Header level="3">Magic</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '810c3f08-d2fa-4ac1-b3c5-e64b6c1902f7'
		}
	}}
	><Paragraph>
		<em>notion2svelte</em>&thinsp;wraps every block in a&thinsp;<InlineCode>&lt;</InlineCode
		><InlineCode>Magic></InlineCode>&thinsp;component and passes it the associated JSON for both the
		page and the block. I plan to use it to attach a feedback UX to every published block, but this
		demo shows something slightly less ambitious.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ec4be7bb-c165-4e44-8b98-e3ca68137f47'
		}
	}}
	><Paragraph>
		To see what I mean, type&thinsp;<InlineCode>i</InlineCode>&thinsp;on your keyboard, then mouse
		over any block. If all goes well, you should see the source JSON, straight from Notion's API,
		for the block in question. Personally, I use this all the time while developing notion2svelte
		because it significantly reduces the time required to compare the input JSON with the html
		output.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '883b7ffa-f35b-4ab7-950f-28206ec12ce9'
		}
	}}
	><Header level="3">Magic Links</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '7fdf9fab-6083-4c39-a970-8d846863a630'
		}
	}}
	><Paragraph>
		Similarly, links are rendered as&thinsp;<InlineCode>&lt;MagicLink></InlineCode
		>&thinsp;components, making it possible, for example, to toggle all external-facing links on the
		page. Try it out! Type&thinsp;<InlineCode>d</InlineCode>&thinsp;(for "distractions") to
		see&thinsp;<MagicLink href="https://xkcd.com/2536/">links like this one</MagicLink
		>&thinsp;toggle between 'hint' and 'live' modes.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '4619b7b2-d2f4-4de3-8beb-fd67140f234e'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '8c9eacdf-099c-4688-9489-aecd27fca0db'
		}
	}}
	><Paragraph>&thinsp;How you use this is up to you.</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'fc0662ca-3bb0-4700-b769-aca9086d649c'
		}
	}}
	><Paragraph>
		<s>…git make sit safe with visual diffs before the&thinsp;</s><s><em>actual</em></s><s
			>&thinsp;publishing happens, and, of course, your toolkit is as flexible as svelte itself. In
			fact, you could probably use notion2svelte with an Astro project with no trouble</s
		>
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'dfbd74d8-b0dc-4385-8e18-466a04f69740'
		}
	}}
	><Header level="1">What's next?</Header>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '7cea1e54-4c58-4551-bfb6-5167de918465'
		}
	}}
	><BulletedListItem
		>Explore the various test pages at the bottom of the page to see all of this in action.</BulletedListItem
	>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '48d04be7-0b37-4f7d-bc94-16eda5b1ec19'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '37c63408-5f95-4d94-931e-2c9c4aa73cbc'
		}
	}}
	><Paragraph>
		Well, with&thinsp;<em>notion2svelte</em>, you&thinsp;
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'd168982e-a30d-4f26-bde0-98d5253edfc0'
		}
	}}
	><Paragraph>
		I write. A lot. And most of the time, I'm writing in&thinsp;<MagicLink href="https://notion.so"
			>Notion</MagicLink
		>. That's just a fact, and it defines the Input side of my publishing dreams. But what about the
		output? That's a bit complex because there isn't an existing tool (that I know of) that covers
		my strange and geeky criteria for my Ideal Publishing Platform (IPP).
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'c0519dcc-c60b-49ae-ad30-772bce67aaf0'
		}
	}}
	><Paragraph />
	<IndentGroup>
		<Paragraph>
			My IPP (codenamed in my notes,&thinsp;<em>Ouroboros</em>) has these criteria:
		</Paragraph>
		<BulletedListItem
			>Custom domain (pretty standard, but Notion still doesn't support it)</BulletedListItem
		>
		<BulletedListItem>Custom design — my own styles, layout, navigation, etc.</BulletedListItem>
		<BulletedListItem>Maximum long-term maintainability</BulletedListItem>
		<Paragraph />
		<Paragraph>
			In short:&thinsp;<strong>maximum freedom, minimum fuss.</strong>
		</Paragraph>
	</IndentGroup>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '69967da3-4111-4787-8741-d3559cbcf55e'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'c51de137-bd0c-4029-9366-3abab25f46d6'
		}
	}}
	><Paragraph>
		Whereas Notion makes writing prose easy and beautiful and, dare I say, even fun, Svelte does the
		same for the code side of things. Once my words are in the context of Svelte pages, the sky's
		the limit for not just how they look, but also how they&thinsp;<em>work</em>. As Michael
		Butterick put it:&thinsp;<MagicLink href="https://docs.racket-lang.org/pollen/"
			>the book is a program</MagicLink
		>.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ce87a363-0c67-4b4c-9004-addcd0852e48'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '14380520-4943-4de2-afc1-68a976a65d51'
		}
	}}
	><Paragraph>
		How does&thinsp;<MagicLink href="https://github.com/nvlgzr/notion2svelte"
			>notion2svelte</MagicLink
		>&thinsp;fit in? Well, if the name isn't enough of a giveaway, I use&thinsp;<em
			>notion2svelte</em
		>&thinsp;to convert my notion pages into .svelte files.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'd2ab2bc3-4c0c-4435-88df-b3efc6e572b1'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '33661f34-b34d-4778-96a9-d94e8705d24e'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '863447c9-a397-455b-a0eb-5734c15d81b7'
		}
	}}
	><Paragraph>So. What are we looking at here?</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '648c086c-3aea-400e-b667-ff0283fde7a4'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'ef251b52-7096-474c-8aa7-5b29112634e8'
		}
	}}
	><Paragraph>
		Each page below started life as a page in a single Notion database. It's open to the public, so
		you can can&thinsp;<MagicLink
			href="/c317033af18a479fbbfb7072cc7f53da?v=d6af76dea3be43eeb9428efce104d242"
			>check it out if you like</MagicLink
		>. If you're into publishing jargon, think of Notion as the CMS in this scenario.
	</Paragraph>
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: 'dc632771-ca65-46cf-981a-dbc1d96a07ac'
		}
	}}
	><Paragraph />
</Magic>
<br style="display:none;" />
<Magic
	sourceJSON={{
		page: {
			id: '2c97ea2f-4abe-4fcb-80ed-0e478560ab04',
			slug: 'about-notion2svelte',
			createdOn: '2021-11-09T21:40:00.000Z',
			lastEdited: '2021-11-17T21:49:00.000Z'
		},
		block: {
			id: '380eea2e-ff3c-4fef-9c11-cda8051cb0fa'
		}
	}}
	><Paragraph>
		When I was ready to pre-flight each page, I marked its Status as&thinsp;<em
			>Publish me!&thinsp;</em
		>in the page props, gave the page a slug to determine its eventual URL, then ran&thinsp;<MagicLink
			href="https://github.com/nvlgzr/notion2svelte">notion2svelte</MagicLink
		>&thinsp;on my laptop. (There was som setup involved there. See the&thinsp;
	</Paragraph>
</Magic>
<br style="display:none;" />
