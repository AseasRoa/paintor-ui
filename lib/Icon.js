import { template } from 'paintor'

const iconsPath = '/icons'
const scriptURL = new URL(import.meta.url)
const scriptPath = scriptURL.origin + scriptURL.pathname
const dirName = scriptPath.replace(/\/\w+\.[^\/]+$/u, '') + iconsPath

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
export const Icon = (props = { name: 'web/broken-link', fill: '' }) => {
  return template((x) => {
    x.$css(css)

    /**
     * @see https://stackoverflow.com/a/70940729
     */
    x.div({
      style: `
        mask-image: url('${dirName}/${props.name || 'web/broken-link'}.svg');
        background-color: ${props.fill || null};
        width: ${props.size || '24rem'};
        height: ${props.size || '24rem'};
        ${props.style || ''}
      `
    })
  })
}
