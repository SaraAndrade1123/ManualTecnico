---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Layouts'
pubDate: 2026-06-01
description: 'Esta es la primera publicación, sobre conceptos de layouts en Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Dentro del encarpetado de tu proyecto**

Para facilitar la creación de tu página web, puedes crear un `BaseLayout`. El objetivo es tener una base común para tus páginas individuales para que, al añadir una nueva, no tengas que reescribir todo el esqueleto HTML. Además, puedes guardar en él la estructura completa y elementos globales.

<div class="space-y-8 max-w-2xl mx-auto my-8">

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 1 y 2.</span> Creación de la carpeta
    </h3>
    <p class="text-xs text-[#736063] mb-3">Posiciónate en la carpeta <code>src/</code> y crea la carpeta de layouts:</p>
    <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-2 rounded-xl inline-block border border-[#cbdad8]/40 mb-4 px-4">
      layouts/
    </div>
    <p class="text-xs text-[#736063] mb-3">Dentro, agrega tu primer archivo layout con un nombre distintivo, por ejemplo:</p>
    <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-2 rounded-xl inline-block border border-[#cbdad8]/40 px-4">
      BaseLayout.astro
    </div>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 3.</span> El Frontmatter del Layout
    </h3>
    <p class="text-xs text-[#736063] mb-4">Al inicio del archivo separamos la sección de JavaScript mediante guiones donde se importarán componentes u hojas de estilo:</p>
    
<div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl inline-block text-left border border-[#fce4e6]/40">
      <div>---</div>
      <div class="text-[#736063] italic">&nbsp;&nbsp;// Aquí se importan los componentes y estilos</div>
      <div>---</div>
    </div>
  </div>

</div>

<div class="my-12 text-center text-[#cbdad8]">✦ ─── 🎀 ─── ✦</div>

# **Creación y Estructura**

<div class="space-y-8 max-w-2xl mx-auto my-6">

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 1.</span> Importación y Props
    </h3>
    <p class="text-xs text-[#736063] mb-4">En la parte interna de los guiones <code>---</code>, puedes importar componentes como <code>Footer.astro</code>, <code>Header.astro</code>, etc. También se definen constantes para recibir propiedades dinámicas:</p>
    
 <div class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-4 rounded-xl inline-block text-left border border-[#cbdad8]/40">
      const { frontmatter } = Astro.props;
    </div>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ 2.</span> Estructura del Cuerpo
    </h3>
    <p class="text-xs text-[#736063] mb-4">El cuerpo del archivo compone la estructura HTML. Integras las etiquetas normales y los componentes personalizados que importaste:</p>
    
<div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl inline-block border border-[#fce4e6]/40">
      &lt;Footer /&gt;
    </div>
  </div>

</div>

<div class="my-12 text-center text-[#cbdad8]">✦ ─── 🎀 ─── ✦</div>

# **Uso del layout en un page**

<div class="space-y-8 max-w-2xl mx-auto my-6">

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all text-center">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center justify-center gap-1.5">
      <span>✦ Paso a Paso</span>
    </h3>
    
<p class="text-xs text-[#736063] mb-2 text-left"><strong>1. Importar el Layout:</strong> En el archivo donde vas a utilizarlo (ej. <code>index.astro</code>), añade la importación en la sección de arriba:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-3 rounded-xl block text-left border border-[#fce4e6]/40 mb-4 overflow-x-auto">
      import BaseLayout from '../layouts/BaseLayout.astro';
    </div>

<p class="text-xs text-[#736063] mb-2 text-left"><strong>2. Envolver el contenido:</strong> Llamas al layout pasando las constantes necesarias y escribes tu contenido dentro de él de manera normal:</p>
    <div class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl block text-left border border-[#fce4e6]/40 overflow-x-auto">
      &lt;BaseLayout pageTitle={pageTitle}&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;¡Este es el contenido de mi página!&lt;/p&gt;<br />
      &lt;/BaseLayout&gt;
    </div>
    
<div class="bg-[#e6f4f3] text-[#3d6966] rounded-xl p-3 text-xs font-medium text-center mx-auto max-w-md mt-4 shadow-3xs">
      💡 <strong>Nota sobre pageTitle:</strong> Al llamarla, pasará el título dinámicamente. Verifica que tenga exactamente el mismo nombre tanto en la declaración como en el componente.
    </div>
  </div>

</div>

<div class="text-center pt-8 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ───  Fin  ───
</div>