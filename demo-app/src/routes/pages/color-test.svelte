<svelte:head>
  <title>Color Test</title>
</svelte:head>
<script>
import Title from "$lib/notion2svelte/Title.svelte"
import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
import InlineColor from "$lib/notion2svelte/InlineColor.svelte"


let curtainDrawn = false
</script>

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by notion2svelte 1.0.0 𒅒</button>
<Title>Color Test</Title>

{#if !curtainDrawn }
  <h1><InlineColor value='red'>C</InlineColor><InlineColor value='orange'>o</InlineColor><InlineColor value='yellow'>l</InlineColor><InlineColor value='green'>o</InlineColor><InlineColor value='blue'>r</InlineColor><InlineColor value='default'>&thinsp;</InlineColor><InlineColor value='purple'>T</InlineColor><InlineColor value='pink'>e</InlineColor><InlineColor value='brown'>s</InlineColor><InlineColor value='gray'>t&thinsp;</InlineColor><InlineColor value='default'>1</InlineColor></h1>
<br style="display:none;"/>
<h1><InlineColor value='red_background'>C</InlineColor><InlineColor value='orange_background'>o</InlineColor><InlineColor value='yellow_background'>l</InlineColor><InlineColor value='green_background'>o</InlineColor><InlineColor value='blue_background'>r</InlineColor><InlineColor value='purple_background'>&thinsp;T</InlineColor><InlineColor value='pink_background'>e</InlineColor><InlineColor value='brown_background'>s</InlineColor><InlineColor value='gray_background'>t</InlineColor><InlineColor value='default'>&thinsp;2</InlineColor></h1>
<br style="display:none;"/>
<h1><InlineColor value='default'>Color Test 3</InlineColor></h1>
<br style="display:none;"/>
<h1><InlineColor value='default'>Color Test 4</InlineColor></h1>
<br style="display:none;"/>
<div></div>
<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "b2532bf4-53c1-4ca0-a49c-1e06049eb8b5",
    "created_time": "2021-09-18T21:14:00.000Z",
    "last_edited_time": "2021-09-19T05:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "C",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red"
          },
          "plain_text": "C",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "blue"
          },
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " ",
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
          "plain_text": " ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "T",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "T",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "e",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "pink"
          },
          "plain_text": "e",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "brown"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "t ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "gray"
          },
          "plain_text": "t ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "1",
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
          "plain_text": "1",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "2b7ddc9a-bc27-4513-a26f-7d9d370b22ee",
    "created_time": "2021-09-18T21:12:00.000Z",
    "last_edited_time": "2021-09-18T22:46:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "C",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "C",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange_background"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow_background"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green_background"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "blue_background"
          },
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " T",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple_background"
          },
          "plain_text": " T",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "e",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "pink_background"
          },
          "plain_text": "e",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "brown_background"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "t",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "gray_background"
          },
          "plain_text": "t",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " 2",
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
          "plain_text": " 2",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "020acc0e-d3b3-48b6-b9c7-7684e070874a",
    "created_time": "2021-09-18T21:24:00.000Z",
    "last_edited_time": "2021-09-19T05:22:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Color Test 3",
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
          "plain_text": "Color Test 3",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "939426f0-01b8-4357-b02f-6a4cc533fbf1",
    "created_time": "2021-09-19T05:21:00.000Z",
    "last_edited_time": "2021-09-19T05:21:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Color Test 4",
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
          "plain_text": "Color Test 4",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "37aa5809-c316-4a9a-9a60-ad066b388d34",
    "created_time": "2021-09-19T05:21:00.000Z",
    "last_edited_time": "2021-09-19T05:21:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "cd0fd95d-9c90-4231-9368-379d2e911479",
  "created_time": "2021-09-18T21:11:00.000Z",
  "last_edited_time": "2021-09-21T22:59:00.000Z",
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
            "content": "color-test",
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
          "plain_text": "color-test",
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
        "color": "orange"
      }
    },
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "C",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red"
          },
          "plain_text": "C",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "blue"
          },
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " ",
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
          "plain_text": " ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "T",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "T",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "e",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "pink"
          },
          "plain_text": "e",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "brown"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "t",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "gray"
          },
          "plain_text": "t",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Color-Test-cd0fd95d9c9042319368379d2e911479"
}, null, 2)}</pre>
{/if}
  