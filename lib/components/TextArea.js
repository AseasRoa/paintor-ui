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
  div {
    ${cssReset()}
    
    display: inline-grid;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

    &::after {
      content: attr(data-value) " ";
      white-space: pre-wrap;
      visibility: hidden;
    }

    &::after,
    > textarea {
      ${cssSize()}
      ${cssBorderRadius()}

      /* Place on top of each other */
      grid-area: 1 / 1 / 2 / 2;

      /* Identical styling required!! */
      resize: none;
      overflow: hidden;
      position: relative;
      padding: 0.3em;
      font: inherit;
      outline: none;
      border-style: solid;
      border-width: 2rem;
      border-color: transparent;
      min-width: 2em;

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
  }
`)

/**
 * @type {import('types/index').TextArea}
 */
export function TextArea(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.textarea(
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
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        rows: props.rows ?? 3,
        disabled: props.disabled,
        onInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLTextAreaElement)
          ) {
            return
          }

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
            props.onInput(ev, ev.target.value)
          }
        },
      },
      props.value
    )

    x.div(
      {
        data: {
          value: props.value
        },
      },
      inputElement
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }
  })
}
