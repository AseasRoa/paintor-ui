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
        color: var(--color-${clr});
        border-color: var(--color-${clr});

        &::before {
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
        color: var(--color-on-${clr});
        border-color: var(--color-${clr});
        background-color: var(--color-${clr});

        &:before {
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
  input[type=date] {
    ${cssSize()}
    ${cssBorderRadius()}

    position: relative;
    display: inline-block;
    font: inherit;
    outline: none;
    border-style: solid;
    border-width: 0.125em;
    padding: 0.25em 0.75em 0.25em 0.5em;
    box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.2);
    min-width: 2em;
    height: 1em;

    /* Hide the browser icon */
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
      display: block;
      position: absolute;
      right: 0.5em;
      width: 1em;
      height: 1em;
      cursor: pointer;
    }

    /* Replace the browser icon with custom one */
    &:before {
      content: '';
      mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7z"/></svg>');
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;
      position: absolute;
      right: 0.5em;
      pointer-events: none;
      width: 1em;
      height: 1em;
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
 * @type {import('../../types/index').DatePicker}
 */
export function DatePicker(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.input(
      {
        className: [
          'date-picker-input',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? (`border-radius-${props.borderRadius}`) : ''
        ],
        disabled: props.disabled,
        // @ts-expect-error
        min: inputToDateString(props.min) ?? undefined,
        // @ts-expect-error
        max: inputToDateString(props.max) ?? undefined,
        title: props.title,
        type: 'date',
        value: inputToDateString(props.value),
        onChange: (ev) => {
          if (
            !(ev instanceof Event)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          if (typeof props.onChange === 'function') {
            const value
              = (ev.target.valueAsDate)
                ? {
                  asDate: ev.target.valueAsDate,
                  asNumber: ev.target.valueAsNumber,
                  asString: ev.target.value
                }
                : null

            props.onChange(ev, value)
          }
        }
      }
    )

    return inputElement
  })
}

/**
 * @param {Date} date
 * @returns {string}
 */
function dateToString(date) {
  return date.toISOString().slice(0, 10)
}

/**
 * @param {string | number | Date | null | undefined} input
 * @returns {null | string}
 */
function inputToDateString(input) {
  if (typeof input === 'string') {
    return input
  }

  if (typeof input === 'number') {
    return dateToString(new Date(input))
  }

  if (input instanceof Date) {
    return dateToString(input)
  }

  return null
}
