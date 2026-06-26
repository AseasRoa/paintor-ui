import { template } from 'paintor'
import { Color } from '../constants.js'
import { cssBorderRadius, cssReset, cssSize } from './functions/cssTemplates.js'

/**
 * @returns {string}
 */
function cssForOutlineColors() {
  let css = ''

  for (const clr of Color) {
    // language=css
    css += /* css */`
      &.${clr} {
        border-color: var(--color-neutral);
        &:checked {
          border-color: var(--color-${clr});
        }
        &::after {
          background-color: var(--color-neutral);
        }
        &:checked::after {
          background-color: var(--color-${clr});
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
        &::after {
          background-color: var(--color-on-${clr});
        }
        &:checked {
          background-color: var(--color-${clr});
        }
        &:checked::after {
          background-color: var(--color-on-${clr});
        }
      }
    `
  }

  return css
}

// language=css
const css = (/* css */`
  ${cssReset()}

  input[type=checkbox] {
    ${cssSize()}
    ${cssBorderRadius({ s: '1em', m: '1em', l: '1em', full: '1em' })}

    margin: 0;
    appearance: none;
    outline: none;
    position: relative;
    background: transparent;
    display: inline-block;
    cursor: pointer;
    font-size: inherit;
    width: 2.7em;
    height: 1.5em;
    box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.2);

    &::after {
      content: "";
      transform: translate(-100%, -50%);
      left: 50%;
      top: 50%;
      border-radius: 50%;
      position: absolute;
      transition: all 200ms;
    }

    &:checked::after {
      content: "";
      transform: translate(0%, -50%);
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

    &::after {
      width: 0.98em;
      height: 0.98em;
    }

    /* Variants */
    &.outline {
      border: 0.125em solid transparent;
      ${cssForOutlineColors()}
    }

    &.solid {
      border: 0.125em solid transparent;
      background-color: var(--color-neutral);
      ${cssForSolidColors()}
    }
  }
`)

/**
 * @type {import('types/index').Switch}
 */
export function Switch(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'checkbox',
        checked: props.checked ?? false,
        className: [
          'switch',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        title: props.title,
        onChange: (ev) => {
          if (
            !(ev instanceof Event)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          if (typeof props.onChange === 'function') {
            props.onChange(ev, ev.target.checked)
          }
        },
      }
    )
  })
}
