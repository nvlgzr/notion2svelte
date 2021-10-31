<svelte:head>
  <title>Soft Carriage Returns</title>
</svelte:head><script>
  import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
  import Image from "$lib/notion2svelte/Image.svelte"
  import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
  import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
  import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
  import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
  import Title from "$lib/notion2svelte/Title.svelte"
  import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
  import Toggle from "$lib/notion2svelte/Toggle.svelte"

  let curtainDrawn = false
</script>
  <Title>Soft Carriage Returns</Title>



  <button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button>

{#if !curtainDrawn }
  <div>
This is the first line
<br />
and this is the second
</div>

<br style="display:none;"/>
<div>
This block also has
<br />
2 lines
</div>

<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "915a2199-df9c-46e6-865a-35e130a59ed8",
    "created_time": "2021-10-31T02:28:00.000Z",
    "last_edited_time": "2021-10-31T02:28:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is the first line\nand this is the second",
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
          "plain_text": "This is the first line\nand this is the second",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "ff5fa045-ed74-4a54-82bb-42d5c25635af",
    "created_time": "2021-10-31T02:28:00.000Z",
    "last_edited_time": "2021-10-31T02:28:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This block also has\n2 lines",
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
          "plain_text": "This block also has\n2 lines",
          "href": null
        }
      ]
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "454e8b89-4aa5-4533-b494-8853e8fb4df1",
  "created_time": "2021-10-31T02:24:00.000Z",
  "last_edited_time": "2021-10-31T03:12:00.000Z",
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
            "content": "soft-carriage-returns",
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
          "plain_text": "soft-carriage-returns",
          "href": null
        }
      ]
    },
    "Status": {
      "id": "Yyjg",
      "type": "select",
      "select": {
        "id": "3",
        "name": "Completed",
        "color": "green"
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
            "content": "Soft Carriage Returns",
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
          "plain_text": "Soft Carriage Returns",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Soft-Carriage-Returns-454e8b894aa54533b4948853e8fb4df1",
  "blocks": [
    {
      "object": "block",
      "id": "915a2199-df9c-46e6-865a-35e130a59ed8",
      "created_time": "2021-10-31T02:28:00.000Z",
      "last_edited_time": "2021-10-31T02:28:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This is the first line\nand this is the second",
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
            "plain_text": "This is the first line\nand this is the second",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "ff5fa045-ed74-4a54-82bb-42d5c25635af",
      "created_time": "2021-10-31T02:28:00.000Z",
      "last_edited_time": "2021-10-31T02:28:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This block also has\n2 lines",
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
            "plain_text": "This block also has\n2 lines",
            "href": null
          }
        ]
      }
    }
  ]
}, null, 2)}</pre>
{/if}
  