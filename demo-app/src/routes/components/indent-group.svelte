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
  import MagicLink from '$lib/notion2svelte/MagicLink.svelte';
  import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
  import Paragraph from '$lib/notion2svelte/Paragraph.svelte';
  import Quote from '$lib/notion2svelte/Quote.svelte';
  import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
  import Toggle from '$lib/notion2svelte/Toggle.svelte';
</script>

<svelte:head>
  <title>IndentGroup</title>
</svelte:head>

<Title>IndentGroup</Title>

<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: '5393bdbc-279a-4210-a090-d858b1301b67',
    created_time: '2022-01-26T05:48:00.000Z',
    last_edited_time: '2022-01-27T06:12:00.000Z'
  }}
>
  One of a very few layout-only components,&nbsp;<InlineCode code={'IndentGroup'} />&nbsp;is simply
  a wrapper for positioning&nbsp;
  <p
    style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
  >
    ⚠️ k(t, url): <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
      >Nested Blocks.</span
    >&nbsp;No URL provided for Nested Blocks.<br /><br />Did you give it a Slug, mark it
    Publishable, and run _notion2svelte_?
  </p>
  . In fact, that document’s got all you really need to know.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: '66bc4d6d-6a12-4c6e-b93d-e814891cd612',
    created_time: '2022-01-27T06:12:00.000Z',
    last_edited_time: '2022-01-27T06:14:00.000Z'
  }}
>
  This page is mainly here to demonstrate&nbsp;<em>notion2svelte’s</em>&nbsp;support for the crazy
  mishmush of nesting combinations Notion allows.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: 'e8eff102-44d0-4492-b7a1-02b08d1cf000',
    created_time: '2022-01-27T06:14:00.000Z',
    last_edited_time: '2022-01-27T06:23:00.000Z'
  }}
>
  As ugly as this looks in Notion, this site’s&nbsp;<em>Example Rendering</em>&nbsp;↓ is much
  uglier. I’ve thrown my styles together somewhat fast and loose, and sometimes the vertical spacing
  looks pretty off. Ah, well.
</Paragraph>
<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: '98d3c9df-afeb-4b1b-b265-28a8e555b38d',
    created_time: '2022-01-27T06:23:00.000Z',
    last_edited_time: '2022-01-27T06:23:00.000Z'
  }}
>
  As the elder said:
</Paragraph>
<Quote>“Make it work,&nbsp;<em>then</em>&nbsp;make it pretty!” —🧓🏼</Quote><Header level={1}
  ><strong>In Notion</strong></Header
>
<Image url="/assets/components/indent-group/35d7bc61-08ab-4bdf-894d-9d1b9ef1df85.png" />
<Header level={1}><strong>Notion API (as of this writing)</strong></Header>
<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: 'aff4b2ed-f952-4db4-9e9f-9f8255d52c88',
    created_time: '2022-01-26T05:40:00.000Z',
    last_edited_time: '2022-01-27T06:19:00.000Z'
  }}
>
  Ok, so…this output is pretty gnarly: over 600 lines of (formatted) JSON to represent 16 blocks!
