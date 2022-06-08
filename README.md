# SPA `x-mesh` scriptlet
* for development the application can be served ny `nginx`
  ```bash
  docker run -d --rm -p 8080:80 -v $PWD/src:/usr/share/nginx/html:ro --name ngx nginx:1.22.0-alpine
  ```
