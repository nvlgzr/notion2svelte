<script>
  export let cols = 2;

  function repeat(str, n) {
    return new Array(n + 1).join(str);
  }
</script>

<div style="grid-template: 1fr /{repeat(`1fr `, cols)}">
  <slot />
</div>

<style>
  div {
    /* border: 1px solid black; */
    display: grid;
    gap: 1rem;
    /* DUPLICATE ↓ See Magic.svelte */
    width: calc(min(90vw, 42rem));
    padding: 1rem 0;
  }
</style>
