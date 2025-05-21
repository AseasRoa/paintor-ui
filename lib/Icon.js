import { template } from 'paintor'

const iconsPath = '/icons'
const scriptURL = new URL(import.meta.url)
const dirName = scriptURL.pathname.replace(/\/\w+\.[^\/]+$/u, '') + iconsPath

// language=css
const css = (/* css */`
  div {
    display: inline-block;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: gray;
    min-width: 10rem;
    min-height: 10rem;
  }
`)

/**
 * @type {import('types/index').Icon}
 */
export const Icon = (props = { name: 'web/broken-link' }) => {
  return template((x) => {
    x.$css(css)

    const ext = '.svg'
    const iconPath = (props.url)
      ? (props.url.endsWith(ext)) ? props.url : `${props.url}${ext}`
      : `${dirName}/${props.name || 'web/broken-link'}${ext}`
    const size = props.size || '24rem'

    const iconUrl = `mask-image:url('${iconPath}');`
    const sizes = `width:${size}; height:${size};`
    const color = props.color ? `background-color:${props.color};` : ''

    /**
     * @see https://stackoverflow.com/a/70940729
     */
    x.div({
      style: `${sizes}${color}${iconUrl}${props.style || ''}`
    })
  })
}
