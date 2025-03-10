import { compose } from 'paintor'
import { UIPreview } from './UIPreview.js'

const app = compose(UIPreview())
app.paint('#app')
