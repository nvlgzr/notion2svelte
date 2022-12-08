<script>
  import katex from 'katex';

  export let katexString = '';
  export let block = false;

  $: html = render ? katex.renderToString(katexString, { displayMode: block }) : katexString;

  let render = true;

  const click = () => (render = !render);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
    integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
    crossorigin="anonymous"
  />
</svelte:head>

{#if block}
  <div on:click={click}>
    {@html html}
  </div>
{:else}
  <span on:click={click}>
    {@html html}
  </span>
{/if}

<style>
  div, span {
    cursor: pointer;
  }
  div {
    padding: 2rem;
  }
  span {
    line-height: normal;
    border-radius: 3px;
    font-size: 85%;
  }
</style>
