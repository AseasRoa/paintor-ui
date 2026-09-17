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
      &.${clr},
      &.${clr} > button {
        border-color: var(--color-${clr});

        input {
          color: var(--color-${clr});
        }

        &::after {
          border-bottom-color: var(--color-${clr});
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
        background-color: var(--color-${clr});

        input {
          color: var(--color-on-${clr});
        }

        button {
          &::after {
            border-bottom-color: var(--color-on-${clr});
          }
        }
      }
    `
  }

  return css
}

// language=css
const css = (/* css */`
  ${cssReset()}

  span {
    ${cssSize()}
    ${cssBorderRadius()}

    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-auto-flow: row;
    padding: 0;
    vertical-align: middle;
    border-style: solid;
    border-width: 0.125em;
    border-radius: 0.375em;
    border-color: transparent;
    position: relative;
    box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.2);

    input[type=number], input[type=text] {
      outline: none;
      border: none;
      background-color: transparent;
      padding: 0.172em;
      padding-left: 0.5em;
      padding-right: 0em;
      font: inherit;
      grid-column: 1;
      grid-row: 1 / 3;
      min-width: 2em;
      min-height: 1em;

      /* Remove arrows on Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Remove arrows on Firefox */
      -moz-appearance: textfield;
    }

    button {
      appearance: none;
      cursor: pointer;
      border: none;
      border-radius: 0.125em;
      background-color: transparent;
      margin-inline: 1ch;
      
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0.4em;
        border-top-width: 0;
        border-color: transparent;
      }

      &:hover {
        background-color: inherit;
        filter: invert(20%) brightness(120%);
      }
      
      &.plus {
        grid-column: 2;
        grid-row: 1;
      }
    }

    .minus {
      grid-column: 2;
      grid-row: 2;
      
      &::after {
        transform: rotate(180deg);
      }
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
 * @type {import('../../types/index').NumberInput}
 */
export function NumberInput(props) {
  return template((x) => {
    x.$css(css)

    /** @type {number} */
    let oldValueAsNumber = NaN

    const inputElement = x.input(
      {
        type: 'text',
        disabled: props.disabled,
        min: props.min ?? undefined,
        max: props.max ?? undefined,
        step: props.step,
        title: props.title,
        value: props.value,
        onBeforeInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          const nextValue = getNextValueOnBeforeInput(ev)
          let preventInputEvent = false

          if (canBeNumber(nextValue)) {
            oldValueAsNumber = Number(ev.target.value)

            if (!props.allowTextInput) {
              const alignedValue = alignNumber(inputElement, nextValue)

              if (alignedValue !== Number(nextValue)) {
                preventInputEvent = true
              }
            }
          }
          else {
            oldValueAsNumber = NaN

            if (!props.allowTextInput) {
              preventInputEvent = true
            }
          }

          if (preventInputEvent) {
            ev.preventDefault()
            ev.stopPropagation()

            return false
          }

          return true
        },
        onInput: (ev) => {
          if (
            !(ev instanceof InputEvent)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          if (
            !Number.isNaN(oldValueAsNumber)
            && oldValueAsNumber === Number(ev.target.value)
          ) {
            return
          }

          if (typeof props.onInput === 'function') {
            const value = canBeNumber(ev.target.value)
              ? Number(ev.target.value)
              : ev.target.value

            props.onInput(ev, value)
          }
        },
        onInvalid: props.onInvalid
      }
    )

    const mainEleent = x.span(
      {
        className: [
          'number-input',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? (`border-radius-${props.borderRadius}`) : ''
        ],
        onClick: (ev) => {
          const button = ev.target

          if (
            !(ev instanceof PointerEvent)
            || !(button instanceof HTMLButtonElement)
            || !(inputElement instanceof HTMLInputElement)
          ) {
            return
          }

          const doStep = (button.classList.contains('minus')) ? -1 : 1

          alignNumber(
            inputElement,
            undefined,
            doStep
          )

          dispatchInputEvent(inputElement)
        }
      },
      inputElement,
      x.button({ class: 'plus' }),
      x.button({ class: 'minus' })
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }

    return mainEleent
  })
}

/**
 * @param {HTMLInputElement} inputElement
 * @param {string} [inputValue] Use when typing the value
 * @param {1 | -1} [doStep] Use when using the increment/decrement arrows
 * @returns {number}
 */
function alignNumber(inputElement, inputValue, doStep) {
  let value = (inputValue ?? inputElement.value)
  const max = (inputElement.max) ? Number(inputElement.max) : NaN
  const min = (inputElement.min) ? Number(inputElement.min) : NaN
  /** @type {number | null} */
  let step = (inputElement.step) ? Number(inputElement.step) : NaN

  step = (isNaN(Number(step))) ? null : step
  value = (isNaN(Number(value))) ? '0' : value

  let alignedValue = preciseNumber(value, min, max, step)

  // increment/decrement
  if (doStep !== undefined) {
    step ??= 1
    alignedValue = String(Number(value) + step)
  }

  if (inputValue !== undefined) {
    return Number(alignedValue)
  }

  inputElement.value = alignedValue

  return Number(alignedValue)
}

/**
 * @param {*} value
 * @returns {boolean}
 */
export function canBeNumber(value) {
  // oxlint-disable-next-line unicorn/prefer-number-coercion
  return !isNaN(parseFloat(value)) && isFinite(value)
}

/**
 * @param {InputEvent} inputEvent
 * @returns {string}
 */
function getNextValueOnBeforeInput(inputEvent) {
  if (!(inputEvent.target instanceof HTMLInputElement)) {
    throw new Error('The element must be HTMLInputElement')
  }

  const { inputType, target } = inputEvent
  const { value } = target

  // Note: selectionStart and selectionEnd
  // not supported for input="number"
  const { selectionStart, selectionEnd } = target

  if (selectionStart === null || selectionEnd === null) {
    throw new Error(`The input element doesn't support selection`)
  }

  switch (inputType) {
    case 'deleteContentBackward': {
      return value.slice(0, selectionStart - 1) + value.slice(selectionEnd)
    }
    case 'deleteContentForward': {
      return value.slice(0, selectionStart) + value.slice(selectionEnd + 1)
    }
    default: {
      return (
        value.slice(0, selectionStart)
        + (inputEvent.data ?? '')
        + value.slice(selectionEnd)
      )
    }
  }
}

/**
 * @param {string} number
 * @param {number} min
 * @param {number} max
 * @param {number | null} step
 * @returns {string}
 */
function preciseNumber(number, min, max, step) {
  if (!isNaN(max) && Number(number) > max) {
    return max.toString()
  }

  if (!isNaN(min) && Number(number) < min) {
    return min.toString()
  }

  if (step === null) {
    return number.toString()
  }

  let fractionDigits = Math.abs(step).toString().length - 2

  if (fractionDigits < 0) fractionDigits = 0

  return Number(number).toFixed(fractionDigits)
}
