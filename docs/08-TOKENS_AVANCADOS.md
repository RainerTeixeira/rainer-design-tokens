# 08-TOKENS_AVANCADOS.md - Tokens Avançados

## 🎯 Visão Geral

Este documento explora tokens avançados e padrões complexos da biblioteca `@rainersoft/design-tokens`, incluindo tokens computados, referências aninhadas, e técnicas avançadas de composição.

## 🔄 Tokens Computados

### O que são Tokens Computados?

Tokens computados são valores derivados de outros tokens através de operações matemáticas ou transformações.

### Exemplo: Radius Proporcional

```json
{
  "primitives": {
    "spacing": {
      "1": "0.25rem",
      "2": "0.5rem",
      "4": "1rem",
      "8": "2rem"
    }
  },
  "computed": {
    "radius": {
      "sm": "calc({primitives.spacing.1} / 2)",     // 2px
      "base": "{primitives.spacing.1}",             // 4px
      "md": "calc({primitives.spacing.2} * 0.75)",  // 6px
      "lg": "{primitives.spacing.2}",              // 8px
      "xl": "calc({primitives.spacing.4} * 0.75)",  // 12px
      "2xl": "{primitives.spacing.4}",             // 16px
      "3xl": "calc({primitives.spacing.8} * 0.75)"  // 24px
    }
  }
}
```

### Exemplo: Tipografia Fluida

```json
{
  "fluid": {
    "fontSize": {
      "xs": "clamp(0.75rem, 2vw, 0.875rem)",
      "sm": "clamp(0.875rem, 2.5vw, 1rem)",
      "base": "clamp(1rem, 3vw, 1.125rem)",
      "lg": "clamp(1.125rem, 3.5vw, 1.25rem)",
      "xl": "clamp(1.25rem, 4vw, 1.5rem)",
      "2xl": "clamp(1.5rem, 5vw, 2rem)",
      "3xl": "clamp(1.875rem, 6vw, 2.5rem)"
    }
  }
}
```

## 📊 Tokens Condicionais

### Tokens Baseados em Tema

```json
{
  "conditional": {
    "shadow": {
      "light": "0 4px 6px rgba(0, 0, 0, 0.1)",
      "dark": "0 4px 6px rgba(0, 0, 0, 0.4)"
    },
    "glow": {
      "light": "none",
      "dark": "0 0 20px rgba(0, 230, 255, 0.5)"
    }
  }
}
```

### Aplicação com CSS

```css
:root {
  --shadow: var(--conditional-shadow-light);
  --glow: var(--conditional-glow-light);
}

.dark {
  --shadow: var(--conditional-shadow-dark);
  --glow: var(--conditional-glow-dark);
}
```

## 🔗 Referências Complexas

### Referências Multi-nível

```json
{
  "primitives": {
    "colors": {
      "blue": { "500": "#0891b2" },
      "gray": { "100": "#f5f5f5" }
    }
  },
  "semantics": {
    "colors": {
      "primary": "{primitives.colors.blue.500}",
      "background": "{primitives.colors.gray.100}"
    }
  },
  "components": {
    "button": {
      "primary": {
        "background": "{semantics.colors.primary}",
        "hover": "darken({semantics.colors.primary}, 10%)",
        "text": "contrast({semantics.colors.primary})"
      }
    }
  }
}
```

### Transformações de Cor

```json
{
  "colorTransforms": {
    "brand": {
      "primary": "{primitives.colors.cyan.500}",
      "light": "lighten({components.button.primary.background}, 20%)",
      "dark": "darken({components.button.primary.background}, 20%)",
      "transparent": "rgba({components.button.primary.background}, 0.1)"
    }
  }
}
```

## 🎨 Tokens de Gradiente

### Gradientes Lineares

```json
{
  "gradients": {
    "linear": {
      "brand": "linear-gradient(135deg, {primitives.colors.cyan.500}, {primitives.colors.violet.500})",
      "sunset": "linear-gradient(135deg, {primitives.colors.amber.500}, {primitives.colors.pink.500})",
      "ocean": "linear-gradient(135deg, {primitives.colors.blue.500}, {primitives.colors.cyan.500})",
      "forest": "linear-gradient(135deg, {primitives.colors.green.500}, {primitives.colors.emerald.500})"
    },
    "radial": {
      "brand": "radial-gradient(circle, {primitives.colors.violet.500}, {primitives.colors.cyan.500})",
      "sunset": "radial-gradient(circle, {primitives.colors.pink.500}, {primitives.colors.amber.500})"
    }
  }
}
```

### Gradientes Animados

