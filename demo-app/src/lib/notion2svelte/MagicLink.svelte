<script context="module">
	// Yet another copy/paste job. 🙀
	export const pageTitle = (page) => page.properties.Title.title;
	export const slug = (page) => page.properties.Slug[page.properties.Slug.type][0].plain_text;
	export const plain = (title) => title.reduce((acc, curr, idx) => acc + curr.plain_text, '');
	export const plainText = (blockExtras) => blockExtras.map((s) => s.plain_text).join('');

	export async function load({ page /*, fetch, session, stuff */ }) {
		return {
			props: {
				slug: slug(page),
				title: plain(pageTitle(page)),
				plainText: plainText(page.blocks)
			}
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';
	import KeyStroke from 'svelte-keystroke';

	export let href = '#';

	const storageKey = '@nvlgzr.ouroboros.distractionsOn';
	const defaultValue = false;

	const initialValue = browser ? window.localStorage.getItem(storageKey) === 'true' : defaultValue;

	const distractionsOn = writable(initialValue);

	$: if (browser) {
		window.localStorage.setItem(storageKey, $distractionsOn);
	}
</script>

<KeyStroke on:d={() => ($distractionsOn = !$distractionsOn)} />

{#if $distractionsOn}
	<a {href}><slot /></a>
{:else}
	<span title={`Links disabled. Type 'D' to toggle Distraction mode.`}>
		<slot /><span style="color: hsl(0deg 0% 68%)">º</span>
	</span>
{/if}

<style>
	span {
		cursor: pointer;
	}
</style>
