# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

### 🎉 Major Release - Professional Design Tokens System

This release transforms the library into a professional-grade design tokens system following W3C Design Tokens Format and industry best practices from companies like Google, Microsoft, and Apple.

### ✨ Added

#### New Architecture
- **Primitive Tokens**: Base token values (colors, spacing, typography) without semantic meaning
- **Semantic Tokens**: Tokens with meaning that reference primitive tokens
- **Modular Structure**: Tokens organized by category in separate files
- **W3C Format Support**: Full support for W3C Design Tokens Format (DTCG)

#### New Features
- **8pt Grid System**: Spacing scale based on 8pt grid (multiples of 4px)
- **Modular Typography Scale**: Typography scale using modular scale ratio (1.25)
- **Theme System**: Robust light/dark theme support with semantic tokens
- **W3C JSON Export**: Export tokens in W3C Design Tokens Format
- **Enhanced CSS Export**: Improved CSS custom properties with organized structure
- **Token Validation**: Utilities for validating design tokens
- **Type Safety**: Improved TypeScript types and utilities

#### New Exports
- `rainer-design-tokens/primitives` - Primitive tokens
- `rainer-design-tokens/semantic` - Semantic tokens
- `rainer-design-tokens/formats/w3c` - W3C format utilities
- `rainer-design-tokens/utils/validation` - Validation utilities

### 🔄 Changed

- **Structure**: Tokens now organized in `src/tokens/primitives/` and `src/tokens/semantic/`
- **Spacing**: Now based on 8pt grid system for consistency
- **Typography**: Uses modular scale for better readability
- **Colors**: Separated into primitives and semantic tokens
- **CSS Export**: Enhanced with better organization and theme support

### 🐛 Fixed

- Improved type safety across all tokens
- Better error handling in validation
- Fixed TypeScript type exports

### 📚 Documentation

- Updated README with new architecture
- Added examples for primitive and semantic tokens
- Added W3C format usage examples
- Improved JSDoc documentation

### 🔧 Technical

- Updated to TypeScript 5.3+
- Improved build process
- Better tree-shaking support
- Enhanced type definitions

## [2.0.0] - 2025-11-19

### 🎉 Major Release - Token Editor & Enhanced Testing

This release introduces a visual token editor and comprehensive test coverage, making the library more developer-friendly and production-ready.

### ✨ Added

#### Token Editor
- **Visual Token Editor**: Web-based interface for editing design tokens
  - Load and edit JSON token files
  - Real-time JSON validation
  - Format JSON with one click
  - Save changes directly
  - Generate formats (CSS, Tailwind, JSON) using existing build scripts
  - Preview generated files
  - Keyboard shortcuts (Ctrl+S, Ctrl+Shift+F, Ctrl+B)
  - Located in `token-editor/` directory

#### Testing Infrastructure
- **Comprehensive Test Suite**: Full test coverage with Jest
  - **270 tests** covering all major functionality
  - Tests for tokens structure, utilities, accessibility, themes
  - **100% coverage of Token Editor** with 136 dedicated tests
  - TypeScript type testing
  - Test structure mirrors code structure (`tests/tokens/`, `tests/themes/`, `tests/token-editor/`)
  - Coverage reports with HTML output
  - Test scripts: `pnpm test`, `pnpm test:watch`, `pnpm test:coverage`

#### New Test Files
- `tests/index.test.ts` - Main entry point tests
- `tests/tokens/index.test.ts` - Token structure tests
- `tests/tokens/utilities.test.ts` - Utility tokens tests
- `tests/tokens/accessibility.test.ts` - WCAG accessibility tests
- `tests/themes/index.test.ts` - Theme structure tests
- `tests/token-editor/editor.test.ts` - **Token Editor comprehensive tests (136 tests)**
  - Function utilities (toKebabCase, toCamelCase, flattenToCSSVars, toTailwindObject)
  - Format generation (generateCSS, generateTailwindConfig, generateTokensJSON)
  - Helper functions (getDefaultContent, storeLoadedToken, escapeHtml, getValueType)
  - JSON manipulation (addNewProperty, removeProperty, addArrayItem, removeArrayItem, moveProperty)
  - Edge cases and error handling
  - Validations and integrations
- `jest.config.js` - Jest configuration with ESM support
- `tests/README.md` - Test documentation

### 🔄 Changed

- **Version**: Updated from 1.0.6 to 2.0.0 (major release)
- **Test Scripts**: Updated `package.json` test scripts to use Jest properly
- **Documentation**: Updated to reflect new Token Editor feature

### 📚 Documentation

- Added Token Editor documentation in `token-editor/README.md`
- Updated test documentation in `tests/README.md`
- Updated main documentation index

### 🔧 Technical

- Jest configuration with TypeScript and ESM support
- **100% test coverage for Token Editor** - All functions, edge cases, and error scenarios tested
- Test coverage for all exported functions and types
- Improved developer experience with visual editor
- Comprehensive test suite ensuring reliability and maintainability

## [1.0.0] - Initial Release

### Features
- Basic design tokens
- Tailwind support
- TypeScript support

[3.1.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/releases/tag/v1.0.0
