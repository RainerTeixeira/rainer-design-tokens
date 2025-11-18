# rainer-design-tokens

<div align="center">

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![Size](https://img.shields.io/badge/size-<5KB-success)

**Enterprise-grade design tokens for modern design systems**

[Getting Started](#-installation) • [Documentation](#-documentation) • [Storybook](#-storybook---visualização-dos-tokens) • [Roadmap](./docs/roadmap.md)

</div>

---

## 📖 Overview

`rainer-design-tokens` é uma biblioteca profissional de design tokens que define a linguagem visual do Rainer Design System. Agnóstica de tecnologia, escalável e pronta para produção.

### ✨ Features

- 🎨 **Temas Light & Dark** - Paletas profissionais para qualquer contexto
- 🚀 **Zero Dependencies** - Pura performance, sem bloat
- 📦 **Múltiplos Formatos** - Tailwind, CSS Vars, JSON universal
- 🎯 **Type-Safe** - 100% TypeScript com tipos completos
- 🌐 **Platform Agnostic** - Use em web, mobile, desktop, jogos
- ♿ **Acessível** - WCAG AA compliant por padrão
- 📏 **8pt Grid** - Sistema de espaçamento consistente
- 🎭 **Cyberpunk Theme** - Dark mode com efeitos neon
- 📚 **Storybook** - Documentação visual interativa de todos os tokens

---

## 🚀 Installation

```bash
pnpm add rainer-design-tokens
```

```bash
npm install rainer-design-tokens
```

```bash
yarn add rainer-design-tokens
```

---

## 🎯 Quick Start

### TypeScript/JavaScript

```typescript
import { tokens, lightTheme, darkTheme } from 'rainer-design-tokens';

// Use tokens diretamente
const primaryColor = tokens.colors.light.primary.base; // #0891b2
const spacing = tokens.spacing['4']; // 1rem
const fontSize = tokens.typography.headings.h1.fontSize; // 2.25rem

// Ou use temas
const theme = lightTheme;
console.log(theme.colors.background.primary); // #ffffff
```

### Tailwind CSS

```typescript
// tailwind.config.ts
import { tailwindConfig } from 'rainer-design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

```tsx
// Use as classes
<div className="bg-brand text-text-primary p-4 rounded-lg shadow-md">
  Hello World
</div>
```

### CSS Variables

```css
/* Import CSS vars */
@import 'rainer-design-tokens/formats/css-vars.css';

/* Use variables */
.button {
  background: var(--color-brand-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### 📚 Storybook - Visualização dos Tokens

O Storybook da lib é focado **apenas em design tokens**, não em componentes UI.

```bash
pnpm run storybook
```

Acesse `http://localhost:6006` para explorar:
- 🎨 **ColorPalette** - Paletas completas (Light & Dark themes)
- 🎭 **ThemePreview** - Preview dos temas mostrando tokens trabalhando juntos
- 📝 **Typography** - Sistema de tipografia completo
- 📏 **Spacing** - Escala de espaçamento (8pt grid)
- 🔲 **Radius** - Raios de borda
- 🌑 **Shadows** - Sombras e efeitos glow

> **Nota**: Componentes UI (Button, Card, etc.) devem estar no Storybook do frontend, não aqui. Veja [Estrutura do Storybook](./docs/ESTRUTURA_STORYBOOK.md) para mais detalhes.

---

## 📁 Structure

```
@rainer-design-tokens/
│
├── 📄 index.ts                    # Ponto de entrada principal da biblioteca
├── 📄 package.json                # Configuração do pacote npm
├── 📄 pnpm-lock.yaml              # Lock file do pnpm
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 tsup.config.ts              # Configuração do bundler tsup
├── 📄 LICENSE                     # Licença MIT
├── 📄 README.md                   # Este arquivo
│
├── 🔧 Configurações
│   ├── .npmrc                     # Configuração pnpm (isolamento workspace)
│   ├── .gitignore                 # Arquivos ignorados pelo Git
│   ├── .npmignore                 # Arquivos ignorados na publicação npm
│   ├── .prettierrc.json           # Configuração Prettier
│   ├── .eslintrc.json             # Configuração ESLint
│   ├── .cspell.json               # Configuração CSpell (verificação ortográfica)
│   └── .env                       # Variáveis de ambiente (local, não commitado)
│
├── 🎯 tokens/                     # FONTE ÚNICA DE VERDADE (JSON + TypeScript)
│   ├── index.ts                   # Exportações principais dos tokens
│   ├── accessibility.ts           # Utilitários de acessibilidade (WCAG)
│   ├── utilities.ts               # Utilitários e helpers
│   ├── colors/
│   │   ├── light.json             # Paleta do tema claro
│   │   └── dark.json              # Paleta do tema escuro (cyberpunk)
│   ├── typography.json            # Sistema de tipografia completo
│   ├── spacing.json               # Escala de espaçamento (8pt grid)
│   ├── radius.json                # Escala de raio de borda
│   └── shadows.json               # Sombras e efeitos glow
│
├── 🎨 themes/                     # Temas compostos
│   ├── index.ts                   # Exportações dos temas
│   ├── light.ts                   # Tema claro profissional
│   └── dark.ts                    # Tema escuro cyberpunk
│
├── 📤 formats/                    # FORMATOS GERADOS AUTOMATICAMENTE
│   ├── tailwind.config.ts         # Configuração Tailwind (gerado)
│   ├── css-vars.css               # CSS custom properties (gerado)
│   └── tokens.json                # Export JSON universal (gerado)
│
├── 🔧 scripts/                    # Scripts de build e utilitários
│   ├── build-formats.ts           # Orquestrador principal de build
│   ├── build-css.ts               # Gera CSS variables
│   ├── build-tailwind.ts          # Gera Tailwind config
│   ├── build-tokens-json.ts       # Gera tokens.json
│   ├── prepare-publish.js         # Prepara publicação npm
│   ├── setup-github.sh            # Setup GitHub Actions
│   ├── fix-storybook.ps1          # Script PowerShell para Storybook
│   └── update-dates.ts            # Atualiza datas na documentação
│
├── 📚 stories/                    # Stories do Storybook (apenas tokens)
│   ├── assets/                    # Assets das stories
│   ├── Accessibility.stories.tsx  # Documentação de acessibilidade
│   ├── ColorPalette.stories.tsx   # Paleta completa de cores
│   ├── ColorStates.stories.tsx    # Estados de cores
│   ├── ThemePreview.stories.tsx   # Preview dos temas
│   ├── Typography.stories.tsx     # Sistema de tipografia
│   ├── TypographyHierarchy.stories.tsx # Hierarquia tipográfica
│   ├── Spacing.stories.tsx        # Escala de espaçamento
│   ├── Radius.stories.tsx         # Raios de borda
│   ├── Shadows.stories.tsx        # Sombras e efeitos
│   └── *.mdx                      # Documentação MDX das stories
│
├── ⚙️ .storybook/                 # Configuração do Storybook
│   ├── main.ts                    # Configuração principal
│   └── preview.tsx                # Preview e temas do Storybook
│
├── 📦 dist/                       # Saída compilada (TypeScript)
│   ├── index.js                   # CommonJS bundle
│   ├── index.mjs                  # ESM bundle
│   ├── index.d.ts                 # TypeScript definitions
│   ├── index.d.mts                # ESM TypeScript definitions
│   └── *.map                      # Source maps
│
└── 📖 docs/                       # Documentação completa
    ├── INDICE.md                  # Índice geral da documentação
    ├── ESTRUTURA.md               # Estrutura detalhada da biblioteca
    ├── ESTRUTURA_STORYBOOK.md     # Estrutura do Storybook
    ├── SISTEMA_BUILD.md           # Sistema de build automatizado
    ├── guidelines.md              # Guidelines de uso
    ├── GUIA_TOKENS_EXPANDIDOS.md  # Guia dos tokens expandidos
    ├── GUIA_MIGRACAO.md           # Guia de migração
    ├── PUBLICACAO.md              # Guia de publicação
    ├── CONFIGURACAO_PNPM.md       # Configuração pnpm
    ├── CONTRIBUINDO.md            # Guia de contribuição
    ├── STORYBOOK.md               # Documentação do Storybook
    ├── RESUMO_ESTRUTURA.md        # Resumo da estrutura
    ├── HISTORICO_MUDANCAS.md      # Histórico de mudanças
    └── roadmap.md                 # Roadmap do projeto
```

### 🎯 Princípio: JSON como Fonte Única de Verdade

- ✅ **Edite apenas**: `tokens/*.json` (arquivos JSON na pasta `tokens/`)
- ✅ **Edite também**: `tokens/*.ts` (utilitários e helpers em TypeScript)
- ✅ **Formats são gerados**: Execute `pnpm run build:formats`
- ❌ **NÃO edite manualmente**: `formats/*` (serão sobrescritos pelo build)
- ⚙️ **Configurações**: Arquivos `.npmrc`, `.eslintrc.json`, `.prettierrc.json`, etc. na raiz

---

## 🎨 Color System

### Light Theme
```typescript
{
  primary: { base: '#0891b2', hover: '#06b6d4', active: '#0891b2' },
  secondary: { base: '#9333ea', hover: '#a855f7', active: '#9333ea' },
  accent: { base: '#db2777', hover: '#e11d48', active: '#db2777' },
  status: { success: '#22c55e', error: '#ef4444', warning: '#f59e0b', info: '#3b82f6' }
}
```

### Dark Theme (Cyberpunk)
```typescript
{
  primary: { base: '#00e6ff', hover: '#33eeff', active: '#00e6ff' },
  secondary: { base: '#7d00ff', hover: '#9333ea', active: '#7d00ff' },
  accent: { base: '#ff006e', hover: '#ff3385', active: '#ff006e' },
  effects: { glowCyan: '0 0 20px rgba(0, 230, 255, 0.5)' }
}
```

---

## 📏 Typography

Sistema hierárquico completo com headings, subtítulos, body, captions, buttons e labels:

```typescript
{
  headings: {
    h1: { fontSize: '2.25rem', fontWeight: '700', lineHeight: '1.2' },
    h2: { fontSize: '1.875rem', fontWeight: '600', lineHeight: '1.3' },
    // ... h3, h4, h5, h6
  },
  body: {
    large: { fontSize: '1.125rem', lineHeight: '1.75' },
    medium: { fontSize: '1rem', lineHeight: '1.5' },
    small: { fontSize: '0.875rem', lineHeight: '1.5' }
  },
  // ... subtitle, caption, button, label, code
}
```

---

## 🌓 Theme Switching

```tsx
// React example
function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

---

## 📚 Documentation

📖 **[Documentação Completa](./docs/INDICE.md)** - Índice geral de toda a documentação

### Guias Principais

- [**Guidelines**](./docs/guidelines.md) - Como usar os tokens
- [**ESTRUTURA.md**](./docs/ESTRUTURA.md) - Estrutura detalhada da biblioteca
- [**SISTEMA_BUILD.md**](./docs/SISTEMA_BUILD.md) - Sistema de build automatizado
- [**Roadmap**](./docs/roadmap.md) - Futuras features e versões
- [**GUIA_TOKENS_EXPANDIDOS**](./docs/GUIA_TOKENS_EXPANDIDOS.md) - Guia dos tokens expandidos (cores e tipografia)
- [**GUIA_MIGRACAO**](./docs/GUIA_MIGRACAO.md) - Guia de migração para v3.0.0
- [**PUBLICACAO**](./docs/PUBLICACAO.md) - Guia de publicação no GitHub/npm

### Storybook

- [**STORYBOOK.md**](./docs/STORYBOOK.md) - Documentação visual dos tokens
- [**ESTRUTURA_STORYBOOK.md**](./docs/ESTRUTURA_STORYBOOK.md) - Separação entre tokens e componentes

### Referência Rápida

- [**RESUMO_ESTRUTURA.md**](./docs/RESUMO_ESTRUTURA.md) - Resumo da estrutura
- [**HISTORICO_MUDANCAS.md**](./docs/HISTORICO_MUDANCAS.md) - Histórico de mudanças

---

## 🎯 Use Cases

### ✅ Perfect For

- 🌐 Websites e aplicações web
- 📱 Aplicativos mobile (React Native, Flutter)
- 🖥️ Aplicações desktop (Electron, Tauri)
- 🎮 Interfaces de jogos (Unity, Unreal, Godot)
- 🎨 Design systems corporativos
- 🚀 MVPs e protótipos rápidos

### ❌ Not Included

Esta biblioteca contém **apenas tokens**, não componentes UI.

Para componentes, use:
- [shadcn/ui](https://ui.shadcn.com/) com estes tokens
- [Radix UI](https://www.radix-ui.com/) + custom styling
- Sua própria biblioteca de componentes

---

## 🔧 Integration Examples

### Next.js + Tailwind

```typescript
// tailwind.config.ts
import { tailwindConfig } from 'rainer-design-tokens/formats/tailwind.config';

export default tailwindConfig;
```

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.Node }) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

### Vite + CSS

```typescript
// main.ts
import 'rainer-design-tokens/formats/css-vars.css';
```

### shadcn/ui

```typescript
// Use tokens as base for shadcn/ui theming
import { tokens } from 'rainer-design-tokens';

export const shadcnTheme = {
  primary: tokens.colors.light.primary.base,
  secondary: tokens.colors.light.secondary.base,
  accent: tokens.colors.light.accent.base,
  // ... map other tokens
};
```

---

## 📦 Exports

```typescript
// Main tokens
import { tokens } from 'rainer-design-tokens';

// Individual token categories
import { 
  lightThemeColors,
  darkThemeColors,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens 
} from 'rainer-design-tokens/tokens';

// Themes
import { lightTheme, darkTheme } from 'rainer-design-tokens/themes';

// Formats
import { tailwindConfig } from 'rainer-design-tokens/formats/tailwind.config';
```

---

## 🧪 Development

```bash
# Install dependencies
pnpm install

# Build tokens (gera formats + compila TypeScript)
pnpm run build

# Gerar apenas formatos (CSS, Tailwind, JSON)
pnpm run build:formats

# Gerar formatos individuais
pnpm run build:css          # Gera formats/css-vars.css
pnpm run build:tailwind     # Gera formats/tailwind.config.ts
pnpm run build:tokens-json  # Gera formats/tokens.json

# Storybook (visualização dos tokens)
pnpm run storybook          # Inicia Storybook em http://localhost:6006
pnpm run build-storybook    # Gera build estático do Storybook

# Run tests
pnpm test

# Type check
pnpm run type-check

# Lint
pnpm run lint

# Clean
pnpm run clean              # Remove dist/
pnpm run clean:all          # Remove node_modules, lock, dist, etc.
```

### 🔄 Workflow de Desenvolvimento

1. **Edite os tokens** em `tokens/*.json` (fonte única de verdade)
2. **Edite utilitários** em `tokens/*.ts` se necessário (accessibility, utilities)
3. **Execute o build**: `pnpm run build:formats` (gera formatos)
4. **Os formatos são gerados automaticamente** em `formats/`
5. **Compile o TypeScript**: `pnpm run build` (já inclui build:formats + tsup)
6. **Visualize no Storybook**: `pnpm run storybook` para ver todos os tokens de forma interativa
7. **Execute testes**: `pnpm test` antes de commitar
8. **⚠️ IMPORTANTE**: Sempre commit `dist/` após build (veja [PUBLICACAO.md](./docs/PUBLICACAO.md#-por-que-dist-está-commitado))

### 📚 Storybook - Visualização dos Tokens

O Storybook da lib documenta **apenas design tokens**, não componentes UI.

**Stories disponíveis:**
- 🎨 **ColorPalette** - Paletas completas de cores (Light & Dark)
- 🎭 **ThemePreview** - Preview dos temas mostrando tokens em ação
- 📝 **Typography** - Sistema completo de tipografia
- 📏 **Spacing** - Escala de espaçamento (8pt grid)
- 🔲 **Radius** - Raios de borda
- 🌑 **Shadows** - Sombras e efeitos glow

**Separação de responsabilidades:**
- ✅ **Este Storybook**: Apenas tokens (cores, tipografia, espaçamento, etc.)
- ✅ **Storybook do Frontend**: Componentes UI (Button, Card, Input, etc.)

Para mais detalhes sobre a estrutura, consulte [**Estrutura do Storybook**](./docs/ESTRUTURA_STORYBOOK.md).

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/CONTRIBUINDO.md) first.

---

## 📄 License

MIT © [Rainer Teixeira](https://github.com/RainerTeixeira)

---

## 🔗 Links

- **GitHub**: [RainerTeixeira/rainer-design-tokens](https://github.com/RainerTeixeira/rainer-design-tokens)
- **NPM**: [rainer-design-tokens](https://www.npmjs.com/package/rainer-design-tokens)
- **Website**: [rainersoft.com.br](https://rainersoft.com.br)
- **Email**: suporte@rainersoft.com.br

## 🛠️ Tech Stack

- **Language**: TypeScript 5.3+ (strict mode)
- **Package Manager**: pnpm 9+
- **Build Tool**: tsup (TypeScript bundler)
- **Linter**: ESLint + TypeScript ESLint
- **Formatter**: Prettier
- **Testing**: Jest
- **Documentation**: Storybook 10
- **Publish**: GitHub Actions (GitHub Packages + npm)

---

<div align="center">

**Made with ❤️ by Rainer Teixeira**

![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue)
![Enterprise Ready](https://img.shields.io/badge/Enterprise-Ready-success)

</div>
