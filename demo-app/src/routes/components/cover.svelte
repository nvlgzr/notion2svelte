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
  import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
  import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
  import Equation from '$lib/notion2svelte/Equation.svelte';
  import Link from '$lib/notion2svelte/Link.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>Cover (Image & Icon)</title>
</svelte:head>

<Cover
  coverURL={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2648cd63-fb9b-47c4-9ec2-c2ea152d0c15/IMG_1865.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220128T234333Z&X-Amz-Expires=3600&X-Amz-Signature=2f3bb8823d9b4012ba8501a6b58d7dcc80288f9e5c3c373aabe8b826724f5bab&X-Amz-SignedHeaders=host&x-id=GetObject'}
  iconEmojiOrURL={'🪲'}
/>
<Title>Cover (Image & Icon)</Title>

<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '540e5119-9b19-4dc2-818d-e89e210ae331',
    created_time: '2022-01-28T22:59:00.000Z',
    last_edited_time: '2022-01-28T23:01:00.000Z'
  }}
>
  The Cover component gives you access to the icon and cover image on each page, if they exist.
</Paragraph>
<Toggle
  >A brief digression:&nbsp;<strong>How&nbsp;</strong><em><strong>notion2svelte</strong></em><strong
    >&nbsp;handles images</strong
  >
  <span slot="children"
    ><Callout emoji="🧚🏿"
      >What you’re about to read is from a Synced Block shared with the&nbsp;<Link
        href="/components/image">Image</Link
      >&nbsp;component. It applies equally here.</Callout
    ><Header level={1}>How&nbsp;<em>notion2svelte</em>&nbsp;handles images</Header>
    <Paragraph
      blockProps={{
        pageId: 'df34058b281e4da6badc0a15a891d18e',
        id: '96511cc9-60c5-458e-8e25-66df77c86cd9',
        created_time: '2022-01-28T02:46:00.000Z',
        last_edited_time: '2022-01-28T10:59:00.000Z'
      }}
    >
      Notion uses Amazon for image hosting, and a side effect of that choices is that the image URLs
      on offer from the Notion API have a super-short shelf life. For this initial release,&nbsp;<em
        >notion2svelte</em
      >&nbsp;handles this in a rather naive fashion. Here’s the flow:
    </Paragraph>
    <IndentGroup>
      <NumberedListItem number="a">Fetch the actual image</NumberedListItem>
      <NumberedListItem number="b">
        Store it in&nbsp;<em>static/assets/<page-id>…</page-id></em></NumberedListItem
      >
      <NumberedListItem number="c">
        Use relative links to point the&nbsp;<InlineCode code={'src'} />&nbsp;attribute at the (full
        res! 🙀) images</NumberedListItem
      >
    </IndentGroup>
    <Paragraph
      blockProps={{
        pageId: 'df34058b281e4da6badc0a15a891d18e',
        id: 'de9d5124-60cb-4388-99a1-c608e0a079fe',
        created_time: '2022-01-28T02:46:00.000Z',
        last_edited_time: '2022-01-28T02:46:00.000Z'
      }}
    >
      Yes, I know this isn’t awesome. No, I haven’t done any research yet to figure out current
      best-practices, or, perhaps, some sort of extensible API.
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'df34058b281e4da6badc0a15a891d18e',
        id: 'ea73c6b2-261c-4d8a-a7ba-7cacb135d140',
        created_time: '2022-01-28T03:02:00.000Z',
        last_edited_time: '2022-01-28T23:02:00.000Z'
      }}
    />
    <Paragraph
      blockProps={{
        pageId: 'df34058b281e4da6badc0a15a891d18e',
        id: '5875be71-fd67-4b2e-bbf9-3e6115daa59f',
        created_time: '2022-01-28T02:48:00.000Z',
        last_edited_time: '2022-01-28T23:02:00.000Z'
      }}
    >
      If you’re cool with that, there’s nothing much for you to do to display Covers except handle
      the&nbsp;<em>coverURL</em>&nbsp;and&nbsp;<em>iconEmojiOrURL</em>&nbsp;props.
    </Paragraph>
  </span></Toggle
><Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Code
  code={`\{
  "object": "page",
  …
  "cover": \{
    "type": "file",
    "file": \{
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2648cd63-fb9b-47c4-9ec2-c2ea152d0c15/IMG_1865.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220128T023745Z&X-Amz-Expires=3600&X-Amz-Signature=f43b7af10139323e63149096654253d4a6156c7cc41df6dd6ec340d969762750&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-28T03:37:45.980Z"
    }
  },
  …
}`}
  language="javascript"
  caption=""
/><Header level={1}><strong>Svelte output</strong></Header>
<Code
  code={`<Cover
  coverURL=\{'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2648cd63-fb9b-47c4-9ec2-c2ea152d0c15/IMG_1865.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220128T110028Z&X-Amz-Expires=3600&X-Amz-Signature=438ced7db084ce6bd25d2a08f498b78c8e2b0b6fad1c231ba2ba148c42bc7a3d&X-Amz-SignedHeaders=host&x-id=GetObject'}
  iconEmojiOrURL=\{'🪲'}
/>`}
  language="html"
  caption=""
