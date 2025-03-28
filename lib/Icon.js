import { template } from 'paintor'

const iconsPath = '/icons'
const scriptURL = new URL(import.meta.url)
const scriptPath = scriptURL.origin + scriptURL.pathname
const dirName = scriptPath.substring(0, scriptPath.lastIndexOf('/')) + iconsPath

// language=css
const css = (/* css */`
  div {
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: black;
    min-width: 10rem;
    min-height: 10rem;
  }
`)

/**
 * @param {object} props
 * @param {import('types/icons').IconName} props.name
 * @param {import('types/icons').IconVariant} [props.variant]
 */
/**
 * @type {import('types/index').Icon}
 */
export const Icon = (props = { name: 'web/broken-link' }) => {
  return template((x) => {
    x.$css(css)
    /**
     * @see https://stackoverflow.com/a/70940729
     */
    x.div({
      style: `
        mask-image: url('${dirName}/${props.name ?? 'web/broken-link'}.svg');
        background-color: ${props.fill ?? null};
        width: ${props.size ?? '24rem'};
        height: ${props.size ?? '24rem'};
        ${props.style ?? ''}
      `
    })
  })
}
