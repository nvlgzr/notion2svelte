<svelte:head>
  <title>Cover with Emoji Icon</title>
</svelte:head><script>
  import PageCover from "$lib/notion2svelte/PageCover.svelte"
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
  <PageCover coverURL={"https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"} iconEmoji={"🦦"} />
  <Title>Cover with Emoji Icon</Title>



<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button>

{#if !curtainDrawn }
  <h1>Sea Otters!</h1>

<br style="display:none;"/>
<Divider />

<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "93a1b2f8-30b8-475b-b72a-b412b6580341",
    "created_time": "2021-11-01T20:40:00.000Z",
    "last_edited_time": "2021-11-01T20:40:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Sea Otters!",
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
          "plain_text": "Sea Otters!",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "48ef9c4a-966b-4237-b176-7fd509673cd0",
    "created_time": "2021-11-01T20:40:00.000Z",
    "last_edited_time": "2021-11-01T20:40:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "ddc1044b-b946-4de8-89f5-ec771d11276e",
  "created_time": "2021-11-01T20:39:00.000Z",
  "last_edited_time": "2021-11-01T20:40:00.000Z",
  "cover": {
    "type": "external",
    "external": {
      "url": "https://images.unsplash.com/photo-1597382389726-fbe8c7a6905e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
    }
  },
  "icon": {
    "type": "emoji",
    "emoji": "🦦"
  },
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
            "content": "cover",
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
          "plain_text": "cover",
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
            "content": "Cover with Emoji Icon",
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
          "plain_text": "Cover with Emoji Icon",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Cover-with-Emoji-Icon-ddc1044bb9464de889f5ec771d11276e",
  "blocks": [
    {
      "object": "block",
      "id": "93a1b2f8-30b8-475b-b72a-b412b6580341",
      "created_time": "2021-11-01T20:40:00.000Z",
      "last_edited_time": "2021-11-01T20:40:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "heading_1",
      "heading_1": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Sea Otters!",
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
            "plain_text": "Sea Otters!",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "48ef9c4a-966b-4237-b176-7fd509673cd0",
      "created_time": "2021-11-01T20:40:00.000Z",
      "last_edited_time": "2021-11-01T20:40:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "divider",
      "divider": {}
    }
  ]
}, null, 2)}</pre>
{/if}
  