<script>
</script>

<div>
	<span>
		<slot />
	</span>
	<slot name="children" />
</div>

<style>
	div {
		margin: 1rem 1rem 1rem 3rem;
		padding: 2rem;
		max-width: 70vw;
		border-left: 0.25rem solid #ccc;
		font: 1.25rem/1.5rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	span {
		display: block;
		font-style: oblique;
	}
</style>
