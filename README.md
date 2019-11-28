# Regazo Fotografía

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f25361b-bf17-41ae-8dac-6dc3ca967f17/deploy-status)](https://app.netlify.com/sites/regazofotografia/deploys)
![Website](https://img.shields.io/website?down_color=b71c1c&down_message=offline&up_color=76ff03&up_message=online&url=https%3A%2F%2Fwww.regazofotografia.com)

## Development

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

## Thanks

- [Hugo](https://gohugo.io/)
- [Personal Web Theme](https://themes.gohugo.io/personal-web/)
- [Netlify](https://www.netlify.com/)

## Author

- Ángel Guerra <a.guerrarevilla@gmail.com>