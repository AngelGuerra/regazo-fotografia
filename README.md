# Regazo Fotografía

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f25361b-bf17-41ae-8dac-6dc3ca967f17/deploy-status)](https://app.netlify.com/sites/regazofotografia/deploys)
[![Website](https://img.shields.io/website?down_color=b71c1c&down_message=offline&up_color=76ff03&up_message=online&url=https%3A%2F%2Fwww.regazofotografia.com)](https://regazofotografia.com)
[![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fregazofotografia.com)](https://regazofotografia.com)
[![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/regazofotografia.com?publish)](https://observatory.mozilla.org/analyze/regazofotografia.com?third-party=false)
[![Chromium HSTS preload](https://img.shields.io/hsts/preload/regazofotografia.com)](https://hstspreload.org/)

## Desarrollo

### Local

```bash
hugo server -w --bind=0.0.0.0 # --enviroment=production
# Build
hugo # --gc --minify
```

### Docker

- [Docker Hugo Builder by jguyomard](https://hub.docker.com/r/jguyomard/hugo-builder/)

```bash
# In OpenSUSE
sudo systemctl start docker.service
# Development
# @see config/_default/config.toml
docker run --rm -it -v $PWD:/src -p 1313:1313 jguyomard/hugo-builder hugo server -w --bind=0.0.0.0
# Production
# @see config/production/config.toml
docker run --rm -it -v $PWD:/src jguyomard/hugo-builder hugo
```

## Gracias

- [Hugo](https://gohugo.io/)
- [Personal Web Theme](https://themes.gohugo.io/personal-web/)
- [Netlify](https://www.netlify.com/)

## Autores

- Ángel Guerra <a.guerrarevilla@gmail.com>