<script>
</script>

<div>
  <p><slot /></p>
</div>

<style>
  div {
    display: flex;
    margin: 0.5rem 1rem 0 0;
    padding-bottom: 0.5rem;
  }

  div::before {
    content: '◦';
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
  }
</style>
