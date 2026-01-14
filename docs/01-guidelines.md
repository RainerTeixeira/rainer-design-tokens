# 01-GUIDELINES.md - Guidelines de Uso

## Visão Geral

@rainersoft/design-tokens é uma biblioteca enterprise de tokens de design que define a linguagem visual do RainerSoft Design System. Os tokens são agnósticos de tecnologia e podem ser usados em qualquer projeto (web, mobile, desktop, jogos).

## Objetivos

- **Consistência**: Uma única fonte de verdade para cores, tipografia, espaçamento
- **Escalabilidade**: Fácil de manter e expandir
- **Flexibilidade**: Suporta múltiplos temas (light/dark) e plataformas
- **Interoperabilidade**: Funciona com Tailwind, CSS, React, etc.

## Estrutura Atual

```
@rainersoft/design-tokens/
├── tokens/                    # FONTE ÚNICA DE VERDADE (JSON)
│   ├── primitives/           # Tokens primitivos
│   │   ├── color-palette.json
│   │   ├── typography-base.json
│   │   ├── spacing-scale.json
│   │   ├── radius-scale.json
│   │   ├── elevation-tokens.json
│   │   ├── motion-tokens.json
│   │   ├── breakpoints.json
│   │   └── z-index-layers.json
│   ├── semantics/            # Tokens semânticos
│   │   ├── color-roles.json
│   │   ├── border-roles.json
│   │   └── elevation-roles.json
│   ├── themes/               # Temas
│   │   ├── theme-light.json
│   │   └── theme-dark.json
│   └── index.json           # Export principal
├── themes/                   # Temas compostos (TypeScript)
│   ├── light.ts
│   └── dark.ts
├── formats/                  # FORMATOS GERADOS (NÃO EDITAR)
│   ├── tailwind.config.ts
│   ├── css-vars.css
│   └── tokens.json
├── scripts/                  # Scripts de build
│   ├── compile-formats.ts    # Script principal
│   ├── generate-all.ts       # Orquestrador
│   └── generate-*.ts         # Scripts específicos
├── .storybook/               # Storybook da lib (tokens)
└── stories/                  # Stories de tokens
```

> **Importante**: Edite apenas `tokens/*.json`. Os formatos são gerados automaticamente. Veja [03-ESTRUTURA.md](./03-ESTRUTURA.md) para mais detalhes.

## Instalação

```bash
# npm
npm install @rainersoft/design-tokens

# yarn
yarn add @rainersoft/design-tokens

# pnpm
pnpm add @rainersoft/design-tokens
```

## Uso dos Tokens

### 1. Importação Direta (TypeScript)

```typescript
import { tokens } from '@rainersoft/design-tokens';

// Acessar cores primitivas
const primaryColor = tokens.primitives.colors.brand.primary; // #0891b2

// Acessar cores semânticas
const backgroundColor = tokens.semantics.colors.background.primary; // #ffffff

// Acessar tipografia
const baseFontSize = tokens.primitives.typography.fontSize.base; // 1rem

// Acessar espaçamento
const spacing4 = tokens.primitives.spacing['4']; // 1rem
```

### 2. Usar Temas

```typescript
import { lightTheme, darkTheme } from '@rainersoft/design-tokens';

// Aplicar tema light
const theme = lightTheme;
console.log(theme.colors.background.primary); // #ffffff

// Aplicar tema dark
const darkMode = darkTheme;
console.log(darkMode.colors.background.primary); // #0a0a0f
```

### 3. Integração com Tailwind

No seu `tailwind.config.ts`:

```typescript
import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};
```

Agora use as classes:

```tsx
<div className="bg-brand text-text-primary p-4 rounded-lg shadow-md">
  Hello World
</div>
```

### 4. CSS Variables

Importe no seu CSS global:

```css
@import '@rainersoft/design-tokens/formats/css-vars.css';
```

Use as variáveis:

```css
.button {
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.button:hover {
  background: var(--color-brand-primary-hover);
}
```

## 🎨 Paletas de Cores

