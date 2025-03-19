import { template } from 'paintor'

// language=css
const css = (/* css */`
input[type=radio] {
  margin: 0;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  display: inline-block;
  font-family: initial;
  cursor: pointer;
  width: 24rem;
  height: 24rem;
  font-size: 48rem;
  box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover {
    filter: brightness(110%);
  }

  /* Sizes */
  &.xs { zoom: 0.7 }
  &.s { zoom: 0.85 }
  &.m { zoom: 1.0 }
  &.l { zoom: 1.2 }
  &.xl { zoom: 1.45 }

  /* Border Radius */
  border-radius: 50%;

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
 * @type {import('types/index').Radio}
 */
export function Radio(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'radio',
        checked: props.checked ?? false,
        className: [
          'radio',
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
