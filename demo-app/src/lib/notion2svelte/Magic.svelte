<script>
	// Sky's the limit to what you can do with these outer components,
	// which get reference to the raw page and the entire block, just
	// in case YOU need something that's not on MY radar.
	import { scale, fade } from 'svelte/transition';
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';
	import KeyStroke from 'svelte-keystroke';

	// export let page; // Not used in this instance.
	export let block;

	const storageKey = '@nvlgzr.ouroboros.inspectorModeOn';
	const defaultValue = false;
	const initialValue = browser ? window.localStorage.getItem(storageKey) === 'true' : defaultValue;
	const inspectorModeOn = writable(initialValue);

	let showJSON = false;

	$: if (browser) {
		window.localStorage.setItem(storageKey, $inspectorModeOn);
	}
</script>

<KeyStroke on:i={() => ($inspectorModeOn = !$inspectorModeOn)} />

<div
	transition:fade
	class:showJSON
	on:mouseenter={() => {
		if ($inspectorModeOn) showJSON = true;
	}}
	on:mouseleave={() => (showJSON = false)}
>
	<slot />
</div>
{#if showJSON}
	<div
		class="card"
		on:mouseenter={() => (showJSON = true)}
		on:mouseleave={() => (showJSON = false)}
	>
		<pre transition:scale={{ duration: 300 }}>
{JSON.stringify(block, null, 2)}
      </pre>
	</div>
{/if}

<style>
	div {
		margin: 0;
		padding: 0;
		display: contents;
	}

	.card {
		display: grid;
		background-color: #fff;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		margin-bottom: 20px;
		padding: 20px;
	}

	.showJSON {
		border: 1px solid #ccc;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		padding: 2rem;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	}
</style>
