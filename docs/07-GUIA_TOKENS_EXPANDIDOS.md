# 07-GUIA_TOKENS_EXPANDIDOS.md - Tokens Expandidos

## 🎯 Visão Geral

Este documento explica o sistema expandido de design tokens da biblioteca `@rainersoft/design-tokens`, incluindo tokens avançados, estados completos e casos de uso complexos.

## 🎨 Sistema de Cores Expandido

### Estrutura Hierárquica

```
primitives/
├── color-palette.json     # Cores base (cyan, gray, etc.)
└── color-extended.json    # Cores adicionais (violet, amber, etc.)

semantics/
├── color-roles.json       # Cores por função
├── color-states.json      # Estados (hover, focus, etc.)
└── color-accessibility.json # Cores de alto contraste

themes/
├── theme-light.json       # Aplicação tema claro
└── theme-dark.json        # Aplicação tema cyberpunk
```

### Cores Base (Primitives)

```json
{
  "cyan": {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#0891b2",
    "600": "#0e7490",
    "700": "#155e75",
    "800": "#164e63",
    "900": "#164e63"
  },
  "violet": {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "900": "#4c1d95"
  },
  "amber": {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "500": "#f59e0b",
    "600": "#d97706",
    "900": "#78350f"
  }
}
```

### Cores Semânticas

```json
{
  "background": {
    "primary": "{primitives.gray.50}",
    "secondary": "{primitives.gray.100}",
    "tertiary": "{primitives.gray.200}",
    "inverse": "{primitives.gray.900}",
    "accent": "{primitives.violet.50}"
  },
  "surface": {
    "primary": "#ffffff",
    "secondary": "#fafafa",
    "elevated": "#ffffff",
    "overlay": "rgba(0, 0, 0, 0.5)"
  },
  "text": {
    "primary": "{primitives.gray.900}",
    "secondary": "{primitives.gray.600}",
    "tertiary": "{primitives.gray.500}",
    "inverse": "{primitives.gray.50}",
    "accent": "{primitives.violet.900}",
    "disabled": "{primitives.gray.400}"
  },
  "border": {
    "primary": "{primitives.gray.200}",
    "secondary": "{primitives.gray.300}",
    "focus": "{primitives.violet.500}",
    "error": "{primitives.red.500}",
    "success": "{primitives.green.500}"
  },
  "brand": {
    "primary": "{primitives.cyan.500}",
    "secondary": "{primitives.violet.500}",
    "accent": "{primitives.amber.500}",
    "gradient": "linear-gradient(135deg, {primitives.cyan.500}, {primitives.violet.500})"
  }
}
```

### Estados Interativos

```json
{
  "interactive": {
    "default": {
      "background": "{semantics.background.primary}",
      "text": "{semantics.text.primary}",
      "border": "{semantics.border.primary}"
    },
    "hover": {
      "background": "{primitives.gray.100}",
      "text": "{semantics.text.primary}",
      "border": "{primitives.gray.300}"
    },
    "active": {
      "background": "{primitives.gray.200}",
      "text": "{semantics.text.primary}",
      "border": "{primitives.gray.400}"
    },
    "focus": {
      "background": "{semantics.background.primary}",
      "text": "{semantics.text.primary}",
      "border": "{semantics.border.focus}",
      "ring": "0 0 0 2px {primitives.violet.200}"
    },
    "disabled": {
      "background": "{primitives.gray.100}",
      "text": "{semantics.text.disabled}",
      "border": "{primitives.gray.200}",
      "opacity": "0.6"
    }
  }
}
```

## 📝 Sistema de Tipografia Expandido

### Font Families

```json
{
  "fontFamily": {
    "sans": ["Inter", "system-ui", "sans-serif"],
    "serif": ["Georgia", "Times New Roman", "serif"],
    "mono": ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
    "display": ["Orbitron", "system-ui", "sans-serif"],
    "body": ["Inter", "system-ui", "sans-serif"],
    "heading": ["Inter", "system-ui", "sans-serif"],
    "ui": ["Inter", "system-ui", "sans-serif"]
  }
}
```

### Escala Tipográfica Completa

