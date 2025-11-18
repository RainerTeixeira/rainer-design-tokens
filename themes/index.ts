/**
 * @fileoverview Ponto de entrada dos temas
 * 
 * @description
 * Exporta os temas claro e escuro para fácil consumo.
 * Cada tema agrupa todos os tokens de design de forma organizada,
 * facilitando a aplicação de temas completos na aplicação.
 * 
 * @module themes
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 * 
 * @example
 * ```typescript
 * import { themes, lightTheme, darkTheme } from '@rainersoft/design-tokens';
 * 
 * // Usar tema completo
 * const currentTheme = themes.light;
 * 
 * // Ou importar diretamente
 * const colors = lightTheme.colors;
 * ```
 */

/**
 * Exporta o tema claro e seu tipo
 * 
 * @description
 * Tema claro profissional e limpo, adequado para uso diurno.
 * 
 * @see {LightTheme} Para o tipo TypeScript do tema claro
 */
export { lightTheme, type LightTheme } from './light';

/**
 * Exporta o tema escuro e seu tipo
 * 
 * @description
 * Tema escuro inspirado no estilo cyberpunk com cores neon e efeitos de brilho.
 * 
 * @see {DarkTheme} Para o tipo TypeScript do tema escuro
 */
export { darkTheme, type DarkTheme } from './dark';

/**
 * Objeto contendo todos os temas disponíveis
 * 
 * @description
 * Objeto que agrupa todos os temas do sistema, permitindo acesso
 * fácil e organizado aos diferentes temas disponíveis.
 * 
 * @type {Object}
 * @property {LightTheme} light - Tema claro
 * @property {DarkTheme} dark - Tema escuro (cyberpunk)
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { themes } from 'rainer-design-tokens';
 * 
 * // Acessar tema claro
 * const lightColors = themes.light.colors;
 * 
 * // Acessar tema escuro
 * const darkShadows = themes.dark.shadows;
 * ```
 */
import { lightTheme } from './light';
import { darkTheme } from './dark';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

/**
 * Tipo TypeScript para todos os temas
 * 
 * @typedef {Object} Themes
 * @description
 * Tipo que representa a estrutura completa de todos os temas disponíveis.
 * Útil para type-checking e autocomplete em IDEs.
 */
export type Themes = typeof themes;

/**
 * Exportação padrão dos temas
 * 
 * @description
 * Exporta o objeto principal contendo todos os temas disponíveis.
 * 
 * @type {Themes}
 * @default themes
 */
export default themes;

