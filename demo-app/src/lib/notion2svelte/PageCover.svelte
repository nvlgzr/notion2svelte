<script>
	import Portal from './Portal.svelte';

	export let coverURL = '';
	export let iconEmoji = '';
</script>

<Portal target="#cover">
	<div class="cover-wrapper">
		<img
			class="cover"
			src={coverURL}
			alt="Sorry. Not sure how to do per-page alts yet for cover images"
		/>
	</div>
	{#if iconEmoji}
		<div class="emoji">{iconEmoji}</div>
	{/if}
	<!-- spacer -->
	<span>&nbsp; </span>
</Portal>

<style>
	.emoji {
		font-size: 15rem;
		position: absolute;
		left: calc(min(10rem, 10vw));
		top: calc(min(25vh, 25vw));
		color: black;
	}

	span {
		display: block;
		margin: calc(min(22vh, 22vw) - 2rem);
	}

	.cover-wrapper {
		position: absolute;
		top: 0;
		width: 100%;
		height: calc(min(40vh, 40vw));
		overflow: hidden;
		border: 2px hsla(0, 0%, 83%, 0.5) solid;
		z-index: -1;
	}

	.cover {
		width: 100%;
		height: calc(max(auto, min(40vh, 40vw)));
		animation: kenburns 10s 1;
		/* vertical center */
	}

	@keyframes kenburns {
		0% {
			transform: scale3d(2, 2, 2) translate3d(50px, 50px, 50px) rotate(-0.02turn);
			opacity: 0;
		}
		100% {
			transform: scale3d(1, 1, 1) translate3d(0, 0, 0) rotate(0);
		}
	}
</style>
