import { css, template } from 'paintor'
import { Button, Checkbox, Input, Radio, Range, Switch } from '#paintor-ui'

export const UIPreview = function() {
  // language=css
  css(`
  :root, [data-theme=light] {
    color-scheme: light;

    --color-background-100: hsl(0, 0%, 40%);
    --color-on-background-100: hsl(0, 0%, 10%);

    --color-background-200: hsl(0, 0%, 55%);
    --color-on-background-200: hsl(0, 0%, 10%);

    --color-background-300: hsl(0, 0%, 70%);
    --color-on-background-300: hsl(0, 0%, 10%);

    --color-background-400: hsl(0, 0%, 85%);
    --color-on-background-400: hsl(0, 0%, 10%);

    --color-background: hsl(0, 0%, 100%);
    --color-on-background: hsl(0, 0%, 10%);

    --color-background-600: hsl(0, 0%, 100%);
    --color-on-background-600: hsl(0, 0%, 10%);

    --color-background-700: hsl(0, 0%, 100%);
    --color-on-background-700: hsl(0, 0%, 10%);

    --color-background-800: hsl(0, 0%, 100%);
    --color-on-background-800: hsl(0, 0%, 10%);

    --color-background-900: hsl(0, 0%, 100%);
    --color-on-background-900: hsl(0, 0%, 10%);

    --color-neutral: hsl(0, 0%, 50%);
    --color-on-neutral: hsl(0 0% 100%);

    --color-primary: hsl(207 100% 37%);
    --color-on-primary: hsl(0 0% 100%);

    --color-secondary: hsl(315, 76%, 58%);
    --color-on-secondary: hsl(0 0% 100%);

    --color-accent: hsl(16.85 93.55% 42.55%);
    --color-on-accent: hsl(0 0% 100%);

    --color-info: hsl(196, 100%, 30%);
    --color-on-info: hsl(0 0% 100%);

    --color-success: hsl(130, 100%, 30%);
    --color-on-success: hsl(0 0% 100%);

    --color-warning: hsl(30, 100%, 50%);
    --color-on-warning: hsl(0 0% 100%);

    --color-danger: hsl(0, 100%, 50%);
    --color-on-danger: hsl(0 0% 100%);
  }

  :root, [data-theme=dark] {
    color-scheme: dark;

    --color-background-100: hsl(0, 0%, 0%);
    --color-on-background-100: hsl(0, 0%, 100%);

    --color-background-200: hsl(0, 0%, 6%);
    --color-on-background-200: hsl(0, 0%, 100%);

    --color-background-300: hsl(0, 0%, 10%);
    --color-on-background-300: hsl(0, 0%, 100%);

    --color-background-400: hsl(0, 0%, 14%);
    --color-on-background-400: hsl(0, 0%, 100%);

    --color-background: hsl(0, 0%, 18%);
    --color-on-background: hsl(0, 0%, 100%);

    --color-background-600: hsl(0, 0%, 22%);
    --color-on-background-600: hsl(0, 0%, 100%);

    --color-background-700: hsl(0, 0%, 26%);
    --color-on-background-700: hsl(0, 0%, 100%);

    --color-background-800: hsl(0, 0%, 30%);
    --color-on-background-800: hsl(0, 0%, 100%);

    --color-background-900: hsl(0, 0%, 34%);
    --color-on-background-900: hsl(0, 0%, 100%);
  }

  main {
    background-color: var(--color-background);
    height: 100%;
  }
`)

  return template((x) => {
    x.main({ data: { theme: 'light' } },
      x.$if(true, () => {
        x.div(
          Button({
            value: 'solid xl', variant: 'solid', size: 'xl'
          }),
          Button({
            value: 'solid l', variant: 'solid', size: 'l'
          }),
          Button({
            value: 'solid m', variant: 'solid', size: 'm'
          }),
          Button({
            value: 'solid s', variant: 'solid', size: 's'
          }),
          Button({
            value: 'solid xs', variant: 'solid', size: 'xs'
          }),
        ),
        x.div(
          Button({
            value: 'neutral', variant: 'outline', size: 'm', color: 'neutral'
          }),
          Button({
            value: 'primary', variant: 'outline', size: 'm', color: 'primary'
          }),
          Button({
            value: 'secondary', variant: 'outline', size: 'm', color: 'secondary'
          }),
          Button({
            value: 'accent', variant: 'outline', size: 'm', color: 'accent'
          }),
          Button({
            value: 'info', variant: 'outline', size: 'm', color: 'info'
          }),
          Button({
            value: 'success', variant: 'outline', size: 'm', color: 'success'
          }),
          Button({
            value: 'warning', variant: 'outline', size: 'm', color: 'warning'
          }),
          Button({
            value: 'danger', variant: 'outline', size: 'm', color: 'danger'
          }),
        ),
        x.div(
          Button({
            value: 'neutral', variant: 'solid', size: 'm', color: 'neutral'
          }),
          Button({
            value: 'primary', variant: 'solid', size: 'm', color: 'primary'
          }),
          Button({
            value: 'secondary', variant: 'solid', size: 'm', color: 'secondary'
          }),
          Button({
            value: 'accent', variant: 'solid', size: 'm', color: 'accent'
          }),
          Button({
            value: 'info', variant: 'solid', size: 'm', color: 'info'
          }),
          Button({
            value: 'success', variant: 'solid', size: 'm', color: 'success'
          }),
          Button({
            value: 'warning', variant: 'solid', size: 'm', color: 'warning'
          }),
          Button({
            value: 'danger', variant: 'solid', size: 'm', color: 'danger'
          }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Checkbox({ checked: true, variant: 'solid', size: 'xl' }),
          Checkbox({ checked: true, variant: 'solid', size: 'l' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm' }),
          Checkbox({ checked: true, variant: 'solid', size: 's' }),
          Checkbox({ checked: true, variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'neutral' }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'primary' }),
          Checkbox({
            checked: true,
            variant: 'outline',
            size: 'm',
            color: 'secondary'
          }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'accent' }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'info' }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'success' }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'warning' }),
          Checkbox({ checked: true, variant: 'outline', size: 'm', color: 'danger' }),
        ),
        x.div(
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'neutral' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'primary' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'secondary' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'accent' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'info' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'success' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'warning' }),
          Checkbox({ checked: true, variant: 'solid', size: 'm', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Radio({ checked: true, variant: 'solid', size: 'xl' }),
          Radio({ checked: true, variant: 'solid', size: 'l' }),
          Radio({ checked: true, variant: 'solid', size: 'm' }),
          Radio({ checked: true, variant: 'solid', size: 's' }),
          Radio({ checked: true, variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'neutral' }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'primary' }),
          Radio({
            checked: true,
            variant: 'outline',
            size: 'm',
            color: 'secondary'
          }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'accent' }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'info' }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'success' }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'warning' }),
          Radio({ checked: true, variant: 'outline', size: 'm', color: 'danger' }),
        ),
        x.div(
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'neutral' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'primary' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'secondary' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'accent' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'info' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'success' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'warning' }),
          Radio({ checked: true, variant: 'solid', size: 'm', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Switch({ checked: true, variant: 'solid', size: 'xl' }),
          Switch({ checked: true, variant: 'solid', size: 'l' }),
          Switch({ checked: true, variant: 'solid', size: 'm' }),
          Switch({ checked: true, variant: 'solid', size: 's' }),
          Switch({ checked: true, variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'neutral' }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'primary' }),
          Switch({
            checked: true,
            variant: 'outline',
            size: 'm',
            color: 'secondary'
          }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'accent' }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'info' }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'success' }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'warning' }),
          Switch({ checked: true, variant: 'outline', size: 'm', color: 'danger' }),
        ),
        x.div(
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'neutral' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'primary' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'secondary' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'accent' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'info' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'success' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'warning' }),
          Switch({ checked: true, variant: 'solid', size: 'm', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Input({ value: 'solid xl', variant: 'solid', size: 'xl' }),
          Input({ value: 'solid l', variant: 'solid', size: 'l' }),
          Input({ value: 'solid m', variant: 'solid', size: 'm' }),
          Input({ value: 'solid s', variant: 'solid', size: 's' }),
          Input({ value: 'solid xs', variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'neutral' }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'primary' }),
          Input({
            value: 'neutral',
            variant: 'outline',
            size: 'm',
            color: 'secondary'
          }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'accent' }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'info' }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'success' }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'warning' }),
          Input({ value: 'neutral', variant: 'outline', size: 'm', color: 'danger' }),
        ),
        x.div(
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'neutral' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'primary' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'secondary' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'accent' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'info' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'success' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'warning' }),
          Input({ value: 'neutral', variant: 'solid', size: 'm', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Range({ checked: true, variant: 'solid', size: 'xl' }),
          Range({ checked: true, variant: 'solid', size: 'l' }),
          Range({ checked: true, variant: 'solid', size: 'm' }),
          Range({ checked: true, variant: 'solid', size: 's' }),
          Range({ checked: true, variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Range({ checked: true, variant: 'outline', size: 'm', color: 'neutral' }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'primary' }),
          Range({
            checked: true,
            variant: 'outline',
            size: 'm',
            color: 'secondary'
          }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'accent' }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'info' }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'success' }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'warning' }),
          Range({ checked: true, variant: 'outline', size: 'm', color: 'danger' }),
        ),
        x.div(
          Range({ checked: true, variant: 'solid', size: 'm', color: 'neutral' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'primary' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'secondary' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'accent' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'info' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'success' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'warning' }),
          Range({ checked: true, variant: 'solid', size: 'm', color: 'danger' }),
        )
      }),
    )
  })
}
