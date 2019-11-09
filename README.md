# Regazo Fotografía

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