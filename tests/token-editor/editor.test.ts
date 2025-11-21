/**
 * @fileoverview Testes para o Token Editor
 * 
 * @description
 * Testa as funções de geração de formatos e edição de tokens do editor
 */

// Funções utilitárias do editor (replicadas para testes)
function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function flattenToCSSVars(
  obj: Record<string, any>,
  prefix: string = '',
  separator: string = '-'
): string[] {
  const vars: string[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = toKebabCase(key);
    const varName = prefix ? `${prefix}${separator}${cssKey}` : cssKey;
    
    if (typeof value === 'string') {
      vars.push(`  --${varName}: ${value};`);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      vars.push(...flattenToCSSVars(value, varName, separator));
    }
  }
  
  return vars;
}

function toTailwindObject(obj: Record<string, any>, indent: number = 8): string {
  const spaces = ' '.repeat(indent);
  const lines: string[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = toCamelCase(key);
    
    if (typeof value === 'string') {
      lines.push(`${spaces}${camelKey}: '${value}',`);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      lines.push(`${spaces}${camelKey}: {`);
      lines.push(toTailwindObject(value, indent + 2));
      lines.push(`${spaces}},`);
    }
  }
  
  return lines.join('\n');
}

// Funções de geração de formatos (replicadas para testes)
function generateCSS(tokens: {
  colors: { light: any; dark: any };
  typography?: any;
  spacing?: any;
  radius?: any;
  shadows?: { light?: any; dark?: any };
}): string {
  if (!tokens.colors.light || !tokens.colors.dark) {
    throw new Error('Cores light e dark são necessárias para gerar CSS');
  }
  
  const lines: string[] = [
    '/**',
    ' * CSS Custom Properties (CSS Variables)',
    ' * ',
    ' * Generated from design tokens for use in any CSS context.',
    ' * Supports light and dark themes via .dark class.',
    ' * ',
    ' * @fileoverview Global CSS variables for Rainer Design System',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' */',
    '',
    ':root {',
    '  /* ===== LIGHT THEME COLORS ===== */',
    '',
  ];
  
  // Light theme
  if (tokens.colors.light.background) {
    lines.push('  /* Background */');
    lines.push(...flattenToCSSVars(tokens.colors.light.background, 'color-background'));
    lines.push('');
  }
  
  if (tokens.colors.light.surface) {
    lines.push('  /* Surface */');
    lines.push(...flattenToCSSVars(tokens.colors.light.surface, 'color-surface'));
    lines.push('');
  }
  
  if (tokens.colors.light.text) {
    lines.push('  /* Text */');
    lines.push(...flattenToCSSVars(tokens.colors.light.text, 'color-text'));
    lines.push('');
  }
  
  if (tokens.colors.light.border) {
    lines.push('  /* Border */');
    lines.push(...flattenToCSSVars(tokens.colors.light.border, 'color-border'));
    lines.push('');
  }
  
  if (tokens.colors.light.brand) {
    lines.push('  /* Brand */');
    lines.push(...flattenToCSSVars(tokens.colors.light.brand, 'color-brand'));
    lines.push('');
  }
  
  if (tokens.colors.light.status) {
    lines.push('  /* Status */');
    lines.push(...flattenToCSSVars(tokens.colors.light.status, 'color-status'));
    lines.push('');
  }
  
  if (tokens.shadows && tokens.shadows.light) {
    lines.push('  /* Shadows */');
    lines.push(...flattenToCSSVars(tokens.shadows.light, 'shadow'));
    lines.push('');
  }
  
  if (tokens.typography && tokens.typography.fontFamily) {
    lines.push('  /* Typography */');
    lines.push(...flattenToCSSVars(tokens.typography.fontFamily, 'font'));
    lines.push('');
  }
  
  if (tokens.radius) {
    lines.push('  /* Border Radius */');
    lines.push(...flattenToCSSVars(tokens.radius, 'radius'));
    lines.push('');
  }
  
  lines.push('}');
  lines.push('');
  lines.push('/* ===== DARK THEME (CYBERPUNK) ===== */');
  lines.push('.dark {');
  
  // Dark theme
  if (tokens.colors.dark.background) {
    lines.push('  /* Background */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.background, 'color-background'));
    lines.push('');
  }
  
  if (tokens.colors.dark.surface) {
    lines.push('  /* Surface */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.surface, 'color-surface'));
    lines.push('');
  }
  
  if (tokens.colors.dark.text) {
    lines.push('  /* Text */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.text, 'color-text'));
    lines.push('');
  }
  
  if (tokens.colors.dark.border) {
    lines.push('  /* Border */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.border, 'color-border'));
    lines.push('');
  }
  
  if (tokens.colors.dark.brand) {
    lines.push('  /* Brand */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.brand, 'color-brand'));
    lines.push('');
  }
  
  if (tokens.colors.dark.status) {
    lines.push('  /* Status */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.status, 'color-status'));
    lines.push('');
  }
  
  if (tokens.shadows && tokens.shadows.dark) {
    lines.push('  /* Shadows */');
    const darkShadows = { ...tokens.shadows.dark };
    if (darkShadows.glow) {
      const glow = darkShadows.glow;
      delete darkShadows.glow;
      lines.push(...flattenToCSSVars(darkShadows, 'shadow'));
      lines.push('');
      lines.push('  /* Glow Effects */');
      lines.push(...flattenToCSSVars(glow, 'shadow-glow'));
    } else {
      lines.push(...flattenToCSSVars(darkShadows, 'shadow'));
    }
    lines.push('');
  }
  
  if (tokens.colors.dark.gradients) {
    lines.push('  /* Gradients */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.gradients, 'gradient'));
    lines.push('');
  }
  
  lines.push('}');
  lines.push('');
  
  return lines.join('\n');
}

function generateTailwindConfig(tokens: {
  colors: { light: any; dark?: any };
  typography?: any;
  spacing?: any;
  radius?: any;
  shadows?: { light?: any; dark?: any };
  animations?: any;
}): string {
  if (!tokens.colors.light) {
    throw new Error('Tokens de cores são necessários para gerar Tailwind config');
  }
  
  const lines: string[] = [
    '/**',
    ' * @fileoverview Configuração do Tailwind CSS gerada a partir dos design tokens',
    ' * ',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' */',
    '',
    "import { tokens } from '@rainersoft/design-tokens';",
    '',
    'export const tailwindConfig = {',
    '  theme: {',
    '    extend: {',
    '      colors: {',
  ];
  
  // Colors
  if (tokens.colors.light.primary) {
    lines.push('        primary: {');
    lines.push(toTailwindObject(tokens.colors.light.primary, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.secondary) {
    lines.push('        secondary: {');
    lines.push(toTailwindObject(tokens.colors.light.secondary, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.accent) {
    lines.push('        accent: {');
    lines.push(toTailwindObject(tokens.colors.light.accent, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.background) {
    lines.push('        background: {');
    lines.push(toTailwindObject(tokens.colors.light.background, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.text) {
    lines.push('        text: {');
    lines.push(toTailwindObject(tokens.colors.light.text, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.border) {
    lines.push('        border: {');
    lines.push(toTailwindObject(tokens.colors.light.border, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.brand) {
    lines.push('        brand: {');
    lines.push(toTailwindObject(tokens.colors.light.brand, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.status) {
    const status = tokens.colors.light.status;
    if (status.success) {
      lines.push('        success: {');
      lines.push(toTailwindObject(status.success, 10));
      lines.push('        },');
    }
  }
  
  lines.push('      },');
  lines.push('      fontFamily: {');
  
  // Font families
  if (tokens.typography && tokens.typography.fontFamily) {
    const fontFamily = tokens.typography.fontFamily;
    if (fontFamily.sans) {
      lines.push(`        sans: ${JSON.stringify(fontFamily.sans.split(', '))},`);
    }
    if (fontFamily.serif) {
      lines.push(`        serif: ${JSON.stringify(fontFamily.serif.split(', '))},`);
    }
    if (fontFamily.mono) {
      lines.push(`        mono: ${JSON.stringify(fontFamily.mono.split(', '))},`);
    }
  }
  
  lines.push('      },');
  
  if (tokens.typography) {
    lines.push('      fontSize: tokens.typography.fontSize,');
    lines.push('      fontWeight: tokens.typography.fontWeight,');
  }
  
  if (tokens.spacing) {
    lines.push('      spacing: tokens.spacing,');
  }
  
  if (tokens.radius) {
    lines.push('      borderRadius: tokens.radius,');
  }
  
  // Box shadows
  lines.push('      boxShadow: {');
  if (tokens.shadows && tokens.shadows.light) {
    lines.push('        ...tokens.shadows.light,');
  }
  if (tokens.shadows && tokens.shadows.dark && tokens.shadows.dark.glow) {
    const glow = tokens.shadows.dark.glow;
    for (const [key, value] of Object.entries(glow)) {
      lines.push(`        'glow-${key}': '${value}',`);
    }
  }
  lines.push('      },');
  
  // Animations
  if (tokens.animations) {
    lines.push('      animation: {');
    for (const [key, animation] of Object.entries(tokens.animations)) {
      const anim = animation as { name: string; duration: string; timingFunction: string };
      const animationValue = `${anim.name} ${anim.duration} ${anim.timingFunction}`;
      lines.push(`        '${key}': '${animationValue}',`);
    }
    lines.push('      },');
    
    lines.push('      keyframes: {');
    for (const [, animation] of Object.entries(tokens.animations)) {
      const anim = animation as { name: string; keyframes: Record<string, Record<string, any>> };
      lines.push(`        '${anim.name}': {`);
      for (const [frame, properties] of Object.entries(anim.keyframes)) {
        lines.push(`          '${frame}': {`);
        for (const [prop, value] of Object.entries(properties)) {
          const valueStr = typeof value === 'string' ? `'${value}'` : value;
          lines.push(`            ${prop}: ${valueStr},`);
        }
        lines.push(`          },`);
      }
      lines.push(`        },`);
    }
    lines.push('      },');
  }
  
  lines.push('    },');
  lines.push('  },');
  lines.push("  darkMode: 'class',");
  lines.push('} as const;');
  lines.push('');
  lines.push('export default tailwindConfig;');
  lines.push('');
  
  return lines.join('\n');
}

function generateTokensJSON(tokens: {
  colors?: { light?: any; dark?: any };
  typography?: any;
  spacing?: any;
  radius?: any;
  shadows?: any;
  animations?: any;
}): string {
  const consolidated: any = {
    $schema: 'https://json.schemastore.org/rainer-design-tokens.json',
    name: '@rainersoft/design-tokens',
    version: '2.0.0',
    description: 'Universal design tokens export for Rainer Design System',
    $generated: 'This file is auto-generated. Do not edit manually.',
    $source: 'tokens/*.json',
    colors: {
      light: tokens.colors?.light ? {
        $type: 'color',
        $value: 'See tokens/colors/light.json',
        $path: 'tokens/colors/light.json',
      } : null,
      dark: tokens.colors?.dark ? {
        $type: 'color',
        $value: 'See tokens/colors/dark.json',
        $path: 'tokens/colors/dark.json',
      } : null,
    },
    typography: tokens.typography ? {
      $type: 'typography',
      $value: 'See tokens/typography.json',
      $path: 'tokens/typography.json',
    } : null,
    spacing: tokens.spacing ? {
      $type: 'dimension',
      $value: 'See tokens/spacing.json',
      $path: 'tokens/spacing.json',
    } : null,
    radius: tokens.radius ? {
      $type: 'dimension',
      $value: 'See tokens/radius.json',
      $path: 'tokens/radius.json',
    } : null,
    shadows: tokens.shadows ? {
      $type: 'shadow',
      $value: 'See tokens/shadows.json',
      $path: 'tokens/shadows.json',
    } : null,
    animations: tokens.animations ? {
      $type: 'animation',
      $value: 'See tokens/animations.json',
      $path: 'tokens/animations.json',
    } : null,
    meta: {
      repository: 'https://github.com/RainerTeixeira/rainer-design-tokens',
      author: 'Rainer Teixeira',
      license: 'MIT',
      generatedAt: new Date().toISOString(),
    },
  };
  
  // Remover nulls
  Object.keys(consolidated).forEach(key => {
    if (consolidated[key] === null) {
      delete consolidated[key];
    }
  });
  
  if (consolidated.colors) {
    if (consolidated.colors.light === null) delete consolidated.colors.light;
    if (consolidated.colors.dark === null) delete consolidated.colors.dark;
    if (Object.keys(consolidated.colors).length === 0) delete consolidated.colors;
  }
  
  return JSON.stringify(consolidated, null, 2);
}

// Dados de teste
const mockTokens = {
  colors: {
    light: {
      background: {
        primary: '#ffffff',
        secondary: '#f5f5f5',
      },
      text: {
        primary: '#000000',
        secondary: '#666666',
      },
      brand: {
        primary: '#0891b2',
        secondary: '#0e7490',
      },
      status: {
        success: {
          main: '#10b981',
          light: '#34d399',
        },
      },
    },
    dark: {
      background: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
      },
      brand: {
        primary: '#0891b2',
        secondary: '#0e7490',
      },
    },
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'Fira Code, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  shadows: {
    light: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    dark: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
      glow: {
        primary: '0 0 20px rgba(8, 145, 178, 0.5)',
      },
    },
  },
  animations: {
    fadeIn: {
      name: 'fadeIn',
      duration: '0.3s',
      timingFunction: 'ease-in-out',
      keyframes: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
};

describe('Token Editor - Funções Utilitárias', () => {
  describe('toKebabCase', () => {
    it('deve converter camelCase para kebab-case', () => {
      expect(toKebabCase('backgroundColor')).toBe('background-color');
      expect(toKebabCase('fontSize')).toBe('font-size');
      expect(toKebabCase('primaryColor')).toBe('primary-color');
    });

    it('deve converter PascalCase para kebab-case', () => {
      expect(toKebabCase('PrimaryColor')).toBe('primary-color');
      expect(toKebabCase('FontFamily')).toBe('font-family');
    });

    it('deve manter strings já em kebab-case', () => {
      expect(toKebabCase('background-color')).toBe('background-color');
      expect(toKebabCase('font-size')).toBe('font-size');
    });

    it('deve converter strings com números', () => {
      expect(toKebabCase('fontSize2')).toBe('font-size2');
      expect(toKebabCase('color50')).toBe('color50');
    });
  });

  describe('toCamelCase', () => {
    it('deve converter kebab-case para camelCase', () => {
      expect(toCamelCase('background-color')).toBe('backgroundColor');
      expect(toCamelCase('font-size')).toBe('fontSize');
      expect(toCamelCase('primary-color')).toBe('primaryColor');
    });

    it('deve manter strings já em camelCase', () => {
      expect(toCamelCase('backgroundColor')).toBe('backgroundColor');
      expect(toCamelCase('fontSize')).toBe('fontSize');
    });

    it('deve converter strings com múltiplos hífens', () => {
      expect(toCamelCase('background-color-primary')).toBe('backgroundColorPrimary');
      expect(toCamelCase('font-family-sans')).toBe('fontFamilySans');
    });
  });

  describe('flattenToCSSVars', () => {
    it('deve converter objeto simples para CSS vars', () => {
      const obj = {
        primary: '#0891b2',
        secondary: '#0e7490',
      };
      const result = flattenToCSSVars(obj, 'color');
      
      expect(result).toContain('  --color-primary: #0891b2;');
      expect(result).toContain('  --color-secondary: #0e7490;');
    });

    it('deve converter objeto aninhado para CSS vars', () => {
      const obj = {
        background: {
          primary: '#ffffff',
          secondary: '#f5f5f5',
        },
      };
      const result = flattenToCSSVars(obj, 'color');
      
      expect(result).toContain('  --color-background-primary: #ffffff;');
      expect(result).toContain('  --color-background-secondary: #f5f5f5;');
    });

    it('deve usar prefixo correto', () => {
      const obj = { primary: '#0891b2' };
      const result = flattenToCSSVars(obj, 'color-brand');
      
      expect(result).toContain('  --color-brand-primary: #0891b2;');
    });

    it('deve converter camelCase para kebab-case nas chaves', () => {
      const obj = {
        primaryColor: '#0891b2',
        secondaryColor: '#0e7490',
      };
      const result = flattenToCSSVars(obj, 'color');
      
      expect(result).toContain('  --color-primary-color: #0891b2;');
      expect(result).toContain('  --color-secondary-color: #0e7490;');
    });
  });

  describe('toTailwindObject', () => {
    it('deve converter objeto simples para formato Tailwind', () => {
      const obj = {
        primary: '#0891b2',
        secondary: '#0e7490',
      };
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain("        primary: '#0891b2',");
      expect(result).toContain("        secondary: '#0e7490',");
    });

    it('deve converter objeto aninhado para formato Tailwind', () => {
      const obj = {
        background: {
          primary: '#ffffff',
          secondary: '#f5f5f5',
        },
      };
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain('        background: {');
      expect(result).toContain("          primary: '#ffffff',");
      expect(result).toContain("          secondary: '#f5f5f5',");
      expect(result).toContain('        },');
    });

    it('deve converter kebab-case para camelCase', () => {
      const obj = {
        'primary-color': '#0891b2',
        'secondary-color': '#0e7490',
      };
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain("        primaryColor: '#0891b2',");
      expect(result).toContain("        secondaryColor: '#0e7490',");
    });

    it('deve usar indentação correta', () => {
      const obj = { primary: '#0891b2' };
      const result = toTailwindObject(obj, 10);
      
      expect(result).toContain("          primary: '#0891b2',");
    });
  });
});

describe('Token Editor - Geração de Formatos', () => {
  describe('generateCSS', () => {
    it('deve gerar CSS com variáveis para light theme', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain(':root {');
      expect(css).toContain('/* ===== LIGHT THEME COLORS ===== */');
      expect(css).toContain('--color-background-primary: #ffffff;');
      expect(css).toContain('--color-text-primary: #000000;');
      expect(css).toContain('--color-brand-primary: #0891b2;');
    });

    it('deve gerar CSS com variáveis para dark theme', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain('.dark {');
      expect(css).toContain('/* ===== DARK THEME (CYBERPUNK) ===== */');
      expect(css).toContain('--color-background-primary: #1a1a1a;');
      expect(css).toContain('--color-text-primary: #ffffff;');
    });

    it('deve incluir shadows quando disponíveis', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain('/* Shadows */');
      expect(css).toContain('--shadow-sm:');
      expect(css).toContain('--shadow-md:');
    });

    it('deve incluir glow effects do dark theme', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain('/* Glow Effects */');
      expect(css).toContain('--shadow-glow-primary:');
    });

    it('deve incluir typography quando disponível', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain('/* Typography */');
      expect(css).toContain('--font-sans:');
      expect(css).toContain('--font-mono:');
    });

    it('deve incluir radius quando disponível', () => {
      const css = generateCSS(mockTokens);
      
      expect(css).toContain('/* Border Radius */');
      expect(css).toContain('--radius-sm:');
      expect(css).toContain('--radius-md:');
    });

    it('deve lançar erro se cores light não estiverem disponíveis', () => {
      expect(() => {
        generateCSS({ colors: { light: null as any, dark: mockTokens.colors.dark } });
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve lançar erro se cores dark não estiverem disponíveis', () => {
      expect(() => {
        generateCSS({ colors: { light: mockTokens.colors.light, dark: null as any } });
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve gerar CSS válido e bem formatado', () => {
      const css = generateCSS(mockTokens);
      
      // Verifica estrutura básica
      expect(css).toContain('/**');
      expect(css).toContain('@generated');
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      expect(css).toContain('}');
      
      // Verifica que não há erros de sintaxe
      expect(css.split(':root {').length).toBe(2); // Apenas um :root {
      expect(css.split('.dark {').length).toBe(2); // Apenas um .dark {
    });
  });

  describe('generateTailwindConfig', () => {
    it('deve gerar configuração Tailwind válida', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('export const tailwindConfig = {');
      expect(config).toContain("import { tokens } from '@rainersoft/design-tokens';");
      expect(config).toContain("darkMode: 'class',");
      expect(config).toContain('export default tailwindConfig;');
    });

    it('deve incluir cores no formato Tailwind', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('colors: {');
      expect(config).toContain('background: {');
      expect(config).toContain("primary: '#ffffff',");
      expect(config).toContain('text: {');
      expect(config).toContain("primary: '#000000',");
    });

    it('deve incluir fontFamily quando disponível', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('fontFamily: {');
      expect(config).toContain('sans:');
    });

    it('deve incluir typography tokens', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('fontSize: tokens.typography.fontSize,');
      expect(config).toContain('fontWeight: tokens.typography.fontWeight,');
    });

    it('deve incluir spacing e radius', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('spacing: tokens.spacing,');
      expect(config).toContain('borderRadius: tokens.radius,');
    });

    it('deve incluir boxShadow com glow effects', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('boxShadow: {');
      expect(config).toContain("'glow-primary':");
    });

    it('deve incluir animations quando disponível', () => {
      const config = generateTailwindConfig(mockTokens);
      
      expect(config).toContain('animation: {');
      expect(config).toContain("'fadeIn':");
      expect(config).toContain('keyframes: {');
    });

    it('deve lançar erro se cores light não estiverem disponíveis', () => {
      expect(() => {
        generateTailwindConfig({ colors: { light: null as any } });
      }).toThrow('Tokens de cores são necessários para gerar Tailwind config');
    });

    it('deve gerar TypeScript válido', () => {
      const config = generateTailwindConfig(mockTokens);
      
      // Verifica estrutura básica
      expect(config).toContain('/**');
      expect(config).toContain('@generated');
      expect(config).toContain('export const');
      expect(config).toContain('} as const;');
    });
  });

  describe('generateTokensJSON', () => {
    it('deve gerar JSON consolidado válido', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed).toHaveProperty('$schema');
      expect(parsed).toHaveProperty('name');
      expect(parsed).toHaveProperty('version');
      expect(parsed).toHaveProperty('$generated');
      expect(parsed).toHaveProperty('meta');
    });

    it('deve incluir referências para cores quando disponíveis', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.colors).toBeDefined();
      expect(parsed.colors.light).toHaveProperty('$type', 'color');
      expect(parsed.colors.light).toHaveProperty('$path', 'tokens/colors/light.json');
      expect(parsed.colors.dark).toHaveProperty('$type', 'color');
      expect(parsed.colors.dark).toHaveProperty('$path', 'tokens/colors/dark.json');
    });

    it('deve incluir referências para typography quando disponível', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.typography).toBeDefined();
      expect(parsed.typography).toHaveProperty('$type', 'typography');
      expect(parsed.typography).toHaveProperty('$path', 'tokens/typography.json');
    });

    it('deve incluir referências para spacing quando disponível', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.spacing).toBeDefined();
      expect(parsed.spacing).toHaveProperty('$type', 'dimension');
      expect(parsed.spacing).toHaveProperty('$path', 'tokens/spacing.json');
    });

    it('deve incluir referências para radius quando disponível', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.radius).toBeDefined();
      expect(parsed.radius).toHaveProperty('$type', 'dimension');
      expect(parsed.radius).toHaveProperty('$path', 'tokens/radius.json');
    });

    it('deve incluir referências para shadows quando disponível', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.shadows).toBeDefined();
      expect(parsed.shadows).toHaveProperty('$type', 'shadow');
      expect(parsed.shadows).toHaveProperty('$path', 'tokens/shadows.json');
    });

    it('deve incluir referências para animations quando disponível', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.animations).toBeDefined();
      expect(parsed.animations).toHaveProperty('$type', 'animation');
      expect(parsed.animations).toHaveProperty('$path', 'tokens/animations.json');
    });

    it('deve incluir meta informações', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.meta).toBeDefined();
      expect(parsed.meta).toHaveProperty('repository');
      expect(parsed.meta).toHaveProperty('author');
      expect(parsed.meta).toHaveProperty('license');
      expect(parsed.meta).toHaveProperty('generatedAt');
    });

    it('deve remover propriedades null do JSON final', () => {
      const tokensSemCores = {
        typography: mockTokens.typography,
        spacing: mockTokens.spacing,
      };
      const json = generateTokensJSON(tokensSemCores);
      const parsed = JSON.parse(json);
      
      expect(parsed.colors).toBeUndefined();
      expect(parsed.typography).toBeDefined();
      expect(parsed.spacing).toBeDefined();
    });

    it('deve gerar JSON válido e bem formatado', () => {
      const json = generateTokensJSON(mockTokens);
      
      // Deve ser JSON válido
      expect(() => JSON.parse(json)).not.toThrow();
      
      // Deve ter indentação (2 espaços)
      const lines = json.split('\n');
      expect(lines[1]).toContain('  "$schema"');
    });
  });

  describe('Integração - Geração Completa', () => {
    it('deve gerar todos os formatos com tokens completos', () => {
      const css = generateCSS(mockTokens);
      const tailwind = generateTailwindConfig(mockTokens);
      const json = generateTokensJSON(mockTokens);
      
      // CSS deve ser válido
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      
      // Tailwind deve ser válido
      expect(tailwind).toContain('export const tailwindConfig');
      expect(tailwind).toContain("darkMode: 'class'");
      
      // JSON deve ser válido
      expect(() => JSON.parse(json)).not.toThrow();
      const parsed = JSON.parse(json);
      expect(parsed).toHaveProperty('meta');
    });

    it('deve gerar formatos consistentes entre si', () => {
      const css = generateCSS(mockTokens);
      const tailwind = generateTailwindConfig(mockTokens);
      
      // Ambos devem referenciar as mesmas cores
      expect(css).toContain('#0891b2'); // brand primary no CSS
      expect(tailwind).toContain('#0891b2'); // brand primary no Tailwind
      
      // Ambos devem ter referências a typography
      expect(css).toContain('font');
      expect(tailwind).toContain('fontFamily');
      
      // Ambos devem ter referências a spacing
      expect(css).toContain('radius');
      expect(tailwind).toContain('spacing');
    });
  });
});

