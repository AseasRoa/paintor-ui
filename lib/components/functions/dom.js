/**
 * @param {HTMLElement} element
 * @returns {void}
 */
export function dispatchInputEvent(element) {
  const inputEvent = new InputEvent(
    'input',
    {
      view: window,
      bubbles: true,
      cancelable: true,
    }
  )
  element.dispatchEvent(inputEvent)
}

/**
 * @see https://www.geeksforgeeks.org/javascript/calculate-the-width-of-the-text-in-javascript/
 * @param {HTMLElement} element
 * @returns {string}
 */
export function autoWidth(element) {
  const computedStyle = window.getComputedStyle(element)
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) return '0px'

  let inputText = ''

  if ('value' in element) {
    inputText = element.value
  }
  else {
    inputText = element.textContent
  }

  context.font = computedStyle.font

  const textMeasures = context.measureText(inputText)
  const width = Math.ceil(textMeasures.width ?? 0)
  const formattedWidth = `${width}px`

  element.style.width = formattedWidth

  return formattedWidth
}

/**
 * @returns {void}
 */
export function autoWidthListener() {
  window.addEventListener('input', (event) => {
    if (
      !(event instanceof Event)
      || !(event.target instanceof HTMLElement)
      || !('--auto-width' in event.target)
    ) {
      return
    }

    autoWidth(event.target)
  })
}
