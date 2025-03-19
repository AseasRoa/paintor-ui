import { css, template } from 'paintor'
import {
  Button,
  Checkbox,
  NumberInput,
  Radio,
  Slider,
  Switch,
  TextArea,
  TextInput,
} from '#paintor-ui'

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
    font-size: 18rem;
  }
`)

  return template((x) => {
    x.main({ data: { theme: 'light' } },
      x.$if(true, () => {
        x.div(
          Button({ value: 'solid xl', variant: 'solid', size: 'xl' }),
          Button({ value: 'solid l', variant: 'solid', size: 'l' }),
          Button({ value: 'solid m', variant: 'solid', size: 'm' }),
          Button({ value: 'solid s', variant: 'solid', size: 's' }),
          Button({ value: 'solid xs', variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Button({ value: 'primary', variant: 'outline', color: 'primary', borderRadius: 'none' }),
          Button({ value: 'primary', variant: 'outline', color: 'primary', borderRadius: 's' }),
          Button({ value: 'primary', variant: 'outline', color: 'primary', borderRadius: 'm' }),
          Button({ value: 'primary', variant: 'outline', color: 'primary', borderRadius: 'l' }),
          Button({ value: 'primary', variant: 'outline', color: 'primary', borderRadius: 'full' }),
        ),
        x.div(
          Button({ value: 'neutral', variant: 'outline', color: 'neutral' }),
          Button({ value: 'primary', variant: 'outline', color: 'primary' }),
          Button({ value: 'secondary', variant: 'outline', color: 'secondary' }),
          Button({ value: 'accent', variant: 'outline', color: 'accent' }),
          Button({ value: 'info', variant: 'outline', color: 'info' }),
          Button({ value: 'success', variant: 'outline', color: 'success' }),
          Button({ value: 'warning', variant: 'outline', color: 'warning' }),
          Button({ value: 'danger', variant: 'outline', color: 'danger' }),
        ),
        x.div(
          Button({ value: 'neutral', variant: 'solid', color: 'neutral' }),
          Button({ value: 'primary', variant: 'solid', color: 'primary' }),
          Button({ value: 'secondary', variant: 'solid', color: 'secondary' }),
          Button({ value: 'accent', variant: 'solid', color: 'accent' }),
          Button({ value: 'info', variant: 'solid', color: 'info' }),
          Button({ value: 'success', variant: 'solid', color: 'success' }),
          Button({ value: 'warning', variant: 'solid', color: 'warning' }),
          Button({ value: 'danger', variant: 'solid', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Checkbox({ variant: 'solid', size: 'xl', checked: true }),
          Checkbox({ variant: 'solid', size: 'l', checked: true }),
          Checkbox({ variant: 'solid', size: 'm', checked: true }),
          Checkbox({ variant: 'solid', size: 's', checked: true }),
          Checkbox({ variant: 'solid', size: 'xs', checked: true }),
        ),
        x.div(
          Checkbox({ variant: 'outline', color: 'neutral', checked: true }),
          Checkbox({ variant: 'outline', color: 'primary', checked: true }),
          Checkbox({ variant: 'outline', color: 'secondary', checked: true }),
          Checkbox({ variant: 'outline', color: 'accent', checked: true }),
          Checkbox({ variant: 'outline', color: 'info', checked: true }),
          Checkbox({ variant: 'outline', color: 'success', checked: true }),
          Checkbox({ variant: 'outline', color: 'warning', checked: true }),
          Checkbox({ variant: 'outline', color: 'danger', checked: true }),
        ),
        x.div(
          Checkbox({ variant: 'solid', color: 'neutral', checked: true }),
          Checkbox({ variant: 'solid', color: 'primary', checked: true }),
          Checkbox({ variant: 'solid', color: 'secondary', checked: true }),
          Checkbox({ variant: 'solid', color: 'accent', checked: true }),
          Checkbox({ variant: 'solid', color: 'info', checked: true }),
          Checkbox({ variant: 'solid', color: 'success', checked: true }),
          Checkbox({ variant: 'solid', color: 'warning', checked: true }),
          Checkbox({ variant: 'solid', color: 'danger', checked: true }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Radio({ variant: 'solid', size: 'xl', checked: true }),
          Radio({ variant: 'solid', size: 'l', checked: true }),
          Radio({ variant: 'solid', size: 'm', checked: true }),
          Radio({ variant: 'solid', size: 's', checked: true }),
          Radio({ variant: 'solid', size: 'xs', checked: true }),
        ),
        x.div(
          Radio({ variant: 'outline', color: 'neutral', checked: true }),
          Radio({ variant: 'outline', color: 'primary', checked: true }),
          Radio({ variant: 'outline', color: 'secondary', checked: true }),
          Radio({ variant: 'outline', color: 'accent', checked: true }),
          Radio({ variant: 'outline', color: 'info', checked: true }),
          Radio({ variant: 'outline', color: 'success', checked: true }),
          Radio({ variant: 'outline', color: 'warning', checked: true }),
          Radio({ variant: 'outline', color: 'danger', checked: true }),
        ),
        x.div(
          Radio({ variant: 'solid', color: 'neutral', checked: true }),
          Radio({ variant: 'solid', color: 'primary', checked: true }),
          Radio({ variant: 'solid', color: 'secondary', checked: true }),
          Radio({ variant: 'solid', color: 'accent', checked: true }),
          Radio({ variant: 'solid', color: 'info', checked: true }),
          Radio({ variant: 'solid', color: 'success', checked: true }),
          Radio({ variant: 'solid', color: 'warning', checked: true }),
          Radio({ variant: 'solid', color: 'danger', checked: true }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Switch({ variant: 'solid', size: 'xl', checked: true }),
          Switch({ variant: 'solid', size: 'l', checked: true }),
          Switch({ variant: 'solid', size: 'm', checked: true }),
          Switch({ variant: 'solid', size: 's', checked: true }),
          Switch({ variant: 'solid', size: 'xs', checked: true }),
        ),
        x.div(
          Switch({ variant: 'outline', color: 'neutral', checked: true }),
          Switch({ variant: 'outline', color: 'primary', checked: true }),
          Switch({ variant: 'outline', color: 'secondary', checked: true }),
          Switch({ variant: 'outline', color: 'accent', checked: true }),
          Switch({ variant: 'outline', color: 'info', checked: true }),
          Switch({ variant: 'outline', color: 'success', checked: true }),
          Switch({ variant: 'outline', color: 'warning', checked: true }),
          Switch({ variant: 'outline', color: 'danger', checked: true }),
        ),
        x.div(
          Switch({ variant: 'solid', color: 'neutral', checked: true }),
          Switch({ variant: 'solid', color: 'primary', checked: true }),
          Switch({ variant: 'solid', color: 'secondary', checked: true }),
          Switch({ variant: 'solid', color: 'accent', checked: true }),
          Switch({ variant: 'solid', color: 'info', checked: true }),
          Switch({ variant: 'solid', color: 'success', checked: true }),
          Switch({ variant: 'solid', color: 'warning', checked: true }),
          Switch({ variant: 'solid', color: 'danger', checked: true }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          TextInput({ variant: 'solid', size: 'xl', value: 'solid xl' }),
          TextInput({ variant: 'solid', size: 'l', value: 'solid l' }),
          TextInput({ variant: 'solid', size: 'm', value: 'solid m' }),
          TextInput({ variant: 'solid', size: 's', value: 'solid s' }),
          TextInput({ variant: 'solid', size: 'xs', value: 'solid xs' }),
        ),
        x.div(
          TextInput({ variant: 'outline', color: 'neutral', value: 'neutral' }),
          TextInput({ variant: 'outline', color: 'primary', value: 'primary' }),
          TextInput({ variant: 'outline', color: 'secondary', value: 'secondary' }),
          TextInput({ variant: 'outline', color: 'accent', value: 'accent' }),
          TextInput({ variant: 'outline', color: 'info', value: 'info' }),
          TextInput({ variant: 'outline', color: 'success', value: 'success' }),
          TextInput({ variant: 'outline', color: 'warning', value: 'warning' }),
          TextInput({ variant: 'outline', color: 'danger', value: 'danger' }),
        ),
        x.div(
          TextInput({ variant: 'solid', color: 'neutral', value: 'neutral' }),
          TextInput({ variant: 'solid', color: 'primary', value: 'primary' }),
          TextInput({ variant: 'solid', color: 'secondary', value: 'secondary' }),
          TextInput({ variant: 'solid', color: 'accent', value: 'accent' }),
          TextInput({ variant: 'solid', color: 'info', value: 'info' }),
          TextInput({ variant: 'solid', color: 'success', value: 'success' }),
          TextInput({ variant: 'solid', color: 'warning', value: 'warning' }),
          TextInput({ variant: 'solid', color: 'danger', value: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          NumberInput({ variant: 'solid', size: 'xl', value: 0 }),
          NumberInput({ variant: 'solid', size: 'l', value: 0 }),
          NumberInput({ variant: 'solid', size: 'm', value: 0 }),
          NumberInput({ variant: 'solid', size: 's', value: 0 }),
          NumberInput({ variant: 'solid', size: 'xs', value: 0 }),
        ),
        x.div(
          NumberInput({ variant: 'outline', color: 'neutral', value: 0 }),
          NumberInput({ variant: 'outline', color: 'primary', value: 0 }),
          NumberInput({ variant: 'outline', color: 'secondary', value: 0 }),
          NumberInput({ variant: 'outline', color: 'accent', value: 0 }),
          NumberInput({ variant: 'outline', color: 'info', value: 0 }),
          NumberInput({ variant: 'outline', color: 'success', value: 0 }),
          NumberInput({ variant: 'outline', color: 'warning', value: 0 }),
          NumberInput({ variant: 'outline', color: 'danger', value: 0 }),
        ),
        x.div(
          NumberInput({ variant: 'solid', color: 'neutral', value: 0 }),
          NumberInput({ variant: 'solid', color: 'primary', value: 0 }),
          NumberInput({ variant: 'solid', color: 'secondary', value: 0 }),
          NumberInput({ variant: 'solid', color: 'accent', value: 0 }),
          NumberInput({ variant: 'solid', color: 'info', value: 0 }),
          NumberInput({ variant: 'solid', color: 'success', value: 0 }),
          NumberInput({ variant: 'solid', color: 'warning', value: 0 }),
          NumberInput({ variant: 'solid', color: 'danger', value: 0 }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          TextArea({ value: 'solid xl', variant: 'solid', size: 'xl' }),
          TextArea({ value: 'solid l', variant: 'solid', size: 'l' }),
          TextArea({ value: 'solid m', variant: 'solid', size: 'm' }),
          TextArea({ value: 'solid s', variant: 'solid', size: 's' }),
          TextArea({ value: 'solid xs', variant: 'solid', size: 'xs' }),
        ),
        x.div(
          TextArea({ value: 'neutral', variant: 'outline', color: 'neutral' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'primary' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'secondary' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'accent' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'info' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'success' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'warning' }),
          TextArea({ value: 'neutral', variant: 'outline', color: 'danger' }),
        ),
        x.div(
          TextArea({ value: 'neutral', variant: 'solid', color: 'neutral' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'primary' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'secondary' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'accent' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'info' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'success' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'warning' }),
          TextArea({ value: 'neutral', variant: 'solid', color: 'danger' }),
        )
      }),

      x.hr(),

      x.$if(true, () => {
        x.div(
          Slider({ variant: 'solid', size: 'xl' }),
          Slider({ variant: 'solid', size: 'l' }),
          Slider({ variant: 'solid', size: 'm' }),
          Slider({ variant: 'solid', size: 's' }),
          Slider({ variant: 'solid', size: 'xs' }),
        ),
        x.div(
          Slider({ variant: 'outline', color: 'neutral' }),
          Slider({ variant: 'outline', color: 'primary' }),
          Slider({ variant: 'outline', color: 'secondary' }),
          Slider({ variant: 'outline', color: 'accent' }),
          Slider({ variant: 'outline', color: 'info' }),
          Slider({ variant: 'outline', color: 'success' }),
          Slider({ variant: 'outline', color: 'warning' }),
          Slider({ variant: 'outline', color: 'danger' }),
        ),
        x.div(
          Slider({ variant: 'solid', color: 'neutral' }),
          Slider({ variant: 'solid', color: 'primary' }),
          Slider({ variant: 'solid', color: 'secondary' }),
          Slider({ variant: 'solid', color: 'accent' }),
          Slider({ variant: 'solid', color: 'info' }),
          Slider({ variant: 'solid', color: 'success' }),
          Slider({ variant: 'solid', color: 'warning' }),
          Slider({ variant: 'solid', color: 'danger' }),
        )
      }),
    )
  })
}
