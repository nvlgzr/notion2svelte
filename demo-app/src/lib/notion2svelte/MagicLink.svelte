<script>
  export let href = "#";
  export let internal = false;
</script>

<a {href} class:internal><slot /></a>

<style>
  /* Link styles largely cribbed from Matthew Butterick ↓ */
  /* https://practicaltypography.com/typography-in-ten-minutes.html */
  a {
    text-decoration: none;
    color: inherit;
    transition-property: background;
    transition-duration: 0.2s;
  }
  a:hover {
    color: hsl(120, 45%, 30%);
    background: hsl(120, 70%, 91%);
    transition-property: background;
    transition-duration: 0.2s;
    border-radius: 0.1rem;
  }
  a:before {
    content: "";
    margin-left: 0.25rem;
  }
  a:after {
    position: relative;
    content: "\FEFF°";
    margin-right: 0.1rem;
    font-size: 90%;
    top: -0.1em;
    color: hsl(120, 40%, 40%);
    font-feature-settings: "caps";
    font-variant-numeric: normal;
  }
  a.internal,
  a.internal:before,
  a.internal:after,
  a:hover.internal,
  a:hover.internal:before,
  a:hover.internal:after {
    color: hsl(310, 33%, 46%);
    transition-property: background;
    transition-duration: 0.2s;
    border-radius: 0.1rem;
  }
  a:hover.internal {
    background: hsl(310, 70%, 91%);
  }
</style>
