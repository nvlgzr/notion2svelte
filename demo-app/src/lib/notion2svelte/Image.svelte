<script>
  export let url = "Missing URL for image";
  export let caption = "";
</script>

<figure>
  <img width="100%" height="100%" src={url} alt={caption} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  figure {
    color: gray;
    padding: 1rem;
    border: thin silver solid;
    border-radius: 0.5rem;
  }
  figcaption {
    margin-top: 0.75rem;
  }
</style>