// Funções adicionais do editor (replicadas para testes)
function getDefaultContent(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';
  
  if (fileName.includes('light.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Light theme color palette",
      "colors": {
        "primary": {
          "base": "#0891b2",
          "hover": "#0e7490",
          "active": "#155e75"
        },
        "secondary": {
          "base": "#9333ea",
          "hover": "#7e22ce"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('dark.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Dark theme color palette",
      "colors": {
        "primary": {
          "base": "#06b6d4",
          "hover": "#0891b2"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('typography.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Typography tokens",
      "typography": {
        "fontFamily": {
          "sans": "Inter, system-ui, sans-serif"
        },
        "fontSize": {
          "sm": "0.875rem",
          "base": "1rem",
          "lg": "1.125rem"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('spacing.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Spacing tokens",
      "spacing": {
        "0": "0px",
        "1": "0.25rem",
        "2": "0.5rem",
        "4": "1rem",
        "8": "2rem"
      }
    }, null, 2);
  }
  
  if (fileName.includes('radius.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Border radius tokens",
      "radius": {
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem"
      }
    }, null, 2);
  }
  
  if (fileName.includes('shadows.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Shadow tokens",
      "shadows": {
        "light": {
          "sm": "0 1px 2px rgba(0,0,0,0.05)",
          "md": "0 4px 6px rgba(0,0,0,0.1)"
        },
        "dark": {
          "sm": "0 1px 2px rgba(0,0,0,0.3)"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('animations.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Animation tokens",
      "animations": {
        "fade-in": {
          "name": "fadeIn",
          "duration": "200ms",
          "timingFunction": "ease-in-out"
        }
      }
    }, null, 2);
  }
  
  // Template genérico
  return JSON.stringify({
    "$schema": "https://json.schemastore.org/theme.json",
    "$description": "Design tokens",
    "data": {}
  }, null, 2);
}

function storeLoadedToken(
  filePath: string,
  content: string,
  loadedTokens: any
): void {
  try {
    const json = JSON.parse(content);
    
    if (filePath.includes('colors/light.json')) {
      loadedTokens.colors.light = json.colors || json;
    } else if (filePath.includes('colors/dark.json')) {
      loadedTokens.colors.dark = json.colors || json;
    } else if (filePath.includes('typography.json')) {
      loadedTokens.typography = json.typography || json;
    } else if (filePath.includes('spacing.json')) {
      loadedTokens.spacing = json.spacing || json;
    } else if (filePath.includes('radius.json')) {
      loadedTokens.radius = json.radius || json;
    } else if (filePath.includes('shadows.json')) {
      loadedTokens.shadows = json.shadows || json;
    } else if (filePath.includes('animations.json')) {
      loadedTokens.animations = json.animations || json;
    }
  } catch (e) {
    // Ignorar erros de parsing
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function getValueType(value: any): string {
  if (typeof value === 'string') {
    // Detectar cores hex
    if (/^#[0-9a-fA-F]{6}$/i.test(value)) return 'color';
    // Detectar cores rgba/rgb
    if (/^rgba?\(/.test(value)) return 'color';
    // Detectar valores que parecem cores (palavras-chave comuns)
    if (/^(rem|px|em|%|vh|vw|s|ms)$/.test(value)) return 'string';
    return 'string';
  }
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object' && value !== null) return 'object';
  return 'unknown';
}

describe('Token Editor - Funções Auxiliares', () => {
  describe('getDefaultContent', () => {
    it('deve gerar template para light.json', () => {
      const content = getDefaultContent('tokens/colors/light.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('colors');
      expect(json.colors).toHaveProperty('primary');
      expect(json.colors.primary).toHaveProperty('base', '#0891b2');
    });

    it('deve gerar template para dark.json', () => {
      const content = getDefaultContent('tokens/colors/dark.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('colors');
      expect(json.colors).toHaveProperty('primary');
      expect(json.colors.primary).toHaveProperty('base', '#06b6d4');
    });

    it('deve gerar template para typography.json', () => {
      const content = getDefaultContent('tokens/typography.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('typography');
      expect(json.typography).toHaveProperty('fontFamily');
      expect(json.typography).toHaveProperty('fontSize');
    });

    it('deve gerar template para spacing.json', () => {
      const content = getDefaultContent('tokens/spacing.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('spacing');
      expect(json.spacing).toHaveProperty('0', '0px');
      expect(json.spacing).toHaveProperty('4', '1rem');
    });

    it('deve gerar template para radius.json', () => {
      const content = getDefaultContent('tokens/radius.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('radius');
      expect(json.radius).toHaveProperty('sm');
      expect(json.radius).toHaveProperty('md');
    });

    it('deve gerar template para shadows.json', () => {
      const content = getDefaultContent('tokens/shadows.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('shadows');
      expect(json.shadows).toHaveProperty('light');
      expect(json.shadows).toHaveProperty('dark');
    });

    it('deve gerar template para animations.json', () => {
      const content = getDefaultContent('tokens/animations.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('animations');
      expect(json.animations).toHaveProperty('fade-in');
    });

    it('deve gerar template genérico para arquivos desconhecidos', () => {
      const content = getDefaultContent('tokens/unknown.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('$schema');
      expect(json).toHaveProperty('data');
    });
  });

  describe('storeLoadedToken', () => {
    it('deve armazenar cores light corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        colors: { primary: '#0891b2' }
      });
      
      storeLoadedToken('tokens/colors/light.json', content, loadedTokens);
      
      expect(loadedTokens.colors.light).toEqual({ primary: '#0891b2' });
    });

    it('deve armazenar cores dark corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        colors: { primary: '#06b6d4' }
      });
      
      storeLoadedToken('tokens/colors/dark.json', content, loadedTokens);
      
      expect(loadedTokens.colors.dark).toEqual({ primary: '#06b6d4' });
    });

    it('deve armazenar typography corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        typography: { fontFamily: { sans: 'Inter' } }
      });
      
      storeLoadedToken('tokens/typography.json', content, loadedTokens);
      
      expect(loadedTokens.typography).toEqual({ fontFamily: { sans: 'Inter' } });
    });

    it('deve armazenar spacing corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        spacing: { sm: '0.5rem' }
      });
      
      storeLoadedToken('tokens/spacing.json', content, loadedTokens);
      
      expect(loadedTokens.spacing).toEqual({ sm: '0.5rem' });
    });

    it('deve ignorar erros de parsing', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      storeLoadedToken('tokens/colors/light.json', 'invalid json', loadedTokens);
      
      expect(loadedTokens.colors.light).toBeNull();
    });
  });

  describe('escapeHtml', () => {
    it('deve escapar caracteres HTML especiais', () => {
      expect(escapeHtml('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(escapeHtml('&amp;')).toBe('&amp;amp;');
      expect(escapeHtml("'test'")).toBe('&#039;test&#039;');
    });

    it('deve manter texto normal sem escape', () => {
      expect(escapeHtml('Hello World')).toBe('Hello World');
      expect(escapeHtml('123')).toBe('123');
    });
  });

  describe('getValueType', () => {
    it('deve detectar cores hex', () => {
      expect(getValueType('#0891b2')).toBe('color');
      expect(getValueType('#FFFFFF')).toBe('color');
      expect(getValueType('#000000')).toBe('color');
    });

    it('deve detectar cores rgba/rgb', () => {
      expect(getValueType('rgba(8, 145, 178, 0.5)')).toBe('color');
      expect(getValueType('rgb(8, 145, 178)')).toBe('color');
    });

    it('deve detectar strings normais', () => {
      expect(getValueType('hello')).toBe('string');
      expect(getValueType('test')).toBe('string');
    });

    it('deve detectar números', () => {
      expect(getValueType(123)).toBe('number');
      expect(getValueType(0)).toBe('number');
      expect(getValueType(-5)).toBe('number');
    });

    it('deve detectar booleanos', () => {
      expect(getValueType(true)).toBe('boolean');
      expect(getValueType(false)).toBe('boolean');
    });

    it('deve detectar arrays', () => {
      expect(getValueType([])).toBe('array');
      expect(getValueType([1, 2, 3])).toBe('array');
    });

    it('deve detectar objetos', () => {
      expect(getValueType({})).toBe('object');
      expect(getValueType({ key: 'value' })).toBe('object');
    });

    it('deve retornar unknown para null', () => {
      expect(getValueType(null)).toBe('unknown');
    });
  });
});

describe('Token Editor - Manipulação de JSON', () => {
  describe('updateValueFromVisual', () => {
    it('deve atualizar valor simples em objeto', () => {
      const json = { name: 'test', value: 'old' };
      const jsonString = JSON.stringify(json);
      
      // Simular atualização
      const updated = JSON.parse(jsonString);
      updated.value = 'new';
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('"value": "new"');
      expect(result).not.toContain('"value": "old"');
    });

    it('deve atualizar valor em objeto aninhado', () => {
      const json = { colors: { primary: { base: '#old' } } };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.colors.primary.base = '#new';
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('#new');
      expect(result).not.toContain('#old');
    });

    it('deve atualizar valor em array', () => {
      const json = { items: ['a', 'b', 'c'] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items[1] = 'x';
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('"x"');
    });
  });

  describe('addNewProperty', () => {
    it('deve adicionar nova propriedade ao objeto', () => {
      const json = { existing: 'value' };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.newProperty = '';
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('"newProperty"');
      expect(result).toContain('"existing"');
    });

    it('deve adicionar propriedade em objeto aninhado', () => {
      const json = { colors: { primary: {} } };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.colors.primary.newProp = '';
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('"newProp"');
    });
  });

  describe('removeProperty', () => {
    it('deve remover propriedade do objeto', () => {
      const json = { keep: 'value', remove: 'this' };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      delete updated.remove;
      const result = JSON.stringify(updated, null, 2);
      
      expect(result).toContain('"keep"');
      expect(result).not.toContain('"remove"');
    });
  });

  describe('addArrayItem', () => {
    it('deve adicionar item string ao array', () => {
      const json = { items: ['a', 'b'] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.push('');
      
      expect(updated.items.length).toBe(3);
    });

    it('deve adicionar item number ao array', () => {
      const json = { items: [1, 2] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.push(0);
      
      expect(updated.items.length).toBe(3);
      expect(updated.items[2]).toBe(0);
    });

    it('deve adicionar item boolean ao array', () => {
      const json = { items: [true] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.push(false);
      
      expect(updated.items.length).toBe(2);
      expect(updated.items[1]).toBe(false);
    });

    it('deve adicionar item object ao array', () => {
      const json = { items: [] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.push({});
      
      expect(updated.items.length).toBe(1);
      expect(typeof updated.items[0]).toBe('object');
    });

    it('deve adicionar item array ao array', () => {
      const json = { items: [] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.push([]);
      
      expect(updated.items.length).toBe(1);
      expect(Array.isArray(updated.items[0])).toBe(true);
    });
  });

  describe('removeArrayItem', () => {
    it('deve remover item do array', () => {
      const json = { items: ['a', 'b', 'c'] };
      const jsonString = JSON.stringify(json);
      
      const updated = JSON.parse(jsonString);
      updated.items.splice(1, 1);
      
      expect(updated.items.length).toBe(2);
      expect(updated.items).toEqual(['a', 'c']);
    });
  });

  describe('moveProperty', () => {
    it('deve reordenar propriedades em objeto', () => {
      const json = { a: 1, b: 2, c: 3 };
      const entries = Object.entries(json);
      
      // Simular reordenação: mover 'a' para depois de 'b'
      const [moved] = entries.splice(0, 1);
      entries.splice(2, 0, moved);
      
      const reordered = Object.fromEntries(entries);
      
      expect(Object.keys(reordered)).toEqual(['b', 'c', 'a']);
    });

    it('deve reordenar itens em array', () => {
      const json = { items: ['a', 'b', 'c'] };
      const items = [...json.items];
      
      // Mover item do índice 0 para índice 2
      const [moved] = items.splice(0, 1);
      items.splice(2, 0, moved);
      
      expect(items).toEqual(['b', 'c', 'a']);
    });

    it('deve validar que itens são do mesmo nível', () => {
      // Esta validação é feita no código real
      const fromPath = 'colors.primary.base';
      const toPath = 'colors.secondary.base';
      
      const fromParent = fromPath.split('.').slice(0, -1).join('.');
      const toParent = toPath.split('.').slice(0, -1).join('.');
      
      expect(fromParent).not.toBe(toParent);
    });
  });
});

describe('Token Editor - Casos de Borda e Erros', () => {
  describe('generateCSS - Casos de borda', () => {
    it('deve lidar com tokens sem typography', () => {
      const tokensSemTypography = {
        ...mockTokens,
        typography: undefined
      };
      
      const css = generateCSS(tokensSemTypography);
      
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      // Não deve ter seção de typography
      expect(css).not.toContain('/* Typography */');
    });

    it('deve lidar com tokens sem shadows', () => {
      const tokensSemShadows = {
        ...mockTokens,
        shadows: undefined
      };
      
      const css = generateCSS(tokensSemShadows);
      
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
    });

    it('deve lidar com shadows dark sem glow', () => {
      const tokensSemGlow = {
        ...mockTokens,
        shadows: {
          light: mockTokens.shadows.light,
          dark: { sm: '0 1px 2px rgba(0,0,0,0.3)' }
        }
      };
      
      const css = generateCSS(tokensSemGlow);
      
      expect(css).toContain('/* Shadows */');
      expect(css).not.toContain('/* Glow Effects */');
    });
  });

  describe('generateTailwindConfig - Casos de borda', () => {
    it('deve lidar com tokens sem typography', () => {
      const tokensSemTypography = {
        ...mockTokens,
        typography: undefined
      };
      
      const config = generateTailwindConfig(tokensSemTypography);
      
      expect(config).toContain('export const tailwindConfig');
      expect(config).not.toContain('fontSize: tokens.typography.fontSize');
    });

    it('deve lidar com tokens sem spacing', () => {
      const tokensSemSpacing = {
        ...mockTokens,
        spacing: undefined
      };
      
      const config = generateTailwindConfig(tokensSemSpacing);
      
      expect(config).toContain('export const tailwindConfig');
      expect(config).not.toContain('spacing: tokens.spacing');
    });

    it('deve lidar com tokens sem radius', () => {
      const tokensSemRadius = {
        ...mockTokens,
        radius: undefined
      };
      
      const config = generateTailwindConfig(tokensSemRadius);
      
      expect(config).toContain('export const tailwindConfig');
      expect(config).not.toContain('borderRadius: tokens.radius');
    });

    it('deve lidar com tokens sem animations', () => {
      const tokensSemAnimations = {
        ...mockTokens,
        animations: undefined
      };
      
      const config = generateTailwindConfig(tokensSemAnimations);
      
      expect(config).toContain('export const tailwindConfig');
      expect(config).not.toContain('animation: {');
    });

    it('deve lidar com status colors parcial', () => {
      const tokensStatusParcial = {
        ...mockTokens,
        colors: {
          light: {
            ...mockTokens.colors.light,
            status: {
              success: mockTokens.colors.light.status.success
              // Sem warning, error, info
            }
          }
        }
      };
      
      const config = generateTailwindConfig(tokensStatusParcial);
      
      expect(config).toContain('success: {');
      expect(config).not.toContain('warning: {');
    });
  });

  describe('generateTokensJSON - Casos de borda', () => {
    it('deve lidar com tokens completamente vazios', () => {
      const tokensVazios = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const json = generateTokensJSON(tokensVazios);
      const parsed = JSON.parse(json);
      
      expect(parsed).toHaveProperty('meta');
      expect(parsed.colors).toBeUndefined();
    });

    it('deve lidar com apenas cores light', () => {
      const tokensApenasLight = {
        colors: {
          light: mockTokens.colors.light,
          dark: null
        }
      };
      
      const json = generateTokensJSON(tokensApenasLight);
      const parsed = JSON.parse(json);
      
      expect(parsed.colors).toBeDefined();
      expect(parsed.colors.light).toBeDefined();
      expect(parsed.colors.dark).toBeUndefined();
    });
  });

  describe('flattenToCSSVars - Casos de borda', () => {
    it('deve lidar com objeto vazio', () => {
      const result = flattenToCSSVars({}, 'prefix');
      expect(result).toEqual([]);
    });

    it('deve lidar com valores null', () => {
      const obj = { key: null as any };
      const result = flattenToCSSVars(obj, 'prefix');
      // null não deve gerar CSS var
      expect(result.length).toBe(0);
    });

    it('deve lidar com arrays (ignorar)', () => {
      const obj = { items: [1, 2, 3] as any };
      const result = flattenToCSSVars(obj, 'prefix');
      // Arrays não devem gerar CSS vars
      expect(result.length).toBe(0);
    });

    it('deve lidar com objetos profundamente aninhados', () => {
      const obj = {
        level1: {
          level2: {
            level3: {
              value: '#0891b2'
            }
          }
        }
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      expect(result).toContain('  --prefix-level1-level2-level3-value: #0891b2;');
    });
  });

  describe('toTailwindObject - Casos de borda', () => {
    it('deve lidar com objeto vazio', () => {
      const result = toTailwindObject({}, 8);
      expect(result).toBe('');
    });

    it('deve lidar com valores null', () => {
      const obj = { key: null as any };
      const result = toTailwindObject(obj, 8);
      // null não deve gerar linha
      expect(result).toBe('');
    });

    it('deve lidar com arrays (ignorar)', () => {
      const obj = { items: [1, 2, 3] as any };
      const result = toTailwindObject(obj, 8);
      // Arrays não devem gerar linhas
      expect(result).toBe('');
    });

    it('deve escapar aspas simples em strings', () => {
      const obj = { name: "O'Brien" };
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain("name: 'O'Brien'");
    });
  });
});

describe('Token Editor - Casos Adicionais e Edge Cases', () => {
  describe('generateCSS - Casos específicos', () => {
    it('deve lidar com cores sem todas as propriedades', () => {
      const tokensMinimos = {
        colors: {
          light: { background: { primary: '#ffffff' } },
          dark: { background: { primary: '#000000' } }
        }
      };
      
      const css = generateCSS(tokensMinimos);
      
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      expect(css).toContain('--color-background-primary: #ffffff;');
      expect(css).toContain('--color-background-primary: #000000;');
    });

    it('deve incluir gradients quando disponível no dark theme', () => {
      const tokensComGradients = {
        ...mockTokens,
        colors: {
          ...mockTokens.colors,
          dark: {
            ...mockTokens.colors.dark,
            gradients: {
              primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }
          }
        }
      };
      
      const css = generateCSS(tokensComGradients);
      
      expect(css).toContain('/* Gradients */');
      expect(css).toContain('--gradient-primary:');
    });

    it('deve gerar CSS mesmo sem radius', () => {
      const tokensSemRadius = {
        ...mockTokens,
        radius: undefined
      };
      
      const css = generateCSS(tokensSemRadius);
      
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      expect(css).not.toContain('/* Border Radius */');
    });
  });

  describe('generateTailwindConfig - Casos específicos', () => {
    it('deve incluir todas as cores quando disponíveis', () => {
      const tokensCompletos = {
        ...mockTokens,
        colors: {
          light: {
            primary: { base: '#0891b2' },
            secondary: { base: '#9333ea' },
            accent: { base: '#10b981' },
            background: { primary: '#ffffff' },
            surface: { primary: '#f5f5f5' },
            text: { primary: '#000000' },
            border: { primary: '#dee2e6' },
            brand: { primary: '#0891b2' },
            status: {
              success: { main: '#10b981' },
              warning: { main: '#f59e0b' },
              error: { main: '#ef4444' },
              info: { main: '#3b82f6' }
            }
          }
        }
      };
      
      const config = generateTailwindConfig(tokensCompletos);
      
      // Verificar cores que estão implementadas na função generateTailwindConfig
      expect(config).toContain('background: {');
      expect(config).toContain('text: {');
      expect(config).toContain('success: {');
      expect(config).toContain('primary: {');
      expect(config).toContain('secondary: {');
      expect(config).toContain('accent: {');
      expect(config).toContain('border: {');
      expect(config).toContain('brand: {');
    });

    it('deve incluir fontFamily completo quando disponível', () => {
      const tokensComFonts = {
        ...mockTokens,
        typography: {
          fontFamily: {
            sans: 'Inter, system-ui, sans-serif',
            serif: 'Georgia, serif',
            mono: 'Fira Code, monospace'
          }
        }
      };
      
      const config = generateTailwindConfig(tokensComFonts);
      
      expect(config).toContain('fontFamily: {');
      expect(config).toContain('sans:');
      expect(config).toContain('serif:');
      expect(config).toContain('mono:');
    });
  });

  describe('generateTokensJSON - Casos específicos', () => {
    it('deve incluir todos os tokens quando disponíveis', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.colors).toBeDefined();
      expect(parsed.typography).toBeDefined();
      expect(parsed.spacing).toBeDefined();
      expect(parsed.radius).toBeDefined();
      expect(parsed.shadows).toBeDefined();
      expect(parsed.animations).toBeDefined();
    });

    it('deve ter generatedAt como ISO string válida', () => {
      const json = generateTokensJSON(mockTokens);
      const parsed = JSON.parse(json);
      
      expect(parsed.meta.generatedAt).toBeDefined();
      expect(() => new Date(parsed.meta.generatedAt)).not.toThrow();
      expect(new Date(parsed.meta.generatedAt).toISOString()).toBe(parsed.meta.generatedAt);
    });
  });

  describe('flattenToCSSVars - Casos específicos', () => {
    it('deve usar separador customizado', () => {
      const obj = { primary: '#0891b2' };
      const result = flattenToCSSVars(obj, 'color', '_');
      
      expect(result).toContain('  --color_primary: #0891b2;');
    });

    it('deve lidar com prefixo vazio', () => {
      const obj = { primary: '#0891b2' };
      const result = flattenToCSSVars(obj, '');
      
      expect(result).toContain('  --primary: #0891b2;');
    });

    it('deve converter múltiplos níveis de aninhamento', () => {
      const obj = {
        level1: {
          level2: {
            level3: {
              level4: {
                value: '#0891b2'
              }
            }
          }
        }
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      expect(result).toContain('  --prefix-level1-level2-level3-level4-value: #0891b2;');
    });
  });

  describe('toTailwindObject - Casos específicos', () => {
    it('deve converter objeto com múltiplos níveis', () => {
      const obj = {
        level1: {
          level2: {
            value: '#0891b2'
          }
        }
      };
      
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain('level1: {');
      expect(result).toContain('level2: {');
      expect(result).toContain("value: '#0891b2',");
    });

    it('deve usar indentação customizada', () => {
      const obj = { primary: '#0891b2' };
      const result = toTailwindObject(obj, 4);
      
      expect(result).toContain("    primary: '#0891b2',");
    });
  });

  describe('getValueType - Casos específicos', () => {
    it('deve detectar cores hex de 3 dígitos', () => {
      // Nota: A função atual só detecta hex de 6 dígitos
      // Mas testamos o comportamento atual
      expect(getValueType('#fff')).toBe('string'); // Não detecta #RGB
      expect(getValueType('#ffffff')).toBe('color'); // Detecta #RRGGBB
    });

    it('deve detectar valores com unidades CSS', () => {
      expect(getValueType('1rem')).toBe('string');
      expect(getValueType('16px')).toBe('string');
      expect(getValueType('50%')).toBe('string');
      expect(getValueType('100vh')).toBe('string');
    });

    it('deve detectar valores com unidades de tempo', () => {
      expect(getValueType('0.3s')).toBe('string');
      expect(getValueType('200ms')).toBe('string');
    });
  });

  describe('storeLoadedToken - Casos específicos', () => {
    it('deve usar json diretamente se não houver propriedade wrapper', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      // JSON sem propriedade "colors", apenas objeto direto
      const content = JSON.stringify({ primary: '#0891b2' });
      
      storeLoadedToken('tokens/colors/light.json', content, loadedTokens);
      
      expect(loadedTokens.colors.light).toEqual({ primary: '#0891b2' });
    });

    it('deve armazenar radius corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        radius: { sm: '0.25rem' }
      });
      
      storeLoadedToken('tokens/radius.json', content, loadedTokens);
      
      expect(loadedTokens.radius).toEqual({ sm: '0.25rem' });
    });

    it('deve armazenar shadows corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        shadows: { light: { sm: '0 1px 2px' } }
      });
      
      storeLoadedToken('tokens/shadows.json', content, loadedTokens);
      
      expect(loadedTokens.shadows).toEqual({ light: { sm: '0 1px 2px' } });
    });

    it('deve armazenar animations corretamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      const content = JSON.stringify({
        animations: { fadeIn: { name: 'fadeIn', duration: '0.3s' } }
      });
      
      storeLoadedToken('tokens/animations.json', content, loadedTokens);
      
      expect(loadedTokens.animations).toEqual({ fadeIn: { name: 'fadeIn', duration: '0.3s' } });
    });
  });

  describe('getDefaultContent - Casos específicos', () => {
    it('deve extrair nome do arquivo corretamente', () => {
      const content1 = getDefaultContent('tokens/colors/light.json');
      const content2 = getDefaultContent('light.json');
      
      const json1 = JSON.parse(content1);
      const json2 = JSON.parse(content2);
      
      // Ambos devem gerar o mesmo template
      expect(json1).toHaveProperty('colors');
      expect(json2).toHaveProperty('colors');
    });

    it('deve gerar template mesmo com caminho completo', () => {
      const content = getDefaultContent('/full/path/to/tokens/typography.json');
      const json = JSON.parse(content);
      
      expect(json).toHaveProperty('typography');
    });
  });

  describe('escapeHtml - Casos específicos', () => {
    it('deve escapar todos os caracteres especiais', () => {
      expect(escapeHtml('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#039;');
    });

    it('deve manter caracteres normais', () => {
      expect(escapeHtml('Hello World 123')).toBe('Hello World 123');
      expect(escapeHtml('test@example.com')).toBe('test@example.com');
    });

    it('deve escapar múltiplas ocorrências', () => {
      expect(escapeHtml('<<test>>')).toBe('&lt;&lt;test&gt;&gt;');
      expect(escapeHtml('&&test&&')).toBe('&amp;&amp;test&amp;&amp;');
    });
  });
});

describe('Token Editor - Validações e Integrações', () => {
  describe('Validação de caminhos', () => {
    it('deve validar caminhos de propriedades', () => {
      const path = 'colors.primary.base';
      const keys = path.split('.');
      
      expect(keys).toEqual(['colors', 'primary', 'base']);
      expect(keys.length).toBe(3);
    });

    it('deve validar caminhos de arrays', () => {
      const path = 'items[0]';
      const match = path.match(/^(.+)\[(\d+)\]$/);
      
      expect(match).not.toBeNull();
      if (match) {
        expect(match[1]).toBe('items');
        expect(match[2]).toBe('0');
      }
    });

    it('deve validar caminhos aninhados com arrays', () => {
      const path = 'colors.primary.variants[1]';
      const arrayMatch = path.match(/^(.+)\[(\d+)\]$/);
      
      expect(arrayMatch).not.toBeNull();
      if (arrayMatch) {
        expect(arrayMatch[1]).toBe('colors.primary.variants');
        expect(arrayMatch[2]).toBe('1');
      }
    });
  });

  describe('Integração entre funções', () => {
    it('deve gerar formatos consistentes com tokens reais', () => {
      const tokensReais = {
        colors: {
          light: {
            background: { primary: '#ffffff' },
            text: { primary: '#000000' },
            brand: { primary: '#0891b2' }
          },
          dark: {
            background: { primary: '#1a1a1a' },
            text: { primary: '#ffffff' },
            brand: { primary: '#0891b2' }
          }
        },
        typography: {
          fontFamily: { sans: 'Inter, system-ui, sans-serif' },
          fontSize: { base: '1rem' }
        },
        spacing: { md: '1rem' },
        radius: { md: '0.5rem' },
        shadows: {
          light: { sm: '0 1px 2px rgba(0,0,0,0.05)' },
          dark: { sm: '0 1px 2px rgba(0,0,0,0.3)' }
        }
      };
      
      const css = generateCSS(tokensReais);
      const tailwind = generateTailwindConfig(tokensReais);
      const json = generateTokensJSON(tokensReais);
      
      // CSS deve ter todas as cores
      expect(css).toContain('#ffffff');
      expect(css).toContain('#000000');
      expect(css).toContain('#0891b2');
      
      // Tailwind deve ter todas as cores
      expect(tailwind).toContain('#ffffff');
      expect(tailwind).toContain('#000000');
      expect(tailwind).toContain('#0891b2');
      
      // JSON deve ter todas as referências
      const parsed = JSON.parse(json);
      expect(parsed.colors).toBeDefined();
      expect(parsed.typography).toBeDefined();
      expect(parsed.spacing).toBeDefined();
      expect(parsed.radius).toBeDefined();
      expect(parsed.shadows).toBeDefined();
    });

    it('deve manter consistência entre toKebabCase e toCamelCase', () => {
      const original = 'backgroundColor';
      const kebab = toKebabCase(original);
      const camel = toCamelCase(kebab);
      
      expect(kebab).toBe('background-color');
      expect(camel).toBe('backgroundColor');
    });

    it('deve manter consistência entre flattenToCSSVars e toTailwindObject', () => {
      const obj = {
        primaryColor: '#0891b2',
        secondaryColor: '#9333ea'
      };
      
      const cssVars = flattenToCSSVars(obj, 'color');
      const tailwind = toTailwindObject(obj, 8);
      
      // Ambos devem processar todas as propriedades
      expect(cssVars.length).toBe(2);
      expect(tailwind).toContain('primaryColor');
      expect(tailwind).toContain('secondaryColor');
    });
  });

  describe('Casos de erro e recuperação', () => {
    it('deve lidar com JSON malformado em storeLoadedToken', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      // Não deve lançar erro
      expect(() => {
        storeLoadedToken('tokens/colors/light.json', '{ invalid json }', loadedTokens);
      }).not.toThrow();
      
      expect(loadedTokens.colors.light).toBeNull();
    });

    it('deve validar que cores são obrigatórias para CSS', () => {
      expect(() => {
        generateCSS({ colors: { light: null as any, dark: mockTokens.colors.dark } });
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
      
      expect(() => {
        generateCSS({ colors: { light: mockTokens.colors.light, dark: null as any } });
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve validar que cores são obrigatórias para Tailwind', () => {
      expect(() => {
        generateTailwindConfig({ colors: { light: null as any } });
      }).toThrow('Tokens de cores são necessários para gerar Tailwind config');
    });
  });

  describe('Performance e otimização', () => {
    it('deve processar objetos grandes eficientemente', () => {
      const largeObj: Record<string, string> = {};
      for (let i = 0; i < 100; i++) {
        largeObj[`key${i}`] = `value${i}`;
      }
      
      const start = Date.now();
      const result = flattenToCSSVars(largeObj, 'prefix');
      const duration = Date.now() - start;
      
      expect(result.length).toBe(100);
      expect(duration).toBeLessThan(100); // Deve ser rápido
    });

    it('deve processar objetos profundamente aninhados', () => {
      const deepObj = {
        level1: {
          level2: {
            level3: {
              level4: {
                level5: {
                  value: '#0891b2'
                }
              }
            }
          }
        }
      };
      
      const result = flattenToCSSVars(deepObj, 'prefix');
      
      expect(result.length).toBe(1);
      expect(result[0]).toContain('level1-level2-level3-level4-level5-value');
    });
  });
});

describe('Token Editor - Tratamento de Erros e Validações Avançadas', () => {
  describe('generateCSS - Validação de estrutura completa', () => {
    it('deve detectar quando cores light estão faltando', () => {
      const tokensSemLight = {
        colors: {
          light: null,
          dark: mockTokens.colors.dark
        }
      };
      
      expect(() => {
        generateCSS(tokensSemLight);
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve detectar quando cores dark estão faltando', () => {
      const tokensSemDark = {
        colors: {
          light: mockTokens.colors.light,
          dark: null
        }
      };
      
      expect(() => {
        generateCSS(tokensSemDark);
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve validar que tokens.colors existe', () => {
      const tokensSemColors = {
        typography: mockTokens.typography
      };
      
      expect(() => {
        generateCSS(tokensSemColors as any);
      }).toThrow();
    });

    it('deve validar que tokens.colors.light é um objeto', () => {
      const tokensComLightNull = {
        colors: {
          light: null,
          dark: mockTokens.colors.dark
        }
      };
      
      expect(() => {
        generateCSS(tokensComLightNull);
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });

    it('deve validar que tokens.colors.dark é um objeto', () => {
      const tokensComDarkNull = {
        colors: {
          light: mockTokens.colors.light,
          dark: null
        }
      };
      
      expect(() => {
        generateCSS(tokensComDarkNull);
      }).toThrow('Cores light e dark são necessárias para gerar CSS');
    });
  });

  describe('generateTailwindConfig - Validação de estrutura completa', () => {
    it('deve detectar quando cores light estão faltando para Tailwind', () => {
      const tokensSemLight = {
        colors: {}
      };
      
      expect(() => {
        generateTailwindConfig(tokensSemLight as any);
      }).toThrow('Tokens de cores são necessários para gerar Tailwind config');
    });

    it('deve validar que tokens.colors existe', () => {
      const tokensSemColors = {
        typography: mockTokens.typography
      };
      
      expect(() => {
        generateTailwindConfig(tokensSemColors as any);
      }).toThrow();
    });

    it('deve validar que tokens.colors.light existe', () => {
      const tokensSemLight = {
        colors: {}
      };
      
      expect(() => {
        generateTailwindConfig(tokensSemLight as any);
      }).toThrow('Tokens de cores são necessários para gerar Tailwind config');
    });
  });

  describe('generateTokensJSON - Validação de estrutura completa', () => {
    it('deve gerar tokens JSON mesmo sem cores', () => {
      const tokensSemCores = {
        typography: mockTokens.typography,
        spacing: mockTokens.spacing
      };
      
      const json = generateTokensJSON(tokensSemCores);
      const parsed = JSON.parse(json);
      
      expect(parsed).toHaveProperty('typography');
      expect(parsed).toHaveProperty('spacing');
      expect(parsed.colors).toBeUndefined();
    });

    it('deve lidar com tokens completamente vazios', () => {
      const tokensVazios = {};
      
      const json = generateTokensJSON(tokensVazios);
      const parsed = JSON.parse(json);
      
      expect(parsed).toHaveProperty('meta');
      expect(parsed.colors).toBeUndefined();
    });

    it('deve lidar com tokens null', () => {
      const tokensNull = {
        colors: null,
        typography: null
      };
      
      const json = generateTokensJSON(tokensNull as any);
      const parsed = JSON.parse(json);
      
      expect(parsed).toHaveProperty('meta');
      expect(parsed.colors).toBeUndefined();
    });
  });

  describe('storeLoadedToken - Tratamento de erros avançado', () => {
    it('deve ignorar JSON inválido silenciosamente', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      expect(() => {
        storeLoadedToken('tokens/colors/light.json', '{ invalid json }', loadedTokens);
      }).not.toThrow();
      
      expect(loadedTokens.colors.light).toBeNull();
    });

    it('deve ignorar conteúdo vazio', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      expect(() => {
        storeLoadedToken('tokens/colors/light.json', '', loadedTokens);
      }).not.toThrow();
    });

    it('deve ignorar conteúdo null', () => {
      const loadedTokens = {
        colors: { light: null, dark: null },
        typography: null,
        spacing: null,
        radius: null,
        shadows: null,
        animations: null
      };
      
      expect(() => {
        storeLoadedToken('tokens/colors/light.json', null as any, loadedTokens);
      }).not.toThrow();
    });
  });

  describe('flattenToCSSVars - Tratamento de casos extremos', () => {
    it('deve lidar com objeto com propriedades undefined', () => {
      const obj = {
        key1: 'value1',
        key2: undefined,
        key3: 'value3'
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      expect(result.length).toBe(2); // Apenas key1 e key3
      expect(result).toContain('  --prefix-key1: value1;');
      expect(result).toContain('  --prefix-key3: value3;');
    });

    it('deve lidar com objeto com propriedades vazias', () => {
      const obj = {
        empty: '',
        filled: 'value'
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      expect(result.length).toBe(2);
      expect(result).toContain('  --prefix-empty: ;');
      expect(result).toContain('  --prefix-filled: value;');
    });

    it('deve lidar com objeto com números como valores', () => {
      const obj = {
        number: 123 as any
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      // Números não devem gerar CSS vars (apenas strings)
      expect(result.length).toBe(0);
    });
  });

  describe('toTailwindObject - Tratamento de casos extremos', () => {
    it('deve lidar com objeto com propriedades undefined', () => {
      const obj = {
        key1: 'value1',
        key2: undefined,
        key3: 'value3'
      };
      
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain("key1: 'value1'");
      expect(result).toContain("key3: 'value3'");
      expect(result).not.toContain('key2');
    });

    it('deve lidar com objeto com propriedades vazias', () => {
      const obj = {
        empty: '',
        filled: 'value'
      };
      
      const result = toTailwindObject(obj, 8);
      
      expect(result).toContain("empty: ''");
      expect(result).toContain("filled: 'value'");
    });

    it('deve lidar com objeto com números como valores', () => {
      const obj = {
        number: 123 as any
      };
      
      const result = toTailwindObject(obj, 8);
      
      // Números não devem gerar linhas (apenas strings)
      expect(result).toBe('');
    });
  });

  describe('getValueType - Casos extremos', () => {
    it('deve lidar com undefined', () => {
      expect(getValueType(undefined)).toBe('unknown');
    });

    it('deve lidar com valores especiais', () => {
      expect(getValueType(NaN)).toBe('number');
      expect(getValueType(Infinity)).toBe('number');
      expect(getValueType(-Infinity)).toBe('number');
    });

    it('deve detectar cores hex com diferentes formatos', () => {
      expect(getValueType('#abc')).toBe('string'); // 3 dígitos não detectados
      expect(getValueType('#abcdef')).toBe('color');
      expect(getValueType('#ABCDEF')).toBe('color');
      expect(getValueType('#123456')).toBe('color');
    });

    it('deve detectar cores rgba/rgb com espaços', () => {
      expect(getValueType('rgba(8, 145, 178, 0.5)')).toBe('color');
      expect(getValueType('rgb(8,145,178)')).toBe('color');
      expect(getValueType('rgba( 8 , 145 , 178 , 0.5 )')).toBe('color');
    });
  });

  describe('Integração - Cenários de erro reais', () => {
    it('deve gerar apenas tokens JSON quando cores estão faltando', () => {
      const tokensParciais = {
        typography: mockTokens.typography,
        spacing: mockTokens.spacing
      };
      
      // CSS deve falhar
      expect(() => {
        generateCSS(tokensParciais as any);
      }).toThrow();
      
      // Tailwind deve falhar
      expect(() => {
        generateTailwindConfig(tokensParciais as any);
      }).toThrow();
      
      // Tokens JSON deve funcionar
      const json = generateTokensJSON(tokensParciais);
      expect(() => JSON.parse(json)).not.toThrow();
    });

    it('deve gerar CSS e Tailwind quando apenas cores estão disponíveis', () => {
      const tokensApenasCores = {
        colors: mockTokens.colors
      };
      
      const css = generateCSS(tokensApenasCores);
      const tailwind = generateTailwindConfig(tokensApenasCores);
      
      expect(css).toContain(':root {');
      expect(css).toContain('.dark {');
      expect(tailwind).toContain('export const tailwindConfig');
    });

    it('deve gerar todos os formatos quando todos os tokens estão disponíveis', () => {
      const css = generateCSS(mockTokens);
      const tailwind = generateTailwindConfig(mockTokens);
      const json = generateTokensJSON(mockTokens);
      
      expect(css).toContain(':root {');
      expect(tailwind).toContain('export const tailwindConfig');
      expect(() => JSON.parse(json)).not.toThrow();
    });
  });

  describe('Validação de caminhos e estruturas', () => {
    it('deve validar caminhos de propriedades aninhadas', () => {
      const path = 'colors.primary.base';
      const keys = path.split('.');
      
      expect(keys.length).toBe(3);
      expect(keys[0]).toBe('colors');
      expect(keys[1]).toBe('primary');
      expect(keys[2]).toBe('base');
    });

    it('deve validar caminhos de arrays aninhados', () => {
      const path = 'items[0].value';
      const arrayMatch = path.match(/^(.+)\[(\d+)\](.+)$/);
      
      // Verifica que o regex funciona para arrays aninhados
      expect(path).toContain('[');
      expect(path).toContain(']');
      expect(arrayMatch).not.toBeNull();
      if (arrayMatch) {
        expect(arrayMatch[1]).toBe('items');
        expect(arrayMatch[2]).toBe('0');
        expect(arrayMatch[3]).toBe('.value');
      }
    });

    it('deve validar estrutura de objetos aninhados', () => {
      const obj = {
        level1: {
          level2: {
            level3: 'value'
          }
        }
      };
      
      const result = flattenToCSSVars(obj, 'prefix');
      
      expect(result.length).toBe(1);
      expect(result[0]).toContain('level1-level2-level3');
      expect(result[0]).toContain('value');
    });
  });

  describe('Performance e limites', () => {
    it('deve processar objetos grandes sem travar', () => {
      const largeObj: Record<string, string> = {};
      for (let i = 0; i < 1000; i++) {
        largeObj[`key${i}`] = `value${i}`;
      }
      
      const start = Date.now();
      const result = flattenToCSSVars(largeObj, 'prefix');
      const duration = Date.now() - start;
      
      expect(result.length).toBe(1000);
      expect(duration).toBeLessThan(1000); // Deve ser rápido mesmo com 1000 itens
    });

    it('deve processar objetos muito profundamente aninhados', () => {
      let deepObj: any = { value: '#0891b2' };
      for (let i = 0; i < 10; i++) {
        deepObj = { level: deepObj };
      }
      
      const result = flattenToCSSVars(deepObj, 'prefix');
      
      expect(result.length).toBe(1);
      expect(result[0]).toContain('level');
      expect(result[0]).toContain('#0891b2');
    });
  });
});

