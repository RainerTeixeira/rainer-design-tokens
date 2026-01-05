#!/usr/bin/env node

/**
 * @fileoverview Script de RELEASE e Publicação
 *
 * @description
 * Script unificado que gerencia todo o processo de release e publicação:
 * - Validação de tokens
 * - Build e compilação
 * - Configuração de autenticação
 * - Publicação no GitHub e NPM
 *
 * Uso: npx tsx scripts/release-package.ts [opções]
 *
 * @module scripts/release-package
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Tipos
interface Colors {
  reset: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  cyan: string;
  magenta: string;
}

interface TokenFile {
  path: string;
  name: string;
}

interface PackageJson {
  name: string;
  version: string;
  repository?: {
    url?: string;
  };
}

interface EnvVars {
  [key: string]: string;
}

// Cores para output
const colors: Colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message: string, color: keyof Colors = 'reset'): void {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step: string, message: string): void {
  console.log(`${colors.blue}${step}${colors.reset} ${message}`);
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
  log(`🚀 ${title}`, 'magenta');
  console.log('');
}

/**
 * Executa comando e trata erros
 */
function runCommand(
  command: string,
  description: string,
  options: { stdio?: 'inherit' | 'pipe' } = {}
): boolean {
  try {
    logStep('🔧', description);
    execSync(command, { stdio: 'inherit', ...options });
    logSuccess(description);
    return true;
  } catch (error: any) {
    logError(`Falha ao executar: ${description}`);
    logError(`Comando: ${command}`);
    logError(`Erro: ${error.message}`);
    return false;
  }
}

/**
 * Lê variáveis de ambiente do .env
 */
function loadEnv(): EnvVars {
  const envPath = join(__dirname, '..', '.env');
  if (!existsSync(envPath)) return {};

  try {
    const envContent = readFileSync(envPath, 'utf8');
    const env: EnvVars = {};
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match && !line.startsWith('#')) {
        env[match[1].trim()] = match[2].trim();
      }
    });
    return env;
  } catch (error: any) {
    logWarning('Erro ao ler .env');
    return {};
  }
}

/**
 * 🔍 VALIDAÇÃO DE TOKENS
 */
function validateTokens(): boolean {
  logHeader('VALIDANDO DESIGN TOKENS');

  const tokensDir = join(__dirname, '..', 'tokens');
  const results: boolean[] = [];

  // Arquivos de tokens para validar
  const tokenFiles: TokenFile[] = [
    {
      path: join(tokensDir, 'primitives', 'color-palette.json'),
      name: 'Color Palette',
    },
    {
      path: join(tokensDir, 'themes', 'theme-light.json'),
      name: 'Light Theme',
    },
    { path: join(tokensDir, 'themes', 'theme-dark.json'), name: 'Dark Theme' },
    {
      path: join(tokensDir, 'primitives', 'typography-base.json'),
      name: 'Typography',
    },
    {
      path: join(tokensDir, 'primitives', 'spacing-scale.json'),
      name: 'Spacing',
    },
    {
      path: join(tokensDir, 'primitives', 'motion-tokens.json'),
      name: 'Motion',
    },
    {
      path: join(tokensDir, 'primitives', 'breakpoints.json'),
      name: 'Breakpoints',
    },
    {
      path: join(tokensDir, 'primitives', 'z-index-layers.json'),
      name: 'Z-Index',
    },
    {
      path: join(tokensDir, 'primitives', 'radius-scale.json'),
      name: 'Radius',
    },
    {
      path: join(tokensDir, 'primitives', 'elevation-tokens.json'),
      name: 'Shadows',
    },
  ];

  for (const { path: filePath, name } of tokenFiles) {
    if (!existsSync(filePath)) {
      logError(`${name} não encontrado: ${filePath}`);
      results.push(false);
    } else {
      try {
        JSON.parse(readFileSync(filePath, 'utf8'));
        logSuccess(`${name} válido`);
        results.push(true);
      } catch (e: any) {
        logError(`${name} com erro de JSON: ${e.message}`);
        results.push(false);
      }
    }
  }

  // Verificar formatos gerados
  const formatsDir = join(__dirname, '..', 'formats');
  const hasCssVars = existsSync(join(formatsDir, 'css-vars.css'));
  const hasTokensJson = existsSync(join(formatsDir, 'tokens.json'));
  const hasTailwindConfig = existsSync(join(formatsDir, 'tailwind.config.ts'));

  if (hasCssVars && hasTokensJson && hasTailwindConfig) {
    logSuccess('Todos os formatos gerados corretamente');
    results.push(true);
  } else {
    logWarning('Formatos não gerados completamente');
    logInfo('Execute: npm run build');
    results.push(false);
  }

  const allValid = results.every(r => r);

  if (allValid) {
    logSuccess('🎉 Todos os tokens estão válidos!');
    return true;
  } else {
    logError('❌ Validação falhou!');
    return false;
  }
}

