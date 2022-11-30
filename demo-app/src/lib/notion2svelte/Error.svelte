<script>
  import Portal from './Portal.svelte';

  export let pageId = '';
  export let blockId = '';
  export let message = '';
  export let stack = '';

  $: paths = stack?.length ? stack.match(/.+\((.+)\)/g) : [];

  $: firstPath = paths.length > 0 ? paths[0] : '¯\\_(ツ)_/¯';

  $: secondPath = paths.length > 1 ? paths[1] : '';

  $: notionURL = 'https://notion.so/navelgazer/' + pageId + (blockId ? '#' + blockId : '');

  function copyToClipboard(text) {}
</script>

<Portal>
  <section>
    <div class="message">
      <span>Error:</span>
      {message}
      <div class="linkhack">
        <a href="#{blockId}">Jump to broken block</a>
      </div>
    </div>
    <div class="stack">
      <span>Thrown from:</span>
      {firstPath}
    </div>
    {#if secondPath.length}
      <div class="stack">
        <span>Call site:</span>
        {secondPath}
      </div>
    {/if}
    <div class="stack">
      <span>Full stack:</span>
      {stack.slice(0, 400) + '…'}
    </div>
  </section>
</Portal>

<div class="inline-error">
  <div class="message" id={blockId}>
    <span>Unable to render block <span class="bid">#{blockId}</span></span>
    {message}
    <div class="linkhack">
      <a class="to-notion" href={notionURL} target="_blank" rel="noreferrer">Highlight in Notion</a>
    </div>
  </div>
</div>

<style>
  section {
    z-index: 99999;
    padding: 1rem 1rem 1rem 1rem;
    margin: 2rem 15vw;
    background: #fafafa;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 30px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%);
  }

  span {
    font-size: 1.75rem;
    font-weight: bold;
    color: white;
    display: block;
  }

  span.bid {
    display: inline;
    font-weight: normal;
  }

  .linkhack {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  a {
    display: block;
    max-width: fit-content;
    padding: 0.5rem 2rem 0.5rem 1rem;
    margin: 0.5rem 0;
    border: 0;
    border-radius: 4px;
    background: #fafafa;
    color: #333;

    text-decoration: none;
    font-size: 1.25rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
      sans-serif;
    color: hsl(350, 80%, 48%);
    border: thin solid hsl(350, 40%, 48%);
  }

  a:nth-of-type(2) {
    justify-self: end;
  }

  a:hover {
    background: #f7dede;
  }

  a:active {
    color: pink;
    background: hsl(350, 100%, 48%);
  }

  a::after {
    content: '⇩';
    top: 0.8rem;
    margin-left: 0.5rem;
    font-size: 0.9rem;
    position: absolute;
  }

  .to-notion::after {
    content: '⬀';
    top: 0.1rem;
    margin-left: 0.5rem;
    font-size: 1.6rem;
    position: absolute;
  }

  div {
    border: thick solid white;
    padding: 10px;
    margin: 0;
  }

  .message {
    background: pink;
    font-size: 2rem;
  }

  .stack {
    color: blue;
    background: lightblue;
    border: thick solid white;
    padding: 10px;
    font-weight: bold;
  }

  .stack:nth-child(3) {
    color: darkorchid;
    background: hsl(282, 66%, 86%);
  }

  .stack:nth-child(4) {
    color: #333;
    background: #ccc;
  }

  .inline-error {
    background: rgba(255, 0, 0, 0.5);
    margin: 1rem auto;
    box-shadow: 0 30px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%);
    animation: wiggle infinite 2s;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(0.25deg);
    }
    10% {
      transform: rotate(-0.25deg);
    }
    15% {
      transform: rotate(0.25deg);
    }
    20% {
      transform: rotate(-0.25deg);
    }
    25% {
      transform: rotate(0.25deg);
    }
    30% {
      transform: rotate(0deg);
    }
  }
</style>
