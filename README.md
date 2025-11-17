# @rainer/design-tokens

<div align="center">

![Version](https://img.shields.io/badge/version-4.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)
![Size](https://img.shields.io/badge/size-<5KB-success)

**Enterprise-grade design tokens for modern design systems**

[Getting Started](#-installation) • [Documentation](#-documentation) • [Storybook](#-storybook---visualização-dos-tokens) • [Roadmap](./docs/roadmap.md)

</div>

---

## 📖 Overview

@rainer/design-tokens é uma biblioteca profissional de design tokens que define a linguagem visual do Rainer Design System. Agnóstica de tecnologia, escalável e pronta para produção.

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
npm install @rainer/design-tokens
```

```bash
pnpm add @rainer/design-tokens
```

```bash
yarn add @rainer/design-tokens
```

---

## 🎯 Quick Start

### TypeScript/JavaScript

```typescript
import { tokens, lightTheme, darkTheme } from '@rainer/design-tokens';

// Use tokens diretamente
const primaryColor = tokens.colors.light.brand.primary; // #0891b2
const spacing = tokens.spacing['4']; // 1rem
const fontSize = tokens.typography.fontSize.base; // 1rem

// Ou use temas
const theme = lightTheme;
console.log(theme.colors.background.primary); // #ffffff
```

### Tailwind CSS

```typescript
// tailwind.config.ts
import { tailwindConfig } from '@rainer/design-tokens/formats/tailwind.config';

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
@import '@rainer/design-tokens/formats/css-vars.css';

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
npm run storybook
```

Acesse `http://localhost:6006` para explorar:
- 🎨 **ColorPalette** - Paletas completas (Light & Dark themes)
- 🎭 **ThemePreview** - Preview dos temas mostrando tokens trabalhando juntos
- 📝 **Typography** - Sistema de tipografia completo
- 📏 **Spacing** - Escala de espaçamento (8pt grid)
- 🔲 **Radius** - Raios de borda
- 🌑 **Shadows** - Sombras e efeitos glow

> **Nota**: Componentes UI (Button, Card, etc.) devem estar no Storybook do frontend, não aqui. Veja [Estrutura do Storybook](./docs/STORYBOOK_STRUCTURE.md) para mais detalhes.

---

## 📁 Structure

```
@rainer-design-tokens/
│
├── tokens/               # 🎯 FONTE ÚNICA DE VERDADE (JSON)
│   ├── colors/
│   │   ├── light.json   # Light theme palette
│   │   └── dark.json    # Dark theme palette
│   ├── typography.json  # Font families, sizes, weights
│   ├── spacing.json     # Spacing scale (8pt grid)
│   ├── radius.json      # Border radius scale
│   └── shadows.json      # Shadow & elevation
│
├── themes/              # Composed themes
│   ├── light.ts         # Professional light theme
│   └── dark.ts          # Cyberpunk dark theme
│
├── formats/             # 📤 FORMATOS GERADOS AUTOMATICAMENTE
│   ├── tailwind.config.ts  # Tailwind integration (gerado)
│   ├── css-vars.css        # CSS custom properties (gerado)
│   └── tokens.json         # Universal export (gerado)
│
├── scripts/             # 🔧 Scripts de build
│   ├── build-formats.ts    # Orquestrador principal
│   ├── build-css.ts        # Gera CSS variables
│   ├── build-tailwind.ts   # Gera Tailwind config
│   └── build-tokens-json.ts # Gera tokens.json
│
├── stories/            # 📚 Stories do Storybook (apenas tokens)
│   ├── ColorPalette.stories.tsx  # Paleta de cores completa
│   ├── ThemePreview.stories.tsx  # Preview dos temas
│   ├── Typography.stories.tsx    # Tipografia
│   ├── Spacing.stories.tsx       # Espaçamento
│   ├── Radius.stories.tsx        # Raios de borda
│   └── Shadows.stories.tsx       # Sombras
│
├── .storybook/         # ⚙️ Configuração do Storybook
│   ├── main.ts         # Configuração principal
│   └── preview.tsx     # Preview e tema
│
└── dist/                # 📦 Saída compilada (TypeScript)
    ├── index.js
    ├── index.mjs
    └── index.d.ts
```

### 🎯 Princípio: JSON como Fonte Única de Verdade

- ✅ **Edite apenas**: `tokens/*.json`
- ✅ **Formats são gerados**: Execute `npm run build:formats`
- ❌ **NÃO edite manualmente**: `formats/*` (serão sobrescritos)

---

## 🎨 Color System

### Light Theme
```typescript
{
  background: { primary: '#ffffff', secondary: '#fafafa' },
  text: { primary: '#171717', secondary: '#404040' },
  brand: { primary: '#0891b2', secondary: '#9333ea' },
  status: { success: '#22c55e', error: '#ef4444' }
}
```

### Dark Theme (Cyberpunk)
```typescript
{
  background: { primary: '#0a0a0f', secondary: '#0f0f1a' },
  text: { primary: '#b3ffff', neonCyan: '#00e6ff' },
  brand: { primary: '#00e6ff', secondary: '#7d00ff' },
  effects: { glowCyan: '0 0 20px rgba(0, 230, 255, 0.5)' }
}
```

---

## 📏 Typography

```typescript
{
  fontFamily: {
    sans: 'ui-sans-serif, system-ui, ...',
    display: 'var(--font-orbitron, ui-sans-serif)',
    body: 'var(--font-inter, ui-sans-serif)'
  },
  fontSize: {
    xs: '0.75rem',
    base: '1rem',
    xl: '1.25rem',
    4xl: '2.25rem',
    9xl: '8rem'
  }
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

📖 **[Documentação Completa](./docs/README.md)** - Índice geral de toda a documentação

### Guias Principais

- [**Guidelines**](./docs/guidelines.md) - Como usar os tokens
- [**Structure**](./docs/STRUCTURE.md) - Estrutura detalhada da biblioteca
- [**Build System**](./docs/BUILD_SYSTEM.md) - Sistema de build automatizado
- [**Roadmap**](./docs/roadmap.md) - Futuras features e versões

### Storybook

- [**STORYBOOK.md**](./docs/STORYBOOK.md) - Documentação visual dos tokens
- [**STORYBOOK_STRUCTURE.md**](./docs/STORYBOOK_STRUCTURE.md) - Separação entre tokens e componentes

### Referência Rápida

- [**STRUCTURE_SUMMARY.md**](./docs/STRUCTURE_SUMMARY.md) - Resumo da estrutura

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
import { tailwindConfig } from '@rainer/design-tokens/formats/tailwind.config';

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
import '@rainer/design-tokens/formats/css-vars.css';
```

### shadcn/ui

```typescript
// Use tokens as base for shadcn/ui theming
import { tokens } from '@rainer/design-tokens';

export const shadcnTheme = {
  primary: tokens.colors.light.brand.primary,
  secondary: tokens.colors.light.brand.secondary,
  // ... map other tokens
};
```

---

## 📦 Exports

```typescript
// Main tokens
import { tokens } from '@rainer/design-tokens';

// Individual token categories
import { 
  lightThemeColors,
  darkThemeColors,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens 
} from '@rainer/design-tokens/tokens';

// Themes
import { lightTheme, darkTheme } from '@rainer/design-tokens/themes';

// Formats
import { tailwindConfig } from '@rainer/design-tokens/formats/tailwind.config';
```

---

## 🧪 Development

```bash
# Install dependencies
npm install

# Build tokens (gera formats + compila TypeScript)
npm run build

# Gerar apenas formatos (CSS, Tailwind, JSON)
npm run build:formats

# Gerar formatos individuais
npm run build:css          # Gera formats/css-vars.css
npm run build:tailwind     # Gera formats/tailwind.config.ts
npm run build:tokens-json  # Gera formats/tokens.json

# Storybook (visualização dos tokens)
npm run storybook          # Inicia Storybook em http://localhost:6006
npm run build-storybook    # Gera build estático do Storybook

# Run tests
npm test

# Type check
npm run type-check
```

### 🔄 Workflow de Desenvolvimento

1. **Edite os tokens** em `tokens/*.json` (fonte única de verdade)
2. **Execute o build**: `npm run build:formats`
3. **Os formatos são gerados automaticamente** em `formats/`
4. **Compile o TypeScript**: `npm run build` (já inclui build:formats)
5. **Visualize no Storybook**: `npm run storybook` para ver todos os tokens de forma interativa

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

Para mais detalhes sobre a estrutura, consulte [**Estrutura do Storybook**](./docs/STORYBOOK_STRUCTURE.md).

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) first.

---

## 📄 License

MIT © [Rainer Teixeira](https://github.com/rainer-teixeira)

---

## 🔗 Links

- **GitHub**: [rainer-teixeira/design-tokens](https://github.com/rainer-teixeira/design-tokens)
- **NPM**: [@rainer/design-tokens](https://www.npmjs.com/package/@rainer/design-tokens)
- **Website**: [rainersoft.com.br](https://rainersoft.com.br)
- **Email**: suporte@rainersoft.com.br

---

<div align="center">

**Made with ❤️ by Rainer Teixeira**

![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-blue)
![Enterprise Ready](https://img.shields.io/badge/Enterprise-Ready-success)

</div>
