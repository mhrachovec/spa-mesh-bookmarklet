import { getLocalStorage } from '../../lib/local-storage.js'
import { getStateStorage } from '../../lib/hyperapp/effects/state-storage.js'

const { setItem: saveData, getItem: loadData, removeItem: removeData } = getLocalStorage('mwwnxt/spa-mesh')

export const { stateSaver, stateSaver2, stateLoader, stateRemover, changesPersistor } = getStateStorage({ saveData, loadData, removeData })
