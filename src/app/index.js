import { app } from './lib/hyperapp/v2.0.22.js?min=1'
import { App as view } from './views/app.js?min=1'

export const main = ({ node }) => app({ init: () => 0, view, node })
