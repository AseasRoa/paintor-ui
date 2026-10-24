import { template } from 'paintor'
import { cssReset, cssSize } from './functions/cssTemplates.js'

// language=css
const css = (/* css */`
  ${cssReset()}

  input[type=radio] {
    ${cssSize()}

    border-radius: 50%;
    margin: 0;
    appearance: none;
    outline: none;
    position: relative;
    background: transparent;
    display: inline-block;
    font-family: initial;
    cursor: pointer;
    inline-size: 0.6667em;
    block-size: 0.6667em;
    font-size: 2.25em;
    /* box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.2); */

    &:active {
      transform: scale(0.9);
    }
    &:disabled {
      filter: grayscale(1) opacity(0.75);
      cursor: inherit;
      &:active {
        transform: none;
      }
    }
    &:checked::after {
      content: "\u2022";
      opacity: 1;
    }
    &::after {
      content: "";
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    &:hover {
      filter: saturate(90%) brightness(110%);
    }

    /* Variants */
    &.outline {
      border-style: var(--border-style);
      border-width: 0.0556em;
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
      border-style: var(--border-style);
      border-width: 0.0556em;
      background: transparent;

      &.neutral {
        border-color: oklch(from var(--color-neutral) calc(l * 0.85) c h);
        color: var(--color-neutral-content);
        background-image: linear-gradient(to top, oklch(from var(--color-neutral) calc(l * 0.93) c h), oklch(from var(--color-neutral) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-neutral);
        }
      }
      &.primary {
        border-color: oklch(from var(--color-primary) calc(l * 0.85) c h);
        color: var(--color-primary-content);
        background-image: linear-gradient(to top, oklch(from var(--color-primary) calc(l * 0.93) c h), oklch(from var(--color-primary) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-primary);
        }
      }
      &.secondary {
        border-color: oklch(from var(--color-secondary) calc(l * 0.85) c h);
        color: var(--color-secondary-content);
        background-image: linear-gradient(to top, oklch(from var(--color-secondary) calc(l * 0.93) c h), oklch(from var(--color-secondary) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-secondary);
        }
      }
      &.accent {
        border-color: oklch(from var(--color-accent) calc(l * 0.85) c h);
        color: var(--color-accent-content);
        background-image: linear-gradient(to top, oklch(from var(--color-accent) calc(l * 0.93) c h), oklch(from var(--color-accent) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-accent);
        }
      }
      &.info {
        border-color: oklch(from var(--color-info) calc(l * 0.85) c h);
        color: var(--color-info-content);
        background-image: linear-gradient(to top, oklch(from var(--color-info) calc(l * 0.93) c h), oklch(from var(--color-info) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-info);
        }
      }
      &.success {
        border-color: oklch(from var(--color-success) calc(l * 0.85) c h);
        color: var(--color-success-content);
        background-image: linear-gradient(to top, oklch(from var(--color-success) calc(l * 0.93) c h), oklch(from var(--color-success) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-success);
        }
      }
      &.warning {
        border-color: oklch(from var(--color-warning) calc(l * 0.85) c h);
        color: var(--color-warning-content);
        background-image: linear-gradient(to top, oklch(from var(--color-warning) calc(l * 0.93) c h), oklch(from var(--color-warning) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-warning);
        }
      }
      &.danger {
        border-color: oklch(from var(--color-danger) calc(l * 0.85) c h);
        color: var(--color-danger-content);
        background-image: linear-gradient(to top, oklch(from var(--color-danger) calc(l * 0.93) c h), oklch(from var(--color-danger) calc(l * 1.07) c h));

        &:checked {
          background-color: var(--color-danger);
        }
      }
    }
  }
`)

/**
 * @type {import('../../types/index').Radio}
 */
export function Radio(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.input(
      {
        type: 'radio',
        checked: props.checked ?? false,
        name: props.name,
        title: props.title,
        className: [
          'radio',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm'
        ],
        disabled: props.disabled,
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
        }
      }
    )

    return inputElement
  })
}
