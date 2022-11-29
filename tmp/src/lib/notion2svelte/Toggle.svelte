<script>
  import IndentGroup from './IndentGroup.svelte';

  let open = false;
</script>

<div>
  <div>
    <span class="toggle" on:click|stopPropagation={() => (open = !open)}>
      <svg
        viewBox="0 0 100 100"
        style="width: 0.8rem; height: 1rem; display: block; fill: inherit; transition: transform 200ms ease-out 0s; transform: rotateZ({open
          ? 180
          : 90}deg); opacity: 1;"><polygon points="5.9,88.2 50,11.8 94.1,88.2" /></svg
      >
    </span>
    <slot />
  </div>
  {#if open}
    <IndentGroup>
      <slot name="children" />
    </IndentGroup>
  {/if}
</div>

<style>
  /* div { */
  /* border: solid double 0.5px wheat;
		background: radial-gradient(coral, wheat); */
  /* } */
  span {
    cursor: pointer;
    display: inline-block;
    width: 1.5rem;
    text-align: center;
  }
</style>
