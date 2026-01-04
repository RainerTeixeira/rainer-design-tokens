// Primitivos (tokens fundamentais - valores absolutos)
import colorPrimitive from './primitives/color-palette.json';
import spacingPrimitive from './primitives/spacing-scale.json';
import typographyPrimitive from './primitives/typography-base.json';
import shadowsPrimitive from './primitives/elevation-tokens.json';
import motionPrimitive from './primitives/motion-tokens.json';
import radiusPrimitive from './primitives/radius-scale.json';
import breakpointsPrimitive from './primitives/breakpoints.json';
import zIndexPrimitive from './primitives/z-index-layers.json';
import borderPrimitive from './primitives/border-tokens.json';
import opacityPrimitive from './primitives/opacity-scale.json';
import layoutPrimitive from './primitives/layout-units.json';
import iconSizesPrimitive from './primitives/icon-scale.json';
import gradientPrimitive from './primitives/gradient-tokens.json';
// Semânticos (tokens com significado)
import colorSemantic from './semantics/color-roles.json';
import spacingSemantic from './semantics/spacing-context.json';
import typographySemantic from './semantics/typography-roles.json';
import borderSemantic from './semantics/border-roles.json';
import layoutSemantic from './semantics/layout-structure.json';
import elevationSemantic from './semantics/elevation-roles.json';
import motionSemantic from './semantics/motion-roles.json';

// Temas (completos)
import lightTheme from './themes/theme-light.json';
import darkTheme from './themes/theme-dark.json';
export const tokens = {
  // Primitivos (fundamentais)
  primitives: {
    color: colorPrimitive.palette || colorPrimitive,
    spacing: spacingPrimitive.spacing || spacingPrimitive,
    typography: typographyPrimitive.typography || typographyPrimitive,
    shadows: shadowsPrimitive.shadows || shadowsPrimitive,
    motion: motionPrimitive.motion || motionPrimitive,
    radius: radiusPrimitive.radius || radiusPrimitive,
    breakpoints: breakpointsPrimitive.breakpoints || breakpointsPrimitive,
    zIndex: zIndexPrimitive.zIndex || zIndexPrimitive,
    border: borderPrimitive.border || borderPrimitive,
    opacity: opacityPrimitive.opacity || opacityPrimitive,
    layout: layoutPrimitive.layout || layoutPrimitive,
    iconSize: iconSizesPrimitive.iconSize || iconSizesPrimitive,
    gradients: gradientPrimitive.gradients || gradientPrimitive,
  },
  // Semânticos (com significado)
  semantics: {
    color: colorSemantic.color || colorSemantic,
    spacing: spacingSemantic.spacing || spacingSemantic,
    typography: typographySemantic.typography || typographySemantic,
    border: borderSemantic.border || borderSemantic,
    layout: layoutSemantic.layout || layoutSemantic,
    elevation: elevationSemantic.elevation || elevationSemantic,
    motion: motionSemantic.motion || motionSemantic,
  },
  // Temas (completos)
  themes: {
    light: lightTheme.color || lightTheme,
    dark: darkTheme.color || darkTheme,
  },
};
export default tokens;

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
};
export { 
  colorSemantic,
  spacingSemantic,
  typographySemantic,
  borderSemantic,
  layoutSemantic,
  elevationSemantic,
  motionSemantic,
  lightTheme,
  darkTheme,
};
