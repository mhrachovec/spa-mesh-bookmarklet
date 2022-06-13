# SPA `x-mesh` scriptlet

## Versions
- [v0.1-counter](https://rawcdn.githack.com/mhrachovec/spa-mesh-bookmarklet/v0.1-counter/src/index.html)
  - definition of application structure
  - trivial React-counter application

- v0.2-bookmarklet
  - must be served via `nginx`
    ```bash
    docker run -d --rm -p 8080:80 \
      --volume $PWD/src:/app:ro \
      --volume $PWD/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
      --name nginx_spa-mesh-bookmarklet \
      nginx:1.22.0-alpine
    ```
  - create bookmarlet
    ```javacript
    javascript:(function(){var s=document.createElement('script');s.src='http://localhost:8080/index.js';document.body.appendChild(s)})();
    ```
