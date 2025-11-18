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
  TO_TOP: 'bg-linear-to-t',
  TO_BOTTOM: 'bg-linear-to-b',
  TO_LEFT: 'bg-linear-to-l',
  TO_RIGHT: 'bg-linear-to-r',
  TO_TL: 'bg-linear-to-tl',
  TO_TR: 'bg-linear-to-tr',
  TO_BL: 'bg-linear-to-bl',
  TO_BR: 'bg-linear-to-br',
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
  // Gradientes de texto usando tokens CSS
  TEXT_PRIMARY: 'bg-linear-to-r from-[var(--color-primary-base)] via-[var(--color-secondary-base)] to-[var(--color-accent-base)] bg-clip-text text-transparent',
  
  // Gradientes decorativos usando tokens CSS
  DECORATIVE_PRIMARY: 'bg-linear-to-br from-[var(--color-primary-base)] via-[var(--color-secondary-base)] to-[var(--color-accent-base)]',
  DECORATIVE_CYAN_PURPLE: 'bg-linear-to-r from-[var(--color-primary-base)] to-[var(--color-secondary-base)]',
  DECORATIVE_GREEN_EMERALD: 'bg-linear-to-br from-[var(--color-status-success)] to-[var(--color-accent-base)]',
  
  // Gradientes de botões usando tokens CSS
  BUTTON_CYAN_BLUE: 'bg-linear-to-r from-[var(--color-primary-base)] to-[var(--color-primary-hover)]',
  BUTTON_PURPLE_PINK: 'bg-linear-to-r from-[var(--color-secondary-base)] to-[var(--color-accent-base)]',
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
/**
 * Gradientes compostos - Direção + Cores (Padrão Enterprise)
 * 
 * @description
 * Combina direção e cores em um único token para uso direto.
 * Elimina necessidade de concatenar strings manualmente.
 * Padrão usado por grandes empresas (Google Material, Microsoft Fluent, Shopify Polaris).
 * 
 * @type {Object}
 * @property {string} HORIZONTAL_PRIMARY - Gradiente horizontal com cores primárias
 * @property {string} HORIZONTAL_SECONDARY - Gradiente horizontal com cores secundárias
 * @property {string} HORIZONTAL_DECORATIVE - Gradiente horizontal decorativo
 * @property {string} VERTICAL_PRIMARY - Gradiente vertical com cores primárias
 * @property {string} VERTICAL_SECONDARY - Gradiente vertical com cores secundárias
 * @property {string} DIAGONAL_PRIMARY - Gradiente diagonal com cores primárias
 * @property {string} DIAGONAL_SECONDARY - Gradiente diagonal com cores secundárias
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { GRADIENT_COMPOSITES } from '@rainersoft/design-tokens';
 * 
 * // Usar diretamente sem concatenar
 * <div className={GRADIENT_COMPOSITES.HORIZONTAL_PRIMARY}>
 *   Conteúdo
 * </div>
 * ```
 */
export const GRADIENT_COMPOSITES = {
  // Gradientes horizontais (left-to-right)
  HORIZONTAL_PRIMARY: `${GRADIENT_DIRECTIONS.TO_RIGHT} ${GRADIENTS.BUTTON_CYAN_BLUE}`,
  HORIZONTAL_SECONDARY: `${GRADIENT_DIRECTIONS.TO_RIGHT} ${GRADIENTS.BUTTON_PURPLE_PINK}`,
  HORIZONTAL_DECORATIVE: `${GRADIENT_DIRECTIONS.TO_RIGHT} ${GRADIENTS.DECORATIVE_PRIMARY}`,
  HORIZONTAL_CYAN_PURPLE: `${GRADIENT_DIRECTIONS.TO_RIGHT} ${GRADIENTS.DECORATIVE_CYAN_PURPLE}`,
  
  // Gradientes verticais (top-to-bottom)
  VERTICAL_PRIMARY: `${GRADIENT_DIRECTIONS.TO_BOTTOM} ${GRADIENTS.BUTTON_CYAN_BLUE}`,
  VERTICAL_SECONDARY: `${GRADIENT_DIRECTIONS.TO_BOTTOM} ${GRADIENTS.BUTTON_PURPLE_PINK}`,
  VERTICAL_DECORATIVE: `${GRADIENT_DIRECTIONS.TO_BOTTOM} ${GRADIENTS.DECORATIVE_PRIMARY}`,
  
  // Gradientes diagonais
  DIAGONAL_PRIMARY: `${GRADIENT_DIRECTIONS.TO_BR} ${GRADIENTS.DECORATIVE_PRIMARY}`,
  DIAGONAL_SECONDARY: `${GRADIENT_DIRECTIONS.TO_BR} ${GRADIENTS.DECORATIVE_CYAN_PURPLE}`,
  DIAGONAL_GREEN_EMERALD: `${GRADIENT_DIRECTIONS.TO_BR} ${GRADIENTS.DECORATIVE_GREEN_EMERALD}`,
} as const;

