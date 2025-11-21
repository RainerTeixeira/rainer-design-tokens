# Histórico de Mudanças

Todas as mudanças relevantes neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
e este projeto segue [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2025-11-21

### ✨ Added

- Seção de documentação do **Token Editor** no README principal da biblioteca.
- Melhor documentação do fluxo **100% local** do Token Editor (uso direto via navegador, sem servidor).

### 🔄 Changed

- Atualização de toda a documentação para usar apenas o pacote `@rainersoft/design-tokens`.
- Limpeza de referências antigas ao pacote `rainer-design-tokens` e seções de migração.
- Ajustes de exemplos de import para refletir os novos exports e o escopo `@rainersoft`.

### 🐛 Fixed

- Pequenos alinhamentos em exemplos de código e paths de formatos (Tailwind, CSS vars, tokens JSON).

## [3.0.0] - 2025-01-XX

### 🎉 Major Release - Sistema Profissional de Design Tokens

Esta versão transforma a biblioteca em um sistema de design tokens em nível profissional, seguindo o formato W3C Design Tokens (DTCG) e boas práticas de empresas como Google, Microsoft e Apple.

### ✨ Adicionado

#### Nova Arquitetura
- **Primitive Tokens**: Valores base (cores, espaçamento, tipografia) sem significado semântico.
- **Semantic Tokens**: Tokens com significado que referenciam os tokens primitivos.
- **Estrutura Modular**: Tokens organizados por categoria em arquivos separados.
- **Suporte ao Formato W3C**: Suporte completo ao W3C Design Tokens Format (DTCG).

#### Novas Funcionalidades
- **Sistema de Grid 8pt**: Escala de espaçamento baseada em grid de 8pt (múltiplos de 4px).
- **Escala Tipográfica Modular**: Escala tipográfica usando razão modular (1.25).
- **Sistema de Temas**: Suporte robusto a temas claro/escuro com tokens semânticos.
- **Exportação W3C JSON**: Exportação de tokens no formato W3C Design Tokens.
- **Exportação CSS Aprimorada**: Propriedades customizadas CSS com estrutura organizada.
- **Validação de Tokens**: Utilitários para validar design tokens.
- **Type Safety**: Tipos TypeScript aprimorados e utilitários tipados.

#### Novos Exports
- `rainer-design-tokens/primitives` - Tokens primitivos.
- `rainer-design-tokens/semantic` - Tokens semânticos.
- `rainer-design-tokens/formats/w3c` - Utilitários para o formato W3C.
- `rainer-design-tokens/utils/validation` - Utilitários de validação.

### 🔄 Alterado

- **Estrutura**: Tokens agora organizados em `src/tokens/primitives/` e `src/tokens/semantic/`.
- **Espaçamento**: Agora baseado em sistema de grid 8pt para consistência.
- **Tipografia**: Uso de escala modular para melhor legibilidade.
- **Cores**: Separação entre tokens primitivos e semânticos.
- **Exportação CSS**: Export mais organizado, com suporte a temas.

### 🐛 Corrigido

- Tipagem aprimorada em todos os tokens.
- Tratamento de erros melhorado nas rotinas de validação.
- Correções em exports de tipos TypeScript.

### 📚 Documentação

- README atualizado com a nova arquitetura.
- Exemplos adicionados para tokens primitivos e semânticos.
- Exemplos de uso do formato W3C adicionados.
- Documentação JSDoc aprimorada.

### 🔧 Técnico

- Atualização para TypeScript 5.3+.
- Processo de build aprimorado.
- Melhor suporte a tree-shaking.
- Definições de tipos melhoradas.

## [2.0.0] - 2025-11-19

### 🎉 Lançamento Principal - Token Editor & Testes Avançados

Esta versão introduz um editor visual de tokens e uma suíte de testes abrangente, tornando a biblioteca mais amigável para desenvolvedores e pronta para produção.

### ✨ Adicionado

#### Token Editor
- **Editor Visual de Tokens**: Interface web para edição de design tokens.
  - Carregamento e edição de arquivos JSON de tokens.
  - Validação de JSON em tempo real.
  - Formatação de JSON com um clique.
  - Salvamento direto das alterações.
  - Geração de formatos (CSS, Tailwind, JSON) usando os scripts de build existentes.
  - Preview dos arquivos gerados.
  - Atalhos de teclado (Ctrl+S, Ctrl+Shift+F, Ctrl+B).
  - Localizado no diretório `token-editor/`.

#### Infraestrutura de Testes
- **Suíte de Testes Abrangente**: Cobertura completa com Jest.
  - **270 testes** cobrindo toda a funcionalidade principal.
  - Testes para estrutura de tokens, utilitários, acessibilidade e temas.
  - **100% de cobertura do Token Editor** com 136 testes dedicados.
  - Testes de tipos TypeScript.
  - Estrutura de testes espelhando a estrutura de código (`tests/tokens/`, `tests/themes/`, `tests/token-editor/`).
  - Relatórios de cobertura em HTML.
  - Scripts de teste: `pnpm test`, `pnpm test:watch`, `pnpm test:coverage`.

#### Novos Arquivos de Teste
- `tests/index.test.ts` - Testes do entrypoint principal.
- `tests/tokens/index.test.ts` - Testes da estrutura de tokens.
- `tests/tokens/utilities.test.ts` - Testes dos tokens utilitários.
- `tests/tokens/accessibility.test.ts` - Testes de acessibilidade (WCAG).
- `tests/themes/index.test.ts` - Testes da estrutura de temas.
- `tests/token-editor/editor.test.ts` - **Testes completos do Token Editor (136 testes)**
  - Funções utilitárias (toKebabCase, toCamelCase, flattenToCSSVars, toTailwindObject).
  - Geração de formatos (generateCSS, generateTailwindConfig, generateTokensJSON).
  - Funções auxiliares (getDefaultContent, storeLoadedToken, escapeHtml, getValueType).
  - Manipulação de JSON (addNewProperty, removeProperty, addArrayItem, removeArrayItem, moveProperty).
  - Casos de borda e tratamento de erros.
  - Validações e integrações.
- `jest.config.js` - Configuração do Jest com suporte a ESM.
- `tests/README.md` - Documentação dos testes.

### 🔄 Alterado

- **Versão**: Atualizada de 1.0.6 para 2.0.0 (major release).
- **Scripts de Teste**: Scripts de teste no `package.json` atualizados para usar Jest corretamente.
- **Documentação**: Documentação atualizada para refletir o novo Token Editor.

### 📚 Documentação

- Documentação do Token Editor adicionada em `token-editor/README.md`.
- Documentação de testes atualizada em `tests/README.md`.
- Índice principal de documentação atualizado.

### 🔧 Técnico

- Configuração do Jest com suporte a TypeScript e ESM.
- **100% de cobertura de testes para o Token Editor** - Todas as funções, casos de borda e cenários de erro cobertos.
- Cobertura de testes para todas as funções e tipos exportados.
- Melhor experiência de desenvolvimento com o editor visual.
- Suíte de testes abrangente garantindo confiabilidade e manutenibilidade.

## [1.0.0] - Lançamento Inicial

### Funcionalidades
- Design tokens básicos.
- Suporte a Tailwind.
- Suporte a TypeScript.

[3.1.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/releases/tag/v1.0.0
