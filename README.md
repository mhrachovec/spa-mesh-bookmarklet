# SPA `x-mesh` scriptlet

## Tooling
- for development the application can be served by `nginx`
  ```bash
  docker run -d --rm -p 8080:80 \
    --volume $PWD/src:/usr/share/nginx/html:ro \
    --name nginx_spa-mesh-scriptlet \
    nginx:1.22.0-alpine
  ```

## Versions
- [v0.1-counter](https://rawcdn.githack.com/mhrachovec/spa-mesh-bookmarklet/v0.1-counter/src/index.html?min=1)
  - definition of application structure
  - trivial React-counter application
