<script>
	export let code = '';
</script>

<span><pre>{code}</pre></span>

<style>
	span {
		font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
		line-height: normal;
		background: hsla(0, 0%, 100%, 0.45);
		color: #eb5757;
		border-radius: 3px;
		font-size: 85%; /* Sets height of gray box */
		padding: 0.1rem 0.2rem 0.1rem 0.2rem;
	}

	pre {
		display: inline;
		background: hsla(0, 0%, 100%, 0.75);
		color: inherit;
		font-size: 85%;
		white-space: pre-wrap;
		padding: 0.4rem 0.1rem 0.3rem 0.1rem;
	}
</style>
