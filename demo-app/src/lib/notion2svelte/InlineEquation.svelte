<script>
	import katex from 'katex';

	export let katexString = '';

	$: html = katex.renderToString(katexString);

	let render = true;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css"
		integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs"
		crossorigin="anonymous"
	/>
</svelte:head>

<span on:click={() => (render = !render)}>
	{#if render}
		{@html html}
	{:else}
		{katexString}
	{/if}
</span>

<style>
	span {
		font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
		line-height: normal;
		border-radius: 3px;
		font-size: 85%;
	}
</style>
