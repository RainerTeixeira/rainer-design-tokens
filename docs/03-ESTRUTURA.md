# 03-ESTRUTURA.md - Estrutura Detalhada

## 🎯 Visão Geral

Este documento explica a estrutura detalhada da biblioteca `@rainersoft/design-tokens` e como cada parte funciona. A biblioteca segue o princípio de **JSON como fonte única de verdade**, onde todos os formatos (CSS, Tailwind, TypeScript) são gerados automaticamente.

## 🏗️ Estrutura Completa

```
rainer-design-tokens/
├── 📁 tokens/                     # FONTE ÚNICA DE VERDADE
│   ├── 📁 primitives/            # Tokens primitivos (valores base)
│   │   ├── 📄 color-palette.json
│   │   ├── 📄 typography-base.json
│   │   ├── 📄 spacing-scale.json
│   │   ├── 📄 radius-scale.json
│   │   ├── 📄 elevation-tokens.json
│   │   ├── 📄 motion-tokens.json
│   │   ├── 📄 breakpoints.json
│   │   └── 📄 z-index-layers.json
│   │
│   ├── 📁 semantics/             # Tokens semânticos (função)
│   │   ├── 📄 color-roles.json
│   │   ├── 📄 border-roles.json
│   │   └── 📄 elevation-roles.json
│   │
│   ├── 📁 themes/                # Configurações de temas
│   │   ├── 📄 theme-light.json
│   │   └── 📄 theme-dark.json
│   │
│   └── 📄 index.json            # Export principal
│
├── 📁 scripts/                   # Scripts de Build e Manutenção
│   ├── 📄 build-tokens.ts       # Master script - gera todos os formatos
│   ├── 📄 release-package.ts    # Script de publicação npm
│   └── 📄 sync-docs.ts          # Sincronização de documentação
│
├── 📁 formats/                   # FORMATOS GERADOS (NÃO EDITAR)
│   ├── 📄 css-vars.css          # Variáveis CSS
│   ├── 📄 tailwind.config.ts    # Config Tailwind
│   └── 📄 tokens.json           # JSON consolidado
│
├── 📁 themes/                    # Temas TypeScript
│   ├── 📄 index.ts              # Exportações
│   ├── 📄 light.ts              # Tema claro
│   └── 📄 dark.ts               # Tema escuro
│
├── 📁 dist/                      # Saída Compilada
│   ├── 📄 index.js              # CommonJS
│   ├── 📄 index.mjs             # ESM
│   └── 📄 index.d.ts            # Types
│
├── 📁 .storybook/                # Configuração Storybook
│   ├── 📄 main.ts               # Config principal
│   └── 📄 preview.tsx           # Preview
│
├── 📁 stories/                   # Stories dos Tokens
│   ├── 📄 ColorPalette.stories.tsx
│   ├── 📄 ThemePreview.stories.tsx
│   ├── 📄 Typography.stories.tsx
│   ├── 📄 Spacing.stories.tsx
│   ├── 📄 Radius.stories.tsx
│   ├── 📄 Shadows.stories.tsx
│   ├── 📄 Elevation.stories.tsx
│   ├── 📄 Motion.stories.tsx
│   └── 📄 Accessibility.stories.tsx
│
├── 📁 docs/                      # Documentação
│   ├── 📄 00-INDICE.md
│   ├── 📄 01-GUIDELINES.md
│   ├── 📄 02-RESUMO_ESTRUTURA.md
│   ├── 📄 03-ESTRUTURA.md
│   ├── 📄 04-SISTEMA_BUILD.md
│   ├── 📄 [outros docs]
│   └── 📄 99-CONTRIBUINDO.md
│
├── 📁 tests/                     # Testes
│   ├── 📁 tokens/
│   ├── 📁 themes/
│   └── 📄 [outros testes]
│
└── 📁 [config files]             # Arquivos de config
    ├── 📄 package.json
    ├── 📄 tsconfig.json
    ├── 📄 tsup.config.ts
    ├── 📄 jest.config.js
    └── 📄 [outros]
```

## 🎯 Tokens Primitives (tokens/primitives/)

### color-palette.json
```json
{
  "cyan": {
    "50": "#ecfeff",
    "100": "#cffafe",
    "500": "#0891b2",
    "600": "#0e7490",
    "900": "#164e63"
  },
  "gray": {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "500": "#737373",
    "900": "#171717"
  }
}
```

### typography-base.json
```json
{
  "fontFamily": {
    "sans": ["Inter", "system-ui", "sans-serif"],
    "mono": ["JetBrains Mono", "monospace"]
  },
  "fontSize": {
    "xs": ["0.75rem", "1rem"],
    "sm": ["0.875rem", "1.25rem"],
    "base": ["1rem", "1.5rem"]
  },
  "fontWeight": {
    "thin": "100",
    "normal": "400",
    "bold": "700"
  }
}
```

