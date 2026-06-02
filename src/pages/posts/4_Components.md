---
layout: ../../layouts/MarkdownAstroLayout.astro
title: '.ೀ Components'
pubDate: 2026-06-01
description: 'Esta es la primera publicación sobre conceptos de Components en Astro y su estructura'
author: 'Sara Andrade'
image1:
  url1: ''
  alt1: 'Astro'
tags: ["Astro","páginas web","aprender"]
---

# **Dentro del encarpetado de tu proyecto**

Para crear los componentes que conformarán la estructura de la página, sigue estos pasos estructurados:

<div class="bg-[#e6f4f3]/60 border border-[#cbdad8] rounded-2xl p-4 my-8 text-xs md:text-sm text-[#3d6966] font-medium shadow-3xs flex items-center justify-center text-center gap-2 max-w-2xl mx-auto">
  <span>📂</span> <span><strong>Estructura de archivos:</strong> Todo componente modular que no sea una página completa debe organizarse de forma limpia.</span>
</div>

<div class="space-y-4 max-w-2xl mx-auto text-xs md:text-sm text-[#736063] bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs mb-8">
  <p class="font-semibold text-[#3d6966] mb-2">Pasos para la creación:</p>
  <ol class="list-decimal pl-5 space-y-2">
    <li>En la carpeta <code class="bg-[#fcf8f8] px-1.5 py-0.5 rounded text-[#a86b74]">src/</code>, crea una nueva subcarpeta llamada <code class="bg-[#fcf8f8] px-1.5 py-0.5 rounded text-[#a86b74]">components/</code>.</li>
    <li>Dentro de ella, genera los siguientes archivos base independientes:</li>
  </ol>
  <ul class="list-none space-y-1.5 pl-6 mt-3">
    <li class="flex items-center gap-2"><span>🌸</span> <code>Header.astro</code></li>
    <li class="flex items-center gap-2"><span>🌸</span> <code>Navegation.astro</code></li>
    <li class="flex items-center gap-2"><span>🌸</span> <code>Social.astro</code></li>
    <li class="flex items-center gap-2"><span>🌸</span> <code>Footer.astro</code></li>
  </ul>
</div>

# **Cuerpo de cada componente**

A continuación, se detalla el comportamiento lógico y el diseño visual con **Tailwind CSS** para cada uno de los archivos creados.

