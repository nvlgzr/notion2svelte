const json = {
  "object": "page",
  "id": "3c584e91-1b5c-4378-b120-e3cf62797212",
  "created_time": "2022-02-17T22:03:00.000Z",
  "last_edited_time": "2022-12-08T22:59:00.000Z",
  "created_by": {
    "object": "user",
    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
  },
  "last_edited_by": {
    "object": "user",
    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
  },
  "cover": null,
  "icon": {
    "type": "emoji",
    "emoji": "📄"
  },
  "parent": {
    "type": "database_id",
    "database_id": "1842fdf6-5e49-4c74-a388-cab1b3a6725e"
  },
  "archived": false,
  "properties": {
    "Group": {
      "id": "D%5E%3CB",
      "type": "select",
      "select": {
        "id": "ZnU<",
        "name": "high-level-discussion",
        "color": "default"
      }
    },
    "Slug": {
      "id": "M%40TW",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "/high-level-discussion/dot-env"
      }
    },
    "Public URL": {
      "id": "RlC%3B",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "https://notion2svelte.vercel.app/high-level-discussion/dot-env"
      }
    },
    "SomeDateProp": {
      "id": "UMpq",
      "type": "date",
      "date": null
    },
    "someNumberProp": {
      "id": "%60MUd",
      "type": "number",
      "number": null
    },
    "Status": {
      "id": "ava%3E",
      "type": "select",
      "select": {
        "id": "f4c2d807-fdf4-476e-b894-ec247f211f2b",
        "name": "Publishable",
        "color": "purple"
      }
    },
    "someTextProp": {
      "id": "kbva",
      "type": "rich_text",
      "rich_text": []
    },
    "Page": {
      "id": "vbwr",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "dot-env",
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
          "plain_text": "dot-env",
          "href": null
        }
      ]
    },
    "Local URL": {
      "id": "xe_H",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "http://localhost:5173/high-level-discussion/dot-env"
      }
    },
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "Configuring your .env",
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
          "plain_text": "Configuring your .env",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Configuring-your-env-3c584e911b5c4378b120e3cf62797212",
  "blocks": [
    {
      "object": "block",
      "id": "0757ffcf-4e93-42fb-bab2-cf278f97e393",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-12-08T22:56:00.000Z",
      "last_edited_time": "2022-12-08T22:58:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "notion2svelte",
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
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " expects to find a ",
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
            "plain_text": " expects to find a ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ".env",
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
            "plain_text": ".env",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " file in the directory where it’s run (typically the root of your SvelteKit directory). At minimum, this file — ",
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
            "plain_text": " file in the directory where it’s run (typically the root of your SvelteKit directory). At minimum, this file — ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "which should ",
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
            "plain_text": "which should ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "not",
              "link": null
            },
            "annotations": {
              "bold": true,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "not",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " be checked into source control!",
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
            "plain_text": " be checked into source control!",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " — must contain your Notion API key.",
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
            "plain_text": " — must contain your Notion API key.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "80becdd7-89a4-4301-a20f-828a3df3945c",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:08:00.000Z",
      "last_edited_time": "2022-12-08T22:56:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "heading_1",
      "heading_1": {
        "is_toggleable": false,
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Required key",
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
            "plain_text": "Required key",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "d6c1c2d1-4154-4094-b51e-486b973e4615",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:12:00.000Z",
      "last_edited_time": "2022-02-17T22:12:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "caption": [],
        "language": "typescript",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "NOTION_API_KEY=secret_QoIn8edvksjn…",
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
            "plain_text": "NOTION_API_KEY=secret_QoIn8edvksjn…",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "f25daf26-976e-4775-88e5-ba8db824bf47",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:10:00.000Z",
      "last_edited_time": "2022-02-18T07:45:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "In order to fetch data from your Notion account, ",
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
            "plain_text": "In order to fetch data from your Notion account, ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " needs a “secret,” which you can generate by following ",
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
            "plain_text": " needs a “secret,” which you can generate by following ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "these instructions",
              "link": {
                "url": "https://developers.notion.com/docs/getting-started"
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
            "plain_text": "these instructions",
            "href": "https://developers.notion.com/docs/getting-started"
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
      "id": "d4db75fb-3ab2-461a-b777-534cc6ec7f0e",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:14:00.000Z",
      "last_edited_time": "2022-02-18T07:45:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "notion2svelte",
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
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " is designed to interface with your pages via a Notion database, so make sure that said database is connected to whatever secret you use for ",
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
            "plain_text": " is designed to interface with your pages via a Notion database, so make sure that said database is connected to whatever secret you use for ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "NOTION_API_KEY",
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
            "plain_text": "NOTION_API_KEY",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " via a Notion “Integration”.",
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
            "plain_text": " via a Notion “Integration”.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "3b7fd99d-b5e6-4370-983f-1131fc1df8f2",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:20:00.000Z",
      "last_edited_time": "2022-02-17T22:20:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "heading_1",
      "heading_1": {
        "is_toggleable": false,
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Optional keys",
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
            "plain_text": "Optional keys",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "a8a563ef-684f-4660-91b0-d5362b52c20b",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:20:00.000Z",
      "last_edited_time": "2022-02-17T22:32:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "heading_2",
      "heading_2": {
        "is_toggleable": false,
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Regular use",
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
            "plain_text": "Regular use",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "91e57092-e17c-48fa-bde3-6897c3c1eada",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:20:00.000Z",
      "last_edited_time": "2022-02-17T22:25:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "caption": [
          {
            "type": "text",
            "text": {
              "content": "Default values if left unset",
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
            "plain_text": "Default values if left unset",
            "href": null
          }
        ],
        "language": "typescript",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "PUBLISHABLE_STATUS=Publishable\nOUTPUT_PATH=\nOUTPUT_STATIC_FOLDER=",
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
            "plain_text": "PUBLISHABLE_STATUS=Publishable\nOUTPUT_PATH=\nOUTPUT_STATIC_FOLDER=",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "128fc387-9f0f-4fe2-9a36-25ad25d5eda6",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:21:00.000Z",
      "last_edited_time": "2022-02-18T07:45:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "PUBLISHABLE_STATUS",
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
            "plain_text": "PUBLISHABLE_STATUS",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " defines the string that ",
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
            "plain_text": " defines the string that ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " uses to filter against your pages’ ",
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
            "plain_text": " uses to filter against your pages’ ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "Status",
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
            "plain_text": "Status",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " prop; if ",
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
            "plain_text": " prop; if ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "Status",
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
            "plain_text": "Status",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " is not set to (by default) ",
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
            "plain_text": " is not set to (by default) ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "Publishable",
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
            "plain_text": "Publishable",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", the page won’t be included.",
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
            "plain_text": ", the page won’t be included.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "e355ca46-72cc-48fa-9aae-85861f9f9f8f",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:23:00.000Z",
      "last_edited_time": "2022-02-18T07:45:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "OUTPUT_PATH",
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
            "plain_text": "OUTPUT_PATH",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " tells ",
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
            "plain_text": " tells ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " where to save ",
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
            "plain_text": " where to save ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": ".svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " files. If left empty (the default), ",
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
            "plain_text": " files. If left empty (the default), ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " will output to the current directory.",
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
            "plain_text": " will output to the current directory.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "32c7e402-c4a5-4cc3-9982-0ae0703c7d01",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:26:00.000Z",
      "last_edited_time": "2022-02-18T07:46:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "OUTPUT_STATIC_FOLDER",
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
            "plain_text": "OUTPUT_STATIC_FOLDER",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " tells ",
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
            "plain_text": " tells ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " where to save ",
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
            "plain_text": " where to save ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "media",
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
            "plain_text": "media",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " files, esp. images. Again, the default is empty, meaning images will be stored in ",
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
            "plain_text": " files, esp. images. Again, the default is empty, meaning images will be stored in ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "./static/<page-id>/…",
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
            "plain_text": "./static/<page-id>/…",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "2f4d61f6-776b-47b5-96ef-5d227aeeae69",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:32:00.000Z",
      "last_edited_time": "2022-02-17T22:32:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "heading_2",
      "heading_2": {
        "is_toggleable": false,
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Debugging",
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
            "plain_text": "Debugging",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "002268c4-b0a1-4666-8da4-f8247f5d093f",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:32:00.000Z",
      "last_edited_time": "2022-02-18T07:46:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "While building ",
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
            "plain_text": "While building ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", I found myself frequently needing to rerun the tool repeatedly on a single page.",
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
            "plain_text": ", I found myself frequently needing to rerun the tool repeatedly on a single page.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "234f0621-3ee4-4b73-ba58-c1a060278090",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:33:00.000Z",
      "last_edited_time": "2022-02-18T07:46:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Since the content of that page often didn’t change much, I also found myself wanting to run the JSON→.svelte conversion without re-fetching each time. Thus were born these last three options:",
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
            "plain_text": "Since the content of that page often didn’t change much, I also found myself wanting to run the JSON→.svelte conversion without re-fetching each time. Thus were born these last three options:",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "81498392-9a29-4f02-9ce2-3663b177065e",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:35:00.000Z",
      "last_edited_time": "2022-02-17T22:47:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "caption": [],
        "language": "typescript",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "NOTION_TEST_PAGE_ID=b0f0dfbbthisisfakecd9039c7466476\nCACHE_TOKEN=b0f0dfbbthisisfakecd9039c7466476\n# FORCE_REFRESH=true",
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
            "plain_text": "NOTION_TEST_PAGE_ID=b0f0dfbbthisisfakecd9039c7466476\nCACHE_TOKEN=b0f0dfbbthisisfakecd9039c7466476\n# FORCE_REFRESH=true",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "f90b7543-07a8-4991-9078-657e20da25f5",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:35:00.000Z",
      "last_edited_time": "2022-02-18T07:46:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "NOTION_TEST_PAGE_ID",
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
            "plain_text": "NOTION_TEST_PAGE_ID",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " skips the pages-from-database loop, and fetches just the one page specified.",
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
            "plain_text": " skips the pages-from-database loop, and fetches just the one page specified.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "caba7b12-b1ee-4a30-afe2-27531d17288c",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:36:00.000Z",
      "last_edited_time": "2022-12-08T22:55:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": true,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "CACHE_TOKEN",
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
            "plain_text": "CACHE_TOKEN",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " tells ",
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
            "plain_text": " tells ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " whether it should fetch the test page:",
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
            "plain_text": " whether it should fetch the test page:",
            "href": null
          }
        ]
      },
      "blocks": [
        {
          "object": "block",
          "id": "a507b69d-ba96-450f-96f1-448a763ed784",
          "parent": {
            "type": "block_id",
            "block_id": "caba7b12-b1ee-4a30-afe2-27531d17288c"
          },
          "created_time": "2022-02-17T22:37:00.000Z",
          "last_edited_time": "2022-12-08T22:55:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "color": "default",
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "If the cache token ",
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
                "plain_text": "If the cache token ",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": "matches",
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
                "plain_text": "matches",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " the test page id, ",
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
                "plain_text": " the test page id, ",
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
                  "italic": true,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "notion2svelte",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " will skip fetching, and instead read the JSON directly from the locally-stored* intermediary output.",
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
                "plain_text": " will skip fetching, and instead read the JSON directly from the locally-stored* intermediary output.",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "bb762a3b-9dab-4cc7-83fc-097353fc5eb9",
          "parent": {
            "type": "block_id",
            "block_id": "caba7b12-b1ee-4a30-afe2-27531d17288c"
          },
          "created_time": "2022-02-17T22:38:00.000Z",
          "last_edited_time": "2022-02-18T07:50:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "color": "default",
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "It’s a bit of a hack because ",
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
                "plain_text": "It’s a bit of a hack because ",
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
                  "italic": true,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "notion2svelte",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " actually ",
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
                "plain_text": " actually ",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": "updates",
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
                "plain_text": "updates",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " the CACHE_TOKEN in your ",
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
                "plain_text": " the CACHE_TOKEN in your ",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": ".env",
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
                "plain_text": ".env",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " every time a test page is fetched. It seems wrong to have a tool editing its own ",
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
                "plain_text": " every time a test page is fetched. It seems wrong to have a tool editing its own ",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": ".env",
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
                "plain_text": ".env",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": " file, but it worked and it was easy, so for now, this is how it works. ¯\\_(ツ)_/¯",
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
                "plain_text": " file, but it worked and it was easy, so for now, this is how it works. ¯\\_(ツ)_/¯",
                "href": null
              }
            ]
          }
        }
      ]
    },
    {
      "object": "block",
      "id": "bd023127-2dff-4a78-a56d-adddb02238a8",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:39:00.000Z",
      "last_edited_time": "2022-02-18T07:51:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "FORCE_REFRESH",
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
            "plain_text": "FORCE_REFRESH",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", when set to ",
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
            "plain_text": ", when set to ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "true",
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
            "plain_text": "true",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", tells ",
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
            "plain_text": ", tells ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " to ignore the cache token & hit the Notion API ",
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
            "plain_text": " to ignore the cache token & hit the Notion API ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "every",
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
            "plain_text": "every",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " time.",
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
            "plain_text": " time.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "b892d942-7d28-4887-9310-42d6c8ba0407",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-12-08T22:55:00.000Z",
      "last_edited_time": "2022-12-08T22:55:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": []
      }
    },
    {
      "object": "block",
      "id": "43be2b89-7edd-41e9-824c-617d4ebba004",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:45:00.000Z",
      "last_edited_time": "2022-12-08T22:55:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "*In ",
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
            "plain_text": "*In ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "notion2svelte 0.2.0",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "gray"
            },
            "plain_text": "notion2svelte 0.2.0",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", a ",
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
            "plain_text": ", a ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "<slug>/notion-export.js",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "gray"
            },
            "plain_text": "<slug>/notion-export.js",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " file is output next to every ",
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
            "plain_text": " file is output next to every ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "<slug>/+page.svelte",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "gray"
            },
            "plain_text": "<slug>/+page.svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " page, just for kicks (and to help me troubleshoot ",
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
            "plain_text": " page, just for kicks (and to help me troubleshoot ",
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
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "gray"
            },
            "plain_text": "notion2svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " rendering issues).",
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
            "plain_text": " rendering issues).",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "c17345e0-98c5-4dca-a571-1069bf3ad932",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T22:04:00.000Z",
      "last_edited_time": "2022-12-08T22:59:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": false,
      "archived": false,
      "type": "callout",
      "callout": {
        "icon": {
          "type": "emoji",
          "emoji": "🧸"
        },
        "color": "gray_background",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "See also: ",
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
            "plain_text": "See also: ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ".env-sample",
              "link": {
                "url": "https://github.com/nvlgzr/notion2svelte/blob/main/.env-sample"
              }
            },
            "annotations": {
              "bold": false,
              "italic": true,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": ".env-sample",
            "href": "https://github.com/nvlgzr/notion2svelte/blob/main/.env-sample"
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "6db4ea05-d0b7-410f-bb21-b2f3204a718b",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T23:53:00.000Z",
      "last_edited_time": "2022-02-17T23:53:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": true,
      "archived": false,
      "type": "synced_block",
      "synced_block": {
        "synced_from": {
          "type": "block_id",
          "block_id": "2f7f4bed-9692-4017-a0b3-c390cc40422a"
        }
      },
      "blocks": [
        {
          "object": "block",
          "id": "fcdabdd9-e13c-4062-aed0-80473529e1ab",
          "parent": {
            "type": "block_id",
            "block_id": "2f7f4bed-9692-4017-a0b3-c390cc40422a"
          },
          "created_time": "2022-01-26T21:25:00.000Z",
          "last_edited_time": "2022-01-26T21:26:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": false,
          "archived": false,
          "type": "divider",
          "divider": {}
        },
        {
          "object": "block",
          "id": "e957991b-f8e0-43ab-a7ea-ba979f4320b9",
          "parent": {
            "type": "block_id",
            "block_id": "2f7f4bed-9692-4017-a0b3-c390cc40422a"
          },
          "created_time": "2022-01-24T06:42:00.000Z",
          "last_edited_time": "2022-12-08T21:35:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": false,
          "archived": false,
          "type": "heading_2",
          "heading_2": {
            "is_toggleable": false,
            "color": "default",
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "🏠",
                  "link": {
                    "url": "/fdc65179a8bd451caf6759019204cfde"
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
                "plain_text": "🏠",
                "href": "/fdc65179a8bd451caf6759019204cfde"
              },
              {
                "type": "text",
                "text": {
                  "content": " Browse the docs ⚘",
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
                "plain_text": " Browse the docs ⚘",
                "href": null
              }
            ]
          }
        }
      ]
    },
    {
      "object": "block",
      "id": "d5a7c197-46e6-42f6-ad62-79d02c6581c0",
      "parent": {
        "type": "page_id",
        "page_id": "3c584e91-1b5c-4378-b120-e3cf62797212"
      },
      "created_time": "2022-02-17T23:53:00.000Z",
      "last_edited_time": "2022-02-17T23:53:00.000Z",
      "created_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "last_edited_by": {
        "object": "user",
        "id": "169a5357-f419-4e33-9165-e91e90a3646d"
      },
      "has_children": true,
      "archived": false,
      "type": "column_list",
      "column_list": {},
      "blocks": [
        {
          "object": "block",
          "id": "9866d251-6a21-478d-8f39-feb304a6c5fb",
          "parent": {
            "type": "block_id",
            "block_id": "d5a7c197-46e6-42f6-ad62-79d02c6581c0"
          },
          "created_time": "2022-02-17T23:53:00.000Z",
          "last_edited_time": "2022-02-17T23:53:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": true,
          "archived": false,
          "type": "column",
          "column": {},
          "blocks": [
            {
              "object": "block",
              "id": "141f448f-d3f8-4560-b778-5a4d8d94d50d",
              "parent": {
                "type": "block_id",
                "block_id": "9866d251-6a21-478d-8f39-feb304a6c5fb"
              },
              "created_time": "2022-02-17T23:53:00.000Z",
              "last_edited_time": "2022-02-17T23:53:00.000Z",
              "created_by": {
                "object": "user",
                "id": "169a5357-f419-4e33-9165-e91e90a3646d"
              },
              "last_edited_by": {
                "object": "user",
                "id": "169a5357-f419-4e33-9165-e91e90a3646d"
              },
              "has_children": true,
              "archived": false,
              "type": "synced_block",
              "synced_block": {
                "synced_from": {
                  "type": "block_id",
                  "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                }
              },
              "blocks": [
                {
                  "object": "block",
                  "id": "9875d1e6-473c-433a-b821-2a9d546e8a4f",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-24T02:34:00.000Z",
                  "last_edited_time": "2022-01-27T05:50:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "High-level Discussion",
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
                        "plain_text": "High-level Discussion",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "4079b7f4-04e0-4002-bb44-168474a26b5a",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-02-17T23:53:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "f16dfed7-beb5-4a71-b674-35e17e7e33e5"
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
                        "plain_text": "Where notion2svelte Fits",
                        "href": "https://www.notion.so/f16dfed7beb54a71b67435e17e7e33e5"
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
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "9cee5919-3b5e-41c4-bd1e-17491ee8f80b",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-19T23:06:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "98564b23-3ea8-4b78-ad31-47e3a0971ef5"
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
                        "plain_text": "Components",
                        "href": "https://www.notion.so/98564b233ea84b78ad3147e3a0971ef5"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "2c54242b-655a-4364-9b88-e9e6e82e75d8",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-22T04:50:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "57ec9a2d-b854-4bf6-94a4-5f0e2a0b68d1"
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
                        "plain_text": "Writing Good Slugs",
                        "href": "https://www.notion.so/57ec9a2db8544bf694a45f0e2a0b68d1"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "851f3e13-1aeb-4134-a361-ea12a5c8e637",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T23:49:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "38ed521b-f46e-49be-8d2a-f67a53a37c6e"
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
                        "plain_text": "blockProps",
                        "href": "https://www.notion.so/38ed521bf46e49be8d2af67a53a37c6e"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "a31a7111-3314-44e3-8940-1a83d7b3ca09",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-19T23:06:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "6a969adc-5c00-4dfe-9242-ddd1fd223d42"
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
                        "plain_text": "Nested Blocks",
                        "href": "https://www.notion.so/6a969adc5c004dfe9242ddd1fd223d42"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "dca914b3-8efc-4c41-adbd-d47458c9fd9b",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:05:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "b266b66c-ecc7-4e21-8f49-4f80f5c820cc"
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
                        "plain_text": "Synced Blocks",
                        "href": "https://www.notion.so/b266b66cecc74e218f494f80f5c820cc"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "f4cc41bb-e696-471d-be27-6617d7bdb94f",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-02-17T23:53:00.000Z",
                  "last_edited_time": "2022-02-17T23:53:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "3c584e91-1b5c-4378-b120-e3cf62797212"
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
                        "plain_text": "Configuring your .env",
                        "href": "https://www.notion.so/3c584e911b5c4378b120e3cf62797212"
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
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "fbf52453-1c24-4d63-9776-0a6dc4004905",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-23T09:05:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Turn-intoable Block Components",
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
                        "plain_text": "Turn-intoable Block Components",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "35b59e66-78e8-4599-a74f-be0aa056f2f6",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-23T08:56:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "28fac2e0-7c79-4fb4-935e-9284a4b6a313"
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
                        "plain_text": "Paragraph (aka “Text”)",
                        "href": "https://www.notion.so/28fac2e07c794fb4935e9284a4b6a313"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "f47128cd-424a-4738-b225-9a59c91c1575",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-23T08:56:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "970f68f8-9f1a-4140-b76a-7ba91a3209cb"
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
                        "plain_text": "Header",
                        "href": "https://www.notion.so/970f68f89f1a4140b76a7ba91a3209cb"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "a3ce0738-e351-4fc8-be92-9d6f1ac3d7b6",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-23T08:59:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "991f1062-fc78-4019-aea5-6e890ca04ca2"
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
                        "plain_text": "ChildPage",
                        "href": "https://www.notion.so/991f1062fc784019aea56e890ca04ca2"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "a35e4deb-5fbc-4d7e-9b6a-217f5e745354",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-23T08:56:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "f4715756-f484-4a99-80a7-2385b6b1fb76"
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
                        "plain_text": "TodoItem",
                        "href": "https://www.notion.so/f4715756f4844a9980a72385b6b1fb76"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "041b544c-fbfd-4b23-8b33-035f31ea3f45",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T08:50:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "a87a9586-7196-4be7-a9fd-16908da25b79"
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
                        "plain_text": "BulletedListItem",
                        "href": "https://www.notion.so/a87a958671964be7a9fd16908da25b79"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "22ba8b20-e7c2-4f1b-b923-1af6e26dd4ec",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:02:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "52ce8803-309d-42ad-a3fd-00cb9cd1c200"
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
                        "plain_text": "NumberedListItem",
                        "href": "https://www.notion.so/52ce8803309d42ada3fd00cb9cd1c200"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "c45ed278-b594-4974-96fa-b9473c51ffba",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:02:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "8f280d4f-aa58-4382-93aa-f666f6c7ca0e"
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
                        "plain_text": "Toggle",
                        "href": "https://www.notion.so/8f280d4faa58438293aaf666f6c7ca0e"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "4bcc7a04-0cf5-4ea2-947c-0ad8a253d104",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:03:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "9a4f3d24-6b0c-4122-8a8b-91b6a3c40864"
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
                        "plain_text": "Code",
                        "href": "https://www.notion.so/9a4f3d246b0c41228a8b91b6a3c40864"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "abfd2f25-4633-4d15-a200-0637288aa918",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:03:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "aa1322ce-4c00-4737-ac1e-b3015f393fe5"
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
                        "plain_text": "Quote",
                        "href": "https://www.notion.so/aa1322ce4c004737ac1eb3015f393fe5"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "5ceed426-cc35-4b40-8105-f2fa27a6d014",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:04:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "1e2eab4c-0589-489c-b6bd-baa0e1f9593f"
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
                        "plain_text": "Callout",
                        "href": "https://www.notion.so/1e2eab4c0589489cb6bdbaa0e1f9593f"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "efde8267-dc96-4079-9925-850271e8c921",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:04:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "ef851797-7d17-4318-89a3-ae09285cfef8"
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
                        "plain_text": "Equation",
                        "href": "https://www.notion.so/ef8517977d17431889a3ae09285cfef8"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "3e338232-081e-4ded-baaf-d0c53e771b8e",
                  "parent": {
                    "type": "block_id",
                    "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                  },
                  "created_time": "2022-01-26T09:04:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Toggle Headings",
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
                        "plain_text": "Toggle Headings",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " (not yet implemented)",
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
                        "plain_text": " (not yet implemented)",
                        "href": null
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "object": "block",
          "id": "4fb5e072-a6ac-48e6-9e74-97cb2c64afc2",
          "parent": {
            "type": "block_id",
            "block_id": "d5a7c197-46e6-42f6-ad62-79d02c6581c0"
          },
          "created_time": "2022-02-17T23:53:00.000Z",
          "last_edited_time": "2022-02-17T23:53:00.000Z",
          "created_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "last_edited_by": {
            "object": "user",
            "id": "169a5357-f419-4e33-9165-e91e90a3646d"
          },
          "has_children": true,
          "archived": false,
          "type": "column",
          "column": {},
          "blocks": [
            {
              "object": "block",
              "id": "98c36e18-eeb1-4b08-a7f6-1c7c5a6e8036",
              "parent": {
                "type": "block_id",
                "block_id": "4fb5e072-a6ac-48e6-9e74-97cb2c64afc2"
              },
              "created_time": "2022-02-17T23:53:00.000Z",
              "last_edited_time": "2022-02-17T23:53:00.000Z",
              "created_by": {
                "object": "user",
                "id": "169a5357-f419-4e33-9165-e91e90a3646d"
              },
              "last_edited_by": {
                "object": "user",
                "id": "169a5357-f419-4e33-9165-e91e90a3646d"
              },
              "has_children": true,
              "archived": false,
              "type": "synced_block",
              "synced_block": {
                "synced_from": {
                  "type": "block_id",
                  "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                }
              },
              "blocks": [
                {
                  "object": "block",
                  "id": "88f1c2a8-f310-4f39-9cad-a75a40907666",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:48:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Layout-only Components",
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
                        "plain_text": "Layout-only Components",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "8455a5f7-dcc2-4e44-9390-d625d48182e0",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-26T05:14:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "a5b6af04-d017-4204-a022-6bf57fdbe440"
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
                        "plain_text": "IndentGroup",
                        "href": "https://www.notion.so/a5b6af04d0174204a0226bf57fdbe440"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "4cc5323f-6017-4363-87d6-7bd09c146367",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T22:50:00.000Z",
                  "last_edited_time": "2022-01-27T22:50:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "97e26ade-6cc8-4c45-90e7-e74dbe6cb0b4"
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
                        "plain_text": "Column & ColumnList",
                        "href": "https://www.notion.so/97e26ade6cc84c4590e7e74dbe6cb0b4"
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
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "2451e3ad-b992-4bac-94f9-1e48ddcdd901",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:52:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Page-level Components",
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
                        "plain_text": "Page-level Components",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "6eb79057-3337-413b-a0d6-82cc2ea12255",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T06:01:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "2011c59a-e02b-40b6-82f7-ee828c3d51fe"
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
                        "plain_text": "Title (aka Name)",
                        "href": "https://www.notion.so/2011c59ae02b40b682f7ee828c3d51fe"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "d16d3988-5d12-4006-969f-097bbac118b6",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:53:00.000Z",
                  "last_edited_time": "2022-01-28T23:39:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "df34058b-281e-4da6-badc-0a15a891d18e"
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
                        "plain_text": "Cover (Image & Icon)",
                        "href": "https://www.notion.so/df34058b281e4da6badc0a15a891d18e"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "5ffde9a6-121e-4750-8915-65e15c2dc276",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:59:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Annotation Components",
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
                        "plain_text": "Annotation Components",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "b607f2f8-029c-48e9-900c-86f0ee164024",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-29T04:01:00.000Z",
                  "last_edited_time": "2022-01-29T04:02:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "bold",
                          "link": null
                        },
                        "annotations": {
                          "bold": true,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "bold",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " → ",
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
                        "plain_text": " → ",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": "<strong>",
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
                        "plain_text": "<strong>",
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
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "2bd9d918-916a-45e1-99a0-8ffc0ac857a6",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-29T04:02:00.000Z",
                  "last_edited_time": "2022-01-29T04:02:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "italic",
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
                        "plain_text": "italic",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " → ",
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
                        "plain_text": " → ",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": "<em>",
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
                        "plain_text": "<em>",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "0885c94d-3a59-46ec-bf4e-26d805850e13",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-29T04:20:00.000Z",
                  "last_edited_time": "2022-12-04T08:11:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "strikethrough",
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
                        "plain_text": "strikethrough",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " → ",
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
                        "plain_text": " → ",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": "<s>",
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
                        "plain_text": "<s>",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "b9353341-7db1-4863-b288-c1eb7a722f86",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-29T04:20:00.000Z",
                  "last_edited_time": "2022-12-04T08:47:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "5cb76e2e-6d8f-4697-b53a-95905d6c0c69"
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
                        "plain_text": "Underline",
                        "href": "https://www.notion.so/5cb76e2e6d8f4697b53a95905d6c0c69"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "2bad4a10-facd-4b84-93af-a88a24d9f274",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:59:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "75a17254-79f8-4115-80df-3c1cb67e3060"
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
                        "plain_text": "InlineCode",
                        "href": "https://www.notion.so/75a1725479f8411580df3c1cb67e3060"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "0afc6ee3-3d2b-4489-8f0d-c60ec5f0dadd",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:59:00.000Z",
                  "last_edited_time": "2022-01-29T04:01:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "4117d756-3ce5-47b2-b9ef-b6bf8404bc7b"
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
                        "plain_text": "InlineColor",
                        "href": "https://www.notion.so/4117d7563ce547b2b9efb6bf8404bc7b"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "4cbb7490-9593-4960-9900-08b8ebe6a640",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T06:00:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "0a81110f-311a-4b2f-858a-65ea1a45ab3a"
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
                        "plain_text": "Link",
                        "href": "https://www.notion.so/0a81110f311a4b2f858a65ea1a45ab3a"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "47b80573-1412-4655-825d-9db7c1cd9f44",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T06:00:00.000Z",
                  "last_edited_time": "2022-01-27T06:09:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "ef851797-7d17-4318-89a3-ae09285cfef8"
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
                        "plain_text": "Equation",
                        "href": "https://www.notion.so/ef8517977d17431889a3ae09285cfef8"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "cef2ee13-252c-4aa7-99a5-d181a5ddbf5e",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:54:00.000Z",
                  "last_edited_time": "2022-01-27T05:59:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "heading_3",
                  "heading_3": {
                    "is_toggleable": false,
                    "color": "default",
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Other Components",
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
                        "plain_text": "Other Components",
                        "href": null
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "3d3a214d-ffcc-46f9-97a1-e7e765223979",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:55:00.000Z",
                  "last_edited_time": "2022-01-27T06:07:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "539eb6b1-b521-4fda-8246-b35378287ccb"
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
                        "plain_text": "Divider",
                        "href": "https://www.notion.so/539eb6b1b5214fda8246b35378287ccb"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "134abd51-02d6-4fd1-9f81-5b2368912d7f",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:56:00.000Z",
                  "last_edited_time": "2022-01-27T06:07:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "7481d378-fee3-47f7-8de9-bedbf31a7ea6"
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
                        "plain_text": "Embed",
                        "href": "https://www.notion.so/7481d378fee347f78de9bedbf31a7ea6"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "3054ba0b-6eb8-413c-a67c-2754a93fb658",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:57:00.000Z",
                  "last_edited_time": "2022-01-27T23:48:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "e4737844-2dd5-40b2-87a9-6ce548dd9cf2"
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
                        "plain_text": "Image",
                        "href": "https://www.notion.so/e47378442dd540b287a96ce548dd9cf2"
                      }
                    ]
                  }
                },
                {
                  "object": "block",
                  "id": "cab1c80b-4e87-4456-8f79-e9e005e491be",
                  "parent": {
                    "type": "block_id",
                    "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                  },
                  "created_time": "2022-01-27T05:56:00.000Z",
                  "last_edited_time": "2022-01-27T23:48:00.000Z",
                  "created_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "last_edited_by": {
                    "object": "user",
                    "id": "169a5357-f419-4e33-9165-e91e90a3646d"
                  },
                  "has_children": false,
                  "archived": false,
                  "type": "bulleted_list_item",
                  "bulleted_list_item": {
                    "color": "default",
                    "text": [
                      {
                        "type": "mention",
                        "mention": {
                          "type": "page",
                          "page": {
                            "id": "f8b93766-ebbc-4211-a1e7-4d4475d3d8a4"
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
                        "plain_text": "Error",
                        "href": "https://www.notion.so/f8b93766ebbc4211a1e74d4475d3d8a4"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export async function get({ params }) {
  return {
    body: {
      json
    }
  }
}