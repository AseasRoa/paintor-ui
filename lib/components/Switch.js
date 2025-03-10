import { template } from 'paintor'
import { Color } from '../constants.js'

/**
 * @typedef CheckboxProps
 * @type {object}
 * @property {Variant} [variant]
 * @property {Color} [color]
 * @property {Size} [size]
 * @property {string} [class]
 * @property {boolean} [checked]
 * @property {(ex: Event) => void} [onChange]
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
input[type=checkbox] {
  margin: 5rem;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  display: inline-block;
  cursor: pointer;
  --range-thumb: red;

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

  /* Sizes */
  &.xs {
    width: 16rem;
    height: 10rem;
    border-radius: 8rem;
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.2);
  }
  &.xs::after {
    width: 6rem;
    height: 6rem;
  }
  &.s {
    width: 20rem;
    height: 12rem;
    border-radius: 6rem;
    box-shadow: 0 3rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.s::after {
    width: 7rem;
    height: 7rem;
  }
  &.m {
    width: 24rem;
    height: 14rem;
    border-radius: 7rem;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
  }
  &.m::after {
    width: 9rem;
    height: 9rem;
  }
  &.l {
    width: 33rem;
    height: 18rem;
    border-radius: 9rem;
    box-shadow: 0 4rem 2rem -1.9rem rgba(0, 0, 0, 0.2);
  }
  &.l::after {
    width: 12rem;
    height: 12rem;
  }
  &.xl {
    width: 48rem;
    height: 24rem;
    border-radius: 11rem;
    box-shadow: 0 5rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.xl::after {
    width: 18rem;
    height: 18rem;
  }

  /* Variants */
  &.outline {
    border: 1rem solid transparent;
    ${cssForOutlineColors()}
  }

  &.solid {
    background-color: var(--color-neutral);
    ${cssForSolidColors()}
  }
}
`)

/**
 * @param {CheckboxProps} props
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
        ],
        // @ts-ignore
        onChange: undefined
      }
    )
  })
}
