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
    color?: string
    name?: IconName
    size?: string
    style?: string
    url?: string
  }
)

/* Components */

export function Button(
  props: {
    autoWidth?: boolean
    borderRadius?: BorderRadiusSize
    class?: string
    color?: Color
    icon?: string
    size?: Size
    value?: string
    variant?: Variant
    onClick?: (ev: PointerEvent) => void
  }
): import('paintor').Template

export function Checkbox(
  props: {
    borderRadius?: BorderRadiusSize
    checked?: boolean
    class?: string
    color?: Color
    size?: Size
    variant?: Variant
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function NumberInput(
  props: {
    autoWidth?: boolean
    borderRadius?: BorderRadiusSize
    class?: string
    color?: Color
    min?: number
    max?: number
    size?: Size
    step?: number
    value?: number
    variant?: Variant
    onInput?: (ev: InputEvent | PointerEvent, value: number) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template

export function Radio(
  props: {
    checked?: boolean
    class?: string
    color?: Color
    name?: string
    size?: Size
    variant?: Variant
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function Select(
  props: {
    autoWidth?: boolean
    borderRadius?: BorderRadiusSize
    class?: string
    color?: Color
    options: Option[]
    selectedOption?: Option | string | number | boolean
    size?: Size
    variant?: Variant
    onChange?: (option: Option, value: string | number | boolean) => void
  }
): import('paintor').Template

export function Slider(
  props: {
    checked?: boolean
    class?: string
    color?: Color
    min?: number
    max?: number
    size?: Size
    step?: number
    value?: number
    variant?: Variant
    onChange?: (ev: Event, value: number) => void
  }
): import('paintor').Template

export function Switch(
  props: {
    borderRadius?: BorderRadiusSize
    checked?: boolean
    class?: string
    color?: Color
    size?: Size
    variant?: Variant
    onChange?: (ev: Event, checked: boolean) => void
  }
): import('paintor').Template

export function TextArea(
  props: {
    autosize?: boolean
    autoWidth?: boolean
    borderRadius?: BorderRadiusSize
    class?: string
    color?: Color
    disabled?: boolean
    rows?: number
    size?: Size
    value?: string
    variant?: Variant
    onInput?: (ev: InputEvent, value: string) => void
  }
): import('paintor').Template

export function TextInput(
  props: {
    autoWidth?: boolean
    borderRadius?: BorderRadiusSize
    class?: string
    color?: Color
    pattern?: string
    size?: Size
    value?: string
    variant?: Variant
    onInput?: (ev: InputEvent, value: string) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template
