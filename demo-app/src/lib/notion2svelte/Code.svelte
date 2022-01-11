<script>
	export let code = '';
	export let language = '';
</script>

<pre>
  <code>{code}</code>
  <span>{language}</span>
</pre>

<style>
  code, span {
		font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
  }

	pre {
		position: relative;
		line-height: normal;
		display: block;
		border-radius: 0.5rem;
		margin: 0 2.5rem;
		padding: 2.5rem;
		overflow-x: auto;
		white-space: pre-wrap;
		word-wrap: break-word;
		background: hsl(135, 88%, 16%);
		color: hsl(120, 100%, 50%);
	}

	span {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		font-size: 0.8em;
		color: hsl(120, 50%, 50%);
	}
</style>
