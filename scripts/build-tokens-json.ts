/**
 * @fileoverview Script para gerar tokens.json consolidado
 * 
 * @description
 * Este script lê os arquivos JSON de tokens e gera automaticamente
 * o arquivo formats/tokens.json com referências consolidadas.
 * 
 * Fonte única de verdade: tokens/*.json
 * Saída: formats/tokens.json
 * 
 * @module scripts/build-tokens-json
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Carrega todos os tokens dos arquivos JSON
 */
function loadTokens() {
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
    lightColors,
    darkColors,
    typography,
    spacing,
    radius,
    shadows,
  };
}

/**
 * Gera o arquivo tokens.json consolidado
 */
function generateTokensJSON() {
  loadTokens(); // Carrega tokens para validação
  
  // Lê o package.json para pegar a versão
  const packageJson = JSON.parse(
    readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
  );

  const consolidated = {
    $schema: 'https://json.schemastore.org/rainer-design-tokens.json',
    name: packageJson.name,
    version: packageJson.version,
    description: 'Universal design tokens export for Rainer Design System',
    $generated: 'This file is auto-generated. Do not edit manually.',
    $source: 'tokens/*.json',
    colors: {
      light: {
        $type: 'color',
        $value: 'See tokens/colors/light.json',
        $path: 'tokens/colors/light.json',
      },
      dark: {
        $type: 'color',
        $value: 'See tokens/colors/dark.json',
        $path: 'tokens/colors/dark.json',
      },
    },
    typography: {
      $type: 'typography',
      $value: 'See tokens/typography.json',
      $path: 'tokens/typography.json',
    },
    spacing: {
      $type: 'dimension',
      $value: 'See tokens/spacing.json',
      $path: 'tokens/spacing.json',
    },
    radius: {
      $type: 'dimension',
      $value: 'See tokens/radius.json',
      $path: 'tokens/radius.json',
    },
    shadows: {
      $type: 'shadow',
      $value: 'See tokens/shadows.json',
      $path: 'tokens/shadows.json',
    },
    meta: {
      repository: packageJson.repository?.url || 'https://github.com/RainerTeixeira/rainer-design-tokens',
      author: packageJson.author || 'Rainer Teixeira',
      license: packageJson.license || 'MIT',
      generatedAt: new Date().toISOString(),
    },
  };

  return JSON.stringify(consolidated, null, 2);
}

/**
 * Função principal
 */
function main() {
  try {
    console.log('🎨 Gerando tokens.json consolidado...');

    const json = generateTokensJSON();

    const outputPath = join(__dirname, '..', 'formats', 'tokens.json');
    writeFileSync(outputPath, json, 'utf-8');

    console.log('✅ tokens.json consolidado gerado com sucesso!');
    console.log(`   📄 Arquivo: ${outputPath}`);
  } catch (error) {
    console.error('❌ Erro ao gerar tokens.json:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { generateTokensJSON, loadTokens };

