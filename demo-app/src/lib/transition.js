export function slide(node, { isOpen, duration = 250 }) {
  let initialHeight = node.offsetHeight;
  node.style.height = isOpen ? 'auto' : 0;

  let animation = node.animate([
    { height: 0 },
    { height: `${initialHeight}px` }
  ], {
    duration,
    fill: 'both',
    direction: isOpen ? 'reverse' : 'normal'
  })
  animation.pause()

  animation.onfinish = ({ currentTime }) => {
    if (!currentTime) {
      animation.reverse()
      animation.pause()
    }

    node.dispatchEvent(new CustomEvent('animationEnd'))
  }

  return {
    update: () => {
      animation.currentTime ? animation.reverse() : animation.play()
    }
  }
}
