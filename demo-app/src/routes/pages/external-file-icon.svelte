<script>
	import Cover from '$lib/notion2svelte/Cover.svelte';
	import Title from '$lib/notion2svelte/Title.svelte';
	import BulletedListItem from '$lib/notion2svelte/BulletedListItem.svelte';
	import Callout from '$lib/notion2svelte/Callout.svelte';
	import Divider from '$lib/notion2svelte/Divider.svelte';
	import Image from '$lib/notion2svelte/Image.svelte';
	import IndentGroup from '$lib/notion2svelte/IndentGroup.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';
	import NumberedListItem from '$lib/notion2svelte/NumberedListItem.svelte';
	import Quote from '$lib/notion2svelte/Quote.svelte';
	import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
	import Toggle from '$lib/notion2svelte/Toggle.svelte';

	let curtainDrawn = false;
</script>

<svelte:head>
	<title>External File Icon</title>
</svelte:head><Cover
	coverURL={'https://www.notion.so/images/page-cover/solid_beige.png'}
	iconEmojiOrURL={'https://img.icons8.com/ios/250/000000/light-on.png'}
/>
<Title>External File Icon</Title>

<button on:click={() => (curtainDrawn = !curtainDrawn)}
	>𒅒 Brought to you by @nvlgzr/notion2svelte 1.0.0 𒅒</button
>

{#if !curtainDrawn}
	<Divider />

	<br style="display:none;" />
	<div>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
		est Lorem ipsum dolor sit amet.
	</div>

	<br style="display:none;" />
	<Divider />

	<br style="display:none;" />
{:else}
	<h1>Blocks</h1>
	<pre>{JSON.stringify([
  {
    "object": "block",
    "id": "57347b90-9e8c-4231-b497-fed6c5f10b1d",
    "created_time": "2021-11-02T08:11:00.000Z",
    "last_edited_time": "2021-11-02T08:11:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "1ba7431b-c783-4d97-8605-90df56f6b8b5",
    "created_time": "2021-11-01T19:55:00.000Z",
    "last_edited_time": "2021-11-01T19:56:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  },
  {
    "object": "block",
    "id": "7be04370-44d4-4080-9e25-8b7633eff6c7",
    "created_time": "2021-11-01T19:55:00.000Z",
    "last_edited_time": "2021-11-01T19:55:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "123f2805-96ac-4c4b-bff5-14412c0061af",
    "created_time": "2021-11-01T19:55:00.000Z",
    "last_edited_time": "2021-11-01T19:55:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "divider",
    "divider": {}
  }
], null, 2)}</pre>
	<h1>Page</h1>
	<pre>{JSON.stringify({
  "object": "page",
  "id": "c5194121-d72d-40b5-9cc1-9be0b7193bfc",
  "created_time": "2021-11-01T09:35:00.000Z",
  "last_edited_time": "2021-11-03T07:39:00.000Z",
  "cover": {
    "type": "external",
    "external": {
      "url": "https://www.notion.so/images/page-cover/solid_beige.png"
    }
  },
  "icon": {
    "type": "external",
    "external": {
      "url": "https://img.icons8.com/ios/250/000000/light-on.png"
    }
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
            "content": "external-file-icon",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "external-file-icon",
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
            "content": "External File Icon",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "External File Icon",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/External-File-Icon-c5194121d72d40b59cc19be0b7193bfc",
  "blocks": [
    {
      "object": "block",
      "id": "57347b90-9e8c-4231-b497-fed6c5f10b1d",
      "created_time": "2021-11-02T08:11:00.000Z",
      "last_edited_time": "2021-11-02T08:11:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "unsupported",
      "unsupported": {}
    },
    {
      "object": "block",
      "id": "1ba7431b-c783-4d97-8605-90df56f6b8b5",
      "created_time": "2021-11-01T19:55:00.000Z",
      "last_edited_time": "2021-11-01T19:56:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "divider",
      "divider": {}
    },
    {
      "object": "block",
      "id": "7be04370-44d4-4080-9e25-8b7633eff6c7",
      "created_time": "2021-11-01T19:55:00.000Z",
      "last_edited_time": "2021-11-01T19:55:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "text": [
          {
            "type": "text",
            "text": {
              "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "123f2805-96ac-4c4b-bff5-14412c0061af",
      "created_time": "2021-11-01T19:55:00.000Z",
      "last_edited_time": "2021-11-01T19:55:00.000Z",
      "has_children": false,
      "archived": false,
      "type": "divider",
      "divider": {}
    }
  ]
}, null, 2)}</pre>
{/if}
