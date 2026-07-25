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
    border-width: 0.125em;
    padding: 0.25em 0.5em;
    box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.2);
    min-width: 2em;
    height: 1em;

    &::placeholder {
      font-style: italic;
      opacity: 0.5;
    }

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

    let initialValue = ''

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
        title: props.title,
        value: props.value,
        placeholder: props.placeholder,
        onBeforeInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLInputElement)
            || !(ev.target === inputElement)
          ) {
            return
          }

          if (typeof props.onBeforeInput === 'function') {
            props.onBeforeInput(ev, ev.data ?? '')
          }
        },
        onInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLInputElement)
            || !(ev.target === inputElement)
          ) {
            return
          }

          if (typeof props.onInput === 'function') {
            props.onInput(ev, ev.target.value)
          }
        },
        onInvalid: props.onInvalid,
        onFocusIn: (ev) => {
          if (
            !(ev instanceof FocusEvent)
            || !(ev.target instanceof HTMLInputElement)
            || !(ev.target === inputElement)
          ) {
            return
          }

          initialValue = ev.target.value
        },
        onFocusOut: (ev) => {
          if (
            !(ev instanceof FocusEvent)
            || !(ev.target instanceof HTMLInputElement)
            || !(ev.target === inputElement)
          ) {
            return
          }

          if (
            typeof props.onChange === 'function'
            && ev.target.value !== initialValue
          ) {
            props.onChange(ev, ev.target.value)
          }
        },
      },
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }

    return inputElement
  })
}
