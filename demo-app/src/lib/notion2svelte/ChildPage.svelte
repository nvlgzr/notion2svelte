<script>
  import { fly } from 'svelte/transition';

  export let title = 'Untitled';
</script>

<div use:fly={{ duration: 100 }}>
  <div class="wrapper">
    <span class="title">{title}</span>
    <slot />
  </div>
</div>

<style>
  div {
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    border: none;
    background-color: none;
    transition: all 0.25s ease-in-out;
  }
  .title {
    display: block;
    font-size: 1.75rem;
    padding-bottom: 2rem;
  }
  .wrapper {
    background-color: #fff;
    margin: 1rem 1rem 1rem 3rem;
    padding: 2rem;
    max-width: 70vw;
    border: 0.25rem solid fuchsia;
    border-radius: 1rem 0;
    font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-shadow: 0.25rem 0.25rem 0.5rem hsla(0, 0%, 0%, 0.25);
  }
</style>
