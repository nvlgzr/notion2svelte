<script>
	import Portal from './Portal.svelte';

	export let pageId = '';
	export let blockId = '';
	export let message = '';
	export let stack = '';

	$: firstPath =
		stack?.length && stack.match(/.+\((.+)\)/g)?.length
			? stack.match(/.+\((.+)\)/g)[0]
			: '¯\\_(ツ)_/¯';

	$: notionURL = 'https://notion.so/navelgazer/' + pageId + (blockId ? '#' + blockId : '');
</script>

<Portal>
	<section>
		<div class="message">
			<span>Error:</span>
			{message}
			<a href="#{blockId}">(Jump to broken block)</a>
			<a href={notionURL} target="_blank">(Highlight in Notion)</a>
		</div>
		<div class="stack">
			<span>Thrown from:</span>
			{firstPath}
		</div>
		<div class="stack">
			<span>Full stack:</span>
			{stack}
		</div>
	</section>
</Portal>

<div id={blockId}>{message}</div>

<style>
	section {
		z-index: 99999;
		padding: 1rem;
		background: #fafafa;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin: 1rem;
	}

	span {
		font-size: 1.75rem;
		font-weight: bold;
		color: white;
		display: block;
	}

	a {
		text-decoration: none;
		display: block;
		font-size: 1rem;
	}

	div {
		border: thick solid white;
		padding: 10px;
	}

	.message {
		background: pink;
		font-size: 2rem;
	}

	.stack {
		color: blue;
		background: lightblue;
		border: thick solid white;
		padding: 10px;
		font-weight: bold;
	}

	.stack:nth-child(3) {
		color: darkgreen;
		background: lightgreen;
	}
</style>
