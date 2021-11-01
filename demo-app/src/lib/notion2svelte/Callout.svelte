<script>
	export let emoji = '';
</script>

<div class="wrapper">
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
		margin: 1rem 1rem 1rem 0;
		padding: 2rem 2rem 2rem 2rem;
		border: 0.05rem solid #ccc;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	.callout {
		display: block;
	}
	.emoji {
		font-size: 3.5em;
		margin-right: 0.5em;
	}
	.emoji {
		height: 3rem;
		width: 3rem;
		font-size: 3rem;
		line-height: 1.1;
	}
</style>