/**
 * Gradientes de cores específicas usando tokens de cor
 * 
 * @description
 * Elimina valores hardcoded como "from-gray-500". Todos os gradientes
 * usam tokens de cor do sistema para garantir consistência.
 * 
 * @type {Object}
 * @property {string} GRAY_SCALE - Gradiente em escala de cinza usando tokens
 * @property {string} BLUE_SCALE - Gradiente em escala de azul usando tokens primários
 * @property {string} SUCCESS_SCALE - Gradiente em escala de verde (sucesso) usando tokens
 * @property {string} TEXT_MUTED - Gradiente para texto muted usando tokens
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { GRADIENT_COLORS } from '@rainersoft/design-tokens';
 * 
 * // Usar gradiente de cinza sem valores hardcoded
 * <div className={GRADIENT_COLORS.GRAY_SCALE}>
 *   Conteúdo
 * </div>
 * ```
 */
export const GRADIENT_COLORS = {
  // Escala de cinza usando tokens de texto
  GRAY_SCALE: `${GRADIENT_DIRECTIONS.TO_RIGHT} from-[var(--color-text-tertiary)] to-[var(--color-text-secondary)]`,
  
  // Escala de azul usando tokens primários
  BLUE_SCALE: `${GRADIENT_DIRECTIONS.TO_RIGHT} from-[var(--color-primary-base)] to-[var(--color-primary-hover)]`,
  
  // Escala de verde (sucesso) usando tokens de status
  SUCCESS_SCALE: `${GRADIENT_DIRECTIONS.TO_RIGHT} from-[var(--color-status-success)] to-[var(--color-status-success-hover)]`,
  
  // Gradiente para texto muted
  TEXT_MUTED: `${GRADIENT_DIRECTIONS.TO_RIGHT} from-[var(--color-text-tertiary)] to-[var(--color-text-secondary)]`,
} as const;

export const BACKGROUND = {
  // Background completo usando token CSS
  FULL: 'bg-[var(--color-background-primary)]',
  
  // Overlay de gradiente usando tokens CSS
  GRADIENT_OVERLAY: 'bg-linear-to-br from-[var(--color-primary-base)]/10 via-[var(--color-secondary-base)]/10 to-[var(--color-accent-base)]/10',
  
  // Divisores premium usando tokens CSS
  PREMIUM_DIVIDER_CONTAINER: 'bg-linear-to-b from-transparent via-[var(--color-primary-base)]/5 to-transparent',
  PREMIUM_DIVIDER_LINE: 'bg-linear-to-r from-transparent via-[var(--color-primary-base)]/50 to-transparent',
  
  // Backgrounds de seção usando tokens CSS
  SECTION_CYAN: 'bg-linear-to-br from-[var(--color-primary-base)]/5 via-[var(--color-primary-base)]/3 to-transparent',
  SECTION_CYAN_VIA: 'bg-linear-to-br from-transparent via-[var(--color-primary-base)]/5 to-transparent',
  SECTION_PURPLE_VIA: 'bg-linear-to-br from-transparent via-[var(--color-secondary-base)]/5 to-transparent',
  SECTION_PINK_VIA: 'bg-linear-to-br from-transparent via-[var(--color-accent-base)]/5 to-transparent',
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
 * Tipo TypeScript para gradientes compostos
 * 
 * @typedef {Object} GradientComposites
 * @description
 * Tipo que representa todos os gradientes compostos (direção + cores).
 */
export type GradientComposites = typeof GRADIENT_COMPOSITES;

/**
 * Tipo TypeScript para gradientes de cores
 * 
 * @typedef {Object} GradientColors
 * @description
 * Tipo que representa todos os gradientes de cores específicas.
 */
export type GradientColors = typeof GRADIENT_COLORS;

/**
 * Tipo TypeScript para backgrounds
 * 
 * @typedef {Object} Background
 * @description
 * Tipo que representa todos os backgrounds utilitários disponíveis.
 */
export type Background = typeof BACKGROUND;

