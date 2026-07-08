# Malharia Princesa — versão com alternância de tema (claro/escuro)

## Estrutura (arquivos já na raiz — pronto pro Vercel)

```
index.html
css/styles-switch.css
js/main-switch.js
assets/images/   (fotos placeholder)
```

## Como hospedar no Vercel

Ao importar/arrastar este projeto, **não entre em nenhuma subpasta antes** —
o `index.html` já está na raiz. Se for usar "Root Directory" nas
configurações do projeto, deixe em branco (ou `.`).

Outras opções (Netlify, GitHub Pages, FTP tradicional) funcionam do mesmo
jeito, sem configuração extra.

## 🌗 Botão de tema

O ícone de lua/sol ao lado do menu alterna entre tema escuro (preto) e
tema claro (branco). A escolha fica salva no navegador do visitante
(`localStorage`), então ele volta a ver o tema escolhido na próxima visita.

## 📩 Formulário (Formspree)

Em `index.html`, troque `SEU_FORM_ID` pelo endpoint da sua conta gratuita
em [formspree.io](https://formspree.io):

```html
<form class="form reveal" action="https://formspree.io/f/SEU_FORM_ID" method="POST">
```

## ⚠️ Fotos

As imagens em `assets/images/` são placeholders (retângulos com o nome do
que deveria entrar ali, ex. "TINTURARIA"). Substitua pelos arquivos reais
(baixados do wp-admin → Mídia do WordPress) mantendo o mesmo nome de
arquivo — não precisa mexer no HTML.
