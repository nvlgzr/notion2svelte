<script>
  import Portal from './Portal.svelte';

  export let src = '';
  export let height = '100%';
</script>

<Portal target="#cover">
  <div style="height: {height};">
    <img style="height: {height};" {src} alt="ARIA Fail. Sorry!" />
  </div>
  <div class="inner-shadow" style="height: {height};">&nbsp;</div>
</Portal>

<style>
  div {
    position: absolute;
    top: 0;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px hsla(0, 0%, 13%, 0.1) solid;
    z-index: -1;
  }

  .inner-shadow {
    /* bottom inset deep box-shadow */
    box-shadow: inset 0 -3rem 2rem -2rem hsla(0, 0%, 13%, 0.427);
    /* box-shadow: 0 10px 30px hsla(0, 0%, 13%, 0.5) inset; */
    /* box-shadow: inset 0 0 100px -10px hsla(0, 0%, 13%, 0.5); */
    /* box-shadow: inset 0 0 0.5rem 1rem hsla(0, 0%, 13%, 0.5); */
  }

  img {
    width: 100%;
    animation: kenburns 3s 1 cubic-bezier(0.075, 0.82, 0.165, 1);
    object-fit: cover;
  }

  @keyframes kenburns {
    0% {
      transform: scale3d(7, 2, 2) translate3d(50px, 50px, 50px) rotate(-0.02turn);
      opacity: 0;
    }
    100% {
      transform: scale3d(1, 1, 1) translate3d(0, 0, 0) rotate(0);
    }
  }
</style>
