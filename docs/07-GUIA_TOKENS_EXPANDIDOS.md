# Guia de Uso - Design Tokens Expandidos

## 📋 Visão Geral

Esta biblioteca de design tokens foi expandida para incluir:

- ✅ **Cores com estados completos**: `hover`, `active`, `disabled`, `focus`
- ✅ **Tipografia hierárquica**: H1-H6, subtítulos, corpo, legendas
- ✅ **Acessibilidade WCAG AA/AAA**: Utilitários de verificação de contraste
- ✅ **Agnóstica**: Pode ser usada em qualquer ambiente (web, mobile, desktop)
- ✅ **Integração Tailwind**: Configuração automática para Tailwind CSS

## 🎨 Tokens de Cores

### Estrutura de Cores

Cada cor principal (`primary`, `secondary`, `accent`) possui estados completos:

```typescript
import { tokens } from '@rainersoft/design-tokens';

const colors = tokens.colors.light.primary;

// Estados disponíveis
colors.base        // Cor base
colors.hover       // Estado hover
colors.active       // Estado active
colors.disabled     // Estado disabled
colors.focus        // Estado focus
colors.background   // Background da cor
colors.backgroundHover
colors.backgroundActive
colors.border       // Borda da cor
colors.borderHover
colors.borderFocus
colors.text         // Texto sobre a cor
colors.textHover
colors.textDisabled
```

### Exemplo de Uso

```typescript
import { tokens } from 'rainer-design-tokens';

const colors = tokens.colors.light.primary;

// Em um componente React
<button
  style={{
    backgroundColor: colors.base,
    color: colors.text,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = colors.hover;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = colors.base;
  }}
  onFocus={(e) => {
    e.currentTarget.style.outline = `2px solid ${colors.focus}`;
  }}
>
  Botão
</button>
```

### Cores Semânticas

```typescript
// Background
tokens.colors.light.background.primary
tokens.colors.light.background.secondary
tokens.colors.light.background.tertiary

// Surface
tokens.colors.light.surface.primary
tokens.colors.light.surface.hover
tokens.colors.light.surface.active

// Text
tokens.colors.light.text.primary
tokens.colors.light.text.secondary
tokens.colors.light.text.tertiary
tokens.colors.light.text.onPrimary
tokens.colors.light.text.onSecondary

// Status
tokens.colors.light.status.success.base
tokens.colors.light.status.success.background
tokens.colors.light.status.success.border
tokens.colors.light.status.success.text
```

## 📝 Tokens de Tipografia

### Hierarquia Completa

```typescript
import { tokens } from 'rainer-design-tokens';

const typography = tokens.typography;

// Headings (H1-H6)
typography.headings.h1  // Título principal
typography.headings.h2  // Seção principal
typography.headings.h3  // Subseção
typography.headings.h4  // Título de card
typography.headings.h5  // Subtítulo menor
typography.headings.h6  // Título mínimo

// Subtítulos
typography.subtitle.large
typography.subtitle.medium
typography.subtitle.small

// Corpo de texto
typography.body.large
typography.body.medium
typography.body.small

// Legendas
typography.caption.large
typography.caption.medium
typography.caption.small

// Botões
typography.button.large
typography.button.medium
typography.button.small

// Labels
typography.label.large
typography.label.medium
typography.label.small

// Código
typography.code.inline
typography.code.block
```

### Estrutura de um Token de Tipografia

Cada token de tipografia contém:

```typescript
{
  fontFamily: string;      // Família de fonte
  fontSize: string;        // Tamanho (com clamp para responsividade)
  fontSizeMobile: string;  // Tamanho mobile
  fontSizeTablet: string;  // Tamanho tablet
  fontSizeDesktop: string; // Tamanho desktop
  fontWeight: string;      // Peso da fonte
  lineHeight: string;      // Altura de linha
  letterSpacing: string;  // Espaçamento entre letras
  marginBottom?: string;  // Margem inferior (para headings)
}
```

### Exemplo de Uso

```typescript
import { tokens } from 'rainer-design-tokens';

const typography = tokens.typography;
const colors = tokens.colors.light;

<h1
  style={{
    fontFamily: typography.headings.h1.fontFamily,
    fontSize: typography.headings.h1.fontSize,
    fontWeight: typography.headings.h1.fontWeight,
    lineHeight: typography.headings.h1.lineHeight,
    letterSpacing: typography.headings.h1.letterSpacing,
    color: colors.text.primary,
  }}
>
  Título Principal
</h1>
```

## ♿ Acessibilidade WCAG

### Verificação de Contraste