</Paragraph>
<Toggle
  >You have been warned.
  <span slot="children"
    ><Code
      code={`\{
  …
  "blocks": [
    …
    \{
      "object": "block",
      "id": "815125ef-375a-435d-aa23-fca9831d6b14",
      "created_time": "2022-01-26T05:20:00.000Z",
      "last_edited_time": "2022-01-26T05:34:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "toggle",
      "toggle": \{
        "text": [
          \{
            "type": "text",
            "text": \{
              "content": "Even basic Paragraph blocks can contain nested blocks, but Toggles are the classic example",
              "link": null
            },
            "annotations": \{
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "Even basic Paragraph blocks can contain nested blocks, but Toggles are the classic example",
            "href": null
          }
        ]
      },
      "blocks": [
        \{
          "object": "block",
          "id": "ad3fa2b1-ecbd-443e-85f3-3eaa3af1c441",
          "created_time": "2022-01-26T05:20:00.000Z",
          "last_edited_time": "2022-01-26T05:20:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "👋😃 Hi! Im in ur sub-blocks!",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "👋😃 Hi! Im in ur sub-blocks!",
                "href": null
              }
            ]
          }
        },
        \{
          "object": "block",
          "id": "87668b20-4ea9-4064-8440-61dc892eb11e",
          "created_time": "2022-01-26T05:20:00.000Z",
          "last_edited_time": "2022-01-26T05:20:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "🦦💬 Me too!",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "🦦💬 Me too!",
                "href": null
              }
            ]
          }
        },
        \{
          "object": "block",
          "id": "1b1e270e-dd99-4c5a-b453-54ac6f4b22d5",
          "created_time": "2022-01-26T05:20:00.000Z",
          "last_edited_time": "2022-01-26T05:34:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "I’m bulleted, though",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "I’m bulleted, though",
                "href": null
              }
            ]
          }
        },
        \{
          "object": "block",
          "id": "0fc6d829-f3b2-470f-979c-4ce666e5f16a",
          "created_time": "2022-01-26T05:34:00.000Z",
          "last_edited_time": "2022-01-26T05:34:00.000Z",
          "has_children": true,
          "archived": false,
          "type": "callout",
          "callout": \{
            "text": [
              \{
                "type": "text",
                "text": \{
                  "content": "I’m a callout with my ",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "I’m a callout with my ",
                "href": null
              },
              \{
                "type": "text",
                "text": \{
                  "content": "own",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": true,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": "own",
                "href": null
              },
              \{
                "type": "text",
                "text": \{
                  "content": " nested blocks",
                  "link": null
                },
                "annotations": \{
                  "bold": false,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "default"
                },
                "plain_text": " nested blocks",
                "href": null
              }
            ],
            "icon": \{
              "type": "emoji",
              "emoji": "🦦"
            }
          },
          "blocks": [
            \{
              "object": "block",
              "id": "f064c5a6-5a31-461a-9863-62a7d91a449a",
              "created_time": "2022-01-26T05:20:00.000Z",
              "last_edited_time": "2022-01-26T05:34:00.000Z",
              "has_children": true,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": \{
                "text": [
                  \{
                    "type": "text",
                    "text": \{
                      "content": "Numbered",
                      "link": null
                    },
                    "annotations": \{
                      "bold": false,
                      "italic": false,
                      "strikethrough": false,
                      "underline": false,
                      "code": false,
                      "color": "default"
                    },
                    "plain_text": "Numbered",
                    "href": null
                  }
                ]
              },
              "blocks": [
                \{
                  "object": "block",
                  "id": "c83281b2-8a93-4424-bac2-e056e6332bb1",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": true,
                  "archived": false,
                  "type": "numbered_list_item",
                  "numbered_list_item": \{
                    "text": [
                      \{
                        "type": "text",
                        "text": \{
                          "content": "Lists",
                          "link": null
                        },
                        "annotations": \{
                          "bold": false,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "Lists",
                        "href": null
                      }
                    ]
                  },
                  "blocks": [
                    \{
                      "object": "block",
                      "id": "b076e878-d938-4551-85ff-c8b89b984a44",
                      "created_time": "2022-01-26T05:20:00.000Z",
                      "last_edited_time": "2022-01-26T05:20:00.000Z",
                      "has_children": false,
                      "archived": false,
                      "type": "numbered_list_item",
                      "numbered_list_item": \{
                        "text": [
                          \{
                            "type": "text",
                            "text": \{
                              "content": "At 3 levels",
                              "link": null
                            },
                            "annotations": \{
                              "bold": false,
                              "italic": false,
                              "strikethrough": false,
                              "underline": false,
                              "code": false,
                              "color": "default"
                            },
                            "plain_text": "At 3 levels",
                            "href": null
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            \{
              "object": "block",
              "id": "9791bbd2-e6c5-4aa7-81ec-ccefb42240c8",
              "created_time": "2022-01-26T05:20:00.000Z",
              "last_edited_time": "2022-01-26T05:34:00.000Z",
              "has_children": false,
              "archived": false,
              "type": "numbered_list_item",
              "numbered_list_item": \{
                "text": [
                  \{
                    "type": "text",
                    "text": \{
                      "content": "Ni!",
                      "link": null
                    },
                    "annotations": \{
                      "bold": false,
                      "italic": false,
                      "strikethrough": false,
                      "underline": false,
                      "code": false,
                      "color": "default"
                    },
                    "plain_text": "Ni!",
                    "href": null
                  }
                ]
              }
            },
            \{
              "object": "block",
              "id": "4929f3d2-3ee1-48e8-95cb-9781d5874bfd",
              "created_time": "2022-01-26T05:20:00.000Z",
              "last_edited_time": "2022-01-26T05:34:00.000Z",
              "has_children": true,
              "archived": false,
              "type": "to_do",
              "to_do": \{
                "text": [
                  \{
                    "type": "text",
                    "text": \{
                      "content": "Todos can also be nested",
                      "link": null
                    },
                    "annotations": \{
                      "bold": false,
                      "italic": false,
                      "strikethrough": false,
                      "underline": false,
                      "code": false,
                      "color": "default"
                    },
                    "plain_text": "Todos can also be nested",
                    "href": null
                  }
                ],
                "checked": false
              },
              "blocks": [
                \{
                  "object": "block",
                  "id": "c22a1516-3194-4f6c-8a2a-52fa799fa0b6",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": false,
                  "archived": false,
                  "type": "to_do",
                  "to_do": \{
                    "text": [
                      \{
                        "type": "text",
                        "text": \{
                          "content": "Like this one",
                          "link": null
                        },
                        "annotations": \{
                          "bold": false,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "Like this one",
                        "href": null
                      }
                    ],
                    "checked": false
                  }
                },
                \{
                  "object": "block",
                  "id": "2336c959-4a32-488d-b58a-2835f65fd6ac",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": false,
                  "archived": false,
                  "type": "code",
                  "code": \{
                    "caption": [],
                    "text": [
                      \{
                        "type": "text",
                        "text": \{
                          "content": "Even a code block can be nested beneath other blocks!\n",
                          "link": null
                        },
                        "annotations": \{
                          "bold": false,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "Even a code block can be nested beneath other blocks!\n",
                        "href": null
                      }
                    ],
                    "language": "plain text"
                  }
                },
                \{
                  "object": "block",
                  "id": "12b87f6c-01e7-4751-8e6d-f04ce7fce394",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": false,
                  "archived": false,
                  "type": "divider",
                  "divider": \{}
                },
                \{
                  "object": "block",
                  "id": "27cd695b-139b-4bae-8921-3da22c46adf3",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": false,
                  "archived": false,
                  "type": "paragraph",
                  "paragraph": \{
                    "text": [
                      \{
                        "type": "text",
                        "text": \{
                          "content": "↑ (As can dividers)",
                          "link": null
                        },
                        "annotations": \{
                          "bold": false,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "↑ (As can dividers)",
                        "href": null
                      }
                    ]
                  }
                },
                \{
                  "object": "block",
                  "id": "ae5a84db-02bf-4c35-b7fc-a44d5ec1deb6",
                  "created_time": "2022-01-26T05:20:00.000Z",
                  "last_edited_time": "2022-01-26T05:20:00.000Z",
                  "has_children": true,
                  "archived": false,
                  "type": "quote",
                  "quote": \{
                    "text": [
                      \{
                        "type": "text",
                        "text": \{
                          "content": "It used to be that callouts and quotes couldn’t have nested blocks…",
                          "link": null
                        },
                        "annotations": \{
                          "bold": false,
                          "italic": false,
                          "strikethrough": false,
                          "underline": false,
                          "code": false,
                          "color": "default"
                        },
                        "plain_text": "It used to be that callouts and quotes couldn’t have nested blocks…",
                        "href": null
                      }
                    ]
                  },
                  "blocks": [
                    \{
                      "object": "block",
                      "id": "809976f0-d3d6-46fa-980c-fb6b3d08c87b",
                      "created_time": "2022-01-26T05:20:00.000Z",
                      "last_edited_time": "2022-01-26T05:20:00.000Z",
                      "has_children": false,
                      "archived": false,
                      "type": "heading_1",
                      "heading_1": \{
                        "text": [
                          \{
                            "type": "text",
                            "text": \{
                              "content": "But that’s changed!",
                              "link": null
                            },
                            "annotations": \{
                              "bold": false,
                              "italic": false,
                              "strikethrough": false,
                              "underline": false,
                              "code": false,
                              "color": "default"
                            },
                            "plain_text": "But that’s changed!",
                            "href": null
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
    },
    \{
      "object": "block",
      "id": "dd9ce5c8-f083-47d0-b19e-46873776a8ba",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": \{
        "text": []
      }
    },
    \{
      "object": "block",
      "id": "c2339da9-2c1e-4df8-82bb-e00a05713c30",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": \{
        "text": []
      }
    },
    \{
      "object": "block",
      "id": "92c1af45-3636-4d35-80af-ac07056a2490",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "divider",
      "divider": \{}
    },
    \{
      "object": "block",
      "id": "054d0043-94d3-430b-96db-14307d151c7f",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "synced_block",
      "synced_block": \{
        "synced_from": \{
          "type": "block_id",
          "block_id": "876d6c50-40ef-4fb7-88e7-4916177344be"
        }
      }
    },
    \{
      "object": "block",
      "id": "df2b1765-e890-4e6f-b5e1-bfab8f5c3404",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "synced_block",
      "synced_block": \{
        "synced_from": \{
          "type": "block_id",
          "block_id": "2f7f4bed-9692-4017-a0b3-c390cc40422a"
        }
      },
      "blocks": []
    },
    \{
      "object": "block",
      "id": "b5d68a01-1761-4456-af8d-25a7e98e0c5d",
      "created_time": "2022-01-26T05:19:00.000Z",
      "last_edited_time": "2022-01-26T05:19:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "column_list",
      "column_list": \{},
      "blocks": [
        \{
          "object": "block",
          "id": "66d6fbb8-8fb3-466c-a08b-7aa0e7baf479",
          "created_time": "2022-01-26T05:19:00.000Z",
          "last_edited_time": "2022-01-26T05:19:00.000Z",
          "has_children": true,
          "archived": false,
          "type": "column",
          "column": \{},
          "blocks": [
            \{
              "object": "block",
              "id": "1882635b-a027-48fb-96e7-cf9c0fc53342",
              "created_time": "2022-01-26T05:19:00.000Z",
              "last_edited_time": "2022-01-26T05:19:00.000Z",
              "has_children": true,
              "archived": false,
              "type": "synced_block",
              "synced_block": \{
                "synced_from": \{
                  "type": "block_id",
                  "block_id": "f4571b06-64ef-4e09-b5ba-50e1de6b5845"
                }
              },
              "blocks": []
            }
          ]
        },
        \{
          "object": "block",
          "id": "36a75432-9e64-4abc-a6ae-f38b1fea159b",
          "created_time": "2022-01-26T05:19:00.000Z",
          "last_edited_time": "2022-01-26T05:32:00.000Z",
          "has_children": true,
          "archived": false,
          "type": "column",
          "column": \{},
          "blocks": [
            \{
              "object": "block",
              "id": "6b8688bd-eaab-47bf-ade6-90f42d909b4b",
              "created_time": "2022-01-26T05:19:00.000Z",
              "last_edited_time": "2022-01-26T05:19:00.000Z",
              "has_children": true,
              "archived": false,
              "type": "synced_block",
              "synced_block": \{
                "synced_from": \{
                  "type": "block_id",
                  "block_id": "6ca4ccdf-5887-4749-afe4-150ebaa77ccc"
                }
              },
              "blocks": []
            },
            \{
              "object": "block",
              "id": "5322c1dd-ec15-4ea0-9087-d19ae08e590b",
              "created_time": "2022-01-26T05:32:00.000Z",
              "last_edited_time": "2022-01-26T05:32:00.000Z",
              "has_children": false,
              "archived": false,
              "type": "paragraph",
              "paragraph": \{
                "text": []
              }
            }
          ]
        }
      ]
    }
  ]`}
      language="json"
      caption=""
    /></span
  ></Toggle
