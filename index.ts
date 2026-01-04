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
 * @version 2.6.0
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

// Re-export primitive tokens with clean names
export { 
  colorPrimitive as colorPrimitive,
  spacingPrimitive as spacingPrimitive,
  typographyPrimitive as typographyPrimitive,
  shadowsPrimitive as shadowsPrimitive,
  motionPrimitive as motionPrimitive,
  radiusPrimitive as radiusPrimitive,
  breakpointsPrimitive as breakpointsPrimitive,
  zIndexPrimitive as zIndexPrimitive,
  borderPrimitive as borderPrimitive,
  opacityPrimitive as opacityPrimitive,
  layoutPrimitive as layoutPrimitive,
  iconSizesPrimitive as iconSizesPrimitive,
  gradientPrimitive as gradientsPrimitive
} from './tokens';

// Re-export semantic tokens with clean names
export { 
  colorSemantic as colorSemantic,
  spacingSemantic as spacingSemantic,
  typographySemantic as typographySemantic,
  borderSemantic as borderSemantic,
  layoutSemantic as layoutSemantic,
  elevationSemantic as elevationSemantic,
  motionSemantic as motionSemantic
} from './tokens';

// Re-export themes (avoid conflicts)
export { lightTheme as lightTheme, darkTheme as darkTheme } from './tokens';

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

/**
 * CSS Variables para temas dinâmicos
 * 
 * @description
 * Importa o arquivo CSS com as variáveis de design para uso direto
 * 
 * @example
 * ```typescript
 * import '@rainersoft/design-tokens/css-vars.css';
 * ```
 */
export const cssVarsPath = './src/css-vars.css';



