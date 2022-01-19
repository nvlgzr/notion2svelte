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
  import Magic from '$lib/notion2svelte/Magic.svelte';
  import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>Code — JS string interpolation breaks page</title>
</svelte:head>

<Magic blockId={undefined}><Title>Code — JS string interpolation breaks page</Title></Magic>

<Magic blockId={'77eb3c6b-c287-4ac9-99cf-a6f063bab5a9'}
  ><Header level="1">Failing block/span</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'aebf4af9-cebb-47bd-8e61-73f331f86b97'}
  ><Paragraph>⚠️ Failing to render ↓</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'019fa202-a47e-41ea-81bb-998476040545'}
  ><Code
    code={`const c = (t) => \`<Component code="${escapeHtml(t)}" />\`;`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'fdb754af-cf9f-42cd-8efd-1c116450b382'}
  ><Paragraph>⚠️ Failing to render ↑</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'163f5277-c515-44f4-9f16-8407369a7a9f'}><Header level="1">Error</Header></Magic>
<br style="display:none;" />
<Magic blockId={'5e31ad4c-6b9e-4ec0-b338-0d4b663bb796'}
  ><Code code={`escapeHtml is not defined`} language="javascript" /></Magic
>
<br style="display:none;" />
<Magic blockId={'33ca6ccc-c5c2-4dbf-95e2-d0b53f75290c'}
  ><Toggle
    >Full details
    <span slot="children"
      ><Image
        url="/assets/bugs/js-string-interpolation-breaks-page/a56a2b8d-89b5-4247-9ba8-6e4d13f82f8a.png"
      />
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'087056de-b4f7-4297-bd1d-d794693c48cc'}
  ><Header level="1">Failing commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'525b019b-6ea5-4906-9774-692aa7d7dde9'}
  ><Paragraph>ba1fc9e21e805b5153e32532c03b4a8befe8b732</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'c25a21f9-4cfa-414e-a13e-dce2961bf787'}
  ><Header level="1">Fixed in commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'2298467f-a34b-467e-961b-1b34a73a2ed9'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'b85ee91b-9c73-4e7f-95fe-e61ff010fdee'}
  ><Header level="1">Code Analysis</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'fd27229f-132a-43be-9d80-f26c1986e0a6'}
  ><Image
    url="/assets/bugs/js-string-interpolation-breaks-page/fd27229f-132a-43be-9d80-f26c1986e0a6.png"
    >Still having to use screenshots while this code stuff remains broken 😞</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'18b86df1-3565-4f57-b21e-17953583b31f'}><Header level="1">Source</Header></Magic>
<br style="display:none;" />
<Magic blockId={'fdb48547-b4b5-4cc9-957d-19f3b907a2dc'}><Header level="3">Current</Header></Magic>
<br style="display:none;" />
<Magic blockId={'857c0d2c-3577-4448-9f47-70768275c3fe'}
  ><Code
    code={`export const escapeBackticks = (str) => str.replace(/\`/g, "\\\`");
…
code: (code, language) =>
    \`<Code code={${'`'}${escapeBackticks(code)}${'`'}} language="${language}" />\`,
…`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'fdcfba31-1e9f-453f-9b36-64f381d85261'}><Header level="3">Fixed</Header></Magic>
<br style="display:none;" />
<Magic blockId={'a483abec-f575-4cd7-a833-58e3ecb20204'}
  ><Code
    code={`export const escapeBackticks = (str) => str.replace(/\`/g, "\\\`");
export const escapeOpenCurlies = (str) => str.replace(/{/g, "\\{");
…
code: (code, language) =>
		\`<Code code={${'`'}${escapeOpenCurlies(escapeBackticks(code))}${'`'}} language="${language}" />\`,
…`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
