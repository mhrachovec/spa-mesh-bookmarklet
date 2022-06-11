(async function (baseUrl) {
  if (document.getElementById('spa-mesh')) return

  const moduleName = path => `${baseUrl}${path}.js?min=1`
  const { registerModulesAsync, resolveService } = await import(moduleName('lib/simple-di'))
  await registerModulesAsync(['app/index', 'lib/hyperapp/v2.0.22', 'lib/hyperapp/html', 'app/components/html', 'app/views/app']
    .map(moduleName))
  const main = resolveService('main')

  const style = document.createElement('link')
  style.href = `${baseUrl}app/index.css?min=1`
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.head.appendChild(style)

  const node = document.createElement('main')
  node.setAttribute('id', 'spa-mesh')
  document.body.appendChild(node)

  main({ node })
})(document.currentScript.src.slice(0, -"index.js?min=1".length)).catch((...err) => console.log(`[${(new Date).toISOString()}] SPA-mesh:`, ...err));
