# 📚 Storybook - Design Tokens

Este documento explica como usar o Storybook para visualizar e documentar os design tokens.

## 🚀 Iniciar o Storybook

```bash
# Instalar dependências (se ainda não instalou)
pnpm install

# Iniciar o Storybook em modo desenvolvimento
pnpm run storybook
```

O Storybook será aberto em `http://localhost:6006`

## 📦 Build do Storybook

Para gerar uma versão estática do Storybook:

```bash
pnpm run build-storybook
```

A saída será gerada em `storybook-static/`

## 🎨 Stories Disponíveis

### Design Tokens/Color Palette

- **LightTheme** - Paleta completa do tema claro profissional
- **DarkTheme** - Paleta completa do tema escuro (Cyberpunk)

Visualiza todas as cores organizadas por categoria:
- Background
- Surface
- Text
- Border
- Brand
- Status
- Interactive
- Effects (apenas dark theme)
- Gradients (apenas dark theme)

### Design Tokens/Theme Preview

- **LightThemePreview** - Preview completo do tema claro mostrando tokens trabalhando juntos
- **DarkThemePreview** - Preview completo do tema escuro (Cyberpunk) com efeitos neon

Demonstra como os tokens (cores, espaçamento, tipografia, raios, sombras) trabalham juntos em exemplos práticos.

### Design Tokens/Typography

- **FontFamilies** - Todas as famílias de fontes disponíveis
- **FontSizes** - Escala completa de tamanhos de fonte
- **FontWeights** - Pesos de fonte disponíveis
- **LineHeights** - Alturas de linha
- **LetterSpacing** - Espaçamento entre letras

### Design Tokens/Spacing

- **SpacingScale** - Escala completa de espaçamento (8pt grid)
- **SpacingExamples** - Exemplos práticos de uso (padding, margin, gap)

### Design Tokens/Border Radius

- **RadiusScale** - Escala completa de raios de borda
- **RadiusExamples** - Exemplos práticos (cards, buttons, pills)

### Design Tokens/Shadows

- **LightShadows** - Sombras do tema claro
- **DarkShadows** - Sombras do tema escuro
- **GlowEffects** - Efeitos de brilho (glow) do tema cyberpunk

## 🎯 Funcionalidades

### Tema Global

O Storybook possui um seletor de tema na toolbar que permite alternar entre:
- **Light** - Tema claro profissional
- **Dark** - Tema escuro cyberpunk

### Background Switcher

Use o seletor de background para visualizar os tokens em diferentes contextos:
- Light background
- Dark background

### Documentação Automática

Todas as stories possuem documentação automática gerada pelo Storybook, incluindo:
- Descrições
- Código fonte
- Controles interativos

## 🔧 Configuração

### Arquivos de Configuração

- `.storybook/main.ts` - Configuração principal do Storybook
- `.storybook/preview.tsx` - Configuração de preview e tema (suporta JSX)

### Customização do Tema

O tema do Storybook é customizado usando os próprios design tokens:

```typescript
// .storybook/preview.tsx
import { tokens } from '../tokens';

docs: {
  theme: {
    colorPrimary: tokens.colors.light.brand.primary,
    colorSecondary: tokens.colors.light.brand.secondary,
    // ... mais customizações
  },
}
```

## 📝 Criar Novas Stories

Para criar uma nova story de tokens:

1. Crie um arquivo `Nome.stories.tsx` em `stories/`
2. Use o template básico:

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Nome',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Descrição do que esta story documenta.',
      },
    },
  },
} satisfies Meta;

export default meta; // ⚠️ OBRIGATÓRIO: Sempre exporte o meta
type Story = StoryObj<typeof meta>;

export const MinhaStory: Story = {
  render: () => {
    // Seu código aqui usando tokens
    return <div>Conteúdo</div>;
  },
};
```

### ⚠️ Importante

- **SEMPRE** exporte `export default meta` - sem isso o Storybook não consegue indexar a story
- **Foque apenas em tokens** - não crie stories de componentes UI aqui
- **Use `tokens`** importados de `../tokens` para acessar os valores

## 🎨 Integração com Tokens

Todas as stories importam os tokens diretamente:

```typescript
import { tokens } from '../tokens';

// Usar tokens
const primaryColor = tokens.colors.light.brand.primary;
const spacing = tokens.spacing['4'];
const fontSize = tokens.typography.fontSize.base;
const radius = tokens.radius.md;
const shadow = tokens.shadows.light.md;
```

### Stories Atuais

1. **ColorPalette.stories.tsx** - Visualiza todas as cores organizadas por categoria
2. **ThemePreview.stories.tsx** - Mostra como os tokens trabalham juntos em exemplos práticos
3. **Typography.stories.tsx** - Documenta fontes, tamanhos, pesos, espaçamentos
4. **Spacing.stories.tsx** - Escala de espaçamento com exemplos de uso
5. **Radius.stories.tsx** - Raios de borda com exemplos visuais
6. **Shadows.stories.tsx** - Sombras e efeitos glow (cyberpunk)

## 📚 Recursos Adicionais

- [Documentação do Storybook](https://storybook.js.org/docs)
- [Guia de Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Addons Disponíveis](https://storybook.js.org/addons)

## 🐛 Troubleshooting

### Erro: "Cannot find module '../tokens'"

**Solução**: Certifique-se de que os tokens foram compilados:
```bash
pnpm run build
```

### Erro: "React is not defined"

**Solução**: O Storybook já inclui React. Se o erro persistir:
```bash
pnpm add -D react react-dom
```

### Storybook não inicia

**Solução**: Limpe o cache e reinstale:
```bash
rm -rf node_modules/.cache
pnpm install
pnpm run storybook
```

### Erro: "CSF: missing default export"

**Problema**: Story não tem `export default meta`.

**Solução**: Sempre exporte o meta:
```typescript
const meta = { ... } satisfies Meta;
export default meta; // ⚠️ OBRIGATÓRIO
```

### Erro: "Cannot find module '../tokens'"

**Solução**: Certifique-se de que os tokens foram compilados:
```bash
pnpm run build
```

## 🚀 Deploy

Para fazer deploy do Storybook:

1. Gere o build estático:
```bash
pnpm run build-storybook
```

2. A pasta `storybook-static/` contém todos os arquivos estáticos

3. Faça deploy em qualquer serviço de hospedagem estática:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

### Exemplo: Deploy no Netlify

```bash
# Build command
pnpm run build-storybook

# Publish directory
storybook-static
```

