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
  <title>Synced Blocks need explicit handling</title>
</svelte:head>
<Cover coverURL={''} iconEmojiOrURL={'🐞'} />
<Magic blockId={undefined}><Title>Synced Blocks need explicit handling</Title></Magic>

<Magic blockId={'9e2c9e43-2cb2-433d-800c-ea67e2b9d506'}
  ><Header level="1">Failing block</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'420a68e7-c1e1-4d5a-9a09-9eb971b134be'}
  >synced_block<IndentGroup>
    <Paragraph>I’m in ur Synced Block! 🦦</Paragraph>
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'5eec45cc-03be-42db-9e87-7f3675abf30e'}
  ><Paragraph>↑ “synced_block” block type appears in output ↓</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'6f1fc95d-4382-409b-9734-ec0b34ddb349'}
  >synced_block<IndentGroup>
    <Paragraph>I’m in ur Synced Block! 🦦</Paragraph>
  </IndentGroup>
</Magic>
<br style="display:none;" />
<Magic blockId={'512ae120-3d1c-4d3b-8717-3a769de35b2c'}
  ><Header level="1">Failing commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'42782094-e630-4807-a651-74a9460682b8'}
  ><Paragraph>db9fe47b407a41ea952e1c6e891eed23b1a25fff</Paragraph>
</Magic>
<br style="display:none;" />
<Magic blockId={'7439b6ab-1e88-40c7-b5e2-1dfce0a76c32'}
  ><Image
    url="/assets/bugs/synced_block-need-explicit-handling/7439b6ab-1e88-40c7-b5e2-1dfce0a76c32.png"
    >synced_block + unneeded indentation</Image
  >
</Magic>
<br style="display:none;" />
<Magic blockId={'c8ca7576-7dad-46fd-a882-c4c600483fc5'}
  ><Header level="1">Fixed in commit</Header>
</Magic>
<br style="display:none;" />
<Magic blockId={'54f92d89-2f57-42bc-8dae-14d369504a44'}><Paragraph /></Magic>
<br style="display:none;" />
