<script>
	export let iconEmojiOrURL = '🧧';

	$: assumeURL = iconEmojiOrURL.length > 3;
</script>

{#if assumeURL}
	<img src={iconEmojiOrURL} alt="" />
{:else}
	<div>{iconEmojiOrURL}</div>
{/if}

<style>
	div,
	img {
		font-size: 15vw;
		width: 20vw;
		height: auto;
		color: black;
	}

	img {
		width: 15vw;
	}
</style>
