import { main, h1, button } from '../components/html.js'
import { CounterAdd } from '../actions/counter.js'

export const App = ({ counter }) => main([
  h1(counter),
  button({ onclick: [CounterAdd, { amount: -1 }] }, '-'),
  button({ onclick: [CounterAdd, { amount: +1 }] }, '+')
])