/**
 * 🔐 CONFIGURAÇÃO DE AUTENTICAÇÃO NPM
 */
function setupNpmAuth(): boolean {
  logHeader('CONFIGURANDO AUTENTICAÇÃO NPM');

  const env = loadEnv();
  const npmrcPath = join(__dirname, '..', '.npmrc');
  const envToken = env.NPM_TOKEN || process.env.NPM_TOKEN;

  if (envToken) {
    logInfo('Configurando autenticação npm a partir de .env...');
    const npmrcContent = `//registry.npmjs.org/:_authToken=${envToken}\n`;
    writeFileSync(npmrcPath, npmrcContent);
    logSuccess('.npmrc configurado com sucesso');
    return true;
  } else if (existsSync(npmrcPath)) {
    logInfo('Usando .npmrc existente');
    return true;
  } else {
    logWarning('NPM_TOKEN não encontrado no .env e .npmrc não existe');
    logInfo('Configure NPM_TOKEN no .env ou faça login manualmente: npm login');
    return false;
  }
}

/**
 * 📦 BUILD E COMPILAÇÃO
 */
function buildProject(): boolean {
  logHeader('BUILD E COMPILAÇÃO');

  // 1. Gerar tokens e formatos
  if (!runCommand('npm run build', 'Gerando tokens e formatos')) {
    return false;
  }

  // 2. Verificar se dist/ existe
  const distPath = join(__dirname, '..', 'dist');
  if (!existsSync(distPath)) {
    logError('Diretório dist/ não encontrado após build');
    return false;
  }
  logSuccess('Diretório dist/ encontrado');

  // 3. Verificar se formats/ existe
  const formatsPath = join(__dirname, '..', 'formats');
  if (!existsSync(formatsPath)) {
    logError('Diretório formats/ não encontrado após build');
    return false;
  }
  logSuccess('Diretório formats/ encontrado');

  // 4. Type check (opcional, não falha se der erro)
  logInfo('Verificando tipos TypeScript...');
  try {
    execSync('npm run type-check', { stdio: 'pipe' });
    logSuccess('Type check passou');
    logSuccess('TypeScript compilado com sucesso');
  } catch (error: any) {
    logWarning('Type check falhou (mas continuando...)');
  }

  return true;
}

/**
 * 🌐 CONFIGURAÇÃO GITHUB
 */
function setupGitHub(): boolean {
  logHeader('CONFIGURANDO GITHUB');

  // Verificar se Git está inicializado
  if (!existsSync('.git')) {
    logWarning('Git não inicializado. Inicializando...');
    if (!runCommand('git init', 'Inicializando repositório Git')) {
      return false;
    }
  } else {
    logSuccess('Git já está inicializado');
  }

  // Verificar remote origin
  try {
    const remotes = execSync('git remote', { encoding: 'utf-8' }).trim();

    if (!remotes.includes('origin')) {
      logWarning("Remote 'origin' não configurado.");
      logInfo('Configure o remote origin:');
      console.log(
        '  git remote add origin https://github.com/RainerTeixeira/rainer-design-tokens.git'
      );
      return false;
    }

    logSuccess("Remote 'origin' configurado");

    // Mostrar URL do remote
    const originUrl = execSync('git remote get-url origin', {
      encoding: 'utf-8',
    }).trim();
    logInfo(`Remote URL: ${originUrl}`);
  } catch (error: any) {
    logError('Erro ao verificar remotes Git');
    return false;
  }

  return true;
}

