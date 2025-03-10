import { template } from 'paintor'

/**
 * @typedef CheckboxProps
 * @type {object}
 * @property {Variant} [variant]
 * @property {Color} [color]
 * @property {Size} [size]
 * @property {string} [class]
 * @property {boolean} [checked]
 * @property {(ex: Event) => void} [onChange]
 */

// language=css
const css = (/* css */`
input[type=checkbox] {
  margin: 5rem;
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
  &:disabled {
    filter: grayscale(1) opacity(0.75);
    cursor: inherit;
    &:active {
      transform: none;
    }
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

  /* Sizes */
  &.xs {
    width: 16rem;
    height: 16rem;
    font-size: 16rem;
    border-radius: 4rem;
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.2);
  }
  &.s {
    width: 20rem;
    height: 20rem;
    font-size: 20rem;
    border-radius: 5rem;
    box-shadow: 0 3rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.m {
    width: 24rem;
    height: 24rem;
    font-size: 24rem;
    border-radius: 6rem;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
  }
  &.l {
    width: 30rem;
    height: 30rem;
    font-size: 30rem;
    border-radius: 7rem;
    box-shadow: 0 4rem 2rem -1.9rem rgba(0, 0, 0, 0.2);
  }
  &.xl {
    width: 36rem;
    height: 36rem;
    font-size: 36rem;
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
 * @param {CheckboxProps} props
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
        // @ts-ignore
        onChange: props.onChange
      }
    )
  })
}
