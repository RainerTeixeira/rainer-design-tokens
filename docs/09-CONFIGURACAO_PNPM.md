# 09-CONFIGURACAO_PNPM.md - Configuração pnpm

## 🎯 Visão Geral

Este documento explica como configurar e usar o pnpm para gerenciar dependências e scripts da biblioteca `@rainersoft/design-tokens`.

## 🚀 Instalação e Setup

### 1. Instalar pnpm

```bash
# Via npm
npm install -g pnpm

# Via Homebrew (macOS)
brew install pnpm

# Via Chocolatey (Windows)
choco install pnpm

# Verificar instalação
pnpm --version
```

### 2. Configurar Workspace

```bash
# Entrar no diretório
cd c:\Desenvolvimento\rainer-design-tokens

# Instalar dependências
pnpm install

# ou usar alias
pnpm run setup
```

### 3. Scripts Principais

```bash
# Desenvolvimento
pnpm run dev              # Modo dev com watch
pnpm run storybook        # Storybook local
pnpm run test             # Testes unitários

# Build
pnpm run build            # Build completo
pnpm run build:formats    # Apenas formatos
pnpm run build:tokens     # Com changelog

# Validação
pnpm run validate         # Validação completa
pnpm run type-check       # TypeScript check
pnpm run lint             # ESLint

# Manutenção
pnpm run clean            # Limpar build
pnpm run clean:all        # Limpar tudo
pnpm run reset            # Reset node_modules
```

