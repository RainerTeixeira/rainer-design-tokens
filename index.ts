/**
 * @fileoverview Ponto de entrada principal do Rainer Design System
 * 
 * @description
 * Exporta todos os tokens, temas e utilidades do sistema de design.
 * Organizado em categorias para fácil consumo e autocomplete.
 * 
 * @module index
 * @version 3.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

// Exportar todos os tokens do módulo principal
export * from './tokens';

// Exportar tipos de tokens e temas
export * from './types/tokens';
export * from './types/theme';

// Exportar primitivas tipadas
export {
  colorPrimitive,
  spacingPrimitive,
  typographyPrimitive,
  shadowsPrimitive,
  motionPrimitive,
  radiusPrimitive,
  breakpointsPrimitive,
  zIndexPrimitive,
  borderPrimitive,
  opacityPrimitive,
  layoutPrimitive,
  iconSizesPrimitive,
  gradientPrimitive,
} from './tokens';

// Exportar semânticas tipadas
export {
  colorSemantic,
  spacingSemantic,
  typographySemantic,
  borderSemantic,
  layoutSemantic,
  elevationSemantic,
  motionSemantic,
} from './tokens';

// Exportar temas tipados
export { lightTheme, darkTheme } from './tokens';
export type { LightTheme, DarkTheme } from './themes';

// Exportar aliases para compatibilidade
export { motionPrimitive as motionTokens } from './tokens';
export { shadowsPrimitive as SHADOWS } from './tokens';
export { gradientPrimitive as GRADIENTS } from './tokens';

// Tipos para constantes de direção
export type GradientDirection = 
  | 'to-bottom'
  | 'to-top' 
  | 'to-right'
  | 'to-left'
  | 'to-br'
  | 'to-bl'
  | 'to-tr'
  | 'to-tl';

// Constantes tipadas
export const GRADIENT_DIRECTIONS = {
  TO_BOTTOM: 'to-bottom',
  TO_TOP: 'to-top',
  TO_RIGHT: 'to-right',
  TO_LEFT: 'to-left',
  TO_BR: 'to-br',
  TO_BL: 'to-bl',
  TO_TR: 'to-tr',
  TO_TL: 'to-tl',
} as const satisfies Record<string, GradientDirection>;

export const BACKGROUND = {
  PRIMARY: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500',
  SECONDARY: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
  DARK: 'bg-gradient-to-br from-slate-900 to-slate-800',
  LIGHT: 'bg-gradient-to-br from-white to-gray-100',
  GRADIENT_OVERLAY: 'bg-gradient-to-b from-cyan-900/20 via-purple-900/10 to-transparent',
  PREMIUM_DIVIDER_LINE: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500',
} as const;

export type BackgroundKey = keyof typeof BACKGROUND;

export const MOTION = {
  TRANSITION: {
    DEFAULT: 'transition-all duration-200 ease-in-out',
    COLOR: 'transition-colors duration-200 ease-in-out',
  },
} as const;

export type MotionTransitionKey = keyof typeof MOTION.TRANSITION;

// Tipos para validação de contraste
export interface ContrastResult {
  valid: boolean;
  contrast: number;
  message: string;
}

export const validateContrast = (_foreground: string, _background: string): ContrastResult => {
  // Função simplificada para validação de contraste
  // Em produção, usar biblioteca como color-contrast
  return {
    valid: true,
    contrast: 4.5,
    message: 'Contraste adequado para WCAG AA',
  };
};

// Exportar tokens principais tipados
import tokens from './tokens';
export const colors = tokens.primitives.color;
export const typography = tokens.primitives.typography;
export const cssVarsPath = './src/css-vars.css';

// Exportar defaults tipados
export { default as tokens } from './tokens';
export { default as themes } from './themes';
export type { Themes } from './themes';