<script>
  import { Lightbox } from 'svelte-lightbox';

  export let url = 'Missing URL for image';
  export let caption = ''; // By default, notion2svelte sets this to equal the caption, minus formatting

  // Note: I've putted on the question of tradeoffs between props and <slot />.
  // The latter is the simplest way to pass in arbitrary HTML trees,
  // but the former allows for reuse in attributes. So I'm just
  // supporting both, redundantly.
</script>

<figure>
  <Lightbox description={caption} imagePreset="scroll">
    <img width="100%" height="fit-content" src={url} alt={caption} />
  </Lightbox>
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
