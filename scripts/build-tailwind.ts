/**
 * @fileoverview Script para gerar Tailwind config a partir dos design tokens
 * 
 * @description
 * Este script lê os arquivos JSON de tokens e gera automaticamente
 * o arquivo formats/tailwind.config.ts com a configuração do Tailwind.
 * 
 * Fonte única de verdade: tokens/*.json
 * Saída: formats/tailwind.config.ts
 * 
 * @module scripts/build-tailwind
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
 * Converte kebab-case para camelCase
 */
function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Converte um objeto aninhado em formato Tailwind
 */
function toTailwindObject(obj: ColorToken | Record<string, string>, indent: number = 8): string {
  const spaces = ' '.repeat(indent);
  const lines: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const camelKey = toCamelCase(key);
    
    if (typeof value === 'string') {
      lines.push(`${spaces}${camelKey}: '${value}',`);
    } else if (typeof value === 'object' && value !== null) {
      lines.push(`${spaces}${camelKey}: {`);
      lines.push(toTailwindObject(value, indent + 2));
      lines.push(`${spaces}},`);
    }
  }

  return lines.join('\n');
}

/**
 * Gera o arquivo TypeScript com configuração do Tailwind
 */
function generateTailwindConfig(tokens: Tokens): string {
  const lines: string[] = [
    '/**',
    ' * @fileoverview Configuração do Tailwind CSS gerada a partir dos design tokens',
    ' * ',
    ' * @description',
    ' * Configuração do Tailwind CSS gerada automaticamente a partir dos design tokens',
    ' * para integração perfeita. Use esta configuração no seu tailwind.config.js',
    ' * através de theme.extend para ter acesso a todos os tokens como classes utilitárias.',
    ' * ',
    ' * @module formats/tailwind.config',
    ' * @version 4.0.0',
    ' * @author Rainer Teixeira',
    ' * @since 1.0.0',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' * ',
    ' * @example',
    ' * ```typescript',
    ' * // tailwind.config.js',
    ' * const { tailwindConfig } = require(\'rainer-design-tokens/formats/tailwind.config\');',
    ' * ',
    ' * module.exports = {',
    ' *   ...tailwindConfig,',
    ' *   // Suas configurações adicionais',
    ' * };',
    ' * ```',
    ' */',
    '',
    "import { tokens } from '../tokens';",
    '',
    '/**',
    ' * Configuração do Tailwind CSS baseada nos design tokens',
    ' * ',
    ' * @description',
    ' * Objeto de configuração completo do Tailwind CSS que estende o tema padrão',
    ' * com todos os tokens de design do sistema. Inclui cores, tipografia,',
    ' * espaçamento, raios de borda e sombras.',
    ' * ',
    ' * @type {Object}',
    ' * @property {Object} theme - Configurações de tema do Tailwind',
    ' * @property {Object} theme.extend - Extensões do tema padrão',
    ' * @property {Object} theme.extend.colors - Cores customizadas (brand, background, surface, text, border, status)',
    ' * @property {Object} theme.extend.fontFamily - Famílias de fontes customizadas',
    ' * @property {Object} theme.extend.fontSize - Tamanhos de fonte dos tokens',
    ' * @property {Object} theme.extend.fontWeight - Pesos de fonte dos tokens',
    ' * @property {Object} theme.extend.lineHeight - Alturas de linha dos tokens',
    ' * @property {Object} theme.extend.letterSpacing - Espaçamento entre letras dos tokens',
    ' * @property {Object} theme.extend.spacing - Espaçamentos dos tokens',
    ' * @property {Object} theme.extend.borderRadius - Raios de borda dos tokens',
    ' * @property {Object} theme.extend.boxShadow - Sombras dos tokens (incluindo efeitos glow)',
    ' * @property {string} darkMode - Modo escuro configurado como \'class\'',
    ' * ',
    ' * @constant',
    ' * @readonly',
    ' * ',
    ' * @example',
    ' * ```typescript',
    ' * import { tailwindConfig } from \'rainer-design-tokens/formats/tailwind.config\';',
    ' * ',
    ' * // Usar em tailwind.config.js',
    ' * export default {',
    ' *   ...tailwindConfig,',
    ' *   content: [\'./src\'],',
    ' * };',
    ' * ',
    ' * // Agora você pode usar as classes em seus componentes',
    ' * ```',
    ' */',
    'export const tailwindConfig = {',
    '  theme: {',
    '    extend: {',
    '      colors: {',
  ];

  // Primary colors
  lines.push('        // Primary colors');
  if (tokens.colors.light.primary && typeof tokens.colors.light.primary === 'object') {
    lines.push(`        primary: {`);
    lines.push(toTailwindObject(tokens.colors.light.primary, 10));
    lines.push(`        },`);
  }

  // Secondary colors
  lines.push('        // Secondary colors');
  if (tokens.colors.light.secondary && typeof tokens.colors.light.secondary === 'object') {
    lines.push(`        secondary: {`);
    lines.push(toTailwindObject(tokens.colors.light.secondary, 10));
    lines.push(`        },`);
  }

  // Accent colors
  lines.push('        // Accent colors');
  if (tokens.colors.light.accent && typeof tokens.colors.light.accent === 'object') {
    lines.push(`        accent: {`);
    lines.push(toTailwindObject(tokens.colors.light.accent, 10));
    lines.push(`        },`);
  }

  // Background colors
  lines.push('        // Background colors');
  if (tokens.colors.light.background && typeof tokens.colors.light.background === 'object') {
    lines.push(`        background: {`);
    lines.push(toTailwindObject(tokens.colors.light.background, 10));
    lines.push(`        },`);
  }

  // Surface colors
  lines.push('        // Surface colors');
  if (tokens.colors.light.surface && typeof tokens.colors.light.surface === 'object') {
    lines.push(`        surface: {`);
    lines.push(toTailwindObject(tokens.colors.light.surface, 10));
    lines.push(`        },`);
  }

  // Text colors
  lines.push('        // Text colors');
  if (tokens.colors.light.text && typeof tokens.colors.light.text === 'object') {
    lines.push(`        text: {`);
    lines.push(toTailwindObject(tokens.colors.light.text, 10));
    lines.push(`        },`);
  }

  // Border colors
  lines.push('        // Border colors');
  if (tokens.colors.light.border && typeof tokens.colors.light.border === 'object') {
    lines.push(`        border: {`);
    lines.push(toTailwindObject(tokens.colors.light.border, 10));
    lines.push(`        },`);
  }

  // Status colors
  lines.push('        // Status colors');
  if (tokens.colors.light.status) {
    const status = tokens.colors.light.status as Record<string, any>;
    if (status.success) {
      lines.push(`        success: {`);
      lines.push(toTailwindObject(status.success, 10));
      lines.push(`        },`);
    }
    if (status.warning) {
      lines.push(`        warning: {`);
      lines.push(toTailwindObject(status.warning, 10));
      lines.push(`        },`);
    }
    if (status.error) {
      lines.push(`        error: {`);
      lines.push(toTailwindObject(status.error, 10));
      lines.push(`        },`);
    }
    if (status.info) {
      lines.push(`        info: {`);
      lines.push(toTailwindObject(status.info, 10));
      lines.push(`        },`);
    }
  }

  lines.push('      },');
  lines.push('      fontFamily: {');

  // Font families
  if (tokens.typography.fontFamily) {
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
    if (fontFamily.display) {
      lines.push(`        display: '${fontFamily.display}',`);
    }
    if (fontFamily.body) {
      lines.push(`        body: '${fontFamily.body}',`);
    }
  }

  lines.push('      },');
  lines.push('      fontSize: tokens.typography.fontSize,');
  lines.push('      fontWeight: tokens.typography.fontWeight,');
  lines.push('      lineHeight: tokens.typography.lineHeight,');
  lines.push('      letterSpacing: tokens.typography.letterSpacing,');
  lines.push('      spacing: tokens.spacing,');
  lines.push('      borderRadius: tokens.radius,');

  // Box shadows
  lines.push('      boxShadow: {');
  if (tokens.shadows.light) {
    lines.push('        ...tokens.shadows.light,');
  }
  if (tokens.shadows.dark && typeof tokens.shadows.dark === 'object' && 'glow' in tokens.shadows.dark) {
    const glow = (tokens.shadows.dark as { glow: Record<string, string> }).glow;
    if (glow) {
      for (const [key, value] of Object.entries(glow)) {
        lines.push(`        'glow-${key}': '${value}',`);
      }
    }
  }
  lines.push('      },');
  lines.push('    },');
  lines.push('  },');
  lines.push("  darkMode: 'class',");
  lines.push('} as const;');
  lines.push('');
  lines.push('/**');
  lines.push(' * Exportação padrão da configuração do Tailwind');
  lines.push(' * ');
  lines.push(' * @description');
  lines.push(' * Exporta a configuração do Tailwind CSS como exportação padrão do módulo.');
  lines.push(' * ');
  lines.push(' * @type {typeof tailwindConfig}');
  lines.push(' * @default tailwindConfig');
  lines.push(' */');
  lines.push('export default tailwindConfig;');
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
    console.log('🎨 Gerando Tailwind config a partir dos design tokens...');

    const tokens = loadTokens();
    const config = generateTailwindConfig(tokens);

    const outputPath = join(__dirname, '..', 'formats', 'tailwind.config.ts');
    writeFileSync(outputPath, config, 'utf-8');

    console.log('✅ Tailwind config gerada com sucesso!');
    console.log(`   📄 Arquivo: ${outputPath}`);
  } catch (error) {
    console.error('❌ Erro ao gerar Tailwind config:', error);
    process.exit(1);
  }
}

// Execute main function when script is run directly
main();

export { generateTailwindConfig, loadTokens };

