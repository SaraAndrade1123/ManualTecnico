---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Posts & Pages'
pubDate: 2026-06-01
description: 'Esta es la publicación sobre conceptos fundamentales de Pages y Posts en Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Utilizar posts y pages**

En Astro es fundamental comprender la diferencia entre dos tipos de archivos clave para el flujo de trabajo:

<div class="space-y-6 max-w-2xl mx-auto my-8">
  
  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center gap-2">
      <span>📝</span> 1. Los Posts (Archivos Markdown)
    </h3>
    <p class="text-xs text-[#736063] leading-relaxed mb-3">
      Markdown es un lenguaje de marcado ligero diseñado para facilitar la lectura y escritura de documentos de texto plano, permitiendo además su conversión a HTML estructurado.
    </p>
    <div class="bg-[#fff0f2] border-l-4 border-[#a86b74] rounded-r-xl p-3 text-xs italic text-[#94767b]">
      ✨ <strong>Nota:</strong> Estos archivos se utilizan para escribir contenido (blogs, documentación, artículos). Están pensados principalmente para redactar texto de forma cómoda, no para programar.
    </div>
  </div>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center gap-2">
      <span>🚀</span> 2. Los Pages (Archivos .astro)
    </h3>
    <p class="text-xs text-[#736063] leading-relaxed mb-3">
      Siguen el flujo estructural de la aplicación. Su propósito principal es crear páginas con lógica, componentes modulares y JavaScript cuando sea necesario.
    </p>
    <p class="text-xs text-[#736063] mb-4">
      Puedes importar componentes de Astro, React, Vue, etc. Son ideales para la página de inicio (home), páginas dinámicas o layouts personalizados.
    </p>
    <div class="bg-[#e6f4f3] text-[#3d6966] rounded-xl p-3 text-xs font-medium border border-[#cbdad8]/40">
      💡 <strong>Enrutamiento Basado en Archivos:</strong> Cada archivo dentro de la carpeta <code>src/pages/</code> se convierte automáticamente en una ruta URL de tu sitio web.
    </div>
  </div>

</div>

### **Ejemplo de navegación en Pages**

La navegación tradicional entre páginas se realiza mediante etiquetas clásicas de hipervínculo que conectan tus rutas internas:

<pre class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl border border-[#fce4e6]/40 overflow-x-auto max-w-2xl mx-auto text-left mb-8"><code>---
// src/pages/index.astro
---
&lt;h1&gt;Inicio&lt;/h1&gt;

&lt;nav&gt;
  &lt;a href="/about"&gt;Sobre mí&lt;/a&gt;
  &lt;a href="/contacto"&gt;Contacto&lt;/a&gt;
&lt;/nav&gt;</code></pre>

---

# **Estructuras**

## **1. Posts**

La estructura de los posts simula una bitácora y lleva una configuración previa en el bloque superior (frontmatter). Incluye un enlace al layout correspondiente que le da forma general al texto:

<pre class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl border border-[#fce4e6]/40 overflow-x-auto max-w-2xl mx-auto text-left mb-6"><code>---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Posts & Pages'
pubDate: 2026-06-01
description: 'Esta es la primera publicación, sobre conceptos de Pages en Astro'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","Páginas web","Aprender"]
---</code></pre>

### **Renderizado Automático**
En el index de tu página (o donde decidas listar tus publicaciones), se utiliza la siguiente estructura lógica con JavaScript para importar y mapear dinámicamente cada archivo `.md` creado sin tener que agregarlos manualmente:

<div class="space-y-4 max-w-2xl mx-auto my-6">
  <pre class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-4 rounded-xl border border-[#cbdad8]/40 overflow-x-auto text-left"><code>---
const allAstro = Object.values(import.meta.glob('./posts/*.md', {eager: true}));
---</code></pre>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs">
    <h3 class="text-xs md:text-sm font-serif font-bold uppercase tracking-wider text-[#94767b] mb-4 text-center">
      Ejemplo de posts:
    </h3>
    <ul >
{allAstro.map((astro: any) => 

(
        <"li">
<"a" href={astro.url}>
            
🩰 {astro.frontmatter.title}
        </"a">
        </"li">

))}
    </ul>
  </div>
</div>

## **2. Pages**

La estructura en los `pages` es muy similar a la que maneja tu archivo raíz `index.astro`. Para optimizar código, se emplea un layout base común (`BaseLayout.astro`).

<p class="text-xs text-[#736063] italic bg-[#fff0f2] border border-[#fce4e6] rounded-xl p-3 my-6 text-center max-w-2xl mx-auto">
  🏰 <strong>Analogía:</strong> En tu proyecto, <code>index.astro</code> actúa como la puerta principal de la casa. Los enlaces (<code>&lt;a href=""&gt;</code>) representan los pasillos que conectan los cuartos independientes, que vienen siendo tus archivos dentro de <strong>pages</strong>.
</p>

Gracias a esta base común, evitas reescribir la estructura fundamental de HTML (esqueleto) y el llamado manual de tus componentes recurrentes como el `Header` o el `Footer`.

<div class="text-center pt-12 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ───  Fin  ───
</div>