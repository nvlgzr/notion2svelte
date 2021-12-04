<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is the default Demo App installed by <a href="https://kit.svelte.dev">SvelteKit</a>,
		modified for use with <a href="https://github.com/nvlgzr/notion2svelte">notion2svelte</a>.
	</p>

	<p>
		I've left this page, the home page, and "TODOS" mostly untouched out of a combination of
		laziness and a vague desire for you to see how easy it is to incorporate the output from <em
			>notion2svelte</em
		> into an existing SvelteKit project.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
