<script context="module">
	// Decided to punt for now by copy/pasting these functions from
	// sveltifier.js. Longer-term, maybe this type of function
	// exists as its own library for use by notion2svelte AND
	// directly within projects?
	export const pageTitle = (page) => page.properties.Title.title;
	export const slug = (page) => page.properties.Slug[page.properties.Slug.type][0].plain_text;
	export const plain = (title) => title.reduce((acc, curr, idx) => acc + curr.plain_text, '');
	export const plainText = (blockExtras) => blockExtras.map((s) => s.plain_text).join('');

	/**
	 * Load json files from . (i.e., routes/pages)
	 */
	export async function load({ page /*, fetch, session, stuff */ }) {
		//
		// Performance note
		//
		// For low number of pages, pre-loading everything synchronously,
		// via Eager globbing, is fine:
		const globs = import.meta.globEager(`./*.json`);

		const pages = Object.values(globs)
			.filter((page) => slug(page) !== 'index')
			.map((page) => {
				return {
					slug: slug(page),
					title: plain(pageTitle(page, 'Title')),
					lastModified: page.last_edited_time
				};
			});
		return {
			props: {
				pages,
				//
				// Note re: isIndex
				//
				// If we're at <site-root>/pages then the relative URL will be
				// <site-root>/, not <site-root>/pages, causing nav links to fail
				// on the index page. This, of course, fixes that.
				isIndex: page.path === '/pages'
			}
		};
	}
</script>

<script>
	import * as path from 'path';
	import Divider from '$lib/notion2svelte/Divider.svelte';

	export let pages;
	export let isIndex = false;
</script>

<slot />

<Divider />

<h1>Published Pages</h1>

<div class="container">
	{#each pages as p}
		<a href={isIndex ? path.join('pages', p.slug) : p.slug}>
			<span class="title">{p.title}</span>
			<div class="annotation">
				<span class="last-edited">Last Edited</span>
				<span class="date">
					{new Date(p.lastModified).toLocaleDateString()}
				</span>
			</div>
		</a>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 1rem;
	}

	a {
		text-decoration: none;
		color: #000;
		background: #fafafa;
		border: 1px solid #ccc;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.last-edited {
		font-size: 0.8rem;
		color: #ccc;
	}

	.date {
		font-size: 0.8rem;
		color: #ccc;
	}
</style>
