<svelte:head>
  <title>Introducing notion2svelte</title>
</svelte:head>      <script>
        import Error from "$lib/notion2svelte/Error.svelte";
        import Cover from "$lib/notion2svelte/Cover.svelte"
        import Title from "$lib/notion2svelte/Title.svelte"
        import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte"
        import Callout from "$lib/notion2svelte/Callout.svelte"
        import ChildPage from "$lib/notion2svelte/ChildPage.svelte"
        import Code from "$lib/notion2svelte/Code.svelte"
        import ColumnList from "$lib/notion2svelte/ColumnList.svelte"
        import Column from "$lib/notion2svelte/Column.svelte"
        import Divider from "$lib/notion2svelte/Divider.svelte"
        import Embed from "$lib/notion2svelte/Embed.svelte"
        import Header from "$lib/notion2svelte/Header.svelte"
        import Image from "$lib/notion2svelte/Image.svelte"
        import IndentGroup from "$lib/notion2svelte/IndentGroup.svelte"
        import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
        import InlineColor from "$lib/notion2svelte/InlineColor.svelte"
        import Equation from "$lib/notion2svelte/Equation.svelte"
        import Magic from "$lib/notion2svelte/Magic.svelte"
        import MagicLink from "$lib/notion2svelte/MagicLink.svelte"
        import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte"
        import Paragraph from "$lib/notion2svelte/Paragraph.svelte"
        import Quote from "$lib/notion2svelte/Quote.svelte"
        import TodoItem from "$lib/notion2svelte/TodoItem.svelte"
        import Toggle from "$lib/notion2svelte/Toggle.svelte"
      </script>
        <Cover coverURL={"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"} iconEmojiOrURL={"/assets/about-notion2svelte/icon.png"} />
  <Magic sourceJSON={undefined}><Title>Introducing notion2svelte</Title>

</Magic>


  <Magic sourceJSON={{
  "object": "block",
  "id": "1ceeb64a-bae5-458f-855b-912a863940bb",
  "created_time": "2022-01-04T05:46:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": []
  }
}}><Paragraph>

</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "720886ad-c6f4-4e1a-86bf-1d1871a55013",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "quote",
  "quote": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Write",
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
        "plain_text": "Write",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " in Notion, ",
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
        "plain_text": " in Notion, ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "publish",
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
        "plain_text": "publish",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " in Svelte, ",
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
        "plain_text": " in Svelte, ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "control",
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
        "plain_text": "control",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " with ",
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
        "plain_text": " with ",
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
      }
    ]
  }
}}><Quote><strong>Write</strong>&nbsp;in Notion,&nbsp;<strong>publish</strong>&nbsp;in Svelte,&nbsp;<strong>control</strong>&nbsp;with&nbsp;<em>notion2svelte</em></Quote></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "bf385444-460c-4278-b850-4681361221f1",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": []
  }
}}><Paragraph>

</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "e875c718-04a6-439f-a1b8-19e3502e5882",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "divider",
  "divider": {}
}}><Divider />
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "dfd5b0a6-f19e-4c81-8024-68dfbeb5a1fc",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_2",
  "heading_2": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Source (Notion)",
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
        "plain_text": "Source (Notion)",
        "href": null
      }
    ]
  }
}}><Header level="2">Source (Notion)</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "ed21d11c-9389-4694-9db4-549e002a1b92",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cd6ca920-8720-4fdd-bafa-02578e54e4ed/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=f54a651d5a8fc63dd5deb9c6ab759eb17b08122a597685ba1c9b24e6a12eb262&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:31.004Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/ed21d11c-9389-4694-9db4-549e002a1b92.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "7bac921b-ddaf-4304-9a27-71112cb5d5e9",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "😃 Awesome editing experience",
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
        "plain_text": "😃 Awesome editing experience",
        "href": null
      }
    ]
  }
}}><BulletedListItem>😃 Awesome editing experience</BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "54f999ba-a125-4dee-8b63-e4b38a9765cc",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "🤨 Domain-locked to ",
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
        "plain_text": "🤨 Domain-locked to ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "notion.so",
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
        "plain_text": "notion.so",
        "href": null
      }
    ]
  }
}}><BulletedListItem>🤨 Domain-locked to&nbsp;<em>notion.so</em></BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "026f37a9-2a3c-46b7-8750-2bec21c60d7a",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "😐 Proprietary limitations",
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
        "plain_text": "😐 Proprietary limitations",
        "href": null
      }
    ]
  }
}}><BulletedListItem>😐 Proprietary limitations</BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "5fdf296b-d570-4b34-8b78-7adfe9b27bb3",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_2",
  "heading_2": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Destination (Svelte)",
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
        "plain_text": "Destination (Svelte)",
        "href": null
      }
    ]
  }
}}><Header level="2">Destination (Svelte)</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "ce917906-431b-4d6a-9134-506027e66805",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0ed159d5-2d44-4146-9926-1d60d3598a62/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=54c0dd4f2dde607283793bb29e5f9ecd2e3114f03a5ff75d57971d495cf6eb4c&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:31.010Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/ce917906-431b-4d6a-9134-506027e66805.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "33942c60-d631-4352-92f1-cb91db16130e",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "👘 Your style",
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
        "plain_text": "👘 Your style",
        "href": null
      }
    ]
  }
}}><BulletedListItem>👘 Your style</BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "2f1796b5-8068-4fe6-8eb3-289aa08b7e2a",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "🤔 Your domain",
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
        "plain_text": "🤔 Your domain",
        "href": null
      }
    ]
  }
}}><BulletedListItem>🤔 Your domain</BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "9d9c2603-ece7-407a-8300-49ca4c8c38e8",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "bulleted_list_item",
  "bulleted_list_item": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "🪡 Infinite possibilities",
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
        "plain_text": "🪡 Infinite possibilities",
        "href": null
      }
    ]
  }
}}><BulletedListItem>🪡 Infinite possibilities</BulletedListItem>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "6123632d-ccc1-4182-b1b0-18e932f44af1",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_1",
  "heading_1": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "A little bit of background",
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
        "plain_text": "A little bit of background",
        "href": null
      }
    ]
  }
}}><Header level="1">A little bit of background</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "10ea18b1-010c-493f-9fcb-351b3f70c610",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "toggle",
  "toggle": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "The Long Story",
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
        "plain_text": "The Long Story",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "3c9ac485-b64a-4557-89d1-c48bfc61720c",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "heading_3",
      "heading_3": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "A Novel Idea",
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
            "plain_text": "A Novel Idea",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "9e3949cb-9809-4823-afa8-18a3cd64a738",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "፠ 2015 ፠",
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
            "plain_text": "፠ 2015 ፠",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "66edcc74-349c-4bd4-924f-778ffa3ca59a",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "I made the mistake of saying, \"Hey, this would make a good novel!\" out loud. It was Saturday morning on a tropical island with family, on vacation from my gray job in a gray building developing endless prototypes for gray people at a gray company. A few of us had broken away from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one: a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.",
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
            "plain_text": "I made the mistake of saying, \"Hey, this would make a good novel!\" out loud. It was Saturday morning on a tropical island with family, on vacation from my gray job in a gray building developing endless prototypes for gray people at a gray company. A few of us had broken away from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one: a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "a3929aff-935d-495a-bfca-8a242a0d7985",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "I could not tell you what was on my mind in the moments before The Muse slapped its sticker on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day, an ",
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
            "plain_text": "I could not tell you what was on my mind in the moments before The Muse slapped its sticker on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day, an ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "author!",
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
            "plain_text": "author!",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "” A few minutes earlier, the conversation had stalled in favor a full-bellied silence. My sister, who had been scrolling through something on her phone, finally gave the screen several taps and then placed the small slab face down on the table with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought might work well with her son.",
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
            "plain_text": "” A few minutes earlier, the conversation had stalled in favor a full-bellied silence. My sister, who had been scrolling through something on her phone, finally gave the screen several taps and then placed the small slab face down on the table with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought might work well with her son.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "8df9ad15-522d-4df2-8ad4-841120f46a9f",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool mid-morning breeze: ",
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
            "plain_text": "The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool mid-morning breeze: ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "At what point are we, as parents, mere vehicles for the technology that's raising our children?",
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
            "plain_text": "At what point are we, as parents, mere vehicles for the technology that's raising our children?",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " Sure, the advice had, in thisninstance, come from a post written by an Actual Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT cribs?",
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
            "plain_text": " Sure, the advice had, in thisninstance, come from a post written by an Actual Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT cribs?",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "c5991fe8-f17d-4d85-ab5c-bd62fd6a6d60",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "quote",
      "quote": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This brain is expressing hunger",
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
            "plain_text": "This brain is expressing hunger",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "0a9e7a25-a698-4179-9784-2dbe63a8b8e7",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "quote",
      "quote": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This brain is expressing exhaustion",
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
            "plain_text": "This brain is expressing exhaustion",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "f6f67f1e-c9a2-4f41-a951-5afefc82b27b",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "quote",
      "quote": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "This brain just shit itself",
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
            "plain_text": "This brain just shit itself",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "2f4b9294-0256-477c-ac7a-0306a4f98919",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "And if the skull caps succeed, what next?",
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
            "plain_text": "And if the skull caps succeed, what next?",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "9b3e71ba-b7a6-4553-8a90-b0cbd0627d61",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "divider",
      "divider": {}
    },
    {
      "object": "block",
      "id": "0e0da91f-b6cd-4eea-ba13-22132038e2c6",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "heading_3",
      "heading_3": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Options Paralysis",
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
            "plain_text": "Options Paralysis",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "c3904c5e-9a0b-45a2-8072-400dd3d935b4",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare and intense optimism. Now that I had a core question, I could write a novel. Right? I mean…why the hell not? By the time we got back to the hotel, my fingers were itching with fictions. ",
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
            "plain_text": "I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare and intense optimism. Now that I had a core question, I could write a novel. Right? I mean…why the hell not? By the time we got back to the hotel, my fingers were itching with fictions. ",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "205a83db-9147-4f33-8400-6cc9df95a91f",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I made to write stories. These usually amounted to little more than rambling monologues, incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character details. The trouble with writing by hand is that I'm one of those methodically-slow readers, and my handwriting tends toward illegibility. If writing is rewriting, and rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my laptop, where the limitations of paper gave way to the opposite problem: what writing app to choose?",
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
            "plain_text": "There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I made to write stories. These usually amounted to little more than rambling monologues, incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character details. The trouble with writing by hand is that I'm one of those methodically-slow readers, and my handwriting tends toward illegibility. If writing is rewriting, and rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my laptop, where the limitations of paper gave way to the opposite problem: what writing app to choose?",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "68bb5202-c0d0-4f81-9ec1-3f39707d4b1b",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what size, and whether Low Sodium is the better- or worse option.",
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
            "plain_text": "My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what size, and whether Low Sodium is the better- or worse option.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "59c7d592-5355-4e15-b446-f5cc71788a80",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "First there was Scrivener.",
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
            "plain_text": "First there was Scrivener.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "a3ecce14-e9a8-43db-9e0f-71d2b2986e21",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Then there was Ulysses.",
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
            "plain_text": "Then there was Ulysses.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "c2922b1f-e482-417f-a057-2605f464aafa",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "And now, finally — after various flirtations and even repeat dalliances with the likes of Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even ",
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
            "plain_text": "And now, finally — after various flirtations and even repeat dalliances with the likes of Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "DevonThink",
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
            "plain_text": "DevonThink",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", for Pete's sake! — I have settled on Notion as ",
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
            "plain_text": ", for Pete's sake! — I have settled on Notion as ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "the Thing That Least Often Feels Torturous",
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
            "plain_text": "the Thing That Least Often Feels Torturous",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ". (Mind you, this is for prose. For source, I usually turn to VS Code.)",
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
            "plain_text": ". (Mind you, this is for prose. For source, I usually turn to VS Code.)",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "60174c6f-7970-47a1-b9ff-d9cd03cf1eca",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "In case you weren't counting, that's over six years of ",
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
            "plain_text": "In case you weren't counting, that's over six years of ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "pausing on the bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on the edge of the tub, shower paused, spitting out solutions to the various problems one gives oneself when inventing characters and events and physics from scratch. Over ",
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
            "plain_text": "pausing on the bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on the edge of the tub, shower paused, spitting out solutions to the various problems one gives oneself when inventing characters and events and physics from scratch. Over ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "half a decade",
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
            "plain_text": "half a decade",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " of world-building notes that describe, in chaotic fits and starts, the future of our planet, from roughly yesterday until roughly 20,000 lifetimes hence.",
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
            "plain_text": " of world-building notes that describe, in chaotic fits and starts, the future of our planet, from roughly yesterday until roughly 20,000 lifetimes hence.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "5a1604fd-67ae-48a3-ac05-fd204b262e22",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings, and ",
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
            "plain_text": "How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings, and ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "Eureka!",
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
            "plain_text": "Eureka!",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " moments, transform them into a coherent story? More specifically, how to do this before running out of money and dying on the streets? In a world devoted to distraction, in a body that's already managed to reject its own colon (!), how can I transition to writing loads of shite that no one should ever read to writing loads of gems so enticing they make readers ache to shower me with bitcoin?",
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
            "plain_text": " moments, transform them into a coherent story? More specifically, how to do this before running out of money and dying on the streets? In a world devoted to distraction, in a body that's already managed to reject its own colon (!), how can I transition to writing loads of shite that no one should ever read to writing loads of gems so enticing they make readers ache to shower me with bitcoin?",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "3d9c8874-cf1e-49ef-8162-c8d0089881eb",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "2021",
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
            "plain_text": "2021",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "6f764b58-c0db-4f07-aea2-68b945b92a0f",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "The problem with knowing how to code is…you get ",
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
            "plain_text": "The problem with knowing how to code is…you get ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "ideas",
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
            "plain_text": "ideas",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ". You read a bit of ",
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
            "plain_text": ". You read a bit of ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "Butterick",
              "link": {
                "url": "https://docs.racket-lang.org/pollen/"
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
            "plain_text": "Butterick",
            "href": "https://docs.racket-lang.org/pollen/"
          },
          {
            "type": "text",
            "text": {
              "content": ", and suddenly you can't shake the idea — arrogant, foolhardy — that your book is ",
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
            "plain_text": ", and suddenly you can't shake the idea — arrogant, foolhardy — that your book is ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "alive…",
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
            "plain_text": "alive…",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "too alive for the confines of Medium or ePub. But still, most of the text will be simple prose, so, for the most part, a simple export from Notion should suffice for most of what you publish.",
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
            "plain_text": "too alive for the confines of Medium or ePub. But still, most of the text will be simple prose, so, for the most part, a simple export from Notion should suffice for most of what you publish.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "add2eba6-ef41-422e-9047-657671ae8461",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "You want a platform that's free of arbitrary constraints. It must work on anyone's device. You want to be able to customize the output for print, just in case you manage to Andy Weir your way into the bizarro world of tree-pulp publishing. You want the option of toggling the swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your characters and (with any luck) your community.",
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
            "plain_text": "You want a platform that's free of arbitrary constraints. It must work on anyone's device. You want to be able to customize the output for print, just in case you manage to Andy Weir your way into the bizarro world of tree-pulp publishing. You want the option of toggling the swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your characters and (with any luck) your community.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "34ade714-2f53-403f-bce8-a5abc7e027ee",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "You want future-proof tech that can scale gracefully. It should work on as many devices as possible, without incurring high maintenance or design costs. One person should be able to keep it running without ever worrying that the entire edifice will crumble like a 12-story house of cards assembled without hot glue.",
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
            "plain_text": "You want future-proof tech that can scale gracefully. It should work on as many devices as possible, without incurring high maintenance or design costs. One person should be able to keep it running without ever worrying that the entire edifice will crumble like a 12-story house of cards assembled without hot glue.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "adf5a2eb-f566-40df-92b6-10abd8df481f",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can make ",
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
            "plain_text": "What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can make ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "cool things",
              "link": {
                "url": "https://fngrng.navelgazer.club/"
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
            "plain_text": "cool things",
            "href": "https://fngrng.navelgazer.club/"
          },
          {
            "type": "text",
            "text": {
              "content": " with you, even though my college degree was in theater!",
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
            "plain_text": " with you, even though my college degree was in theater!",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "cb47f5f2-e242-48e6-9893-e20a5d160685",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": []
      }
    },
    {
      "object": "block",
      "id": "8a7a23bf-e142-4cc9-926f-6b88065f8ea3",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "So that's the background that you never wanted to know in the first place. I wanted a No Code",
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
            "plain_text": "So that's the background that you never wanted to know in the first place. I wanted a No Code",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "†",
              "link": null
            },
            "annotations": {
              "bold": true,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "blue"
            },
            "plain_text": "†",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " workflow with Notion as the primary (but by no means exclusive!) source, and the good old WWW as the destination, with no built-in fences between me and potential readers (other than the ubiquitous barrier of natural obscurity), and, I ",
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
            "plain_text": " workflow with Notion as the primary (but by no means exclusive!) source, and the good old WWW as the destination, with no built-in fences between me and potential readers (other than the ubiquitous barrier of natural obscurity), and, I ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "think",
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
            "plain_text": "think",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ", I've found it! ",
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
            "plain_text": ", I've found it! ",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "5d8a1079-78d4-49f1-a9c4-ec3ad4ff8680",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "To learn more about how notion2svelte works, explore the pages below. You might want to start with ",
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
            "plain_text": "To learn more about how notion2svelte works, explore the pages below. You might want to start with ",
            "href": null
          },
          {
            "type": "mention",
            "mention": {
              "type": "page",
              "page": {
                "id": "8719f802-5098-40a6-b273-90c58f147f0a"
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
            "plain_text": "Untitled",
            "href": "https://www.notion.so/8719f802509840a6b27390c58f147f0a"
          },
          {
            "type": "text",
            "text": {
              "content": ", ",
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
            "plain_text": ", ",
            "href": null
          },
          {
            "type": "mention",
            "mention": {
              "type": "page",
              "page": {
                "id": "729b8b1e-7b6a-4bed-852f-85e9d0e343e1"
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
            "plain_text": "Untitled",
            "href": "https://www.notion.so/729b8b1e7b6a4bed852f85e9d0e343e1"
          },
          {
            "type": "text",
            "text": {
              "content": ", or perhaps ",
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
            "plain_text": ", or perhaps ",
            "href": null
          },
          {
            "type": "mention",
            "mention": {
              "type": "page",
              "page": {
                "id": "166c0029-be6a-4c7b-9011-5d5325424344"
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
            "plain_text": "Untitled",
            "href": "https://www.notion.so/166c0029be6a4c7b90115d5325424344"
          },
          {
            "type": "text",
            "text": {
              "content": " .",
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
            "plain_text": " .",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "5ed3f9ed-1cd1-4ad4-a0d3-0b30cd7c98e9",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": []
      },
      "blocks": [
        {
          "object": "block",
          "id": "e18be092-f84f-44b0-8975-3bd6768ef68e",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "†",
                  "link": null
                },
                "annotations": {
                  "bold": true,
                  "italic": false,
                  "strikethrough": false,
                  "underline": false,
                  "code": false,
                  "color": "blue"
                },
                "plain_text": "†",
                "href": null
              },
              {
                "type": "text",
                "text": {
                  "content": "Well…no code, aside from the occasional creation of new components",
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
                "plain_text": "Well…no code, aside from the occasional creation of new components",
                "href": null
              }
            ]
          }
        }
      ]
    }
  ]
}}><Toggle>The Long Story
<span slot="children"><Header level="3">A Novel Idea</Header>
<Paragraph>
፠ 2015 ፠
</Paragraph>
<Paragraph>
I made the mistake of saying, "Hey, this would make a good novel!" out loud. It was Saturday morning on a tropical island with family, on vacation from my gray job in a gray building developing endless prototypes for gray people at a gray company. A few of us had broken away from the herd in order to enjoy a quiet breakfast at a tiny restaurant with a staff of one: a wide, avuncular woman in her 50s whose friendly service was well-matched by her cooking.
</Paragraph>
<Paragraph>
I could not tell you what was on my mind in the moments before The Muse slapped its sticker on me and whispered: “You are now a writer, and, if you don’t stop, perhaps, one day, an&nbsp;<em>author!</em>” A few minutes earlier, the conversation had stalled in favor a full-bellied silence. My sister, who had been scrolling through something on her phone, finally gave the screen several taps and then placed the small slab face down on the table with an approving nod. She’s just skimmed (she explained) a blog post — presented to her by Facebook’s feed algorithm (I realized) — with a tip for managing ADHD which she thought might work well with her son.
</Paragraph>
<Paragraph>
The question arrived, as all thoughts do, unbidden, as if carried into my skull by the cool mid-morning breeze:&nbsp;<em>At what point are we, as parents, mere vehicles for the technology that's raising our children?</em>&nbsp;Sure, the advice had, in thisninstance, come from a post written by an Actual Person™, but it wasn't hard to imagine the FitBit craze extending ever-downward in age. What would be next? Sensors placed in little fleece caps chin-strapped to infant heads, with insights into the speechless infants’ experience wirelessly-delivered to caregivers and IoT cribs?
</Paragraph>
<Quote>This brain is expressing hunger</Quote><Quote>This brain is expressing exhaustion</Quote><Quote>This brain just shit itself</Quote><Paragraph>
And if the skull caps succeed, what next?
</Paragraph>
<Divider />
<Header level="3">Options Paralysis</Header>
<Paragraph>
I'd arrived at breakfast lightly stoned as usual, and on the walk home, the warm sun and the cool leaves of our surroundings combined with a satisfied stomach to produce in me a rare and intense optimism. Now that I had a core question, I could write a novel. Right? I mean…why the hell not? By the time we got back to the hotel, my fingers were itching with fictions.&nbsp;
</Paragraph>
<Paragraph>
There's probably a Moleskine notebook or two hiding on my shelf with the first attempts I made to write stories. These usually amounted to little more than rambling monologues, incomplete exchanges of dialog, and stakes-in-the-ground related to plot and character details. The trouble with writing by hand is that I'm one of those methodically-slow readers, and my handwriting tends toward illegibility. If writing is rewriting, and rewriting means rereading, the Moleskine's weren't going to cut it. I soon migrated to my laptop, where the limitations of paper gave way to the opposite problem: what writing app to choose?
</Paragraph>
<Paragraph>
My friend C.G. describes this as Options Paralysis: the 10 minutes you spend staring at canned tomatoes, trying to remember whether you needed chopped, diced, or crushed, in what size, and whether Low Sodium is the better- or worse option.
</Paragraph>
<Paragraph>
First there was Scrivener.
</Paragraph>
<Paragraph>
Then there was Ulysses.
</Paragraph>
<Paragraph>
And now, finally — after various flirtations and even repeat dalliances with the likes of Evernote, Bear, plain Markdown, Pollen, Roam, and Obsidian…even&nbsp;<em>DevonThink</em>, for Pete's sake! — I have settled on Notion as&nbsp;<em>the Thing That Least Often Feels Torturous</em>. (Mind you, this is for prose. For source, I usually turn to VS Code.)
</Paragraph>
<Paragraph>
<strong>In case you weren't counting, that's over six years of&nbsp;</strong>pausing on the bike ride to work to slam out a few hundred words onto my iPhone, my thumbs sometimes aching from overuse. Six years of quickly jotting down an idea between meetings, or sitting wet on the edge of the tub, shower paused, spitting out solutions to the various problems one gives oneself when inventing characters and events and physics from scratch. Over&nbsp;<em>half a decade</em>&nbsp;of world-building notes that describe, in chaotic fits and starts, the future of our planet, from roughly yesterday until roughly 20,000 lifetimes hence.
</Paragraph>
<Paragraph>
How, then, to collect the best of these confetti scraps of partial dialog, quotes, musings, and&nbsp;<em>Eureka!</em>&nbsp;moments, transform them into a coherent story? More specifically, how to do this before running out of money and dying on the streets? In a world devoted to distraction, in a body that's already managed to reject its own colon (!), how can I transition to writing loads of shite that no one should ever read to writing loads of gems so enticing they make readers ache to shower me with bitcoin?
</Paragraph>
<Paragraph>
2021
</Paragraph>
<Paragraph>
The problem with knowing how to code is…you get&nbsp;<em>ideas</em>. You read a bit of&nbsp;<MagicLink href='https://docs.racket-lang.org/pollen/'>Butterick</MagicLink>, and suddenly you can't shake the idea — arrogant, foolhardy — that your book is&nbsp;<em>alive…</em>too alive for the confines of Medium or ePub. But still, most of the text will be simple prose, so, for the most part, a simple export from Notion should suffice for most of what you publish.
</Paragraph>
<Paragraph>
You want a platform that's free of arbitrary constraints. It must work on anyone's device. You want to be able to customize the output for print, just in case you manage to Andy Weir your way into the bizarro world of tree-pulp publishing. You want the option of toggling the swears, of pay-walling the sex scenes, and no gate keepers telling you what to do with your characters and (with any luck) your community.
</Paragraph>
<Paragraph>
You want future-proof tech that can scale gracefully. It should work on as many devices as possible, without incurring high maintenance or design costs. One person should be able to keep it running without ever worrying that the entire edifice will crumble like a 12-story house of cards assembled without hot glue.
</Paragraph>
<Paragraph>
What technology can accomplish all of this? Oh. Hello HTML and CSS, old frenemies! Hello modern JavaScript! Look how nicely you cleaned up with age! And thanks to Svelte, I can make&nbsp;<MagicLink href='https://fngrng.navelgazer.club/'>cool things</MagicLink>&nbsp;with you, even though my college degree was in theater!
</Paragraph>
<Paragraph>

</Paragraph>
<Paragraph>
So that's the background that you never wanted to know in the first place. I wanted a No Code<InlineColor value='blue'><strong>†</strong></InlineColor>&nbsp;workflow with Notion as the primary (but by no means exclusive!) source, and the good old WWW as the destination, with no built-in fences between me and potential readers (other than the ubiquitous barrier of natural obscurity), and, I&nbsp;<em>think</em>, I've found it!&nbsp;
</Paragraph>
<Paragraph>
To learn more about how notion2svelte works, explore the pages below. You might want to start with&nbsp;<p style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ k(t, url): <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Untitled.</span>&nbsp;No URL provided for Untitled</p>,&nbsp;<p style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ k(t, url): <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Untitled.</span>&nbsp;No URL provided for Untitled</p>, or perhaps&nbsp;<p style="display: inline-block; background: floralwhite; padding: 1rem; margin: 0.25rem 0; border: 1px fuchsia solid; border-radius: 6px; ">⚠️ k(t, url): <span style="font-weight: 600; display: inline; padding: 3px; border-radius: 3px;">Untitled.</span>&nbsp;No URL provided for Untitled</p>&nbsp;.
</Paragraph>
<Paragraph>

</Paragraph>
<IndentGroup>
  <Paragraph>
<InlineColor value='blue'><strong>†</strong></InlineColor><InlineColor value='blue'>Well…no code, aside from the occasional creation of new components</InlineColor>
</Paragraph>

</IndentGroup>
</span></Toggle></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "cf2d44ae-2b9a-4589-8007-df93a1241c30",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "toggle",
  "toggle": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "The Short Version",
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
        "plain_text": "The Short Version",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "672b7028-51da-43af-8ec2-4ac64c925851",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "I like ",
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
            "plain_text": "I like ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "writing in Notion",
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
            "plain_text": "writing in Notion",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ". I like ",
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
            "plain_text": ". I like ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "coding in Svelte",
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
            "plain_text": "coding in Svelte",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": ". I like the ",
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
            "plain_text": ". I like the ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "safety of git",
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
            "plain_text": "safety of git",
            "href": null
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
      "id": "9cf662f3-1081-4a67-9734-c2c117512dcf",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "That, in a nutshell, is what got me started on ",
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
            "plain_text": "That, in a nutshell, is what got me started on ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "notion2svelte.",
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
            "plain_text": "notion2svelte.",
            "href": null
          }
        ]
      }
    }
  ]
}}><Toggle>The Short Version
<span slot="children"><Paragraph>
I like&nbsp;<strong>writing in Notion</strong>. I like&nbsp;<strong>coding in Svelte</strong>. I like the&nbsp;<strong>safety of git</strong>.
</Paragraph>
<Paragraph>
That, in a nutshell, is what got me started on&nbsp;<em>notion2svelte.</em>
</Paragraph>
</span></Toggle></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "c6da2a97-49e1-4c31-b415-ac85e8e51757",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "It’s not the best project out there, but it’s the only one that does what I want, namely:",
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
        "plain_text": "It’s not the best project out there, but it’s the only one that does what I want, namely:",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "3c1e2adf-9ef0-48ee-b7be-0aeb4ee14f38",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Store intermediary artifacts to-disk",
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
            "plain_text": "Store intermediary artifacts to-disk",
            "href": null
          }
        ]
      },
      "blocks": [
        {
          "object": "block",
          "id": "1d27cc2e-27aa-4e3f-83b2-07db58071715",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Benefits",
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
                "plain_text": "Benefits",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "c74a0e6b-2256-4c09-97e7-af5d30620cf1",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "My content is safely stored in git",
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
                "plain_text": "My content is safely stored in git",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "319e60c3-3252-41ae-8584-94a40b1ecd17",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": true,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "I can access the full, raw JSON for every page from within my app, allowing me to add interactivity that Notion doesn’t allow.",
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
                "plain_text": "I can access the full, raw JSON for every page from within my app, allowing me to add interactivity that Notion doesn’t allow.",
                "href": null
              }
            ]
          },
          "blocks": [
            {
              "object": "block",
              "id": "bc0e4941-24ea-48fa-abc8-ef1774885b7d",
              "created_time": "2022-01-04T05:41:00.000Z",
              "last_edited_time": "2022-01-04T05:41:00.000Z",
              "has_children": true,
              "archived": false,
              "type": "toggle",
              "toggle": {
                "text": [
                  {
                    "type": "text",
                    "text": {
                      "content": "Example",
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
                    "plain_text": "Example",
                    "href": null
                  }
                ]
              },
              "blocks": [
                {
                  "object": "block",
                  "id": "5eb9a5e9-87f9-4612-91a1-dd4034e87974",
                  "created_time": "2022-01-04T05:41:00.000Z",
                  "last_edited_time": "2022-01-04T05:41:00.000Z",
                  "has_children": true,
                  "archived": false,
                  "type": "paragraph",
                  "paragraph": {
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "Press the ",
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
                        "plain_text": "Press the ",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": "I",
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
                        "plain_text": "I",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " key to toggle Inspection Mode on this page, then hover over various blocks. For instance, here’s a screenshot from me hovering over the title above after enabling Inspection Mode.",
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
                        "plain_text": " key to toggle Inspection Mode on this page, then hover over various blocks. For instance, here’s a screenshot from me hovering over the title above after enabling Inspection Mode.",
                        "href": null
                      }
                    ]
                  },
                  "blocks": [
                    {
                      "object": "block",
                      "id": "1b947316-8dfe-4e34-a088-40a6d00295d8",
                      "created_time": "2022-01-04T05:41:00.000Z",
                      "last_edited_time": "2022-01-04T05:41:00.000Z",
                      "has_children": false,
                      "archived": false,
                      "type": "image",
                      "image": {
                        "caption": [
                          {
                            "type": "text",
                            "text": {
                              "content": "Inspection Mode is ",
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
                            "plain_text": "Inspection Mode is ",
                            "href": null
                          },
                          {
                            "type": "text",
                            "text": {
                              "content": "not",
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
                            "plain_text": "not",
                            "href": null
                          },
                          {
                            "type": "text",
                            "text": {
                              "content": " a feature of ",
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
                            "plain_text": " a feature of ",
                            "href": null
                          },
                          {
                            "type": "text",
                            "text": {
                              "content": "notion2svelte.",
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
                            "plain_text": "notion2svelte.",
                            "href": null
                          },
                          {
                            "type": "text",
                            "text": {
                              "content": " Rather, ",
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
                            "plain_text": " Rather, ",
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
                              "content": "enables",
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
                            "plain_text": "enables",
                            "href": null
                          },
                          {
                            "type": "text",
                            "text": {
                              "content": " this sort of thing by wrapping every component in a &lt;Magic> component.",
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
                            "plain_text": " this sort of thing by wrapping every component in a &lt;Magic> component.",
                            "href": null
                          }
                        ],
                        "type": "file",
                        "file": {
                          "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b988249d-299a-468a-bb3a-74ea305240d5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=47bffee99c464a8673f81c078c7a1af2c651a412f1c484c6c5668fd4bee39e21&X-Amz-SignedHeaders=host&x-id=GetObject",
                          "expiry_time": "2022-01-04T07:05:31.954Z"
                        }
                      }
                    }
                  ]
                },
                {
                  "object": "block",
                  "id": "6be13dbc-5d36-4755-9ca3-a3cfc6756890",
                  "created_time": "2022-01-04T05:41:00.000Z",
                  "last_edited_time": "2022-01-04T05:41:00.000Z",
                  "has_children": false,
                  "archived": false,
                  "type": "paragraph",
                  "paragraph": {
                    "text": [
                      {
                        "type": "text",
                        "text": {
                          "content": "(",
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
                        "plain_text": "(",
                        "href": null
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": "Pester me",
                          "link": {
                            "url": "https://github.com/nvlgzr/notion2svelte/issues"
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
                        "plain_text": "Pester me",
                        "href": "https://github.com/nvlgzr/notion2svelte/issues"
                      },
                      {
                        "type": "text",
                        "text": {
                          "content": " if you are reading this and I still haven’t gotten around to documenting the whole &lt;Magic> thing!)",
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
                        "plain_text": " if you are reading this and I still haven’t gotten around to documenting the whole &lt;Magic> thing!)",
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
    },
    {
      "object": "block",
      "id": "49a19b63-89dc-4e53-bb9d-25b0459b3eea",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Command-line tool, rather than runtime ",
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
            "plain_text": "Command-line tool, rather than runtime ",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": "npm",
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
            "plain_text": "npm",
            "href": null
          },
          {
            "type": "text",
            "text": {
              "content": " package",
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
            "plain_text": " package",
            "href": null
          }
        ]
      },
      "blocks": [
        {
          "object": "block",
          "id": "d4e88d63-3dc1-4cc3-88a6-cd7b458d5d57",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Benefits",
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
                "plain_text": "Benefits",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "cc223c4a-6dee-4109-ae3a-89d3a1557e48",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "100% decoupled tooling: want to “eject” from ",
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
                "plain_text": "100% decoupled tooling: want to “eject” from ",
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
                  "content": "? No problem. Just stop using it. From the perspective of your Svelte app, the pages created by ",
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
                "plain_text": "? No problem. Just stop using it. From the perspective of your Svelte app, the pages created by ",
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
                  "content": " are no different than pages you code yourself",
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
                "plain_text": " are no different than pages you code yourself",
                "href": null
              }
            ]
          }
        }
      ]
    },
    {
      "object": "block",
      "id": "0f1500da-139c-4945-aecf-c61b513240c5",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": true,
      "archived": false,
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Write-your-own components",
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
            "plain_text": "Write-your-own components",
            "href": null
          }
        ]
      },
      "blocks": [
        {
          "object": "block",
          "id": "ae3d0991-13ba-47bc-b6d7-f8533b34f78b",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "paragraph",
          "paragraph": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Benefits",
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
                "plain_text": "Benefits",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "a441d1df-8a49-4b91-bf60-62ca6d72e095",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Avoids constraining your creativity",
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
                "plain_text": "Avoids constraining your creativity",
                "href": null
              }
            ]
          }
        },
        {
          "object": "block",
          "id": "09271b1a-91c1-422d-af48-75e9114aea99",
          "created_time": "2022-01-04T05:41:00.000Z",
          "last_edited_time": "2022-01-04T05:41:00.000Z",
          "has_children": false,
          "archived": false,
          "type": "bulleted_list_item",
          "bulleted_list_item": {
            "text": [
              {
                "type": "text",
                "text": {
                  "content": "Keeps ",
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
                "plain_text": "Keeps ",
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
                  "content": " simple",
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
                "plain_text": " simple",
                "href": null
              }
            ]
          }
        }
      ]
    }
  ]
}}><Paragraph>
It’s not the best project out there, but it’s the only one that does what I want, namely:
</Paragraph>
<IndentGroup>
  <BulletedListItem>Store intermediary artifacts to-disk</BulletedListItem>
<IndentGroup>
  <Paragraph>
<em>Benefits</em>
</Paragraph>
<BulletedListItem>My content is safely stored in git</BulletedListItem>
<BulletedListItem>I can access the full, raw JSON for every page from within my app, allowing me to add interactivity that Notion doesn’t allow.</BulletedListItem>
<IndentGroup>
  <Toggle><InlineColor value='gray'>Example</InlineColor>
<span slot="children"><Paragraph>
Press the&nbsp;<InlineCode code="I" />&nbsp;key to toggle Inspection Mode on this page, then hover over various blocks. For instance, here’s a screenshot from me hovering over the title above after enabling Inspection Mode.
</Paragraph>
<IndentGroup>
  <Image url="/assets/about-notion2svelte/1b947316-8dfe-4e34-a088-40a6d00295d8.png">Inspection Mode is&nbsp;<em>not</em>&nbsp;a feature of&nbsp;<em>notion2svelte.</em>&nbsp;Rather,&nbsp;<em>notion2svelte</em>&nbsp;<em>enables</em>&nbsp;this sort of thing by wrapping every component in a &lt;Magic> component.</Image>

</IndentGroup>
<Paragraph>
(<MagicLink href='https://github.com/nvlgzr/notion2svelte/issues'>Pester me</MagicLink>&nbsp;if you are reading this and I still haven’t gotten around to documenting the whole &lt;Magic> thing!)
</Paragraph>
</span></Toggle>
</IndentGroup>

</IndentGroup>
<BulletedListItem>Command-line tool, rather than runtime&nbsp;<em>npm</em>&nbsp;package</BulletedListItem>
<IndentGroup>
  <Paragraph>
<em>Benefits</em>
</Paragraph>
<BulletedListItem>100% decoupled tooling: want to “eject” from&nbsp;<em>notion2svelte</em>? No problem. Just stop using it. From the perspective of your Svelte app, the pages created by&nbsp;<em>notion2svelte</em>&nbsp;are no different than pages you code yourself</BulletedListItem>

</IndentGroup>
<BulletedListItem>Write-your-own components</BulletedListItem>
<IndentGroup>
  <Paragraph>
<em>Benefits</em>
</Paragraph>
<BulletedListItem>Avoids constraining your creativity</BulletedListItem>
<BulletedListItem>Keeps&nbsp;<em>notion2svelte</em>&nbsp;simple</BulletedListItem>

</IndentGroup>

</IndentGroup>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "bf957266-9821-4fb5-bf5b-80d0534b6f59",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "divider",
  "divider": {}
}}><Divider />
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "91adaa08-fc21-4f3d-b0ef-2b22cf231f5b",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_1",
  "heading_1": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "How it works, oversimplified",
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
        "plain_text": "How it works, oversimplified",
        "href": null
      }
    ]
  }
}}><Header level="1">How it works, oversimplified</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "4c85cc84-2fc3-41a0-a13c-39dc148c29b6",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Everything you see on this page was written in Notion, exported as .svelte files wherever you want (e.g.,  ",
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
        "plain_text": "Everything you see on this page was written in Notion, exported as .svelte files wherever you want (e.g.,  ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "src/routes/pages/<slug>.svelte",
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
        "plain_text": "src/routes/pages/<slug>.svelte",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " ) using ",
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
        "plain_text": " ) using ",
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
          "content": ", then published normally using Svelte Kit.",
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
        "plain_text": ", then published normally using Svelte Kit.",
        "href": null
      }
    ]
  }
}}><Paragraph>
Everything you see on this page was written in Notion, exported as .svelte files wherever you want (e.g., &nbsp;<InlineCode code="src/routes/pages/&lt;slug&gt;.svelte" />&nbsp;) using&nbsp;<em>notion2svelte</em>, then published normally using Svelte Kit.
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "5736ed02-5138-4dad-ab64-b5f2a76d8fac",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [
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
          "content": ", grossly over-simplified",
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
        "plain_text": ", grossly over-simplified",
        "href": null
      }
    ],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/065b59a4-70ad-47f7-8157-f76790c60cc4/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=79b5146f837ea592eeb09b70cd6dd6fc3bcf796dd1e1f1ad9020a8f7a4ad1f33&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:30.996Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/5736ed02-5138-4dad-ab64-b5f2a76d8fac.png"><em>notion2svelte</em>, grossly over-simplified</Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "9894d662-f6c5-47f5-b3c1-5a03069a986d",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "After that, what you do with the results is up to you. Let’s use a simple callout as an example.",
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
        "plain_text": "After that, what you do with the results is up to you. Let’s use a simple callout as an example.",
        "href": null
      }
    ]
  }
}}><Paragraph>
After that, what you do with the results is up to you. Let’s use a simple callout as an example.
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "67cdeb5a-5337-47d1-87b4-b2b0c7410054",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "callout",
  "callout": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Hi. I’m a sea otter.",
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
        "plain_text": "Hi. I’m a sea otter.",
        "href": null
      }
    ],
    "icon": {
      "type": "emoji",
      "emoji": "🦦"
    }
  }
}}><Callout emoji="🦦">Hi. I’m a sea otter.</Callout></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "8bc9913f-ab33-4d43-905f-015d53c10840",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "The Notion API renders the above callout thus:",
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
        "plain_text": "The Notion API renders the above callout thus:",
        "href": null
      }
    ]
  }
}}><Paragraph>
The Notion API renders the above callout thus:
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "f662c215-d59c-45d9-a778-3bcc82725b83",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "code",
  "code": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "{\n  \"object\": \"block\",\n  \"id\": \"011d46be-4bf6-4817-a0da-a849ec16f1aa\",\n  \"created_time\": \"2021-12-20T10:00:00.000Z\",\n  \"last_edited_time\": \"2021-12-20T10:04:00.000Z\",\n  \"has_children\": false,\n  \"archived\": false,\n  \"type\": \"callout\",\n  \"callout\": {\n    \"text\": [\n      {\n        \"type\": \"text\",\n        \"text\": {\n          \"content\": \"Hi. I’m a sea otter.\",\n          \"link\": null\n        },\n        \"annotations\": {\n          \"bold\": false,\n          \"italic\": false,\n          \"strikethrough\": false,\n          \"underline\": false,\n          \"code\": false,\n          \"color\": \"default\"\n        },\n        \"plain_text\": \"Hi. I’m a sea otter.\",\n        \"href\": null\n      }\n    ],\n    \"icon\": {\n      \"type\": \"emoji\",\n      \"emoji\": \"🦦\"\n    }\n  }\n}",
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
        "plain_text": "{\n  \"object\": \"block\",\n  \"id\": \"011d46be-4bf6-4817-a0da-a849ec16f1aa\",\n  \"created_time\": \"2021-12-20T10:00:00.000Z\",\n  \"last_edited_time\": \"2021-12-20T10:04:00.000Z\",\n  \"has_children\": false,\n  \"archived\": false,\n  \"type\": \"callout\",\n  \"callout\": {\n    \"text\": [\n      {\n        \"type\": \"text\",\n        \"text\": {\n          \"content\": \"Hi. I’m a sea otter.\",\n          \"link\": null\n        },\n        \"annotations\": {\n          \"bold\": false,\n          \"italic\": false,\n          \"strikethrough\": false,\n          \"underline\": false,\n          \"code\": false,\n          \"color\": \"default\"\n        },\n        \"plain_text\": \"Hi. I’m a sea otter.\",\n        \"href\": null\n      }\n    ],\n    \"icon\": {\n      \"type\": \"emoji\",\n      \"emoji\": \"🦦\"\n    }\n  }\n}",
        "href": null
      }
    ],
    "language": "json"
  }
}}><Code code={`{
  "object": "block",
  "id": "011d46be-4bf6-4817-a0da-a849ec16f1aa",
  "created_time": "2021-12-20T10:00:00.000Z",
  "last_edited_time": "2021-12-20T10:04:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "callout",
  "callout": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Hi. I’m a sea otter.",
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
        "plain_text": "Hi. I’m a sea otter.",
        "href": null
      }
    ],
    "icon": {
      "type": "emoji",
      "emoji": "🦦"
    }
  }
}`} language="json" /></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "08cb0f53-4846-40df-aaeb-6bc6b9f01399",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Obviously, most of this is just noise. What we mainly care about — given that we haven’t used ",
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
        "plain_text": "Obviously, most of this is just noise. What we mainly care about — given that we haven’t used ",
        "href": null
      },
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
          "content": ", ",
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
        "plain_text": ", ",
        "href": null
      },
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
          "content": ", etc. within the callout — is the emoji, the content, and the fact that this is a callout.",
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
        "plain_text": ", etc. within the callout — is the emoji, the content, and the fact that this is a callout.",
        "href": null
      }
    ]
  }
}}><Paragraph>
Obviously, most of this is just noise. What we mainly care about — given that we haven’t used&nbsp;<strong>bold</strong>,&nbsp;<em>italic</em>, etc. within the callout — is the emoji, the content, and the fact that this is a callout.
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "4a1f1e4c-ff1c-4f40-993d-4d868b086a23",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "code",
  "code": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "<Callout emoji=\"🦦\">Hi. I’m a sea otter.</Callout>",
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
        "plain_text": "<Callout emoji=\"🦦\">Hi. I’m a sea otter.</Callout>",
        "href": null
      }
    ],
    "language": "html"
  }
}}><Code code={`<Callout emoji="🦦">Hi. I’m a sea otter.</Callout>`} language="html" /></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "10395dbd-8fb6-4f92-aaab-353ff1f1cd44",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Ahhh! That’s better, right?",
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
        "plain_text": "Ahhh! That’s better, right?",
        "href": null
      }
    ]
  }
}}><Paragraph>
Ahhh! That’s better, right?
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "f118e391-e5eb-40b0-9e2f-180ab13b8f32",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "After this point, it’s basically up to you! Do you want a simple, gray callout with minimal styling, like this:",
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
        "plain_text": "After this point, it’s basically up to you! Do you want a simple, gray callout with minimal styling, like this:",
        "href": null
      }
    ]
  }
}}><Paragraph>
After this point, it’s basically up to you! Do you want a simple, gray callout with minimal styling, like this:
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "d1e9674e-cc3c-4262-931a-a3ec737ce29f",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/33438354-07db-4d95-9f36-369c915c7236/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=36ace3c988ceb32e22fec2c2696d1e35f8a6e05fa09440effd74b7c3c599b3be&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:31.007Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/d1e9674e-cc3c-4262-931a-a3ec737ce29f.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "0eeef2da-136f-4afe-bdd6-f807288bc806",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "toggle",
  "toggle": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Code for ",
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
        "plain_text": "Code for ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "Callout.svelte",
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
        "plain_text": "Callout.svelte",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " (gray version)",
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
        "plain_text": " (gray version)",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "287b47bb-124b-48e8-a0b6-a624506ec1cd",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "<script>\n\texport let emoji = '';\n</script>\n\n<div class=\"wrapper\">\n\t<div class=\"emoji\">{emoji}</div>\n\t<div class=\"text\">\n\t\t<div class=\"callout\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<slot name=\"children\" />\n\t</div>\n</div>\n\n<style>\n\t.wrapper {\n\t\tbackground-color: white;\n\t\tborder: 1px solid #333;\n\t\tmargin: 1rem;\n\t\tpadding: 1rem;\n\t\tborder-radius: 0.5rem;\n\t}\n\n\t.emoji {\n\t\tfont-size: 2rem;\n\t}\n</style>",
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
            "plain_text": "<script>\n\texport let emoji = '';\n</script>\n\n<div class=\"wrapper\">\n\t<div class=\"emoji\">{emoji}</div>\n\t<div class=\"text\">\n\t\t<div class=\"callout\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<slot name=\"children\" />\n\t</div>\n</div>\n\n<style>\n\t.wrapper {\n\t\tbackground-color: white;\n\t\tborder: 1px solid #333;\n\t\tmargin: 1rem;\n\t\tpadding: 1rem;\n\t\tborder-radius: 0.5rem;\n\t}\n\n\t.emoji {\n\t\tfont-size: 2rem;\n\t}\n</style>",
            "href": null
          }
        ],
        "language": "html"
      }
    },
    {
      "object": "block",
      "id": "ccdaf1ac-0ff8-48f6-b30d-50b77ce28489",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": []
      }
    }
  ]
}}><Toggle>Code for&nbsp;<em>Callout.svelte</em>&nbsp;(gray version)
<span slot="children"><Code code={`<script>
	export let emoji = '';
</script>

<div class="wrapper">
	<div class="emoji">{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style>
	.wrapper {
		background-color: white;
		border: 1px solid #333;
		margin: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.emoji {
		font-size: 2rem;
	}
</style>`} language="html" /><Paragraph>

</Paragraph>
</span></Toggle></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "15660a60-34ff-41c8-a2b1-96c262f3b2c1",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Or you might do something more colorful. Here’s the code (as of this writing) for this documentation’s ",
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
        "plain_text": "Or you might do something more colorful. Here’s the code (as of this writing) for this documentation’s ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "Callout.svelte",
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
        "plain_text": "Callout.svelte",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": ":",
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
        "plain_text": ":",
        "href": null
      }
    ]
  }
}}><Paragraph>
Or you might do something more colorful. Here’s the code (as of this writing) for this documentation’s&nbsp;<em>Callout.svelte</em>:
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "dfe7854d-36fd-452b-9075-64c2727aec5d",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e64b9771-eded-4920-ad4c-dde763e3c61e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=36ae606abc1f50ac02e3646b8e708ddccac15aff3b30e469850f7ad259a67849&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:31.002Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/dfe7854d-36fd-452b-9075-64c2727aec5d.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "bdfb1aad-09f2-4250-bfbd-3ccd7fc05e4b",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "toggle",
  "toggle": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Code for Callout.svelte (blue version)",
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
        "plain_text": "Code for Callout.svelte (blue version)",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "4f638d04-b4ad-4150-a3e7-f1a028741d42",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "<script>\n\texport let emoji = '';\n</script>\n\n<div class=\"wrapper\">\n\t<div class=\"emoji\">{emoji}</div>\n\t<div class=\"text\">\n\t\t<div class=\"callout\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<slot name=\"children\" />\n\t</div>\n</div>\n\n<style>\n\t.wrapper {\n\t\tdisplay: flex;\n\t\tmargin: 1rem 1rem 2rem 0;\n\t\tpadding: 2rem 2rem 0 2rem;\n\t\tfont: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\t\tbackground-color: hsl(198, 100%, 97%);\n\t\tborder: 4px solid hsl(206, 88%, 70%);\n\t\tborder-radius: 0.5rem;\n\t}\n\t.callout {\n\t\tdisplay: block;\n\t}\n\t.emoji {\n\t\tmargin-right: 0.5em;\n\t\theight: 3rem;\n\t\twidth: 3rem;\n\t\tfont-size: 3rem;\n\t\tline-height: 1.1;\n\t}\n</style>",
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
            "plain_text": "<script>\n\texport let emoji = '';\n</script>\n\n<div class=\"wrapper\">\n\t<div class=\"emoji\">{emoji}</div>\n\t<div class=\"text\">\n\t\t<div class=\"callout\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<slot name=\"children\" />\n\t</div>\n</div>\n\n<style>\n\t.wrapper {\n\t\tdisplay: flex;\n\t\tmargin: 1rem 1rem 2rem 0;\n\t\tpadding: 2rem 2rem 0 2rem;\n\t\tfont: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\t\tbackground-color: hsl(198, 100%, 97%);\n\t\tborder: 4px solid hsl(206, 88%, 70%);\n\t\tborder-radius: 0.5rem;\n\t}\n\t.callout {\n\t\tdisplay: block;\n\t}\n\t.emoji {\n\t\tmargin-right: 0.5em;\n\t\theight: 3rem;\n\t\twidth: 3rem;\n\t\tfont-size: 3rem;\n\t\tline-height: 1.1;\n\t}\n</style>",
            "href": null
          }
        ],
        "language": "html"
      }
    },
    {
      "object": "block",
      "id": "a3c6d2fb-0290-4bd5-880d-da0f2ed3e82c",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": []
      }
    }
  ]
}}><Toggle>Code for Callout.svelte (blue version)
<span slot="children"><Code code={`<script>
	export let emoji = '';
</script>

<div class="wrapper">
	<div class="emoji">{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		margin: 1rem 1rem 2rem 0;
		padding: 2rem 2rem 0 2rem;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background-color: hsl(198, 100%, 97%);
		border: 4px solid hsl(206, 88%, 70%);
		border-radius: 0.5rem;
	}
	.callout {
		display: block;
	}
	.emoji {
		margin-right: 0.5em;
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
</style>`} language="html" /><Paragraph>

</Paragraph>
</span></Toggle></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "c6088c1f-d349-48cc-a6bb-a57d6709f233",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Or you could go crazy and have a callout that doubles as a toggle. Wat!? 🙀",
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
        "plain_text": "Or you could go crazy and have a callout that doubles as a toggle. Wat!? 🙀",
        "href": null
      }
    ]
  }
}}><Paragraph>
Or you could go crazy and have a callout that doubles as a toggle. Wat!? 🙀
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "5bcc28d8-6d04-4d8f-bc65-63faf8dec137",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Sure. You can add keyboard interactions, or make callouts behave according to user settings. Anything Svelte allows you to do, you can usually do it!",
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
        "plain_text": "Sure. You can add keyboard interactions, or make callouts behave according to user settings. Anything Svelte allows you to do, you can usually do it!",
        "href": null
      }
    ]
  }
}}><Paragraph>
Sure. You can add keyboard interactions, or make callouts behave according to user settings. Anything Svelte allows you to do, you can usually do it!
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "cbfb764c-a770-44df-9a8e-4a8d1633338f",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ee4dd49-0008-431a-b252-fa767de24a48/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=a34ac153fcb8ac3a341aa6d5468d19fc1c8c06bba5b6d7cfecad338fa5533de2&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:31.000Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/cbfb764c-a770-44df-9a8e-4a8d1633338f.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "82ec11f5-2d18-450a-838e-f0464a893769",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "↓ click! ↓",
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
        "plain_text": "↓ click! ↓",
        "href": null
      }
    ]
  }
}}><Paragraph>
↓ click! ↓
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "a3a05f18-7fee-48a2-93ca-476b50ca061b",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "image",
  "image": {
    "caption": [],
    "type": "file",
    "file": {
      "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7caa9b8-2274-4f09-a4d4-2158783537c7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220104T060531Z&X-Amz-Expires=3600&X-Amz-Signature=050fad8e0e7c4202269c0076affd51b11f3bf25d7d8a510ea15f9042cbf5ac2b&X-Amz-SignedHeaders=host&x-id=GetObject",
      "expiry_time": "2022-01-04T07:05:30.998Z"
    }
  }
}}><Image url="/assets/about-notion2svelte/a3a05f18-7fee-48a2-93ca-476b50ca061b.png"></Image>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "0eebda4d-b485-4c5f-9774-98af022329d2",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": true,
  "archived": false,
  "type": "toggle",
  "toggle": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Code for Callout.svelte (toggle version)",
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
        "plain_text": "Code for Callout.svelte (toggle version)",
        "href": null
      }
    ]
  },
  "blocks": [
    {
      "object": "block",
      "id": "5a630fe0-a711-4ccb-8f66-cb7c014aa58f",
      "created_time": "2022-01-04T05:41:00.000Z",
      "last_edited_time": "2022-01-04T05:41:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "code",
      "code": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "<script>\n\texport let emoji = '';\n\n\texport let open = false;\n</script>\n\n<div class=\"wrapper {open ? 'open' : 'closed'}\" on:click={() => (open = !open)}>\n\t<div class=\"emoji\">{emoji}</div>\n\t{#if open}\n\t\t<div class=\"text\">\n\t\t\t<div class=\"callout\">\n\t\t\t\t<slot />\n\t\t\t</div>\n\t\t\t<slot name=\"children\" />\n\t\t</div>\n\t{:else}\n\t\t<div class=\"text\">⟩</div>\n\t{/if}\n</div>\n\n<style>\n\t.wrapper {\n\t\tdisplay: flex;\n\t\tmargin: 1rem 1rem 2rem 0;\n\t\tpadding: 2rem 2rem 0 2rem;\n\t\tfont: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\t\tbackground-color: hsl(198, 100%, 97%);\n\t\tborder: 4px solid hsl(206, 88%, 70%);\n\t\tborder-radius: 0.5rem;\n\t}\n\n\t.closed {\n\t\twidth: 8rem;\n\t}\n\n\t.callout {\n\t\tdisplay: block;\n\t}\n\n\t.emoji {\n\t\tmargin-right: 0.5em;\n\t\theight: 3rem;\n\t\twidth: 3rem;\n\t\tfont-size: 3rem;\n\t\tline-height: 1.1;\n\t}\n</style>",
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
            "plain_text": "<script>\n\texport let emoji = '';\n\n\texport let open = false;\n</script>\n\n<div class=\"wrapper {open ? 'open' : 'closed'}\" on:click={() => (open = !open)}>\n\t<div class=\"emoji\">{emoji}</div>\n\t{#if open}\n\t\t<div class=\"text\">\n\t\t\t<div class=\"callout\">\n\t\t\t\t<slot />\n\t\t\t</div>\n\t\t\t<slot name=\"children\" />\n\t\t</div>\n\t{:else}\n\t\t<div class=\"text\">⟩</div>\n\t{/if}\n</div>\n\n<style>\n\t.wrapper {\n\t\tdisplay: flex;\n\t\tmargin: 1rem 1rem 2rem 0;\n\t\tpadding: 2rem 2rem 0 2rem;\n\t\tfont: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\t\tbackground-color: hsl(198, 100%, 97%);\n\t\tborder: 4px solid hsl(206, 88%, 70%);\n\t\tborder-radius: 0.5rem;\n\t}\n\n\t.closed {\n\t\twidth: 8rem;\n\t}\n\n\t.callout {\n\t\tdisplay: block;\n\t}\n\n\t.emoji {\n\t\tmargin-right: 0.5em;\n\t\theight: 3rem;\n\t\twidth: 3rem;\n\t\tfont-size: 3rem;\n\t\tline-height: 1.1;\n\t}\n</style>",
            "href": null
          }
        ],
        "language": "html"
      }
    }
  ]
}}><Toggle>Code for Callout.svelte (toggle version)
<span slot="children"><Code code={`<script>
	export let emoji = '';

	export let open = false;
</script>

<div class="wrapper {open ? 'open' : 'closed'}" on:click={() => (open = !open)}>
	<div class="emoji">{emoji}</div>
	{#if open}
		<div class="text">
			<div class="callout">
				<slot />
			</div>
			<slot name="children" />
		</div>
	{:else}
		<div class="text">⟩</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		margin: 1rem 1rem 2rem 0;
		padding: 2rem 2rem 0 2rem;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background-color: hsl(198, 100%, 97%);
		border: 4px solid hsl(206, 88%, 70%);
		border-radius: 0.5rem;
	}

	.closed {
		width: 8rem;
	}

	.callout {
		display: block;
	}

	.emoji {
		margin-right: 0.5em;
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
</style>`} language="html" /></span></Toggle></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "798209c4-0860-43cf-b277-f5578dc20852",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_3",
  "heading_3": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "A word about imports",
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
        "plain_text": "A word about imports",
        "href": null
      }
    ]
  }
}}><Header level="3">A word about imports</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "e3c33145-127f-4365-aa84-c107bba156b4",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "It should go without saying, but your Sveltekit app needs to know where to actually ",
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
        "plain_text": "It should go without saying, but your Sveltekit app needs to know where to actually ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "find",
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
        "plain_text": "find",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " the components that match ",
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
        "plain_text": " the components that match ",
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
          "content": "’s output. At present, this means putting them in ",
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
        "plain_text": "’s output. At present, this means putting them in ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "src/lib/notion2svelte",
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
        "plain_text": "src/lib/notion2svelte",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": ". The reason why becomes apparent when we look at the ",
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
        "plain_text": ". The reason why becomes apparent when we look at the ",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": "import",
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
        "plain_text": "import",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " statements rendered by ",
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
        "plain_text": " statements rendered by ",
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
}}><Paragraph>
It should go without saying, but your Sveltekit app needs to know where to actually&nbsp;<em>find</em>&nbsp;the components that match&nbsp;<em>notion2svelte</em>’s output. At present, this means putting them in&nbsp;<em>src/lib/notion2svelte</em>. The reason why becomes apparent when we look at the&nbsp;<InlineCode code="import" />&nbsp;statements rendered by&nbsp;<em>notion2svelte</em>.
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "4d6501a0-f5ab-4891-a700-c72316996f1d",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Keeping with our Callout theme, here’s the equivalent import statement.",
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
        "plain_text": "Keeping with our Callout theme, here’s the equivalent import statement.",
        "href": null
      }
    ]
  }
}}><Paragraph>
Keeping with our Callout theme, here’s the equivalent import statement.
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "3f6e5fc4-1105-42e2-b76e-30b337c9a932",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "code",
  "code": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "import Callout from '$lib/notion2svelte/Callout.svelte';",
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
        "plain_text": "import Callout from '$lib/notion2svelte/Callout.svelte';",
        "href": null
      }
    ],
    "language": "html"
  }
}}><Code code={`import Callout from '$lib/notion2svelte/Callout.svelte';`} language="html" /></Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "808e5db3-d2fa-4eb0-b7ee-65972ac44499",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "divider",
  "divider": {}
}}><Divider />
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "470c19a1-e892-4b0b-8502-2204abfad367",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_1",
  "heading_1": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "How to use ",
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
        "plain_text": "How to use ",
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
      }
    ]
  }
}}><Header level="1">How to use&nbsp;<em>notion2svelte</em></Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "ebf87bb2-dcde-41a0-a21a-5db8d51e3fa0",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "For now, the fastest way to get started is to follow along with the video tutorial:",
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
        "plain_text": "For now, the fastest way to get started is to follow along with the video tutorial:",
        "href": null
      }
    ]
  }
}}><Paragraph>
For now, the fastest way to get started is to follow along with the video tutorial:
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "c281c1ed-70dc-4702-946b-db824f154315",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "notion2svelte",
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
        "plain_text": "notion2svelte",
        "href": null
      },
      {
        "type": "text",
        "text": {
          "content": " in 10 minutes |",
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
        "plain_text": " in 10 minutes |",
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
          "content": "https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s",
          "link": {
            "url": "https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
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
        "plain_text": "https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s",
        "href": "https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s"
      }
    ]
  }
}}><Paragraph>
<em><strong>notion2svelte</strong></em><strong>&nbsp;in 10 minutes |</strong>&nbsp;<MagicLink href='https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s'>https://www.youtube.com/watch?v=xvV8-R_uUHg&t=12s</MagicLink>
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "dac49a3b-5f46-4619-b5eb-dfd0ef52fe12",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "divider",
  "divider": {}
}}><Divider />
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "54755dc6-5b5a-44c1-a9a1-b0a970808b16",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "heading_1",
  "heading_1": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Where to learn more",
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
        "plain_text": "Where to learn more",
        "href": null
      }
    ]
  }
}}><Header level="1">Where to learn more</Header>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "87b4ae3c-bd99-4b75-81a0-db6ae19f9c3e",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "Find the code, start a discussion, or report an issue on GitHub:",
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
        "plain_text": "Find the code, start a discussion, or report an issue on GitHub:",
        "href": null
      }
    ]
  }
}}><Paragraph>
Find the code, start a discussion, or report an issue on GitHub:
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "f902cb07-1cec-4c3d-8a12-f6ea8236266f",
  "created_time": "2022-01-04T05:41:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": [
      {
        "type": "text",
        "text": {
          "content": "https://github.com/nvlgzr/notion2svelte",
          "link": {
            "url": "https://github.com/nvlgzr/notion2svelte"
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
        "plain_text": "https://github.com/nvlgzr/notion2svelte",
        "href": "https://github.com/nvlgzr/notion2svelte"
      }
    ]
  }
}}><Paragraph>
<MagicLink href='https://github.com/nvlgzr/notion2svelte'>https://github.com/nvlgzr/notion2svelte</MagicLink>
</Paragraph>
</Magic> 
<br style="display:none;"/>
<Magic sourceJSON={{
  "object": "block",
  "id": "ca65bc79-54a9-4394-9bb9-fcc5bf11eec0",
  "created_time": "2022-01-04T05:46:00.000Z",
  "last_edited_time": "2022-01-04T06:03:00.000Z",
  "has_children": false,
  "archived": false,
  "type": "paragraph",
  "paragraph": {
    "text": []
  }
}}><Paragraph>

</Paragraph>
</Magic> 
<br style="display:none;"/>

  