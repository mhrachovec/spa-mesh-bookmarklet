import { main, h1, button } from '../components/html.js?min=1'

export const App = state =>
  main([
    h1(state),
    button({ onclick: state => state - 1 }, '-'),
    button({ onclick: state => state + 1 }, '+')
])
