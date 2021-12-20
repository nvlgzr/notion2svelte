<script>
	export let code = '';
	export let language = '';
</script>

<pre>{code}
  <span>{language}</span>
</pre>

<style>
	span {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 0.8em;
	}

	pre {
		position: relative;
		font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
		line-height: normal;
		display: block;
		border-radius: 0.5rem;
		margin: 2.5rem;
		padding: 2.5rem;
		overflow-x: auto;
		white-space: pre-wrap;
		word-wrap: break-word;
		background: hsl(135, 88%, 16%);
		color: hsl(120, 100%, 50%);
	}

	/* pre {
		background: hsla(0, 0%, 100%, 0.75);
		font-size: 85%;
		white-space: pre-wrap;
		padding: 0.4rem 0.1rem 0.3rem 0.1rem;
	} */
</style>
