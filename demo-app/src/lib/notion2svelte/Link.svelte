<script>
  export let type = 'absolute'; // | 'mention' | 'alias'
  export let href = '#';
</script>

<a
  {href}
  class:mention={type === 'mention'}
  class:alias={type === 'alias'}
  class:absolute={type === 'absolute'}><slot /></a
>

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
  a:after {
    position: relative;
    margin-right: 0.1rem;
    font-size: 90%;
    top: -0.1em;
    color: hsl(120, 40%, 40%);
    font-feature-settings: 'caps';
    font-variant-numeric: normal;
  }
  a.mention:before,
  a.mention:after,
  a:hover.mention,
  a:hover.mention:before,
  a:hover.mention:after {
    color: hsl(190, 33%, 46%);
    transition-property: background;
    transition-duration: 0.2s;
    border-radius: 0.1rem;
  }
  a:hover.mention {
    background: hsl(190, 70%, 91%);
  }
  a.mention::after,
  a.alias::after {
    content: '\FEFF⭒';
    font-size: 1rem;
    top: -0.55rem;
  }

  a.alias:before,
  a.alias:after,
  a:hover.alias,
  a:hover.alias:before,
  a:hover.alias:after {
    color: hsl(310, 33%, 46%);
    transition-property: background;
    transition-duration: 0.2s;
    border-radius: 0.1rem;
  }
  a:hover.alias {
    background: hsl(310, 70%, 91%);
  }

  a.absolute:before,
  a.absolute:after,
  a:hover.absolute,
  a:hover.absolute:before,
  a:hover.absolute:after {
    color: hsl(70, 33%, 46%);
    transition-property: background;
    transition-duration: 0.2s;
    border-radius: 0.1rem;
  }
  a:hover.absolute {
    background: hsl(70, 70%, 91%);
  }
  a.absolute::after {
    content: '\FEFF°';
  }

  a:visited {
    color: hsl(120, 40%, 50%);
  }
</style>
