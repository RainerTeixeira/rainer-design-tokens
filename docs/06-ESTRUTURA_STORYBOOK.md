# 06-ESTRUTURA_STORYBOOK.md - Estrutura do Storybook

## 🎯 Visão Geral

Este documento explica a estrutura e organização do Storybook da biblioteca `@rainersoft/design-tokens`. O Storybook é focado **apenas em design tokens**, documentando e visualizando todos os tokens disponíveis.

## 📁 Estrutura de Diretórios

```
rainer-design-tokens/
├── 📁 .storybook/                 # Configuração do Storybook
│   ├── 📄 main.ts                # Configuração principal
│   ├── 📄 preview.tsx            # Preview global e tema
│   ├── 📄 manager.ts             # Configuração do painel
│   └── 📄 addons.ts              # Addons configurados
│
├── 📁 stories/                    # Stories dos Tokens
│   ├── 📄 ColorPalette.stories.tsx      # Paletas de cores
│   ├── 📄 ThemePreview.stories.tsx      # Preview dos temas
│   ├── 📄 Typography.stories.tsx        # Tipografia
│   ├── 📄 Spacing.stories.tsx           # Espaçamento
│   ├── 📄 Radius.stories.tsx            # Raios de borda
│   ├── 📄 Shadows.stories.tsx           # Sombras
│   ├── 📄 Elevation.stories.tsx         # Elevação
│   ├── 📄 Motion.stories.tsx            # Animações
│   └── 📄 Accessibility.stories.tsx     # Acessibilidade
│
├── 📁 tokens/                     # Fonte dos dados
│   ├── 📁 primitives/            # Tokens base
│   ├── 📁 semantics/             # Tokens semânticos
│   └── 📁 themes/                # Configurações
│
└── 📁 formats/                    # Formatos gerados
    ├── 📄 css-vars.css          # CSS Variables
    ├── 📄 tailwind.config.ts    # Config Tailwind
    └── 📄 tokens.json           # JSON
```

## 🎨 Propósito e Foco

### O QUE DOCUMENTAMOS:
- ✅ **Design Tokens puros** (cores, spacing, tipografia)
- ✅ **Variações de temas** (light/dark)
- ✅ **Estados dos tokens** (hover, focus, active)
- ✅ **Demonstrações práticas** (como usar juntos)
- ✅ **Validação de acessibilidade** (WCAG)

### O QUE NÃO DOCUMENTAMOS:
- ❌ **Componentes UI** (Button, Card, Input)
- ❌ **Lógica de negócio**
- ❌ **Interações complexas**
- ❌ **Integração com frameworks**

## 📚 Stories Detalhadas

### 1. ColorPalette.stories.tsx
**Objetivo**: Mostrar todas as paletas de cores

```typescript
// Estrutura da Story
- Light Theme
  - Background Colors
  - Surface Colors
  - Text Colors
  - Border Colors
  - Brand Colors
  - Status Colors
  - Interactive States
- Dark Theme (Cyberpunk)
  - Todas as cores do light
  - Neon Effects
  - Glow Colors
  - Gradient Colors
```

### 2. ThemePreview.stories.tsx
**Objetivo**: Demonstrar uso prático dos temas

```typescript
// Componentes demonstrados
- Cards com sombras
- Botões com estados
- Formulários estilizados
- Navegação
- Tipografia aplicada
- Layouts completos
```

### 3. Typography.stories.tsx
**Objetivo**: Documentar sistema tipográfico

```typescript
- Font Families
  - Sans (Inter)
  - Mono (JetBrains)
  - Serif (Georgia)
  - Display (Orbitron)
- Font Sizes (xs a 9xl)
- Font Weights (100 a 900)
- Line Heights
- Exemplos de uso
```

### 4. Spacing.stories.tsx
**Objetivo**: Visualizar escala de espaçamento

```typescript
- Grid System (8pt base)
- Escala completa (0 a 24)
- Visualização em blocos
- Exemplos de composição
- Margens e padding
```

### 5. Radius.stories.tsx
**Objetivo**: Sistema de bordas arredondadas

```typescript
- Escala (sm a full)
- Proporções baseadas em spacing
- Aplicação em componentes
- Exemplos visuais
```

