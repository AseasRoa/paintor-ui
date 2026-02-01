import { IconName } from './icons'

export type Variant
  = 'plain'
  | 'outline'
  | 'soft'
  | 'solid'
  | 'none'
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
export type BorderRadiusSize = 'none' | 's' | 'm' | 'l' | 'full'
export type Color
  = 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type Option = { label: string, value: string | number | boolean }

/* Icons */

export function Icon(
  props: {
      name?: IconName,
      url?: string,
      color?: string,
      size?: string,
      style?: string
  }
)

/* Components */

export function Button(
  props: {
    autoWidth?: boolean
    value?: string
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    icon?: string
    onClick?: (ev: PointerEvent) => void
  }
): import('paintor').Template

export function Checkbox(
  props: {
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    checked?: boolean
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function NumberInput(
  props: {
    autoWidth?: boolean
    min?: number,
    max?: number,
    step?: number,
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    value?: number
    onInput?: (ev: InputEvent | PointerEvent, value: number) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template

export function Radio(
  props: {
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    checked?: boolean
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function Select(
  props: {
    autoWidth?: boolean
    options: Option[]
    selectedOption?: Option | string | number | boolean
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    onChange?: (option: Option, value: string | number | boolean) => void
  }
): import('paintor').Template

export function Slider(
  props: {
    min?: number,
    max?: number,
    step?: number,
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    checked?: boolean
    onChange?: (ev: Event, value: number) => void
  }
): import('paintor').Template

export function Switch(
  props: {
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    checked?: boolean
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function TextArea(
  props: {
    autosize?: boolean,
    autoWidth?: boolean
    disabled?: boolean,
    rows?: number,
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    value?: string
    onInput?: (ev: InputEvent, value: string) => void
  }
): import('paintor').Template

export function TextInput(
  props: {
    autoWidth?: boolean
    pattern?: string
    variant?: Variant
    color?: Color
    size?: Size
    borderRadius?: BorderRadiusSize
    class?: string
    value?: string
    onInput?: (ev: InputEvent, value: string) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template
