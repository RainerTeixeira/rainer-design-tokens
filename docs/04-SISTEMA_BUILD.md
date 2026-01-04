# 04-SISTEMA_BUILD.md - Sistema de Build

## 🎯 Visão Geral

Este documento explica como funciona o sistema de build automatizado da biblioteca `@rainersoft/design-tokens`. O sistema segue o princípio de **JSON como fonte única de verdade**, onde todos os formatos são gerados automaticamente.

## 🔧 Princípio Fundamental

**JSON como Fonte Única de Verdade**

- ✅ **Edite apenas**: `tokens/*.json`
- ✅ **Formats são gerados**: Execute `pnpm run build`
- ❌ **NÃO edite manualmente**: `formats/*` (serão sobrescritos)

## 📦 Scripts Principais

### Scripts de Build

```bash
# Build completo (formats + TypeScript)
pnpm run build

# Apenas formatos (CSS, Tailwind, JSON)
pnpm run build:formats

# Gerar tokens calculados
pnpm run generate-tokens

# Build com changelog
pnpm run build:tokens
```

### Scripts de Desenvolvimento

```bash
# Desenvolvimento com watch
pnpm run dev

# Iniciar Storybook
pnpm run storybook

# Validar tokens
pnpm run validate

# Type checking
pnpm run type-check
```

## 🔄 Fluxo de Build

```
tokens/primitives/*.json     Tokens base
tokens/semantics/*.json      Tokens semânticos
tokens/themes/*.json         Configurações
    ↓
scripts/compile-formats.ts   Gera formatos
    ↓
formats/css-vars.css         CSS Variables
formats/tailwind.config.ts   Config Tailwind
formats/tokens.json          JSON consolidado
    ↓
dist/index.*                Biblioteca compilada
```

## 📝 Scripts Detalhados

### compile-formats.ts
**Script principal de geração de formatos**

```typescript
// Funções principais
- generateCSS()      // Gera CSS variables
- generateTailwind() // Gera config Tailwind
- generateJSON()     // Gera JSON consolidado
```

**O que gera**:
- `formats/css-vars.css`
- `formats/tailwind.config.ts`
- `formats/tokens.json`

### generate-all.ts
**Orquestrador de tokens calculados**

```typescript
// Scripts executados
- generate-radius.ts     // Calcula radius baseado em spacing
- generate-breakpoints.ts // Gera breakpoints padrão
- generate-z-index.ts   // Gera sistema de camadas
```

### build-tokens.ts
**Script master (inclui changelog)**

```typescript
// Fluxo completo
1. Executa generate-all.ts
2. Executa compile-formats.ts
3. Gera docs/98-CHANGELOG.md
4. Valida estrutura
```

## 🎯 Formatos Gerados

