<svelte:head>
  <title>Sub-page Test</title>
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
  
  <Title>Sub-page Test</Title>



<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button>

{#if !curtainDrawn }
  <h1>What happens when we encounter a sub-page?</h1>

<br style="display:none;"/>
child_page<IndentGroup>
  <div>
I'm the sub-page
</div>

</IndentGroup>

<br style="display:none;"/>
<Toggle>What if the sub-page is in a Toggle, like this one?
<span slot="children">child_page</span></Toggle>
<br style="display:none;"/>
<div>
I'm the first regular paragraph.
</div>

<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "5832a9bb-0d07-440a-828b-ef4c38fc2616",
    "created_time": "2021-11-03T07:56:00.000Z",
    "last_edited_time": "2021-11-03T07:56:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "What happens when we encounter a sub-page?",
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
          "plain_text": "What happens when we encounter a sub-page?",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "6c6f664f-14f0-4e40-ad6a-414cf2a326a7",
    "created_time": "2021-11-03T07:56:00.000Z",
    "last_edited_time": "2021-11-03T07:56:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": "Hellooooo 🤓"
    },
    "blocks": [
      {
        "object": "block",
        "id": "db275534-b87b-477c-b85f-545020fb197b",
        "created_time": "2021-11-03T07:56:00.000Z",
        "last_edited_time": "2021-11-03T07:56:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "I'm the sub-page",
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
              "plain_text": "I'm the sub-page",
              "href": null
            }
          ]
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "f79e3cb5-4e10-4e8d-a20a-94f04ca76c42",
    "created_time": "2021-11-03T08:08:00.000Z",
    "last_edited_time": "2021-11-03T08:09:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "toggle",
    "toggle": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "What if the sub-page is in a Toggle, like this one?",
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
          "plain_text": "What if the sub-page is in a Toggle, like this one?",
          "href": null
        }
      ]
    },
    "blocks": [
      {
        "object": "block",
        "id": "7ea1ff6d-19d1-45de-bd2f-8a9dd16b159d",
        "created_time": "2021-11-03T08:09:00.000Z",
        "last_edited_time": "2021-11-03T08:09:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "child_page",
        "child_page": {
          "title": "I'm anudder sub"
        }
      }
    ]
  },
  {
    "object": "block",
    "id": "efd7b986-1220-4d99-a4b5-b4cee447ce5f",
    "created_time": "2021-11-03T08:09:00.000Z",
    "last_edited_time": "2021-11-03T08:09:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "I'm the first regular paragraph.",
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
          "plain_text": "I'm the first regular paragraph.",
          "href": null
        }
      ]
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "00ab16ed-9990-405b-ad93-af936fbebdce",
  "created_time": "2021-11-03T07:55:00.000Z",
  "last_edited_time": "2021-11-03T08:09:00.000Z",
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
            "content": "sub-pages",
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
          "plain_text": "sub-pages",
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
            "content": "Sub-page Test",
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
          "plain_text": "Sub-page Test",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Sub-page-Test-00ab16ed9990405bad93af936fbebdce",
  "blocks": [
    {
      "object": "block",
      "id": "5832a9bb-0d07-440a-828b-ef4c38fc2616",
      "created_time": "2021-11-03T07:56:00.000Z",
      "last_edited_time": "2021-11-03T07:56:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "heading_1",
      "heading_1": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "What happens when we encounter a sub-page?",
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
            "plain_text": "What happens when we encounter a sub-page?",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "6c6f664f-14f0-4e40-ad6a-414cf2a326a7",
      "created_time": "2021-11-03T07:56:00.000Z",
      "last_edited_time": "2021-11-03T07:56:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "child_page",
      "child_page": {
        "title": "Hellooooo 🤓"
      },
      "blocks": [
        {
          "object": "block",
          "id": "db275534-b87b-477c-b85f-545020fb197b",
          "created_time": "2021-11-03T07:56:00.000Z",
          "last_edited_time": "2021-11-03T07:56:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "I'm the sub-page",
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
                "plain_text": "I'm the sub-page",
                "href": null
              }
            ]
          }
        }
      ]
    },
    {
      "object": "block",
      "id": "f79e3cb5-4e10-4e8d-a20a-94f04ca76c42",
      "created_time": "2021-11-03T08:08:00.000Z",
      "last_edited_time": "2021-11-03T08:09:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "toggle",
      "toggle": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "What if the sub-page is in a Toggle, like this one?",
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
            "plain_text": "What if the sub-page is in a Toggle, like this one?",
            "href": null
          }
        ]
      },
      "blocks": [
        {
          "object": "block",
          "id": "7ea1ff6d-19d1-45de-bd2f-8a9dd16b159d",
          "created_time": "2021-11-03T08:09:00.000Z",
          "last_edited_time": "2021-11-03T08:09:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "child_page",
          "child_page": {
            "title": "I'm anudder sub"
          }
        }
      ]
    },
    {
      "object": "block",
      "id": "efd7b986-1220-4d99-a4b5-b4cee447ce5f",
      "created_time": "2021-11-03T08:09:00.000Z",
      "last_edited_time": "2021-11-03T08:09:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "I'm the first regular paragraph.",
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
            "plain_text": "I'm the first regular paragraph.",
            "href": null
          }
        ]
      }
    }
  ]
}, null, 2)}</pre>
{/if}
  