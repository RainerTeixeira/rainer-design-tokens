# 📁 Resumo da Estrutura - Design Tokens

## 🎯 Estrutura Final

```
C:\Desenvolvimento\
│
├─ @rainer-design-tokens/          # 📦 Biblioteca de Design Tokens
│   ├─ tokens/                      # 🎯 FONTE ÚNICA DE VERDADE (JSON)
│   │   ├─ colors/
│   │   │   ├─ light.json
│   │   │   └─ dark.json
│   │   ├─ typography.json
│   │   ├─ spacing.json
│   │   ├─ radius.json
│   │   └─ shadows.json
│   │
│   ├─ formats/                     # 📤 FORMATOS GERADOS (NÃO EDITAR)
│   │   ├─ css-vars.css             # ← Gerado por build-css.ts
│   │   ├─ tailwind.config.ts       # ← Gerado por build-tailwind.ts
│   │   └─ tokens.json              # ← Gerado por build-tokens-json.ts
│   │
│   ├─ scripts/                     # 🔧 Scripts de Build
│   │   ├─ build-formats.ts         # Orquestrador principal
│   │   ├─ build-css.ts             # Gera CSS variables
│   │   ├─ build-tailwind.ts        # Gera Tailwind config
│   │   └─ build-tokens-json.ts     # Gera tokens.json
│   │
│   ├─ themes/                      # 🎨 Temas Compostos
│   │   ├─ light.ts
│   │   ├─ dark.ts
│   │   └─ index.ts
│   │
│   ├─ .storybook/                  # ⚙️ Storybook da Lib (TOKENS)
│   │   ├─ main.ts                  # Configuração principal
│   │   └─ preview.tsx              # Preview e tema (suporta JSX)
│   │
│   ├─ stories/                     # 📚 Stories do Storybook (APENAS TOKENS)
│   │   ├─ ColorPalette.stories.tsx # Paleta de cores completa
│   │   ├─ ThemePreview.stories.tsx # Preview dos temas
│   │   ├─ Typography.stories.tsx   # Tipografia
│   │   ├─ Spacing.stories.tsx      # Espaçamento
│   │   ├─ Radius.stories.tsx       # Raios de borda
│   │   └─ Shadows.stories.tsx      # Sombras
│   │
│   ├─ dist/                        # 📦 Saída Compilada
│   │   ├─ index.js
│   │   ├─ index.mjs
│   │   └─ index.d.ts
│   │
│   ├─ docs/                        # 📚 Documentação
│   │   ├─ STRUCTURE.md
│   │   ├─ BUILD_SYSTEM.md
│   │   ├─ STORYBOOK.md
│   │   ├─ STORYBOOK_STRUCTURE.md
│   │   └─ ...
│   │
│   ├─ index.ts                     # Ponto de entrada
│   ├─ package.json
│   ├─ tsup.config.ts
│   └─ README.md
│
└─ rainer-portfolio-frontend/       # 🌐 Frontend Application
    ├─ src/
    │   └─ components/
    │       └─ ui/                   # Componentes UI
    │
    ├─ .storybook/                  # ⚙️ Storybook do Frontend (COMPONENTES)
    │   ├─ main.ts                  # Configuração principal
    │   └─ preview.tsx              # Preview e tema (suporta JSX)
    │
    └─ stories/                      # 📚 Stories de Componentes UI
        ├─ Button.stories.tsx        # Botões
        ├─ Card.stories.tsx          # Cards
        ├─ Input.stories.tsx         # Inputs
        └─ ...                       # Outros componentes
```

## 🎯 Separação de Responsabilidades

### Storybook da Lib (@rainer-design-tokens)

**Foco**: Apenas design tokens

**Stories**:
- ✅ ColorPalette - Paletas de cores
- ✅ ThemePreview - Preview dos temas
- ✅ Typography - Tipografia
- ✅ Spacing - Espaçamento
- ✅ Radius - Raios de borda
- ✅ Shadows - Sombras

**NÃO inclui**:
- ❌ Componentes UI (Button, Card, etc.)
- ❌ Lógica de negócio
- ❌ Interações complexas

### Storybook do Frontend (rainer-portfolio-frontend)

**Foco**: Componentes UI que usam os tokens

**Stories**:
- ✅ Button - Botões usando tokens
- ✅ Card - Cards usando tokens
- ✅ Input - Inputs usando tokens
- ✅ Modal - Modais usando tokens
- ✅ ... Outros componentes

**Usa**:
- ✅ Tokens da lib `rainer-design-tokens`
- ✅ CSS variables da lib
- ✅ Tailwind config da lib

## 🔄 Fluxo de Trabalho

### 1. Editar Tokens (Lib)

```bash
cd @rainer-design-tokens
# Editar tokens/*.json
pnpm run build:formats
pnpm run build
pnpm run storybook  # Ver tokens
```

### 2. Usar Tokens (Frontend)

```bash
cd rainer-portfolio-frontend
# Importar tokens
import { tokens } from 'rainer-design-tokens';
# Criar componentes usando tokens
pnpm run storybook  # Ver componentes
```

## 📚 Documentação

- [STRUCTURE.md](./STRUCTURE.md) - Estrutura detalhada
- [BUILD_SYSTEM.md](./BUILD_SYSTEM.md) - Sistema de build
- [STORYBOOK.md](./STORYBOOK.md) - Storybook de tokens
- [STORYBOOK_STRUCTURE.md](./STORYBOOK_STRUCTURE.md) - Separação de responsabilidades

