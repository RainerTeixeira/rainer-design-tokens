# Guia de Tokens Avançados - v2.0.0

## 📐 Motion Tokens

### Visão Geral
Os motion tokens fornecem valores consistentes para animações e transições, seguindo princípios do Material Design e Fluent Design.

### Estrutura

#### Durações
```typescript
import { motionTokens } from '@rainersoft/design-tokens';

// Durações básicas
motionTokens.duration.instant   // 0ms
motionTokens.duration.fast      // 100ms
motionTokens.duration.normal    // 200ms
motionTokens.duration.slow      // 300ms
motionTokens.duration.slower    // 400ms
motionTokens.duration.slowest   // 500ms
```

#### Easings
```typescript
// Easings standard (Material Design)
motionTokens.easing.standard.productive  // Para ações produtivas
motionTokens.easing.standard.expressive  // Para ações expressivas
motionTokens.easing.standard.entrance    // Para entradas
motionTokens.easing.standard.exit        // Para saídas
```

## 📱 Breakpoint Tokens

### Visão Geral
Breakpoints responsivos seguindo abordagem mobile-first com valores otimizados para todos os dispositivos.

### Breakpoints Básicos
```typescript
import { breakpointTokens } from '@rainersoft/design-tokens';

breakpointTokens.xs   // 320px  - Mobile pequeno
breakpointTokens.sm   // 640px  - Mobile grande
breakpointTokens.md   // 768px  - Tablet
breakpointTokens.lg   // 1024px - Desktop pequeno
breakpointTokens.xl   // 1280px - Desktop médio
breakpointTokens.2xl  // 1536px - Desktop grande
```

## 📊 Z-Index Tokens

### Visão Geral
Sistema de z-index escalável e consistente para gerenciar camadas de componentes.

### Valores Base
```typescript
import { zIndexTokens } from '@rainersoft/design-tokens';

zIndexTokens.base      // 0
zIndexTokens.dropdown  // 1000
zIndexTokens.sticky    // 1020
zIndexTokens.fixed     // 1030
zIndexTokens.backdrop  // 1040
zIndexTokens.modal     // 1050
zIndexTokens.popover   // 1060
zIndexTokens.tooltip   // 1070
zIndexTokens.toast     // 1080
```

## Exemplos de Uso

### Motion com Framer Motion
```tsx
import { motion } from 'framer-motion';
import { motionTokens } from '@rainersoft/design-tokens';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: Number(motionTokens.duration.normal.replace('ms', '')) / 1000,
    ease: motionTokens.easing.standard.productive
  }}
>
  Conteúdo animado
</motion.div>
```

### Layout Responsivo
```tsx
import { RESPONSIVE } from '@rainersoft/design-tokens';

<div className={RESPONSIVE.CONTAINER.DEFAULT}>
  <div className={RESPONSIVE.GRID.COLS_1_3}>
    <div className={RESPONSIVE.HIDE_ON_MOBILE}>
      Sidebar
    </div>
    <div>
      Conteúdo principal
    </div>
  </div>
</div>
```

### Sistema de Camadas
```tsx
import { Z_INDEX } from '@rainersoft/design-tokens';

<nav className={Z_INDEX.FIXED}>Navegação fixa</nav>
<div className={Z_INDEX.BACKDROP}>Backdrop</div>
<div className={Z_INDEX.MODAL}>Modal</div>
<div className={Z_INDEX.TOAST}>Toast</div>
```

---

**Última atualização:** 21/11/2024 | **Versão:** 2.0.0
