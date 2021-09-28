<svelte:head>
  <title>Image Saving Test</title>
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
  <Title>Image Saving Test</Title>



  <button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by undefined undefined 𒅒</button>

{#if !curtainDrawn }
  <Image url="/images/image-saving/aa2941b1-13b6-4111-bb26-068c7f5065df.jpg" caption="UFO" />

<br style="display:none;"/>
<Image url="/images/image-saving/5bc5c0dc-dbad-4b37-9741-bc18736e0c27.jpg" caption="From unsplash" />

<br style="display:none;"/>
<Image url="/images/image-saving/0e08e06e-8780-460e-a7b0-37f1cf0eeb3a.jpg" caption="cresting orca" />

<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "aa2941b1-13b6-4111-bb26-068c7f5065df",
    "created_time": "2021-09-27T07:09:00.000Z",
    "last_edited_time": "2021-09-27T09:02:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "UFO",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "UFO",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T015959Z&X-Amz-Expires=3600&X-Amz-Signature=3beb70972c35d4ffed64c64aea7404844197e5bcfc829c3b833fe4fe9889102a&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-28T02:59:59.233Z"
      }
    }
  },
  {
    "object": "block",
    "id": "5bc5c0dc-dbad-4b37-9741-bc18736e0c27",
    "created_time": "2021-09-27T09:02:00.000Z",
    "last_edited_time": "2021-09-27T09:02:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "From unsplash",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "From unsplash",
          "href": null
        }
      ],
      "type": "external",
      "external": {
        "url": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
      }
    }
  },
  {
    "object": "block",
    "id": "0e08e06e-8780-460e-a7b0-37f1cf0eeb3a",
    "created_time": "2021-09-27T09:03:00.000Z",
    "last_edited_time": "2021-09-27T09:03:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "cresting orca",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "cresting orca",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c7ef8e9-8eb7-4b76-ab4a-9c859e998a8e/IMG_0741.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T015959Z&X-Amz-Expires=3600&X-Amz-Signature=3b6364ebeb5a414593cfd0adcf41daac21ffc5426bfa9f290d622f089713ba63&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-28T02:59:59.234Z"
      }
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "2000dfbb-5b5a-435c-b32d-9009c7466476",
  "created_time": "2021-09-27T07:09:00.000Z",
  "last_edited_time": "2021-09-27T09:26:00.000Z",
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
            "content": "image-saving",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "image-saving",
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
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "Image Saving Test",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Image Saving Test",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Image-Saving-Test-2000dfbb5b5a435cb32d9009c7466476",
  "blocks": [
    {
      "object": "block",
      "id": "aa2941b1-13b6-4111-bb26-068c7f5065df",
      "created_time": "2021-09-27T07:09:00.000Z",
      "last_edited_time": "2021-09-27T09:02:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "image",
      "image": {
        "caption": [
          {
            "type": "text",
            "text": {
              "content": "UFO",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "UFO",
            "href": null
          }
        ],
        "type": "file",
        "file": {
          "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T015959Z&X-Amz-Expires=3600&X-Amz-Signature=3beb70972c35d4ffed64c64aea7404844197e5bcfc829c3b833fe4fe9889102a&X-Amz-SignedHeaders=host",
          "expiry_time": "2021-09-28T02:59:59.233Z"
        }
      }
    },
    {
      "object": "block",
      "id": "5bc5c0dc-dbad-4b37-9741-bc18736e0c27",
      "created_time": "2021-09-27T09:02:00.000Z",
      "last_edited_time": "2021-09-27T09:02:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "image",
      "image": {
        "caption": [
          {
            "type": "text",
            "text": {
              "content": "From unsplash",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "From unsplash",
            "href": null
          }
        ],
        "type": "external",
        "external": {
          "url": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
        }
      }
    },
    {
      "object": "block",
      "id": "0e08e06e-8780-460e-a7b0-37f1cf0eeb3a",
      "created_time": "2021-09-27T09:03:00.000Z",
      "last_edited_time": "2021-09-27T09:03:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "image",
      "image": {
        "caption": [
          {
            "type": "text",
            "text": {
              "content": "cresting orca",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "cresting orca",
            "href": null
          }
        ],
        "type": "file",
        "file": {
          "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2c7ef8e9-8eb7-4b76-ab4a-9c859e998a8e/IMG_0741.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210928T015959Z&X-Amz-Expires=3600&X-Amz-Signature=3b6364ebeb5a414593cfd0adcf41daac21ffc5426bfa9f290d622f089713ba63&X-Amz-SignedHeaders=host",
          "expiry_time": "2021-09-28T02:59:59.234Z"
        }
      }
    }
  ]
}, null, 2)}</pre>
{/if}
  