### 6. Shadows/Elevation.stories.tsx
**Objetivo**: Sistema de elevação

```typescript
- Light Theme
  - Sombras sutis
  - Profundidade sutil
- Dark Theme
  - Sombras + glow
  - Efeitos neon
- Escala (sm a 2xl)
```

### 7. Motion.stories.tsx
**Objetivo**: Animações e transições

```typescript
- Durações (fast, normal, slow)
- Curvas de easing
- Exemplos práticos
- Prefers-reduced-motion
```

### 8. Accessibility.stories.tsx
**Objetivo**: Validação de acessibilidade

```typescript
- Contraste WCAG AA/AAA
- Focus rings visíveis
- Modo alto contraste
- Redução de movimento
```

## ⚙️ Configuração Técnica

### main.ts
```typescript
export default {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: 'tag',
  },
};
```

### preview.tsx
```typescript
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0f' },
      ],
    },
    docs: {
      toc: true, // Table of contents
    },
  },
  globalTypes: {
    theme: {
      description: 'Tema global',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
      },
    },
  },
};
```

## 🎯 Organização das Stories

### Convenções de Nomenclatura
- **PascalCase** para arquivos: `ColorPalette.stories.tsx`
- **Títulos claros**: `Design Tokens/Color Palette`
- **Subcategorias**: Agrupar por tipo

### Estrutura de uma Story
```typescript
const meta: Meta = {
  title: 'Design Tokens/Color Palette',
  component: ColorPalette,
  parameters: {
    docs: {
      description: {
        component: 'Documentação completa das paletas de cores.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const LightTheme: Story = {
  name: 'Light Theme',
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  name: 'Dark Theme (Cyberpunk)',
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
```

## 🔄 Separação de Responsabilidades

### Storybook da Lib (Tokens)
- **Localização**: `rainer-design-tokens`
- **Porta**: `http://localhost:6006`
- **Foco**: Apenas tokens
- **Deploy**: Chromatic/Docs

### Storybook do Frontend (Componentes)
- **Localização**: `rainer-portfolio-frontend`
- **Porta**: `http://localhost:6007`
- **Foco**: Componentes UI
- **Deploy**: Vercel/Netlify

### Comunicação entre eles
```typescript
// Frontend usa tokens da lib
import { tokens } from '@rainersoft/design-tokens';

// Componente no frontend
export const Button = () => (
  <button style={{ 
    padding: tokens.primitives.spacing['4'],
    background: tokens.semantics.colors.brand.primary 
  }}>
    Click me
  </button>
);
```

## 🚀 Deploy e Publicação

### Chromatic (Recomendado)
```bash
# Publicar automaticamente
pnpm chromatic

# Apenas mudanças
pnpm chromatic --only-changed

# Com build
pnpm build-storybook && pnpm chromatic
```

### GitHub Pages
```yaml
# .github/workflows/storybook.yml
- name: Build Storybook
  run: pnpm build-storybook

- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./storybook-static
```

## 📊 Métricas e Analytics

### Lighthouse CI
```yaml
- name: Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun
```

### Visual Regression Tests
```bash
# Com Chromatic
pnpm chromatic --review-changes

# Com Loki
pnpm loki test
```

## 🔧 Debug e Troubleshooting

### Problemas Comuns

#### Stories não aparecem
```bash
# Verificar estrutura
ls -la stories/

# Reiniciar Storybook
pnpm storybook --no-manager-cache
```

#### Tokens não carregam
```bash
# Verificar se formats foi gerado
pnpm run build:formats

# Rebuild completo
pnpm run build && pnpm storybook
```

#### Temas não mudam
```typescript
// Verificar configuração no preview.tsx
globalTypes: {
  theme: { /* configuração correta */ }
}
```

## 🔗 Links Relacionados

- [05-STORYBOOK.md](./05-STORYBOOK.md) - Como usar
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Guidelines
- [Storybook Docs](https://storybook.js.org/) - Documentação oficial

## 📅 Última Atualização

**Data**: 04 de Janeiro de 2026  
**Versão**: 2.6.0  
**Atualização**: Estrutura atualizada com novas stories

---

**Autor**: Rainer Teixeira  
**Licença**: MIT
