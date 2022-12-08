<script>
  import HeroImage from './HeroImage.svelte';
  import Icon from './Icon.svelte';

  export let coverURL = '';
  export let iconEmojiOrURL = '';
  export let height = '18rem';
  export let k = '0rem';

  // Get rid of `null`s from the Notion API
  $: iconEmojiOrURL =
    iconEmojiOrURL === 'null' || iconEmojiOrURL === 'undefined' ? '' : iconEmojiOrURL;

  $: if (coverURL.length < 8) {
    height = '0rem';
    k = '0rem';
  } else if (!iconEmojiOrURL) {
    k = '0rem';
  } else {
    k = '6rem';
  }
</script>

{#if coverURL}
  <HeroImage src={coverURL} {height} />
{/if}

<!-- spacer -->
<div style="height: calc({height} - {k});">&nbsp;</div>

{#if iconEmojiOrURL}
  <div>
    <Icon {iconEmojiOrURL} />
  </div>
{:else}
  <div class="emptyIcon">&nbsp;</div>
{/if}

<style>
  div {
    /*  Uncomment ↓ to visualize the spacer's position */
    /* background-color: hsla(120, 100%, 25%, 0.578); */
  }

  .emptyIcon {
    /* background-color: red; */
    height: 10rem;
  }
</style>
