<svelte:head>
  <title>Test Page w/All* the Bells and Whistles 🎉</title>
</svelte:head>
<script>
import Title from "$lib/notion2svelte/Title.svelte"
import InlineCode from "$lib/notion2svelte/InlineCode.svelte"
import InlineColor from "$lib/notion2svelte/InlineColor.svelte"

import Image from '$lib/notion2svelte/Image.svelte';
import TodoItem from '$lib/notion2svelte/TodoItem.svelte';
import BulletedListItem from "$lib/notion2svelte/BulletedListItem.svelte";
import NumberedListItem from "$lib/notion2svelte/NumberedListItem.svelte";

let curtainDrawn = false
</script>

<button on:click={() => curtainDrawn = !curtainDrawn}>𒅒 Brought to you by notion2svelte 1.0.0 𒅒</button>
<Title>Test Page w/All* the Bells and Whistles 🎉</Title>

{#if !curtainDrawn }
  <h1><InlineColor value='default'>A More&thinsp;</InlineColor><InlineColor value='default'><em>Realistic</em></InlineColor><InlineColor value='default'>&thinsp;</InlineColor><InlineColor value='red_background'>Test</InlineColor><InlineColor value='default'>&thinsp;Case</InlineColor></h1>
<br style="display:none;"/>
<p><InlineColor value='default'>Link to another&thinsp;</InlineColor><a href="/816f31ee96514a398960841d33a9f2d4"><InlineColor value='default'>Notion page</InlineColor></a></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Eventually, plain_text isn't going to cut it. It doesn't display&thinsp;</InlineColor><InlineColor value='default'><em>italics</em></InlineColor><InlineColor value='default'>,&thinsp;</InlineColor><InlineColor value='default'><strong>bold</strong></InlineColor><InlineColor value='default'>,&thinsp;</InlineColor><InlineColor value='default'><s>strikethrough</s></InlineColor><InlineColor value='default'>,&thinsp;</InlineColor><InlineColor value='default'><InlineCode>code</InlineCode></InlineColor><InlineColor value='default'>,&thinsp;</InlineColor><InlineColor value='red'><strong>c</strong></InlineColor><InlineColor value='orange'><strong>o</strong></InlineColor><InlineColor value='yellow'><strong>l</strong></InlineColor><InlineColor value='green'><strong>o</strong></InlineColor><InlineColor value='blue'><strong>r</strong></InlineColor><InlineColor value='purple'><strong>s</strong></InlineColor><InlineColor value='default'>, or, of course,&thinsp;</InlineColor><a href="https://ilovelife.com"><InlineColor value='default'>links</InlineColor></a><InlineColor value='default'>. (Let alone&thinsp;</InlineColor><InlineColor value='default'><em><strong>crazy</strong></em></InlineColor><InlineColor value='default'>&thinsp;</InlineColor><a href="http://navelgazer.club"><InlineColor value='purple'>co</InlineColor></a><a href="http://navelgazer.club"><InlineColor value='green_background'><em>m</em></InlineColor></a><a href="http://navelgazer.club"><InlineColor value='purple'>b</InlineColor></a><a href="http://navelgazer.club"><InlineColor value='purple'><strong>i</strong></InlineColor></a><a href="http://navelgazer.club"><InlineColor value='default'><strong>na</strong></InlineColor></a><a href="http://navelgazer.club"><InlineColor value='orange_background'><strong>ti</strong></InlineColor></a><a href="http://navelgazer.club"><InlineColor value='orange_background'>o</InlineColor></a><a href="http://navelgazer.club"><InlineColor value='default'>ns</InlineColor></a><InlineColor value='default'>&thinsp;of these.) Eventually, there's no reason to think&thinsp;</InlineColor><InlineColor value='default'><InlineCode>notion2svelte</InlineCode></InlineColor><InlineColor value='default'>&thinsp;couldn't also handle inline & block latex, and, well, anything Notion cares to expose!</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage. These are called&thinsp;</InlineColor><InlineColor value='red_background'>isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to live shorter lives than</InlineColor><InlineColor value='default'>&thinsp;normal</InlineColor><InlineColor value='yellow_background'>&thinsp;penguins, as they are</InlineColor><InlineColor value='default'>&thinsp;not well-</InlineColor><InlineColor value='green'>camouflaged</InlineColor><InlineColor value='default'>&thinsp;against the deep and are often passed over as mates.</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>In addition to formatted text and links, we can also expect plenty of&thinsp;</InlineColor><InlineColor value='red_background'>embedded</InlineColor><InlineColor value='default'>&thinsp;images, and (maybe) other media types. For now, images w/out sizing and alt=caption is good enough to be getting on.</InlineColor></p>
<br style="display:none;"/>
<Image url="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4fb6a51-b030-4964-be16-7d43e1518546/IMG_0242.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=eaae06cd2f8e5ae52522f38fd818ba5cb6b6898dd84cdd8853b0c3dfd0865d26&X-Amz-SignedHeaders=host" caption="<InlineColor value='default'>Obsolescence</InlineColor>" />
<br style="display:none;"/>
<p><InlineColor value='default'>Although almost all penguin species are native to the Southern Hemisphere, they are not found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. Several species live in the temperate zone;</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Several authors have suggested that penguins are a good example of Bergmann's Rule</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile, Namibia, New Zealand, and South Africa.</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins to several hundred thousand in the case of king, macaroni and chinstrap penguins.</InlineColor></p>
<br style="display:none;"/>
<p></p>
<br style="display:none;"/>
<h1><InlineColor value='default'>This is a header size 1</InlineColor></h1>
<br style="display:none;"/>
<h2><InlineColor value='default'>Header size 2</InlineColor></h2>
<br style="display:none;"/>
<h3><InlineColor value='default'>h3</InlineColor></h3>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'>I should finish this</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={true}>"<InlineColor value='default'>This is finished</InlineColor>"</TodoItem>
<br style="display:none;"/>
<TodoItem checked={false}>"<InlineColor value='default'>And one for good luck   &thinsp;</InlineColor>"</TodoItem>
<br style="display:none;"/>
<p>(<b>toggle</b> has children)</p>
<br style="display:none;"/>
child_page
<br style="display:none;"/>
<BulletedListItem>"<InlineColor value='default'>This is a&thinsp;</InlineColor><InlineColor value='default'><InlineCode>bulleted_list_item</InlineCode></InlineColor>"</BulletedListItem>
<br style="display:none;"/>
<p>(<b>bulleted_list_item</b> has children)</p>
<br style="display:none;"/>
<NumberedListItem>"<InlineColor value='default'>This is a&thinsp;</InlineColor><InlineColor value='default'><InlineCode>numbered_list_item</InlineCode></InlineColor>"</NumberedListItem>
<br style="display:none;"/>
<NumberedListItem>"<InlineColor value='default'>What numbered item is this? 1 or 2? (hint: it's 2)</InlineColor>"</NumberedListItem>
<br style="display:none;"/>
<NumberedListItem>"<InlineColor value='default'>Good thing (because it's number 3</InlineColor>"</NumberedListItem>
<br style="display:none;"/>
<p><InlineColor value='default'>↑ Dividers are not supported :(</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>↑ Whole-block page links are also, I believe, not supported :(</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>Would be cool for&thinsp;</InlineColor><InlineColor value='default'><InlineCode>ouroboros</InlineCode></InlineColor><InlineColor value='default'>&thinsp;to support latex —&thinsp;</InlineColor>⟣<InlineCode><InlineColor value='default'>E = mc^2</InlineColor></InlineCode>⟢<InlineColor value='default'>&thinsp;— and whatnot</InlineColor></p>
<br style="display:none;"/>
<p></p>
<br style="display:none;"/>
<p><InlineColor value='default'>↑ empty block</InlineColor></p>
<br style="display:none;"/>
<p><InlineColor value='default'>↓ image block</InlineColor></p>
<br style="display:none;"/>
<Image url="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=af82bb37fe53eae686c281e70c09c8680e5bdb0e33f6004e2957f35902094648&X-Amz-SignedHeaders=host" caption="<InlineColor value='default'>Aphid Caption</InlineColor>" />
<br style="display:none;"/>
<Image url="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=af82bb37fe53eae686c281e70c09c8680e5bdb0e33f6004e2957f35902094648&X-Amz-SignedHeaders=host" caption="<InlineColor value='default'>I'm guessing presentation sizing info isn't part of images. This one's identical to-, but presented smaller than-, the first</InlineColor>" />
<br style="display:none;"/>
<h1><InlineColor value='default'>Synced Blocks</InlineColor></h1>
<br style="display:none;"/>
<h1><InlineColor value='default'>3 Columns</InlineColor></h1>
<br style="display:none;"/>

{:else }
  <h1>Blocks</h1>
  <pre>{JSON.stringify([
  {
    "object": "block",
    "id": "1aca2b38-169f-412f-93d6-81dd6b59b19b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "A More ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "A More ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "Realistic",
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
          "plain_text": "Realistic",
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
            "content": "Test",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "Test",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " Case",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " Case",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f862ec49-86ca-440d-9c96-abbf21a79225",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:11:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "69871bc6-2a89-4e3f-87a7-4c71fad3849b",
    "created_time": "2021-09-20T10:11:00.000Z",
    "last_edited_time": "2021-09-20T10:15:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Link to another ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Link to another ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "Notion page",
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
          "plain_text": "Notion page",
          "href": "/816f31ee96514a398960841d33a9f2d4"
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f1183c50-4b09-4203-a55a-588cc42d7cc7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Eventually, plain_text isn't going to cut it. It doesn't display ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Eventually, plain_text isn't going to cut it. It doesn't display ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "italics",
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
          "plain_text": "italics",
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
            "content": "code",
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
          "plain_text": "code",
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
            "content": "c",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red"
          },
          "plain_text": "c",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "l",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow"
          },
          "plain_text": "l",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "o",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "r",
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
          "plain_text": "r",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "s",
            "link": null
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "s",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": ", or, of course, ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": ", or, of course, ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "links",
            "link": {
              "url": "https://ilovelife.com"
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
          "plain_text": "links",
          "href": "https://ilovelife.com"
        },
        {
          "type": "text",
          "text": {
            "content": ". (Let alone ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": ". (Let alone ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "crazy",
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
          "plain_text": "crazy",
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
            "content": "co",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "co",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "m",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": true,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green_background"
          },
          "plain_text": "m",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "b",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "b",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "i",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "purple"
          },
          "plain_text": "i",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "na",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "na",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "ti",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": true,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange_background"
          },
          "plain_text": "ti",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "o",
            "link": {
              "url": "http://navelgazer.club"
            }
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "orange_background"
          },
          "plain_text": "o",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": "ns",
            "link": {
              "url": "http://navelgazer.club"
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
          "plain_text": "ns",
          "href": "http://navelgazer.club"
        },
        {
          "type": "text",
          "text": {
            "content": " of these.) Eventually, there's no reason to think ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " of these.) Eventually, there's no reason to think ",
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
            "content": " couldn't also handle inline & block latex, and, well, anything Notion cares to expose!",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " couldn't also handle inline & block latex, and, well, anything Notion cares to expose!",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "86ab1425-3931-44bd-b010-3a75422b75fc",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage. These are called ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Perhaps one in 50,000 penguins (of most species) are born with brown rather than black plumage. These are called ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to live shorter lives than",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "isabelline penguins. Isabellinism is different from albinism. Isabelline penguins tend to live shorter lives than",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " normal",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " normal",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " penguins, as they are",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "yellow_background"
          },
          "plain_text": " penguins, as they are",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " not well-",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " not well-",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "camouflaged",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "green"
          },
          "plain_text": "camouflaged",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " against the deep and are often passed over as mates.",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " against the deep and are often passed over as mates.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "2b83405d-e15c-4877-ba12-f87526bdbc83",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "In addition to formatted text and links, we can also expect plenty of ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "In addition to formatted text and links, we can also expect plenty of ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "embedded",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "red_background"
          },
          "plain_text": "embedded",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " images, and (maybe) other media types. For now, images w/out sizing and alt=caption is good enough to be getting on.",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " images, and (maybe) other media types. For now, images w/out sizing and alt=caption is good enough to be getting on.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f3cee0d8-b99c-4bb0-8004-ebf84e83c165",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "Obsolescence",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Obsolescence",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4fb6a51-b030-4964-be16-7d43e1518546/IMG_0242.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=eaae06cd2f8e5ae52522f38fd818ba5cb6b6898dd84cdd8853b0c3dfd0865d26&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-20T11:25:01.977Z"
      }
    }
  },
  {
    "object": "block",
    "id": "debc298d-8fb5-4c7f-8a00-41d84d48ae5f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Although almost all penguin species are native to the Southern Hemisphere, they are not found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. Several species live in the temperate zone;",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Although almost all penguin species are native to the Southern Hemisphere, they are not found only in cold climates, such as Antarctica. In fact, only a few species of penguin actually live so far south. Several species live in the temperate zone;",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "db39727b-1057-4eeb-8a47-6a6f3a9b7bfd",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Several authors have suggested that penguins are a good example of Bergmann's Rule",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Several authors have suggested that penguins are a good example of Bergmann's Rule",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e666a879-0009-46d0-bc59-ffe677b18963",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile, Namibia, New Zealand, and South Africa.",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Major populations of penguins are found in Angola, Antarctica, Argentina, Australia, Chile, Namibia, New Zealand, and South Africa.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "32fa47dc-5a9e-4aeb-b3e0-1142530e3556",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins to several hundred thousand in the case of king, macaroni and chinstrap penguins.",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species; these colonies may range in size from as few as 100 pairs for gentoo penguins to several hundred thousand in the case of king, macaroni and chinstrap penguins.",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "cdd23b0b-e9c9-4f78-b181-0bee34b0ef63",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "d81c01f3-e5de-4425-9605-2982e6c29c5d",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "f71d7859-80a6-4179-af1c-9bcdae9ba72c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a header size 1",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "This is a header size 1",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "46ca3835-bdb8-45ca-acde-dcb3510864b5",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_2",
    "heading_2": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Header size 2",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Header size 2",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "7d405da9-5cec-4724-b56b-391f21542043",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_3",
    "heading_3": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "h3",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "h3",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "7f986cdb-e93b-4665-a027-02007184b2d4",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "d9c985a2-67a8-42bf-8a9a-92d6693e7e05",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "I should finish this",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "I should finish this",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "046218a7-08ce-48ba-8b3b-2c3218d5d43e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is finished",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "This is finished",
          "href": null
        }
      ],
      "checked": true
    }
  },
  {
    "object": "block",
    "id": "5f01eab5-e7d1-4988-a064-259ae3628b7f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "to_do",
    "to_do": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "And one for good luck    ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "And one for good luck    ",
          "href": null
        }
      ],
      "checked": false
    }
  },
  {
    "object": "block",
    "id": "8c8a2656-3a2f-4978-a3c2-88937f71a613",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "toggle",
    "toggle": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Toggle label\nsoft return!",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Toggle label\nsoft return!",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "1b46fc3d-1bb3-4351-8abe-f2fbc2562f90",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "child_page",
    "child_page": {
      "title": "Inline subpage w/no content, icon, or cover"
    }
  },
  {
    "object": "block",
    "id": "25a41cc0-1e6e-42f5-85fe-9a1928b95e4e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "This is a ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "bulleted_list_item",
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
          "plain_text": "bulleted_list_item",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "d95ca015-5625-499f-9dd7-e629694f3e99",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "And here's another one",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "And here's another one",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "d7565143-adf1-45c7-b17f-e70943425bb7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "This is a ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "This is a ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "numbered_list_item",
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
          "plain_text": "numbered_list_item",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "4eba6149-47f4-47b6-91fe-6baf7962947f",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "What numbered item is this? 1 or 2? (hint: it's 2)",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "What numbered item is this? 1 or 2? (hint: it's 2)",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "5477436f-7760-41b0-a800-b306bd2695c0",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "numbered_list_item",
    "numbered_list_item": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Good thing (because it's number 3",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Good thing (because it's number 3",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "8c593de7-7950-4011-a707-340fa2b29aa9",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "a0fa14c9-a200-4527-b8ad-9798f88ac13c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "38fe9223-4636-45f9-a0c9-fdff7cbbb779",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ Dividers are not supported :(",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "↑ Dividers are not supported :(",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e5ef9242-55d5-4c60-ba9a-0b70fdafa07b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "86402c3d-7749-4f02-a3a9-ba59dd0748a1",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ Whole-block page links are also, I believe, not supported :(",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "↑ Whole-block page links are also, I believe, not supported :(",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "09ffb394-800c-4d2e-b4f2-c7cf0a2de7ce",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Would be cool for ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Would be cool for ",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "ouroboros",
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
          "plain_text": "ouroboros",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " to support latex — ",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " to support latex — ",
          "href": null
        },
        {
          "type": "equation",
          "equation": {
            "expression": "E = mc^2"
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "E = mc^2",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " — and whatnot",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " — and whatnot",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "b9082e4a-ed48-4ec2-acd5-57c78cf1681a",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": []
    }
  },
  {
    "object": "block",
    "id": "6209fbaf-915a-44ab-8c41-c033ebbfe620",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↑ empty block",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "↑ empty block",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "11f72f5f-7152-4eda-835b-0d6e2925efe8",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "↓ image block",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "↓ image block",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "e639ccd6-3a44-43cb-a020-b1bd52454a19",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "Aphid Caption",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Aphid Caption",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=af82bb37fe53eae686c281e70c09c8680e5bdb0e33f6004e2957f35902094648&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-20T11:25:01.990Z"
      }
    }
  },
  {
    "object": "block",
    "id": "b27dd7c2-235a-482a-af83-80595baeebae",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "image",
    "image": {
      "caption": [
        {
          "type": "text",
          "text": {
            "content": "I'm guessing presentation sizing info isn't part of images. This one's identical to-, but presented smaller than-, the first",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "I'm guessing presentation sizing info isn't part of images. This one's identical to-, but presented smaller than-, the first",
          "href": null
        }
      ],
      "type": "file",
      "file": {
        "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de30defd-93d2-4588-a7b6-ee29ec978374/0C322DA4-7BA9-43B3-95F4-2AE6B6EAF066.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210920T102502Z&X-Amz-Expires=3600&X-Amz-Signature=af82bb37fe53eae686c281e70c09c8680e5bdb0e33f6004e2957f35902094648&X-Amz-SignedHeaders=host",
        "expiry_time": "2021-09-20T11:25:01.986Z"
      }
    }
  },
  {
    "object": "block",
    "id": "43f48af4-5d47-445e-b676-acba023eadd7",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "Synced Blocks",
            "link": null
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
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "f7f29332-919a-4b3a-a70b-bcd2cd33e66c",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "7af83e89-caae-460d-ac1f-d0d557f7ffd9",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  },
  {
    "object": "block",
    "id": "eef9c1c4-fe12-450e-8ef5-5de6b6f7460e",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": false,
    "archived": false,
    "type": "heading_1",
    "heading_1": {
      "text": [
        {
          "type": "text",
          "text": {
            "content": "3 Columns",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "3 Columns",
          "href": null
        }
      ]
    }
  },
  {
    "object": "block",
    "id": "b55eb00b-22b1-4fa3-a48a-ba26feae584b",
    "created_time": "2021-09-20T10:05:00.000Z",
    "last_edited_time": "2021-09-20T10:05:00.000Z",
    "has_children": true,
    "archived": false,
    "type": "unsupported",
    "unsupported": {}
  }
], null, 2)}</pre>
  <h1>Page</h1>
  <pre>{JSON.stringify({
  "object": "page",
  "id": "6bca4379-f362-45a6-90cf-d35beebba87a",
  "created_time": "2021-09-20T10:05:00.000Z",
  "last_edited_time": "2021-09-20T10:15:00.000Z",
  "cover": {
    "type": "external",
    "external": {
      "url": "https://images.unsplash.com/photo-1576727298631-92d3ed600ce9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb"
    }
  },
  "icon": {
    "type": "emoji",
    "emoji": "🦦"
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
            "content": "bells-and-whistles",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "bells-and-whistles",
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
            "content": "Test Page w/All",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "Test Page w/All",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": "*",
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
          "plain_text": "*",
          "href": null
        },
        {
          "type": "text",
          "text": {
            "content": " the Bells and Whistles 🎉",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " the Bells and Whistles 🎉",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/Test-Page-w-All-the-Bells-and-Whistles-6bca4379f36245a690cfd35beebba87a"
}, null, 2)}</pre>
{/if}
    