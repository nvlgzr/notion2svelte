<script>
  export let checked = false;
</script>

<span on:click={() => (checked = !checked)}><input type="checkbox" {checked} /><slot /></span>

<style>
  input {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
</style>