## 📦 package.json Completo

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
  "scripts": {
    "setup": "pnpm install",
    "setup:clean": "pnpm run clean:all && pnpm install",
    "dev": "pnpm run build:formats --watch",
    "build": "pnpm run build:formats && pnpm run build:lib",
    "build:formats": "tsx scripts/compile-formats.ts",
    "build:lib": "tsup",
    "build:tokens": "tsx scripts/build-tokens.ts",
    "build:storybook": "storybook build",
    "storybook": "storybook dev -p 6006",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:ci": "jest --ci --coverage",
    "validate": "pnpm run type-check && pnpm run validate:tokens",
    "type-check": "npx tsc --noEmit",
    "validate:tokens": "node scripts/validate-tokens.js",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "clean": "rimraf dist formats storybook-static",
    "clean:all": "rimraf dist formats storybook-static node_modules pnpm-lock.yaml",
    "reset": "rimraf node_modules pnpm-lock.yaml && pnpm install",
    "generate-tokens": "tsx scripts/generate-all.ts",
    "changelog": "tsx scripts/generate-changelog.ts",
    "sync-version": "tsx scripts/update-version.ts",
    "prepare": "pnpm run build",
    "prepublishOnly": "pnpm run validate && pnpm run build",
    "postpublish": "pnpm run sync-version"
  },
  "dependencies": {
    "lodash-es": "^4.17.21"
  },
  "devDependencies": {
    "@storybook/addon-a11y": "^7.0.0",
    "@storybook/addon-essentials": "^7.0.0",
    "@storybook/react": "^7.0.0",
    "@storybook/react-vite": "^7.0.0",
    "@types/jest": "^29.0.0",
    "@types/lodash-es": "^4.17.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-react": "^7.0.0",
    "eslint-plugin-react-hooks": "^4.0.0",
    "jest": "^29.0.0",
    "prettier": "^3.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "rimraf": "^5.0.0",
    "storybook": "^7.0.0",
    "ts-jest": "^29.0.0",
    "tsup": "^7.0.0",
    "tsx": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
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

## ⚙️ .npmrc

```ini
# Configurações do registry
@rainersoft:registry=https://registry.npmjs.org/

# Configurações de cache
cache-dir=C:\Users\%USERNAME%\AppData\Local\pnpm\cache

# Configurações de store
store-dir=C:\Users\%USERNAME%\AppData\Local\pnpm\store

# Strict peer dependencies
strict-peer-dependencies=true

# Auto install peer dependencies
auto-install-peers=true

# Prefer workspace
prefer-workspace-packages=true

# Shamefully hoist
shamefully-hoist=true

# Save exact versions
save-exact=true

# Save dev dependencies
save-dev=true

# Engine strict
engine-strict=true

# Resolution mode
resolution-mode=highest
```

## 📁 pnpm-workspace.yaml

```yaml
# Workspace para monorepo (se aplicável)
packages:
  - '.'
  - 'packages/*'
  - 'apps/*'
```

## 🔧 Configurações Avançadas

### Cache Otimizado

```bash
# Configurar cache customizado
pnpm config set store-dir D:\pnpm-store

# Limpar cache
pnpm store prune

# Ver status do cache
pnpm store status
```

### Scripts de Lifecycle

```json
{
  "scripts": {
    "preinstall": "echo 'Installing dependencies...'",
    "postinstall": "echo 'Dependencies installed!'",
    "prebuild": "pnpm run clean",
    "postbuild": "pnpm run test",
    "prepublishOnly": "pnpm run validate",
    "postpublish": "pnpm run sync-version"
  }
}
```

### Aliases Úteis

```bash
# Criar aliases no shell
# Adicionar ao .bashrc ou .zshrc

alias p='pnpm'
alias pi='pnpm install'
alias pd='pnpm run dev'
alias pb='pnpm run build'
alias pt='pnpm run test'
alias ps='pnpm run storybook'
alias pc='pnpm run clean'
alias pca='pnpm run clean:all'
```

## 🚀 Comandos Úteis

### Gerenciamento de Dependências

```bash
# Adicionar dependência
pnpm add lodash

# Adicionar dev dependência
pnpm add -D jest

# Adicionar exata versão
pnpm add react@18.2.0

# Adicionar dependência de peer
pnpm add -P react

# Remover dependência
pnpm remove lodash

# Atualizar dependência
pnpm update lodash

# Listar dependências
pnpm list --depth=0

# Ver dependências desatualizadas
pnpm outdated
```

### Scripts com Parâmetros

```bash
# Passar parâmetros para scripts
pnpm run test -- --watchAll=false
pnpm run build -- --mode production
pnpm run storybook -- --port 6007
```

### Múltiplos Scripts

```bash
# Executar múltiplos scripts em paralelo
pnpm run build && pnpm run test
pnpm run dev & pnpm run storybook

# Usar concurrently para melhor controle
pnpm add -D concurrently
pnpm run dev:all
```

## 🔍 Debug e Troubleshooting

### Verbose Mode

```bash
# Verbose para debug
pnpm install --verbose
pnpm run build --verbose

# Silent mode
pnpm install --silent
```

### Resolução de Conflitos

```bash
# Forçar resolução
pnpm install --force

# Ignorar scripts
pnpm install --ignore-scripts

# Frozen lockfile
pnpm install --frozen-lockfile
```

### Problemas Comuns

#### 1. Cache corrompido
```bash
# Limpar cache
pnpm store prune
pnpm install --force
```

#### 2. Lockfile desatualizado
```bash
# Gerar novo lockfile
rm pnpm-lock.yaml
pnpm install
```

#### 3. Dependências faltando
```bash
# Verificar integridade
pnpm install --force
pnpm audit
```

## 📊 Performance

### Otimizações

```bash
# Instalação rápida
pnpm install --prefer-frozen-lockfile

# Cache persistente
pnpm config set store-dir ~/.pnpm-store

# Paralelismo
pnpm config set child-process-count 4
```

### Métricas

```bash
# Tempo de instalação
time pnpm install

# Tamanho do node_modules
du -sh node_modules

# Tamanho do cache
du -sh ~/.pnpm-store
```

## 🔗 Integração CI/CD

### GitHub Actions

```yaml
name: CI

on: [push, pull_request]

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
```

### Docker

```dockerfile
FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

CMD ["pnpm", "run", "storybook"]
```

## 🔗 Links Relacionados

- [Documentação pnpm](https://pnpm.io/)
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Guidelines
- [04-SISTEMA_BUILD.md](./04-SISTEMA_BUILD.md) - Sistema de build

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0  
**Atualização**: Scripts atualizados, configuração completa

---

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 2.6.0
**Última Atualização:** 05 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT