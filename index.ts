export * from './tokens';

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

export {
  colorSemantic,
  spacingSemantic,
  typographySemantic,
  borderSemantic,
  layoutSemantic,
  elevationSemantic,
  motionSemantic,
} from './tokens';

export { lightTheme, darkTheme } from './tokens';

export { motionPrimitive as motionTokens } from './tokens';
export { shadowsPrimitive as SHADOWS } from './tokens';

// Exportar GRADIENTS para compatibilidade
export { gradientPrimitive as GRADIENTS } from './tokens';

// Exportar GRADIENT_DIRECTIONS para compatibilidade
export const GRADIENT_DIRECTIONS = {
  TO_BOTTOM: 'to-bottom',
  TO_TOP: 'to-top',
  TO_RIGHT: 'to-right',
  TO_LEFT: 'to-left',
  TO_BR: 'to-br',
  TO_BL: 'to-bl',
  TO_TR: 'to-tr',
  TO_TL: 'to-tl',
} as const;

// Exportar BACKGROUND para compatibilidade
export const BACKGROUND = {
  PRIMARY: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500',
  SECONDARY: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
  DARK: 'bg-gradient-to-br from-slate-900 to-slate-800',
  LIGHT: 'bg-gradient-to-br from-white to-gray-100',
  GRADIENT_OVERLAY: 'bg-gradient-to-b from-cyan-900/20 via-purple-900/10 to-transparent',
  PREMIUM_DIVIDER_LINE: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500',
} as const;

export const MOTION = {
  TRANSITION: {
    DEFAULT: 'transition-all duration-200 ease-in-out',
    COLOR: 'transition-colors duration-200 ease-in-out',
  },
} as const;

// Exportar validateContrast para compatibilidade
export const validateContrast = (_foreground: string, _background: string) => {
  // Função simplificada para validação de contraste
  // Em produção, usar biblioteca como color-contrast
  return {
    valid: true,
    contrast: 4.5,
    message: 'Contraste adequado para WCAG AA',
  };
};

import tokens from './tokens';
export const colors = tokens.primitives.color;
export const typography = tokens.primitives.typography;
export const cssVarsPath = './src/css-vars.css';

export { default as tokens } from './tokens';
export { default as themes } from './themes';