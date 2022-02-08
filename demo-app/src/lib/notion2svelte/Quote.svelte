<script>
</script>

<div>
  <span>
    <slot />
  </span>
  <slot name="children" />
</div>

<style>
  div {
    margin: 1rem 1rem 1rem 3rem;
    padding: 2rem;
    max-width: 70vw;
    border-left: 0.25rem solid #ccc;
    font-size: 1.5rem;
    line-height: 1.25;
    font-family: 'Roboto Mono', monospace;
  }
  span {
    display: block;
    font-style: oblique;
  }
</style>
