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
  <title>Backticks break Code blocks</title>
</svelte:head>

<Magic blockId={undefined}><Title>Backticks break Code blocks</Title></Magic>

<Magic blockId={'1b6631e4-5aab-486f-a871-9b3da715b945'}
  ><Header level="1">Failing block/span</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'5f082e8c-86b9-431d-bda4-caa76217bcda'}
  ><Paragraph>⚠️ Failing to render ↓</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'59d92b8a-384c-4681-a62a-c98182e55619'}
  ><Code
    code={`const c = (t) => \`<Component code="$\\{escapeHtml(t)}" />\`;`}
    language="plain text"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'c6f9a050-8d42-48be-9775-240b5833b5a1'}
  ><Paragraph>⚠️ Failing to render↑</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'bcf4b232-b420-45c3-996e-b5c89b4e3fcb'}
  ><Header level="1">Failing output</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'d3fd5d06-8a46-48ad-85c6-ba5d4e021db8'}
  ><Image
    url="/assets/bugs/backticks-crashing-code-blocks/d3fd5d06-8a46-48ad-85c6-ba5d4e021db8.png"
  />
</Magic>
<br style="display:none;" />
<Magic blockId={'d70d7a2e-33bf-4ca3-908f-d5a73d0aa34e'}
  ><Header level="1">Working output</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'8b313a58-a97f-4071-a665-2f0701769452'}
  ><Image
    url="/assets/bugs/backticks-crashing-code-blocks/8b313a58-a97f-4071-a665-2f0701769452.png"
  />
</Magic>
<br style="display:none;" />
<Magic blockId={'24066f43-abf2-4d54-8a75-3403ff9d33fc'}><Header level="1">Error</Header></Magic>
<br style="display:none;" />
<Magic blockId={'738b912d-ea91-47f7-8ba9-aecfcf8b6dfd'}
  ><Code
    code={`backticks-crashing-code-blocks.svelte:43:98 Expected }`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'24e189bf-3b1a-445b-80e8-9f82bad5e76b'}
  ><Toggle
    >Full details
    <span slot="children"
      ><Image
        url="/assets/bugs/backticks-crashing-code-blocks/25ebba8a-e52d-42f2-84a6-320e99f80b9f.png"
      />
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'270fd668-afba-4f04-a4fd-0953be68219e'}
  ><Header level="1">Failing commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'1c1eaf95-ef69-49ac-9388-af38733dcf9b'}
  ><Paragraph>95848f1662a879ada9954b4368079f1587b5556b</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'b4be6038-8d6d-4176-bc51-f17701faf1c2'}
  ><Header level="1">Failing + Working code</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'ab00e74e-4709-468f-86cd-48e451cd7d54'}
  ><Image url="/assets/bugs/backticks-crashing-code-blocks/ab00e74e-4709-468f-86cd-48e451cd7d54.png"
    >For now, all I can do is a screenshot, because something in THIS code causes a similar error.
    🙄</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'308709ef-3963-4293-828f-8aa4dddce6be'}
  ><Header level="1">Fixed in commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'319f66bf-aaa9-46aa-aa4a-622ad6220f51'}><Paragraph /></Magic>
<br style="display:none;" />
