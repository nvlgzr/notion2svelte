<script>
  export let value = 'default';

  $: bg = value.includes('_background');
  $: fg = !bg;

  const options = {
    default: 'hsl(45deg 8% 20%)',
    gray: 'gray',
    brown: 'hsl(18deg 19% 48%)',
    orange: 'hsl(30deg 89% 45%)',
    yellow: 'hsl(55deg 100% 39%)',
    green: 'hsl(172deg 78% 27%)',
    blue: 'hsl(198deg 87% 32%)',
    purple: 'hsl(264deg 44% 45%)',
    pink: 'hsl(324deg 74% 39%)',
    red: 'hsl(0deg 72% 56%)',
    gray_background: 'hsl(210deg 5% 93%)',
    brown_background: 'hsl(20deg 12% 90%)',
    orange_background: 'hsl(29deg 74% 92%)',
    yellow_background: 'hsl(45deg 80% 92%)',
    green_background: 'hsl(169deg 31% 90%)',
    blue_background: 'hsl(198deg 42% 91%)',
    purple_background: 'hsl(266deg 35% 92%)',
    pink_background: 'hsl(326deg 49% 92%)',
    red_background: 'hsl(0deg 74% 94%)'
  };
</script>

<span class:fg class:bg style="--color:{options[value]}; --default:{options['default']}"
  ><slot /></span
>

<style>
  span {
  }
  .fg {
    color: var(--color);
    background-color: transparent;
  }
  .bg {
    background-color: var(--color);
    color: var(--default);
  }
</style>
