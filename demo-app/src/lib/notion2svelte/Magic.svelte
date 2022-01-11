<script>
  // Sky's the limit to what you can do with these outer components,
  // which get reference to the raw page and the entire block, just
  // in case YOU need something that's not on MY radar.
  export let sourceJSON;

  // console.log(sourceJSON);
</script>

<div>
  <slot />
</div>

<style>
  div {
    margin: 0 auto;
    /* DUPLICATE ↓ See ColumnList.svelte */
    width: calc(min(90vw, 42rem));
    padding: 0;
    display: grid;
    font: 1.25rem/1.5rem "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.35;
  }
</style>
