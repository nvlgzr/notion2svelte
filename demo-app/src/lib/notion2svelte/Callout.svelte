<script>
  export let emoji = '';
</script>

<aside>
  <div class="emoji">{emoji}</div>
  <div class="text">
    <div class="callout">
      <slot />
    </div>
    <slot name="children" />
  </div>
</aside>

<style>
  aside {
    display: flex;
    background-color: hsl(180, 50%, 93%);
    border: solid 0.15rem hsl(193, 49%, 62%);
    margin: 1rem 1rem 2rem 0;
    padding: 2rem 1rem 1rem 1rem;
    border-radius: 0.5rem;
  }
  .callout {
    font-size: larger;
    margin-bottom: 0.5rem;
  }
  .emoji {
    margin-right: 0.5em;
    height: 3rem;
    width: 3rem;
    font-size: 3rem;
    line-height: 1.1;
  }
</style>
