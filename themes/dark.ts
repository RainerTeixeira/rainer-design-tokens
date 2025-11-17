/**
 * @fileoverview Tema Escuro - Edição Cyberpunk
 *
 * @description
 * Combina tokens de design em um tema escuro inspirado no estilo cyberpunk.
 * Possui cores neon vibrantes e efeitos de brilho (glow) para uso noturno.
 * Este tema oferece uma experiência visual única e moderna, ideal para
 * aplicações que buscam um visual futurista e impactante.
 *
 * @module themes/dark
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

import { tokens } from '../tokens';

/**
 * Objeto contendo os tokens para o tema escuro
 * 
 * @description
 * Tema completo que agrupa todos os tokens de design necessários
 * para uma aplicação com tema escuro cyberpunk. Inclui cores neon,
 * tipografia, espaçamento, raios de borda e sombras com efeitos de brilho.
 * 
 * @type {Object}
 * @property {Object} colors - Tokens de cores para o tema escuro (cyberpunk)
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras com efeitos de brilho para o tema escuro
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { darkTheme } from '@rainer/design-tokens';
 * 
 * // Acessar cores neon do tema escuro
 * const neonCyan = darkTheme.colors.accent.cyan;
 * 
 * // Acessar efeitos de brilho
 * const glowShadow = darkTheme.shadows.glow.cyan;
 * 
 * // Aplicar em componente
 * <div style={{ 
 *   backgroundColor: darkTheme.colors.background.primary,
 *   boxShadow: darkTheme.shadows.glow.purple,
 *   padding: darkTheme.spacing.md 
 * }}>
 *   Conteúdo Cyberpunk
 * </div>
 * ```
 */
export const darkTheme = {
  colors: tokens.colors.dark,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadows: tokens.shadows.dark,
} as const;

/**
 * Tipo TypeScript do tema escuro
 * 
 * @typedef {Object} DarkTheme
 * @description
 * Tipo que representa a estrutura completa do tema escuro.
 * Útil para type-checking e autocomplete em IDEs.
 * 
 * @property {Object} colors - Cores do tema escuro (cyberpunk)
 * @property {Object} typography - Tokens de tipografia
 * @property {Object} spacing - Tokens de espaçamento
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Sombras com efeitos de brilho do tema escuro
 */
export type DarkTheme = typeof darkTheme;

/**
 * Exportação padrão do tema escuro
 * 
 * @description
 * Exporta o tema escuro como exportação padrão do módulo.
 * 
 * @type {DarkTheme}
 * @default darkTheme
 */
export default darkTheme;