```json
{
  "animatedGradients": {
    "shimmer": "linear-gradient(90deg, {primitives.colors.gray.100} 0%, {primitives.colors.gray.200} 50%, {primitives.colors.gray.100} 100%)",
    "aurora": "linear-gradient(135deg, {primitives.colors.cyan.400}, {primitives.colors.violet.400}, {primitives.colors.pink.400}, {primitives.colors.cyan.400})",
    "pulse": "radial-gradient(circle, {primitives.colors.violet.500}, transparent)"
  }
}
```

## 🌐 Tokens de Responsividade

### Espaçamento Responsivo

```json
{
  "responsive": {
    "spacing": {
      "section": {
        "mobile": "{primitives.spacing.8}",
        "tablet": "{primitives.spacing.12}",
        "desktop": "{primitives.spacing.16}"
      },
      "container": {
        "mobile": "{primitives.spacing.4}",
        "tablet": "{primitives.spacing.6}",
        "desktop": "{primitives.spacing.8}"
      }
    }
  }
}
```

### Tipografia Responsiva

```json
{
  "responsive": {
    "typography": {
      "heading": {
        "mobile": {
          "fontSize": "{primitives.fontSize.2xl}",
          "lineHeight": "{primitives.lineHeight.tight}"
        },
        "tablet": {
          "fontSize": "{primitives.fontSize.3xl}",
          "lineHeight": "{primitives.lineHeight.tight}"
        },
        "desktop": {
          "fontSize": "{primitives.fontSize.4xl}",
          "lineHeight": "{primitives.lineHeight.tight}"
        }
      }
    }
  }
}
```

## 🎭 Tokens de Interação

### Estados Complexos

```json
{
  "interactions": {
    "button": {
      "default": {
        "transform": "scale(1)",
        "shadow": "{elevation.md}",
        "transition": "all {motion.duration.normal} {motion.easing.ease-out}"
      },
      "hover": {
        "transform": "scale(1.05)",
        "shadow": "{elevation.lg}",
        "brightness": "1.1"
      },
      "active": {
        "transform": "scale(0.95)",
        "shadow": "{elevation.sm}",
        "brightness": "0.95"
      },
      "focus": {
        "outline": "2px solid {primitives.colors.violet.500}",
        "outlineOffset": "2px"
      },
      "disabled": {
        "opacity": "0.6",
        "cursor": "not-allowed",
        "transform": "none"
      }
    }
  }
}
```

### Micro-interações

```json
{
  "microInteractions": {
    "loading": {
      "spin": "spin 1s linear infinite",
      "pulse": "pulse 2s ease-in-out infinite",
      "bounce": "bounce 1s ease-in-out infinite"
    },
    "notification": {
      "slideIn": "slideInRight {motion.duration.normal} {motion.easing.ease-bounce}",
      "fade": "fadeIn {motion.duration.fast} {motion.easing.ease-out}",
      "shake": "shake 0.5s ease-in-out"
    }
  }
}
```

## 🧮 Tokens Matemáticos

### Funções Matemáticas

```json
{
  "math": {
    "goldenRatio": "1.618",
    "fibonacci": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    "spacing": {
      "minorSecond": "calc({primitives.spacing.1} * 1.067)",
      "majorSecond": "calc({primitives.spacing.1} * 1.125)",
      "minorThird": "calc({primitives.spacing.1} * 1.2)",
      "majorThird": "calc({primitives.spacing.1} * 1.25)",
      "perfectFourth": "calc({primitives.spacing.1} * 1.333)",
      "tritone": "calc({primitives.spacing.1} * 1.414)",
      "perfectFifth": "calc({primitives.spacing.1} * 1.5)"
    }
  }
}
```

### Escalas Modulares

```json
{
  "modularScale": {
    "base": "1rem",
    "ratio": "1.25",
    "scale": [
      "calc(1rem * 0.8)",    // -2
      "calc(1rem * 0.896)",  // -1
      "1rem",                // 0 (base)
      "calc(1rem * 1.125)",  // 1
      "calc(1rem * 1.25)",   // 2
      "calc(1rem * 1.5625)", // 3
      "calc(1rem * 1.953)",  // 4
      "calc(1rem * 2.441)",  // 5
      "calc(1rem * 3.052)",  // 6
      "calc(1rem * 3.815)"   // 7
    ]
  }
}
```

## 🔬 Tokens de Física

### Animações Baseadas em Física

```json
{
  "physics": {
    "spring": {
      "gentle": "0.3, 0.8, 0.7, 1",
      "bouncy": "0.68, -0.55, 0.265, 1.55",
      "elastic": "0.68, -0.6, 0.32, 1.6",
      "stiff": "0.8, 0, 0.2, 1"
    },
    "gravity": {
      "light": "0.25, 0.46, 0.45, 0.94",
      "normal": "0.25, 0.46, 0.45, 0.94",
      "heavy": "0.55, 0.085, 0.68, 0.53"
    },
    "friction": {
      "low": "0.215, 0.61, 0.355, 1",
      "medium": "0.23, 1, 0.32, 1",
      "high": "0.25, 0.46, 0.45, 0.94"
    }
  }
}
```

