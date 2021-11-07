/**
 *
 * @param { HTMLElement } node
 * @returns {object} Object with destroy() function
 */
export function clickOutside(node) {
  const handleClick = (e) => {
    if (!node) return

    if (!node?.contains(e.target) && !e.defaultPrevented) {
      node.dispatchEvent(
        new CustomEvent('click-outside')
      )
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy: () => {
      document.removeEventListener('click', handleClick, true)
    }
  }
}