```json
{
  "fontSize": {
    "2xs": ["0.625rem", "0.75rem"],    // 10px / 12px
    "xs": ["0.75rem", "1rem"],          // 12px / 16px
    "sm": ["0.875rem", "1.25rem"],      // 14px / 20px
    "base": ["1rem", "1.5rem"],         // 16px / 24px
    "lg": ["1.125rem", "1.75rem"],      // 18px / 28px
    "xl": ["1.25rem", "1.75rem"],       // 20px / 28px
    "2xl": ["1.5rem", "2rem"],          // 24px / 32px
    "3xl": ["1.875rem", "2.25rem"],     // 30px / 36px
    "4xl": ["2.25rem", "2.5rem"],       // 36px / 40px
    "5xl": ["3rem", "1"],                // 48px / 48px
    "6xl": ["3.75rem", "1"],            // 60px / 60px
    "7xl": ["4.5rem", "1"],             // 72px / 72px
    "8xl": ["6rem", "1"],               // 96px / 96px
    "9xl": ["8rem", "1"]                // 128px / 128px
  },
  "fontWeight": {
    "thin": "100",
    "extralight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800",
    "black": "900"
  },
  "lineHeight": {
    "none": "1",
    "tight": "1.25",
    "snug": "1.375",
    "normal": "1.5",
    "relaxed": "1.625",
    "loose": "2"
  }
}
```

### Hierarquia Tipográfica

```json
{
  "typography": {
    "h1": {
      "fontSize": "{primitives.fontSize.4xl}",
      "fontWeight": "{primitives.fontWeight.bold}",
      "lineHeight": "{primitives.lineHeight.tight}",
      "letterSpacing": "-0.025em"
    },
    "h2": {
      "fontSize": "{primitives.fontSize.3xl}",
      "fontWeight": "{primitives.fontWeight.semibold}",
      "lineHeight": "{primitives.lineHeight.tight}"
    },
    "h3": {
      "fontSize": "{primitives.fontSize.2xl}",
      "fontWeight": "{primitives.fontWeight.semibold}",
      "lineHeight": "{primitives.lineHeight.snug}"
    },
    "h4": {
      "fontSize": "{primitives.fontSize.xl}",
      "fontWeight": "{primitives.fontWeight.medium}",
      "lineHeight": "{primitives.lineHeight.snug}"
    },
    "h5": {
      "fontSize": "{primitives.fontSize.lg}",
      "fontWeight": "{primitives.fontWeight.medium}",
      "lineHeight": "{primitives.lineHeight.normal}"
    },
    "h6": {
      "fontSize": "{primitives.fontSize.base}",
      "fontWeight": "{primitives.fontWeight.medium}",
      "lineHeight": "{primitives.lineHeight.normal}"
    },
    "body1": {
      "fontSize": "{primitives.fontSize.base}",
      "fontWeight": "{primitives.fontWeight.normal}",
      "lineHeight": "{primitives.lineHeight.normal}"
    },
    "body2": {
      "fontSize": "{primitives.fontSize.sm}",
      "fontWeight": "{primitives.fontWeight.normal}",
      "lineHeight": "{primitives.lineHeight.normal}"
    },
    "caption": {
      "fontSize": "{primitives.fontSize.xs}",
      "fontWeight": "{primitives.fontWeight.normal}",
      "lineHeight": "{primitives.lineHeight.normal}"
    },
    "overline": {
      "fontSize": "{primitives.fontSize.xs}",
      "fontWeight": "{primitives.fontWeight.medium}",
      "lineHeight": "{primitives.lineHeight.normal}",
      "textTransform": "uppercase"
    }
  }
}
```

## 📏 Espaçamento Avançado

### Escala Estendida

```json
{
  "spacing": {
    "0": "0",
    "px": "1px",
    "0.5": "0.125rem",   // 2px
    "1": "0.25rem",     // 4px
    "1.5": "0.375rem",  // 6px
    "2": "0.5rem",      // 8px
    "2.5": "0.625rem",  // 10px
    "3": "0.75rem",     // 12px
    "3.5": "0.875rem",  // 14px
    "4": "1rem",        // 16px
    "5": "1.25rem",     // 20px
    "6": "1.5rem",      // 24px
    "7": "1.75rem",     // 28px
    "8": "2rem",        // 32px
    "9": "2.25rem",     // 36px
    "10": "2.5rem",     // 40px
    "11": "2.75rem",    // 44px
    "12": "3rem",       // 48px
    "14": "3.5rem",     // 56px
    "16": "4rem",       // 64px
    "20": "5rem",       // 80px
    "24": "6rem",       // 96px
    "28": "7rem",       // 112px
    "32": "8rem",       // 128px
    "36": "9rem",       // 144px
    "40": "10rem",      // 160px
    "44": "11rem",      // 176px
    "48": "12rem",      // 192px
    "52": "13rem",      // 208px
    "56": "14rem",      // 224px
    "60": "15rem",      // 240px
    "64": "16rem",      // 256px
    "72": "18rem",      // 288px
    "80": "20rem",      // 320px
    "96": "24rem"       // 384px
  }
}
```

### Espaçamento Semântico

```json
{
  "spacingSemantic": {
    "component-xs": "{primitives.spacing.1}",    // Padding pequeno
    "component-sm": "{primitives.spacing.2}",    // Cards pequenos
    "component-md": "{primitives.spacing.4}",    // Botões, inputs
    "component-lg": "{primitives.spacing.6}",    // Cards grandes
    "component-xl": "{primitives.spacing.8}",    // Seções
    "layout-xs": "{primitives.spacing.12}",      // Margem pequena
    "layout-sm": "{primitives.spacing.16}",      // Seções
    "layout-md": "{primitives.spacing.24}",      // Containers
    "layout-lg": "{primitives.spacing.32}",      // Layout principal
    "layout-xl": "{primitives.spacing.48}",      // Hero sections
    "section-gap": "{primitives.spacing.20}",    // Entre seções
    "content-gap": "{primitives.spacing.8}",     // Entre elementos
    "grid-gap": "{primitives.spacing.4}"         // Grid gaps
  }
}
```

## 🌑 Sistema de Elevação Avançado

### Sombras Multi-camadas

```json
{
  "elevation": {
    "none": "none",
    "xs": "0 1px 2px rgba(0, 0, 0, 0.05)",
    "sm": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
    "inner": "inset 0 2px 4px rgba(0, 0, 0, 0.06)"
  },
  "elevationDark": {
    "none": "none",
    "xs": "0 1px 2px rgba(0, 0, 0, 0.3)",
    "sm": "0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)",
    "md": "0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
    "lg": "0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)",
    "xl": "0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.3)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.5)",
    "inner": "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
  }
}
```

### Efeitos Neon (Dark Theme)

```json
{
  "neonEffects": {
    "cyan": "0 0 20px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3)",
    "violet": "0 0 20px rgba(125, 0, 255, 0.5), 0 0 40px rgba(125, 0, 255, 0.3)",
    "pink": "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)",
    "green": "0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)",
    "amber": "0 0 20px rgba(255, 193, 7, 0.5), 0 0 40px rgba(255, 193, 7, 0.3)"
  }
}
```

## 🎭 Sistema de Motion

### Animações Padrão

```json
{
  "motion": {
    "duration": {
      "fast": "150ms",
      "normal": "300ms",
      "slow": "500ms",
      "slower": "750ms",
      "slowest": "1000ms"
    },
    "easing": {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "ease-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      "ease-elastic": "cubic-bezier(0.68, -0.6, 0.32, 1.6)"
    },
    "animations": {
      "fade-in": "fadeIn {duration.normal} {easing.ease-out}",
      "fade-out": "fadeOut {duration.normal} {easing.ease-in}",
      "slide-up": "slideUp {duration.normal} {easing.ease-out}",
      "slide-down": "slideDown {duration.normal} {easing.ease-out}",
      "slide-left": "slideLeft {duration.normal} {easing.ease-out}",
      "slide-right": "slideRight {duration.normal} {easing.ease-out}",
      "scale-in": "scaleIn {duration.fast} {easing.ease-bounce}",
      "scale-out": "scaleOut {duration.fast} {easing.ease-in}",
      "rotate-in": "rotateIn {duration.normal} {easing.ease-elastic}",
      "bounce": "bounce {duration.slow} {easing.ease-bounce}",
      "pulse": "pulse {duration.slow} {easing.ease-in-out} infinite",
      "shake": "shake {duration.fast} {easing.ease-in-out}",
      "wiggle": "wiggle {duration.fast} {easing.ease-bounce}"
    }
  }
}
```

### Keyframes

```json
{
  "keyframes": {
    "fadeIn": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    },
    "fadeOut": {
      "0%": { "opacity": "1" },
      "100%": { "opacity": "0" }
    },
    "slideUp": {
      "0%": { "transform": "translateY(20px)", "opacity": "0" },
      "100%": { "transform": "translateY(0)", "opacity": "1" }
    },
    "slideDown": {
      "0%": { "transform": "translateY(-20px)", "opacity": "0" },
      "100%": { "transform": "translateY(0)", "opacity": "1" }
    },
    "scaleIn": {
      "0%": { "transform": "scale(0.9)", "opacity": "0" },
      "100%": { "transform": "scale(1)", "opacity": "1" }
    },
    "bounce": {
      "0%, 20%, 53%, 80%, 100%": { "transform": "translateY(0)" },
      "40%, 43%": { "transform": "translateY(-30px)" },
      "70%": { "transform": "translateY(-15px)" },
      "90%": { "transform": "translateY(-4px)" }
    }
  }
}
```

