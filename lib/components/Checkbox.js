import { template } from 'paintor'

// language=css
const css = (/* css */`
input[type=checkbox] {
  margin: 0;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  display: inline-block;
  cursor: pointer;

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

  width: 24rem;
  height: 24rem;
  font-size: 24rem;
  border-radius: 6rem;
  box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

  /* Sizes */
  &.xs { zoom: 0.7 }
  &.s { zoom: 0.85 }
  &.m { zoom: 1.0 }
  &.l { zoom: 1.2 }
  &.xl { zoom: 1.45 }

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
        ],
        onChange: props.onChange,
      }
    )
  })
}
