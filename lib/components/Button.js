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

  font-size: 18rem;
  height: 38rem;
  padding: 0 18rem;
  border-radius: 6rem;
  box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
  
  span {
    font-size: 32rem;
    padding-right: 9rem;
    vertical-align: middle;
  }

  /* Sizes */
  &.xs {
    zoom: 0.7;
  }
  &.s {
    zoom: 0.85
  }
  &.m {
    zoom: 1.0
  }
  &.l {
    zoom: 1.2
  }
  &.xl {
    zoom: 1.45
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
      (props.icon) ? x.span(props.icon) : null,
      props.value,
    )
  })
}
