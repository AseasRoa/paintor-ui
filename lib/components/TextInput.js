import { template } from 'paintor'
import { Color } from '../constants.js'
import { cssBorderRadius, cssReset, cssSize } from './functions/cssTemplates.js'
import { autoWidth } from './functions/dom.js'

/**
 * @returns {string}
 */
function cssForOutlineColors() {
  let css = ''

  for (const clr of Color) {
    // language=css
    css += /* css */`
      &.${clr} {
        color: var(--color-${clr});
        border-color: var(--color-${clr});
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
        color: var(--color-on-${clr});
        border-color: var(--color-${clr});
        background-color: var(--color-${clr});
      }
    `
  }

  return css
}

// language=css
const css = (/* css */`
  ${cssReset()}

  input[type=text] {
    ${cssSize()}
    ${cssBorderRadius()}

    position: relative;
    display: inline-block;
    font: inherit;
    outline: none;
    border-style: solid;
    border-width: 2rem;
    padding: 0.3em;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
    min-width: 2em;
    height: 1em;

    &:disabled {
      filter: grayscale(1) opacity(0.75);
      cursor: inherit;
      &:active {
        transform: none;
      }
    }

    &:hover {
      filter: brightness(110%);
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
 * @type {import('types/index').TextInput}
 */
export function TextInput(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.input(
      {
        type: 'text',
        className: [
          'text',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        pattern: props.pattern,
        value: props.value,
        onInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          if (typeof props.onInput === 'function') {
            props.onInput(ev, ev.target.value)
          }

          props.onInput
        },
        onInvalid: props.onInvalid,
      },
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }
  })
}