### CSS Variables (`formats/css-vars.css`)
```css
:root {
  /* Primitives */
  --color-cyan-50: #ecfeff;
  --color-cyan-500: #0891b2;
  --spacing-0: 0;
  --spacing-4: 1rem;
  --radius-sm: 0.125rem;
  
  /* Semantics */
  --color-background-primary: #ffffff;
  --color-text-primary: #171717;
  --color-brand-primary: #0891b2;
  
  /* Theme */
  --elevation-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --elevation-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Tailwind Config (`formats/tailwind.config.ts`)
```typescript
import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#ecfeff',
          500: '#0891b2',
        },
        'brand-primary': '#0891b2',
        'text-primary': '#171717',
        'background-primary': '#ffffff',
      },
      spacing: {
        17: '4.25rem',
        18: '4.5rem',
        88: '22rem',
        93: '23.25rem',
        98: '24.5rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'elevation-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'elevation-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### JSON Consolidado (`formats/tokens.json`)
```json
{
  "primitives": {
    "colors": {
      "cyan": {
        "50": "#ecfeff",
        "500": "#0891b2",
        "900": "#164e63"
      },
      "gray": {
        "50": "#fafafa",
        "500": "#737373",
        "900": "#171717"
      }
    },
    "spacing": {
      "0": "0",
      "4": "1rem",
      "8": "2rem",
      "16": "4rem"
    },
    "typography": {
      "fontFamily": {
        "sans": ["Inter", "system-ui", "sans-serif"]
      },
      "fontSize": {
        "base": ["1rem", "1.5rem"]
      }
    }
  },
  "semantics": {
    "colors": {
      "background": {
        "primary": "#ffffff",
        "secondary": "#fafafa"
      },
      "text": {
        "primary": "#171717",
        "secondary": "#737373"
      },
      "brand": {
        "primary": "#0891b2"
      }
    }
  },
  "themes": {
    "light": {
      "colors": {
        "background": {
          "primary": "#ffffff"
        }
      }
    },
    "dark": {
      "colors": {
        "background": {
          "primary": "#0a0a0f"
        },
        "text": {
          "primary": "#b3ffff"
        }
      }
    }
  }
}
```

## 🛠️ Workflow de Desenvolvimento

### 1. Editar Tokens
```bash
# Editar arquivo de tokens
vim tokens/primitives/color-palette.json

# Adicionar nova cor
{
  "violet": {
    "50": "#f5f3ff",
    "500": "#8b5cf6",
    "900": "#4c1d95"
  }
}
```

### 2. Gerar Formatos
```bash
# Gerar todos os formatos
pnpm run build:formats

# Ou build completo
pnpm run build
```

### 3. Visualizar Mudanças
```bash
# Storybook para visualizar
pnpm run storybook

# Testar mudanças
pnpm run test
```

### 4. Validar
```bash
# Validação completa
pnpm run validate

# Type checking
pnpm run type-check
```

## 📋 Scripts Úteis

### Validação
```bash
# Validar JSON dos tokens
pnpm run validate

# Verificar referências
pnpm run check-references

# Testes completos
pnpm run test:ci
```

### Manutenção
```bash
# Limpar formats gerados
pnpm run clean

# Gerar changelog
pnpm run changelog

# Sincronizar versões
pnpm run sync-version
```

## 🚀 CI/CD Integration

### GitHub Actions
```yaml
# .github/workflows/ci.yml
- name: Build formats
  run: pnpm run build:formats

- name: Run tests
  run: pnpm run test:ci

- name: Validate tokens
  run: pnpm run validate
```

### Pre-publish Hooks
```json
// package.json
{
  "scripts": {
    "prepublishOnly": "pnpm run build && pnpm run validate",
    "postpublish": "pnpm run sync-version"
  }
}
```

## 🔧 Troubleshooting

### Erros Comuns

#### 1. "Token não encontrado"
```bash
# Verificar referências
pnpm run check-references

# Validar JSON
pnpm run validate:json
```

#### 2. "Format não gerado"
```bash
# Limpar e regenerar
pnpm run clean
pnpm run build:formats
```

#### 3. "TypeScript errors"
```bash
# Type checking
pnpm run type-check

# Regenerar tipos
pnpm run build:types
```

### Debug Mode
```bash
# Build com debug
DEBUG=* pnpm run build:formats

# Verbose mode
pnpm run build:formats --verbose
```

## 📊 Performance

### Tempos de Build
- `build:formats`: ~2s
- `build` completo: ~5s
- `validate`: ~1s

### Cache
- Build cache automático
- Incremental builds disponíveis
- Parallel generation de formatos

## 🔗 Links Relacionados

- [01-GUIDELINES.md](./01-GUIDELINES.md) - Como usar
- [02-RESUMO_ESTRUTURA.md](./02-RESUMO_ESTRUTURA.md) - Resumo
- [03-ESTRUTURA.md](./03-ESTRUTURA.md) - Estrutura detalhada
- [99-CONTRIBUINDO.md](./99-CONTRIBUINDO.md) - Contribuir

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Scripts atualizados, compile-formats.ts como principal

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT