---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Deploy & GitHub'
pubDate: 2026-06-02
description: 'Esta es la primera publicación, sobre los requisitos previos para trabajar con Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Desplegar el proyecto**

Para que publiques tú proyecto sin un localhost y usando pages...

Te diriges al archivo en tu proyecto, que se encuentra por fuera de la carpeta src, llamado 'packge.json'

1. En este archivo, vas a agregar:

En 'scripts', esta sección sirve para definir comandos personalizados que se puedene ejecuta con 'npm run':


- "start": "astro dev",
- "deploy": "astro build && gh-pages -d dist"

2. Agregando esto, el 'start' obtiene la función de iniciar el servidor de desarrollo con Astro, inicia un servidor local, normalmente suele ser 'http://localhost:4321'.

También recarga automáticamente la página cuando se realizan cambios en el código y permite que utilices la página mientras la estás desarrollando.

3. El 'deploy', se utiliza para **publicar** el proyecto, generalmente en GitHub Pages...

El comando, explicado, primero genera una versión final del sitio, después crea una carpeta 'dist/' y dentro de ella se guardan todos los archivos HTML, CSS y JavaScript listos para ser publicados...

La segunda parte, depués de &&, utilizza un paquete llamado 'gh-pages' para subir el contenido de la carpeta 'dist' a la rama **gh-pages** en el repositorio de GitHub de la carpeta.

Finalmente, GitHub se encarga de publicar en la web la página y darnos el enlace de esta.