### Light Theme
- **Background**: Tons de branco (#ffffff, #fafafa, #f5f5f5)
- **Text**: Tons de cinza escuro (#171717, #404040, #737373)
- **Brand**: Cyan (#0891b2), Purple (#9333ea), Pink (#db2777)
- **Status**: Success (green), Warning (orange), Error (red), Info (blue)

### Dark Theme (Cyberpunk)
- **Background**: Tons de preto (#0a0a0f, #0f0f1a, #171717)
- **Text**: Tons de neon cyan (#b3ffff, #4dffff, #00e6ff)
- **Brand**: Neon Cyan (#00e6ff), Neon Purple (#7d00ff), Neon Pink (#ff00ff)
- **Effects**: Glow shadows, gradientes neon, glassmorphism

## 📏 Sistema de Espaçamento

Baseado em grid de 8pt para consistência:

```
0   → 0px
px  → 1px
0.5 → 0.125rem (2px)
1   → 0.25rem  (4px)
2   → 0.5rem   (8px)
4   → 1rem     (16px)
8   → 2rem     (32px)
12  → 3rem     (48px)
16  → 4rem     (64px)
```

## 🔤 Tipografia

### Font Families
- **Sans**: System fonts (Inter)
- **Serif**: Georgia, Times
- **Mono**: SFMono, Menlo, Monaco
- **Display**: Orbitron (títulos cyberpunk)
- **Body**: Inter (corpo de texto)

### Font Sizes
Escala modular de `xs` (0.75rem) até `9xl` (8rem)

### Font Weights
De `thin` (100) até `black` (900)

## 🎯 Border Radius

```
sm   → 0.125rem
base → 0.25rem
md   → 0.375rem
lg   → 0.5rem
xl   → 0.75rem
2xl  → 1rem
full → 9999px
```

## 💫 Shadows

### Light Theme
Sombras sutis com `rgba(0, 0, 0, 0.05-0.25)`

### Dark Theme
Sombras mais fortes + efeitos glow:
- `glow-cyan`: Brilho azul neon
- `glow-pink`: Brilho rosa neon
- `glow-purple`: Brilho roxo neon
- `glow-green`: Brilho verde neon

## 🌓 Suporte a Temas

### Trocar Tema (React)

```tsx
import { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={toggleTheme}>
      Toggle {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

### CSS Auto-Switching

```css
/* Light mode */
:root {
  --bg: var(--color-background-primary);
  --text: var(--color-text-primary);
}

/* Dark mode */
.dark {
  --bg: var(--color-background-primary);
  --text: var(--color-text-primary);
}
```

## 🚀 Melhores Práticas

### ✅ DO

- Use tokens semânticos (ex: `brand.primary`) ao invés de cores específicas
- Mantenha consistência usando o sistema de espaçamento
- Aplique temas via classes CSS (`.dark`)
- Use variáveis CSS para runtime theming
- Documente novos tokens adicionados

### ❌ DON'T

- Não hardcode cores ou valores no código
- Não crie valores fora do sistema de design
- Não misture unidades (use sempre rem para espaçamento)
- Não aplique estilos inline sem usar tokens
- Não modifique tokens existentes sem revisar impacto

## 📦 Exportações Disponíveis

```typescript
// Tokens brutos
import { tokens } from '@rainersoft/design-tokens';

// Temas
import { lightTheme, darkTheme } from '@rainersoft/design-tokens/themes';

// Formatos
import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';

// Tokens específicos
import { lightThemeColors, darkThemeColors } from '@rainersoft/design-tokens/tokens';
```

## 🔧 Extensibilidade

Para adicionar novos tokens:

1. Adicione ao arquivo JSON apropriado em `tokens/`
2. Atualize os temas em `themes/`
3. Re-gere os formatos em `formats/`
4. Atualize a documentação
5. Adicione testes

## 📚 Referências

- [W3C Design Tokens Spec](https://design-tokens.github.io/community-group/format/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material Design Guidelines](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

**Versão:** 2.6.0  
**Última Atualização:** 13 de Janeiro de 2026
**Autor:** Rainer Teixeira  
**Licença:** MIT

---

**Versão:** 2.6.0
**Última Atualização:** 13 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT

---

**Versão:** 2.6.0
**Última Atualização:** 13 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT