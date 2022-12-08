<script>
  export let url = '';
</script>

<section>
  <iframe
    src={url}
    width="100%"
    height="100%"
    title={url}
    sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
    loading="lazy"
    scrolling="yes"
  />
  <caption>
    <slot />
  </caption>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  iframe {
    left: 0px;
    top: 0px;
    width: 60vw;
    height: 80vh; /* Ideally this could be set per-embed */
    padding: 0.75rem;
    margin: 1rem auto;
    border: solid 2px hsl(0, 0%, 53%);
    border-radius: 0.5rem;
    box-shadow: 0.15rem 0.15rem 0.5rem 0.25rem hsla(0, 0%, 20%, 0.133);
    pointer-events: auto;
    background-color: hsl(30, 11%, 96%);
  }

  caption {
    margin: 0.25rem auto 1rem auto;
    font-size: 0.85rem;
    text-align: center;
  }
</style>
