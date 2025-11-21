/**
 * @fileoverview Ponto de entrada principal da biblioteca @rainersoft/design-tokens
 * 
 * @description
 * Biblioteca enterprise-grade de design tokens para sistemas de design modernos.
 * Tecnologicamente agnóstica, escalável e pronta para produção.
 * 
 * Esta biblioteca fornece tokens de design estruturados que podem ser utilizados
 * em qualquer framework ou tecnologia, garantindo consistência visual em toda
 * a aplicação.
 * 
 * @module @rainersoft/design-tokens
 * @version 2.0.0
 * @author Rainer Teixeira
 * @license MIT
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * import { tokens, themes, lightTheme, darkTheme } from '@rainersoft/design-tokens';
 * 
 * // Usar tokens diretamente
 * const primaryColor = tokens.colors.light.brand.primary;
 * 
 * // Usar temas completos
 * const theme = lightTheme;
 * ```
 */

// Re-export everything from tokens
export * from './tokens';

// Re-export themes
export * from './themes';

/**
 * Exportação padrão dos tokens de design
 * 
 * @description
 * Exporta todos os tokens organizados por categoria (cores, tipografia, espaçamento, etc.)
 * 
 * @type {import('./tokens').default}
 */
export { default as tokens } from './tokens';

/**
 * Exportação padrão dos temas
 * 
 * @description
 * Exporta os temas disponíveis (claro e escuro)
 * 
 * @type {import('./themes').default}
 */
export { default as themes } from './themes';

