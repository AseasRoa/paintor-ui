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
      &.${clr} {
        border-color: var(--color-${clr});
        color: var(--color-${clr});

        .arrow {
          border-top-color: var(--color-${clr});
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
        color: var(--color-on-${clr});
        border-color: var(--color-${clr});
        background-color: var(--color-${clr});
        
        .arrow {
          border-top-color: var(--color-on-${clr});
        }
      }
    `
  }

  return css
}

/**
 * @see https://blog.logrocket.com/creating-custom-select-dropdown-css/
 *
 * @type {import('types/index').Select}
 */
export function Select(props) {
  // language=css
  const css = (/* css */`
    ${cssReset()}

    div {
      display: inline-flex;
      min-width: 230rem;
      max-width: 100%;

      button,
      ul {
        ${cssSize()}
        ${cssBorderRadius()}
      }

      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        border-style: solid;
        border-width: 2rem;
        background-color: transparent;
        font: inherit;
        padding: 0;
        cursor: pointer;
        box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

        * {
          pointer-events: none;
        }

        .label {
          white-space: nowrap;
          min-width: 2em;
          height: 1em;
          padding-inline: 1ch;
          padding: 0.3em;
        }
        .arrow {
          border-style: solid;
          border-width: 6rem;
          border-color: transparent;
          border-bottom: none;
          border-top-color: gray;
          margin-inline: 1ch;
        }
        .arrow-reverse {
          border-style: solid;
          border-width: 6rem;
          border-color: transparent;
          border-bottom: none;
          border-top-color: gray;
        }

        &:hover {
          background-color: inherit;
          filter: invert(20%) brightness(120%);
        }
      }

      ul {
        position: absolute;
        z-index: 10000;
        list-style: none;
        min-width: 230rem;
        max-width: 100%;
        max-height: 300rem;
        padding: 0.3em;
        margin: 0;
        box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
        background-color: var(--color-background);
        color: var(--color-on-background);
        border: 2rem solid var(--color-background-400);
        overflow: auto;

        li {
          cursor: pointer;
          padding: 0.3em;

          * {
            pointer-events: none;
          }

          &.selected {
            background-color: var(--color-background-400);
            color: var(--color-on-background-400);
          }

          &:hover {
            background-color: inherit;
            filter: invert(20%) brightness(120%);
          }
        }
      }

      /* Variants */
      .outline {
        ${cssForOutlineColors()}
      }
      .solid {
        ${cssForSolidColors()}
      }
    }
  `)

  return template((x) => {
    x.$css(css)

    /** @type {HTMLButtonElement | null} */
    let button = null

    /** @type {HTMLElement | null} */
    let label = null

    let selectedOption = null

    if (props.selectedOption instanceof Object) {
      selectedOption = props.selectedOption
    }
    else {
      for (const option of props.options) {
        if (option.value === props.selectedOption) {
          selectedOption = option
        }
      }
    }

    const ul = x.ul(
      {
        className: [
          'select',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        style: { display: 'none' },
        onPointerDown: (ev) => {
          if (
            !(ev instanceof PointerEvent)
            || !(ev.target instanceof HTMLLIElement)
            || !(label instanceof HTMLElement)
            || !(button instanceof HTMLButtonElement)
          ) {
            return
          }

          const index = parseInt(ev.target.dataset['index'] ?? '')
          const option = (props.options ?? []).at(index) ?? null

          if (!option) {
            return
          }

          for (const child of ul.childNodes) {
            if (!(child instanceof HTMLLIElement)) {
              return
            }

            child.classList.remove('selected')
          }

          label.textContent = option.label
          button.value = option.label
          button.dataset['index'] = index.toString()
          button.dataset['value'] = option.value.toString()

          ul.style.display = 'none'
          button.classList.remove('expanded')
          ev.target.classList.toggle('selected')

          dispatchInputEvent(label)

          if (typeof props.onChange === 'function') {
            if (!Array.isArray(props.options)) {
              return
            }

            if (option) {
              props.onChange(option)
            }
          }
        }
      },
      x.$each(props.options ?? [], (option, index) => {
        let selected = false

        if (selectedOption instanceof Object) {
          selected = (option.value === selectedOption.value)
        }

        x.li(
          {
            class: selected ? 'selected' : '',
            data: { index: index, value: (option.value ?? '').toString() },
          },
          option.label
        )
      })
    )

    label = x.span(
      {
        class: 'label',
        data: { value: (selectedOption?.value ?? '').toString() },
      },
      selectedOption?.label ?? ''
    )

    button = x.button(
      {
        className: [
          'select',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
        onPointerDown: (ev) => {
          if (
            !(ev instanceof PointerEvent)
            || !(ev.target instanceof HTMLButtonElement)
          ) {
            return
          }

          const { classList } = ev.target

          classList.toggle('expanded')
          ul.style.display = (classList.contains('expanded')) ? '' : 'none'
        }
      },
      label,
      x.span({ class: 'arrow' }),
    )

    button.value = (selectedOption?.value ?? '').toString()

    x.div(button, ul)

    if (props.autoWidth) {
      label['--auto-width'] = true
      label['--auto-width-type'] = 'select'

      requestAnimationFrame(() => {
        autoWidth(label)
      })
    }
  })
}
