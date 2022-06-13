import { stateSaver, stateSaver2 } from '../effects/state-storage.js'

export const CounterAdd = (state, { amount }) => [
  { ...state, counter: state.counter + amount },
  stateSaver2('counter', state => state.counter)
]
