# 99-CONTRIBUINDO.md - Guia de Contribuição

## 🎯 Visão Geral

Obrigado por considerar contribuir para `@rainersoft/design-tokens`! Este documento fornece diretrizes e informações sobre como contribuir para o projeto.

## 📋 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Contribuir](#como-contribuir)
3. [Configuração do Ambiente](#configuração-do-ambiente)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Adicionando Novos Tokens](#adicionando-novos-tokens)
6. [Convenções de Código](#convenções-de-código)
7. [Pull Requests](#pull-requests)
8. [Testes](#testes)
9. [Documentação](#documentação)
10. [Lançamentos](#lançamentos)

---

## 🤝 Código de Conduta

Este projeto segue um código de conduta. Ao participar, você concorda em manter um ambiente:
- Respeitoso e inclusivo
- Colaborativo e construtivo
- Livre de assédio ou discriminação
- Focado no bem comum

Reporte problemas para: conduct@rainersoft.com

---

## 🚀 Como Contribuir

### Reportar Bugs

1. **Verificar issues existentes** em [GitHub Issues](https://github.com/RainerTeixeira/rainer-design-tokens/issues)
2. **Criar nova issue** com:
   - Título descritivo
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Versão da biblioteca
   - Ambiente (Node.js, OS, etc.)

### Sugerir Funcionalidades

1. **Verificar sugestões existentes**
2. **Criar issue** com:
   - Problema a resolver
   - Solução proposta
   - Casos de uso
   - Exemplos

### Contribuir com Código

1. **Fork o repositório**
2. **Criar branch**:
   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/correcao-do-bug
   ```
3. **Fazer as mudanças**
4. **Commit** seguindo convenções
5. **Push** para seu fork
6. **Criar Pull Request**

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js 18+
- pnpm 8+
- Git

### Setup Inicial
```bash
# Clonar seu fork
git clone https://github.com/SEU-USERNAME/rainer-design-tokens.git
cd rainer-design-tokens

# Adicionar upstream
git remote add upstream https://github.com/RainerTeixeira/rainer-design-tokens.git

# Instalar dependências
pnpm install

# Build inicial
pnpm run build

# Iniciar desenvolvimento
pnpm run dev
```

### Ambiente de Desenvolvimento
```bash
# Gerar formatos
pnpm run build:formats

# Storybook local
pnpm run storybook

# Testes
pnpm run test

# Validação completa
pnpm run validate
```

---

## 📁 Estrutura do Projeto

```
rainer-design-tokens/
├── 📁 tokens/              # Tokens JSON (NÃO EDITE formats/)
│   ├── 📁 primitives/     # Tokens base
│   ├── 📁 semantics/      # Tokens semânticos
│   └── 📁 themes/         # Configurações de temas
├── 📁 scripts/            # Scripts de build
│   ├── compile-formats.ts # Geração de formatos
│   └── generate-all.ts    # Orquestrador
├── 📁 formats/            # GERADOS (NÃO EDITE)
├── 📁 themes/             # Temas TypeScript
├── 📁 stories/            # Stories do Storybook
├── 📁 tests/              # Testes
├── 📁 docs/               # Documentação
└── 📁 dist/               # Build para publicação
```

---

## 🎨 Adicionando Novos Tokens

### 1. Primitives

#### Nova Cor
```json
// tokens/primitives/color-palette.json
{
  "corNova": {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "500": "#0ea5e9",
    "900": "#0c4a6e"
  }
}
```

#### Novo Espaçamento
```json
// tokens/primitives/spacing-scale.json
{
  "72": "18rem",
  "80": "20rem"
}
```

### 2. Semantics

#### Nova Cor Semântica
```json
// tokens/semantics/color-roles.json
{
  "novaFuncao": {
    "primary": "{primitives.corNova.500}",
    "light": "{primitives.corNova.100}",
    "dark": "{primitives.corNova.900}"
  }
}
```

### 3. Referências

Use referências `{path.to.token}`:
```json
{
  "background": "{primitives.gray.50}",
  "text": "{semantics.text.primary}"
}
```

### 4. Validação

```bash
# Validar JSON
pnpm run validate:tokens

# Gerar formatos
pnpm run build:formats

# Verificar no Storybook
pnpm run storybook
```

---

## 📝 Convenções de Código

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add new color palette
fix: resolve token reference issue
docs: update installation guide
style: fix linting errors
refactor: improve build performance
test: add token validation tests
chore: update dependencies
```

### TypeScript

```typescript
// Use tipos explícitos
const spacing: SpacingToken = tokens.primitives.spacing;

// Interfaces bem documentadas
interface TokenSet {
  colors: ColorSet;
  spacing: SpacingSet;
}

// Comentários JSDoc
/**
 * Resolve token references
 * @param path - Token path (e.g., 'primitives.colors.cyan.500')
 * @returns Resolved value
 */
function resolveToken(path: string): string {
  // implementation
}
```

### JSON

```json
{
  "$description": "Primary brand colors",
  "$type": "color",
  "cyan": {
    "$description": "Cyan color palette",
    "50": {
      "$value": "#ecfeff",
      "$description": "Lightest cyan"
    }
  }
}
```

---

## 🔍 Pull Requests

### Antes de Abrir PR

1. **Testes passando**:
   ```bash
   pnpm run test
   pnpm run validate
   ```

2. **Build funcionando**:
   ```bash
   pnpm run build
   ```

3. **Documentação atualizada** (se necessário)

4. **Commits seguindo convenções**

### Template de PR

```markdown
## Descrição
Breve descrição das mudanças.

## Tipo de Mudança
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Motivação
Por que esta mudança é necessária?

## Como Testar
Passos para testar as mudanças.

## Screenshots
Se aplicável, adicione screenshots.

## Checklist
- [ ] Código segue style guide
- [ ] Auto-formatação aplicada
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Build passa
```

### Processo de Review

1. **Auto-review**: Verifique seu próprio PR
2. **CI checks**: Aguarde validações automáticas
3. **Peer review**: Mantenha-se disponível para feedback
4. **Aprovação**: Mínimo 1 aprovação necessária
5. **Merge**: Após aprovação, mantenha seu fork atualizado

---

## 🧪 Testes

### Tipos de Testes

#### Unitários
```typescript
// tests/tokens/color.test.ts
describe('Color Tokens', () => {
  test('should have valid hex colors', () => {
    const colors = tokens.primitives.colors;
    Object.values(colors).forEach(palette => {
      Object.values(palette).forEach(color => {
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });
});
```

#### Integração
```typescript
// tests/build/format-generation.test.ts
describe('Format Generation', () => {
  test('should generate valid CSS', () => {
    const css = generateCSS(tokens);
    expect(css).toContain('--color-cyan-500');
  });
});
```

#### Visuais
- Storybook stories
- Chromatic visual tests
- Screenshot comparisons

### Executando Testes

```bash
# Todos os testes
pnpm run test

# Watch mode
pnpm run test:watch

# Cobertura
pnpm run test:coverage

# CI mode
pnpm run test:ci
```

---

## 📚 Documentação

### Tipos de Documentação

#### API Docs
```typescript
/**
 * Theme interface for design tokens
 * @interface Theme
 * @property {Object} colors - Color definitions
 * @property {Object} spacing - Spacing definitions
 */
export interface Theme {
  colors: ColorSet;
  spacing: SpacingSet;
}
```

#### Guides
- Como usar tokens
- Guia de migração
- Best practices

#### Stories do Storybook
```typescript
const meta: Meta = {
  title: 'Design Tokens/Color Palette',
  component: ColorPalette,
  parameters: {
    docs: {
      description: 'Complete color palette documentation'
    }
  }
};
```

### Atualizando Documentação

1. **Docs em `docs/`**:
   - Markdown files
   - Exemplos de código
   - Diagramas

2. **Code comments**:
   - JSDoc para APIs públicas
   - Comentários inline para lógica complexa

3. **README**:
   - Mantenha atualizado
   - Exemplos de instalação/use

---

## 🚀 Lançamentos

### Versionamento

- **Major**: Breaking changes
- **Minor**: Novas features
- **Patch**: Bug fixes

### Processo de Release

1. **Preparação**:
   ```bash
   pnpm run build:tokens  # Gera changelog
   pnpm run validate
   ```

2. **Version bump**:
   ```bash
   npm version patch|minor|major
   ```

3. **Release**:
   ```bash
   npm publish
   git push --tags
   ```

### Release Notes

- Use formato Keep a Changelog
- Inclua breaking changes
- Mencione novas features
- Agradeça contribuidores

---

## 🏆 Reconhecimento

### Contribuidores

Todos os contribuidores são listados:
- No README
- Em releases
- No site (se aplicável)

### Tipos de Contribuição

- 💻 Código
- 📖 Documentação
- 🐛 Bug reports
- 💡 Ideias
- 🎨 Design
- 📣 Divulgação

---

## 🆘 Ajuda

### Onde Pedir Ajuda

1. **GitHub Discussions** - Perguntas gerais
2. **GitHub Issues** - Bugs e features
3. **Discord** - Chat em tempo real
4. **Email** - support@rainersoft.com

### Recursos

- [Documentação completa](./00-INDICE.md)
- [Guia de migração](./15-GUIA_MIGRACAO.md)
- [Roadmap](./14-ROADMAP.md)

---

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a [MIT License](LICENSE).

---

## 🔗 Links Úteis

- [GitHub Repository](https://github.com/RainerTeixeira/rainer-design-tokens)
- [NPM Package](https://www.npmjs.com/package/@rainersoft/design-tokens)
- [Storybook](https://rainer-design-tokens.storybook.io)

## 📅 Última Atualização

**Data**: Janeiro de 2026
**Versão**: 2.6.0

---

**Obrigado por contribuir! 🎉**

**Autor**: Rainer Teixeira  
**Licença**: MIT

---

**Versão:** 3.0.0
**Última Atualização:** 14 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT