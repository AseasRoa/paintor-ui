import { template } from 'paintor'
import { Color } from '../constants.js'

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
  span {
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
    box-sizing: border-box;
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
    }

    button {
      appearance: none;
      cursor: pointer;
      border: none;
      border-radius: 6rem;
      background-color: transparent;
      
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

    /* Sizes */
    &.xs { zoom: 0.7 }
    &.s { zoom: 0.85 }
    &.m { zoom: 1.0 }
    &.l { zoom: 1.2 }
    &.xl { zoom: 1.45 }

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

    const input = x.input(
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
        ],
        onPointerDown: (ev) => {
          const button = ev.target

          if (
            !(button instanceof HTMLButtonElement)
            || !(input instanceof HTMLInputElement)
          ) {
            return
          }

          let value = parseFloat(input.value)
          const max = parseFloat(input.max)
          const min = parseFloat(input.min)
          let step = parseFloat(input.step)

          step = (isNaN(step)) ? 1 : step
          value = (isNaN(value)) ? 0 : value

          if (button.classList.contains('minus')) {
            value -= step
          }
          else {
            value += step
          }

          input.value = preciseNumber(value, min, max, step)

          if (typeof props.onInput === 'function') {
            props.onInput(ev)
          }
        }
      },
      input,
      x.button({ class: 'plus' }),
      x.button({ class: 'minus' }),
    )
  })
}