/**
 * 📝 COMMIT E PUSH
 */
function commitAndPush(): boolean {
  logHeader('COMMIT E PUSH PARA GITHUB');

  // Verificar se há mudanças
  try {
    const status = execSync('git status --porcelain', {
      encoding: 'utf-8',
    }).trim();

    if (status) {
      logInfo('Mudanças encontradas:');
      console.log(status);
      console.log('');

      // Adicionar arquivos
      if (!runCommand('git add .', 'Adicionando arquivos')) {
        return false;
      }

      // Ler package.json para mensagem de commit
      let commitMessage = 'chore: update design tokens';
      try {
        const packageJson: PackageJson = JSON.parse(
          readFileSync('package.json', 'utf-8')
        );
        commitMessage = `chore: release ${packageJson.name}@${packageJson.version}`;
      } catch {}

      // Commit
      if (!runCommand(`git commit -m "${commitMessage}"`, 'Fazendo commit')) {
        return false;
      }
    } else {
      logInfo('Nenhuma mudança para commitar');
    }

    // Push
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf-8',
    }).trim();
    if (
      !runCommand(`git push origin ${branch}`, `Push para GitHub (${branch})`)
    ) {
      return false;
    }

    return true;
  } catch (error: any) {
    logError('Erro ao verificar status do Git');
    return false;
  }
}

/**
 * 📦 PUBLICAÇÃO NPM
 */
function publishToNPM(dryRun = false): boolean {
  logHeader(dryRun ? 'TESTANDO PUBLICAÇÃO NPM (DRY RUN)' : 'PUBLICANDO NO NPM');

  const command = dryRun ? 'npm publish --dry-run' : 'npm publish';

  if (
    !runCommand(command, dryRun ? 'Testando publicação' : 'Publicando no NPM')
  ) {
    return false;
  }

  logSuccess(
    `Pacote ${dryRun ? 'testado com sucesso' : 'publicado com sucesso'}!`
  );
  return true;
}

/**
 * 📋 CRIAÇÃO DE RELEASE NO GITHUB
 */
function createGitHubRelease(): boolean {
  logHeader('CRIANDO RELEASE NO GITHUB');

  try {
    const packageJson: PackageJson = JSON.parse(
      readFileSync('package.json', 'utf-8')
    );
    const version = packageJson.version;
    const name = packageJson.name;

    logInfo(`Criando release ${name}@${version}`);

    // Gerar changelog
    const changelogCommand = 'npx tsx scripts/master.ts';
    if (existsSync(join(__dirname, 'master.ts'))) {
      runCommand(changelogCommand, 'Gerando changelog');
    }

    // Criar release via GitHub CLI (se disponível)
    try {
      execSync('gh --version', { stdio: 'pipe' });
      const releaseCommand = `gh release create v${version} --title "Release v${version}" --generate-notes`;
      if (runCommand(releaseCommand, 'Criando release no GitHub')) {
        logSuccess('Release criado com sucesso!');
        return true;
      }
    } catch {
      logWarning('GitHub CLI não encontrado. Crie o release manualmente:');
      console.log(
        `  1. Vá para: https://github.com/RainerTeixeira/rainer-design-tokens/releases`
      );
      console.log(`  2. Clique em "Create a new release"`);
      console.log(`  3. Use a tag: v${version}`);
      console.log(`  4. Title: Release v${version}`);
    }

    return true;
  } catch (error: any) {
    logError('Erro ao criar release');
    return false;
  }
}

/**
 * 📊 RESUMO FINAL
 */
function showSummary(): void {
  console.log('');
  log('🎉 === PROCESSO DE PUBLICAÇÃO CONCLUÍDO ===', 'green');
  console.log('');

  try {
    const packageJson: PackageJson = JSON.parse(
      readFileSync('package.json', 'utf-8')
    );
    logInfo(`Pacote: ${packageJson.name}@${packageJson.version}`);
    logInfo('Links úteis:');
    console.log(`  📦 NPM: https://www.npmjs.com/package/${packageJson.name}`);
    console.log(
      `  🌐 GitHub: https://github.com/RainerTeixeira/rainer-design-tokens`
    );
    console.log(
      `  📋 Releases: https://github.com/RainerTeixeira/rainer-design-tokens/releases`
    );
  } catch (error: any) {
    logWarning('Não foi possível ler informações do pacote');
  }

  console.log('');
  logInfo('Comandos úteis para o futuro:');
  console.log('  npm run publish          - Publicar nova versão');
  console.log('  npm run publish:dry-run  - Testar publicação');
  console.log('  npm run validate         - Validar tokens');
  console.log('');
}

