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
  import Link from '$lib/notion2svelte/Link.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>InlineCode — Curly braces break page</title>
</svelte:head>
<Cover coverURL={''} iconEmojiOrURL={'🐞'} />
<Magic blockId={undefined}><Title>InlineCode — Curly braces break page</Title></Magic>

<Magic blockId={'612af54b-c99a-44cc-bb6a-af779b8c7b68'}
  ><Header level="1">Failing block/span</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'354237d1-f574-4146-95f3-fbe8915a32e4'}
  ><Paragraph>
    ⚠️ Failing to render →<InlineCode code={'{&quot;type&quot;:&quot;thingy&quot;…}'} />←
  </Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'c17acc3c-4fb5-41b7-a357-b957fb945fda'}><Header level="1">Error</Header></Magic>
<br style="display:none;" />
<Magic blockId={'7cef2f51-7843-49c9-acf1-58470d23d1e5'}
  ><Code
    code={`curly-braces-break-inline-code.svelte:39:41 Unexpected token`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'2b305ba9-1207-4e23-8f68-9805539e8833'}
  ><Toggle
    >Full details
    <span slot="children"
      ><Image
        url="/assets/bugs/curly-braces-break-inline-code/4605c3c7-d26b-42b8-8964-241114fee52f.png"
      />
    </span></Toggle
  ></Magic
>
<br style="display:none;" />
<Magic blockId={'48c2165f-9cd1-4f52-94df-6634fb594e17'}
  ><Header level="1">Failing commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'cf9e59ee-e0e0-4263-a9fc-a29f03ccdde8'}
  ><Paragraph>5578f8b8dc03ff2343c55b1a77e2b313dc59912c</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'48bde624-d4df-4b15-9c30-87eaedbe9496'}
  ><Header level="1">Fixed in commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'a11d0c31-93fd-4ff3-bc57-bf08498efcaf'}><Paragraph /></Magic>
<br style="display:none;" />
<Magic blockId={'6b12295a-f0d6-4ba0-80fa-a3e872832416'}
  ><Header level="1">Code Analysis</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'58ed9866-db4a-4cb3-865f-4c36b06d1827'}
  ><Header level="3">Broken output</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'25e9ef91-1fe6-4566-a32f-7a9ad1f20668'}
  ><Image
    url="/assets/bugs/curly-braces-break-inline-code/25e9ef91-1fe6-4566-a32f-7a9ad1f20668.png"
  />
</Magic>
<br style="display:none;" />
<Magic blockId={'4d23162b-e23f-4d3f-b78e-dbae8ad2a25f'}
  ><Header level="3">Working output</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'9bdaf7a9-771b-4011-8605-81a26e08e909'}
  ><Image url="/assets/bugs/curly-braces-break-inline-code/9bdaf7a9-771b-4011-8605-81a26e08e909.png"
    >Note the extra curly braces!</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'ffcbfcda-1c40-43be-803b-370b12783327'}
  ><Paragraph>Here’s the broken source…</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'d263e119-f5c6-4fe3-9590-2e3395a44971'}
  ><Code
    code={`const c = (t) => \`<InlineCode code="$\{escapeHtml(t)}" />\`;`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'a6d3b544-baac-4041-991d-8820e1c01e1c'}
  ><Paragraph>This seems to work…</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'cea661aa-fc56-4c98-a1df-2416eb6a823f'}
  ><Code
    code={`const c = (t) => \`<InlineCode code=\{"$\{escapeHtml(t)}"} />\`;`}
    language="javascript"
  /></Magic
>
<br style="display:none;" />
<Magic blockId={'f0b9f356-efb1-400b-93ff-f3cd50c1c4ec'}><Paragraph /></Magic>
<br style="display:none;" />
