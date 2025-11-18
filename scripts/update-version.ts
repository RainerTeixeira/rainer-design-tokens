/**
 * @fileoverview Script para atualizar versão no README.md a partir do package.json
 * 
 * @description
 * Este script atualiza automaticamente a versão no README.md
 * a partir do package.json, mantendo sincronização automática.
 * 
 * @module scripts/update-version
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Atualiza a versão no README.md
 */
function updateVersionInReadme(): boolean {
  const packageJsonPath = join(__dirname, '..', 'package.json');
  const readmePath = join(__dirname, '..', 'README.md');

  if (!existsSync(packageJsonPath)) {
    console.error('❌ package.json não encontrado');
    return false;
  }

  if (!existsSync(readmePath)) {
    console.error('❌ README.md não encontrado');
    return false;
  }

  // Ler versão do package.json
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  const version = packageJson.version;

  if (!version) {
    console.error('❌ Versão não encontrada no package.json');
    return false;
  }

  // Ler README.md
  let readmeContent = readFileSync(readmePath, 'utf-8');
  const originalContent = readmeContent;

  // Atualizar badge de versão
  readmeContent = readmeContent.replace(
    /!\[Version\]\(https:\/\/img\.shields\.io\/badge\/version-[^)]+\)/g,
    `![Version](https://img.shields.io/badge/version-${version}-blue)`
  );

  // Atualizar qualquer referência à versão no formato X.Y.Z
  readmeContent = readmeContent.replace(
    /version-1\.\d+\.\d+/g,
    `version-${version}`
  );

  if (readmeContent !== originalContent) {
    writeFileSync(readmePath, readmeContent, 'utf-8');
    console.log(`✅ Versão atualizada no README.md: ${version}`);
    return true;
  }

  console.log(`ℹ️  Versão já está atualizada: ${version}`);
  return false;
}

/**
 * Função principal
 */
function main() {
  try {
    console.log('🔄 Atualizando versão no README.md...\n');
    updateVersionInReadme();
  } catch (error) {
    console.error('❌ Erro ao atualizar versão:', error);
    process.exit(1);
  }
}

// Execute main function when script is run directly
main();

export { updateVersionInReadme };

