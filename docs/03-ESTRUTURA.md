# Estrutura da Biblioteca

Este documento explica a estrutura ideal da biblioteca `@rainersoft/design-tokens` e como cada parte funciona.

## Visão Geral

A biblioteca segue o princípio de **JSON como fonte única de verdade**. Todos os formatos (CSS, Tailwind, JSON consolidado) são gerados automaticamente a partir dos arquivos JSON em `tokens/`.

## Estrutura de Diretórios

```
@rainersoft/design-tokens/
│
├── tokens/               # FONTE ÚNICA DE VERDADE
│   ├── colors/
│   │   ├── light.json   # Paleta do tema claro
│   │   └── dark.json    # Paleta do tema escuro (cyberpunk)
│   ├── typography.json  # Famílias de fontes, tamanhos, pesos
│   ├── spacing.json     # Escala de espaçamento (8pt grid)
│   ├── radius.json      # Escala de raio de borda
│   └── shadows.json     # Sombras e elevação
│
├── themes/              # Temas compostos (TypeScript)
│   ├── index.ts         # Exportações dos temas
│   ├── light.ts         # Tema claro profissional
│   └── dark.ts          # Tema escuro cyberpunk
│
├── formats/             # FORMATOS GERADOS (NÃO EDITAR MANUALMENTE)
│   ├── css-vars.css        # Variáveis CSS (gerado)
│   ├── tailwind.config.ts  # Configuração Tailwind (gerado)
│   └── tokens.json         # JSON consolidado (gerado)
│
├── scripts/             # Scripts de Build
│   ├── build-formats.ts    # Orquestrador principal
│   ├── build-css.ts        # Gera CSS variables
│   ├── build-tailwind.ts   # Gera Tailwind config
│   └── build-tokens-json.ts # Gera tokens.json
│
├── dist/                # Saída Compilada (TypeScript)
│   ├── index.js            # CommonJS
│   ├── index.mjs           # ESM
│   └── index.d.ts          # TypeScript definitions
│
├── docs/                # Documentação
│   ├── guidelines.md       # Guia de uso
│   ├── roadmap.md          # Roadmap
│   ├── STRUCTURE.md        # Estrutura detalhada
│   ├── BUILD_SYSTEM.md     # Sistema de build
│   ├── STORYBOOK.md        # Storybook de tokens
│   ├── STORYBOOK_STRUCTURE.md # Separação de responsabilidades
│   └── STRUCTURE_SUMMARY.md  # Resumo da estrutura
│
├── index.ts             # Ponto de entrada principal
├── package.json         # Metadados do pacote
├── tsup.config.ts       # Configuração do bundler
├── tsconfig.json        # Configuração TypeScript
├── .eslintrc.json      # Configuração ESLint
└── .prettierrc.json    # Configuração Prettier
```

## O que cada parte representa

### `tokens/` - Fonte Única de Verdade

**Propósito**: Contém os arquivos JSON com todos os valores brutos dos tokens.

**Regra de Ouro**: 
- **SEMPRE edite apenas os arquivos em `tokens/`**
- **NUNCA edite manualmente os arquivos em `formats/`**

**Estrutura**:
- `colors/light.json` - Paleta de cores do tema claro
- `colors/dark.json` - Paleta de cores do tema escuro (cyberpunk)
- `typography.json` - Tokens de tipografia
- `spacing.json` - Escala de espaçamento
- `radius.json` - Escala de raio de borda
- `shadows.json` - Sombras e efeitos

### `themes/` - Variações de Paleta

**Propósito**: Permite trocar tema sem mexer no código.

**Conteúdo**:
- `light.ts` - Tema claro profissional
- `dark.ts` - Tema escuro cyberpunk
- `index.ts` - Exportações centralizadas

**Uso**:
```typescript
import { lightTheme, darkTheme } from '@rainersoft/design-tokens';
```

### `formats/` - Conversões Automáticas

**Propósito**: Formatos gerados automaticamente a partir dos tokens JSON.

**IMPORTANTE**: Estes arquivos são **gerados automaticamente**. Não edite manualmente!

**Arquivos**:
- `css-vars.css` - Variáveis CSS para uso em qualquer contexto CSS
- `tailwind.config.ts` - Configuração do Tailwind CSS
- `tokens.json` - JSON consolidado com referências

**Como gerar**:
```bash
pnpm run build:formats
```

### `scripts/` - Scripts de Build

**Propósito**: Scripts que transformam JSON em outros formatos, evitando redundância.

**Scripts**:
- `build-formats.ts` - Orquestrador principal (executa todos)
- `build-css.ts` - Lê `tokens/*.json` → Gera `formats/css-vars.css`
- `build-tailwind.ts` - Lê `tokens/*.json` → Gera `formats/tailwind.config.ts`
- `build-tokens-json.ts` - Lê `tokens/*.json` → Gera `formats/tokens.json`

**Uso**:
```bash
# Gerar todos os formatos
pnpm run build:formats

# Gerar formatos individuais
pnpm run build:css
pnpm run build:tailwind
pnpm run build:tokens-json
```

### `dist/` - Saída Compilada

**Propósito**: Arquivos compilados que outros projetos consomem.

**Conteúdo**:
- `index.js` - CommonJS (para `require()`)
- `index.mjs` - ESM (para `import`)
- `index.d.ts` - TypeScript definitions

**Geração**:
```bash
pnpm run build  # Compila TypeScript + gera formats
```

### `docs/` - Documentação

**Propósito**: Documentação completa da biblioteca.

**Arquivos**:
- `guidelines.md` - Como usar os tokens
- `roadmap.md` - Futuras features
- `STRUCTURE.md` - Este arquivo

### Arquivos de Configuração

- `index.ts` - Ponto de entrada principal da lib
- `package.json` - Metadados, scripts, dependências
- `tsup.config.ts` - Configuração do bundler (tsup)
- `tsconfig.json` - Configuração TypeScript
- `.eslintrc.json` - Configuração ESLint
- `.prettierrc.json` - Configuração Prettier

## Como usar em projetos

### No front-end (Next.js + Tailwind + shadcn/ui)

1. **Importar CSS variables** no `globals.css`:
```css
@import '@rainersoft/design-tokens/formats/css-vars.css';
```

2. **Configurar Tailwind** para usar `formats/tailwind.config.ts`:
```typescript
// tailwind.config.ts
import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./src/**/*.{ts,tsx}'],
};
```

3. **Usar classes** ou variáveis CSS:
```tsx
// Classes Tailwind
<div className="bg-brand text-text-primary p-4 rounded-lg shadow-md">

// Variáveis CSS
<div style={{ 
  background: 'var(--color-brand-primary)',
  padding: 'var(--spacing-4)'
}}>
```

### No Storybook

1. **Visualizar tokens no Storybook da lib**:
```bash
cd @rainersoft/design-tokens
pnpm run storybook
```

Acesse `http://localhost:6006` para ver todas as stories:
- ColorPalette - Paleta completa de cores
- ThemePreview - Preview dos temas
- Typography - Sistema de tipografia
- Spacing - Escala de espaçamento
- Radius - Raios de borda
- Shadows - Sombras e efeitos

2. **Usar tokens no Storybook do frontend**:
```typescript
// stories/Button.stories.tsx (no frontend)
import { tokens } from '@rainersoft/design-tokens';

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

> **Nota**: O Storybook da lib documenta apenas tokens. Componentes UI devem estar no Storybook do frontend. Veja [06-ESTRUTURA_STORYBOOK.md](./06-ESTRUTURA_STORYBOOK.md) para mais detalhes.

### Em outros projetos (React Native, Node)

1. **Importar tokens como objeto JS**:
```typescript
import { tokens } from '@rainersoft/design-tokens';
// ou
import tokens from '@rainersoft/design-tokens/dist/index.js';
```

## Fluxo de Trabalho

### Para Desenvolvedores da Biblioteca

1. **Edite tokens** em `tokens/*.json`
2. **Execute build**: `pnpm run build:formats`
3. **Formatos são gerados** automaticamente em `formats/`
4. **Compile TypeScript**: `pnpm run build`
5. **Teste**: `pnpm test`

### Para Consumidores da Biblioteca

1. **Instale**: `pnpm add @rainersoft/design-tokens`
2. **Importe tokens**: `import { tokens } from '@rainersoft/design-tokens'`
3. **Use formatos**: `import '@rainersoft/design-tokens/formats/css-vars.css'`

## Checklist de Estrutura Ideal

- [x] `tokens/` → JSON com valores brutos (fonte única de verdade)
- [x] `themes/` → Variações de paleta (light, dark, brand)
- [x] `formats/` → Conversões automáticas (CSS, Tailwind, JSON)
- [x] `scripts/` → Scripts de build que transformam JSON
- [x] `dist/` → Saída compilada (tokens.css, index.js, etc.)
- [x] `docs/` → Documentação completa
- [x] `index.ts` → Ponto de entrada da lib
- [x] `package.json` → Metadados do pacote
- [x] `tsup.config.ts` → Configuração do bundler
- [x] Configs (`.eslintrc.json`, `.prettierrc.json`, `tsconfig.json`)
- [x] README.md, CONTRIBUTING.md, CHANGELOG.md

## 🎯 Conclusão

Sua biblioteca está bem estruturada e profissional! 

**Princípios fundamentais**:
- ✅ JSON é a fonte única de verdade
- ✅ CSS e Tailwind são gerados automaticamente via scripts
- ✅ Sem redundância - edite uma vez, use em qualquer lugar
- ✅ Universal - funciona em qualquer projeto/framework

**Próximos passos**:
- [x] Adicionar Storybook para documentação visual
- [ ] Adicionar testes automatizados
- [ ] Publicar no npm
- [ ] Criar exemplos de uso em diferentes frameworks

## 📚 Storybook

A biblioteca inclui um Storybook focado **apenas em design tokens**:

### Stories Disponíveis

- **ColorPalette** - Paleta completa de cores (Light & Dark)
- **ThemePreview** - Preview dos temas mostrando tokens em ação
- **Typography** - Sistema completo de tipografia
- **Spacing** - Escala de espaçamento (8pt grid)
- **Radius** - Raios de borda
- **Shadows** - Sombras e efeitos glow

### Estrutura

```
.storybook/
├── main.ts      # Configuração principal
└── preview.tsx  # Preview e tema (suporta JSX)

stories/
├── ColorPalette.stories.tsx
├── ThemePreview.stories.tsx
├── Typography.stories.tsx
├── Spacing.stories.tsx
├── Radius.stories.tsx
└── Shadows.stories.tsx
```

> **Nota**: Componentes UI (Button, Card, etc.) devem estar no Storybook do frontend, não aqui. Veja [06-ESTRUTURA_STORYBOOK.md](./06-ESTRUTURA_STORYBOOK.md) para mais detalhes.
