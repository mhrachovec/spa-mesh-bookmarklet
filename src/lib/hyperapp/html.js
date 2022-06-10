import { h, text } from './v2.0.22.js?min=1'

const useText = txt => ['string', 'number', 'bignumber'].includes(typeof txt) ? text(txt) : txt

export const html = new Proxy({}, {
  get: (target, name) => (attrs = {}, child) => !child ? h(name, {}, useText(attrs)) : h(name, attrs, useText(child))
})
