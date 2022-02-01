<svelte:head>
  <title>InlineCode — Curly braces break page</title>
</svelte:head>
      <script>
        import Error from "$lib/notion2svelte/Error.svelte";
        import Cover from "$lib/notion2svelte/Cover.svelte"
        import Title from "$lib/notion2svelte/Title.svelte"
        import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
        import Callout from "$lib/notion2svelte/Callout.svelte"
        import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
        import Code from "$lib/notion2svelte/Code.svelte"
        import ColumnList from "$lib/notion2svelte/ColumnList.svelte"
        import Column from "$lib/notion2svelte/Column.svelte"
        import Divider from "$lib/notion2svelte/Divider.svelte"
        import Embed from "$lib/notion2svelte/Embed.svelte"
        import Header from "$lib/notion2svelte/Header.svelte"
        import Image from "$lib/notion2svelte/Image.svelte"
        import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
        import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
        import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
        import Equation from "$lib/notion2svelte/Equation.svelte"
        import Link from "$lib/notion2svelte/Link.svelte"
        import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
        import Paragraph from "$lib/notion2svelte/Paragraph.svelte"
        import Quote from "$lib/notion2svelte/Quote.svelte"
        import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
        import Toggle from "$lib/notion2svelte/Toggle.svelte"
      </script>
      

  <Cover coverURL={""} iconEmojiOrURL={"🐞"} />
  <Title>InlineCode — Curly braces break page</Title>




  <Header level={1}>Failing block/span</Header>
<Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"354237d1-f574-4146-95f3-fbe8915a32e4","created_time":"2022-01-19T23:13:00.000Z","last_edited_time":"2022-01-19T23:15:00.000Z"}}>
⚠️ Failing to render →<InlineCode code={"{&quot;type&quot;:&quot;thingy&quot;…}"} />←
</Paragraph>
<Header level={1}>Error</Header>
<Code code={`curly-braces-break-inline-code.svelte:39:41 Unexpected token`} language="javascript"></Code><Toggle>Full details
<span slot="children"><Image url="/assets/bugs/curly-braces-break-inline-code/4605c3c7-d26b-42b8-8964-241114fee52f.png"></Image>
</span></Toggle><Header level={1}>Failing commit</Header>
<Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"cf9e59ee-e0e0-4263-a9fc-a29f03ccdde8","created_time":"2022-01-19T23:13:00.000Z","last_edited_time":"2022-01-19T23:17:00.000Z"}}>
5578f8b8dc03ff2343c55b1a77e2b313dc59912c
</Paragraph>
<Header level={1}>Fixed in commit</Header>
<Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"a11d0c31-93fd-4ff3-bc57-bf08498efcaf","created_time":"2022-01-19T23:13:00.000Z","last_edited_time":"2022-01-19T23:25:00.000Z"}}>
11d49a082fde0dc4714851d233f39082e7b0b78f
</Paragraph>
<Header level={1}>Code Analysis</Header>
<Header level={3}>Broken output</Header>
<Image url="/assets/bugs/curly-braces-break-inline-code/25e9ef91-1fe6-4566-a32f-7a9ad1f20668.png"></Image>
<Header level={3}>Working output</Header>
<Image url="/assets/bugs/curly-braces-break-inline-code/9bdaf7a9-771b-4011-8605-81a26e08e909.png">Note the extra curly braces!</Image>
<Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"ffcbfcda-1c40-43be-803b-370b12783327","created_time":"2022-01-19T23:19:00.000Z","last_edited_time":"2022-01-19T23:19:00.000Z"}}>
Here’s the broken source…
</Paragraph>
<Code code={`const c = (t) => \`<InlineCode code="$\{escapeHtml(t)}" />\`;`} language="javascript"></Code><Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"a6d3b544-baac-4041-991d-8820e1c01e1c","created_time":"2022-01-19T23:13:00.000Z","last_edited_time":"2022-01-19T23:13:00.000Z"}}>
This seems to work…
</Paragraph>
<Code code={`const c = (t) => \`<InlineCode code=\{"$\{escapeHtml(t)}"} />\`;`} language="javascript"></Code><Paragraph blockProps={{"pageId":"219dbe0cd0764583abb434aee4b5ae88","id":"f0b9f356-efb1-400b-93ff-f3cd50c1c4ec","created_time":"2022-01-19T23:13:00.000Z","last_edited_time":"2022-01-19T23:13:00.000Z"}}>

</Paragraph>

  