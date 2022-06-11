const container = {};

export const registerService = (name, instance) => {
    if (!name) throw new Error("simpleDi: registerService() - 'key' not provided")
    if (!instance) throw new Error(`simple-di: registerService('${name}') - service must be provided`)
    if (container[name]) throw new Error(`simple-di: registerService('${name}') - service with this name has been registereed already`)

    container[name] = { instance }
}

export const registerServiceFactory = (name, factory) => {
    if (!name) throw new Error("simpleDi: registerServiceFactory() - 'key' not provided")
    if (typeof factory !== 'function') throw new Error(`simple-di: registerServiceFactory('${name}') - factory must be function (but '${typeof factory}' provided)`)
    if (container[name]) throw new Error(`simple-di: registerServiceFactory('${name}') - service with this name has been registereed already`)

    container[name] = { factory }
}

export const registerModulesAsync = async (urls) => {
    if (!Array.isArray(urls)) urls = [urls]

    const modules = await Promise.all(urls.map(url => import(url)))
    modules.reduce(({ __simpleDiAddServices } = {}) => {
        if (typeof __simpleDiAddServices === 'function') __simpleDiAddServices({ registerService, registerServiceFactory })
    })
}

export const resolveService = (name) => {
    const { instance, factory } = container[name] || {}
    if (instance) return instance
    if (factory) return factory()
    throw new Error(`simpleDi: resolveService('${name}') - service with this name has not been registereed`)
}
