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

# **Verificación e instalación de npm para Linux**

Antes de utilizar Astro en Linux, se necesita tener configurado el entorno de desarrollo, en la terminal verifica:

<div class="bg-[#e6f4f3]/60 border border-[#cbdad8] rounded-2xl p-4 my-8 text-xs md:text-sm text-[#3d6966] font-medium shadow-3xs flex items-center justify-center text-center gap-2 max-w-2xl mx-auto">
  <span>💻</span> <span><strong>Desde la terminal:</strong> Primero posiciónate en la carpeta en la que vayas a crear el repositorio de Astro.</span>
</div>

<div class="space-y-8 max-w-2xl mx-auto">

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 1.</span> Astro requiere Node.js de la v18.14.1 o superior
    </h3>
    <p class="text-xs text-[#736063] mb-4">Comprueba tus versiones actuales con:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl inline-block space-y-1 text-left border border-[#fce4e6]/40">
      <div>node -v</div>
      <div>npm -v</div>
    </div>
  </div>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 2.</span> Si no cuenta con Node.js
    </h3>
    <p class="text-xs text-[#736063] mb-4">Puedes usar en la terminal:</p>
    
  <div class="bg-[#fff0f2] border-l-4 border-[#a86b74] rounded-r-xl p-3 mb-4 text-xs italic text-[#94767b] mx-auto max-w-md">
      ⚠️ <strong>¡Atención!</strong> Con "sudo apt install npm", puede que instale una versión antigua de npm!, mejor usa nvm.
    </div>
    
  <p class="text-xs text-[#736063] mb-2">Descarga e instala Node.js usando nvm:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl block text-center border border-[#fce4e6]/40 overflow-x-auto mb-4">
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    </div>

  <p class="text-xs text-[#736063] mb-2">En lugar de reiniciar la shell, utiliza:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl block text-center border border-[#fce4e6]/40 overflow-x-auto mb-4">
      \. "$HOME/.nvm/nvm.sh"
    </div>

  <p class="text-xs text-[#736063] mb-2">Verifica la versión de Node.js:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl block text-center border border-[#fce4e6]/40 max-w-xs mx-auto">
      nvm install 24
    </div>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 3.</span> Errores en la instalación
    </h3>
    <p class="text-xs text-[#736063] mb-4">En caso de presentar algún error en la instalación porque se obtienen versiones antiguas, limpia tu entorno:</p>
    
   <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl inline-block space-y-2 text-left border border-[#fce4e6]/40">
      <div>sudo snap remove curl</div>
      <div>sudo apt update && sudo apt install -y curl</div>
      <div>nvm cache clear</div>
      <div>nvm install 24</div>
    </div>
  </div>

</div>

<div class="my-12 text-center text-[#cbdad8]">✦ ─── 🎀 ─── ✦</div>

<div class="text-center mb-12">
  <a href="https://nodejs.org/es/download" target="_blank" class="text-xs text-[#a86b74] hover:underline">https://nodejs.org/es/download</a>
</div>

# **Creación de un proyecto y ejecución**

<p class="text-xs text-[#736063] italic bg-[#fff0f2] border border-[#fce4e6] rounded-xl p-3 my-6 text-center max-w-2xl mx-auto">
  🩰 <strong>Recomendación:</strong> Utiliza como editor de código <strong>Visual Studio Code</strong>, junto a la extensión oficial de Astro para la mejor experiencia.
</p>

<div class="space-y-8 max-w-2xl mx-auto">

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 4.</span> ¡¡Crea tu primer Astro!!
    </h3>
    <p class="text-xs text-[#736063] mb-4">Crea tu primer proyecto con npm:</p>
    
  <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-3 rounded-xl block text-center border border-[#cbdad8]/40 mb-4 max-w-md mx-auto">
      npm create astro@latest nombre_proyecto
    </div>

  <div class="bg-white border border-[#fce4e6]/80 rounded-xl p-4 my-4 text-center max-w-sm mx-auto shadow-3xs">
      <p class="text-xs font-semibold text-[#3d6966] mb-2">Después configura tu proyecto Astro marcando:</p>
      <ul class="list-none space-y-1.5 pl-0 text-xs text-[#736063] inline-block text-left">
        <li class="flex items-center gap-2"><span>🌸</span> <span>Use minimal (empty) template</span></li>
        <li class="flex items-center gap-2"><span>🌸</span> <span>Install dependencies</span></li>
        <li class="flex items-center gap-2"><span>🌸</span> <span>Initialize a new git repository?</span></li>
      </ul>
    </div>
      
  <div class="text-center mt-4 pt-4 border-t border-dashed border-[#cbdad8]">
      <p class="text-xs text-[#736063]">
        📂 Entra al editor de código y abre la carpeta del proyecto: <strong>-nombre_proyecto</strong>
      </p>
    </div>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 5.</span> Inicia el proyecto
    </h3>
    <p class="text-xs text-[#736063] mb-4">En la terminal de VS Code, escribe:</p>
    
  <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl inline-block space-y-1 text-left border border-[#fce4e6]/40 mb-4">
      <div>npm init -y</div>
      <div>npm run dev <span class="text-[#736063] italic text-[11px]">(Para que corra el proyecto)</span></div>
    </div>

  <div class="bg-[#e6f4f3] text-[#3d6966] rounded-xl p-3 text-xs font-medium text-center mx-auto max-w-xs shadow-3xs">
      💡 Trabaja solamente en la carpeta <code>src/</code>
    </div>
  </div>

</div>

<div class="text-center pt-12 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ───  Fin  ───
</div>