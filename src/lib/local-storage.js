export const getLocalStorage = (baseKey) => {
  if (!baseKey) throw new Error(`localStorage: getLocalStorage() - 'baseKey' is required`)
  if (!window) throw new Error(`localStorage: getLocalStorage() - 'window' object not available`)
  const localStorage = window.localStorage
  if (!localStorage) throw new Error(`localStorage: getLocalStorage() - local storage not available`)

  return {
    setItem: (key, value) => localStorage.setItem(`${baseKey}/${key}`, value),
    getItem: (key) => localStorage.getItem(`${baseKey}/${key}`),
    removeItem: (key) => localStorage.removeItem(`${baseKey}/${key}`)
  }
}