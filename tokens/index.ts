/**
 * @fileoverview Ponto de entrada dos tokens de design
 * 
 * @description
 * Tokens de design tecnologicamente agnósticos que definem a linguagem visual
 * do Rainer Design System. Estes tokens podem ser utilizados em qualquer
 * framework ou tecnologia, garantindo consistência visual.
 * 
 * @module tokens
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

import lightColors from './colors/light.json';
import darkColors from './colors/dark.json';
import typography from './typography.json';
import spacing from './spacing.json';
import radius from './radius.json';
import shadows from './shadows.json';
import animations from './animations.json';
import hero from './hero.json';
import effects from './effects.json';
import celestialBackground from './components/celestial-background.json';

// Utility tokens (Tailwind CSS classes)
export * from './utilities';

// Accessibility utilities (WCAG contrast checking)
export * from './accessibility';

/**
 * Todos os tokens de design organizados por categoria
 * 
 * @description
 * Objeto principal contendo todos os tokens de design do sistema,
 * organizados em categorias lógicas para fácil acesso e manutenção.
 * 
 * @type {Object}
 * @property {Object} colors - Tokens de cores para temas claro e escuro
 * @property {Object} colors.light - Cores do tema claro
 * @property {Object} colors.dark - Cores do tema escuro
 * @property {Object} typography - Tokens de tipografia (fontes, tamanhos, pesos, etc.)
 * @property {Object} spacing - Tokens de espaçamento (margens, paddings)
 * @property {Object} radius - Tokens de raio de borda
 * @property {Object} shadows - Tokens de sombras para ambos os temas
 * @property {Object} animations - Tokens de animações (keyframes e durações)
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { tokens } from 'rainer-design-tokens';
 * 
 * // Acessar cor primária do tema claro
 * const primaryColor = tokens.colors.light.brand.primary;
 * 
 * // Acessar espaçamento padrão
 * const spacing = tokens.spacing.md;
 * ```
 */
export const tokens = {
  colors: {
    light: lightColors.colors,
    dark: darkColors.colors,
  },
  typography: typography.typography,
  spacing: spacing.spacing,
  radius: radius.radius,
  shadows: shadows.shadows,
  animations: animations.animations,
  hero: hero.hero,
  effects: effects.effects,
  components: {
    celestialBackground: celestialBackground.celestialBackground,
  },
} as const;

/**
 * Cores do tema claro
 * 
 * @description
 * Exporta apenas as cores do tema claro para uso direto.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { lightThemeColors } from 'rainer-design-tokens';
 * 
 * const primaryColor = lightThemeColors.brand.primary;
 * ```
 */
export const lightThemeColors = lightColors.colors;

/**
 * Cores do tema escuro
 * 
 * @description
 * Exporta apenas as cores do tema escuro (estilo cyberpunk) para uso direto.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { darkThemeColors } from 'rainer-design-tokens';
 * 
 * const neonColor = darkThemeColors.accent.cyan;
 * ```
 */
export const darkThemeColors = darkColors.colors;

/**
 * Tokens de tipografia
 * 
 * @description
 * Exporta todos os tokens relacionados à tipografia, incluindo
 * famílias de fontes, tamanhos, pesos, alturas de linha e espaçamento entre letras.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { typographyTokens } from 'rainer-design-tokens';
 * 
 * const fontSize = typographyTokens.fontSize.lg;
 * const fontFamily = typographyTokens.fontFamily.sans;
 * ```
 */
export const typographyTokens = typography.typography;

/**
 * Tokens de espaçamento
 * 
 * @description
 * Exporta todos os tokens de espaçamento padronizados do sistema.
 * Utilizados para margens, paddings e gaps consistentes.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { spacingTokens } from 'rainer-design-tokens';
 * 
 * const margin = spacingTokens.md;
 * const padding = spacingTokens.lg;
 * ```
 */
export const spacingTokens = spacing.spacing;

/**
 * Tokens de raio de borda
 * 
 * @description
 * Exporta todos os tokens de raio de borda (border-radius) padronizados.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { radiusTokens } from 'rainer-design-tokens';
 * 
 * const borderRadius = radiusTokens.md;
 * ```
 */
export const radiusTokens = radius.radius;

/**
 * Tokens de sombras
 * 
 * @description
 * Exporta todos os tokens de sombras, incluindo sombras para tema claro
 * e efeitos de brilho (glow) para tema escuro.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { shadowTokens } from 'rainer-design-tokens';
 * 
 * const shadow = shadowTokens.light.md;
 * const glow = shadowTokens.dark.glow.cyan;
 * ```
 */
export const shadowTokens = shadows.shadows;

/**
 * Tokens de animações
 * 
 * @description
 * Exporta todos os tokens de animações, incluindo keyframes, durações
 * e funções de timing para transições e animações do sistema.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { animationTokens } from 'rainer-design-tokens';
 * 
 * const slideIn = animationTokens['slide-in'];
 * const fadeIn = animationTokens['fade-in'];
 * ```
 */
export const animationTokens = animations.animations;

/**
 * Tokens de efeitos visuais
 * 
 * @description
 * Exporta todos os tokens de efeitos visuais, incluindo filters, blur,
 * glow, backdrop effects e outros efeitos para criar elementos visuais sofisticados.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { effectTokens } from 'rainer-design-tokens';
 * 
 * const blur = effectTokens.blur.md;
 * const glow = effectTokens.glow.neon.cyan.moderate;
 * ```
 */
export const effectTokens = effects.effects;

/**
 * Tokens de componentes
 * 
 * @description
 * Exporta todos os tokens específicos de componentes, incluindo configurações
 * para celestial background, carousels e outros componentes visuais.
 * 
 * @type {Object}
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { componentTokens } from 'rainer-design-tokens';
 * 
 * const starConfig = componentTokens.celestialBackground.stars.default;
 * ```
 */
export const componentTokens = {
  celestialBackground: celestialBackground.celestialBackground,
};

/**
 * Tipo TypeScript para todos os tokens
 * 
 * @typedef {Object} Tokens
 * @description
 * Tipo que representa a estrutura completa de todos os tokens de design.
 * Útil para type-checking e autocomplete em IDEs.
 */
export type Tokens = typeof tokens;

/**
 * Tipo TypeScript para cores do tema claro
 * 
 * @typedef {Object} LightColors
 * @description
 * Tipo que representa todas as cores disponíveis no tema claro.
 */
export type LightColors = typeof lightColors.colors;

/**
 * Tipo TypeScript para cores do tema escuro
 * 
 * @typedef {Object} DarkColors
 * @description
 * Tipo que representa todas as cores disponíveis no tema escuro (cyberpunk).
 */
export type DarkColors = typeof darkColors.colors;

/**
 * Tipo TypeScript para tokens de tipografia
 * 
 * @typedef {Object} Typography
 * @description
 * Tipo que representa todos os tokens de tipografia.
 */
export type Typography = typeof typography.typography;

/**
 * Tipo TypeScript para tokens de espaçamento
 * 
 * @typedef {Object} Spacing
 * @description
 * Tipo que representa todos os tokens de espaçamento.
 */
export type Spacing = typeof spacing.spacing;

/**
 * Tipo TypeScript para tokens de raio de borda
 * 
 * @typedef {Object} Radius
 * @description
 * Tipo que representa todos os tokens de raio de borda.
 */
export type Radius = typeof radius.radius;

/**
 * Tipo TypeScript para tokens de sombras
 * 
 * @typedef {Object} Shadows
 * @description
 * Tipo que representa todos os tokens de sombras.
 */
export type Shadows = typeof shadows.shadows;

/**
 * Tipo TypeScript para tokens de animações
 * 
 * @typedef {Object} Animations
 * @description
 * Tipo que representa todos os tokens de animações.
 */
export type Animations = typeof animations.animations;

/**
 * Exportação padrão dos tokens
 * 
 * @description
 * Exporta o objeto principal contendo todos os tokens de design.
 * 
 * @type {Tokens}
 * @default tokens
 */
export default tokens;

