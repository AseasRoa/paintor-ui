import { css, template } from 'paintor'
import {
  Button,
  Checkbox,
  DatePicker,
  Icon,
  NumberInput,
  Radio,
  Select,
  Slider,
  Switch,
  TextArea,
  TextInput
} from '#paintor-ui'

/**
 * @import {Color, Size, Variant} from '../types/index.d.ts'
 */

export const UIPreview = function() {
  // language=css
  css(`
    :root {
      --border-style: solid;
    }

    :root, [data-theme=light] {
      color-scheme: light;

      --color-base-100: oklch(100% 0 0);
      --color-base-200: oklch(97% 0 0);
      --color-base-300: oklch(94% 0 0);
      --color-base-400: oklch(91% 0 0);

      --color-base: oklch(88% 0 0);
      --color-base-content: oklch(22% 0 0);

      --color-base-600: oklch(85% 0 0);
      --color-base-700: oklch(82% 0 0);
      --color-base-800: oklch(79% 0 0);
      --color-base-900: oklch(76% 0 0);

      --color-neutral: oklch(60% 0 0);
      --color-neutral-content: oklch(100% 0 0);

      --color-primary: oklch(51.55% 0.1555 252.28);
      --color-primary-content: oklch(100% 0 0);

      --color-secondary: oklch(65.51% 0.2321 339.58);
      --color-secondary-content: oklch(100% 0 0);

      --color-accent: oklch(80% 0.21 104);
      --color-accent-content: oklch(100% 0 0);

      --color-info: oklch(51.26% 0.1055 232.74);
      --color-info-content: oklch(100% 0 0);

      --color-success: oklch(60% 0.1944 143.62);
      --color-success-content: oklch(100% 0 0);

      --color-warning: oklch(70% 0.19 52.98);
      --color-warning-content: oklch(100% 0 0);

      --color-danger: oklch(63% 0.2577 29.23);
      --color-danger-content: oklch(100% 0 0);
    }

    :root, [data-theme=dark] {
      color-scheme: dark;

      --color-base-100: oklch(10% 0 0);
      --color-base-200: oklch(15% 0 0);
      --color-base-300: oklch(20% 0 0);
      --color-base-400: oklch(25% 0 0);

      --color-base: oklch(30% 0 0);
      --color-base-content: oklch(100% 0 0);

      --color-base-600: oklch(35% 0 0);
      --color-base-700: oklch(40% 0 0);
      --color-base-800: oklch(45% 0 0);
      --color-base-900: oklch(50% 0 0);

      --color-neutral: oklch(60% 0 0);
      --color-neutral-content: oklch(100% 0 0);

      --color-primary: oklch(51.55% 0.1555 252.28);
      --color-primary-content: oklch(100% 0 0);

      --color-secondary: oklch(65.51% 0.2321 339.58);
      --color-secondary-content: oklch(100% 0 0);

      --color-accent: oklch(80% 0.21 104);
      --color-accent-content: oklch(100% 0 0);

      --color-info: oklch(51.26% 0.1055 232.74);
      --color-info-content: oklch(100% 0 0);

      --color-success: oklch(60% 0.1944 143.62);
      --color-success-content: oklch(100% 0 0);

      --color-warning: oklch(70% 0.19 52.98);
      --color-warning-content: oklch(100% 0 0);

      --color-danger: oklch(63% 0.2577 29.23);
      --color-danger-content: oklch(100% 0 0);
    }

    main {
      display: flex;
      block-size: 100%;
      font-size: 16rem;
      
      > div {
        background-color: var(--color-base-100);
        color: var(--color-base-content);
        
        > div {
          padding: 8rem;

          > div {
            background-color: var(--color-base);
            padding: 4rem;

            > span {
              display: inline-block;
              padding: 4rem;
            }
          }
        }
      }
    }
  `)

  const themes = ['light', 'dark']

  /** @type {Size[]} */
  const sizes = ['xl', 'l', 'm', 's', 'xs']

  /** @type {Variant[]} */
  const variants = [
    // 'plain',
    'solid',
    'outline'
    // 'soft',
    // 'none'
  ]

  /** @type {Color[]} */
  const colors = [
    'neutral',
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'danger'
  ]

  return template((x) => {
    x.main(
      x.$each(themes, (theme) => {
        x.div({ data: { theme } },
          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Button({
                    value: `solid ${size}`,
                    variant: 'solid',
                    size: size,
                    icon: Icon({ name: 'ui/search' })
                  })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Button({
                        value: `${variant} ${color}`,
                        variant: variant,
                        color: color,
                        icon: Icon({ name: 'ui/search' })
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            const value = 3.14
            const variant = 'solid'

            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  NumberInput({ value, variant, size }))
                )
              )
            )
            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(colors, (color) => x.span(
                    NumberInput({ value, variant, color }))
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  TextInput({
                    value: `solid ${size}`,
                    variant: 'solid',
                    size: size
                  })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      TextInput({
                        value: `${variant} ${color}`,
                        variant: variant,
                        color: color
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            const options = [
              { value: 'a', label: 'Label A' },
              { value: 'b', label: 'Label B' },
              { value: 'c', label: 'This is Label C and it is a bit longer' }
            ]
            const selectedOption = options[1]
            const variant = 'solid'

            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Select({ options, selectedOption, variant, size })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Select({ options, selectedOption, variant, color })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => [
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  DatePicker({ variant: 'solid', size: size })
                ))
              )
            ),
            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      DatePicker({ variant, color })
                    )
                  )
                )
              ))
            )
          ]),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  TextArea({
                    value: `solid ${size}`,
                    variant: 'solid',
                    size: size
                  })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      TextArea({
                        value: `${variant} ${color}`,
                        variant: variant,
                        color: color
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Checkbox({ checked: true, variant: 'solid', size: size })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Checkbox({
                        checked: true,
                        variant: variant,
                        color: color
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Radio({ checked: true, variant: 'solid', size: size })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Radio({
                        checked: true,
                        variant: variant,
                        color: color
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Switch({ checked: true, variant: 'solid', size: size })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Switch({
                        checked: true,
                        variant: variant,
                        color: color
                      })
                    )
                  )
                )
              ))
            )
          }),

          x.$if(true, () => {
            x.div(
              x.div(
                x.$each(sizes, (size) => x.span(
                  Slider({ variant: 'solid', size: size })
                ))
              )
            )

            x.div(
              x.$each(variants, (variant) => (
                x.div(
                  x.$each(
                    colors,
                    (color) => x.span(
                      Slider({ variant, color })
                    )
                  )
                )
              ))
            )
          })
        )
      })
    )
  })
}
