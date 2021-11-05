<svelte:head>
  <title>Links and Sub-Pages</title>
</svelte:head><script>
  import Cover from "$lib/notion2svelte/Cover.svelte"
  import Title from "$lib/notion2svelte/Title.svelte"
  import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
  import Callout from "$lib/notion2svelte/Callout.svelte"
  import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
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
  
  <Title>Links and Sub-Pages</Title>



<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button>

{#if !curtainDrawn }
  <h1>What happens when we encounter a sub-page?</h1>

<br style="display:none;"/>
<p style="background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ child_page <span style="color:gray; border: 2px solid pink; display: inline; padding: 3px; border-radius: 3px;"></span>&nbsp;has no content</p>
<br style="display:none;"/>
<p style="background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ child_page <span style="color:gray; border: 2px solid pink; display: inline; padding: 3px; border-radius: 3px;">Title Only</span>&nbsp;has no content</p>
<br style="display:none;"/>
<ChildPage title="Hellooooo 🤓"><div>
I'm the sub-page
</div>
<h1>I'm all about the lorem</h1>
<div>
Lorem ipsum lorem ipsum
</div>
<div>
I'm all about the lorem
</div>
<div>
Lorem ipsum lorem ipsum
</div>
<div>
dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</div>
</ChildPage>
<br style="display:none;"/>
<Toggle>What if the sub-page is in a Toggle, like this one?
<span slot="children"><p style="background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ child_page <span style="color:gray; border: 2px solid pink; display: inline; padding: 3px; border-radius: 3px;">I'm anudder sub</span>&nbsp;has no content</p></span></Toggle>
<br style="display:none;"/>
<div>
I'm the first regular paragraph.
</div>

<br style="display:none;"/>
<div>
Here's a link to&thinsp;<a href="/6bca4379f36245a690cfd35beebba87a">a sibling page</a>&thinsp;in the&thinsp;notion2svelte db&thinsp;(← This should&thinsp;<em>also</em>&thinsp;become an internal link).
</div>

<br style="display:none;"/>
<div>
Here's a link to&thinsp;<a href="/36979df3f7324d74b701094e22703b35">a page outside the parent database</a>.
</div>

<br style="display:none;"/>
<div>

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
    "id": "1d9e6ff6-942a-4a88-afd1-a58ef7c5d1eb",
    "created_time": "2021-11-05T03:10:00.000Z",
    "last_edited_time": "2021-11-05T03:10:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": ""
    }
  },
  {
    "object": "block",
    "id": "759223ac-3dd8-42fe-9233-da70b5899182",
    "created_time": "2021-11-05T03:10:00.000Z",
    "last_edited_time": "2021-11-05T03:10:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": "Title Only"
    }
  },
  {
    "object": "block",
    "id": "6c6f664f-14f0-4e40-ad6a-414cf2a326a7",
    "created_time": "2021-11-03T07:56:00.000Z",
    "last_edited_time": "2021-11-05T00:44:00.000Z",
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
      },
      {
        "object": "block",
        "id": "bc68150a-b214-4bf7-a420-9fe6601440cc",
        "created_time": "2021-11-05T00:43:00.000Z",
        "last_edited_time": "2021-11-05T00:43:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "heading_1",
        "heading_1": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "I'm all about the lorem",
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
              "plain_text": "I'm all about the lorem",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "1e2e16d5-3a6e-4cdf-9de0-49920144a988",
        "created_time": "2021-11-05T00:44:00.000Z",
        "last_edited_time": "2021-11-05T00:44:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "Lorem ipsum lorem ipsum",
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
              "plain_text": "Lorem ipsum lorem ipsum",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "9563bced-9e1b-400e-b375-36f85fb75d9a",
        "created_time": "2021-11-05T00:44:00.000Z",
        "last_edited_time": "2021-11-05T00:44:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "I'm all about the lorem",
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
              "plain_text": "I'm all about the lorem",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "fb32a077-94a6-494d-a78a-138d1a195008",
        "created_time": "2021-11-05T00:44:00.000Z",
        "last_edited_time": "2021-11-05T00:44:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "Lorem ipsum lorem ipsum",
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
              "plain_text": "Lorem ipsum lorem ipsum",
              "href": null
            }
          ]
        }
      },
      {
        "object": "block",
        "id": "fa67b18f-406f-4a47-ba32-95473aba6fc3",
        "created_time": "2021-11-05T00:44:00.000Z",
        "last_edited_time": "2021-11-05T00:44:00.000Z",
        "has_children": false,
        "archived": false,
        "type": "paragraph",
        "paragraph": {
          "text": [
            {
              "type": "text",
              "text": {
                "content": "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
              "plain_text": "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
  },
  {
    "object": "block",
    "id": "95c47568-bc3a-48ff-ad72-d83f852d11a8",
    "created_time": "2021-11-05T00:32:00.000Z",
    "last_edited_time": "2021-11-05T00:36:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Here's a link to ",
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
          "plain_text": "Here's a link to ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "a sibling page",
            "link": {
              "url": "/6bca4379f36245a690cfd35beebba87a"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "a sibling page",
          "href": "/6bca4379f36245a690cfd35beebba87a"
        },
        {
          "type": "text",
          "text": {
            "content": " in the ",
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
          "plain_text": " in the ",
          "href": null
        },
        {
          "type": "mention",
          "mention": {
            "type": "database",
            "database": {
              "id": "c317033a-f18a-479f-bbfb-7072cc7f53da"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "notion2svelte db",
          "href": "https://www.notion.so/c317033af18a479fbbfb7072cc7f53da"
        },
        {
          "type": "text",
          "text": {
            "content": " (← This should ",
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
          "plain_text": " (← This should ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "also",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "also",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " become an internal link).",
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
          "plain_text": " become an internal link).",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "4d55b0eb-56d9-43f2-b093-dc6e62972f59",
    "created_time": "2021-11-05T00:36:00.000Z",
    "last_edited_time": "2021-11-05T00:37:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Here's a link to ",
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
          "plain_text": "Here's a link to ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "a page outside the parent database",
            "link": {
              "url": "/36979df3f7324d74b701094e22703b35"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "a page outside the parent database",
          "href": "/36979df3f7324d74b701094e22703b35"
        },
        {
          "type": "text",
          "text": {
            "content": ".",
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
          "plain_text": ".",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "5d68b742-ca91-4c15-a6b4-e888e162c455",
    "created_time": "2021-11-05T00:35:00.000Z",
    "last_edited_time": "2021-11-05T00:35:00.000Z",
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
  "id": "00ab16ed-9990-405b-ad93-af936fbebdce",
  "created_time": "2021-11-03T07:55:00.000Z",
  "last_edited_time": "2021-11-05T03:10:00.000Z",
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
            "content": "links-and-sub_pages",
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
          "plain_text": "links-and-sub_pages",
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
            "content": "Links and Sub-Pages",
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
          "plain_text": "Links and Sub-Pages",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Links-and-Sub-Pages-00ab16ed9990405bad93af936fbebdce",
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
      "id": "1d9e6ff6-942a-4a88-afd1-a58ef7c5d1eb",
      "created_time": "2021-11-05T03:10:00.000Z",
      "last_edited_time": "2021-11-05T03:10:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "child_page",
      "child_page": {
        "title": ""
      }
    },
    {
      "object": "block",
      "id": "759223ac-3dd8-42fe-9233-da70b5899182",
      "created_time": "2021-11-05T03:10:00.000Z",
      "last_edited_time": "2021-11-05T03:10:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "child_page",
      "child_page": {
        "title": "Title Only"
      }
    },
    {
      "object": "block",
      "id": "6c6f664f-14f0-4e40-ad6a-414cf2a326a7",
      "created_time": "2021-11-03T07:56:00.000Z",
      "last_edited_time": "2021-11-05T00:44:00.000Z",
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
        },
        {
          "object": "block",
          "id": "bc68150a-b214-4bf7-a420-9fe6601440cc",
          "created_time": "2021-11-05T00:43:00.000Z",
          "last_edited_time": "2021-11-05T00:43:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "heading_1",
          "heading_1": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "I'm all about the lorem",
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
                "plain_text": "I'm all about the lorem",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "1e2e16d5-3a6e-4cdf-9de0-49920144a988",
          "created_time": "2021-11-05T00:44:00.000Z",
          "last_edited_time": "2021-11-05T00:44:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Lorem ipsum lorem ipsum",
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
                "plain_text": "Lorem ipsum lorem ipsum",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "9563bced-9e1b-400e-b375-36f85fb75d9a",
          "created_time": "2021-11-05T00:44:00.000Z",
          "last_edited_time": "2021-11-05T00:44:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "I'm all about the lorem",
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
                "plain_text": "I'm all about the lorem",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "fb32a077-94a6-494d-a78a-138d1a195008",
          "created_time": "2021-11-05T00:44:00.000Z",
          "last_edited_time": "2021-11-05T00:44:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Lorem ipsum lorem ipsum",
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
                "plain_text": "Lorem ipsum lorem ipsum",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "fa67b18f-406f-4a47-ba32-95473aba6fc3",
          "created_time": "2021-11-05T00:44:00.000Z",
          "last_edited_time": "2021-11-05T00:44:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
                "plain_text": "dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
    },
    {
      "object": "block",
      "id": "95c47568-bc3a-48ff-ad72-d83f852d11a8",
      "created_time": "2021-11-05T00:32:00.000Z",
      "last_edited_time": "2021-11-05T00:36:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Here's a link to ",
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
            "plain_text": "Here's a link to ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "a sibling page",
              "link": {
                "url": "/6bca4379f36245a690cfd35beebba87a"
              }
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "a sibling page",
            "href": "/6bca4379f36245a690cfd35beebba87a"
          },
          {
            "type": "text",
            "text": {
              "content": " in the ",
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
            "plain_text": " in the ",
            "href": null
          },
          {
            "type": "mention",
            "mention": {
              "type": "database",
              "database": {
                "id": "c317033a-f18a-479f-bbfb-7072cc7f53da"
              }
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte db",
            "href": "https://www.notion.so/c317033af18a479fbbfb7072cc7f53da"
          },
          {
            "type": "text",
            "text": {
              "content": " (← This should ",
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
            "plain_text": " (← This should ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "also",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "also",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " become an internal link).",
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
            "plain_text": " become an internal link).",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "4d55b0eb-56d9-43f2-b093-dc6e62972f59",
      "created_time": "2021-11-05T00:36:00.000Z",
      "last_edited_time": "2021-11-05T00:37:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Here's a link to ",
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
            "plain_text": "Here's a link to ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "a page outside the parent database",
              "link": {
                "url": "/36979df3f7324d74b701094e22703b35"
              }
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "a page outside the parent database",
            "href": "/36979df3f7324d74b701094e22703b35"
          },
          {
            "type": "text",
            "text": {
              "content": ".",
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
            "plain_text": ".",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "5d68b742-ca91-4c15-a6b4-e888e162c455",
      "created_time": "2021-11-05T00:35:00.000Z",
      "last_edited_time": "2021-11-05T00:35:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": []
      }
    }
  ]
}, null, 2)}</pre>
{/if}
  