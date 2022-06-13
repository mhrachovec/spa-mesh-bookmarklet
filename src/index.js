(async function (baseUrl) {
  const mainElementId = 'mwwnxt-spa-mesh'
  if (document.getElementById(mainElementId)) throw new Error('application already loaded')

  const moduleUrl = (path, ext) => `${baseUrl}${path}${ext}`
  const getModules = (path, subpaths) => subpaths.map(subpath => Array.isArray(subpath)
    ? getModules(`${path}/${subpath[0]}`, subpath[1]) : `${path}/${subpath}`
  ).flat()

  // const { registerModulesAsync, resolveService } = await import(moduleName('/lib/simple-di', '.js'))
  // await registerModulesAsync(['/app/index', ...getModules('', preload)].map(m => moduleName(m, '.js')))
  // const main = resolveService('main')
  const modules = [...getModules('', [
    ['lib', [
      ['hyperapp', ['v2.0.22', 'html',
        ['effects', ['action', 'state-storage']]
      ]],
      'local-storage'
    ]],
    ['app', ['components/html', 'effects/state-storage', 'views/app', 'actions/counter']]
  ]), '/app/index'].map(m => import(moduleUrl(m, '.js')))
  const [{ main }] = (await Promise.all(modules)).slice(-1)

  const style = document.createElement('link')
  style.href = moduleUrl('/app/index', '.css')
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.head.appendChild(style)

  const node = document.createElement('main')
  node.setAttribute('id', mainElementId)
  document.body.appendChild(node)

  main({ node })
})(document.currentScript.src.slice(0, -'/index.js'.length)).catch((...err) => console.log(`[${(new Date).toISOString()}] SPA-mesh:`, ...err));