/><Header level={3}>Why is it called&nbsp;<em>iconEmojiOrURL</em>?</Header>
<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '8db22e6a-d620-4543-86ea-8865d5d36a30',
    created_time: '2022-01-28T02:51:00.000Z',
    last_edited_time: '2022-01-28T23:03:00.000Z'
  }}
>
  A mouthful, I know. This naming reflects the uncertainty of the icon payload coming from Notion…or
  at least, of the way in which I’ve decided to handle that payload.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '89d35c3e-c406-4353-8fc6-27c6388dc811',
    created_time: '2022-01-28T23:03:00.000Z',
    last_edited_time: '2022-01-28T23:08:00.000Z'
  }}
>
  Basically, you get a string, and it’s either super short, and, therefore, an emoji, or it’s lots
  longer because it starts with&nbsp;<InlineCode code={'http'} />, in which case you should treat it
  as an image URL.
</Paragraph>
<Code
  code={`$: assumeURL = iconEmojiOrURL.length > 3;`}
  language="javascript"
  caption="This assumption works because image names are UUIDs (or similar), generated by Notion/Amazon, and they’re all super long. ¯\_(ツ)_/¯"
/><Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '2f00176a-8416-47cf-a9a3-44af4aa192df',
    created_time: '2022-01-28T23:11:00.000Z',
    last_edited_time: '2022-01-28T23:11:00.000Z'
  }}
/>
<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '64fed6e2-a06c-4173-9ef4-151ca8dd830d',
    created_time: '2022-01-28T23:09:00.000Z',
    last_edited_time: '2022-01-28T23:11:00.000Z'
  }}
>
  For the code used to render&nbsp;<em>this</em>&nbsp;page’s Cover, see<InlineColor
    value="gray"
  /><Link
    href="https://github.com/nvlgzr/notion2svelte/blob/main/demo-app/src/lib/notion2svelte/Cover.svelte"
    ><InlineColor value="gray">Cover.svelte</InlineColor></Link
  >
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '5ba6d0c5-4382-4624-8d14-e1ea7c7cdf2f',
    created_time: '2022-01-27T23:41:00.000Z',
    last_edited_time: '2022-01-28T23:11:00.000Z'
  }}
/>
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><Link href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</Link
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: 'df34058b281e4da6badc0a15a891d18e',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<Link
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s">notion2svelte in 10** minutes</Link
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'df34058b281e4da6badc0a15a891d18e',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><Link href="https://fishshell.com/"><InlineColor value="gray">fish shell</InlineColor></Link
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'df34058b281e4da6badc0a15a891d18e',
      id: 'fc7a7eef-1c40-431e-9842-85d97d1e1d49',
      created_time: '2022-01-27T05:11:00.000Z',
      last_edited_time: '2022-01-27T05:11:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30
      minutes to allow for your own play time. 🧫</InlineColor
    >🧪
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'df34058b281e4da6badc0a15a891d18e',
      id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
      created_time: '2022-01-27T05:10:00.000Z',
      last_edited_time: '2022-01-27T05:10:00.000Z'
    }}
  />
</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘&nbsp;<a href="/about-notion2svelte">🏠</a>&nbsp;</Header>
<ColumnList cols={2}
  ><Column
    ><Header level={3}>High-level Discussion</Header>
    <BulletedListItem><Link href="/components">Components</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/rules-for-writing-good-slugs">Writing Good Slugs</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/block-props">blockProps</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/nested-blocks">Nested Blocks</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/synced-blocks">Synced Blocks</Link></BulletedListItem>
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><Link href="/components/paragraph">Paragraph (aka “Text”)</Link></BulletedListItem
    >
    <BulletedListItem
      ><Link href="/components/header">Header (3 types in 1!)</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/child-page">ChildPage</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/todo-item">TodoItem</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/bulleted-list-item">BulletedListItem</Link></BulletedListItem
    >
    <BulletedListItem
      ><Link href="/components/numbered-list-item">NumberedListItem</Link></BulletedListItem
    >
    <BulletedListItem><Link href="/components/toggle">Toggle</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/code">Code</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/quote">Quote</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/callout">Callout</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem><Link href="/components/indent-group">IndentGroup</Link></BulletedListItem>
    <BulletedListItem
      ><Link href="/components/columns">Column & ColumnList</Link>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem><Link href="/components/title">Title (aka Name)</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/cover">Cover (Image & Icon)</Link></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem><Link href="/components/inline-code">InlineCode</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/inline-color">InlineColor</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/internal-link">InternalLink</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/equation">Equation</Link></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><Link href="/components/divider">Divider</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/embed">Embed</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/image">Image</Link></BulletedListItem>
    <BulletedListItem><Link href="/components/error">Error</Link></BulletedListItem>
  </Column></ColumnList
>
