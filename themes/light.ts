/**
 * @fileoverview Tema Claro - Rainer Design System
 *
 * @description
 * Agrupa os design tokens em um tema claro profissional e limpo,
 * adequado para uso diurno. Este tema oferece uma experiência visual
 * clara e moderna, ideal para aplicações que requerem legibilidade
 * e profissionalismo.
 *
 * @module themes/light
 * @version 2.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

import { tokens } from '../tokens';

/**
 * Objeto contendo os tokens para o tema claro
 * 
 * @description
 * Tema completo que agrupa todos os tokens de design necessários
 * para uma aplicação com tema claro. Inclui cores, tipografia,
 * espaçamento, raios de borda e sombras.
 * 
 * @type {Object}
 * @property {Object} colors - Tokens de cores para o tema claro
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras para o tema claro
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { lightTheme } from '@rainersoft/design-tokens';
 * 
 * // Acessar cores do tema claro
 * const primaryColor = lightTheme.colors.brand.primary;
 * 
 * // Acessar tipografia
 * const fontSize = lightTheme.typography.fontSize.lg;
 * 
 * // Aplicar em componente
 * <div style={{ 
 *   backgroundColor: lightTheme.colors.background.primary,
 *   padding: lightTheme.spacing.md 
 * }}>
 *   Conteúdo
 * </div>
 * ```
 */
export const lightTheme = {
  colors: tokens.colors.light,
  typography: tokens.typography,
  spacing: tokens.spacing,
  radius: tokens.radius,
  shadows: tokens.shadows.light,
} as const;

/**
 * Tipo TypeScript do tema claro
 * 
 * @typedef {Object} LightTheme
 * @description
 * Tipo que representa a estrutura completa do tema claro.
 * Útil para type-checking e autocomplete em IDEs.
 * 
 * @property {Object} colors - Cores do tema claro
 * @property {Object} typography - Tokens de tipografia
 * @property {Object} spacing - Tokens de espaçamento
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Sombras do tema claro
 */
export type LightTheme = typeof lightTheme;

/**
 * Exportação padrão do tema claro
 * 
 * @description
 * Exporta o tema claro como exportação padrão do módulo.
 * 
 * @type {LightTheme}
 * @default lightTheme
 */
export default lightTheme;


