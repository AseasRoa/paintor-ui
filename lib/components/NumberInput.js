import { template } from 'paintor'
import { Color } from '../constants.js'
import { cssBorderRadius, cssReset, cssSize } from './functions/cssTemplates.js'
import { autoWidth, dispatchInputEvent } from './functions/dom.js'

/**
 * @returns {string}
 */
function cssForOutlineColors() {
  let css = ''

  for (const clr of Color) {
    // language=css
    css += /* css */`
      &.${clr},
      &.${clr} > button {
        border-color: var(--color-${clr});

        input {
          color: var(--color-${clr});
        }

        &::after {
          border-bottom-color: var(--color-${clr});
        }
      }
    `
  }

  return css
}

/**
 * @returns {string}
 */
function cssForSolidColors() {
  let css = ''

  for (const clr of Color) {
    // language=css
    css += /* css */`
      &.${clr} {
        background-color: var(--color-${clr});

        input {
          color: var(--color-on-${clr});
        }

        button {
          &::after {
            border-bottom-color: var(--color-on-${clr});
          }
        }
      }
    `
  }

  return css
}

// language=css
const css = (/* css */`
  ${cssReset()}

  span {
    ${cssSize()}
    ${cssBorderRadius()}

    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-auto-flow: row;
    padding: 0;
    vertical-align: middle;
    border-style: solid;
    border-width: 2rem;
    border-radius: 6rem;
    border-color: transparent;
    position: relative;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

    input[type=text] {
      outline: none;
      border: none;
      background-color: transparent;
      padding: 0.3em;
      font: inherit;
      grid-column: 1;
      grid-row: 1 / 3;
      min-width: 2em;
      height: 1em;
    }

    button {
      appearance: none;
      cursor: pointer;
      border: none;
      border-radius: 6rem;
      background-color: transparent;
      margin-inline: 1ch;
      
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6rem;
        border-top-width: 0;
        border-color: transparent;
      }

      &:hover {
        background-color: inherit;
        filter: invert(20%) brightness(120%);
      }
      
      &.plus {
        grid-column: 2;
        grid-row: 1;
      }
    }

    .minus {
      grid-column: 2;
      grid-row: 2;
      
      &::after {
        transform: rotate(180deg);
      }
    }

    &:disabled {
      filter: grayscale(1) opacity(0.75);
      cursor: inherit;

      &:active {
        transform: none;
      }
    }

    &:hover {
      filter: brightness(1.1);
    }

    /* Variants */
    &.outline {
      ${cssForOutlineColors()}
    }
    &.solid {
      ${cssForSolidColors()}
    }
  }
`)

/**
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @param {number} step
 * @returns {string}
 */
function preciseNumber(number, min, max, step) {
  if (!isNaN(max) && number > max) {
    return max.toString()
  }

  if (!isNaN(min) && number < min) {
    return min.toString()
  }

  let fractionDigits = Math.abs(step).toString().length - 2

  if (fractionDigits < 0) fractionDigits = 0

  return number.toFixed(fractionDigits)
}

/**
 * @type {import('types/index').NumberInput}
 */
export function NumberInput(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.input(
      {
        type: 'text',
        min: props.min,
        max: props.max,
        step: props.step,
        value: props.value,
        onInput: props.onInput,
        onInvalid: props.onInvalid,
      },
    )

    x.span(
      {
        className: [
          'number-input',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        onClick: (ev) => {
          const button = ev.target

          if (
            !(ev instanceof PointerEvent)
            || !(button instanceof HTMLButtonElement)
            || !(inputElement instanceof HTMLInputElement)
          ) {
            return
          }

          let value = parseFloat(inputElement.value)
          const max = parseFloat(inputElement.max)
          const min = parseFloat(inputElement.min)
          let step = parseFloat(inputElement.step)

          step = (isNaN(step)) ? 1 : step
          value = (isNaN(value)) ? 0 : value

          if (button.classList.contains('minus')) {
            value -= step
          }
          else {
            value += step
          }

          inputElement.value = preciseNumber(value, min, max, step)

          dispatchInputEvent(inputElement)

          if (typeof props.onInput === 'function') {
            props.onInput(ev)
          }
        }
      },
      inputElement,
      x.button({ class: 'plus' }),
      x.button({ class: 'minus' }),
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }
  })
}
