# 📚 Estrutura do Storybook - Separação de Responsabilidades

Este documento explica a estrutura de Storybooks separados para tokens e componentes UI.

## 🎯 Visão Geral

A estrutura foi organizada para separar claramente as responsabilidades:

1. **Storybook da Lib** (`@rainer-design-tokens`) - Focado apenas em **design tokens**
2. **Storybook do Frontend** (`rainer-portfolio-frontend`) - Focado em **componentes UI**

## 📁 Estrutura de Diretórios

```
C:\Desenvolvimento\
│
├─ @rainer-design-tokens/          # 📦 Biblioteca de Design Tokens
│   ├─ tokens/                      # Fonte única de verdade (JSON)
│   ├─ formats/                      # Formatos gerados (CSS, Tailwind, JSON)
│   ├─ .storybook/                  # ⚙️ Storybook da lib (tokens)
│   │   ├─ main.ts                  # Configuração principal
│   │   └─ preview.tsx              # Preview e tema (suporta JSX)
│   └─ stories/                      # 📚 Stories de tokens
│       ├─ ColorPalette.stories.tsx # Paleta de cores completa
│       ├─ ThemePreview.stories.tsx # Preview dos temas
│       ├─ Typography.stories.tsx   # Tipografia
│       ├─ Spacing.stories.tsx      # Espaçamento
│       ├─ Radius.stories.tsx       # Raios de borda
│       └─ Shadows.stories.tsx      # Sombras
│
└─ rainer-portfolio-frontend/       # 🌐 Frontend Application
    ├─ src/
    │   └─ components/
    │       └─ ui/                   # Componentes UI
    ├─ .storybook/                  # ⚙️ Storybook do frontend (componentes)
    │   ├─ main.ts                  # Configuração principal
    │   └─ preview.tsx              # Preview e tema (suporta JSX)
    └─ stories/                      # 📚 Stories de componentes
        ├─ Button.stories.tsx       # Botões
        ├─ Card.stories.tsx          # Cards
        ├─ Input.stories.tsx         # Inputs
        └─ ...                      # Outros componentes
```

## 🎨 Storybook da Lib (@rainer-design-tokens)

### Propósito

Documentar e visualizar **apenas os design tokens**, não componentes UI.

### Stories Disponíveis

1. **ColorPalette** - Paleta completa de cores (Light & Dark)
2. **ThemePreview** - Preview dos temas mostrando tokens trabalhando juntos
3. **Typography** - Sistema de tipografia
4. **Spacing** - Escala de espaçamento (8pt grid)
5. **Radius** - Raios de borda
6. **Shadows** - Sombras e efeitos

### O que NÃO deve ter

- ❌ Componentes UI (Button, Card, Input, etc.)
- ❌ Stories de componentes reutilizáveis
- ❌ Lógica de negócio ou interações complexas

### Como usar

```bash
cd @rainer-design-tokens
npm run storybook
```

Acesse `http://localhost:6006` para ver os tokens.

## 🖼️ Storybook do Frontend (rainer-portfolio-frontend)

### Propósito

Documentar e visualizar **componentes UI** que usam os design tokens.

### Stories Disponíveis

1. **Button** - Botões usando tokens
2. **Card** - Cards usando tokens
3. **Input** - Inputs usando tokens
4. **Modal** - Modais usando tokens
5. **...** - Outros componentes UI

### O que deve ter

- ✅ Componentes UI reutilizáveis
- ✅ Exemplos de uso dos tokens em componentes
- ✅ Interações e estados dos componentes
- ✅ Documentação de props e uso

### Como usar

```bash
cd rainer-portfolio-frontend
npm run storybook
```

Acesse `http://localhost:6006` para ver os componentes.

## 🔗 Integração

### No Frontend Storybook

Os componentes do frontend devem **importar e usar** os tokens da lib:

```typescript
// stories/Button.stories.tsx (no frontend)
import { tokens } from '@rainer/design-tokens';

export const Primary = {
  render: () => (
    <button
      style={{
        backgroundColor: tokens.colors.light.brand.primary,
        padding: tokens.spacing['4'],
        borderRadius: tokens.radius.md,
      }}
    >
      Button
    </button>
  ),
};
```

### Importar CSS Variables

```typescript
// .storybook/preview.tsx (no frontend)
import '@rainer/design-tokens/formats/css-vars.css';
```

### Usar Tailwind Config

```typescript
// tailwind.config.ts (no frontend)
import { tailwindConfig } from '@rainer/design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./src/**/*.{ts,tsx}'],
};
```

## 📋 Checklist

### Storybook da Lib

- [x] Focado apenas em design tokens
- [x] ColorPalette.stories.tsx - Paleta de cores completa
- [x] ThemePreview.stories.tsx - Preview dos temas
- [x] Typography.stories.tsx - Sistema de tipografia
- [x] Spacing.stories.tsx - Escala de espaçamento
- [x] Radius.stories.tsx - Raios de borda
- [x] Shadows.stories.tsx - Sombras e efeitos
- [x] Sem componentes UI (Button, Header, Page removidos)

### Storybook do Frontend

- [ ] Focado em componentes UI
- [ ] Button.stories.tsx
- [ ] Card.stories.tsx
- [ ] Input.stories.tsx
- [ ] Usa tokens da lib
- [ ] Documentação de props

## 🎯 Benefícios da Separação

1. **Clareza** - Cada Storybook tem um propósito claro
2. **Manutenção** - Mais fácil de manter e atualizar
3. **Performance** - Storybook da lib é mais leve
4. **Reutilização** - Tokens podem ser usados em múltiplos projetos
5. **Documentação** - Separação clara entre tokens e componentes

## 🚀 Próximos Passos

1. **Criar Storybook no frontend** (se ainda não existe)
2. **Mover componentes UI** do Storybook da lib para o frontend
3. **Configurar integração** entre os dois Storybooks
4. **Documentar** como usar tokens nos componentes

## 📚 Referências

- [Storybook da Lib](./STORYBOOK.md) - Documentação completa do Storybook de tokens
- [Estrutura da Biblioteca](./STRUCTURE.md) - Estrutura geral da biblioteca
- [Build System](./BUILD_SYSTEM.md) - Sistema de build dos tokens

