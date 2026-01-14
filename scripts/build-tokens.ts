/**
 * @fileoverview Script de BUILD de Design Tokens
 *
 * @description
 * Script unificado que gerencia todo o ecossistema de design tokens:
 *
 * 🔧 GERAÇÃO DE TOKENS:
 * - radius.json (baseado em spacing.json)
 * - breakpoints.json (padrões da indústria)
 * - z-index.json (sistema de camadas)
 *
 * 📦 GERAÇÃO DE FORMATOS:
 * - CSS variables (css-vars.css)
 * - Tailwind config (tailwind.config.ts)
 * - Tokens JSON consolidado (tokens.json)
 *
 * 📝 GERAÇÃO DE DOCUMENTAÇÃO:
 * - Changelog automático (CHANGELOG.md)
 *
 * Fonte única de verdade: tokens/*.json
 * Saída: formats/* + tokens/generated/* + CHANGELOG.md
 *
 * @module scripts/build-tokens
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Interfaces
interface ColorToken {
  [key: string]: string | ColorToken;
}



// Utilitários
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message: string, color: keyof typeof colors = 'reset'): void {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message: string): void {
  log(`✅ ${message}`, 'green');
}

function logWarning(message: string): void {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message: string): void {
  log(`❌ ${message}`, 'red');
}

function logInfo(message: string): void {
  log(`ℹ️  ${message}`, 'cyan');
}

interface AnimationKeyframes {
  [key: string]: Record<string, string | number>;
}

interface AnimationToken {
  name: string;
  duration: string;
  timingFunction: string;
  keyframes: AnimationKeyframes;
}

interface Tokens {
  palette: any;
  themes: {
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
  animations: Record<string, AnimationToken>;
  motion: Record<string, any>;
  breakpoints: Record<string, string>;
  zIndex: Record<string, number>;
}

interface Commit {
  hash: string;
  type: string;
  scope?: string;
  message: string;
  breaking?: boolean;
}

// Funções utilitárias
function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function resolveReferences(obj: any, palette: any): any {
  if (typeof obj === 'string') {
    const referenceRegex = /\{palette\.([^}]+)\}/g;
    return obj.replace(referenceRegex, (match: string, path: string) => {
      const keys = path.split('.');
      let resolved: any = palette;
      for (const key of keys) {
        if (resolved && typeof resolved === 'object' && key in resolved) {
          resolved = resolved[key];
        } else {
          return match;
        }
      }
      return typeof resolved === 'string' ? resolved : match;
    });
  }
  if (Array.isArray(obj)) {
    return obj.map(item => resolveReferences(item, palette));
  }
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (!key.startsWith('$') && !key.startsWith('_')) {
        result[key] = resolveReferences(value, palette);
      }
    }
    return result;
  }
  return obj;
}

function resolveTokenReferences(value: string, palette: any): string {
  const referenceRegex = /\{palette\.([^}]+)\}/g;

  return value.replace(referenceRegex, (match, path) => {
    const keys = path.split('.');
    let resolved: any = palette;

    for (const key of keys) {
      if (resolved && typeof resolved === 'object' && key in resolved) {
        resolved = resolved[key];
      } else {
        return match;
      }
    }

    return typeof resolved === 'string' ? resolved : match;
  });
}

function flattenToCSSVars(
  obj: ColorToken | Record<string, string>,
  prefix: string = '',
  separator: string = '-',
  palette?: any
): string[] {
  const vars: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const cssKey = toKebabCase(key);
    const varName = prefix ? `${prefix}${separator}${cssKey}` : cssKey;

    if (typeof value === 'string') {
      const resolvedValue = palette
        ? resolveTokenReferences(value, palette)
        : value;
      vars.push(`  --${varName}: ${resolvedValue};`);
    } else if (typeof value === 'object' && value !== null) {
      vars.push(...flattenToCSSVars(value, varName, separator, palette));
    }
  }

  return vars;
}

function toTailwindObject(
  obj: ColorToken | Record<string, string>,
  indent: number = 8
): string {
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

// 🔧 GERADORES DE TOKENS CALCULADOS

function generateRadius() {
  const tokensDir = join(__dirname, '..', 'tokens');

  const spacing = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'spacing-scale.json'), 'utf-8')
  );

  const radius = {
    $schema: 'https://json.schemastore.org/theme.json',
    $description: 'Border radius tokens - Generated from spacing scale',
    $generated: new Date().toISOString(),
    $source: 'primitives/spacing-scale.json',
    radius: {
      none: '0px',
      sm: spacing.spacing['0.5'],
      base: spacing.spacing['1'],
      md: spacing.spacing['1.5'],
      lg: spacing.spacing['2'],
      xl: spacing.spacing['3'],
      '2xl': spacing.spacing['4'],
      '3xl': spacing.spacing['6'],
      full: '9999px',
    },
  };

  writeFileSync(
    join(tokensDir, 'primitives', 'radius-scale.json'),
    JSON.stringify(radius, null, 2)
  );

  console.log('✅ radius.json gerado com sucesso!');
}

function generateBreakpoints() {
  const tokensDir = join(__dirname, '..', 'tokens');

  const spacing = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'spacing-scale.json'), 'utf-8')
  );

  const breakpoints = {
    $schema: 'https://json.schemastore.org/theme.json',
    $description: 'Responsive breakpoints - Mobile-first approach',
    $generated: new Date().toISOString(),
    $source: 'industry standards + spacing.json reference',
    $spacingReference: {
      baseUnit: spacing.spacing['1'],
      note: 'Breakpoints follow industry standards, spacing used for reference',
    },
    breakpoints: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  };

  writeFileSync(
    join(tokensDir, 'primitives', 'breakpoints.json'),
    JSON.stringify(breakpoints, null, 2)
  );

  console.log('✅ breakpoints.json gerado com sucesso!');
}

function generateZIndex() {
  const tokensDir = join(__dirname, '..', 'tokens');

  const zIndex = {
    $schema: 'https://json.schemastore.org/theme.json',
    $description: 'Z-index layer system - Organized stacking context',
    $generated: new Date().toISOString(),
    $source: 'design system layer standards',
    zIndex: {
      base: 0,
      content: 100,
      overlay: 200,
      dropdown: 300,
      modal: 400,
      tooltip: 500,
      notification: 600,
      max: 9999,
    },
  };

  writeFileSync(
    join(tokensDir, 'primitives', 'z-index-layers.json'),
    JSON.stringify(zIndex, null, 2)
  );

  console.log('✅ z-index.json gerado com sucesso!');
}

// 📦 GERADORES DE FORMATOS

function loadAllTokens(): Tokens {
  const tokensDir = join(__dirname, '..', 'tokens');

  const palette = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'color-palette.json'), 'utf-8')
  );
  const lightColors = JSON.parse(
    readFileSync(join(tokensDir, 'themes', 'theme-light.json'), 'utf-8')
  );
  const darkColors = JSON.parse(
    readFileSync(join(tokensDir, 'themes', 'theme-dark.json'), 'utf-8')
  );
  const typography = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'typography-base.json'), 'utf-8')
  );
  const spacing = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'spacing-scale.json'), 'utf-8')
  );
  const radius = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'radius-scale.json'), 'utf-8')
  );
  const shadows = JSON.parse(
    readFileSync(
      join(tokensDir, 'primitives', 'elevation-tokens.json'),
      'utf-8'
    )
  );
  const motion = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'motion-tokens.json'), 'utf-8')
  );
  const breakpoints = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'breakpoints.json'), 'utf-8')
  );
  const zIndex = JSON.parse(
    readFileSync(join(tokensDir, 'primitives', 'z-index-layers.json'), 'utf-8')
  );

  return {
    palette: palette.palette,
    themes: {
      light: lightColors.color,
      dark: darkColors.color,
    },
    typography: typography.typography,
    spacing: spacing.spacing,
    radius: radius.radius,
    shadows: shadows.shadows,
    animations: motion.motion,
    motion: motion.motion,
    breakpoints: breakpoints.breakpoints,
    zIndex: zIndex.zIndex,
  };
}

function generateTokensJSON(tokens: Tokens): string {
  const packageJson = JSON.parse(
    readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
  );

  const consolidated = {
    $schema: 'https://json.schemastore.org/design-tokens.json',
    $name: packageJson.name,
    $version: packageJson.version,
    $description: 'Universal design tokens export for Rainer Design System',
    $generated: new Date().toISOString(),

    primitives: {
      color: tokens.palette,
      spacing: tokens.spacing,
      typography: tokens.typography,
      radius: tokens.radius,
      shadows: tokens.shadows,
      motion: tokens.motion,
      breakpoints: tokens.breakpoints,
      zIndex: tokens.zIndex,
    },

    themes: {
      light: resolveReferences(tokens.themes.light, tokens.palette),
      dark: resolveReferences(tokens.themes.dark, tokens.palette),
    },

    $meta: {
      repository:
        packageJson.repository?.url ||
        'https://github.com/RainerTeixeira/rainer-design-tokens',
      author: packageJson.author || 'Rainer Teixeira',
      license: packageJson.license || 'MIT',
    },
  };

  return JSON.stringify(consolidated, null, 2);
}

function generateCSS(tokens: Tokens): string {
  const lines: string[] = [
    '/**',
    ' * CSS Custom Properties (CSS Variables)',
    ' * ',
    ' * Generated from design tokens for use in any CSS context.',
    ' * Supports light and dark themes via .dark class or data-theme attribute.',
    ' * ',
    ' * @fileoverview Global CSS variables for Rainer Design System',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' * @version 2.6.0',
    ' */',
    '',
    ':root {',
    '  /* ===== PRIMITIVE COLORS (PALETTE) ===== */',
    '',
  ];

  // Primitive palette colors (gera todas as paletas dinamicamente)
  for (const [paletteName, paletteValue] of Object.entries(tokens.palette)) {
    const kebab = toKebabCase(paletteName);
    if (typeof paletteValue === 'string') {
      // cores base como white/black/transparent
      lines.push(`  --color-${kebab}: ${paletteValue};`);
    } else if (typeof paletteValue === 'object' && paletteValue !== null) {
      lines.push(
        `  /* ${paletteName.charAt(0).toUpperCase() + paletteName.slice(1)} Scale */`
      );
      for (const [shade, value] of Object.entries(
        paletteValue as Record<string, string>
      )) {
        const shadeKey = toKebabCase(String(shade));
        lines.push(`  --color-${kebab}-${shadeKey}: ${value};`);
      }
      lines.push('');
    }
  }

  // Garantir cores base caso não estejam como strings individuais
  if (tokens.palette.white) {
    lines.push('  /* Base Colors */');
    lines.push(`  --color-white: ${tokens.palette.white};`);
  }
  if (tokens.palette.black) {
    lines.push(`  --color-black: ${tokens.palette.black};`);
  }
  if (tokens.palette.transparent) {
    lines.push(`  --color-transparent: ${tokens.palette.transparent};`);
  }

  // Light theme semantic colors
  lines.push('');
  lines.push('  /* ===== LIGHT THEME SEMANTIC COLORS ===== */');

  if (
    tokens.themes.light.background &&
    typeof tokens.themes.light.background === 'object'
  ) {
    lines.push('  /* Background */');
    lines.push(
      ...flattenToCSSVars(
        tokens.themes.light.background,
        'color-background',
        '-',
        tokens.palette
      )
    );
    lines.push('');
  }

  if (
    tokens.themes.light.text &&
    typeof tokens.themes.light.text === 'object'
  ) {
    lines.push('  /* Text */');
    lines.push(
      ...flattenToCSSVars(
        tokens.themes.light.text,
        'color-text',
        '-',
        tokens.palette
      )
    );
    lines.push('');
  }

  // Typography
  if (tokens.typography.fontFamily) {
    lines.push('  /* Typography */');
    lines.push(
      ...flattenToCSSVars(
        tokens.typography.fontFamily,
        'font',
        '-',
        tokens.palette
      )
    );
    lines.push('');
  }

  // Spacing
  lines.push('  /* ===== SPACING ===== */');
  if (tokens.spacing) {
    for (const [key, value] of Object.entries(tokens.spacing)) {
      const cssKey = key.replace('.', '-');
      lines.push(`  --spacing-${cssKey}: ${value};`);
    }
  }

  // Border radius
  if (tokens.radius) {
    lines.push('');
    lines.push('  /* ===== BORDER RADIUS ===== */');
    lines.push(
      ...flattenToCSSVars(tokens.radius, 'radius', '-', tokens.palette)
    );
  }

  lines.push('}');
  lines.push('');
  lines.push('/* ===== DARK THEME ===== */');
  lines.push('.dark, [data-theme="dark"] {');

  // Dark theme semantic colors
  if (
    tokens.themes.dark.background &&
    typeof tokens.themes.dark.background === 'object'
  ) {
    lines.push('  /* Background */');
    lines.push(
      ...flattenToCSSVars(
        tokens.themes.dark.background,
        'color-background',
        '-',
        tokens.palette
      )
    );
  }

  if (tokens.themes.dark.text && typeof tokens.themes.dark.text === 'object') {
    lines.push('');
    lines.push('  /* Text */');
    lines.push(
      ...flattenToCSSVars(
        tokens.themes.dark.text,
        'color-text',
        '-',
        tokens.palette
      )
    );
  }

  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

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
    ' * @version 2.0.0',
    ' * @author Rainer Teixeira',
    ' * @since 1.0.0',
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

  // Background colors
  if (
    tokens.themes.light.background &&
    typeof tokens.themes.light.background === 'object'
  ) {
    lines.push(`        background: {`);
    lines.push(toTailwindObject(tokens.themes.light.background, 10));
    lines.push(`        },`);
  }

  // Text colors
  if (
    tokens.themes.light.text &&
    typeof tokens.themes.light.text === 'object'
  ) {
    lines.push(`        text: {`);
    lines.push(toTailwindObject(tokens.themes.light.text, 10));
    lines.push(`        },`);
  }

  lines.push('      },');
  lines.push('      fontFamily: {');

  // Font families
  if (tokens.typography.fontFamily) {
    const fontFamily = tokens.typography.fontFamily;
    if (fontFamily.sans) {
      lines.push(
        `        sans: ${JSON.stringify(fontFamily.sans.split(', '))},`
      );
    }
    if (fontFamily.mono) {
      lines.push(
        `        mono: ${JSON.stringify(fontFamily.mono.split(', '))},`
      );
    }
  }

  lines.push('      },');
  lines.push('      fontSize: tokens.typography.fontSize,');
  lines.push('      fontWeight: tokens.typography.fontWeight,');
  lines.push('      lineHeight: tokens.typography.lineHeight,');
  lines.push('      spacing: tokens.spacing,');
  lines.push('      borderRadius: tokens.radius,');

  lines.push('    },');
  lines.push('  },');
  lines.push("  darkMode: 'class',");
  lines.push('} as const;');
  lines.push('');
  lines.push('export default tailwindConfig;');

  return lines.join('\n');
}

