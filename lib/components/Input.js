import { template } from 'paintor'

// language=css
const css = (/* css */`
input[type=text] {
  box-sizing: border-box;
  position: relative;
  display: inline-block;

  &:disabled {
    filter: grayscale(1) opacity(0.75);
    cursor: inherit;
    &:active {
      transform: none;
    }
  }

  height: 36rem;
  font-size: 18rem;
  border-style: solid;
  border-width: 2rem;
  border-radius: 6rem;
  border-color: transparent;
  padding: 0 8rem;

  /* Sizes */
  &.xs { zoom: 0.7 }
  &.s { zoom: 0.85 }
  &.m { zoom: 1.0 }
  &.l { zoom: 1.2 }
  &.xl { zoom: 1.45 }

  /* Variants */
  &.outline {
    &.neutral {
      color: var(--color-neutral);
      border-color: var(--color-neutral);
    }
    &.primary {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
    &.secondary {
      color: var(--color-secondary);
      border-color: var(--color-secondary);
    }
    &.accent {
      color: var(--color-accent);
      border-color: var(--color-accent);
    }
    &.info {
      color: var(--color-info);
      border-color: var(--color-info);
    }
    &.success {
      color: var(--color-success);
      border-color: var(--color-success);
    }
    &.warning {
      color: var(--color-warning);
      border-color: var(--color-warning);
    }
    &.danger {
      color: var(--color-danger);
      border-color: var(--color-danger);
    }
  }

  &.solid {
    &:hover {
      filter: opacity(0.75) brightness(1.2);
    }
    &:focus {
      filter: opacity(0.75) brightness(1.2);
      border-color: transparent;
    }

    &.neutral {
      color: var(--color-on-neutral);
      background-color: var(--color-neutral);
    }
    &.primary {
      color: var(--color-on-primary);
      background-color: var(--color-primary);
    }
    &.secondary {
      color: var(--color-on-secondary);
      background-color: var(--color-secondary);
    }
    &.accent {
      color: var(--color-on-accent);
      background-color: var(--color-accent);
    }
    &.info {
      color: var(--color-on-info);
      background-color: var(--color-info);
    }
    &.success {
      color: var(--color-on-success);
      background-color: var(--color-success);
    }
    &.warning {
      color: var(--color-on-warning);
      background-color: var(--color-warning);
    }
    &.danger {
      color: var(--color-on-danger);
      background-color: var(--color-danger);
    }
  }
}
`)

/**
 * @type {import('types/index').Input}
 */
export function Input(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'text',
        className: [
          'text',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
        ],
        value: props.value,
        onInput: props.onInput,
      },
    )
  })
}
