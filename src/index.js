(async () => {
  const preload = ['lib/hyperapp/v2.0.22', 'lib/hyperapp/html', 'components/html', 'views/app']
  const [{ main }] = await Promise.all(['index', ...preload].map(i => import (`./app/${i}.js?min=1`)))

  const node = document.createElement('main')
  document.body.appendChild(node)

  main({ node })
})()
