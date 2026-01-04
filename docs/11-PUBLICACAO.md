# 11-PUBLICACAO.md - Guia de Publicação

## 🎯 Visão Geral

Este documento explica como publicar a biblioteca `@rainersoft/design-tokens` no NPM e no GitHub, incluindo configuração de CI/CD, versionamento e automação.

## 📦 Publicação no NPM

### 1. Configurar Conta NPM

```bash
# Criar conta (se necessário)
# Acesse: https://www.npmjs.com/signup

# Login no NPM
npm login

# Verificar login
npm whoami
```

### 2. Configurar package.json

```json
{
  "name": "@rainersoft/design-tokens",
  "version": "2.6.0",
  "description": "Design tokens system for Rainer projects",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./themes": {
      "import": "./dist/themes/index.mjs",
      "require": "./dist/themes/index.js",
      "types": "./dist/themes/index.d.ts"
    },
    "./formats": {
      "css-vars.css": "./formats/css-vars.css",
      "tailwind.config.ts": "./formats/tailwind.config.ts",
      "tokens.json": "./formats/tokens.json"
    }
  },
  "files": [
    "dist",
    "formats",
    "themes"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/RainerTeixeira/rainer-design-tokens.git"
  },
  "keywords": [
    "design-tokens",
    "design-system",
    "tokens",
    "css",
    "tailwind",
    "typescript"
  ],
  "author": "Rainer Teixeira",
  "license": "MIT"
}
```

### 3. Script de Preparação

```bash
# Limpar build anterior
pnpm run clean

# Instalar dependências
pnpm install

# Build completo
pnpm run build

# Validar
pnpm run validate

# Gerar changelog
pnpm run changelog
```

### 4. Publicação Manual

```bash
# Publicar (beta)
npm publish --tag beta

# Publicar (latest)
npm publish

# Publicar com tag específica
npm publish --tag v2.6.0

# Publicar versão patch
npm version patch
npm publish

# Publicar versão minor
npm version minor
npm publish

# Publicar versão major
npm version major
npm publish
```

### 5. Script Automatizado (`scripts/prepare-publish.js`)

```javascript
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando para publicação...');

// 1. Limpar
console.log('🧹 Limpando build anterior...');
execSync('pnpm run clean', { stdio: 'inherit' });

// 2. Instalar dependências
console.log('📦 Instalando dependências...');
execSync('pnpm install', { stdio: 'inherit' });

// 3. Build
console.log('🔨 Build completo...');
execSync('pnpm run build', { stdio: 'inherit' });

// 4. Validar
console.log('✅ Validando...');
execSync('pnpm run validate', { stdio: 'inherit' });

// 5. Gerar changelog
console.log('📝 Gerando changelog...');
execSync('pnpm run changelog', { stdio: 'inherit' });

// 6. Verificar arquivos
const requiredFiles = [
  'dist/index.js',
  'dist/index.mjs',
  'dist/index.d.ts',
  'formats/css-vars.css',
  'formats/tailwind.config.ts',
  'formats/tokens.json'
];

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Arquivo faltando: ${file}`);
    process.exit(1);
  }
});

console.log('✅ Pronto para publicar!');
console.log('\n📦 Comandos de publicação:');
console.log('npm publish --tag beta   # Beta');
console.log('npm publish               # Latest');
```

## 🐙 Publicação no GitHub

### 1. Criar Repositório

```bash
# Acessar: https://github.com/new
# Nome: rainer-design-tokens
# Descrição: Enterprise-grade design tokens library
# Visibilidade: Public
```

### 2. Configurar Git

```bash
# Adicionar remote
git remote add origin https://github.com/RainerTeixeira/rainer-design-tokens.git

# Primeiro push
git push -u origin main
```

### 3. Configurar GitHub Pages

```bash
# Build do Storybook
pnpm run build-storybook

# Deploy para GitHub Pages
git add storybook-static/
git commit -m "feat: add Storybook build"
git push origin main
```

### 4. Configurar GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  release:
    types: [published]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm run validate
      - run: pnpm run test:ci
      - run: pnpm run build

  storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
      - run: pnpm install
      - run: pnpm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static

  publish:
    needs: [test]
    runs-on: ubuntu-latest
    if: github.event_name === 'release'
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
      - run: pnpm install
      - run: pnpm run build
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          registry-url: https://registry.npmjs.org/
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 🏷️ Versionamento Semântico

### 1. Configurar Semantic Release

```bash
# Instalar dependências
pnpm add -D conventional-changelog-cli conventional-commits-detector commitizen cz-conventional-changelog

