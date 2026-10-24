import { template } from 'paintor'
import { cssBorderRadius, cssReset, cssSize } from './functions/cssTemplates.js'
import { autoWidth } from './functions/dom.js'

// language=css
const css = (/* css */`
  ${cssReset()}

  button {
    ${cssSize()}
    ${cssBorderRadius()}

    display: inline-flex;
    gap: 0.25em;
    line-height: 1em;
    cursor: pointer;
    user-select: none;
    font-size: inherit;
    padding: 0.25em 0.5em;
    /* box-shadow: 0 0.1875em 0.125em -0.1em rgba(0, 0, 0, 0.3); */
    min-inline-size: 1em;

    &:active {
      transform: scale(0.95);
    }

    &:disabled {
      filter: grayscale(1) opacity(0.75);
      cursor: inherit;
      &:active {
        transform: none;
      }
    }

    &:hover {
      filter: saturate(90%) brightness(110%);
    }

    span {
      font-size: inherit;
      
      i {
        background-color: currentColor;
        margin-inline-end: 0.125em;
      }
    }

    /* Variants */
    &.outline {
      background-color: transparent;
      border-style: var(--border-style);
      border-width: 0.125em;

      &.neutral {
        border-color: var(--color-neutral);
        color: var(--color-neutral);
        
        &:hover {
          background-color: var(--color-neutral);
          color: var(--color-neutral-content);
        }
      }
      &.primary {
        border-color: var(--color-primary);
        color: var(--color-primary);

        &:hover {
          background-color: var(--color-primary);
          color: var(--color-primary-content);
        }
      }
      &.secondary {
        border-color: var(--color-secondary);
        color: var(--color-secondary);

        &:hover {
          background-color: var(--color-secondary);
          color: var(--color-secondary-content);
        }
      }
      &.accent {
        border-color: var(--color-accent);
        color: var(--color-accent);

        &:hover {
          background-color: var(--color-accent);
          color: var(--color-accent-content);
        }
      }
      &.info {
        border-color: var(--color-info);
        color: var(--color-info);

        &:hover {
          background-color: var(--color-info);
          color: var(--color-info-content);
        }
      }
      &.success {
        border-color: var(--color-success);
        color: var(--color-success);

        &:hover {
          background-color: var(--color-success);
          color: var(--color-success-content);
        }
      }
      &.warning {
        border-color: var(--color-warning);
        color: var(--color-warning);

        &:hover {
          background-color: var(--color-warning);
          color: var(--color-warning-content);
        }
      }
      &.danger {
        border-color: var(--color-danger);
        color: var(--color-danger);

        &:hover {
          background-color: var(--color-danger);
          color: var(--color-danger-content);
        }
      }
    }

    &.solid {
      border-style: var(--border-style);
      border-width: 0.125em;

      &.neutral {
        background-color: var(--color-neutral);
        background-image: linear-gradient(-225deg, oklch(from var(--color-neutral) calc(l * 0.93) c h), oklch(from var(--color-neutral) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-neutral) calc(l * 0.75) c h);
        color: var(--color-neutral-content);
      }
      &.primary {
        background-color: var(--color-primary);
        background-image: linear-gradient(-225deg, oklch(from var(--color-primary) calc(l * 0.93) c h), oklch(from var(--color-primary) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-primary) calc(l * 0.75) c h);
        color: var(--color-primary-content);
      }
      &.secondary {
        background-color: var(--color-secondary);
        background-image: linear-gradient(-225deg, oklch(from var(--color-secondary) calc(l * 0.93) c h), oklch(from var(--color-secondary) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-secondary) calc(l * 0.75) c h);
        color: var(--color-secondary-content);
      }
      &.accent {
        background-color: var(--color-accent);
        background-image: linear-gradient(-225deg, oklch(from var(--color-accent) calc(l * 0.93) c h), oklch(from var(--color-accent) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-accent) calc(l * 0.75) c h);
        color: var(--color-accent-content);
      }
      &.info {
        background-color: var(--color-info);
        background-image: linear-gradient(-225deg, oklch(from var(--color-info) calc(l * 0.93) c h), oklch(from var(--color-info) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-info) calc(l * 0.75) c h);
        color: var(--color-info-content);
      }
      &.success {
        background-color: var(--color-success);
        background-image: linear-gradient(-225deg, oklch(from var(--color-success) calc(l * 0.93) c h), oklch(from var(--color-success) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-success) calc(l * 0.75) c h);
        color: var(--color-success-content);
      }
      &.warning {
        background-color: var(--color-warning);
        background-image: linear-gradient(-225deg, oklch(from var(--color-warning) calc(l * 0.93) c h), oklch(from var(--color-warning) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-warning) calc(l * 0.75) c h);
        color: var(--color-warning-content);
      }
      &.danger {
        background-color: var(--color-danger);
        background-image: linear-gradient(-225deg, oklch(from var(--color-danger) calc(l * 0.93) c h), oklch(from var(--color-danger) calc(l * 1.07) c h));
        border-color: oklch(from var(--color-danger) calc(l * 0.75) c h);
        color: var(--color-danger-content);
      }
    }
  }
`)

/**
 * @type {import('../../types/index').Button}
 */
export function Button(props) {
  return template((x) => {
    x.$css(css)

    const inputElement = x.button(
      {
        className: () => [
          'button',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
          props.borderRadius ? (`border-radius-${props.borderRadius}`) : ''
        ],
        disabled: props.disabled,
        title: props.title,
        onClick: props.onClick
      },
      (props.icon)
        ? x.span(props.icon)
        : null,
      (props.value)
        ? x.span(props.value)
        : null
    )

    if (props.autoWidth) {
      inputElement['--auto-width'] = true

      requestAnimationFrame(() => {
        autoWidth(inputElement)
      })
    }

    return inputElement
  })
}