## 🎪 Tokens Experimentais

### CSS Houdini

```json
{
  "houdini": {
    "customProperties": {
      "complexColor": "color(display-p3 0 0.5 1)",
      "colorMix": "color-mix(in srgb, {primitives.colors.cyan.500} 50%, {primitives.colors.violet.500})",
      "colorContrast": "color-contrast({primitives.colors.gray.100} vs {primitives.colors.gray.900})"
    },
    "paintWorklet": {
      "checkerboard": "paint(checkerboard, {primitives.spacing.4}, {primitives.colors.cyan.500}, {primitives.colors.violet.500})",
      "gradient": "paint(simple-gradient, {primitives.colors.cyan.500}, {primitives.colors.violet.500})"
    }
  }
}
```

### Container Queries

```json
{
  "containerQueries": {
    "card": {
      "small": "@container (min-width: 200px)",
      "medium": "@container (min-width: 400px)",
      "large": "@container (min-width: 600px)"
    },
    "sidebar": {
      "inline": "@container (min-width: 300px) and (orientation: landscape)",
      "stack": "@container (max-width: 300px)"
    }
  }
}
```

## 🛠️ Implementação Avançada

### TypeScript com Tokens

```typescript
import { tokens } from '@rainersoft/design-tokens';

// Tipos fortemente tipados
type ColorToken = keyof typeof tokens.primitives.colors;
type SpacingToken = keyof typeof tokens.primitives.spacing;

// Funções utilitárias
const getColor = (color: ColorToken, shade?: number) => {
  if (shade) {
    return tokens.primitives.colors[color][shade as keyof typeof tokens.primitives.colors[ColorToken]];
  }
  return tokens.primitives.colors[color];
};

const getSpacing = (value: SpacingToken) => {
  return tokens.primitives.spacing[value];
};

// Hooks React
const useToken = <T extends keyof typeof tokens>(path: T) => {
  return tokens[path];
};

const useResponsiveToken = <T>(path: string, breakpoint: 'mobile' | 'tablet' | 'desktop') => {
  return tokens.responsive[path][breakpoint];
};
```

### CSS-in-JS com Tokens

```typescript
import styled, { css } from 'styled-components';
import { tokens } from '@rainersoft/design-tokens';

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${tokens.primitives.spacing[3]} ${tokens.primitives.spacing[4]};
  border-radius: ${tokens.primitives.radius.md};
  font-weight: ${tokens.primitives.fontWeight.medium};
  transition: all ${tokens.motion.duration.normal} ${tokens.motion.easing.ease-out};

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${tokens.semantics.colors.brand.primary};
          color: ${tokens.primitives.colors.gray.white};
          border: 1px solid ${tokens.semantics.colors.brand.primary};

          &:hover {
            background: ${tokens.primitives.colors.cyan[600]};
            transform: translateY(-2px);
            box-shadow: ${tokens.elevation.lg};
          }
        `;
      case 'secondary':
        return css`
          background: transparent;
          color: ${tokens.semantics.colors.brand.primary};
          border: 1px solid ${tokens.semantics.colors.brand.primary};

          &:hover {
            background: ${tokens.primitives.colors.cyan[50]};
          }
        `;
    }
  }}
`;
```

## 📊 Performance e Otimização

### Cache de Tokens

```typescript
class TokenCache {
  private cache = new Map<string, any>();

  get(path: string) {
    if (this.cache.has(path)) {
      return this.cache.get(path);
    }

    const value = this.resolvePath(path);
    this.cache.set(path, value);
    return value;
  }

  private resolvePath(path: string) {
    return path.split('.').reduce((obj, key) => obj[key], tokens);
  }
}

const tokenCache = new TokenCache();
```

### Lazy Loading

```typescript
const loadTokens = async () => {
  const { tokens } = await import('@rainersoft/design-tokens');
  return tokens;
};

// Componente com lazy loading
const TokenComponent = lazy(() => 
  import('./TokenComponent').then(module => ({
    default: module.TokenComponent
  }))
);
```

## 🔗 Links Relacionados

- [07-GUIA_TOKENS_EXPANDIDOS.md](./07-GUIA_TOKENS_EXPANDIDOS.md) - Tokens expandidos
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Guidelines básicas
- [03-ESTRUTURA.md](./03-ESTRUTURA.md) - Estrutura detalhada

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Tokens computados, referências complexas e técnicas avançadas

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 13 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT