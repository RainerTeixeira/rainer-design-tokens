# Guia de Migração - Design Tokens Expandidos

## 📦 O que foi expandido

### 1. Tokens de Cores com Estados Completos

**Antes:**
```typescript
tokens.colors.light.brand.primary
tokens.colors.light.brand.primaryHover
```

**Agora:**
```typescript
tokens.colors.light.primary.base
tokens.colors.light.primary.hover
tokens.colors.light.primary.active
tokens.colors.light.primary.disabled
tokens.colors.light.primary.focus
tokens.colors.light.primary.background
tokens.colors.light.primary.backgroundHover
tokens.colors.light.primary.border
tokens.colors.light.primary.text
// ... e mais
```

### 2. Tipografia Hierárquica Completa

**Novos tokens adicionados:**
- `typography.headings.h1` até `h6`
- `typography.subtitle.large/medium/small`
- `typography.body.large/medium/small`
- `typography.caption.large/medium/small`
- `typography.button.large/medium/small`
- `typography.label.large/medium/small`
- `typography.code.inline/block`

### 3. Utilitários de Acessibilidade

**Novas funções:**
- `validateContrast()` - Validação completa de contraste
- `getContrastInfo()` - Informações detalhadas de contraste
- `meetsWCAGAA()` - Verifica WCAG AA
- `meetsWCAGAAA()` - Verifica WCAG AAA

## 🔄 Como Migrar

### Passo 1: Atualizar a Biblioteca

```bash
# Na biblioteca (novo pacote)
cd C:\Desenvolvimento\@rainersoft\design-tokens
pnpm run build

# No frontend
cd C:\Desenvolvimento\rainer-portfolio-frontend
# Se usar link local:
pnpm link @rainersoft/design-tokens
# Ou atualizar a versão no package.json
```

### Passo 2: Atualizar Imports

**Antes (pacote antigo):**
```typescript
import { tokens } from 'rainer-design-tokens';
const primary = tokens.colors.light.brand.primary;
```

**Agora (pacote atual):**
```typescript
import { tokens, validateContrast } from '@rainersoft/design-tokens';
const primary = tokens.colors.light.primary.base;
```

### Passo 3: Atualizar Componentes

**Exemplo: Botão**

**Antes:**
```typescript
<button
  style={{
    backgroundColor: tokens.colors.light.brand.primary,
  }}
>
  Botão
</button>
```

**Agora:**
```typescript
<button
  style={{
    backgroundColor: tokens.colors.light.primary.base,
    color: tokens.colors.light.primary.text,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = tokens.colors.light.primary.hover;
  }}
>
  Botão
</button>
```

### Passo 4: Atualizar Tailwind Config

```typescript
// tailwind.config.ts
import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./app', './components'],
};
```

Agora você pode usar:
```tsx
<div className="bg-primary-base text-primary-text hover:bg-primary-hover">
  Conteúdo
</div>
```

## ✅ Checklist de Migração

- [ ] Compilar biblioteca: `pnpm run build` na biblioteca
- [ ] Atualizar dependência no frontend
- [ ] Atualizar imports de cores: `brand.primary` → `primary.base`
- [ ] Adicionar estados de interação (hover, active, focus)
- [ ] Atualizar tipografia para usar novos tokens hierárquicos
- [ ] Validar acessibilidade com `validateContrast()`
- [ ] Atualizar Tailwind config
- [ ] Testar em light e dark mode
- [ ] Verificar responsividade da tipografia

## 📚 Recursos

- [Guia Completo](./GUIDE_EXPANDED_TOKENS.md)
- [Exemplos Práticos](../app/exemplos-tokens/page.tsx)
- [Storybook](./stories/)

## 🐛 Problemas Comuns

### Erro: "Property 'primary' does not exist"

**Solução:** A biblioteca não foi compilada ou atualizada. Execute:
```bash
cd C:\Desenvolvimento\@rainersoft\design-tokens
pnpm run build
```

### Erro: "validateContrast is not exported"

**Solução:** Verifique se o arquivo `tokens/accessibility.ts` foi exportado em `tokens/index.ts`:
```typescript
export * from './accessibility';
```

### Tipos TypeScript não atualizados

**Solução:** Reinstale o pacote novo:
```bash
# No frontend
pnpm add @rainersoft/design-tokens@latest
# Ou se usar link local:
pnpm link @rainersoft/design-tokens
```

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT