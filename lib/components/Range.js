import { template } from 'paintor'

/**
 * @typedef RangeProps
 * @type {object}
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [step]
 * @property {Variant} [variant]
 * @property {Color} [color]
 * @property {Size} [size]
 * @property {string} [class]
 * @property {boolean} [checked]
 * @property {(ex: Event) => void} [onChange]
 */

// language=css
const css = (/* css */`
input[type=range] {
  margin: 5rem;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:disabled {
    filter: grayscale(1) opacity(0.75);
    cursor: inherit;
    &:active {
      transform: none;
    }
  }

  /* Sizes */
  &.xs {
    height: 16rem;
  }
  &.s {
    height: 20rem;
  }
  &.m {
    height: 24rem;
  }
  &.l {
    height: 30rem;
  }
  &.xl {
    height: 36rem;
  }

  /* Variants */
  &.outline {
    &.neutral {
      accent-color: var(--color-neutral);
    }
    &.primary {
      accent-color: var(--color-primary);
    }
    &.secondary {
      accent-color: var(--color-secondary);
    }
    &.accent {
      accent-color: var(--color-accent);
    }
    &.info {
      accent-color: var(--color-info);
    }
    &.success {
      accent-color: var(--color-success);
    }
    &.warning {
      accent-color: var(--color-warning);
    }
    &.danger {
      accent-color: var(--color-danger);
    }
  }

  &.solid {
    &.neutral {
      accent-color: var(--color-neutral);
    }
    &.primary {
      accent-color: var(--color-primary);
    }
    &.secondary {
      accent-color: var(--color-secondary);
    }
    &.accent {
      accent-color: var(--color-accent);
    }
    &.info {
      accent-color: var(--color-info);
    }
    &.success {
      accent-color: var(--color-success);
    }
    &.warning {
      accent-color: var(--color-warning);
    }
    &.danger {
      accent-color: var(--color-danger);
    }
  }
}
`)

/**
 * @param {RangeProps} props
 */
export function Range(props) {
  return template((x) => {
    x.$css(css)
    x.input(
      {
        type: 'range',
        min: props.min,
        max: props.max,
        step: props.step,
        checked: props.checked ?? false,
        className: [
          'range',
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