```typescript
import { validateContrast, getContrastInfo } from '@rainersoft/design-tokens';

// Validar contraste
const validation = validateContrast('#0891b2', '#ffffff', {
  requireAAA: false,  // false = WCAG AA, true = WCAG AAA
  largeText: false,  // false = texto normal, true = texto grande
});

console.log(validation);
// {
//   valid: true,
//   level: 'AA',
//   contrast: 3.2,
//   message: 'Contraste válido (WCAG AA)'
// }

// Obter informações completas
const info = getContrastInfo('#0891b2', '#ffffff');
console.log(info);
// {
//   contrast: 3.2,
//   meetsAA: false,
//   meetsAALarge: true,
//   meetsAAA: false,
//   meetsAAALarge: false,
//   level: 'AA Large'
// }
```

### Funções Disponíveis

- `hexToRgb(hex: string)`: Converte hex para RGB
- `getLuminance(r, g, b)`: Calcula luminância relativa
- `getContrast(color1, color2)`: Calcula razão de contraste
- `meetsWCAGAA(foreground, background, largeText?)`: Verifica WCAG AA
- `meetsWCAGAAA(foreground, background, largeText?)`: Verifica WCAG AAA
- `getContrastInfo(foreground, background)`: Informações completas
- `validateContrast(foreground, background, options)`: Validação completa

## 🎯 Integração com Tailwind CSS

### Configuração

```typescript
// tailwind.config.ts
import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';

export default {
  ...tailwindConfig,
  content: ['./app', './components'],
};
```

### Uso em Classes Tailwind

Após a configuração, você pode usar os tokens como classes:

```tsx
// Cores
<div className="bg-primary-base text-primary-text">
  Conteúdo
</div>

<button className="bg-primary-base hover:bg-primary-hover active:bg-primary-active">
  Botão
</button>

// Tipografia
<h1 className="text-[clamp(2.25rem,5vw+1rem,4.5rem)] font-black leading-[1.1]">
  Título
</h1>

// Ou usando os valores diretamente via CSS variables
```

### CSS Variables

A biblioteca também gera CSS variables:

```css
/* Importar no seu CSS */
@import '@rainersoft/design-tokens/formats/css-vars.css';

/* Usar */
.my-element {
  background-color: var(--color-primary-base);
  color: var(--color-primary-text);
}
```

## 🔧 Integração com shadcn/ui

### Atualizando Componentes

Os componentes do shadcn/ui podem ser atualizados para usar os tokens:

```typescript
// components/ui/button.tsx
import { tokens } from '@rainersoft/design-tokens';
import { cn } from '@/lib/utils';

export function Button({ variant = 'default', ...props }) {
  const colors = tokens.colors.light.primary;
  
  return (
    <button
      className={cn(
        'font-body',
        variant === 'default' && 'bg-primary-base text-primary-text',
        variant === 'outline' && 'border-primary-border text-primary-base'
      )}
      style={{
        fontSize: tokens.typography.button.medium.fontSize,
        fontWeight: tokens.typography.button.medium.fontWeight,
      }}
      {...props}
    />
  );
}
```

## 📱 Uso em Outros Ambientes

### React Native

```typescript
import { tokens } from 'rainer-design-tokens';

const colors = tokens.colors.light;

<View style={{
  backgroundColor: colors.background.primary,
  padding: tokens.spacing.md,
}}>
  <Text style={{
    color: colors.text.primary,
    fontSize: tokens.typography.body.medium.fontSize,
    fontFamily: tokens.typography.fontFamily.body,
  }}>
    Texto
  </Text>
</View>
```

### Electron

```typescript
import { tokens } from 'rainer-design-tokens';

// Usar em CSS inline ou arquivos CSS
const styles = {
  backgroundColor: tokens.colors.light.background.primary,
  color: tokens.colors.light.text.primary,
  fontSize: tokens.typography.body.medium.fontSize,
};
```

## 📚 Exemplos Práticos

Veja exemplos completos em:
- Frontend: `/app/exemplos-tokens/page.tsx`
- Storybook: Execute `pnpm run storybook` na biblioteca

## ✅ Checklist de Implementação

- [ ] Instalar/atualizar biblioteca: `pnpm add @rainersoft/design-tokens@latest`
- [ ] Configurar Tailwind: Importar `tailwindConfig` no `tailwind.config.ts`
- [ ] Atualizar componentes: Substituir cores hardcoded por tokens
- [ ] Validar acessibilidade: Usar `validateContrast` para verificar contraste
- [ ] Testar em diferentes temas: Light e Dark
- [ ] Verificar responsividade: Tipografia usa `clamp()` para responsividade

## 🔗 Recursos

- [Documentação Completa](./README.md)
- [Storybook](./stories/)
- [Exemplos Práticos](../app/exemplos-tokens/page.tsx)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT