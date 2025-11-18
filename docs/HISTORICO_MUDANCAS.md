# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

## [2.0.0] - Previous Version

### Features
- Complete token system
- Tailwind CSS integration
- CSS custom properties
- Type-safe tokens

## [1.0.0] - Initial Release

### Features
- Basic design tokens
- Tailwind support
- TypeScript support

[3.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/RainerTeixeira/rainer-design-tokens/releases/tag/v1.0.0
