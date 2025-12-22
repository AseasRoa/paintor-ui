/**
 * @param {object} [radius]
 * @param {string} [radius.s]
 * @param {string} [radius.m]
 * @param {string} [radius.l]
 * @param {string} [radius.full]
 * @returns {string}
 */
export function cssBorderRadius(
  radius = { s: '4rem', m: '6rem', l: '10rem', full: '1000rem' }
) {
  // language=css
  return (/* css */`
  border-radius: var(--border-radius-m, ${radius.m});
  &.border-radius-none { border-radius: 0 }
  &.border-radius-s { border-radius: var(--border-radius-s, ${radius.s}) }
  &.border-radius-l { border-radius: var(--border-radius-l, ${radius.l}) }
  &.border-radius-full { border-radius: var(--border-radius-full, ${radius.full}) }
  `).trim()
}

/**
 * @param {object} [zoom]
 * @param {number} [zoom.xs]
 * @param {number} [zoom.s]
 * @param {number} [zoom.m]
 * @param {number} [zoom.l]
 * @param {number} [zoom.xl]
 * @returns {string}
 */
export function cssSize(
  zoom = { xs: 0.7, s: 0.85, m: 1.0, l: 1.2, xl: 1.45 }
) {
  // language=css
  return (/* css */`
  &.xs { zoom: ${zoom.xs} }
  &.s { zoom: ${zoom.s} }
  &.m { zoom: ${zoom.m} }
  &.l { zoom: ${zoom.l} }
  &.xl { zoom: ${zoom.xl} }
  `).trim()
}

export function cssReset() {
  // language=css
  return (/* css */`
    * {
      box-sizing: content-box; /* When using border-box, the text input has weird height  */
      margin: 0;
      padding: 0;
      padding-block: 0;
      padding-inline: 0;
      line-height: 1;
    }
  `).trim()
}