## ♿ Tokens de Acessibilidade

### Contraste WCAG

```json
{
  "accessibility": {
    "highContrast": {
      "background": "#000000",
      "surface": "#1a1a1a",
      "text": "#ffffff",
      "border": "#ffffff",
      "focus": "#ffff00"
    },
    "reducedMotion": {
      "duration": "0ms",
      "easing": "linear",
      "animations": "none"
    },
    "focusVisible": {
      "outline": "2px solid",
      "outlineColor": "{primitives.violet.500}",
      "outlineOffset": "2px"
    },
    "screenReaderOnly": {
      "position": "absolute",
      "width": "1px",
      "height": "1px",
      "padding": "0",
      "margin": "-1px",
      "overflow": "hidden",
      "clip": "rect(0, 0, 0, 0)",
      "whiteSpace": "nowrap",
      "border": "0"
    }
  }
}
```

## 🎨 Exemplos Práticos

### Botão Completo com Tokens

```typescript
import { tokens } from '@rainersoft/design-tokens';

const Button = ({ variant = 'primary', size = 'md', disabled = false }) => {
  const styles = {
    primary: {
      background: tokens.semantics.colors.brand.primary,
      color: tokens.primitives.gray.white,
      border: `1px solid ${tokens.semantics.colors.brand.primary}`,
      hover: {
        background: tokens.primitives.cyan[600],
        borderColor: tokens.primitives.cyan[600],
      },
      active: {
        background: tokens.primitives.cyan[700],
        borderColor: tokens.primitives.cyan[700],
      },
      focus: {
        boxShadow: `0 0 0 2px ${tokens.primitives.violet[200]}`,
      },
    },
    secondary: {
      background: 'transparent',
      color: tokens.semantics.colors.brand.primary,
      border: `1px solid ${tokens.semantics.colors.brand.primary}`,
      hover: {
        background: tokens.primitives.cyan[50],
      },
      active: {
        background: tokens.primitives.cyan[100],
      },
    },
    sizes: {
      sm: {
        padding: `${tokens.primitives.spacing[2]} ${tokens.primitives.spacing[3]}`,
        fontSize: tokens.primitives.fontSize.sm,
        borderRadius: tokens.primitives.radius.sm,
      },
      md: {
        padding: `${tokens.primitives.spacing[3]} ${tokens.primitives.spacing[4]}`,
        fontSize: tokens.primitives.fontSize.base,
        borderRadius: tokens.primitives.radius.md,
      },
      lg: {
        padding: `${tokens.primitives.spacing[4]} ${tokens.primitives.spacing[6]}`,
        fontSize: tokens.primitives.fontSize.lg,
        borderRadius: tokens.primitives.radius.lg,
      },
    },
  };

  return (
    <button
      style={{
        ...styles[variant],
        ...styles.sizes[size],
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: `all ${tokens.motion.duration.normal} ${tokens.motion.easing.ease-out}`,
      }}
    >
      Click me
    </button>
  );
};
```

### Card com Elevação Responsiva

```typescript
const Card = ({ elevation = 'md' }) => {
  return (
    <div
      style={{
        background: tokens.semantics.colors.surface.primary,
        borderRadius: tokens.primitives.radius.lg,
        padding: tokens.primitives.spacing[6],
        boxShadow: tokens.elevation[elevation],
        border: `1px solid ${tokens.semantics.colors.border.primary}`,
        transition: `all ${tokens.motion.duration.normal} ${tokens.motion.easing.ease-out}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = tokens.elevation.xl;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = tokens.elevation[elevation];
      }}
    >
      <h3 style={{ 
        color: tokens.semantics.colors.text.primary,
        fontSize: tokens.primitives.fontSize.lg,
        fontWeight: tokens.primitives.fontWeight.semibold,
        marginBottom: tokens.primitives.spacing[3]
      }}>
        Card Title
      </h3>
      <p style={{ 
        color: tokens.semantics.colors.text.secondary,
        fontSize: tokens.primitives.fontSize.sm,
        lineHeight: tokens.primitives.lineHeight.relaxed
      }}>
        Card content with proper typography and spacing.
      </p>
    </div>
  );
};
```

## 🔗 Links Relacionados

- [08-TOKENS_AVANCADOS.md](./08-TOKENS_AVANCADOS.md) - Tokens avançados
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Guidelines básicas
- [03-ESTRUTURA.md](./03-ESTRUTURA.md) - Estrutura detalhada

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Sistema expandido com estados completos e acessibilidade

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 3.0.0
**Última Atualização:** 14 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT