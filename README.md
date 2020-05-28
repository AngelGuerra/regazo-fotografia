# Regazo Fotografía

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f25361b-bf17-41ae-8dac-6dc3ca967f17/deploy-status)](https://app.netlify.com/sites/regazofotografia/deploys)
[![Website](https://img.shields.io/website?down_color=b71c1c&down_message=offline&up_color=76ff03&up_message=online&url=https%3A%2F%2Fwww.regazofotografia.com)](https://regazofotografia.com)
[![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fregazofotografia.com)](https://regazofotografia.com)
[![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade-score/regazofotografia.com?publish)](https://observatory.mozilla.org/analyze/regazofotografia.com?third-party=false)
[![Chromium HSTS preload](https://img.shields.io/hsts/preload/regazofotografia.com)](https://hstspreload.org/)

## Desarrollo

Este proyecto utiliza muchas cosas chachis, entre ellas:

- [Hugo](https://gohugo.io/): Es un generador de sitios estáticos, decidí utilizar este porque leí que las compilaciones eran súper rápidas. El proyecto se despliega con Netlify, versión gratis :smile_cat:, así que todo lo que sea ahorrar tiempo de compilación, estupendo.
- [Webpack](https://webpack.js.org/): Es un _bundler_. Permite automatizar una serie de tareas que vienen muy bien y nos hacen la vida más cómoda (a veces), entre otras cosas se encarga de transpilar el código con [Babel](https://babeljs.io/), minificar y eliminar el css innecesario con [PurgeCSS](https://purgecss.com/), y alguna que otra historia más, echa un vistazo al `webpack.config.js`.
- [TailwindCSS](https://tailwindcss.com/): Es la librería de estilos, está orientada a utilidades (_utility-first_) lo que la hace tremendamente cómoda y útil para hacer proyectos desde 0 y maquetar de forma muy sencilla sin estar ligado ni tener que sobreescribir estilos de otra librería (¿quién no ha hecho `col-12 { padding: 0; }`?)
- [Yarn](https://yarnpkg.com/): Es el gestor de dependencias para el frontend, y el que hace que ejecutar el proyecto sea tan sencillo como `yarn run start`.
- [Netlify](https://www.netlify.com/): Es el lugar donde está alojada la web, también es el que se encarga de [autopublicar el proyecto](https://docs.netlify.com/site-deploys/overview/). ¡Ah sí! También se encarga de [servir las imágenes](https://docs.netlify.com/large-media/overview/)... Y también de [controlar los POST del formulario](https://docs.netlify.com/forms/setup/) o formularios que existen en la página.

### Ejecución en local

```bash
# Últimamente he tenido problemas para ejecutar Hugo con OpenSUSE
# Básicamente tengo que iniciar o reiniciar el servicio snapd
sudo systemctl start snapd
# Y luego hacer esto que no tengo ni idea de que hace :'(
sudo apparmor_parser -r /var/lib/snapd/apparmor/profiles/*

# Instala la versión extendida de Hugo, en mi caso, con OpenSUSE
# la forma más sencilla es con snap
snap install hugo --channel=extended

# Ahora toca instalar las dependencias, utiliza yarn, no ignores el yarn.lock
# porque Netlify ejecuta yarn si existe ese fichero, en caso contrario
# ejecuta npm
yarn install

# Para el desarrollo hay dos posibilidades
yarn run start
yarn run start:nosystem
# Éste último, ejecuta hugo con el flag GIT_CONFIG_NOSYSTEM=true que se hizo
# obligatorio desde que inicié el `git lfs` para las imágenes

# Para más comandos echa un vistazo al `package.json`

# Al hacer un commit se tiran unos hooks controlados por husky
# Básicamente controlan que el código js esté limpito y correcto
```

### Problemas conocidos

El repositorio utiliza Netlify Large Media para gestionar las imágenes. Nunca he tenido que hacer un _set-up_ del proyecto en otro equipo por lo que no te puedo dar aquí una guía de cómo utilizarlas en tu repositorio local, eso sí, te puedo pasar las de Netlify, y si lo haces cuéntamelo para poder documentarlo aquí.

- [Requisitos](https://docs.netlify.com/large-media/requirements-and-limitations/)
- [Colaboración](https://docs.netlify.com/large-media/repository-collaboration/)

## Autores

- Ángel Guerra <a.guerrarevilla@gmail.com>