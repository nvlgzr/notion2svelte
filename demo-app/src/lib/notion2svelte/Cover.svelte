<script>
	import HeroImage from './HeroImage.svelte';
	import Icon from './Icon.svelte';

	export let coverURL = '';
	export let iconEmojiOrURL = '';
	export let height = '35vh';
	export let k = '0px'; // Icon distancing constant.
	// In a real app, this wouldn't be so ad hoc,
	// but in a real app I'd have designed the
	// everything from the wireframes up to work
	// together, whereas here I'm trying to avoid
	// modifying the files installed by the
	// svelte kit demo-app installer amap.

	// Get rid of `null`s from the Notion API
	$: iconEmojiOrURL = iconEmojiOrURL === 'null' ? '' : iconEmojiOrURL;

	$: if (coverURL.length < 8) {
		height = '0px';
		k = '-16vh';
	} else if (!iconEmojiOrURL) {
		k = '85vh';
	}
</script>

{#if coverURL}
	<HeroImage src={coverURL} {height} />
{/if}

<!-- spacer -->
<div style="height: calc({height} - {k});">&nbsp;</div>

{#if iconEmojiOrURL}
	<div class="iconPlacement">
		<Icon {iconEmojiOrURL} />
	</div>
{:else}
	<div class="emptyIcon">&nbsp;</div>
{/if}

<style>
	div {
		margin-top: -3em; /* Compensate for magic number in Header.svelte */

		/*  Uncomment ↓ to visualize the spacer's weird dom position 😬  */
		/* background-color: rgba(0, 128, 0, 0.578); */
	}

	.iconPlacement {
		margin-top: -15vh;
	}

	.emptyIcon {
		/* background-color: red; */
		height: 40vh;
	}
</style>
