/**
 * @fileoverview Script para gerar CSS variables a partir dos design tokens
 * 
 * @description
 * Este script lê os arquivos JSON de tokens e gera automaticamente
 * o arquivo formats/css-vars.css com todas as variáveis CSS.
 * 
 * Fonte única de verdade: tokens/*.json
 * Saída: formats/css-vars.css
 * 
 * @module scripts/build-css
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface ColorToken {
  [key: string]: string | ColorToken;
}

interface Tokens {
  colors: {
    light: ColorToken;
    dark: ColorToken;
  };
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  spacing: Record<string, string>;
  radius: Record<string, string>;
  shadows: {
    light: Record<string, string>;
    dark: Record<string, string | { glow?: Record<string, string> }>;
  };
}

/**
 * Converte camelCase para kebab-case
 */
function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converte um objeto aninhado de tokens em variáveis CSS
 */
function flattenToCSSVars(
  obj: ColorToken | Record<string, string>,
  prefix: string = '',
  separator: string = '-'
): string[] {
  const vars: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const cssKey = toKebabCase(key);
    const varName = prefix ? `${prefix}${separator}${cssKey}` : cssKey;

    if (typeof value === 'string') {
      vars.push(`  --${varName}: ${value};`);
    } else if (typeof value === 'object' && value !== null) {
      vars.push(...flattenToCSSVars(value, varName, separator));
    }
  }

  return vars;
}

/**
 * Gera o arquivo CSS com variáveis CSS
 */
function generateCSS(tokens: Tokens): string {
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

  // Background colors
  lines.push('  /* Background */');
  if (tokens.colors.light.background) {
    lines.push(...flattenToCSSVars(tokens.colors.light.background, 'color-background'));
  }

  lines.push('');
  lines.push('  /* Surface */');
  if (tokens.colors.light.surface) {
    lines.push(...flattenToCSSVars(tokens.colors.light.surface, 'color-surface'));
  }

  lines.push('');
  lines.push('  /* Text */');
  if (tokens.colors.light.text) {
    lines.push(...flattenToCSSVars(tokens.colors.light.text, 'color-text'));
  }

  lines.push('');
  lines.push('  /* Border */');
  if (tokens.colors.light.border) {
    lines.push(...flattenToCSSVars(tokens.colors.light.border, 'color-border'));
  }

  lines.push('');
  lines.push('  /* Brand */');
  if (tokens.colors.light.brand) {
    lines.push(...flattenToCSSVars(tokens.colors.light.brand, 'color-brand'));
  }

  lines.push('');
  lines.push('  /* Status */');
  if (tokens.colors.light.status) {
    lines.push(...flattenToCSSVars(tokens.colors.light.status, 'color-status'));
  }

  lines.push('');
  lines.push('  /* Shadows */');
  if (tokens.shadows.light) {
    lines.push(...flattenToCSSVars(tokens.shadows.light, 'shadow'));
  }

  lines.push('');
  lines.push('  /* Typography */');
  if (tokens.typography.fontFamily) {
    lines.push(...flattenToCSSVars(tokens.typography.fontFamily, 'font'));
  }

  lines.push('');
  lines.push('  /* Border Radius */');
  if (tokens.radius) {
    lines.push(...flattenToCSSVars(tokens.radius, 'radius'));
  }

  lines.push('}');
  lines.push('');
  lines.push('/* ===== DARK THEME (CYBERPUNK) ===== */');
  lines.push('.dark {');

  // Dark theme colors
  lines.push('  /* Background */');
  if (tokens.colors.dark.background) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.background, 'color-background'));
  }

  lines.push('');
  lines.push('  /* Surface */');
  if (tokens.colors.dark.surface) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.surface, 'color-surface'));
  }

  lines.push('');
  lines.push('  /* Text */');
  if (tokens.colors.dark.text) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.text, 'color-text'));
  }

  lines.push('');
  lines.push('  /* Border */');
  if (tokens.colors.dark.border) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.border, 'color-border'));
  }

  lines.push('');
  lines.push('  /* Brand */');
  if (tokens.colors.dark.brand) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.brand, 'color-brand'));
  }

  lines.push('');
  lines.push('  /* Status */');
  if (tokens.colors.dark.status) {
    lines.push(...flattenToCSSVars(tokens.colors.dark.status, 'color-status'));
  }

  lines.push('');
  lines.push('  /* Shadows */');
  if (tokens.shadows.dark) {
    const darkShadows = { ...tokens.shadows.dark };
    // Handle glow effects separately
    if ('glow' in darkShadows) {
      const glow = darkShadows.glow as Record<string, string>;
      delete darkShadows.glow;
      lines.push(...flattenToCSSVars(darkShadows as Record<string, string>, 'shadow'));
      lines.push('');
      lines.push('  /* Glow Effects */');
      lines.push(...flattenToCSSVars(glow, 'shadow-glow'));
    } else {
      lines.push(...flattenToCSSVars(darkShadows as Record<string, string>, 'shadow'));
    }
  }

  // Dark theme gradients
  if (tokens.colors.dark.gradients) {
    lines.push('');
    lines.push('  /* Gradients */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.gradients, 'gradient'));
  }

  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

/**
 * Carrega todos os tokens dos arquivos JSON
 */
function loadTokens(): Tokens {
  const tokensDir = join(__dirname, '..', 'tokens');

  const lightColors = JSON.parse(
    readFileSync(join(tokensDir, 'colors', 'light.json'), 'utf-8')
  );
  const darkColors = JSON.parse(
    readFileSync(join(tokensDir, 'colors', 'dark.json'), 'utf-8')
  );
  const typography = JSON.parse(
    readFileSync(join(tokensDir, 'typography.json'), 'utf-8')
  );
  const spacing = JSON.parse(
    readFileSync(join(tokensDir, 'spacing.json'), 'utf-8')
  );
  const radius = JSON.parse(
    readFileSync(join(tokensDir, 'radius.json'), 'utf-8')
  );
  const shadows = JSON.parse(
    readFileSync(join(tokensDir, 'shadows.json'), 'utf-8')
  );

  return {
    colors: {
      light: lightColors.colors,
      dark: darkColors.colors,
    },
    typography: typography.typography,
    spacing: spacing.spacing,
    radius: radius.radius,
    shadows: shadows.shadows,
  };
}

/**
 * Função principal
 */
function main() {
  try {
    console.log('🎨 Gerando CSS variables a partir dos design tokens...');

    const tokens = loadTokens();
    const css = generateCSS(tokens);

    const outputPath = join(__dirname, '..', 'formats', 'css-vars.css');
    writeFileSync(outputPath, css, 'utf-8');

    console.log('✅ CSS variables geradas com sucesso!');
    console.log(`   📄 Arquivo: ${outputPath}`);
  } catch (error) {
    console.error('❌ Erro ao gerar CSS variables:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { generateCSS, loadTokens };

