<script>
  export let code = '';
  export let language = '';

  const unEscapeHtml = (str) => {
    return str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  };
</script>

<pre><code>{unEscapeHtml(code)}</code>
  <span>{language}</span>
</pre>
<div>
  {#if $$slots.default}
    <div><slot /></div>
  {/if}
</div>

<style>
  code,
  span {
    font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
    tab-size: 3;
  }

  pre {
    position: relative;
    line-height: normal;
    display: block;
    border-radius: 0.5rem;
    margin: 0 1.5rem 0 0;
    padding: 1.5rem;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: hsl(135, 88%, 16%);
    color: hsl(120, 100%, 50%);
    font-size: 0.75rem;
  }

  span {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 0.8rem;
    color: hsl(120, 50%, 50%);
  }

  div {
    /* caption text */
    font-size: 0.8rem;
    color: hsl(120, 50%, 45%);
    margin: 0.5rem 1rem 0.5rem 0;
  }
</style>
