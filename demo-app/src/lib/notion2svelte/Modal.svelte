<script>
	import { fly, fade } from 'svelte/transition';
	import { clickOutside } from '$lib/clickOutside';
	import Portal from './Portal.svelte';

	export let isModalOpen = false;
	export let background = true;

	const closeModal = () => {
		isModalOpen = false;
	};
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:clickOutside
			on:click-outside={closeModal}
			class="wrapper"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<!-- How does Notion handle ARIA focus & closure on their buttonless overlays? -->
			<slot />
		</div>
		{#if background}
			<div transition:fade class="background" />
		{/if}
	</Portal>
{/if}

<style>
	.wrapper {
		position: fixed;
		inset: 5rem;
		display: grid;
		padding: 1rem;
		grid-template: 5rem 1fr 5rem / 1rem 1fr 1rem;
		justify-content: center;
		background-color: white;
		z-index: 200;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px #ccc;
		border-radius: 0.5rem;
	}

	.background {
		position: fixed;
		inset: 0;
		z-index: 100;
		height: 100%;
		width: 100%;
		background-color: hsla(0, 77%, 17%, 75%);
		cursor: pointer;
	}
</style>
