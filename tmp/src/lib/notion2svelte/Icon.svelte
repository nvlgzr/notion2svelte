<script>
  export let iconEmojiOrURL = '🧧';

  $: assumeURL = iconEmojiOrURL.length > 3;
</script>

<div>
  {#if assumeURL}
    <img src={iconEmojiOrURL} alt="" />
  {:else}
    <span>{iconEmojiOrURL}</span>
  {/if}
</div>

<style>
  div {
    /* background-color: rgba(165, 42, 42, 0.562); */
  }
  span,
  img {
    position: relative;
    display: inline-block;
    font-size: 9rem;
    width: 12rem;
    height: 12rem;
    margin: 0 3rem;
    color: black;
    /* background-color: hsla(204, 59%, 41%, 0.562); */
  }

  img {
    width: 15vw;
    height: 15vw;
    filter: drop-shadow(0 0 0.5vw hsl(0, 0%, 0%, 0.5));
    background: radial-gradient(
      ellipse at center,
      hsl(200, 93%, 58%) 0%,
      hsl(230, 100%, 50%) 47%,
      transparent 47%,
      transparent 48%
    );
  }
</style>
