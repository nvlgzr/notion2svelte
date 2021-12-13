<script>
	export let url = 'Missing URL for image';
</script>

<figure>
	<img width="100%" height="100%" src={url} />
	<figcaption><slot style="margin-top: 0.75rem;" /></figcaption>
</figure>

<style>
	figure,
	img {
		border: thin silver solid;
	}

	img {
		border-radius: 0.25rem;
	}

	figure {
		color: gray;
		background-color: whitesmoke;
		padding: 1rem;
		border-radius: 0.5rem;
		margin: 0 auto 0.5rem auto;
	}

	figcaption {
		margin-top: 0.5rem;
	}
</style>
