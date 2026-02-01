import { template } from 'paintor'
import { cssReset, cssSize } from './functions/cssTemplates.js'

// language=css
const css = (/* css */`
  ${cssReset()}

  input[type=range] {
    ${cssSize()}

    position: relative;
    display: inline-block;
    cursor: pointer;
    height: 24rem;

    &:disabled {
      filter: grayscale(1) opacity(0.75);
      cursor: inherit;
      &:active {
        transform: none;
      }
    }

    /* Variants */
    &.outline {
      &.neutral {
        accent-color: var(--color-neutral);
      }
      &.primary {
        accent-color: var(--color-primary);
      }
      &.secondary {
        accent-color: var(--color-secondary);
      }
      &.accent {
        accent-color: var(--color-accent);
      }
      &.info {
        accent-color: var(--color-info);
      }
      &.success {
        accent-color: var(--color-success);
      }
      &.warning {
        accent-color: var(--color-warning);
      }
      &.danger {
        accent-color: var(--color-danger);
      }
    }

    &.solid {
      &.neutral {
        accent-color: var(--color-neutral);
      }
      &.primary {
        accent-color: var(--color-primary);
      }
      &.secondary {
        accent-color: var(--color-secondary);
      }
      &.accent {
        accent-color: var(--color-accent);
      }
      &.info {
        accent-color: var(--color-info);
      }
      &.success {
        accent-color: var(--color-success);
      }
      &.warning {
        accent-color: var(--color-warning);
      }
      &.danger {
        accent-color: var(--color-danger);
      }
    }
  }
`)

/**
 * @type {import('types/index').Slider}
 */
export function Slider(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'range',
        min: props.min,
        max: props.max,
        step: props.step,
        className: [
          'range',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
        ],
        onChange: (ev) => {
          if (
            !(ev instanceof Event)
            || !(ev.target instanceof HTMLInputElement)
          ) {
            return
          }

          if (typeof props.onChange === 'function') {
            props.onChange(ev, parseFloat(ev.target.value))
          }
        },
      }
    )
  })
}
