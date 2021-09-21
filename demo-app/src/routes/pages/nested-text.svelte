<script>
	import Title from '$lib/notion2svelte/Title.svelte';
	import InlineCode from '$lib/notion2svelte/InlineCode.svelte';
	import InlineColor from '$lib/notion2svelte/InlineColor.svelte';

	let curtainDrawn = false;
</script>

<button on:click={() => (curtainDrawn = !curtainDrawn)}
	>𒅒 Brought to you by notion2svelte 1.0.0 𒅒</button
>
<Title>Nested Text</Title>

{#if !curtainDrawn}
	<div><InlineColor value="default">No children</InlineColor></div>
	<br style="display:none;" />
	<div>
		Root
		<div style="padding-left: 1.5rem">
			Indent Level One
			<div style="padding-left: 1.5rem">Indent Level Two</div>
		</div>
	</div>
{:else}
	<h1>Blocks</h1>
	<pre>{JSON.stringify([
  {
    "object": "block",
    "id": "5ba1ffd4-fa84-46cf-a70d-524b1dd808ed",
    "created_time": "2021-09-21T10:49:00.000Z",
    "last_edited_time": "2021-09-21T10:49:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "No children",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "No children",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "d5d23e50-560a-44ee-8897-bf6b7687a796",
    "created_time": "2021-09-21T03:34:00.000Z",
    "last_edited_time": "2021-09-21T10:49:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Root",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Root",
          "href": null
        }
      ]
    }
  },
], null, 2)}</pre>
	<h1>Page</h1>
	<pre>{JSON.stringify({
  "object": "page",
  "id": "ad21e02e-f808-44e5-94d6-5719dd58e27b",
  "created_time": "2021-09-21T03:33:00.000Z",
  "last_edited_time": "2021-09-21T10:49:00.000Z",
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
            "content": "nested-text",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "nested-text",
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
            "content": "Nested Text",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Nested Text",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Nested-Text-ad21e02ef80844e594d65719dd58e27b"
}, null, 2)}</pre>
{/if}
