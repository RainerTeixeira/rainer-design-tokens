# Histórico de Mudanças

Todas as mudanças relevantes neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
e este projeto segue [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## 📦 Versões Publicadas

- **[2.0.0]** (2026-01-04) — Sistema profissional W3C Design Tokens com Token Editor, novos tokens (motion, breakpoints, z-index) e formatos (Figma, Android XML, iOS Swift)
- **[1.0.6]** (2026-01-04) — Tokens de animação
- **[1.0.5]** (2026-01-04) — Tailwind v4 e tokens compostos
- **[1.0.4]** (2026-01-04) — Suporte a animações
- **[1.0.3]** (2026-01-04) — Atualizações de timestamp
- **[1.0.2]** (2026-01-04) — Cores primitivas
- **[1.0.1]** (2026-01-04) — Refatoração inicial
- **[1.0.0]** (2026-01-04) — Lançamento inicial

---

## [2.0.0] - 2026-01-04

### 🎉 Major Release - Sistema Profissional de Design Tokens

Esta versão transforma a biblioteca em um sistema de design tokens em nível profissional, seguindo o formato W3C Design Tokens (DTCG) com editor visual, novos tokens e formatos de exportação.

### ℹ️ Notas de Versão

- **1.0.6** foi a última versão estável da série **1.x**.
- **2.0.0** é a major estável atual recomendada para novos projetos.

### 💥 Breaking Changes

- Migração para sistema W3C Design Tokens
- Separação entre tokens primitivos e semânticos
- Nova estrutura de exportação de módulos
- **➡️ [Guia de Migração](./15-GUIA_MIGRACAO.md)** para upgrade de v1.x

### ✨ Adicionado

#### Novos Tokens

- **Motion Tokens** (`tokens/motion.json`):
  - Durations (instant, fast, normal, slow, slower, slowest)
  - Easings (linear, easeIn, easeOut, easeInOut, spring, etc.)
  - Delays (none, short, medium, long)
- **Breakpoints Responsivos** (`tokens/breakpoints.json`):
  - Breakpoints (xs, sm, md, lg, xl, 2xl, 3xl)
  - Container sizes
  - Media queries
- **Z-Index Scale** (`tokens/z-index.json`):
  - Z-index values (base, dropdown, modal, tooltip, toast, etc.)
  - Layers system completo

#### Novos Formatos de Exportação

- **Figma Tokens Export**: JSON compatível com Figma Tokens
- **Android XML Export**: Cores, dimensões e tipografia em formato XML
- **iOS Swift Export**: Código Swift com enums para cores, espaçamento e tipografia

#### Constantes Utilitárias

- **COLORS**: Constantes de cores principais (`COLORS.primary`, `COLORS.secondary`, etc.)
- **NAVIGATION**: Array de navegação padrão
- **SHADOWS**: Classes Tailwind para shadows (`SHADOWS.LARGE`, `SHADOWS.MEDIUM`, etc.)
- **MOTION**: Classes Tailwind para motion/animações
- **Z_INDEX**: Classes Tailwind para z-index

#### Token Editor - Melhorias

- Validação de schema JSON completa
- Preview visual de tokens (cores, tipografia, espaçamento)
- Histórico de alterações com undo/redo (até 50 estados)
- Servidor local na porta 3000 (`pnpm run dev:editor`)

### 🔄 Alterado

- **packageManager**: Adicionado `"packageManager": "pnpm@9.0.0"` no package.json
- **prepublishOnly**: Atualizado para usar pnpm corretamente
- **build-formats.ts**: Atualizado para usar `npx tsx` (compatível com npm e pnpm)
- **Documentação**: Reorganizada com prefixos numéricos para ordenação
- **Referências**: Atualizadas todas as referências para `@rainersoft/design-tokens`

### 🐛 Corrigido

- Erro de publicação com npm (corrigido uso de pnpm no prepublishOnly)
- Scripts de build compatíveis com npm e pnpm
- Type-check sem erros

### 📚 Documentação

- Documentação completa do Token Editor
- Guia de uso dos novos formatos de exportação
- Documentação dos novos tokens (motion, breakpoints, z-index)
- Guia de publicação com pnpm

### 🔧 Técnico

- 320 testes passando (100% cobertura do Token Editor)
- CI/CD configurado
- Automated releases configurado
- Changelog generator implementado

#### Nova Arquitetura

- **Primitive Tokens**: Valores base (cores, espaçamento, tipografia) sem significado semântico
- **Semantic Tokens**: Tokens com significado que referenciam os tokens primitivos
- **Estrutura Modular**: Tokens organizados por categoria em arquivos separados
- **Suporte ao Formato W3C**: Suporte completo ao W3C Design Tokens Format (DTCG)

#### Sistema de Design

- **Sistema de Grid 8pt**: Escala de espaçamento baseada em grid de 8pt (múltiplos de 4px)
- **Escala Tipográfica Modular**: Escala tipográfica usando razão modular (1.25)
- **Sistema de Temas**: Suporte robusto a temas claro/escuro com tokens semânticos
- **Exportação W3C JSON**: Exportação de tokens no formato W3C Design Tokens
- **Exportação CSS Aprimorada**: Propriedades customizadas CSS com estrutura organizada
- **Validação de Tokens**: Utilitários para validar design tokens
- **Type Safety**: Tipos TypeScript aprimorados e utilitários tipados

#### Token Editor

- **Editor Visual de Tokens**: Interface web 100% local para edição de design tokens
  - Carregamento e edição de arquivos JSON de tokens
  - Validação de JSON em tempo real
  - Formatação de JSON com um clique
  - Salvamento direto das alterações
  - Geração de formatos (CSS, Tailwind, JSON) usando os scripts de build existentes
  - Preview dos arquivos gerados
  - Atalhos de teclado (Ctrl+S, Ctrl+Shift+F, Ctrl+B)
  - Histórico de alterações com undo/redo (até 50 estados)
  - Localizado no diretório `token-editor/`

#### Infraestrutura de Testes

- **Suíte de Testes Abrangente**: Cobertura completa com Jest
  - **320+ testes** cobrindo toda a funcionalidade principal
  - Testes para estrutura de tokens, utilitários, acessibilidade e temas
  - **100% de cobertura do Token Editor** com 136 testes dedicados
  - Testes de tipos TypeScript
  - Estrutura de testes espelhando a estrutura de código
  - Relatórios de cobertura em HTML
  - Scripts de teste: `pnpm test`, `pnpm test:watch`, `pnpm test:coverage`

#### Novos Exports

- `@rainersoft/design-tokens/primitives` - Tokens primitivos
- `@rainersoft/design-tokens/semantic` - Tokens semânticos
- `@rainersoft/design-tokens/formats/w3c` - Utilitários para o formato W3C
- `@rainersoft/design-tokens/utils/validation` - Utilitários de validação

### 🔄 Alterado

- **packageManager**: Adicionado `"packageManager": "pnpm@9.0.0"` no package.json
- **Estrutura**: Tokens agora organizados em `tokens/primitives/` e `tokens/semantic/`
- **Espaçamento**: Agora baseado em sistema de grid 8pt para consistência
- **Tipografia**: Uso de escala modular para melhor legibilidade
- **Cores**: Separação entre tokens primitivos e semânticos
- **Documentação**: Reorganizada com prefixos numéricos para ordenação
- **Referências**: Atualizadas todas as referências para `@rainersoft/design-tokens`

### 🐛 Corrigido

- Erro de publicação com npm (corrigido uso de pnpm no prepublishOnly)
- Scripts de build compatíveis com npm e pnpm
- Type-check sem erros
- Tipagem aprimorada em todos os tokens
- Tratamento de erros melhorado nas rotinas de validação

### 📚 Documentação

- Documentação completa do Token Editor
- Guia de uso dos novos formatos de exportação
- Documentação dos novos tokens (motion, breakpoints, z-index)
- README atualizado com a nova arquitetura
- Exemplos adicionados para tokens primitivos e semânticos
- Documentação JSDoc aprimorada

### 🔧 Técnico

- 320+ testes passando com 100% cobertura do Token Editor
- Atualização para TypeScript 5.3+
- Processo de build aprimorado
- Melhor suporte a tree-shaking
- CI/CD configurado
- Automated releases configurado

## [1.0.6] - 2026-01-04

### ✨ Adicionado

- Novos tokens de animação
- Suporte a animações completas (accordion, slide-in, fade-in, glitch, neon-pulse, etc.)

### 🔄 Alterado

- Atualização de timestamp de geração no arquivo tokens.json

## [1.0.5] - 2026-01-04

### ✨ Adicionado

- Suporte a animações
- Tokens de animação completos

### 🔄 Alterado

- Atualização para Tailwind v4
- Tokens compostos de gradiente

### 🐛 Corrigido

- Correção do tsconfig para type-check
- Exclusão de formats do type-check
- Exclusão de formats/tailwind.config.ts do type-check

## [1.0.4] - 2026-01-04

### ✨ Adicionado

- Suporte a animações
- Novos tokens de animação

### 🔄 Alterado

- Atualização de timestamp de geração no arquivo tokens.json

## [1.0.3] - 2026-01-04

### 🔄 Alterado

- Atualização de timestamp de geração no arquivo tokens.json

## [1.0.2] - 2026-01-04

### ✨ Adicionado

- Novos tokens de cores primitivos

### 🔄 Alterado

- Atualização de gradientes e backgrounds para usar tokens CSS

## [1.0.1] - 2026-01-04

### 🔄 Alterado

- Atualização de scripts e tokens para nova estrutura de projeto
- Correção de erros TypeScript e ESLint
- Atualização de configurações

### 🐛 Corrigido

- Correção de erros TypeScript
- Correção de erros ESLint

## [1.0.0] - 2026-01-04

### 🎉 Lançamento Inicial

Primeira versão pública da biblioteca de design tokens.

### ✨ Adicionado

#### Estrutura Base

- Design tokens básicos (cores, tipografia, espaçamento)
- Suporte a Tailwind CSS
- Suporte a TypeScript
- Estrutura modular de tokens
- Sistema de temas (light/dark)

#### Funcionalidades Principais

- Exportação para CSS Variables
- Exportação para Tailwind Config
- Exportação para JSON
- Validação de tokens
- Utilitários de acessibilidade (WCAG)

#### Documentação

- README completo
- Documentação de estrutura
- Guias de uso
- Exemplos de código

#### Infraestrutura

- Configuração ESLint
- Configuração Prettier
- Configuração TypeScript
- Storybook para visualização
- Scripts de build
- Sistema de memória para IA

### 🔧 Técnico

- TypeScript 5.3+
- ESM (ES Modules)
- Tree-shaking support
- Type definitions completas

---

## Links de Versões

[2.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.6...v2.0.0
[1.0.6]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/releases/tag/v1.0.0

## Referências NPM

- **Pacote**: [@rainersoft/design-tokens](https://www.npmjs.com/package/@rainersoft/design-tokens)
- **Versão Atual (package.json)**: 2.0.0
- **Versões publicadas no npm**: 2.0.0, 1.0.6, 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0
- **Como verificar versões publicadas no npm** (no seu terminal):
  - `npm view @rainersoft/design-tokens versions --json`

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT