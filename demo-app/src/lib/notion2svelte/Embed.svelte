<script>
	export let url = '';
	export let title = 'TITLE_NOT_SET #ariafail';
</script>

<iframe
	src={url}
	width="100%"
	height="100%"
	frameborder="0"
	{title}
	sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
	allowfullscreen=""
	loading="lazy"
/>

<style>
	iframe {
		left: 0px;
		top: 0px;
		width: calc(min(80vw, 900px));
		height: 50vh;
		margin: 1rem auto;
		padding: 0.25rem;
		border: solid 2px hsl(0, 0%, 53%);
		border-radius: 0.5rem;
		box-shadow: 0.15rem 0.15rem 0.5rem 0.25rem hsla(0, 0%, 20%, 0.133);
		pointer-events: auto;
		background-color: hsl(30, 11%, 96%);
	}
</style>
