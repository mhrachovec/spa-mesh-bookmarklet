import { h, text } from './v2.0.22.js'

const useText = txt => ['string', 'number', 'bignumber'].includes(typeof txt) ? text(txt) : txt

export const html = new Proxy({}, {
  get: (_, name) => (attrs = {}, child) => !child ? h(name, {}, useText(attrs)) : h(name, attrs, useText(child))
})
