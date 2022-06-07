import { h, text, app } from 'https://unpkg.com/hyperapp@2.0.22/index.js'

const useText = txt => ('string', 'number', 'bignumber').includes(typeof txt) ? text(txt) : txt
const html = new Proxy({}, {
  get: (target, name) => name === 'text' ? text : (attrs = {}, child) => !child ? h(name, {}, useText(attrs)) : h(name, attrs, useText(child))
})

const { main, h1, button } = html

export const theApp = ({ node }) => app({
  init: () => 0,
  view: state =>
    main([
      h1(state),
      button({ onclick: state => state - 1 }, text('-')),
      button({ onclick: state => state + 1 }, text('+'))
    ]),
  node
})