// 📝 GERADOR DE CHANGELOG

const COMMIT_TYPES = {
  feat: '✨ Features',
  fix: '🐛 Bug Fixes',
  docs: '📚 Documentation',
  style: '💄 Styles',
  refactor: '♻️ Refactoring',
  perf: '⚡ Performance',
  test: '🧪 Tests',
  chore: '🔧 Chores',
  build: '📦 Build',
  ci: '🔄 CI/CD',
};

function parseCommit(commitLine: string): Commit | null {
  const match = commitLine.match(
    /^([a-f0-9]+)\|([a-z]+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/
  );

  if (!match) return null;

  const [, hash, type, scope, breaking, message] = match;

  return {
    hash: hash.substring(0, 7),
    type,
    scope,
    message,
    breaking: !!breaking,
  };
}

function getCommitsSinceTag(tag?: string): Commit[] {
  try {
    const range = tag ? `${tag}..HEAD` : 'HEAD';
    const log = execSync(
      `git log ${range} --pretty=format:"%h|%s" --no-merges`,
      { encoding: 'utf-8' }
    );

    return log
      .split('\n')
      .map(parseCommit)
      .filter((commit): commit is Commit => commit !== null);
  } catch (error) {
    console.warn('Erro ao obter commits:', error);
    return [];
  }
}

function getLatestTag(): string | null {
  try {
    return execSync('git describe --tags --abbrev=0', {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}

function generateChangelog(commits: Commit[]): string {
  const grouped = commits.reduce(
    (acc, commit) => {
      const type = commit.type || 'chore';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(commit);
      return acc;
    },
    {} as Record<string, Commit[]>
  );

  const sections: string[] = [];

  // Breaking changes primeiro
  const breaking = commits.filter(c => c.breaking);
  if (breaking.length > 0) {
    sections.push('## ⚠️ Breaking Changes\n');
    breaking.forEach(commit => {
      sections.push(`- **${commit.scope || 'general'}**: ${commit.message}`);
    });
    sections.push('');
  }

  // Outros tipos
  for (const [type, typeCommits] of Object.entries(grouped)) {
    if (typeCommits.length === 0 || typeCommits.some(c => c.breaking)) continue;

    const title =
      COMMIT_TYPES[type as keyof typeof COMMIT_TYPES] || `📝 ${type}`;
    sections.push(`## ${title}\n`);

    typeCommits.forEach(commit => {
      const scope = commit.scope ? `**${commit.scope}**: ` : '';
      sections.push(`- ${scope}${commit.message}`);
    });

    sections.push('');
  }

  return sections.join('\n');
}

/**
 * 🔧 FUNÇÕES PROFISSIONAIS DE CHANGELOG
 * Implementação robusta que previne duplicação e gerencia entradas corretamente
 */


/**
 * Verifica se uma versão já existe no changelog
 * @param content - Conteúdo do changelog
 * @param version - Versão a verificar
 * @returns true se a versão já existe
 */
function versionExists(content: string, version: string): boolean {
  // Usar regex simples para verificar se a versão já existe
  const versionRegex = new RegExp(`# Changelog - v${version.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'm');
  return versionRegex.test(content);
}

/**
 * Função agressiva para limpar completamente o changelog duplicado
 * Mantém apenas entradas únicas por versão
 */
function aggressiveCleanChangelog(content: string): string {
  const lines = content.split('\n');
  const uniqueEntries = new Map<string, string[]>();
  let currentVersion = '';
  let currentLines: string[] = [];
  
  for (const line of lines) {
    const versionMatch = line.match(/^# Changelog - v([\d.]+)$/);
    
    if (versionMatch) {
      // Salvar entrada anterior se existir
      if (currentVersion && currentLines.length > 0) {
        if (!uniqueEntries.has(currentVersion)) {
          uniqueEntries.set(currentVersion, currentLines);
        }
      }
      
      // Começar nova entrada
      currentVersion = versionMatch[1];
      currentLines = [line];
    } else if (currentVersion) {
      currentLines.push(line);
    }
  }
  
  // Salvar última entrada
  if (currentVersion && currentLines.length > 0) {
    if (!uniqueEntries.has(currentVersion)) {
      uniqueEntries.set(currentVersion, currentLines);
    }
  }
  
  // Reconstruir changelog limpo com separadores corretos
  const allEntries = Array.from(uniqueEntries.values());
  const result: string[] = [];
  
  allEntries.forEach((entry, index) => {
    result.push(...entry);
    if (index < allEntries.length - 1) {
      result.push('', '---', '');
    }
  });
  
  return result.join('\n');
}

/**
 * Gera e atualiza o changelog de forma profissional
 * Previne duplicação e gerencia o arquivo corretamente
 */
function generateChangelogFile(): void {
  const packageJson = JSON.parse(
    readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
  );
  const version = packageJson.version;
  
  logInfo(`Processando changelog para versão ${version}`);
  
  const latestTag = getLatestTag();
  const commits = getCommitsSinceTag(latestTag || undefined);
  
  if (commits.length === 0) {
    logWarning('Nenhum commit novo desde a última tag');
    return;
  }
  
  const changelog = generateChangelog(commits);
  const fullChangelog = `# Changelog - v${version}\n\n${changelog}`;
  
  // Caminho do arquivo changelog
  const changelogPath = join(__dirname, '..', 'docs', '98- CHANGELOG.md');
  
  try {
    // Verificar se o arquivo existe
    if (!existsSync(changelogPath)) {
      // Criar novo arquivo
      writeFileSync(changelogPath, fullChangelog, 'utf-8');
      logSuccess(`Changelog criado para v${version}`);
      return;
    }
    
    // Ler conteúdo existente
    const existingContent = readFileSync(changelogPath, 'utf-8');
    
    // Verificar se há duplicatas e limpar se necessário
    let cleanContent = existingContent;
    
    // Detectar duplicatas de forma simples
    const sections = existingContent.split(/\n---\n\n/);
    const versionCounts = new Map<string, number>();
    
    sections.forEach(section => {
      const versionMatch = section.match(/# Changelog - v([\d.]+)/);
      if (versionMatch) {
        const version = versionMatch[1];
        versionCounts.set(version, (versionCounts.get(version) || 0) + 1);
      }
    });
    
    const hasDuplicates = Array.from(versionCounts.values()).some(count => count > 1);
    
    if (hasDuplicates) {
      logWarning('Detectadas duplicatas no changelog. Limpando...');
      cleanContent = aggressiveCleanChangelog(existingContent);
      logSuccess('Duplicatas removidas');
    }
    
    // Verificar se a versão atual já existe
    if (versionExists(cleanContent, version)) {
      logWarning(`Changelog para v${version} já existe. Pulando atualização.`);
      return;
    }
    
    // Adicionar nova entrada no topo
    const updatedContent = `${fullChangelog}\n\n---\n\n${cleanContent}`;
    writeFileSync(changelogPath, updatedContent, 'utf-8');
    
    logSuccess(`Changelog atualizado para v${version}`);
    logInfo(`${commits.length} commits processados`);
    
  } catch (error: any) {
    logError(`Erro ao processar changelog: ${error.message}`);
    throw error;
  }
}

// 🚀 FUNÇÃO PRINCIPAL MASTER

function main() {
  const startTime = Date.now();

  console.log(
    '🚀 Iniciando script MASTER de gerenciamento de design tokens...'
  );
  console.log('📂 Fonte única de verdade: tokens/*.json');
  console.log(
    '📤 Saída: formats/* + tokens/generated/* + docs/98- CHANGELOG.md\n'
  );

  try {
    // 🔧 1. Gerar tokens calculados
    console.log('🔧 === GERANDO TOKENS CALCULADOS ===');
    generateRadius();
    generateBreakpoints();
    generateZIndex();
    console.log('✅ Tokens calculados gerados!\n');

    // 📦 2. Gerar formatos de saída
    console.log('📦 === GERANDO FORMATOS DE SAÍDA ===');
    const tokens = loadAllTokens();

    // Gerar tokens.json
    console.log('📄 Gerando tokens.json...');
    const tokensJSON = generateTokensJSON(tokens);
    const tokensPath = join(__dirname, '..', 'formats', 'tokens.json');
    writeFileSync(tokensPath, tokensJSON, 'utf-8');
    console.log('✅ tokens.json gerado!');

    // Gerar css-vars.css
    console.log('🎨 Gerando css-vars.css...');
    const css = generateCSS(tokens);
    const cssPath = join(__dirname, '..', 'formats', 'css-vars.css');
    writeFileSync(cssPath, css, 'utf-8');
    console.log('✅ css-vars.css gerado!');

    // Gerar tailwind.config.ts
    console.log('🔧 Gerando tailwind.config.ts...');
    const tailwindConfig = generateTailwindConfig(tokens);
    const tailwindPath = join(__dirname, '..', 'formats', 'tailwind.config.ts');
    writeFileSync(tailwindPath, tailwindConfig, 'utf-8');
    console.log('✅ tailwind.config.ts gerado!');
    console.log('✅ Formatos de saída gerados!\n');

    // 📝 3. Gerar changelog
    console.log('📝 === GERANDO CHANGELOG ===');
    generateChangelogFile();
    console.log('');

    // 🎉 4. Resumo final
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('🎉 === PROCESSO CONCLUÍDO COM SUCESSO! ===');
    console.log(`⏱️  Tempo total: ${duration}s`);
    console.log('');
    console.log('📁 Arquivos gerados/atualizados:');
    console.log('   🔧 Tokens calculados:');
    console.log('     - tokens/primitives/radius-scale.json');
    console.log('     - tokens/primitives/breakpoints.json');
    console.log('     - tokens/primitives/z-index-layers.json');
    console.log('   📦 Formatos de saída:');
    console.log('     - formats/tokens.json');
    console.log('     - formats/css-vars.css');
    console.log('     - formats/tailwind.config.ts');
    console.log('   📝 Documentação:');
    console.log('     - docs/98- CHANGELOG.md');
    console.log('');
    console.log('🎯 Próximos passos:');
    console.log('   - npm run build (para compilação TS)');
    console.log('   - npm run test (para validação)');
    console.log('   - npm publish (para publicar)');
  } catch (error) {
    console.error('\n❌ Erro no processo MASTER:', error);
    process.exit(1);
  }
}

// Executar função principal
main();

export {
  generateRadius,
  generateBreakpoints,
  generateZIndex,
  generateTokensJSON,
  generateCSS,
  generateTailwindConfig,
  generateChangelogFile,
  loadAllTokens,
};
