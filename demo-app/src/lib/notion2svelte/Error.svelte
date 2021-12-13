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

<div class="inline-error">
	<div class="message" id={blockId}>
		<span>Unable to render block <span class="bid">#{blockId}</span></span>
		{message}
	</div>
</div>

<style>
	section {
		z-index: 99999;
		padding: 1rem 1rem 1rem 1rem;
		margin: 0 10rem -1rem 10rem;
		background: #fafafa;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: 0 30px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%);
	}

	span {
		font-size: 1.75rem;
		font-weight: bold;
		color: white;
		display: block;
	}

	span.bid {
		display: inline;
		font-weight: normal;
	}

	a {
		text-decoration: none;
		display: block;
		font-size: 1rem;
	}

	div {
		border: thick solid white;
		padding: 10px;
		margin: 0;
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

	.inline-error {
		background: rgba(255, 0, 0, 0.5);
		margin: 1rem auto;
		box-shadow: 0 30px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%);
		animation: wiggle infinite 2s;
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		5% {
			transform: rotate(0.25deg);
		}
		10% {
			transform: rotate(-0.25deg);
		}
		20% {
			transform: rotate(0.5deg);
		}
		70% {
			transform: rotate(0deg);
		}
	}
</style>