/**
 * 🚀 FUNÇÃO PRINCIPAL
 */
function main(): void {
  const args = process.argv.slice(2);

  // Help
  if (args.includes('--help') || args.includes('-h')) {
    console.log('Uso: npx tsx scripts/release-package.ts [opções]');
    console.log('');
    console.log('Opções:');
    console.log('  --help, -h          Mostra esta ajuda');
    console.log('  --validate-only     Apenas valida tokens');
    console.log('  --build-only        Apenas faz build');
    console.log('  --setup-auth        Apenas configura autenticação');
    console.log('  --github-only       Apenas configura GitHub');
    console.log('  --dry-run           Testa publicação NPM sem publicar');
    console.log('  --skip-git          Pula operações Git');
    console.log('  --skip-npm          Pula publicação NPM');
    console.log('  --skip-github       Pula release GitHub');
    console.log('');
    return;
  }

  log('🚀 Iniciando processo de publicação...', 'cyan');
  console.log('');

  // Flags de controle
  const validateOnly = args.includes('--validate-only');
  const buildOnly = args.includes('--build-only');
  const setupAuthOnly = args.includes('--setup-auth');
  const githubOnly = args.includes('--github-only');
  const dryRun = args.includes('--dry-run');
  const skipGit = args.includes('--skip-git');
  const skipNpm = args.includes('--skip-npm');
  const skipGithub = args.includes('--skip-github');

  // Fluxo baseado nos argumentos
  if (validateOnly) {
    const isValid = validateTokens();
    process.exit(isValid ? 0 : 1);
    return;
  }

  if (buildOnly) {
    const success = buildProject();
    process.exit(success ? 0 : 1);
    return;
  }

  if (setupAuthOnly) {
    const success = setupNpmAuth();
    process.exit(success ? 0 : 1);
    return;
  }

  if (githubOnly) {
    const success = setupGitHub();
    process.exit(success ? 0 : 1);
    return;
  }

  // Fluxo completo de publicação
  // 1. Validação
  if (!validateTokens()) {
    logError('Falha na validação. Abortando...');
    process.exit(1);
    return;
  }

  // 2. Configuração de autenticação
  if (!setupNpmAuth()) {
    logWarning('Autenticação NPM não configurada. Continuando...');
  }

  // 3. Build
  if (!buildProject()) {
    logError('Falha no build. Abortando...');
    process.exit(1);
    return;
  }

  // 4. Configuração GitHub
  if (!skipGit && !setupGitHub()) {
    logError('Falha na configuração GitHub. Abortando...');
    process.exit(1);
    return;
  }

  // 5. Commit e Push
  if (!skipGit && !commitAndPush()) {
    logError('Falha no commit/push. Abortando...');
    process.exit(1);
    return;
  }

  // 6. Publicação NPM
  if (!skipNpm) {
    if (!publishToNPM(dryRun)) {
      if (!dryRun) {
        logError('Falha na publicação NPM. Abortando...');
        process.exit(1);
        return;
      }
    }
  }

  // 7. Release GitHub
  if (!skipGithub && !skipGit) {
    createGitHubRelease();
  }

  // 8. Resumo
  showSummary();
}

// Tratar sinais de interrupção
process.on('SIGINT', () => {
  log('\n👋 Script interrompido pelo usuário', 'yellow');
  process.exit(0);
});

process.on('SIGTERM', () => {
  log('\n👋 Script terminado', 'yellow');
  process.exit(0);
});

// Executar se for chamado diretamente
if (require.main === module) {
  main();
}

export {
  validateTokens,
  setupNpmAuth,
  buildProject,
  setupGitHub,
  commitAndPush,
  publishToNPM,
  createGitHubRelease,
};
