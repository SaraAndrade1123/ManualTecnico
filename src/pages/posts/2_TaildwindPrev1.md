---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Tailwind'
pubDate: 2026-06-01
description: 'Esta es la primera publicación, sobre como integrar Tailwind a Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Integración de Tailwind a la página web**

Para dar estilo de forma moderna y rápida, integraremos Tailwind en nuestro proyecto siguiendo estos pasos básicos:

<div class="space-y-8 max-w-2xl mx-auto my-8">

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 1.</span> Instalación de dependencias
    </h3>
    <p class="text-xs text-[#736063] mb-4">Ejecuta el siguiente comando en la terminal de tu editor:</p>
    <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-3 rounded-xl block text-center border border-[#cbdad8]/40 max-w-md mx-auto">
      npx astro add tailwind
    </div>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 2.</span> Creación de estilos globales
    </h3>
    <p class="text-xs text-[#736063] mb-3">Dentro de la carpeta <code>src/</code>, organiza tus carpetas:</p>
    <ul class="list-none space-y-1 text-xs text-[#736063] inline-block text-left mb-4">
      <li class="flex items-center gap-2"><span>🌸</span> Crea la carpeta <code>styles/</code></li>
      <li class="flex items-center gap-2"><span>🌸</span> Crea el archivo <code>global.css</code></li>
    </ul>

<h3 class="text-sm font-serif font-bold text-[#a86b74] mb-2 mt-2 flex items-center justify-center gap-1.5">
      <span>✦ 3.</span> Formato inicial del CSS
    </h3>
    <p class="text-xs text-[#736063] mb-3">Abre <code>global.css</code> e importa Tailwind al inicio de todo, añadiendo el reseteo básico:</p>
    
<div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl inline-block text-left border border-[#fce4e6]/40 generic-code">
      <div>@import 'tailwindcss';</div>
      <div class="text-[#cbdad8] my-1"></div>
      <div>* {</div>
      <div class="pl-4">margin: 0;</div>
      <div class="pl-4">padding: 0;</div>
      <div>}</div>
    </div>
  </div>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 4.</span> Importación final
    </h3>
    <p class="text-xs text-[#736063] mb-4">Como último paso, dirígete al archivo o layout donde usarás Tailwind e impórtalo en el frontmatter:</p>
    <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-3 rounded-xl block text-center border border-[#cbdad8]/40 max-w-md mx-auto">
      import '../styles/global.css';
    </div>
  </div>

</div>

<div class="my-12 text-center text-[#cbdad8]">✦ ─── 🎀 ─── ✦</div>

# **Usar Tailwind en un archivo**

Para empezar a utilizar Tailwind, posiciónate en el código y, dentro de la etiqueta correspondiente, otórgale un atributo `class` para escribir los estilos que llevarán los componentes.

<div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center max-w-2xl mx-auto my-6">
  <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
    🎀 Ejemplo Práctico:
  </h3>
  <p class="text-xs text-[#736063] mb-4">Así se estructuraría un encabezado con fuentes serif y espaciados limpios:</p>
  
  <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl block text-left border border-[#fce4e6]/40 overflow-x-auto">
    &lt;h2 class="text-xl font-serif font-black text-[#3d6966] mb-4 border-b border-[#cbdad8] pb-2 flex items-center gap-2"&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;🎀&lt;/span&gt; Índice<br />
    &lt;/h2&gt;
  </div>
</div>

<div class="text-center mb-12">
  <a href="https://tailwindcss.com/" target="_blank" class="text-xs text-[#a86b74] hover:underline">https://tailwindcss.com/</a>
</div>

<div class="text-center pt-8 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ───  Fin  ───
</div>