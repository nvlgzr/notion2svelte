<script>
  export let number = 1;
</script>

<div><p><span>{number}.</span><slot /></p></div>

<style>
  span {
    color: hsl(120, 20%, 50%);
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    margin: 0.5rem 1rem 0 0;
  }

  div::before {
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
    padding-bottom: 0.5rem;
  }
</style>
