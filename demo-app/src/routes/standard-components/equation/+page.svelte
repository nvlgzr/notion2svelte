<script>
	import Error from '$lib/notion2svelte/Error.svelte';
	import Cover from '$lib/notion2svelte/Cover.svelte';
	import Title from '$lib/notion2svelte/Title.svelte';
	import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
	import Callout from '$lib/notion2svelte/Callout.svelte';
	import ChildPage from '$lib/notion2svelte/ChildPage.svelte';
	import Code from '$lib/notion2svelte/Code.svelte';
	import ColumnList from '$lib/notion2svelte/ColumnList.svelte';
	import Column from '$lib/notion2svelte/Column.svelte';
	import Divider from '$lib/notion2svelte/Divider.svelte';
	import Embed from '$lib/notion2svelte/Embed.svelte';
	import Header from '$lib/notion2svelte/Header.svelte';
	import Image from '$lib/notion2svelte/Image.svelte';
	import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
	import Underline from '$lib/notion2svelte/Underline.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
	import Equation from '$lib/notion2svelte/Equation.svelte';
	import Link from '$lib/notion2svelte/Link.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';
	import { setContext } from 'svelte';

	setContext('pageStuff', {
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		title: 'Equation'
	});
</script>

<svelte:head>
	<title>Equation</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<Title>Equation</Title>

<Header level={1}>1. Notion original</Header>
<Header level={3}>Inline</Header>
<Image
	url="/assets/standard-components/equation/49dff063-66e4-4113-b5ba-71511c705bb8.png"
	caption=""
/>
<Header level={3}>Block</Header>
<Image
	url="/assets/standard-components/equation/40267217-ee20-4205-a8b0-36923db0531c.png"
	caption=""
/>
<Header level={1}>2. Notion API</Header>
<Paragraph
	blockProps={{
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		id: '0538fec5-3bc6-4c24-815d-78b5ce846819',
		created_time: '2022-01-28T20:26:00.000Z',
		last_edited_time: '2022-12-08T08:39:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&ensp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug]/notion-export.js</em></InlineColor
	>
</Paragraph>
<Header level={3}>Inline</Header>
<Code
	code={`\{
  &quot;object&quot;: &quot;block&quot;,
  …
  &quot;type&quot;: &quot;paragraph&quot;,
  &quot;paragraph&quot;: \{
    &quot;text&quot;: [
      …
      \{
        &quot;type&quot;: &quot;equation&quot;,
        &quot;equation&quot;: \{
          &quot;expression&quot;: &quot;E=mc^2&quot;
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: false,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;E=mc^2&quot;,
        &quot;href&quot;: null
      },
      \{
        …
        &quot;plain_text&quot;: &quot; might be the most well-known equation on the planet, I’m slightly more fond of &quot;,
        …
      },
      \{
        &quot;type&quot;: &quot;equation&quot;,
        &quot;equation&quot;: \{
          &quot;expression&quot;: &quot;e^\{iπ}=-1&quot;
        },
        &quot;annotations&quot;: \{
          &quot;bold&quot;: false,
          &quot;italic&quot;: false,
          &quot;strikethrough&quot;: false,
          &quot;underline&quot;: false,
          &quot;code&quot;: false,
          &quot;color&quot;: &quot;default&quot;
        },
        &quot;plain_text&quot;: &quot;e^\{iπ}=-1&quot;,
        &quot;href&quot;: null
      },
      …
    ]
  }
}`}
	language="json"
/><Header level={3}>Block</Header>
<Code
	code={`\{
  &quot;object&quot;: &quot;block&quot;,
  &quot;id&quot;: &quot;63423e49-abae-40ac-b485-83ee14260386&quot;,
  &quot;created_time&quot;: &quot;2022-01-26T09:55:00.000Z&quot;,
  &quot;last_edited_time&quot;: &quot;2022-01-26T09:55:00.000Z&quot;,
  &quot;has_children&quot;: false,
  &quot;archived&quot;: false,
  &quot;type&quot;: &quot;equation&quot;,
  &quot;equation&quot;: \{
    &quot;expression&quot;: &quot;\\begin\{CD}\nA @&gt;a&gt;&gt; B \\\\\n@VbVV @AAcA \\\\\nC @= D\n\\end\{CD}&quot;
  }
}`}
	language="json"
/><Header level={1}>3. Svelte output</Header>
<Paragraph
	blockProps={{
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		id: '28871a46-c697-4500-b517-1c526797ab38',
		created_time: '2022-01-28T20:32:00.000Z',
		last_edited_time: '2022-01-28T20:32:00.000Z'
	}}
>
	<InlineColor value="gray">Partial output of&ensp;</InlineColor><InlineColor value="gray"
		><em>src/routes/[slug].svelte</em></InlineColor
	>
</Paragraph>
<Header level={3}>Inline</Header>
<Code
	code={`&lt;Paragraph blockProps=\{\{…}}&gt;
  Although &lt;Equation block=\{false} katexString=&quot;E=mc^2&quot; /&gt; might be the most well-known equation on the
  planet, I’m slightly more fond of &lt;Equation block=\{false} katexString=&quot;e^\{&#039;\{&#039;}iπ}=-1&quot; /&gt;. Euler
  needs better branding.
&lt;/Paragraph&gt;`}
	language="html"><InlineCode code={'block={false}'} /></Code
><Header level={3}>Block</Header>
<Code
	code={`&lt;Equation
  block=\{true}
  katexString=&quot;\begin\{&#039;\{&#039;}CD}
A @&gt;a&gt;&gt; B \\
@VbVV @AAcA \\
C @= D
\end\{&#039;\{&#039;}CD}&quot;
/&gt;`}
	language="html"><InlineCode code={'block={true}'} /></Code
><Header level={1}>4. Example rendering</Header>
<Paragraph
	blockProps={{
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		id: 'f01f769b-c9b9-4d68-a1ee-b9de396170fe',
		created_time: '2022-01-28T22:42:00.000Z',
		last_edited_time: '2022-12-08T10:33:00.000Z'
	}}
>
	<InlineColor value="gray">Rendered by</InlineColor><Link
		type="absolute"
		href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Equation.svelte"
		><InlineColor value="gray">Equation.svelte</InlineColor></Link
	><InlineColor value="gray">, which relies on&ensp;</InlineColor><Link
		type="absolute"
		href="https://katex.org/"><InlineColor value="gray">katex</InlineColor></Link
	><InlineColor value="gray"
		>&ensp;for typesetting. Notice how this implementation lets you toggle between ASCII and
		rendered&ensp;</InlineColor
	><InlineColor value="gray"><em>latex</em></InlineColor><InlineColor value="gray"
		>&ensp;by clicking on a diagram or equation.</InlineColor
	>
</Paragraph>
<Header level={3}>Inline</Header>
<Paragraph
	blockProps={{
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		id: '2f038578-9c57-4074-905c-ce6237ba700d',
		created_time: '2022-01-27T23:51:00.000Z',
		last_edited_time: '2022-01-28T23:50:00.000Z'
	}}
>
	Although&ensp;<Equation block={false} katexString="E=mc^2" />&ensp;might be the most well-known
	equation on the planet, I’m slightly more fond of&ensp;<Equation
		block={false}
		katexString="e^{'{'}iπ}=-1"
	/>. Euler needs better branding.
</Paragraph>
<Header level={3}>Block</Header>
<Equation
	block={true}
	katexString="\begin{'{'}CD}
A @>a>> B \\
@VbVV @AAcA \\
C @= D
\end{'{'}CD}"
/><Paragraph
	blockProps={{
		pageId: 'ef8517977d17431889a3ae09285cfef8',
		id: '27d68652-33ab-4179-b563-98554eee3c28',
		created_time: '2022-01-28T22:48:00.000Z',
		last_edited_time: '2022-01-28T22:48:00.000Z'
	}}
/>
<Divider />
<Header level={2}
	><Link type="alias" href="/about-notion2svelte">🏠</Link>&ensp;Browse the docs ⚘</Header
>
<ColumnList cols={2}
	><Column
		><Header level={3}>High-level Discussion</Header>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/flow-diagram"
				>Where notion2svelte Fits</Link
			>&ensp;</BulletedListItem
		>
		<BulletedListItem><Link type="mention" href="/components">Components</Link></BulletedListItem>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/rules-for-writing-good-slugs"
				>Writing Good Slugs</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/block-props">blockProps</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/nested-blocks">Nested Blocks</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/synced-blocks">Synced Blocks</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/high-level-discussion/dot-env">Configuring your .env</Link
			>&ensp;</BulletedListItem
		>
		<Header level={3}>Turn-intoable Block Components</Header>
		<BulletedListItem
			><Link type="mention" href="/standard-components/paragraph">Paragraph (aka “Text”)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/header">Header</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/child-page">ChildPage</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/todo-item">TodoItem</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/bulleted-list-item">BulletedListItem</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/numbered-list-item">NumberedListItem</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/toggle">Toggle</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/code">Code</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/quote">Quote</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/callout">Callout</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/standard-components/equation">Equation</Link></BulletedListItem
		>
		<BulletedListItem
			>Toggle Headings<InlineColor value="gray">&ensp;(not yet implemented)</InlineColor
			></BulletedListItem
		>
	</Column><Column
		><Header level={3}>Layout-only Components</Header>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/indent-group">IndentGroup</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/layout-only-components/columns">Column & ColumnList</Link
			>&ensp;</BulletedListItem
		>
		<Header level={3}>Page-level Components</Header>
		<BulletedListItem
			><Link type="mention" href="/page-level-components/title">Title (aka Name)</Link
			></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/page-level-components/cover">Cover (Image & Icon)</Link
			></BulletedListItem
		>
		<Header level={3}>Annotation Components</Header>
		<BulletedListItem
			><strong>bold</strong>&ensp;→&ensp;<InlineCode
				code={'&lt;strong&gt;'}
			/>&ensp;</BulletedListItem
		>
		<BulletedListItem
			><em>italic</em>&ensp;→&ensp;<InlineCode code={'&lt;em&gt;'} /></BulletedListItem
		>
		<BulletedListItem
			><s>strikethrough</s>&ensp;→&ensp;<InlineCode code={'&lt;s&gt;'} /></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/underline">Underline</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/inline-code">InlineCode</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/annotations/inline-color">InlineColor</Link></BulletedListItem
		>
		<BulletedListItem><Link type="mention" href="/annotations/link">Link</Link></BulletedListItem>
		<BulletedListItem
			><Link type="mention" href="/standard-components/equation">Equation</Link></BulletedListItem
		>
		<Header level={3}>Other Components</Header>
		<BulletedListItem
			><Link type="mention" href="/other-components/divider">Divider</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/embed">Embed</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/image">Image</Link></BulletedListItem
		>
		<BulletedListItem
			><Link type="mention" href="/other-components/error">Error</Link></BulletedListItem
		>
	</Column></ColumnList
>
<p
	style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
>
	⚠️ child_page: <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
		>foo.</span
	>&nbsp;has no content
</p>
