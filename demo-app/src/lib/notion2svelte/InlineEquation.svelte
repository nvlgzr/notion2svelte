<script>
	import katex from 'katex';

	export let katexString = '';

	$: html = katex.renderToString(katexString);
	$: console.log(JSON.stringify(html));

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
	<pre>
  {#if render}
    {@html html}
    {:else}
    {katexString}
  {/if}
  </pre>
</span>

<style>
	span {
		font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
		line-height: normal;
		background: hsla(0, 0%, 100%, 0.45);
		color: #eb5757;
		border-radius: 3px;
		font-size: 85%; /* Sets height of gray box */
		padding: 0.2em 0.4em;
	}

	pre {
		display: inline;
		color: inherit;
		background: hsla(0, 0%, 100%, 0.45);
		font-size: 85%;
		white-space: pre-wrap;
		padding: 0.7rem 0.1rem 0.6rem 0.1rem;
	}
</style>
