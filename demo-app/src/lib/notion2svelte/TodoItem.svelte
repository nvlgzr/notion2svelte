<script>
  export let checked = false;
</script>

<span><input type="checkbox" {checked} /><slot /></span>

<style>
  input {
    margin-right: 0.5rem;
  }
</style>
