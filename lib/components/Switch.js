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
input[type=checkbox] {
  margin: 5rem;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  display: inline-block;
  cursor: pointer;

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
    width: 22rem;
    height: 13rem;
    border-radius: 7rem;
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.2);
  }
  &.xs::after {
    width: 8rem;
    height: 8rem;
  }
  &.s {
    width: 26rem;
    height: 16rem;
    border-radius: 8rem;
    box-shadow: 0 3rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.s::after {
    width: 10rem;
    height: 10rem;
  }
  &.m {
    width: 36rem;
    height: 20rem;
    border-radius: 10rem;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
  }
  &.m::after {
    width: 13rem;
    height: 13rem;
  }
  &.l {
    width: 48rem;
    height: 24rem;
    border-radius:11rem;
    box-shadow: 0 4rem 2rem -1.9rem rgba(0, 0, 0, 0.2);
  }
  &.l::after {
    width: 18rem;
    height: 18rem;
  }
  &.xl {
    width: 58rem;
    height: 30rem;
    border-radius: 15rem;
    box-shadow: 0 5rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.xl::after {
    width: 22rem;
    height: 22rem;
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
        ],
        onChange: props.onChange,
      }
    )
  })
}
