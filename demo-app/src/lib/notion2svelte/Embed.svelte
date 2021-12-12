<script>
	export let url = '';
</script>

<section>
	<iframe
		src={url}
		width="100%"
		height="100%"
		frameborder="0"
		title={`Generic Title, since the Notion API doesn't have a title field, but Svelte warns if it's not set. 🙄`}
		sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
		allowfullscreen=""
		loading="lazy"
	/>
	<caption>
		<slot />
	</caption>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: -1rem; /* Visual cheat to balance the ragged-right */
	}

	iframe {
		width: calc(min(80vw, 900px));
		height: 70vh; /* Ideally this could be set per-embed */
		border: none;
		border-radius: 0.5rem;
		box-shadow: 0 30px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%);
		margin: 15px auto 50px;
	}

	caption {
		margin: 0.25rem auto 1rem auto;
		font-size: 0.85rem;
		text-align: center;
	}
</style>