# Configurar package.json
{
  "scripts": {
    "commit": "git-cz",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

### 2. Commits Conventionais

```bash
# feat: nova funcionalidade
git commit -m "feat: add dark theme support"

# fix: correção de bug
git commit -m "fix: resolve token reference issue"

# docs: documentação
git commit -m "docs: update installation guide"

# style: formatação
git commit -m "style: fix linting errors"

# refactor: refatoração
git commit -m "refactor: improve build performance"

# test: testes
git commit -m "test: add token validation tests"

# chore: manutenção
git commit -m "chore: update dependencies"
```

### 3. Versionamento Automático

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm run build
      - run: pnpm run test
      - uses: semantic-release/semantic-release@v20
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 📊 Configuração do NPM

### 1. .npmrc

```ini
# Registry
@rainersoft:registry=https://registry.npmjs.org/

# Auth (configurado via npm login)
//registry.npmjs.org/:_authToken=${NPM_TOKEN}

# Configurações de publicação
access=public
```

### 2. Tokens de Acesso

```bash
# Criar token no NPM
# Acesse: https://www.npmjs.com/settings/RainerTeixeira/tokens

# Adicionar ao GitHub
# Settings > Secrets and variables > Actions > New repository secret
# Name: NPM_TOKEN
# Value: token_gerado_no_npm
```

## 🚀 Deploy Automatizado

### 1. Script de Deploy (`scripts/deploy.js`)

```javascript
const { execSync } = require('child_process');

console.log('🚀 Iniciando deploy...');

// Verificar se está em main
const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
if (branch !== 'main') {
  console.error('❌ Deploy apenas permitido na branch main');
  process.exit(1);
}

// Verificar se não há mudanças não commitadas
const status = execSync('git status --porcelain', { encoding: 'utf8' });
if (status) {
  console.error('❌ Faça commit das mudanças antes de deploy');
  process.exit(1);
}

// Build
console.log('🔨 Build...');
execSync('pnpm run build', { stdio: 'inherit' });

// Testes
console.log('✅ Testes...');
execSync('pnpm run test:ci', { stdio: 'inherit' });

// Publicar
console.log('📦 Publicando...');
execSync('npm publish', { stdio: 'inherit' });

// Push tags
console.log('🏷️ Push tags...');
execSync('git push --tags', { stdio: 'inherit' });

console.log('✅ Deploy concluído!');
```

### 2. Pre-commit Hooks

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{json,md}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

## 📈 Monitoramento

### 1. NPM Stats

```bash
# Verificar downloads
npm view @rainersoft/design-tokens

# Verificar versões
npm view @rainersoft/design-tokens versions --json

# Verificar dependências
npm view @rainersoft/design-tokens dependencies
```

### 2. GitHub Analytics

```bash
# Clonar repositório
git clone https://github.com/RainerTeixeira/rainer-design-tokens.git

# Verificar clones (via API)
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/repos/RainerTeixeira/rainer-design-tokens/traffic/clones
```

## 🔧 Troubleshooting

### Erros Comuns

#### 1. "403 Forbidden" no NPM
```bash
# Verificar login
npm whoami

# Fazer login novamente
npm login

# Verificar token
echo $NPM_TOKEN
```

#### 2. "Package already exists"
```bash
# Verificar versão
npm view @rainersoft/design-tokens version

# Atualizar versão
npm version patch

# Publicar com --force
npm publish --force
```

#### 3. "Files too large"
```bash
# Verificar .npmignore
echo "src/" >> .npmignore
echo "stories/" >> .npmignore
echo ".storybook/" >> .npmignore
echo "tests/" >> .npmignore
```

## 🔗 Links Úteis

- [NPM Docs](https://docs.npmjs.com/)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 📅 Última Atualização

**Data**: 04 de Janeiro de 2026  
**Versão**: 2.6.0  
**Atualização**: Guia completo de publicação automatizada

---

**Autor**: Rainer Teixeira  
**Licença**: MIT
