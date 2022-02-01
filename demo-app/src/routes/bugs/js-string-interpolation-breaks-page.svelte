<svelte:head>
  <title>Code — JS string interpolation breaks page</title>
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
  <Title>Code — JS string interpolation breaks page</Title>




  <Header level={1}>Failing block/span</Header>
<Paragraph blockProps={{"pageId":"33ddb88ad4a64305b4ffd6a90821bd73","id":"aebf4af9-cebb-47bd-8e61-73f331f86b97","created_time":"2022-01-19T22:43:00.000Z","last_edited_time":"2022-01-19T22:43:00.000Z"}}>
⚠️ Failing to render ↓
</Paragraph>
<Code code={`const c = (t) => \`<Component code="$\{escapeHtml(t)}" />\`;`} language="javascript"></Code><Paragraph blockProps={{"pageId":"33ddb88ad4a64305b4ffd6a90821bd73","id":"fdb754af-cf9f-42cd-8efd-1c116450b382","created_time":"2022-01-19T22:43:00.000Z","last_edited_time":"2022-01-19T22:43:00.000Z"}}>
⚠️ Failing to render ↑
</Paragraph>
<Header level={1}>Error</Header>
<Code code={`escapeHtml is not defined`} language="javascript"></Code><Toggle>Full details
<span slot="children"><Image url="/assets/bugs/js-string-interpolation-breaks-page/a56a2b8d-89b5-4247-9ba8-6e4d13f82f8a.png"></Image>
</span></Toggle><Header level={1}>Failing commit</Header>
<Paragraph blockProps={{"pageId":"33ddb88ad4a64305b4ffd6a90821bd73","id":"525b019b-6ea5-4906-9774-692aa7d7dde9","created_time":"2022-01-19T22:43:00.000Z","last_edited_time":"2022-01-19T22:49:00.000Z"}}>
ba1fc9e21e805b5153e32532c03b4a8befe8b732
</Paragraph>
<Header level={1}>Fixed in commit</Header>
<Paragraph blockProps={{"pageId":"33ddb88ad4a64305b4ffd6a90821bd73","id":"2298467f-a34b-467e-961b-1b34a73a2ed9","created_time":"2022-01-19T22:43:00.000Z","last_edited_time":"2022-01-19T22:58:00.000Z"}}>
5578f8b8dc03ff2343c55b1a77e2b313dc59912c
</Paragraph>
<Header level={1}>Code Analysis</Header>
<Image url="/assets/bugs/js-string-interpolation-breaks-page/fd27229f-132a-43be-9d80-f26c1986e0a6.png">Still having to use screenshots while this code stuff remains broken 😞</Image>
<Header level={1}>Source</Header>
<Header level={3}>Current</Header>
<Code code={`export const escapeBackticks = (str) => str.replace(/\`/g, "\\\`");
…
code: (code, language) =>
    \`<Code code=\{$\{"\`"}$\{escapeBackticks(
      code
    )}$\{"\`"}} language="$\{language}" />\`,
…`} language="javascript"></Code><Header level={3}>Fixed</Header>
<Code code={`export const escapeBackticks = (str) => str.replace(/\`/g, "\\\`");
export const escapeOpenCurlies = (str) => str.replace(/\{/g, "\\\{");
…
code: (code, language) =>
		\`<Code code=\{$\{"\`"}$\{escapeOpenCurlies(escapeBackticks(code))}$\{"\`"}} language="$\{language}" />\`,
…`} language="javascript"></Code>
  