><Header level={1}><strong>Svelte output</strong></Header>
<Code
  code={`<Toggle
  >Even basic Paragraph blocks can contain nested blocks, but Toggles are the classic example
  <span slot="children"
    ><Paragraph
      blockProps=\{\{
        pageId: 'a5b6af04d0174204a0226bf57fdbe440',
        id: 'ad3fa2b1-ecbd-443e-85f3-3eaa3af1c441',
        created_time: '2022-01-26T05:20:00.000Z',
        last_edited_time: '2022-01-26T05:20:00.000Z'
      }}
    >
      👋😃 Hi! Im in ur sub-blocks!
    </Paragraph>
    <Paragraph
      blockProps=\{\{
        pageId: 'a5b6af04d0174204a0226bf57fdbe440',
        id: '87668b20-4ea9-4064-8440-61dc892eb11e',
        created_time: '2022-01-26T05:20:00.000Z',
        last_edited_time: '2022-01-26T05:20:00.000Z'
      }}
    >
      🦦💬 Me too!
    </Paragraph>
    <BulletedListItem>I’m bulleted, though</BulletedListItem>
    <Callout emoji="🦦"
      >I’m a callout with my&nbsp;<em>own</em>&nbsp;nested blocks<span slot="children"
        ><IndentGroup>
          <NumberedListItem number="a">Numbered</NumberedListItem>
          <IndentGroup>
            <NumberedListItem number="i">Lists</NumberedListItem>
            <IndentGroup>
              <NumberedListItem number="1">At 3 levels</NumberedListItem>
            </IndentGroup>
          </IndentGroup>
          <NumberedListItem number="b">Ni!</NumberedListItem>
          <TodoItem checked=\{false}>Todos can also be nested</TodoItem>
          <IndentGroup>
            <TodoItem checked=\{false}>Like this one</TodoItem>
            <Code
              code=\{\`Even a code block can be nested beneath other blocks!
\`}
              language="plain text"
              caption=""
            /><Divider />
            <Paragraph
              blockProps=\{\{
                pageId: 'a5b6af04d0174204a0226bf57fdbe440',
                id: '27cd695b-139b-4bae-8921-3da22c46adf3',
                created_time: '2022-01-26T05:20:00.000Z',
                last_edited_time: '2022-01-26T05:20:00.000Z'
              }}
            >
              ↑ (As can dividers)
            </Paragraph>
            <Quote
              >It used to be that callouts and quotes couldn’t have nested blocks…<span
                slot="children"
                ><Header level="1">But that’s changed!</Header>
              </span></Quote
            >
          </IndentGroup>
        </IndentGroup>
      </span></Callout
    ></span
  ></Toggle
>`}
  language="html"
  caption="Still a lotta lines, but at least now we’re down by an order of magnitude!"
