(async function (baseUrl) {
  if (document.getElementById('spa-mesh')) return

  const preload = ['lib/hyperapp/v2.0.22', 'lib/hyperapp/html', 'app/components/html', 'app/views/app']
  const [{ main }] = await Promise.all(['app/index', ...preload].map(i => import (`${baseUrl}${i}.js?min=1`)))

  const style = document.createElement('link')
  style.href = `${baseUrl}app/index.css?min=1`
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.head.appendChild(style)

  const node = document.createElement('main')
  node.setAttribute('id', 'spa-mesh')
  document.body.appendChild(node)

  main({ node })
})(document.currentScript.src.slice(0, -"index.js?min=1".length)).catch(console.log);
