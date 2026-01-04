# 05-STORYBOOK.md - Storybook de Design Tokens

## 🎯 Visão Geral

Este documento explica como usar o Storybook para visualizar, testar e documentar os design tokens da biblioteca `@rainersoft/design-tokens`.

## 🚀 Iniciar o Storybook

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Iniciar Storybook em modo dev
pnpm run storybook
```

O Storybook será aberto em `http://localhost:6006`

### Build para Produção
```bash
# Gerar versão estática
pnpm run build-storybook

# Output em: storybook-static/
```

## 📚 Stories Disponíveis

### 🎨 Design Tokens/Color Palette

Visualização completa de todas as paletas de cores:

#### Light Theme
- **Background**: Brancos e cinzas claros
- **Surface**: Fundos de componentes
- **Text**: Textos primários e secundários
- **Border**: Bordas e divisores
- **Brand**: Cores da marca (cyan, purple, pink)
- **Status**: Success, warning, error, info
- **Interactive**: Estados de hover, focus, active

#### Dark Theme (Cyberpunk)
- Todas as cores do light theme
- **Effects**: Cores neon com glow
- **Gradients**: Gradientes cyberpunk
- **Neon**: Cyan, purple, pink, green

### 🌓 Design Tokens/Theme Preview

Demonstração prática dos temas em uso:

#### Light Theme Preview
- Cards com sombras sutis
- Botões com estados interativos
- Formulários com validação visual
- Tipografia hierárquica

#### Dark Theme Preview
- Efeitos neon e glow
- Glassmorphism
- Gradientes cyberpunk
- Animações suaves

### 📝 Design Tokens/Typography

Sistema tipográfico completo:
- **Font Families**: Sans, Mono, Serif, Display
- **Font Sizes**: De xs (12px) a 9xl (128px)
- **Font Weights**: De thin (100) a black (900)
- **Line Heights**: Proporções adequadas
- **Exemplos**: Títulos, parágrafos, código

### 📏 Design Tokens/Spacing

Visualização da escala de espaçamento:
- **Grid System**: Baseado em 8pt
- **Scale**: 0, px, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
- **Visual**: Blocos coloridos mostrando proporções
- **Uso**: Margens, padding, gaps

### ⭕ Design Tokens/Radius

Sistema de bordas arredondadas:
- **Scale**: sm, base, md, lg, xl, 2xl, full
- **Visual**: Cards com diferentes raios
- **Proporção**: Baseado em espaçamento
- **Aplicação**: Botões, cards, inputs

### 🌑 Design Tokens/Shadows & Elevation

Sistema de sombras e elevação:
- **Light Theme**: Sombras sutis com rgba
- **Dark Theme**: Sombras + efeitos glow
- **Escala**: sm, md, lg, xl, 2xl
- **Visual**: Cards flutuando
- **Efeitos**: Neon, glow, soft

### 🎭 Design Tokens/Motion

Animações e transições:
- **Durações**: fast, normal, slow
- **Curvas**: ease-in, ease-out, ease-in-out
- **Exemplos**: Fade, slide, scale
- **Demonstrações**: Botões, cards, modais

### ♿ Design Tokens/Accessibility

Tokens de acessibilidade:
- **Contraste**: Verificação WCAG
- **Focus Rings**: Visíveis e acessíveis
- **Redução de Movimento**: Prefers-reduced-motion
- **High Contrast**: Modo alto contraste

## 🛠️ Configuração do Storybook

### .storybook/main.ts
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

### .storybook/preview.tsx
```typescript
import type { Preview } from '@storybook/react';
import { lightTheme, darkTheme } from '../themes';

const preview: Preview = {
  parameters: {
    docs: {
      theme: lightTheme,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0a0a0f',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
```

## 📝 Criar Novas Stories

### Estrutura Básica
```typescript
// stories/ExampleToken.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ExampleToken } from '../components/ExampleToken';

const meta: Meta<typeof ExampleToken> = {
  title: 'Design Tokens/ExampleToken',
  component: ExampleToken,
  parameters: {
    docs: {
      description: {
        component: 'Descrição do token e seu uso.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
```

### Best Practices
- ✅ Use descrições detalhadas
- ✅ Mostre variações (light/dark)
- ✅ Adicione exemplos práticos
- ✅ Documente props e uso
- ✅ Teste acessibilidade

## 🎨 Personalização

### Temas no Storybook
```typescript
// Aplicar tema customizado
import { tokens } from '@rainersoft/design-tokens';

const customTheme = {
  ...tokens.primitives,
  custom: {
    primary: tokens.semantics.colors.brand.primary,
  },
};
```

### Addons Recomendados
- **@storybook/addon-a11y**: Testes de acessibilidade
- **@storybook/addon-docs**: Documentação automática
- **@storybook/addon-controls**: Controles interativos
- **@storybook/design-token**: Visualização de tokens

## 🚀 Deploy do Storybook

### Chromatic (Recomendado)
```bash
# Instalar Chromatic CLI
pnpm add -D chromatic

# Publicar
pnpm chromatic --project-token=SEU_TOKEN
```

### GitHub Pages
```yaml
# .github/workflows/storybook.yml
name: Storybook

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

### Vercel/Netlify
1. Conecte repositório
2. Configure build command: `pnpm run build-storybook`
3. Set publish directory: `storybook-static`
4. Deploy automático em cada push

## 📊 Integração com Tokens

### Tokens Dinâmicos
```typescript
import { tokens } from '@rainersoft/design-tokens';

export const TokenStory = () => {
  return (
    <div style={{ padding: tokens.primitives.spacing['4'] }}>
      <h2 style={{ color: tokens.semantics.colors.text.primary }}>
        Usando tokens dinamicamente
      </h2>
    </div>
  );
};
```

### Tokens com CSS Variables
```css
.component {
  padding: var(--spacing-4);
  color: var(--color-text-primary);
  background: var(--color-background-primary);
}
```

## 🔍 Debug e Testes

### Visual Regression Tests
```bash
# Com Chromatic
pnpm chromatic --only-changed

# Com Loki
pnpm loki test
```

### Testes de Acessibilidade
```bash
# Automático no Storybook
# Ver aba "A11y" em cada story
```

### Performance
```bash
# Lighthouse CI
pnpm lighthouse-ci
```

## 🔗 Links Úteis

- [Storybook Documentation](https://storybook.js.org/)
- [Design Tokens Addon](https://github.com/storybookjs/design-token)
- [Chromatic](https://www.chromatic.com/)
- [A11y Addon](https://github.com/storybookjs/addon-a11y)

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Stories atualizadas, novos tokens de motion e accessibility

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT