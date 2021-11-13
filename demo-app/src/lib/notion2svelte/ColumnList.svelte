<script>
	export let cols = 2;

	function repeat(str, n) {
		return new Array(n + 1).join(str);
	}
</script>

<div style="grid-template: 1fr /{repeat(' 1fr', cols)}"><slot /></div>

<style>
	div {
		/* border: 1px solid black; */
		display: grid;
		grid-template: 1fr / 1fr 1fr;
		/* padding: 1rem; */
		gap: 1rem;
	}
</style>
