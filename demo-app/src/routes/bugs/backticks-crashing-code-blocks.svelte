<svelte:head>
  <title>Backticks break Code blocks</title>
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
  <Title>Backticks break Code blocks</Title>




  <Header level={1}>Failing block/span</Header>
<Paragraph blockProps={{"pageId":"f016e601294f4e68b42a7b3a30f6bb47","id":"5f082e8c-86b9-431d-bda4-caa76217bcda","created_time":"2022-01-18T05:46:00.000Z","last_edited_time":"2022-01-18T05:46:00.000Z"}}>
⚠️ Failing to render ↓
</Paragraph>
<Code code={`const c = (t) => \`<Component code="$\\\{escapeHtml(t)}" />\`;`} language="javascript"></Code><Paragraph blockProps={{"pageId":"f016e601294f4e68b42a7b3a30f6bb47","id":"c6f9a050-8d42-48be-9775-240b5833b5a1","created_time":"2022-01-18T05:46:00.000Z","last_edited_time":"2022-01-18T05:46:00.000Z"}}>
⚠️ Failing to render↑
</Paragraph>
<Header level={1}>Failing output</Header>
<Image url="/assets/bugs/backticks-crashing-code-blocks/d3fd5d06-8a46-48ad-85c6-ba5d4e021db8.png"></Image>
<Header level={1}>Working output</Header>
<Image url="/assets/bugs/backticks-crashing-code-blocks/8b313a58-a97f-4071-a665-2f0701769452.png"></Image>
<Header level={1}>Error</Header>
<Code code={`backticks-crashing-code-blocks.svelte:43:98 Expected }`} language="javascript"></Code><Toggle>Full details
<span slot="children"><Image url="/assets/bugs/backticks-crashing-code-blocks/25ebba8a-e52d-42f2-84a6-320e99f80b9f.png"></Image>
</span></Toggle><Header level={1}>Failing commit</Header>
<Paragraph blockProps={{"pageId":"f016e601294f4e68b42a7b3a30f6bb47","id":"1c1eaf95-ef69-49ac-9388-af38733dcf9b","created_time":"2022-01-18T05:46:00.000Z","last_edited_time":"2022-01-18T05:50:00.000Z"}}>
95848f1662a879ada9954b4368079f1587b5556b
</Paragraph>
<Header level={1}>Failing + Working code</Header>
<Image url="/assets/bugs/backticks-crashing-code-blocks/ab00e74e-4709-468f-86cd-48e451cd7d54.png">For now, all I can do is a screenshot, because something in THIS code causes a similar error. 🙄</Image>
<Header level={1}>Fixed in commit</Header>
<Paragraph blockProps={{"pageId":"f016e601294f4e68b42a7b3a30f6bb47","id":"319f66bf-aaa9-46aa-aa4a-622ad6220f51","created_time":"2022-01-18T05:46:00.000Z","last_edited_time":"2022-01-18T05:58:00.000Z"}}>
ba1fc9e21e805b5153e32532c03b4a8befe8b732
</Paragraph>

  