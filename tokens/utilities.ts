/**
 * @fileoverview Tokens utilitários - Classes Tailwind CSS
 * 
 * @description
 * Tokens utilitários que exportam classes Tailwind CSS prontas para uso.
 * Esses tokens são classes CSS que podem ser aplicadas diretamente nos componentes,
 * facilitando o desenvolvimento e garantindo consistência visual.
 * 
 * @module tokens/utilities
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

/**
 * Direções de gradiente como classes Tailwind CSS
 * 
 * @description
 * Conjunto de constantes que representam as diferentes direções
 * de gradiente disponíveis no Tailwind CSS.
 * 
 * @type {Object}
 * @property {string} TO_TOP - Gradiente de baixo para cima
 * @property {string} TO_BOTTOM - Gradiente de cima para baixo
 * @property {string} TO_LEFT - Gradiente da direita para esquerda
 * @property {string} TO_RIGHT - Gradiente da esquerda para direita
 * @property {string} TO_TL - Gradiente para cima-esquerda (top-left)
 * @property {string} TO_TR - Gradiente para cima-direita (top-right)
 * @property {string} TO_BL - Gradiente para baixo-esquerda (bottom-left)
 * @property {string} TO_BR - Gradiente para baixo-direita (bottom-right)
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { GRADIENT_DIRECTIONS } from 'rainer-design-tokens';
 * 
 * // Aplicar gradiente de cima para baixo
 * <div className={GRADIENT_DIRECTIONS.TO_BOTTOM}>
 * ```
 */
export const GRADIENT_DIRECTIONS = {
  TO_TOP: 'bg-gradient-to-t',
  TO_BOTTOM: 'bg-gradient-to-b',
  TO_LEFT: 'bg-gradient-to-l',
  TO_RIGHT: 'bg-gradient-to-r',
  TO_TL: 'bg-gradient-to-tl',
  TO_TR: 'bg-gradient-to-tr',
  TO_BL: 'bg-gradient-to-bl',
  TO_BR: 'bg-gradient-to-br',
} as const;

/**
 * Gradientes decorativos e utilitários como classes Tailwind CSS
 * 
 * @description
 * Conjunto de gradientes pré-configurados para uso em diferentes
 * contextos da aplicação, incluindo texto, elementos decorativos e botões.
 * 
 * @type {Object}
 * @property {string} TEXT_PRIMARY - Gradiente para texto com efeito de clip
 * @property {string} DECORATIVE_PRIMARY - Gradiente decorativo principal (cyan-purple-pink)
 * @property {string} DECORATIVE_CYAN_PURPLE - Gradiente decorativo cyan para purple
 * @property {string} DECORATIVE_GREEN_EMERALD - Gradiente decorativo green para emerald
 * @property {string} BUTTON_CYAN_BLUE - Gradiente para botões (cyan para blue)
 * @property {string} BUTTON_PURPLE_PINK - Gradiente para botões (purple para pink)
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { GRADIENTS } from 'rainer-design-tokens';
 * 
 * // Aplicar gradiente em texto
 * <h1 className={GRADIENTS.TEXT_PRIMARY}>Título com Gradiente</h1>
 * 
 * // Aplicar gradiente em botão
 * <button className={GRADIENTS.BUTTON_CYAN_BLUE}>Clique aqui</button>
 * ```
 */
export const GRADIENTS = {
  // Gradientes de texto
  TEXT_PRIMARY: 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
  
  // Gradientes decorativos
  DECORATIVE_PRIMARY: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
  DECORATIVE_CYAN_PURPLE: 'bg-gradient-to-r from-cyan-500 to-purple-500',
  DECORATIVE_GREEN_EMERALD: 'bg-gradient-to-br from-green-500 to-emerald-500',
  
  // Gradientes de botões
  BUTTON_CYAN_BLUE: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  BUTTON_PURPLE_PINK: 'bg-gradient-to-r from-purple-500 to-pink-500',
} as const;

/**
 * Backgrounds utilitários como classes Tailwind CSS
 * 
 * @description
 * Conjunto de classes para backgrounds pré-configurados, incluindo
 * overlays, divisores e backgrounds de seção com efeitos de gradiente sutis.
 * 
 * @type {Object}
 * @property {string} FULL - Background completo padrão
 * @property {string} GRADIENT_OVERLAY - Overlay de gradiente sutil
 * @property {string} PREMIUM_DIVIDER_CONTAINER - Container para divisor premium
 * @property {string} PREMIUM_DIVIDER_LINE - Linha do divisor premium
 * @property {string} SECTION_CYAN - Background de seção com gradiente cyan
 * @property {string} SECTION_CYAN_VIA - Background de seção cyan via (meio)
 * @property {string} SECTION_PURPLE_VIA - Background de seção purple via (meio)
 * @property {string} SECTION_PINK_VIA - Background de seção pink via (meio)
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { BACKGROUND } from 'rainer-design-tokens';
 * 
 * // Aplicar background de seção
 * <section className={BACKGROUND.SECTION_CYAN}>
 *   Conteúdo da seção
 * </section>
 * 
 * // Aplicar overlay de gradiente
 * <div className={BACKGROUND.GRADIENT_OVERLAY}>
 *   Conteúdo com overlay
 * </div>
 * ```
 */
export const BACKGROUND = {
  // Background completo
  FULL: 'bg-background',
  
  // Overlay de gradiente
  GRADIENT_OVERLAY: 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10',
  
  // Divisores premium
  PREMIUM_DIVIDER_CONTAINER: 'bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent',
  PREMIUM_DIVIDER_LINE: 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent',
  
  // Backgrounds de seção
  SECTION_CYAN: 'bg-gradient-to-br from-cyan-500/5 via-cyan-500/3 to-transparent',
  SECTION_CYAN_VIA: 'bg-gradient-to-br from-transparent via-cyan-500/5 to-transparent',
  SECTION_PURPLE_VIA: 'bg-gradient-to-br from-transparent via-purple-500/5 to-transparent',
  SECTION_PINK_VIA: 'bg-gradient-to-br from-transparent via-pink-500/5 to-transparent',
} as const;

/**
 * Tipo TypeScript para direções de gradiente
 * 
 * @typedef {Object} GradientDirections
 * @description
 * Tipo que representa todas as direções de gradiente disponíveis.
 * Útil para type-checking e autocomplete em IDEs.
 */
export type GradientDirections = typeof GRADIENT_DIRECTIONS;

/**
 * Tipo TypeScript para gradientes
 * 
 * @typedef {Object} Gradients
 * @description
 * Tipo que representa todos os gradientes pré-configurados disponíveis.
 */
export type Gradients = typeof GRADIENTS;

/**
 * Tipo TypeScript para backgrounds
 * 
 * @typedef {Object} Background
 * @description
 * Tipo que representa todos os backgrounds utilitários disponíveis.
 */
export type Background = typeof BACKGROUND;

