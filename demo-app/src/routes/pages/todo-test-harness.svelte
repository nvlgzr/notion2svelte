<svelte:head>
  <title>Set up a simple test harness</title>
</svelte:head>
<script>
import Title from "$lib/notion2svelte/Title.svelte"
import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
import TodoItem from '$lib/notion2svelte/TodoItem.svelte';


let curtainDrawn = false
</script>

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by notion2svelte 1.0.0 𒅒</button>
<Title>Set up a simple test harness</Title>

{#if !curtainDrawn }
  <TodoItem checked={true}>"<InlineColor value='default'>Add a demo SvelteKit app that uses my publicly-readable&thinsp;</InlineColor><InlineColor value='default'><InlineCode>notion2svelte</InlineCode></InlineColor><InlineColor value='default'>&thinsp;database</InlineColor><InlineColor value='default'>&thinsp;</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>A) Add basic implementations for&thinsp;</InlineColor><InlineColor value='default'><InlineCode>notion2svelte</InlineCode></InlineColor><InlineColor value='default'>'s custom components (Image, TodoItem, etc.)</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>B) Use demo .env to aim the output to the demo app</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>Create test pages for these already-supported features: colors and checklists (this file which, you'll note, doesn't yet support child blocks. That's the next feature.</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>Run&thinsp;</InlineColor><InlineColor value='default'><InlineCode>notion2svelte</InlineCode></InlineColor>"</TodoItem>
<br style="display:none;"/>
<p>(<b>paragraph</b> has children)</p>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>Commit the resulting&thinsp;</InlineColor><InlineColor value='default'><InlineCode>.svelte</InlineCode></InlineColor><InlineColor value='default'>&thinsp;files</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'>Introduce some change to how blocks are processed that subtly changes the output: the undesired changes should show up as soon as you go to close out your next&thinsp;</InlineColor><InlineColor value='default'><InlineCode>git commit</InlineCode></InlineColor><InlineColor value='default'>! (Note that these are currently harder to spot than they should be because the Amazon-hosted images Notion hosts are constantly getting their URLs rearranged. I'm not sure how best to solve this.</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'>Use the above approach to safely implement the next feature (child blocks) without fear of breaking existing features</InlineColor>"</TodoItem>
<br style="display:none;"/>
<p></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Next:</InlineColor></p>
<br style="display:none;"/>
<p>(<b>to_do</b> has children)</p>
<br style="display:none;"/>
<p></p>
<br style="display:none;"/>
<p></p>
<br style="display:none;"/>
<h3><InlineColor value='default'>De-prioritized:</InlineColor></h3>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'>Create an Unsupported Blocks page with nothing but unsupported blocks so that I can see at a glance when Notion has added new support</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'><s>Search for that test suite that I read about recently that sounded faster and simpler than Mocha</s></InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'><s>Add unit tests</s></InlineColor>"</TodoItem>
<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "4a5653d5-bbc6-4fca-b038-f35a47122644",
    "created_time": "2021-09-19T06:42:00.000Z",
    "last_edited_time": "2021-09-20T09:10:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Add a demo SvelteKit app that uses my publicly-readable ",
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
          "plain_text": "Add a demo SvelteKit app that uses my publicly-readable ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "notion2svelte",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "notion2svelte",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " database",
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
          "plain_text": " database",
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
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "f767fcd2-b676-43d4-9fcc-713f757b971e",
    "created_time": "2021-09-19T06:48:00.000Z",
    "last_edited_time": "2021-09-20T09:33:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "A) Add basic implementations for ",
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
          "plain_text": "A) Add basic implementations for ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "notion2svelte",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "notion2svelte",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "'s custom components (Image, TodoItem, etc.)",
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
          "plain_text": "'s custom components (Image, TodoItem, etc.)",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "577edf4e-fd0e-4fd2-b0df-2ae2cea4ea3a",
    "created_time": "2021-09-19T10:54:00.000Z",
    "last_edited_time": "2021-09-20T09:54:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "B) Use demo .env to aim the output to the demo app",
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
          "plain_text": "B) Use demo .env to aim the output to the demo app",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "c0abcd7d-0fec-4e83-89ad-390d0cafc01a",
    "created_time": "2021-09-19T06:47:00.000Z",
    "last_edited_time": "2021-09-20T09:59:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Create test pages for these already-supported features: colors and checklists (this file which, you'll note, doesn't yet support child blocks. That's the next feature.",
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
          "plain_text": "Create test pages for these already-supported features: colors and checklists (this file which, you'll note, doesn't yet support child blocks. That's the next feature.",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "e268ea84-828d-4637-a61b-c3eb35828e10",
    "created_time": "2021-09-20T09:35:00.000Z",
    "last_edited_time": "2021-09-20T10:00:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Run ",
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
          "plain_text": "Run ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "notion2svelte",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "notion2svelte",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "525e98de-8a44-4322-866f-800c8fd1dcc6",
    "created_time": "2021-09-20T09:57:00.000Z",
    "last_edited_time": "2021-09-20T10:23:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Compare: ",
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
          "plain_text": "Compare: ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "Notion checklists test",
            "link": {
              "url": "/816f31ee96514a398960841d33a9f2d4"
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
          "plain_text": "Notion checklists test",
          "href": "/816f31ee96514a398960841d33a9f2d4"
        },
        {
          "type": "text",
          "text": {
            "content": " with the ",
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
          "plain_text": " with the ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "notion2svelte output",
            "link": {
              "url": "http://localhost:3000/pages/todo-test-harness"
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
          "plain_text": "notion2svelte output",
          "href": "http://localhost:3000/pages/todo-test-harness"
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "5f0b13a3-f22f-4a91-8216-b892e4f93001",
    "created_time": "2021-09-20T10:00:00.000Z",
    "last_edited_time": "2021-09-20T10:44:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Commit the resulting ",
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
          "plain_text": "Commit the resulting ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ".svelte",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": ".svelte",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " files",
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
          "plain_text": " files",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "e8eb4b38-66b0-45c5-b0c0-60d2e30cc466",
    "created_time": "2021-09-20T10:19:00.000Z",
    "last_edited_time": "2021-09-20T10:45:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Introduce some change to how blocks are processed that subtly changes the output: the undesired changes should show up as soon as you go to close out your next ",
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
          "plain_text": "Introduce some change to how blocks are processed that subtly changes the output: the undesired changes should show up as soon as you go to close out your next ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "git commit",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": true,
            "color": "default"
          },
          "plain_text": "git commit",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "! (Note that these are currently harder to spot than they should be because the Amazon-hosted images Notion hosts are constantly getting their URLs rearranged. I'm not sure how best to solve this.",
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
          "plain_text": "! (Note that these are currently harder to spot than they should be because the Amazon-hosted images Notion hosts are constantly getting their URLs rearranged. I'm not sure how best to solve this.",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "f85e5a8d-c0c8-439b-8d9b-2152675428e8",
    "created_time": "2021-09-20T10:17:00.000Z",
    "last_edited_time": "2021-09-20T10:18:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Use the above approach to safely implement the next feature (child blocks) without fear of breaking existing features",
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
          "plain_text": "Use the above approach to safely implement the next feature (child blocks) without fear of breaking existing features",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "0e0aef84-76d6-4db1-840e-f62d29bb1390",
    "created_time": "2021-09-20T10:18:00.000Z",
    "last_edited_time": "2021-09-20T10:18:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "29c6a765-1263-4adc-a19c-668b696588c1",
    "created_time": "2021-09-20T10:18:00.000Z",
    "last_edited_time": "2021-09-20T10:18:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Next:",
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
          "plain_text": "Next:",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e68022a3-3db5-4b04-87e8-181f9604998e",
    "created_time": "2021-09-20T09:46:00.000Z",
    "last_edited_time": "2021-09-20T10:18:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Child blocks",
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
          "plain_text": "Child blocks",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "a369c5ac-99f2-4528-afb6-4d32fc72baa3",
    "created_time": "2021-09-19T06:55:00.000Z",
    "last_edited_time": "2021-09-20T09:48:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "8591f271-6b50-41b8-a05d-e8b99e8cb95e",
    "created_time": "2021-09-20T09:30:00.000Z",
    "last_edited_time": "2021-09-20T09:30:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "d36c3796-6f68-4efb-8960-6b9ee76e41d9",
    "created_time": "2021-09-19T10:54:00.000Z",
    "last_edited_time": "2021-09-20T09:30:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "e0ec554c-3057-4953-8979-0de728b078de",
    "created_time": "2021-09-20T09:30:00.000Z",
    "last_edited_time": "2021-09-20T09:32:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_3",
    "heading_3": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "De-prioritized:",
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
          "plain_text": "De-prioritized:",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "c97cc7f4-a373-43b1-9f2a-b2d438f2ad38",
    "created_time": "2021-09-20T09:50:00.000Z",
    "last_edited_time": "2021-09-20T09:51:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Create an Unsupported Blocks page with nothing but unsupported blocks so that I can see at a glance when Notion has added new support",
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
          "plain_text": "Create an Unsupported Blocks page with nothing but unsupported blocks so that I can see at a glance when Notion has added new support",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "6e9b366e-b427-419c-ada5-4062b037fb94",
    "created_time": "2021-09-20T09:30:00.000Z",
    "last_edited_time": "2021-09-20T09:33:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Search for that test suite that I read about recently that sounded faster and simpler than Mocha",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": true,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Search for that test suite that I read about recently that sounded faster and simpler than Mocha",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "aad59cf9-fcf1-4979-be58-6871273777c5",
    "created_time": "2021-09-20T09:31:00.000Z",
    "last_edited_time": "2021-09-20T09:33:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Add unit tests",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": true,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Add unit tests",
          "href": null
        }
      ],
      "checked": false
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "816f31ee-9651-4a39-8960-841d33a9f2d4",
  "created_time": "2021-09-19T06:41:00.000Z",
  "last_edited_time": "2021-09-20T10:45:00.000Z",
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
            "content": "todo-test-harness",
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
          "plain_text": "todo-test-harness",
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
            "content": "Set up a simple test harness",
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
          "plain_text": "Set up a simple test harness",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Set-up-a-simple-test-harness-816f31ee96514a398960841d33a9f2d4"
}, null, 2)}</pre>
{/if}
    