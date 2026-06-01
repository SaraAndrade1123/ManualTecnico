---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Astro'
pubDate: 2026-06-01
description: 'Esta es la primera publicación, sobre los requisitos previos para trabajar con Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Verificación e instalación de npm**

Antes de instalar Astro en Linux, se necesita tener configurado el entorno de desarrollo, en la terminal verifica:

<div class="bg-[#e6f4f3] border border-[#cbdad8] rounded-2xl p-4 my-5 text-xs md:text-sm text-[#3d6966] font-medium shadow-3xs flex items-center justify-center text-center gap-2">
  <span>💻</span> <span><strong>Desde la terminal:</strong> Primero posiciónate en la carpeta en la que vayas a crear el repositorio de Astro.</span>
</div>

<div class="space-y-5">

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-5 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-2 flex items-center justify-center gap-1.5">
      <span>✦ 1.</span> Astro requiere Node.js de la v18.14.1 o superior
    </h3>
    <p class="text-xs text-[#736063] mb-3">Comprueba tus versiones actuales:</p>
  </div>

node -v

npm -v

<div class="bg-white border border-[#cbdad8] rounded-2xl p-5 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-2 flex items-center justify-center gap-1.5">
      <span>✦ 2.</span> Si no cuenta con Node.js
    </h3>
    <p class="text-xs text-[#736063] mb-2">Puedes usar en la terminal:</p>
  </div>

sudo apt install nodejs

<div class="bg-[#fff0f2] border-l-4 border-[#a86b74] rounded-r-xl p-3 my-4 text-xs italic text-[#94767b] text-center mx-auto max-w-md">
    ⚠️ <strong>¡Atención!</strong> Con "sudo apt instal npm", instala una versión muy antigua de npm!, ¡mejor usa NVM!
  </div>
    
  <div class="text-center">
    <p class="text-xs text-[#736063] mb-2">Descarga e instala nvm:</p>
  </div>

curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh) | bash

<div class="text-center">
    <p class="text-xs text-[#736063] mb-2">En lugar de reiniciar la shell, utiliza:</p>
  </div>

\. "$HOME/.nvm/nvm.sh"

<div class="text-center">
    <p class="text-xs text-[#736063] mb-2">Verifica la versión de Node.js:</p>
  </div>

nvm install 24

<div class="bg-white border border-[#fce4e6] rounded-2xl p-5 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-2 flex items-center justify-center gap-1.5">
      <span>✦ 3.</span> Errores en la instalación
    </h3>
    <p class="text-xs text-[#736063] mb-3">En caso de presentar algún error en la instalación, ya que se obtienen versiones antiguas, limpia tu entorno:</p>
  </div>

sudo snap remove curl

sudo apt update && sudo apt install -y curl

nvm cache clear

nvm install 24

</div>

<div class="my-8 text-center text-[#cbdad8]">✦ ─── 🎀 ─── ✦</div>

# **Creación de un proyecto y ejecución**

<p class="text-xs text-[#736063] italic bg-[#fff0f2] border border-[#fce4e6] rounded-xl p-3 mb-5 text-center">
  🩰 <strong>Recomendación:</strong> Utiliza como editor de código, <strong>Visual Studio Code</strong>, junto a la extensión oficial de Astro para la mejor experiencia.
</p>

<div class="space-y-5">

  <div class="bg-white border border-[#cbdad8] rounded-2xl p-5 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-2 flex items-center justify-center gap-1.5">
      <span>✦ 4.</span> ¡¡Crea tu primer Astro!!
    </h3>
    <p class="text-xs text-[#736063] mb-3">Crea tu primer proyecto con npm:</p>
  </div>

npm create astro@latest nombre_proyecto

<div class="bg-white border border-[#fce4e6]/60 rounded-xl p-4 my-3 text-center max-w-sm mx-auto shadow-3xs">
    <p class="text-xs font-semibold text-[#3d6966] mb-2">Después configura tu Astro marcando:</p>
    <ul class="list-none space-y-1 pl-0 text-xs text-[#736063] inline-block text-left">
      <li class="flex items-center gap-2"><span>🌸</span> <span>Use minimal (empty) template</span></li>
      <li class="flex items-center gap-2"><span>🌸</span> <span>Install dependencies</span></li>
      <li class="flex items-center gap-2"><span>🌸</span> <span>Initialize a new git repository?</span></li>
    </ul>
  </div>
    
  <div class="text-center mt-4 pt-3 border-t border-dashed border-[#cbdad8]">
    <p class="text-xs text-[#736063]">
      📂 Entra al editor de código y abre la carpeta del proyecto <strong>-nombre_proyecto</strong>
    </p>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-5 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-2 flex items-center justify-center gap-1.5">
      <span>✦ 5.</span> Inicia el proyecto
    </h3>
    <p class="text-xs text-[#736063] mb-3">En la terminal de VS, escribe:</p>
  </div>

npm run dev

<div class="bg-[#e6f4f3] text-[#3d6966] rounded-xl p-3 text-xs mt-3 font-medium text-center mx-auto max-w-xs">
    💡 Trabaja solamente en la carpeta <code>src/</code>
  </div>

</div>

<div class="text-center pt-8 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ─── 🩰 Fin... 🩰 ───
</div>