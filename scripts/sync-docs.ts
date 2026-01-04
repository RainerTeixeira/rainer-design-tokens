/**
 * @fileoverview Script de SINCRONIZAÇÃO de Documentação
 * 
 * @description
 * Este script unificado atualiza automaticamente:
 * - Versão do package.json em todos os documentos
 * - Datas de última atualização
 * - Rodapé padrão dos documentos
 * - README.md principal
 * - Todos os arquivos em docs/
 * 
 * Uso: npx tsx scripts/sync-docs.ts [opções]
 * 
 * @module scripts/sync-docs
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tipos
interface PackageJson {
  name: string;
  version: string;
  author?: string;
  license?: string;
  repository?: {
    url?: string;
  };
}

interface DateFormats {
  iso: string;
  ptBR: string;
  monthYear: string;
  short: string;
}

interface UpdateOptions {
  versionOnly?: boolean;
  datesOnly?: boolean;
  readmeOnly?: boolean;
  docsOnly?: boolean;
  dryRun?: boolean;
}

// Cores para output
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

function logHeader(title: string): void {
  console.log('');
  log(`🔄 ${title}`, 'magenta');
  console.log('');
}

/**
 * Obtém informações do package.json
 */
function getPackageInfo(): PackageJson {
  const packageJsonPath = join(__dirname, '..', 'package.json');
  
  if (!existsSync(packageJsonPath)) {
    throw new Error('package.json não encontrado');
  }
  
  try {
    return JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  } catch (error) {
    throw new Error('Erro ao ler package.json');
  }
}

/**
 * Obtém a data atual em múltiplos formatos
 */
function getCurrentDate(): DateFormats {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  return {
    iso: `${year}-${month}-${day}`,
    ptBR: `${day} de ${meses[now.getMonth()]} de ${year}`,
    monthYear: `${meses[now.getMonth()]} de ${year}`,
    short: `${day}/${month}/${year}`
  };
}

/**
 * Gera rodapé padrão para documentos
 */
function generateFooter(packageInfo: PackageJson, dates: DateFormats): string {
  const version = packageInfo.version;
  const author = packageInfo.author || 'Rainer Teixeira';
  const license = packageInfo.license || 'MIT';
  
  return `---\n\n**Versão:** ${version}\n**Última Atualização:** ${dates.ptBR}\n**Autor:** ${author}\n**Licença:** ${license}`;
}

/**
 * Encontra todos os arquivos Markdown recursivamente
 */
function findMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  
  if (!existsSync(dir)) {
    return files;
  }
  
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Ignorar diretórios que começam com . ou node_modules
      if (!item.startsWith('.') && item !== 'node_modules') {
        files.push(...findMarkdownFiles(fullPath));
      }
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Atualiza versão em um arquivo
 */
function updateVersionInFile(filePath: string, version: string): boolean {
  if (!existsSync(filePath)) {
    logWarning(`Arquivo não encontrado: ${filePath}`);
    return false;
  }
  
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Atualizar badge de versão
  content = content.replace(
    /!\[Version\]\(https:\/\/img\.shields\.io\/badge\/version-[^)]+\)/g,
    `![Version](https://img.shields.io/badge/version-${version}-blue)`
  );
  
  // Atualizar links de versão
  content = content.replace(
    /version-\d+\.\d+\.\d+/g,
    `version-${version}`
  );
  
  // Atualizar referências explícitas à versão
  content = content.replace(
    /\*\*Versão:\*\*\s*\d+\.\d+\.\d+/g,
    `**Versão:** ${version}`
  );
  
  // Atualizar padrão: Versão Atual: X.Y.Z
  content = content.replace(
    /Versão Atual:\s*\d+\.\d+\.\d+/g,
    `Versão Atual: ${version}`
  );
  
  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

/**
 * Atualiza datas em um arquivo
 */
