<script>
  // Utility function copied from sveltifier.js because I couldn't be bothered.
  const stripDashes = (pageId) => pageId.replace(/-/g, '');

  export let blockProps = {};

  let inParent = false;
  let inPopup = false;
  let showControl = false;
  // showControl = true; // ← Dev toggle
  let showProps = false;
  // showProps = true; // ← Dev toggle
  let controlDisplayTimer = null;

  const parentEntered = () => {
    inParent = true;
    showControl = true;
    clearTimeout(controlDisplayTimer);
  };

  const parentExited = () => {
    inParent = false;
    controlDisplayTimer = setTimeout(() => {
      if (!inPopup) {
        showControl = false;
      }
    }, 500);
  };

  const popupEntered = () => {
    inPopup = true;
  };

  const popupExited = () => (inPopup = false);
</script>

<section on:mouseenter={parentEntered} on:mouseleave={parentExited}>
  {#if $$slots.default}
    <slot />
  {:else}
    &nbsp; <!-- Ensures empty blocks get rendered -->
  {/if}
  {#if showControl}
    <div>
      <button class="control" on:click={() => (showProps = !showProps)}> ֍ </button>
    </div>
  {/if}
  {#if showProps}
    <div class="propsWrapper">
      <button
        class="props close"
        on:click={() => {
          showProps = false;
          showControl = false;
        }}>╳</button
      >
      <button class="props">
        <a
          href="http://notion.so/nvlgzr/{stripDashes(blockProps.pageId)}#{stripDashes(
            blockProps.id
          )}"
          target="blank"
        >
          Highlight block in Notion
        </a>
      </button>
      <pre contenteditable="true" on:mouseenter={popupEntered} on:mouseleave={popupExited}>
Block props:
<code>{JSON.stringify(blockProps, null, 2)}</code>
    </pre>
    </div>
  {/if}
</section>

<style>
  section {
    padding-bottom: 0.5rem;
    position: relative;
  }

  div {
    position: absolute;
    left: 0;
    top: -0.2rem;
    height: 100%;
  }

  div.propsWrapper {
    z-index: 10;
    position: absolute;
    top: 1rem;
    left: 0.5rem;
  }

  button {
    border-radius: 0.25rem;
    background-color: white;
    cursor: pointer;
  }

  button:hover {
    opacity: 50%;
    background-color: #f0f0f0;
  }

  button:active {
    background-color: #e0e0e0;
  }

  button.control {
    color: hsl(0, 0%, 80%);
    font-size: x-large;
    position: relative;
    left: -2rem;
    border: none;
  }

  button.props {
    color: white;
    font-size: small;
    position: absolute;
    right: 1.25rem;
    top: 2rem;
    z-index: 11;
    padding: 0.25rem 0.5rem;
    background-color: hsl(0, 0%, 100%, 0.5);
    border: 1px solid hsl(0, 0%, 100%);
  }

  button.close {
    right: unset;
    left: 1rem;
    top: 1.75rem;
    background: none;
    border: none;
    font-size: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  pre {
    background: hsl(135, 88%, 16%);
    color: hsl(120, 100%, 50%);
    font-size: 0.75rem;
    /* light wide border */
    border: 3px solid hsl(0, 0%, 95%);
    border-radius: 0.5rem;
    padding: 4rem 1.5rem 1.5rem 1.5rem;
    box-shadow: 0 0.25rem 1rem hsla(0, 0%, 0%, 0.5);
  }
</style>