/><Header level={1}><strong>Example Rendering</strong></Header>
<Toggle
  >Even basic Paragraph blocks can contain nested blocks, but Toggles are the classic example
  <span slot="children"
    ><Paragraph
      blockProps={{
        pageId: 'a5b6af04d0174204a0226bf57fdbe440',
        id: 'ad3fa2b1-ecbd-443e-85f3-3eaa3af1c441',
        created_time: '2022-01-26T05:20:00.000Z',
        last_edited_time: '2022-01-26T05:20:00.000Z'
      }}
    >
      👋😃 Hi! Im in ur sub-blocks!
    </Paragraph>
    <Paragraph
      blockProps={{
        pageId: 'a5b6af04d0174204a0226bf57fdbe440',
        id: '87668b20-4ea9-4064-8440-61dc892eb11e',
        created_time: '2022-01-26T05:20:00.000Z',
        last_edited_time: '2022-01-26T05:20:00.000Z'
      }}
    >
      🦦💬 Me too!
    </Paragraph>
    <BulletedListItem>I’m bulleted, though</BulletedListItem>
    <Callout emoji="🦦"
      >I’m a callout with my&nbsp;<em>own</em>&nbsp;nested blocks<span slot="children"
        ><NumberedListItem number="a">Numbered</NumberedListItem>
        <IndentGroup>
          <NumberedListItem number="i">Lists</NumberedListItem>
          <IndentGroup>
            <NumberedListItem number="1">At 3 levels</NumberedListItem>
          </IndentGroup>
        </IndentGroup>
        <NumberedListItem number="b">Ni!</NumberedListItem>
        <TodoItem checked={false}>Todos can also be nested</TodoItem>
        <IndentGroup>
          <TodoItem checked={false}>Like this one</TodoItem>
          <Code
            code={`Even a code block can be nested beneath other blocks!`}
            language="plain text"
            caption=""
          /><Divider />
          <Paragraph
            blockProps={{
              pageId: 'a5b6af04d0174204a0226bf57fdbe440',
              id: '27cd695b-139b-4bae-8921-3da22c46adf3',
              created_time: '2022-01-26T05:20:00.000Z',
              last_edited_time: '2022-01-26T05:20:00.000Z'
            }}
          >
            ↑ (As can dividers)
          </Paragraph>
          <Quote
            >It used to be that callouts and quotes couldn’t have nested blocks…<span
              slot="children"
              ><Header level={1}>But that’s changed!</Header>
            </span></Quote
          >
        </IndentGroup>
      </span></Callout
    ></span
  ></Toggle
><Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: '389fe828-ac21-4fd9-a87e-34f6164e6b65',
    created_time: '2022-01-26T05:47:00.000Z',
    last_edited_time: '2022-01-26T05:47:00.000Z'
  }}
/>
<Divider />
<Divider />
<Header level={1}>Where to learn more</Header>
<Header level={3}>Find the code, start a discussion, or report an issue on GitHub</Header>
<BulletedListItem
  ><MagicLink href="https://github.com/nvlgzr/notion2svelte"
    >https://github.com/nvlgzr/notion2svelte</MagicLink
  ></BulletedListItem
>
<Header level={3}>Ready to try it?</Header>
<Paragraph
  blockProps={{
    pageId: 'a5b6af04d0174204a0226bf57fdbe440',
    id: '58ff394d-4eda-4d56-aaea-89d926fcd3da',
    created_time: '2022-01-26T09:47:00.000Z',
    last_edited_time: '2022-01-27T05:11:00.000Z'
  }}
>
  Open your Terminal.app* and follow along to 👉🏿 “<MagicLink
    href="https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
    >notion2svelte in 10** minutes</MagicLink
  >”!
</Paragraph>
<IndentGroup>
  <Paragraph
    blockProps={{
      pageId: 'a5b6af04d0174204a0226bf57fdbe440',
      id: 'b77e2c4c-0270-4680-aee3-73500e7e5e95',
      created_time: '2022-01-26T09:47:00.000Z',
      last_edited_time: '2022-01-27T05:14:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >*I have no clue how this thing performs on Linux, let alone Windows. Kinda curious whether it
      works for you if you’re not running macOS! That said, I suspect my reliance on&nbsp;</InlineColor
    ><MagicLink href="https://fishshell.com/"
      ><InlineColor value="gray">fish shell</InlineColor></MagicLink
    ><InlineColor value="gray"
      >&nbsp;is as likely to cause issues as my platform-of-choice/priviilege. This is a Node app,
      after all, so it should be pretty portable!</InlineColor
    >
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'a5b6af04d0174204a0226bf57fdbe440',
      id: 'fc7a7eef-1c40-431e-9842-85d97d1e1d49',
      created_time: '2022-01-27T05:11:00.000Z',
      last_edited_time: '2022-01-27T05:11:00.000Z'
    }}
  >
    <InlineColor value="gray"
      >**Technically, the video’s shorter than 10 minutes, but you might want to set aside 20-30
      minutes to allow for your own play time. 🧫</InlineColor
    >🧪
  </Paragraph>
  <Paragraph
    blockProps={{
      pageId: 'a5b6af04d0174204a0226bf57fdbe440',
      id: '86f56fbe-bc18-4df1-90bd-277d0d5a05c5',
      created_time: '2022-01-27T05:10:00.000Z',
      last_edited_time: '2022-01-27T05:10:00.000Z'
    }}
  />
