<script>
  export let level = 1;
</script>

{#if level == 1}
  <h1><slot /></h1>
{:else if level == 2}
  <h2><slot /></h2>
{:else if level == 3}
  <h3><slot /></h3>
{/if}

<style>
  /* Go crazy! */
  h1 {
    color: hsl(120, 40%, 50%);
  }

  h2 {
    color: hsl(120, 30%, 50%);
  }

  h3 {
    color: hsl(120, 20%, 50%);
  }
</style>
