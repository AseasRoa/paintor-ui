import { template } from 'paintor'
import { Color } from '../constants.js'
import { cssBorderRadius, cssSize } from './functions/cssTemplates.js'

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
input[type=text] {
  ${cssSize()}
  ${cssBorderRadius()}

  box-sizing: border-box;
  position: relative;
  display: inline-block;
  height: 36rem;
  font: inherit;
  outline: none;
  border-style: solid;
  border-width: 2rem;
  padding: 0.3em;
  box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

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
    x.input(
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
        onInput: props.onInput,
        onInvalid: props.onInvalid,
      },
    )
  })
}
