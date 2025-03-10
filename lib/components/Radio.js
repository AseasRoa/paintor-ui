import { template } from 'paintor'

/**
 * @typedef RadioProps
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
input[type=radio] {
  margin: 5rem;
  appearance: none;
  outline: none;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  display: inline-block;
  font-family: math;
  cursor: pointer;

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

  /* Sizes */
  &.xs {
    width: 16rem;
    height: 16rem;
    font-size: 32rem;
    border-radius: 8rem;
    box-shadow: 0 2rem 2rem -1rem rgba(0, 0, 0, 0.2);
  }
  &.s {
    width: 20rem;
    height: 20rem;
    font-size: 40rem;
    border-radius: 10rem;
    box-shadow: 0 3rem 2rem -2rem rgba(0, 0, 0, 0.2);
  }
  &.m {
    width: 24rem;
    height: 24rem;
    font-size: 48rem;
    border-radius: 12rem;
    box-shadow: 0 3rem 2rem -1.6rem rgba(0, 0, 0, 0.2);
  }
  &.l {
    width: 30rem;
    height: 30rem;
    font-size: 60rem;
    border-radius: 15rem;
    box-shadow: 0 4rem 2rem -1.9rem rgba(0, 0, 0, 0.2);
  }
  &.xl {
    width: 36rem;
    height: 36rem;
    font-size: 72rem;
    border-radius: 18rem;
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
 * @param {RadioProps} props
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
        // @ts-ignore
        onChange: props.onChange
      }
    )
  })
}
