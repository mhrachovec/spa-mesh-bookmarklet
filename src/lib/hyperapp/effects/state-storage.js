export const getStateStorage = ({ saveData, loadData, removeData }) => {
  if (typeof saveData !== 'function') throw new Error(`hyperapp/stateStorage: getStateStorage() - 'saveData' must by function ('${typeof saveData})' provided`)
  if (typeof loadData !== 'function') throw new Error(`hyperapp/stateStorage: getStateStorage() - 'loadData' must by function ('${typeof loadData})' provided`)
  if (typeof removeData !== 'function') throw new Error(`hyperapp/stateStorage: getStateStorage() - 'removeData' must by function ('${typeof removeDatas})' provided`)

  const saveState = (dispatch, { key, asData }) => {
    let state
    dispatch(s => state = s)
    saveData(key, JSON.stringify(asData(state)))
  }

  const queue = []

  const persistChanges = (_, state) => {
    while (queue.length) {
      const { key, asData } = queue.shift()
      saveData(key, JSON.stringify(asData(state)))
    }
    return () => { }
  }

  return {
    stateSaver: (key, asData) => [saveState, { key, asData }],
    stateSaver2: (key, asData) => [() => queue.push({ key, asData })],
    stateLoader: (key, asState) => [d => d((state, data) => ({ ...state, ...asState(JSON.parse(data)) }), loadData(key))],
    stateRemover: key => [() => removeData(key)],
    changesPersistor: (state) => [persistChanges, state]
  }
}