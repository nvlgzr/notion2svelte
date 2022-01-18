<script>
  export let url = "Missing URL for image";
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
    border: thin silver solid;
    border-radius: 0.5rem;
    margin: 0 auto 1rem auto;
  }

  figcaption {
    margin-top: 0.5rem;
  }
</style>
