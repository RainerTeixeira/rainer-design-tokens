/**
 * @fileoverview Script orquestrador para gerar todos os formatos
 * 
 * @description
 * Este script executa todos os geradores de formato em sequência:
 * - CSS variables (css-vars.css)
 * - Tailwind config (tailwind.config.ts)
 * - Tokens JSON consolidado (tokens.json)
 * 
 * Fonte única de verdade: tokens/*.json
 * Saída: formats/*
 * 
 * @module scripts/build-formats
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Executa um script TypeScript usando tsx
 */
function runScript(scriptPath: string) {
  const fullPath = join(__dirname, scriptPath);
  console.log(`\n📦 Executando: ${scriptPath}`);
  try {
    execSync(`pnpm exec tsx "${fullPath}"`, {
      stdio: 'inherit',
      cwd: join(__dirname, '..'),
      shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/bash',
    });
  } catch (error) {
    console.error(`❌ Erro ao executar ${scriptPath}:`, error);
    throw error;
  }
}

/**
 * Função principal
 */
function main() {
  try {
    console.log('🚀 Iniciando geração de formatos a partir dos design tokens...');
    console.log('📂 Fonte única de verdade: tokens/*.json');
    console.log('📤 Saída: formats/*\n');

    // Executa todos os scripts de build em sequência
    runScript('build-css.ts');
    runScript('build-tailwind.ts');
    runScript('build-tokens-json.ts');

    console.log('\n✅ Todos os formatos foram gerados com sucesso!');
    console.log('📁 Arquivos gerados em: formats/');
  } catch (error) {
    console.error('\n❌ Erro ao gerar formatos:', error);
    process.exit(1);
  }
}

// Execute main function when script is run directly
main();

export { runScript };

