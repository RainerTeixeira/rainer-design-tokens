# @rainersoft/design-tokens

[![Version](https://img.shields.io/badge/version-2.6.0-blue)](https://github.com/RainerTeixeira/rainer-design-tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Design tokens profissionais (W3C DTCG) com estrutura primitivos/semânticos/temas

**Versão 2.7.0** - Hierarquia correta, temas funcionais, build otimizado

## 📦 Responsabilidade

Este pacote implementa a **arquitetura W3C Design Tokens Community Group (DTCG)**:

- **Primitivos**: Valores fundamentais (cores base, espaçamento, tipografia)
- **Semânticos**: Tokens com significado (primary, danger, success)
- **Temas**: Implementações completas (light, dark)
- **CSS Variables**: Geradas automaticamente para uso em qualquer contexto
- **Tailwind Config**: Configuração pronta para desenvolvimento
- **Build Otimizado**: Scripts profissionais que resolvem referências automaticamente

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
import { tokens } from '@rainersoft/design-tokens';

// Acessar tokens por camada
const primaryColor = tokens.primitives.color.blue[500];
const semanticColor = tokens.semantics.color.background.primary;
const themeColor = tokens.themes.light.background.primary;

// Tema dark
const darkBackground = tokens.themes.dark.background.primary;
```

### Temas Dinâmicos

```html
<!-- Tema claro (padrão) -->
<body class="light">

<!-- Tema escuro -->
<body class="dark">

<!-- Ou via data attribute -->
<body data-theme="light">
<body data-theme="dark">
```

As CSS Variables são geradas automaticamente:

```css
:root {
  --color-background-primary: #ffffff;
  --color-text-primary: #111827;
}

.dark {
  --color-background-primary: #111827;
  --color-text-primary: #f9fafb;
}
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
│   ├── primitives/       # 🔰 Tokens fundamentais
│   │   ├── color-palette.json    # Paleta de cores base
│   │   ├── spacing-scale.json    # Escala de espaçamento
│   │   ├── typography-base.json  # Tipografia base
│   │   ├── radius-scale.json     # Escala de arredondamento
│   │   ├── elevation-tokens.json # Sombras/elevação
│   │   ├── motion-tokens.json    # Animações e transições
│   │   ├── breakpoints.json      # Breakpoints responsivos
│   │   ├── z-index-layers.json   # Camadas Z-index
│   │   └── border-tokens.json    # Tokens de borda
│   ├── semantics/        # 🎯 Tokens com significado
│   │   ├── color-roles.json      # Cores semânticas
│   │   ├── spacing-context.json  # Espaçamento contextual
│   │   ├── typography-roles.json # Tipografia semântica
│   │   ├── border-roles.json    # Bordas por função
│   │   └── layout-structure.json# Layout estrutural
│   └── themes/           # 🌓 Temas completos
│       ├── theme-light.json      # Tema claro
│       └── theme-dark.json       # Tema escuro
├── formats/             # 🔄 Gerados automaticamente
│   ├── css-vars.css     # CSS Variables (USE ESTE)
│   ├── tokens.json      # JSON consolidado
│   └── tailwind.config.ts # Config Tailwind
├── scripts/             # 🔧 Scripts de build
│   ├── build-css.ts     # Gera CSS vars
│   ├── build-tailwind.ts# Gera config Tailwind
│   └── build-tokens-json.ts # Gera JSON consolidado
└── dist/                # 📦 Build para distribuição
```

### Hierarquia de Tokens

```
PRIMITIVOS (valores brutos)
    ↓ {palette.gray.900}
SEMÂNTICOS (valores com significado)
    ↓ {color.background.primary}
TEMAS (implementações completas)
    ↓ #111827 (resolvido no CSS)
```

## 🎨 Tokens Disponíveis

### Cores

**Categorias Principais:**
- **Background**: `primary`, `secondary`, `tertiary`, `disabled`, `overlay`, `inverse`
- **Text**: `primary`, `secondary`, `tertiary`, `disabled`, `link`, `linkHover`
- **Button**: `primary`, `secondary`, `tertiary`, `danger`, `success` (com estados)
- **Border**: `default`, `light`, `medium`, `dark`, `focus`, `error`, `success`
- **Status**: `success`, `error`, `warning`, `info` (com variantes)
- **Surface**: `elevated`, `raised`, `sunken`

**CSS Variables Geradas:**
```css
:root {
  /* Background */
  --color-background-primary: #ffffff;
  --color-background-secondary: #f9fafb;
  --color-background-tertiary: #f3f4f6;
  
  /* Text */
  --color-text-primary: #111827;
  --color-text-secondary: #4b5563;
  --color-text-link: #0284c7;
  
  /* Buttons */
  --color-button-primary-default: #0ea5e9;
  --color-button-primary-hover: #0284c7;
}

.dark {
  /* Background escuro */
  --color-background-primary: #111827;
  --color-background-secondary: #1f2937;
  
  /* Text claro */
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
}
```

**Uso Prático:**
- CSS direto: `color: var(--color-text-primary);`
- Tailwind: classes geradas automaticamente
- Temas: alternar classe `.light` / `.dark` no body

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

### v2.7.0 (2026-01-05)

**🏗️ Arquitetura DTCG Corrigida**

- ✅ **Hierarquia Correta**: Primitivos → Semânticos → Temas
- ✅ **Referências Resolvidas**: `{palette.*}` → `#hexadecimal` no CSS
- ✅ **Temas Funcionais**: Light/Dark com valores corretos e troca instantânea
- ✅ **Build Otimizado**: Scripts resolvem referências automaticamente
- ✅ **Zero Erros**: Build TypeScript e CSS sem falhas
- ✅ **Estrutura Profissional**: Segue W3C Design Tokens Community Group

**Correções Críticas:**
- Removidas referências circulares entre temas e semânticos
- Scripts de build agora resolvem `{palette.*}` para valores reais
- CSS gerado com valores hexadecimais, não referências
- Temas light/dark funcionais e testados

### v2.6.0 (2026-01-05)

**🚀 Sistema de Tokens Profissional**

- ✅ **Estrutura DTCG**: Primitivos, Semânticos, Temas
- ✅ **Build Automatizado**: Geração de CSS, Tailwind, JSON
- ✅ **Token Editor**: Interface 100% local para edição
- ✅ **Novos Tokens**: Motion, Breakpoints, Z-Index
- ✅ **320+ Testes**: Cobertura completa do sistema

### v2.2.0 (2026-01-05)

**🚀 Melhorias de Governança e CI/CD**

- ✅ **CI/CD Pipeline**: Workflow GitHub Actions completo
- ✅ **Validação de Tokens**: Checks automáticos
- ✅ **Build Sequencial**: Pipeline garantindo ordem correta
- ✅ **Zero Hardcode Enforcement**: Validação rigorosa

### v2.1.0 (2026-01-05)

**🎯 Arquitetura Limpa - Zero Redundância**

- ✅ **Fonte única de verdade**: `formats/` + `tokens/`
- ✅ **Classes utilitárias movidas**: Para `@rainersoft/ui`
- ✅ **Limpeza de arquivos**: `.gitignore` otimizado

### v2.0.0

- Sistema profissional W3C Design Tokens (DTCG)
- Token Editor 100% local (browser-based)
- Novos tokens: motion, breakpoints, z-index
- Novos formatos: Figma, Android XML, iOS Swift
- 320+ testes com 100% cobertura
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

---

**Versão:** 2.6.0
**Última Atualização:** 05 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT