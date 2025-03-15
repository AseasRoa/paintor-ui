import { template } from 'paintor'

// language=css
const css = (/* css */`
input[type=range] {
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

  height: 24rem;

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
 * @type {import('types/index').Slider}
 */
export function Slider(props) {
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
        onChange: props.onChange,
      }
    )
  })
}
