// Primitivos (tokens fundamentais - valores absolutos)
import rawColorPrimitive from './primitives/color-palette.json';
import rawSpacingPrimitive from './primitives/spacing-scale.json';
import rawTypographyPrimitive from './primitives/typography-base.json';
import rawShadowsPrimitive from './primitives/elevation-tokens.json';
import rawMotionPrimitive from './primitives/motion-tokens.json';
import rawRadiusPrimitive from './primitives/radius-scale.json';
import rawBreakpointsPrimitive from './primitives/breakpoints.json';
import rawZIndexPrimitive from './primitives/z-index-layers.json';
import rawBorderPrimitive from './primitives/border-tokens.json';
import rawOpacityPrimitive from './primitives/opacity-scale.json';
import rawLayoutPrimitive from './primitives/layout-units.json';
import rawIconSizesPrimitive from './primitives/icon-scale.json';
import rawGradientPrimitive from './primitives/gradient-tokens.json';
// Sem�nticos (tokens com significado)
import rawColorSemantic from './semantics/color-roles.json';
import rawSpacingSemantic from './semantics/spacing-context.json';
import rawTypographySemantic from './semantics/typography-roles.json';
import rawBorderSemantic from './semantics/border-roles.json';
import rawLayoutSemantic from './semantics/layout-structure.json';
import rawElevationSemantic from './semantics/elevation-roles.json';
import rawMotionSemantic from './semantics/motion-roles.json';

// Temas (completos)
import rawLightTheme from './themes/theme-light.json';
import rawDarkTheme from './themes/theme-dark.json';

// Normalizar e expor primitivos/t temas em forma 'flat' para facilitar consumo
const colorPrimitive = (rawColorPrimitive as any).palette || rawColorPrimitive;
const spacingPrimitive =
  (rawSpacingPrimitive as any).spacing || rawSpacingPrimitive;
const typographyPrimitive =
  (rawTypographyPrimitive as any).typography || rawTypographyPrimitive;
const shadowsPrimitive =
  (rawShadowsPrimitive as any).shadows || rawShadowsPrimitive;
const motionPrimitive =
  (rawMotionPrimitive as any).motion || rawMotionPrimitive;
const radiusPrimitive =
  (rawRadiusPrimitive as any).radius || rawRadiusPrimitive;
const breakpointsPrimitive =
  (rawBreakpointsPrimitive as any).breakpoints || rawBreakpointsPrimitive;
const zIndexPrimitive =
  (rawZIndexPrimitive as any).zIndex || rawZIndexPrimitive;
const borderPrimitive =
  (rawBorderPrimitive as any).border || rawBorderPrimitive;
const opacityPrimitive =
  (rawOpacityPrimitive as any).opacity || rawOpacityPrimitive;
const layoutPrimitive =
  (rawLayoutPrimitive as any).layout || rawLayoutPrimitive;
const iconSizesPrimitive =
  (rawIconSizesPrimitive as any).iconSize || rawIconSizesPrimitive;
const gradientPrimitive =
  (rawGradientPrimitive as any).gradients || rawGradientPrimitive;

// Resolver temas para exportação plana (facilita consumo e garante identidade)
const lightTheme = (rawLightTheme as any).color || rawLightTheme;
const darkTheme = (rawDarkTheme as any).color || rawDarkTheme;

export const tokens = {
  // Primitivos (fundamentais)
  primitives: {
    color: colorPrimitive,
    spacing: spacingPrimitive,
    typography: typographyPrimitive,
    shadows: shadowsPrimitive,
    motion: motionPrimitive,
    radius: radiusPrimitive,
    breakpoints: breakpointsPrimitive,
    zIndex: zIndexPrimitive,
    border: borderPrimitive,
    opacity: opacityPrimitive,
    layout: layoutPrimitive,
    iconSize: iconSizesPrimitive,
    gradients: gradientPrimitive,
  },
  // Semanticos (com significado)
  semantics: {
    color: rawColorSemantic.color || rawColorSemantic,
    spacing: rawSpacingSemantic.spacing || rawSpacingSemantic,
    typography: rawTypographySemantic.typography || rawTypographySemantic,
    border: rawBorderSemantic.border || rawBorderSemantic,
    layout: rawLayoutSemantic.layout || rawLayoutSemantic,
    elevation: rawElevationSemantic.elevation || rawElevationSemantic,
    motion: rawMotionSemantic.motion || rawMotionSemantic,
  },
  // Temas (completos)
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
export default tokens;

export {
  // Exportar primitivos normalizados (nome esperado pelos testes)
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
  // Exportar também as versões 'raw' se necessário
  rawColorPrimitive,
  rawSpacingPrimitive,
  rawTypographyPrimitive,
  rawShadowsPrimitive,
  rawMotionPrimitive,
  rawRadiusPrimitive,
  rawBreakpointsPrimitive,
  rawZIndexPrimitive,
  rawBorderPrimitive,
  rawOpacityPrimitive,
  rawLayoutPrimitive,
  rawIconSizesPrimitive,
  rawGradientPrimitive,
};
export {
  // Exportar semânticos já normalizados (sem wrapper JSON)
  lightTheme,
  darkTheme,
};

// Exportar semânticos normalizados (apenas a parte de dados, sem $schema etc)
export const colorSemantic = rawColorSemantic.color || rawColorSemantic;
export const spacingSemantic = rawSpacingSemantic.spacing || rawSpacingSemantic;
export const typographySemantic =
  rawTypographySemantic.typography || rawTypographySemantic;
export const borderSemantic = rawBorderSemantic.border || rawBorderSemantic;
export const layoutSemantic = rawLayoutSemantic.layout || rawLayoutSemantic;
export const elevationSemantic =
  rawElevationSemantic.elevation || rawElevationSemantic;
export const motionSemantic = rawMotionSemantic.motion || rawMotionSemantic;
