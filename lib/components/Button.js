import { template } from 'paintor'

// language=css
const css = (/* css */`
button {
  line-height: 1em;
  cursor: pointer;
  user-select: none;

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

  /* Sizes */
  &.xs {
    font-size: 12rem;
    height: 28rem;
    padding: 0 14rem;
    border-radius: 4rem;
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.2);
  }
  &.s {
    font-size: 14rem;
    height: 34rem;
    padding: 0 18rem;
    border-radius: 5rem;
    box-shadow: 0 3rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.m {
    font-size: 16rem;
    height: 40rem;
    padding: 0 22rem;
    border-radius: 6rem;
    box-shadow: 0 0.3rem 0.2rem -1.6rem rgba(0, 0, 0, 0.2);
  }
  &.l {
    font-size: 18rem;
    height: 48rem;
    padding: 0 26rem;
    border-radius: 7rem;
    box-shadow: 0 4rem 2rem -1.9rem rgba(0, 0, 0, 0.2);
  }
  &.xl {
    font-size: 20rem;
    height: 58rem;
    padding: 0 32rem;
    border-radius: 8rem;
    box-shadow: 0 5rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }

  /* Variants */
  &.outline {
    border-style: solid;
    border-width: 1rem;
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

    &.neutral {
      background-color: var(--color-neutral);
      border-color: var(--color-neutral);
      color: var(--color-on-neutral);
    }
    &.primary {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--color-on-primary);
    }
    &.secondary {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      color: var(--color-on-secondary);
    }
    &.accent {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-on-accent);
    }
    &.info {
      background-color: var(--color-info);
      border-color: var(--color-info);
      color: var(--color-on-info);
    }
    &.success {
      background-color: var(--color-success);
      border-color: var(--color-success);
      color: var(--color-on-success);
    }
    &.warning {
      background-color: var(--color-warning);
      border-color: var(--color-warning);
      color: var(--color-on-warning);
    }
    &.danger {
      background-color: var(--color-danger);
      border-color: var(--color-danger);
      color: var(--color-on-danger);
    }
  }
}
`)

/**
 * @type {import('types/index').Button}
 */
export function Button(props) {
  return template((x) => {
    x.$css(css)

    x.button(
      {
        className: () => [
          'button',
          props.class ?? '',
          props.variant ?? 'solid',
          props.color ?? 'neutral',
          props.size ?? 'm',
        ],
        onClick: props.onClick,
      },
      props.value,
    )
  })
}
