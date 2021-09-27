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
  <Image url="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210927T072959Z&X-Amz-Expires=3600&X-Amz-Signature=12f06c0fa7fd1dbc9c3d0d17aabef99f528dd4562468faad623de49c4c52a797&X-Amz-SignedHeaders=host" caption="" />

<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "aa2941b1-13b6-4111-bb26-068c7f5065df",
    "created_time": "2021-09-27T07:09:00.000Z",
    "last_edited_time": "2021-09-27T07:11:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210927T072959Z&X-Amz-Expires=3600&X-Amz-Signature=12f06c0fa7fd1dbc9c3d0d17aabef99f528dd4562468faad623de49c4c52a797&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-27T08:29:59.612Z"
      }
    }
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "2000dfbb-5b5a-435c-b32d-9009c7466476",
  "created_time": "2021-09-27T07:09:00.000Z",
  "last_edited_time": "2021-09-27T07:11:00.000Z",
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
      "rich_text": []
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
      "last_edited_time": "2021-09-27T07:11:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "image",
      "image": {
        "caption": [],
        "type": "file",
        "file": {
          "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee167c86-1a65-4772-99e9-d55a71ce5313/E6A66064-8C54-45A7-9365-AD96F50863C3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210927T072959Z&X-Amz-Expires=3600&X-Amz-Signature=12f06c0fa7fd1dbc9c3d0d17aabef99f528dd4562468faad623de49c4c52a797&X-Amz-SignedHeaders=host",
          "expiry_time": "2021-09-27T08:29:59.612Z"
        }
      }
    }
  ]
}, null, 2)}</pre>
{/if}
  