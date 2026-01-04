# 02-RESUMO_ESTRUTURA.md - Resumo da Estrutura

## 🎯 Visão Geral

@rainersoft/design-tokens segue uma arquitetura modular com **JSON como fonte única de verdade**. Todos os formatos (CSS, Tailwind, TypeScript) são gerados automaticamente a partir dos tokens JSON.

## 🏗️ Estrutura Atual

```
rainer-design-tokens/
├── tokens/                    # 🎯 FONTE ÚNICA DE VERDADE
│   ├── primitives/           # Tokens primitivos (base)
│   │   ├── color-palette.json    # Paleta de cores base
│   │   ├── typography-base.json  # Tipografia base
│   │   ├── spacing-scale.json    # Escala de espaçamento
│   │   ├── radius-scale.json     # Escala de bordas
│   │   ├── elevation-tokens.json # Sombras e elevação
│   │   ├── motion-tokens.json    # Animações e transições
│   │   ├── breakpoints.json      # Breakpoints responsivos
│   │   └── z-index-layers.json   # Sistema de camadas
│   │
│   ├── semantics/            # Tokens semânticos (função)
│   │   ├── color-roles.json       # Cores por função
│   │   ├── border-roles.json      # Bordas por função
│   │   └── elevation-roles.json   # Elevação por função
│   │
│   ├── themes/               # Temas específicos
│   │   ├── theme-light.json       # Configuração tema light
│   │   └── theme-dark.json        # Configuração tema dark
│   │
│   └── index.json           # Export principal
│
├── scripts/                  # 🔧 Scripts de Build
│   ├── compile-formats.ts    # Script principal (CSS, Tailwind, JSON)
│   ├── generate-all.ts       # Orquestrador de tokens calculados
│   ├── generate-radius.ts    # Gera radius baseado em spacing
│   ├── generate-breakpoints.ts # Gera breakpoints padrão
│   ├── generate-z-index.ts   # Gera sistema de camadas
│   ├── build-tokens.ts       # Script master (inclui changelog)
│   └── [manutenção]          # validate, publish, sync, etc.
│
├── formats/                  # 📤 FORMATOS GERADOS (NÃO EDITAR)
│   ├── css-vars.css         # Variáveis CSS
│   ├── tailwind.config.ts   # Configuração Tailwind
│   └── tokens.json          # JSON consolidado
│
├── themes/                   # 🎨 Temas TypeScript
│   ├── index.ts             # Exportações dos temas
│   ├── light.ts             # Tema claro profissional
│   └── dark.ts              # Tema escuro cyberpunk
│
├── dist/                     # 📦 Saída Compilada
│   ├── index.js             # CommonJS
│   ├── index.mjs            # ESM
│   └── index.d.ts           # TypeScript definitions
│
├── .storybook/               # ⚙️ Storybook da Lib
│   ├── main.ts              # Configuração principal
│   └── preview.tsx          # Preview e tema
│
├── stories/                  # 📚 Stories (APENAS TOKENS)
│   ├── ColorPalette.stories.tsx
│   ├── ThemePreview.stories.tsx
│   ├── Typography.stories.tsx
│   ├── Spacing.stories.tsx
│   ├── Radius.stories.tsx
│   ├── Shadows.stories.tsx
│   ├── Elevation.stories.tsx
│   ├── Motion.stories.tsx
│   └── Accessibility.stories.tsx
│
├── docs/                     # 📚 Documentação
│   ├── 00-INDICE.md         # Índice completo
│   ├── 01-GUIDELINES.md     # Como usar
│   ├── 02-RESUMO_ESTRUTURA.md # Este documento
│   ├── 03-ESTRUTURA.md      # Estrutura detalhada
│   ├── 04-SISTEMA_BUILD.md  # Sistema de build
│   ├── 98- CHANGELOG.md      # Histórico de versões
│   └── 99-CONTRIBUINDO.md   # Como contribuir
│
├── tests/                    # 🧪 Testes
│   ├── tokens/              # Testes de tokens
│   ├── themes/              # Testes de temas
│   └── [outros]             # Testes de integração
│
└── [config]                  # 🔧 Arquivos de configuração
    ├── package.json
    ├── tsconfig.json
    ├── tsup.config.ts
    ├── jest.config.js
    └── [outros]
```

## 🎯 Princípios Fundamentais

### 1. Fonte Única de Verdade
- ✅ **Edite apenas**: `tokens/*.json`
- ✅ **Formats são gerados**: Execute `pnpm run build`
- ❌ **NÃO edite manualmente**: `formats/*` (serão sobrescritos)

### 2. Separação de Responsabilidades
- **primitives/**: Valores base (cores, spacing, etc.)
- **semantics/**: Valores por função (background, text, border)
- **themes/**: Aplicações específicas (light, dark)

### 3. Geração Automática
- **CSS Variables**: Para uso direto em CSS
- **Tailwind Config**: Para integração com Tailwind
- **TypeScript Themes**: Para uso em React/TypeScript
- **JSON Consolidado**: Para outras plataformas

## 🔄 Fluxo de Trabalho

### Desenvolvimento
```bash
# 1. Editar tokens
vim tokens/primitives/color-palette.json

# 2. Gerar formatos
pnpm run build

# 3. Visualizar no Storybook
pnpm run storybook

# 4. Testar
pnpm run test
```

### Publicação
```bash
# 1. Validar
pnpm run validate

# 2. Gerar changelog
pnpm run build:tokens

# 3. Publicar
pnpm run publish
```

## 📊 Scripts Principais

| Script | Descrição | Comando |
|--------|----------|---------|
| `build` | Build completo | `pnpm run build` |
| `build:tokens` | Gera tokens + changelog | `pnpm run build:tokens` |
| `generate-tokens` | Gera tokens calculados | `pnpm run generate-tokens` |
| `dev` | Desenvolvimento com watch | `pnpm run dev` |
| `validate` | Validação completa | `pnpm run validate` |
| `storybook` | Storybook local | `pnpm run storybook` |

## 🎨 Sistema de Tokens

### Hierarquia
```
primitives (base)
    ↓
semantics (função)
    ↓
themes (aplicação)
```

### Exemplo de Fluxo
```json
// primitives/color-palette.json
{
  "cyan": { "500": "#0891b2" }
}

// semantics/color-roles.json
{
  "brand": { "primary": "{primitives.cyan.500}" }
}

// themes/theme-light.json
{
  "colors": {
    "brand": { "primary": "{semantics.brand.primary}" }
  }
}
```

## 📦 Exportações

### TypeScript
```typescript
// Tokens brutos
import { tokens } from '@rainersoft/design-tokens';

// Temas
import { lightTheme, darkTheme } from '@rainersoft/design-tokens/themes';

// Tipos
import type { TokenSet, Theme } from '@rainersoft/design-tokens';
```

### Formatos
```typescript
// Tailwind
import tailwindConfig from '@rainersoft/design-tokens/formats/tailwind.config';

// CSS
import '@rainersoft/design-tokens/formats/css-vars.css';

// JSON
import tokensJson from '@rainersoft/design-tokens/formats/tokens.json';
```

## 🎯 Melhores Práticas

### ✅ Faça
- Edite apenas `tokens/*.json`
- Use referências `{path.to.token}`
- Siga a hierarquia primitives → semantics → themes
- Teste no Storybook após alterações
- Documente novos tokens

### ❌ Não Faça
- Não edite `formats/*` manualmente
- Não cifique valores (use referências)
- Não quebre a hierarquia
- Não pule os testes
- Não esqueça de atualizar docs

## 🔗 Links Relacionados

- [03-ESTRUTURA.md](./03-ESTRUTURA.md) - Estrutura detalhada
- [04-SISTEMA_BUILD.md](./04-SISTEMA_BUILD.md) - Sistema de build
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Como usar
- [99-CONTRIBUINDO.md](./99-CONTRIBUINDO.md) - Como contribuir

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Reestruturação completa com primitives/semantics/themes

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT