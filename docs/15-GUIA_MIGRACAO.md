# 15-GUIA_MIGRACAO.md - Guia de Migração

## 🎯 Visão Geral

Este documento ajuda você a migrar entre versões da biblioteca `@rainersoft/design-tokens`, especialmente para as mudanças significativas nas versões 2.x.

## 📋 Índice

1. [Migração v1.x → v2.6](#migração-v1x--v26)
2. [Migração v2.5 → v2.6](#migração-v25--v26)
3. [Migração v2.0 → v2.6](#migração-v20--v26)
4. [Troubleshooting](#troubleshooting)
5. [Suporte](#suporte)

---

## 🔄 Migração v1.x → v2.6

### ⚠️ Breaking Changes

A versão 2.6 introduz mudanças significativas na estrutura de tokens e scripts.

### 1. Nova Estrutura de Tokens

#### Antes (v1.x)
```
tokens/
├── colors.json
├── typography.json
├── spacing.json
├── radius.json
└── shadows.json
```

#### Depois (v2.6)
```
tokens/
├── primitives/
│   ├── color-palette.json
│   ├── typography-base.json
│   ├── spacing-scale.json
│   ├── radius-scale.json
│   ├── elevation-tokens.json
│   ├── motion-tokens.json
│   ├── breakpoints.json
│   └── z-index-layers.json
├── semantics/
│   ├── color-roles.json
│   ├── border-roles.json
│   └── elevation-roles.json
├── themes/
│   ├── theme-light.json
│   └── theme-dark.json
└── index.json
```

### 2. Mudanças nos Imports

#### Antes (v1.x)
```typescript
import { tokens } from '@rainersoft/design-tokens';

// Acessando cores
const primaryColor = tokens.colors.light.brand.primary;
const spacing = tokens.spacing[4];
```

#### Depois (v2.6)
```typescript
import { tokens } from '@rainersoft/design-tokens';

// Acessando cores
const primaryColor = tokens.semantics.colors.brand.primary;
const spacing = tokens.primitives.spacing[4];

// Ou via temas
import { lightTheme, darkTheme } from '@rainersoft/design-tokens/themes';
```

### 3. Scripts Renomeados

#### Antes (v1.x)
```bash
pnpm run build-all     # Build principal
pnpm run generate-all  # Gerar tokens
```

#### Depois (v2.6)
```bash
pnpm run build:formats # Gerar formatos (novo nome do build-all)
pnpm run generate-tokens # Gerar tokens calculados
pnpm run build:tokens   # Build completo com changelog
```

### 4. Passo a Passo da Migração

#### Passo 1: Atualizar Dependências
```bash
# Remover versão antiga
pnpm remove @rainersoft/design-tokens

# Instalar nova versão
pnpm add @rainersoft/design-tokens@^2.6.0
```

#### Passo 2: Atualizar Imports no Código
```typescript
// Antigo
import { tokens } from '@rainersoft/design-tokens';

// Novo
import { tokens } from '@rainersoft/design-tokens';
import { lightTheme, darkTheme } from '@rainersoft/design-tokens/themes';

// Atualizar referências
// Antigo: tokens.colors.light.brand.primary
// Novo: tokens.semantics.colors.brand.primary

// Antigo: tokens.spacing[4]
// Novo: tokens.primitives.spacing[4]
```

#### Passo 3: Atualizar CSS Variables
```css
/* Antigo */
--color-brand-primary;

/* Novo */
--color-brand-primary; /* mesmo nome, estrutura interna diferente */
```

#### Passo 4: Atualizar Configuração Tailwind
```typescript
// Antigo (tailwind.config.js)
module.exports = {
  theme: {
    extend: {
      colors: require('@rainersoft/design-tokens/colors')
    }
  }
}

// Novo (tailwind.config.ts)
import config from '@rainersoft/design-tokens/formats/tailwind.config';

export default config;
```

#### Passo 5: Build e Testes
```bash
# Limpar build anterior
pnpm run clean

# Gerar novos formatos
pnpm run build:formats

# Build completo
pnpm run build

# Validar
pnpm run validate
```

---

## 🔄 Migração v2.5 → v2.6

### Mudanças Menores

#### 1. Scripts Renomeados
```bash
# Antigo
tsx scripts/build-all.ts

# Novo
tsx scripts/compile-formats.ts
```

#### 2. CHANGELOG Movido
```bash
# Antigo
./CHANGELOG.md

# Novo
./docs/CHANGELOG.md
```

#### 3. Atualizar package.json
```json
{
  "scripts": {
    // Antigo
    "build:formats": "tsx scripts/build-all.ts",
    
    // Novo
    "build:formats": "tsx scripts/compile-formats.ts"
  }
}
```

---

## 🔄 Migração v2.0 → v2.6

### Mudanças na Estrutura

#### 1. Tokens Primitives vs Semantics
```typescript
// v2.0 - Estrutura plana
tokens.colors.primary
tokens.spacing.md

// v2.6 - Estrutura hierárquica
tokens.primitives.colors.cyan[500]
tokens.semantics.colors.brand.primary
tokens.primitives.spacing[4]
```

#### 2. Novos Tokens Adicionados
```typescript
// v2.6 - Novos tokens disponíveis
tokens.primitives.motion.duration.fast
tokens.primitives.breakpoints.sm
tokens.primitives.zIndex.modal
tokens.primitives.elevation.lg
```

---

## 🔧 Scripts de Migração Automatizada

### create-migration-script.js
```javascript
const fs = require('fs');
const path = require('path');

// Mapeamento de antigos para novos paths
const pathMappings = {
  'tokens.colors.light.brand.primary': 'tokens.semantics.colors.brand.primary',
  'tokens.colors.light.text.primary': 'tokens.semantics.colors.text.primary',
  'tokens.colors.light.background.primary': 'tokens.semantics.colors.background.primary',
  'tokens.spacing.4': 'tokens.primitives.spacing[4]',
  'tokens.radius.md': 'tokens.primitives.radius.md',
  'tokens.shadows.md': 'tokens.primitives.elevation.md'
};

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Substituir imports
  Object.entries(pathMappings).forEach(([oldPath, newPath]) => {
    const regex = new RegExp(oldPath.replace('.', '\\.'), 'g');
    content = content.replace(regex, newPath);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Migrated: ${filePath}`);
}

// Migrar arquivos TypeScript
const tsFiles = [
  'src/components/Button.tsx',
  'src/styles/theme.ts',
  'src/config/tailwind.ts'
];

tsFiles.forEach(migrateFile);
```

### Uso do Script
```bash
# Executar migração
node scripts/migrate-v2.6.js

# Verificar mudanças
git diff

# Commit se tudo ok
git add .
git commit -m "feat: migrate to v2.6.0"
```

---

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
# Limpar cache
pnpm store prune

# Reinstalar
pnpm install

# Verificar versão
pnpm list @rainersoft/design-tokens
```

### Erro: "Token not found"
```typescript
// Verificar estrutura correta
console.log(tokens.primitives);
console.log(tokens.semantics);
console.log(tokens.themes);

// Usar TypeScript para ajuda
type TokenPath = `primitives.${string}` | `semantics.${string}` | `themes.${string}`;
```

### Erro: "Build failed"
```bash
# Verificar scripts
pnpm run build:formats

# Debug mode
DEBUG=* pnpm run build:formats

# Verificar tokens
pnpm run validate:tokens
```

### Performance Issues
```typescript
// Usar imports específicos
import { spacing, colors } from '@rainersoft/design-tokens/primitives';

// Evitar importar tudo
// Ruim: import * as tokens from '@rainersoft/design-tokens'
```

---

## 📚 Exemplos de Migração

### React Component
```typescript
// Antes (v1.x)
const Button = () => {
  return (
    <button style={{
      background: tokens.colors.light.brand.primary,
      padding: tokens.spacing[4],
      borderRadius: tokens.radius.md
    }}>
      Click
    </button>
  );
};

// Depois (v2.6)
const Button = () => {
  return (
    <button style={{
      background: tokens.semantics.colors.brand.primary,
      padding: tokens.primitives.spacing[4],
      borderRadius: tokens.primitives.radius.md
    }}>
      Click
    </button>
  );
};
```

### CSS-in-JS
```typescript
// Antes (v1.x)
const styles = {
  container: {
    background: tokens.colors.light.background.primary,
    color: tokens.colors.light.text.primary,
    padding: tokens.spacing[8]
  }
};

// Depois (v2.6)
const styles = {
  container: {
    background: tokens.semantics.colors.background.primary,
    color: tokens.semantics.colors.text.primary,
    padding: tokens.primitives.spacing[8]
  }
};
```

### Styled Components
```typescript
// Antes (v1.x)
const Button = styled.button`
  background: ${tokens.colors.light.brand.primary};
  padding: ${tokens.spacing[4]};
`;

// Depois (v2.6)
const Button = styled.button`
  background: ${tokens.semantics.colors.brand.primary};
  padding: ${tokens.primitives.spacing[4]};
`;
```

---

## 🆘 Suporte

### Obter Ajuda
1. **Documentação**: Verifique outros documentos em `docs/`
2. **GitHub Issues**: Abra uma issue para problemas específicos
3. **Discord**: Comunidade para ajuda em tempo real
4. **Email**: support@rainersoft.com

### Reportar Problemas
Ao reportar problemas de migração, inclua:
- Versão anterior e atual
- Código que está falhando
- Mensagem de erro completa
- Passos para reproduzir

### Contribuições
Contribuições para melhorar o guia de migração são bem-vindas!
1. Faça fork do repositório
2. Crie uma branch com a melhoria
3. Submit um PR com detalhes

---

## 🔗 Links Relacionados

- [00-INDICE.md](./00-INDICE.md) - Índice completo
- [01-GUIDELINES.md](./01-GUIDELINES.md) - Guidelines de uso
- [12-HISTORICO_MUDANCAS.md](./12-HISTORICO_MUDANCAS.md) - Histórico completo
- [GitHub Releases](https://github.com/RainerTeixeira/rainer-design-tokens/releases) - Release notes

## 📅 Última Atualização

**Data**: 04 de Janeiro de 2026  
**Versão**: 2.6.0  
**Próxima migração**: v2.7.0

---

**Autor**: Rainer Teixeira  
**Licença**: MIT
