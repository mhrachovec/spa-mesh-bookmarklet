(async () => {
  import { h, app } from 'https://unpkg.com/hyperapp@2.0.22/index.js?module'

  app({
    init: () => 0,
    view: state =>
      h('div', {}, [
        h('h1', {}, state),
        h('button', { onclick: state => state - 1 }, '-'),
        h('button', { onclick: state => state + 1 }, '+')
      ]),
    node: document.getElementById('app')
  })
})();