function updateDatesInFile(filePath: string, dates: DateFormats): boolean {
  if (!existsSync(filePath)) {
    logWarning(`Arquivo não encontrado: ${filePath}`);
    return false;
  }
  
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Substituir datas antigas (padrões comuns)
  const oldDatePatterns = [
    /\d{4}-\d{2}-\d{2}/g,
    /\d{1,2}\s+de\s+[A-Za-zçÇ]+\s+de\s+\d{4}/g,
    /[A-Za-zçÇ]+\s+de\s+\d{4}/g
  ];
  
  // Atualizar datas ISO
  content = content.replace(oldDatePatterns[0], dates.iso);
  
  // Atualizar datas em português
  content = content.replace(oldDatePatterns[1], dates.ptBR);
  
  // Atualizar mês/ano
  content = content.replace(oldDatePatterns[2], dates.monthYear);
  
  // Atualizar padrões específicos
  content = content.replace(/Atualizado automaticamente/g, dates.ptBR);
  content = content.replace(/Last updated/g, `Last updated: ${dates.iso}`);
  
  // Atualizar "Última Atualização"
  content = content.replace(
    /(\*\*Última Atualização:\*\*|Última Atualização:)\s*[^\n]*/g,
    `$1 ${dates.ptBR}`
  );
  
  // Atualizar "Data" (mas não se tiver "Versão" na mesma linha)
  content = content.replace(
    /(\*\*Data\*\*:|Data:)\s*([^\n]*)/g,
    (match, prefix, rest) => {
      if (rest.includes('Versão') || rest.includes('revisão')) {
        return match;
      }
      return `${prefix} ${dates.monthYear}`;
    }
  );
  
  // Atualizar timestamp em versão
  content = content.replace(
    /Versão Atual:\s*\d+\.\d+\.\d+\s*\(\d{4}-\d{2}-\d{2}\)/g,
    `Versão Atual: ${getPackageInfo().version} (${dates.iso})`
  );
  
  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

/**
 * Atualiza rodapé em um arquivo Markdown
 */
function updateFooterInFile(filePath: string, footer: string): boolean {
  if (!existsSync(filePath)) {
    logWarning(`Arquivo não encontrado: ${filePath}`);
    return false;
  }
  
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Remover rodapé antigo (padrões comuns)
  content = content.replace(
    /---\n\n\*\*Versão:\*\*.*?\*\*Licença:\*\*.*$/gs,
    ''
  );
  
  // Remover outros padrões de rodapé
  content = content.replace(
    /\*\*Versão:\*\*.*$\n\*\*Última Atualização:\*\*.*$\n\*\*Autor:\*\*.*$\n\*\*Licença:\*\*.*$/gm,
    ''
  );
  
  // Adicionar novo rodapé no final
  content = content.trim() + '\n\n' + footer;
  
  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  
  return false;
}

/**
 * Atualiza README.md principal
 */
function updateReadme(packageInfo: PackageJson, dates: DateFormats, footer: string): boolean {
  logHeader('ATUALIZANDO README.md PRINCIPAL');
  
  const readmePath = join(__dirname, '..', 'README.md');
  let updated = false;
  
  // Atualizar versão
  if (updateVersionInFile(readmePath, packageInfo.version)) {
    logSuccess('Versão atualizada no README.md');
    updated = true;
  }
  
  // Atualizar datas
  if (updateDatesInFile(readmePath, dates)) {
    logSuccess('Datas atualizadas no README.md');
    updated = true;
  }
  
  // Atualizar rodapé
  if (updateFooterInFile(readmePath, footer)) {
    logSuccess('Rodapé atualizado no README.md');
    updated = true;
  }
  
  if (!updated) {
    logInfo('README.md já está atualizado');
  }
  
  return updated;
}

/**
 * Atualiza todos os documentos em docs/
 */
function updateDocs(packageInfo: PackageJson, dates: DateFormats, footer: string): number {
  logHeader('ATUALIZANDO DOCUMENTAÇÃO EM docs/');
  
  const docsDir = join(__dirname, '..', 'docs');
  const markdownFiles = findMarkdownFiles(docsDir);
  
  logInfo(`Encontrados ${markdownFiles.length} arquivos Markdown`);
  
  let updatedCount = 0;
  
  for (const filePath of markdownFiles) {
    const relativePath = filePath.replace(join(__dirname, '..'), '');
    let fileUpdated = false;
    
    // Atualizar versão
    if (updateVersionInFile(filePath, packageInfo.version)) {
      fileUpdated = true;
    }
    
    // Atualizar datas
    if (updateDatesInFile(filePath, dates)) {
      fileUpdated = true;
    }
    
    // Atualizar rodapé
    if (updateFooterInFile(filePath, footer)) {
      fileUpdated = true;
    }
    
    if (fileUpdated) {
      logSuccess(`Atualizado: ${relativePath}`);
      updatedCount++;
    }
  }
  
  return updatedCount;
}

/**
 * Função principal
 */
function main(): void {
  const args = process.argv.slice(2);
  
  // Help
  if (args.includes('--help') || args.includes('-h')) {
    console.log('Uso: npx tsx scripts/update.ts [opções]');
    console.log('');
    console.log('Opções:');
    console.log('  --help, -h          Mostra esta ajuda');
    console.log('  --version-only      Apenas atualiza versões');
    console.log('  --dates-only        Apenas atualiza datas');
    console.log('  --readme-only       Apenas README.md');
    console.log('  --docs-only         Apenas docs/');
    console.log('  --dry-run           Mostra o que seria atualizado');
    console.log('');
    return;
  }
  
  // Parse argumentos
  const options: UpdateOptions = {
    versionOnly: args.includes('--version-only'),
    datesOnly: args.includes('--dates-only'),
    readmeOnly: args.includes('--readme-only'),
    docsOnly: args.includes('--docs-only'),
    dryRun: args.includes('--dry-run')
  };
  
  try {
    logHeader('INICIANDO ATUALIZAÇÃO UNIFICADA');
    
    // Obter informações
    const packageInfo = getPackageInfo();
    const dates = getCurrentDate();
    const footer = generateFooter(packageInfo, dates);
    
    logInfo(`Pacote: ${packageInfo.name}@${packageInfo.version}`);
    logInfo(`Data atual: ${dates.ptBR}`);
    
    if (options.dryRun) {
      logWarning('MODO DRY RUN - Nenhuma alteração será salva');
    }
    
    let totalUpdated = 0;
    
    // Atualizar README.md
    if (!options.docsOnly) {
      if (options.readmeOnly || !options.versionOnly) {
        const readmeUpdated = updateReadme(packageInfo, dates, footer);
        if (readmeUpdated) totalUpdated++;
      }
    }
    
    // Atualizar docs/
    if (!options.readmeOnly) {
      if (options.docsOnly || !options.versionOnly) {
        const docsUpdated = updateDocs(packageInfo, dates, footer);
        totalUpdated += docsUpdated;
      }
    }
    
    // Resumo
    console.log('');
    logHeader('RESUMO DA ATUALIZAÇÃO');
    
    if (options.dryRun) {
      logInfo(`Seriam atualizados ${totalUpdated} arquivo(s)`);
    } else {
      logSuccess(`${totalUpdated} arquivo(s) atualizado(s) com sucesso!`);
    }
    
    if (totalUpdated === 0) {
      logInfo('Nenhum arquivo precisou de atualização');
    }
    
  } catch (error: any) {
    logError(`Erro durante atualização: ${error.message}`);
    process.exit(1);
  }
}

// Executar se for chamado diretamente
if (require.main === module) {
  main();
}

export {
  getPackageInfo,
  getCurrentDate,
  generateFooter,
  updateVersionInFile,
  updateDatesInFile,
  updateFooterInFile,
  updateReadme,
  updateDocs
};
