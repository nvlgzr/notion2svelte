<script>
	export let code = '';
	export let language = '';
</script>

<pre>
  <span>{code}</span>
  <span class="lang">{language}</span>
</pre>

<style>
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

	span {
		padding-bottom: 0.1rem;
	}

	.lang {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		font-size: 0.8em;
		color: hsl(120, 50%, 50%);
	}
</style>
