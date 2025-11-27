/**
 * Design Tokens Helpers
 *
 * Funções utilitárias para facilitar o uso dos design tokens.
 * Fornece helpers para acessar cores, espaçamentos, tipografia, etc.
 *
 * @module @rainersoft/design-tokens/helpers
 * @author Rainer Teixeira
 */

import { darkTheme, lightTheme, tokens, type Tokens } from '../index';

/**
 * Obtém cores do tema claro
 */
export function getLightColors() {
  return lightTheme.colors;
}

/**
 * Obtém cores do tema escuro
 */
export function getDarkColors() {
  return darkTheme.colors;
}

/**
 * Obtém espaçamento do sistema de design
 */
export function getSpacing() {
  return tokens.spacing;
}

/**
 * Obtém tipografia do sistema de design
 */
export function getTypography() {
  return tokens.typography;
}

/**
 * Obtém raios de borda do sistema de design
 */
export function getRadius() {
  return tokens.radius;
}

/**
 * Obtém sombras do sistema de design
 */
export function getShadows(theme: 'light' | 'dark' = 'light') {
  return tokens.shadows[theme];
}

/**
 * Helper para obter valor de espaçamento
 */
export function spacing(size: keyof Tokens['spacing']): string {
  return tokens.spacing[size];
}

/**
 * Helper para obter valor de raio de borda
 */
export function radius(size: keyof Tokens['radius']): string {
  return tokens.radius[size];
}


