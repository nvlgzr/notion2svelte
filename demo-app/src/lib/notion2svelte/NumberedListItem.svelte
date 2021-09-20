<script>
  export let number = 1;
</script>

<div>{number}. <slot /></div>

<style>
  div {
    list-style: none;
  }
  div::before {
    margin-right: 0.5rem;
  }
</style>
