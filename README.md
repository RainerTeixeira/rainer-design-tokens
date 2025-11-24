# @rainersoft/design-tokens

[![Version](https://img.shields.io/badge/version-2.2.0-blue)](https://github.com/RainerTeixeira/rainer-design-tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Design tokens globais (CSS Variables, Tailwind config, temas) para o ecossistema Rainersoft

**Versão 2.2.0** - Arquitetura limpa, zero redundância, fonte única de verdade

## 📦 Responsabilidade

Este pacote é a **fonte única de verdade** para todos os tokens de design:
- Cores, tipografia, espaçamento, radius, sombras
- CSS Variables para temas dinâmicos
- Configuração Tailwind pronta para uso
- Suporte a múltiplos temas (light/dark)

## 🚀 Instalação

```bash
# Com pnpm (recomendado)
pnpm add @rainersoft/design-tokens

# Com npm
npm install @rainersoft/design-tokens
```

## 📖 Uso

### CSS Variables (Recomendado)

```tsx
// ✅ Use o formato gerado automaticamente (v2.1.0+)
import '@rainersoft/design-tokens/formats/css-vars.css';

// Os tokens estarão disponíveis globalmente
<div style={{ color: 'var(--color-primary)' }}>
  Hello World
</div>
```

> **Nota**: `src/css-vars.css` está **deprecated** desde v2.1.0 e será removido na v3.0.0.  
> Use `formats/css-vars.css` que é gerado automaticamente dos tokens JSON.

### Tokens TypeScript

```tsx
import { colors, spacing, radius } from '@rainersoft/design-tokens';

// Usar tokens programaticamente
const primaryColor = colors.primary.DEFAULT;
const largePadding = spacing['16'];
```

### Temas Dinâmicos

```html
<!-- Tema claro (padrão) -->
<body data-theme="light">

<!-- Tema escuro -->
<body data-theme="dark">
```

## 🛠️ Scripts

```bash
# Construir tokens
pnpm build

# Desenvolvimento com hot reload
pnpm dev

# Executar testes
pnpm test

# Verificar tipos
pnpm type-check

# Limpar build
pnpm clean
```

## 📁 Estrutura

```text
@rainersoft/design-tokens/
├── tokens/               # 📝 Fonte única de verdade (JSON)
│   ├── colors/          # Paletas light/dark
│   ├── typography.json  # Tipografia
│   ├── spacing.json     # Espaçamento
│   ├── radius.json      # Border radius
│   ├── shadows.json     # Sombras
│   ├── motion.json      # Animações
│   └── z-index.json     # Camadas
├── formats/             # 🔄 Gerados automaticamente
│   ├── css-vars.css     # CSS Variables (USE ESTE)
│   ├── tokens.json      # JSON consolidado
│   └── tailwind.config.ts # Config Tailwind
├── src/
│   └── css-vars.css     # ⚠️ DEPRECATED (remover em v3.0.0)
└── dist/                # 📦 Build para distribuição
```

## 🎨 Tokens Disponíveis

### Cores
- `primary`, `secondary`, `accent`, `destructive`
- `background`, `foreground`, `muted`, `card`, `popover`
- Cada cor tem variantes light/dark

As cores são expostas principalmente como **CSS Variables**, por exemplo:

```css
:root[data-theme="light"] {
  --color-primary: 14 165 233;          /* rgb */
  --color-primary-foreground: 15 23 42; /* rgb */
  /* ...outras cores */
}

:root[data-theme="dark"] {
  --color-primary: 56 189 248;
  --color-primary-foreground: 15 23 42;
}
```

Uso típico nas camadas de UI:

- CSS direto: `color: rgb(var(--color-primary));`
- Tailwind (via config): classes como `bg-primary`, `text-primary-foreground`, `border-border`, etc.
- Temas dinâmicos: alternando `data-theme="light"` / `data-theme="dark"` na tag `html` ou `body`.

### Espaçamento
- Sistema 8pt grid: `0`, `1`, `2`, `4`, `8`, `12`, `16`, `20`, `24`, `32`...

### Tipografia
- Font sizes: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`...
- Font weights: `light`, `regular`, `medium`, `semibold`, `bold`

### Radius
- `none`, `sm`, `md`, `lg`, `xl`, `full`

### Sombras
- `xs`, `sm`, `md`, `lg`, `xl`, `2xl`

### Animações
- Durações: `fast`, `normal`, `slow`
- Easing functions predefinidos

## ⚙️ Exemplo de Tailwind Config

Um exemplo simples de como consumir as variáveis de cor neste pacote via Tailwind:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          foreground: 'rgb(var(--color-secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--color-muted) / <alpha-value>)',
          foreground: 'rgb(var(--color-muted-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--color-card) / <alpha-value>)',
          foreground: 'rgb(var(--color-card-foreground) / <alpha-value>)',
        },
      },
    },
  },
};

export default config;
```

## 📝 Changelog

### v2.2.0 (2024-11-24)

**🚀 Melhorias de Governança e CI/CD**

- ✅ **CI/CD Pipeline**: Workflow GitHub Actions completo para validação automática
- ✅ **Validação de Tokens**: Checks automáticos para valores hardcoded
- ✅ **Build Sequencial**: Pipeline garantindo ordem correta de build
- ✅ **Zero Hardcode Enforcement**: Validação rigorosa contra valores hardcoded
- ✅ **Documentação Profissional**: CONTRIBUTING.md dentro de docs/

### v2.1.0 (2024-11-24)

**🎯 Arquitetura Limpa - Zero Redundância**

- ✅ **Removida redundância entre CSS vars**: `src/css-vars.css` marcado como DEPRECATED
- ✅ **Fonte única de verdade**: Apenas `formats/` (gerado) + `tokens/` (fonte)
- ✅ **Classes utilitárias movidas**: `.glass`, `.neon-*`, `.gradient-*` → `@rainersoft/ui`
- ✅ **Limpeza de arquivos**: `coverage/` e `.env` adicionados ao `.gitignore`
- ✅ **Documentação atualizada**: README reflete a nova arquitetura

**Migração Recomendada:**
```diff
- import '@rainersoft/design-tokens/src/css-vars.css';
+ import '@rainersoft/design-tokens/formats/css-vars.css';
```

### v2.0.0

- Sistema profissional W3C Design Tokens (DTCG)
- Token Editor 100% local (browser-based)
- Novos tokens: motion, breakpoints, z-index
- Novos formatos: Figma, Android XML, iOS Swift
- 320+ testes com 100% cobertura do Token Editor
- Estrutura primitivos/semânticos
- Breaking changes com guia de migração

## 🤝 Contribuindo

Contribuições são bem-vindas! Consulte o [Guia de Contribuição](./docs/CONTRIBUINDO.md) para saber como contribuir com este projeto.

## 📚 Documentação Completa

- [Índice da Documentação](./docs/00-INDICE.md)
- [Guia de Contribuição](./docs/CONTRIBUINDO.md)
- [Estrutura do Projeto](./docs/03-ESTRUTURA.md)
- [Sistema de Build](./docs/04-SISTEMA_BUILD.md)
- [Guia de Publicação](./docs/11-PUBLICACAO.md)

## 📝 Licença

MIT © Rainer Teixeira
