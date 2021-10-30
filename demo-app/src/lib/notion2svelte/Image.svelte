<script>
	export let url = 'Missing URL for image';
</script>

<figure>
	<img
		width="100%"
		height="100%"
		src={url}
		alt="Oops! We're missing its alt tag. Please let us know and we'll correct the issue ASAP!"
	/>
	<figcaption><slot style="margin-top: 0.75rem;" /></figcaption>
</figure>

<style>
	figure {
		color: gray;
		padding: 1rem;
		border: thin silver solid;
		border-radius: 0.5rem;
	}
</style>
