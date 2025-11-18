# 📚 Estrutura do Storybook - Design Tokens

Este documento explica a estrutura e organização do Storybook da biblioteca de design tokens.

## 🎯 Visão Geral

O Storybook da biblioteca `@rainer/design-tokens` é focado **apenas em design tokens**, documentando e visualizando todos os tokens disponíveis na biblioteca.

## 📁 Estrutura de Diretórios

```
@rainer-design-tokens/
│
├─ tokens/                      # Fonte única de verdade (JSON)
├─ formats/                      # Formatos gerados (CSS, Tailwind, JSON)
├─ .storybook/                  # ⚙️ Configuração do Storybook
│   ├─ main.ts                  # Configuração principal
│   └─ preview.tsx              # Preview e tema
└─ stories/                      # 📚 Stories de tokens
    ├─ ColorPalette.stories.tsx # Paleta de cores completa
    ├─ ColorStates.stories.tsx  # Estados de cores
    ├─ TypographyHierarchy.stories.tsx # Hierarquia tipográfica
    ├─ Accessibility.stories.tsx # Acessibilidade WCAG
    ├─ ThemePreview.stories.tsx # Preview dos temas
    ├─ Typography.stories.tsx   # Tipografia
    ├─ Spacing.stories.tsx      # Espaçamento
    ├─ Radius.stories.tsx       # Raios de borda
    └─ Shadows.stories.tsx      # Sombras
```

## 🎨 Propósito

O Storybook documenta e visualiza **apenas os design tokens** da biblioteca, não componentes UI.

### Stories Disponíveis

1. **ColorPalette** - Paleta completa de cores (Light & Dark)
2. **ColorStates** - Estados completos de cores (base, hover, active, disabled, focus)
3. **TypographyHierarchy** - Hierarquia tipográfica completa (H1-H6, subtítulos, corpo, legendas)
4. **Accessibility** - Validação de contraste WCAG AA/AAA
5. **ThemePreview** - Preview dos temas mostrando tokens trabalhando juntos
6. **Typography** - Sistema de tipografia básico
7. **Spacing** - Escala de espaçamento (8pt grid)
8. **Radius** - Raios de borda
9. **Shadows** - Sombras e efeitos

### O que NÃO deve ter

- ❌ Componentes UI (Button, Card, Input, etc.)
- ❌ Stories de componentes reutilizáveis
- ❌ Lógica de negócio ou interações complexas

## 🚀 Como Usar

### Iniciar o Storybook

```bash
cd @rainer-design-tokens
pnpm run storybook
```

O Storybook estará disponível em `http://localhost:6006`

### Build do Storybook

Para gerar uma versão estática:

```bash
pnpm run build-storybook
```

A saída será gerada em `storybook-static/`

## ⚙️ Configuração

### Arquivos de Configuração

- `.storybook/main.ts` - Configuração principal do Storybook
- `.storybook/preview.tsx` - Configuração de preview e tema

### Customização do Tema

O tema do Storybook é customizado usando os próprios design tokens:

```typescript
// .storybook/preview.tsx
import { tokens } from '../tokens';

docs: {
  theme: {
    colorPrimary: tokens.colors.light.primary.base,
    colorSecondary: tokens.colors.light.secondary.base,
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
const primaryColor = tokens.colors.light.primary.base;
const spacing = tokens.spacing['4'];
const fontSize = tokens.typography.headings.h1.fontSize;
const radius = tokens.radius.md;
const shadow = tokens.shadows.light.md;
```

## 📋 Checklist

- [x] Focado apenas em design tokens
- [x] ColorPalette.stories.tsx - Paleta de cores completa
- [x] ColorStates.stories.tsx - Estados de cores
- [x] TypographyHierarchy.stories.tsx - Hierarquia tipográfica
- [x] Accessibility.stories.tsx - Acessibilidade WCAG
- [x] ThemePreview.stories.tsx - Preview dos temas
- [x] Typography.stories.tsx - Sistema de tipografia
- [x] Spacing.stories.tsx - Escala de espaçamento
- [x] Radius.stories.tsx - Raios de borda
- [x] Shadows.stories.tsx - Sombras e efeitos
- [x] Sem componentes UI

## 🎯 Benefícios

1. **Foco claro** - Documenta apenas design tokens
2. **Manutenção fácil** - Estrutura simples e organizada
3. **Performance** - Storybook leve e rápido
4. **Documentação visual** - Visualização interativa de todos os tokens
5. **Reutilização** - Tokens podem ser usados em múltiplos projetos

## 📚 Referências

- [STORYBOOK.md](./STORYBOOK.md) - Documentação completa do Storybook
- [ESTRUTURA.md](./ESTRUTURA.md) - Estrutura geral da biblioteca
- [SISTEMA_BUILD.md](./SISTEMA_BUILD.md) - Sistema de build dos tokens

