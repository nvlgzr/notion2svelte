<script>
  export let url = 'Missing URL for image';
</script>

<figure>
  <img width="100%" height="fit-content" src={url} />
  <figcaption><slot /></figcaption>
</figure>

<style>
  figure {
    color: gray;
    background-color: whitesmoke;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0 auto 1rem auto;
  }

  figcaption {
    height: fit-content;
    margin-bottom: -0.25rem;
  }
</style>
