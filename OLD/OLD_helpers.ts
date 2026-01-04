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

/**
 * Obtém uma cor de token de forma segura com fallback
 * 
 * Acessa cores primitivas por tema, nome da cor e shade específico.
 * Retorna fallback se o token não existir.
 * 
 * @param theme - Tema ('dark' ou 'light')
 * @param color - Nome da cor primitiva (ex: 'emerald', 'cyan', 'purple')
 * @param shade - Tom da cor (50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
 * @param fallback - Cor de fallback em hexadecimal
 * @returns Cor hexadecimal
 * 
 * @example
 * ```typescript
 * getTokenColor('dark', 'emerald', 400, '#10b981') // Retorna emerald[400] do tema dark
 * getTokenColor('light', 'cyan', 500, '#06b6d4')   // Retorna cyan[500] do tema light
 * ```
 */
export function getTokenColor(
  theme: 'dark' | 'light',
  color: string,
  shade: number,
  fallback: string
): string {
  try {
    const themeColors = theme === 'dark' ? darkTheme.colors : lightTheme.colors;
    
    // Acessa cores primitivas
    if (!themeColors?.primitive) {
      return fallback;
    }
    
    const colorObj = (themeColors.primitive as Record<string, Record<number, string>>)[color];
    if (!colorObj || typeof colorObj !== 'object') {
      return fallback;
    }
    
    const colorValue = colorObj[shade];
    return typeof colorValue === 'string' ? colorValue : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Carrega os design tokens de forma segura
 * 
 * Útil para componentes que são carregados dinamicamente ou em SSR.
 * Retorna tokens e GRADIENT_DIRECTIONS com fallbacks seguros.
 * 
 * @returns Objeto contendo tokens e GRADIENT_DIRECTIONS
 * 
 * @example
 * ```typescript
 * const { tokens: designTokens, GRADIENT_DIRECTIONS } = loadDesignTokensSafely();
 * if (designTokens) {
 *   const color = designTokens.colors.dark.primary.base;
 * }
 * ```
 */
export function loadDesignTokensSafely() {
  return {
    tokens,
    GRADIENT_DIRECTIONS: {
      TO_TOP: 'bg-gradient-to-t',
      TO_RIGHT: 'bg-gradient-to-r',
      TO_BOTTOM: 'bg-gradient-to-b',
      TO_LEFT: 'bg-gradient-to-l',
      TO_TOP_RIGHT: 'bg-gradient-to-tr',
      TO_TOP_LEFT: 'bg-gradient-to-tl',
      TO_BOTTOM_RIGHT: 'bg-gradient-to-br',
      TO_BOTTOM_LEFT: 'bg-gradient-to-bl',
    },
  };
}

/**
 * Hook para acessar design tokens de forma segura em componentes
 * 
 * @returns Objeto contendo tokens e GRADIENT_DIRECTIONS
 * 
 * @example
 * ```typescript
 * const { tokens: designTokens, GRADIENT_DIRECTIONS } = useDesignTokens();
 * if (designTokens) {
 *   const color = designTokens.colors.dark.primary.base;
 * }
 * ```
 */
export function useDesignTokens() {
  return loadDesignTokensSafely();
}

/**
 * Delays de transição para animações e efeitos
 *
 * Conjunto de valores padronizados para delays de transição
 * usados em partículas, animações e efeitos visuais.
 *
 * @example
 * ```typescript
 * import { TRANSITION_DELAYS } from '@rainersoft/design-tokens'
 *
 * <div style={{ animationDelay: TRANSITION_DELAYS.particle2 }}>
 *   // partícula animada
 * </div>
 * ```
 */
export const TRANSITION_DELAYS = {
  /** Delay de 1s para primeira partícula */
  particle1: '1s',
 
  /** Delay de 2s para segunda partícula */
  particle2: '2s',
 
  /** Delay de 3s para terceira partícula */
  particle3: '3s',
 
  /** Delay de 1.5s (variação) */
  short: '1.5s',
 
  /** Delay de 2.5s (variação) */
  medium: '2.5s',
 
  /** Delay de 4s (variação) */
  long: '4s',
} as const;

/**
 * Alias para compatibilidade - ANIMATION_DELAYS aponta para TRANSITION_DELAYS
 */
export const ANIMATION_DELAYS = TRANSITION_DELAYS;


