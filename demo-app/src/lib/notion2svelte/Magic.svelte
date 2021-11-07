<script>
	// Sky's the limit to what you can do with these outer components,
	// which get reference to the raw page and the entire block, just
	// in case YOU need something that's not on MY radar.

	export let page;
	export let block;
	export let show; // Show JSON
</script>

{#if show}
	<div>
		<slot />
	</div>
{:else}
	<div class="side-by-side">
		<div class="fancy-card">
			<slot />
			<pre>
{block}
      </pre>
		</div>
	</div>
{/if}

<style>
	div {
		margin: 0;
		padding: 0;
	}

	.fancy-card {
		display: grid;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		margin-bottom: 20px;
		padding: 20px;
	}
</style>
