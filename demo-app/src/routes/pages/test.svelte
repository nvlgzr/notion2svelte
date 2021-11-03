<svelte:head>
  <title>No Cover or Icon</title>
</svelte:head><script>
  import Cover from "$lib/notion2svelte/Cover.svelte"
  import Title from "$lib/notion2svelte/Title.svelte"
  import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
  import Callout from "$lib/notion2svelte/Callout.svelte"
  import Divider from "$lib/notion2svelte/Divider.svelte"
  import Image from "$lib/notion2svelte/Image.svelte"
  import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
  import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
  import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
  import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
  import Quote from "$lib/notion2svelte/Quote.svelte"
  import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
  import Toggle from "$lib/notion2svelte/Toggle.svelte"

  let curtainDrawn = false
</script>
  
  <Title>No Cover or Icon</Title>



<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button>

{#if !curtainDrawn }
  
{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "0d4052f9-522e-4c1f-b915-2ee4d54c7bdb",
  "created_time": "2021-11-03T07:58:00.000Z",
  "last_edited_time": "2021-11-03T08:04:00.000Z",
  "cover": null,
  "icon": null,
  "parent": {
    "type": "database_id",
    "database_id": "c317033a-f18a-479f-bbfb-7072cc7f53da"
  },
  "archived": false,
  "properties": {
    "Slug": {
      "id": "Yj%3E%3C",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "no-cover",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "no-cover",
          "href": null
        }
      ]
    },
    "Status": {
      "id": "Yyjg",
      "type": "select",
      "select": {
        "id": "2d2d6d67-3785-4f26-97e0-02ec594cb931",
        "name": "Publish me!",
        "color": "pink"
      }
    },
    "URL": {
      "id": "lKGS",
      "type": "url",
      "url": null
    },
    "Title": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "No Cover or Icon",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "No Cover or Icon",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/No-Cover-or-Icon-0d4052f9522e4c1fb9152ee4d54c7bdb",
  "blocks": []
}, null, 2)}</pre>
{/if}
  