### spacing-scale.json
```json
{
  "0": "0",
  "px": "1px",
  "0.5": "0.125rem",
  "1": "0.25rem",
  "2": "0.5rem",
  "4": "1rem",
  "8": "2rem",
  "16": "4rem"
}
```

## 🎨 Tokens Semantics (tokens/semantics/)

### color-roles.json
```json
{
  "background": {
    "primary": "{primitives.gray.50}",
    "secondary": "{primitives.gray.100}",
    "inverse": "{primitives.gray.900}"
  },
  "text": {
    "primary": "{primitives.gray.900}",
    "secondary": "{primitives.gray.500}",
    "inverse": "{primitives.gray.50}"
  },
  "brand": {
    "primary": "{primitives.cyan.500}",
    "secondary": "{primitives.purple.500}"
  }
}
```

## 🌓 Tokens de Temas (tokens/themes/)

### theme-light.json
```json
{
  "$type": "theme",
  "$description": "Tema claro profissional",
  "colors": {
    "background": {
      "primary": "{semantics.background.primary}",
      "secondary": "{semantics.background.secondary}"
    }
  }
}
```

### theme-dark.json
```json
{
  "$type": "theme",
  "$description": "Tema escuro cyberpunk",
  "colors": {
    "background": {
      "primary": "#0a0a0f",
      "secondary": "#0f0f1a"
    },
    "text": {
      "primary": "#b3ffff",
      "secondary": "#4dffff"
    }
  }
}
```

## 🔧 Scripts de Build

### compile-formats.ts
Script principal que gera:
- CSS Variables (`formats/css-vars.css`)
- Tailwind Config (`formats/tailwind.config.ts`)
- JSON Consolidado (`formats/tokens.json`)

### generate-all.ts
Orquestrador que executa:
- `generate-radius.ts` - Calcula radius baseado em spacing
- `generate-breakpoints.ts` - Gera breakpoints padrão
- `generate-z-index.ts` - Gera sistema de camadas

### build-tokens.ts
Script master que:
- Executa `generate-all.ts`
- Executa `compile-formats.ts`
- Gera changelog
- Valida tokens

## 📦 Formatos Gerados

### CSS Variables
```css
:root {
  --color-cyan-500: #0891b2;
  --spacing-4: 1rem;
  --font-sans: Inter, system-ui, sans-serif;
}
```

### Tailwind Config
```typescript
export default {
  theme: {
    extend: {
      colors: {
        cyan: {
          500: "#0891b2"
        }
      },
      spacing: {
        4: "1rem"
      }
    }
  }
}
```

### JSON Consolidado
```json
{
  "primitives": {
    "colors": { "cyan": { "500": "#0891b2" } }
  },
  "semantics": {
    "colors": { "brand": { "primary": "#0891b2" } }
  },
  "themes": {
    "light": { "colors": { "brand": { "primary": "#0891b2" } } }
  }
}
```

## 🔄 Fluxo de Trabalho

### 1. Desenvolvimento
```bash
# Editar tokens
vim tokens/primitives/color-palette.json

# Gerar formatos
pnpm run build

# Visualizar
pnpm run storybook

# Testar
pnpm run test
```

### 2. Validação
```bash
# Validar estrutura
pnpm run validate

# Type checking
pnpm run type-check

# Testes completos
pnpm run test:ci
```

### 3. Publicação
```bash
# Build completo
pnpm run build

# Gerar changelog
pnpm run build:tokens

# Publicar
pnpm run publish
```

## 📊 Sistema de Referências

### Sintaxe de Referência
```json
{
  "exemplo": "{primitives.cyan.500}"
}
```

### Tipos de Referência
- `{primitives.*}` - Referência a tokens primitivos
- `{semantics.*}` - Referência a tokens semânticos
- `{themes.*}` - Referência a temas

### Resolução
1. Parser SDTD (Style Dictionary TD)
2. Transformações aplicadas
3. Formatos gerados

## 🎯 Melhores Práticas

### Organização
- ✅ Agrupe tokens por tipo
- ✅ Use nomes semânticos
- ✅ Documente tokens complexos
- ✅ Mantenha hierarquia clara

### Nomenclatura
- ✅ primitives: `camelCase`
- ✅ semantics: `kebab-case`
- ✅ themes: `theme-{nome}`

### Validação
- ✅ Use referências, não valores hardcode
- ✅ Teste todos os temas
- ✅ Valide sintaxe JSON
- ✅ Verifique referências quebradas

## 🔗 Links Relacionados

- [01-GUIDELINES.md](./01-GUIDELINES.md) - Como usar
- [02-RESUMO_ESTRUTURA.md](./02-RESUMO_ESTRUTURA.md) - Resumo
- [04-SISTEMA_BUILD.md](./04-SISTEMA_BUILD.md) - Build detalhado
- [99-CONTRIBUINDO.md](./99-CONTRIBUINDO.md) - Contribuir

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Nova estrutura primitives/semantics/themes

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 05 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT