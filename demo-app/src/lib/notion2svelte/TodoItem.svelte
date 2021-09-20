<script>
  export let checked = false;
</script>

<li class:checked><slot /></li>

<style>
  li {
    list-style: none;
  }
  li::before {
    content: "️🔲";
    margin-right: 0.5rem;
  }
  .checked::before {
    content: "✅";
  }
</style>
