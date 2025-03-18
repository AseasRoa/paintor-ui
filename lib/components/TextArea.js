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
  div {
    display: inline-grid;

    &::after {
      content: attr(data-value) " ";
      white-space: pre-wrap;
      visibility: hidden;
    }

    &::after,
    > textarea {
      /* Place on top of each other */
      grid-area: 1 / 1 / 2 / 2;
      
      /* Identical styling required!! */
      resize: none;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      padding: 0.3em;
      font: inherit;
      outline: none;
      border-style: solid;
      border-width: 2rem;
      border-radius: 6rem;
      border-color: transparent;

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
  }
`)

/**
 * @type {import('types/index').TextArea}
 */
export function TextArea(props) {
  return template((x) => {
    x.$css(css)
    x.div(
      {
        data: {
          value: props.value
        },
      },
      x.textarea(
        {
          style: (
            (props.autosize ?? true)
              ? undefined
              : (
                {
                  overflow: 'scroll',
                  height: 'fit-content',
                  width: 'fit-content',
                  resize: 'both'
                }
              )
          ),
          className: [
            'textarea',
            props.class ?? '',
            props.variant ?? 'solid',
            props.color ?? 'neutral',
            props.size ?? 'm',
          ],
          rows: props.rows ?? 3,
          disabled: props.disabled,
          onInput: (ev) => {
            if (props.autosize ?? true) {
              /**
               * @see https://chriscoyier.net/2023/09/29/css-solves-auto-expanding-textareas-probably-eventually/
               */
              if (
                !(ev instanceof InputEvent)
                || !(ev.target instanceof HTMLTextAreaElement)
              ) {
                return
              }

              const el = ev.target
              const parent = el.parentNode

              if (!(parent instanceof HTMLDivElement)) {
                return
              }

              parent.dataset['value'] = el.value
            }

            if (typeof props.onInput === 'function') {
              props.onInput(ev)
            }
          },
        },
        props.value
      )
    )
  })
}