</IndentGroup>
<Divider />
<Header level={2}>Browse the docs ⚘&nbsp;<a href="/about-notion2svelte">🏠</a>&nbsp;</Header>
<ColumnList cols={2}
  ><Column
    ><Header level={3}>High-level Discussion</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Components.</span
        >&nbsp;No URL provided for Components.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Writing Good Slugs.</span
        >&nbsp;No URL provided for Writing Good Slugs.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >blockProps.</span
        >&nbsp;No URL provided for blockProps.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Nested Blocks.</span
        >&nbsp;No URL provided for Nested Blocks.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/synced-blocks">Synced Blocks</MagicLink></BulletedListItem
    >
    <Header level={3}>Turn-intoable Block Components</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Paragraph (aka “Text”).</span
        >&nbsp;No URL provided for Paragraph (aka “Text”).<br /><br />Did you give it a Slug, mark
        it Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >Header (3 types in 1!).</span
        >&nbsp;No URL provided for Header (3 types in 1!).<br /><br />Did you give it a Slug, mark
        it Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >ChildPage.</span
        >&nbsp;No URL provided for ChildPage.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >TodoItem.</span
        >&nbsp;No URL provided for TodoItem.<br /><br />Did you give it a Slug, mark it Publishable,
        and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/bulleted-list-item">BulletedListItem</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/numbered-list-item">NumberedListItem</MagicLink
      ></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/toggle">Toggle</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/code">Code</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/quote">Quote</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/callout">Callout</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <BulletedListItem
      >Toggle Headings<InlineColor value="gray">&nbsp;(not yet implemented)</InlineColor
      ></BulletedListItem
    >
  </Column><Column
    ><Header level={3}>Layout-only Components</Header>
    <BulletedListItem
      ><p
        style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; "
      >
        ⚠️ k(t, url): <span
          style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;"
          >IndentGroup.</span
        >&nbsp;No URL provided for IndentGroup.<br /><br />Did you give it a Slug, mark it
        Publishable, and run _notion2svelte_?
      </p></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/columns">Column & ColumnList</MagicLink>&nbsp;</BulletedListItem
    >
    <Header level={3}>Page-level Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/title">Title (aka Name)</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/cover">Cover</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/icon">Icon</MagicLink></BulletedListItem>
    <Header level={3}>Annotation Components</Header>
    <BulletedListItem
      ><MagicLink href="/components/inline-code">InlineCode</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/inline-color">InlineColor</MagicLink></BulletedListItem
    >
    <BulletedListItem
      ><MagicLink href="/components/internal-link">InternalLink</MagicLink></BulletedListItem
    >
    <BulletedListItem><MagicLink href="/components/equation">Equation</MagicLink></BulletedListItem>
    <Header level={3}>Other Components</Header>
    <BulletedListItem><MagicLink href="/components/divider">Divider</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/embed">Embed</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/image">Image</MagicLink></BulletedListItem>
    <BulletedListItem><MagicLink href="/components/error">Error</MagicLink></BulletedListItem>
  </Column></ColumnList
>
