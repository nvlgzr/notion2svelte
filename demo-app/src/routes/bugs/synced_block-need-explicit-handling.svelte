<svelte:head>
  <title>Synced Blocks need explicit handling</title>
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
  <Title>Synced Blocks need explicit handling</Title>




  <Header level={1}>Failing block</Header>
<Paragraph blockProps={{"pageId":"82af9574770548ed843c801e3c7a53a3","id":"bfb8eb67-90f6-44da-bf7a-b46e45831c19","created_time":"2022-01-23T21:36:00.000Z","last_edited_time":"2022-01-23T21:36:00.000Z"}}>
I’m in ur Synced Block! 🦦
</Paragraph>
<Paragraph blockProps={{"pageId":"82af9574770548ed843c801e3c7a53a3","id":"5eec45cc-03be-42db-9e87-7f3675abf30e","created_time":"2022-01-23T21:39:00.000Z","last_edited_time":"2022-01-23T21:41:00.000Z"}}>
↑ “synced_block” block type appears in output ↓
</Paragraph>
<Paragraph blockProps={{"pageId":"82af9574770548ed843c801e3c7a53a3","id":"bfb8eb67-90f6-44da-bf7a-b46e45831c19","created_time":"2022-01-23T21:36:00.000Z","last_edited_time":"2022-01-23T21:36:00.000Z"}}>
I’m in ur Synced Block! 🦦
</Paragraph>
<Header level={1}>Failing commit</Header>
<Paragraph blockProps={{"pageId":"82af9574770548ed843c801e3c7a53a3","id":"42782094-e630-4807-a651-74a9460682b8","created_time":"2022-01-23T21:41:00.000Z","last_edited_time":"2022-01-23T21:41:00.000Z"}}>
db9fe47b407a41ea952e1c6e891eed23b1a25fff
</Paragraph>
<Image url="/assets/bugs/synced_block-need-explicit-handling/7439b6ab-1e88-40c7-b5e2-1dfce0a76c32.png">synced_block + unneeded indentation</Image>
<Header level={1}>Fixed in commit</Header>
<Paragraph blockProps={{"pageId":"82af9574770548ed843c801e3c7a53a3","id":"54f92d89-2f57-42bc-8dae-14d369504a44","created_time":"2022-01-23T21:41:00.000Z","last_edited_time":"2022-01-24T01:02:00.000Z"}}>
fc65cdde6db8429b396ebb4ae7476660328ca532
</Paragraph>

  