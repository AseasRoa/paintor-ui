import { template } from 'paintor'
import { cssBorderRadius, cssReset, cssSize } from './functions/cssTemplates.js'

// language=css
const css = (/* css */`
  ${cssReset()}

  input[type=checkbox] {
    ${cssSize()}
    ${cssBorderRadius()}

    margin: 0;
    appearance: none;
    outline: none;
    position: relative;
    background: transparent;
    display: inline-block;
    cursor: pointer;
    width: 1.0em;
    height: 1.0em;
    font-size: 1.3em;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

    &:indeterminate::after {
      content: "-";
      opacity: 1;
    }

    &:active {
      transform: scale(0.9);
    }

    &:checked::after {
      content: "\u2713";
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
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
      border-style: solid;
      border-width: 2rem;
      background: transparent;
  
      &.neutral {
        border-color: var(--color-neutral);
        color: var(--color-neutral);
      }
      &.primary {
        border-color: var(--color-primary);
        color: var(--color-primary);
      }
      &.secondary {
        border-color: var(--color-secondary);
        color: var(--color-secondary);
      }
      &.accent {
        border-color: var(--color-accent);
        color: var(--color-accent);
      }
      &.info {
        border-color: var(--color-info);
        color: var(--color-info);
      }
      &.success {
        border-color: var(--color-success);
        color: var(--color-success);
      }
      &.warning {
        border-color: var(--color-warning);
        color: var(--color-warning);
      }
      &.danger {
        border-color: var(--color-danger);
        color: var(--color-danger);
      }
    }

    &.solid {
      border-style: solid;
      border-width: 1rem;
      background: transparent;
  
      &.neutral {
        border-color: var(--color-neutral);
        color: var(--color-on-neutral);
        &:checked {
          background-color: var(--color-neutral);
        }
      }
      &.primary {
        border-color: var(--color-primary);
        color: var(--color-on-primary);
        &:checked {
          background-color: var(--color-primary);
        }
      }
      &.secondary {
        border-color: var(--color-secondary);
        color: var(--color-on-secondary);
        &:checked {
          background-color: var(--color-secondary);
        }
      }
      &.accent {
        border-color: var(--color-accent);
        color: var(--color-on-accent);
        &:checked {
          background-color: var(--color-accent);
        }
      }
      &.info {
        border-color: var(--color-info);
        color: var(--color-on-info);
        &:checked {
          background-color: var(--color-info);
        }
      }
      &.success {
        border-color: var(--color-success);
        color: var(--color-on-success);
        &:checked {
          background-color: var(--color-success);
        }
      }
      &.warning {
        border-color: var(--color-warning);
        color: var(--color-on-warning);
        &:checked {
          background-color: var(--color-warning);
        }
      }
      &.danger {
        border-color: var(--color-danger);
        color: var(--color-on-danger);
        &:checked {
          background-color: var(--color-danger);
        }
      }
    }
  }
`)

/**
 * @type {import('types/index').Checkbox}
 */
export function Checkbox(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'checkbox',
        checked: props.checked ?? false,
        className: [
          'checkbox',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? ('border-radius-' + props.borderRadius) : ''
        ],
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
