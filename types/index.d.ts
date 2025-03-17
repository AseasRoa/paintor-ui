export type Variant
  = 'plain'
  | 'outline'
  | 'soft'
  | 'solid'
  | 'none'
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
export type Color
  = 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export function Button(
  props: {
    value?: string
    variant?: Variant
    color?: Color
    size?: Size
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
    class?: string
    checked?: boolean
    onChange?: (ev: Event) => void
  }
): import('paintor').Template

export function Radio(
  props: {
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    checked?: boolean
    onChange?: (ev: Event) => void
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
    onChange?: (ev: Event) => void
  }
): import('paintor').Template

export function Switch(
  props: {
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    checked?: boolean
    onChange?: (ev: Event) => void
  }
): import('paintor').Template

export function TextArea(
  props: {
    autosize?: boolean,
    disabled?: boolean,
    rows?: number,
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    value?: string
    onInput?: (ev: InputEvent) => void
  }
): import('paintor').Template

export function NumberInput(
  props: {
    min?: number,
    max?: number,
    step?: number,
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    value?: number
    onInput?: (ev: InputEvent | PointerEvent) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template

export function TextInput(
  props: {
    pattern?: string
    variant?: Variant
    color?: Color
    size?: Size
    class?: string
    value?: string
    onInput?: (ev: InputEvent) => void
    onInvalid?: (ev: Event) => void
  }
): import('paintor').Template
