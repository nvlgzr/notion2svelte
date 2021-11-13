<script>
	export let emoji = '';

	function randomHexColor() {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}
</script>

<div
	class="wrapper"
	style="background-color: {randomHexColor()}; border: solid 0.5rem {randomHexColor()}"
>
	<div class="emoji">{emoji}</div>
	<div class="text">
		<div class="callout">
			<slot />
		</div>
		<slot name="children" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		margin: 1rem 1rem 2rem 0;
		padding: 2rem 2rem 0 2rem;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border-radius: 0.5rem;
	}
	.callout {
		display: block;
	}
	.emoji {
		margin-right: 0.5em;
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
</style>
