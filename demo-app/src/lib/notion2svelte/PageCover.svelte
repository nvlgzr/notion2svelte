<script>
	import Portal from './Portal.svelte';

	export let coverURL = '';
</script>

<Portal target="#cover">
	<div>
		<img src={coverURL} alt="Sorry. Not sure how to do per-page alts yet for cover images" />
	</div>
	<!-- spacer -->
	<span>&nbsp;</span>
</Portal>

<style>
	span {
		display: block;
		margin: calc(min(22vh, 22vw) - 2rem);
	}

	div {
		position: absolute;
		top: 0;
		background-color: #333;
		width: 100%;
		height: calc(min(40vh, 40vw));
		overflow: hidden;
		border: 2px #333 solid;
		z-index: -1;
	}

	img {
		width: 100%;
		height: calc(max(auto, min(40vh, 40vw)));
		animation: kenburns 20s infinite;
		/* vertical center */
	}

	@keyframes kenburns {
		0% {
			opacity: 0;
		}
		5% {
			opacity: 1;
		}
		95% {
			transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
			animation-timing-function: ease-in;
			opacity: 1;
		}
		100% {
			transform: scale3d(2, 2, 2) translate3d(-170px, -100px, 0px);
			opacity: 0;
		}
	}
</style>