<div class="space-y-8 max-w-2xl mx-auto">

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center gap-1.5 justify-center">
      <span>✦ 1.</span> Componente Header
    </h3>
    <p class="text-xs text-[#736063] mb-4 text-center">
      En el frontmatter (<code class="text-[#a86b74]">---</code>) importas lo que necesites junto a la constante <code class="text-[#a86b74]">pageTitle</code>. Su estructura HTML se define así:
    </p>
    <pre class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl border border-[#fce4e6]/40 overflow-x-auto text-left"><code>---
import Navegation from './Navegation.astro';
const { pageTitle } = Astro.props;
---
&lt;header class="max-w-2xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#fce4e6]"&gt;
  &lt;h1 class="text-xl md:text-2xl font-serif font-bold text-[#a86b74] tracking-tight"&gt;
    &#123;pageTitle&#125;
  &lt;/h1&gt;
  &lt;Navegation /&gt;
&lt;/header&gt;</code></pre>
  </div>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center gap-1.5 justify-center">
      <span>✦ 2.</span> Componente Navegation
    </h3>
    <p class="text-xs text-[#736063] mb-4 text-center">
      Encargado de los enlaces del sitio. No requiere constantes complejas, solo la etiqueta semántica <code class="text-[#3d6966]">&lt;nav&gt;</code> y sus anclas estilizadas:
    </p>
    <pre class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-4 rounded-xl border border-[#cbdad8]/40 overflow-x-auto text-left"><code>---
import '../styles/global.css';
---
&lt;nav class="flex items-center gap-4 text-xs md:text-sm font-medium"&gt;
  &lt;a href="/" class="text-[#736063] hover:text-[#3d6966] transition-colors"&gt;Inicio&lt;/a&gt;
  &lt;a href="/about/" class="text-[#736063] hover:text-[#3d6966] transition-colors"&gt;Acerca de&lt;/a&gt;
  &lt;a href="/blog/" class="text-[#736063] hover:text-[#3d6966] transition-colors"&gt;Blog&lt;/a&gt;
&lt;/nav&gt;</code></pre>
  </div>

  <div class="bg-white border border-[#fce4e6] rounded-2xl p-6 shadow-3xs hover:border-[#a86b74] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#a86b74] mb-3 flex items-center gap-1.5 justify-center">
      <span>✦ 3.</span> Componente Social
    </h3>
    <p class="text-xs text-[#736063] mb-4 text-center">
      Permite inyectar redes dinámicamente al Footer pasando propiedades (<code class="text-[#a86b74]">props</code>). Si prefieres ver un emoji o texto personalizado en lugar del nombre nativo de la plataforma, puedes definir un <code class="text-[#a86b74]">label</code>.
    </p>
    <pre class="bg-[#fcf8f8] text-[#a86b74] font-mono text-xs p-4 rounded-xl border border-[#fce4e6]/40 overflow-x-auto text-left"><code>---
const { platform, username, label } = Astro.props
import '../styles/global.css'
---
&lt;a 
    href=&#123;`https://www.$&#123;platform&#125;.com/$&#123;username&#125;`&#125; 
    target="_blank" 
    class="px-3.5 py-2 md:py-1.5 bg-white border border-[#f5e1e2] text-[11px] md:text-xs text-[#a35c65] rounded-xl hover:bg-[#e6f4f3] hover:text-[#3d6966] hover:border-[#cbdad8] transition-all duration-300 shadow-2xs font-medium flex items-center gap-1.5 transform hover:-translate-y-0.5 active:translate-y-0"
&gt;
  &lt;span class="text-[9px] opacity-60"&gt;✨&lt;/span&gt; &#123;label || platform&#125; 
&lt;/a&gt;</code></pre>
  </div>

  <div class="bg-white border border-[#cbdad8]/60 rounded-2xl p-6 shadow-3xs hover:border-[#3d6966] transition-all">
    <h3 class="text-sm font-serif font-bold text-[#3d6966] mb-3 flex items-center gap-1.5 justify-center">
      <span>✦ 4.</span> Componente Footer
    </h3>
    <p class="text-xs text-[#736063] mb-4 text-center">
      Importa el componente modular <code class="text-[#3d6966]">Social.astro</code> para estructurar las redes, añadiendo al final los créditos de autoría y el año actual.
    </p>
    <pre class="bg-[#f4faf9] text-[#3d6966] font-mono text-xs p-4 rounded-xl border border-[#cbdad8]/40 overflow-x-auto text-left"><code>---
import Social from "./Social.astro";
import '../styles/global.css'
---
&lt;footer class="mt-16 pt-8 pb-10 border-t border-[#fce4e6] text-center bg-[#fff5f6] rounded-t-3xl"&gt;
    &lt;div id="redes" class="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 px-4 max-w-xl mx-auto"&gt;
        &lt;Social platform="github" username="SaraAndrade1123" label="GitHub"/&gt;
    &lt;/div&gt;
    
&lt;small class="text-[11px] md:text-xs font-serif font-bold text-[#b89198] tracking-widest uppercase block px-4"&gt;──
        &amp;copy; Sara Andrade Rodríguez 2026 ── &lt;span class="text-[#3d6966]"&gt;&lt;/span&gt;
    &lt;/small&gt;
&lt;/footer&gt;</code></pre>
  </div>

</div>

<div class="text-center pt-12 pb-4 text-xs font-serif font-bold italic text-[#b89198] tracking-widest">
    ───  Fin  ───
</div>