<div>
  {#if $$slots.default}
  <slot />
  {:else}
  &nbsp;
  {/if}
</div>

<style>
  div {
    padding-bottom: 0.5rem;
  }
</style>
