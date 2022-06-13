import { app } from '../lib/hyperapp/v2.0.22.js'
import { App as view } from './views/app.js'
import { stateLoader, changesPersistor } from './effects/state-storage.js'

export const main = ({ node }) => app({
  init: () => [
    { counter: 0 },
    stateLoader('counter', counter => ({ counter }))
  ],
  view,
  node,
  subscriptions: (state) => [
    changesPersistor(state)
  ]
})

export const __simpleDiAddServices = ({ registerService }) => {
  registerService('main', main)
}
