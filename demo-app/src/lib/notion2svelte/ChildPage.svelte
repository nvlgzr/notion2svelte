<script>
	import { slide } from '$lib/transition';
	import Keystroke from 'svelte-keystroke';

	export let title = 'Untitled';

	let isOpen = false;
</script>

<Keystroke on:o={() => (isOpen = !isOpen)} />

<div use:slide={{ isOpen, duration: 100 }}>
	<div class="wrapper {isOpen ? 'open' : ''}">
		<span class="title">{title}</span>
		<slot />
	</div>
</div>

<style>
	span {
		display: block;
		font-size: 5rem;
		font-weight: bold;
		padding: 3rem 0;
	}
	div {
		overflow-y: scroll;
		margin: 0;
		padding: 0;
		border: none;
		background-color: none;
		transition: all 0.25s ease-in-out;
	}
	.wrapper {
		background-color: #fff;
		margin: 1rem 1rem 1rem 3rem;
		padding: 2rem;
		max-width: 70vw;
		border: 0.25rem solid fuchsia;
		border-radius: 1rem 0;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	.open {
		box-shadow: 0.25rem 0.25rem 0.5rem hsla(0, 0%, 0%, 0.25);
	}
</style>
