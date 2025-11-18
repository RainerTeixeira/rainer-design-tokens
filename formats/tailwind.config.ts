/**
 * @fileoverview Configuração do Tailwind CSS gerada a partir dos design tokens
 * 
 * @description
 * Configuração do Tailwind CSS gerada automaticamente a partir dos design tokens
 * para integração perfeita. Use esta configuração no seu tailwind.config.js
 * através de theme.extend para ter acesso a todos os tokens como classes utilitárias.
 * 
 * @module formats/tailwind.config
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 * @generated This file is auto-generated. Do not edit manually.
 * @source tokens/*.json
 * 
 * @example
 * ```typescript
 * // tailwind.config.ts
 * import { tailwindConfig } from '@rainersoft/design-tokens/formats/tailwind.config';
 * 
 * export default {
 *   ...tailwindConfig,
 *   content: ['./src/**/*.{js,ts,jsx,tsx}'],
 *   // Suas configurações adicionais
 * };
 * ```
 */

import { tokens } from '../tokens';

/**
 * Configuração do Tailwind CSS baseada nos design tokens
 * 
 * @description
 * Objeto de configuração completo do Tailwind CSS que estende o tema padrão
 * com todos os tokens de design do sistema. Inclui cores, tipografia,
 * espaçamento, raios de borda, sombras e animações.
 * 
 * @type {Object}
 * @property {Object} theme - Configurações de tema do Tailwind
 * @property {Object} theme.extend - Extensões do tema padrão
 * @property {Object} theme.extend.colors - Cores customizadas (brand, background, surface, text, border, status)
 * @property {Object} theme.extend.fontFamily - Famílias de fontes customizadas
 * @property {Object} theme.extend.fontSize - Tamanhos de fonte dos tokens
 * @property {Object} theme.extend.fontWeight - Pesos de fonte dos tokens
 * @property {Object} theme.extend.lineHeight - Alturas de linha dos tokens
 * @property {Object} theme.extend.letterSpacing - Espaçamento entre letras dos tokens
 * @property {Object} theme.extend.spacing - Espaçamentos dos tokens
 * @property {Object} theme.extend.borderRadius - Raios de borda dos tokens
 * @property {Object} theme.extend.boxShadow - Sombras dos tokens (incluindo efeitos glow)
 * @property {Object} theme.extend.animation - Animações dos tokens (nome, duração, timing)
 * @property {Object} theme.extend.keyframes - Keyframes das animações
 * @property {string} darkMode - Modo escuro configurado como 'class'
 * 
 * @constant
 * @readonly
 * 
 * @example
 * ```typescript
 * import { tailwindConfig } from 'rainer-design-tokens/formats/tailwind.config';
 * 
 * // Usar em tailwind.config.js
 * export default {
 *   ...tailwindConfig,
 *   content: ['./src'],
 * };
 * 
 * // Agora você pode usar as classes em seus componentes
 * ```
 */
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          base: '#0891b2',
          hover: '#0e7490',
          active: '#155e75',
          disabled: '#d4d4d4',
          focus: '#0891b2',
          background: '#ecfeff',
          backgroundHover: '#cffafe',
          backgroundActive: '#a5f3fc',
          border: '#0891b2',
          borderHover: '#0e7490',
          borderFocus: '#06b6d4',
          text: '#ffffff',
          textHover: '#ffffff',
          textDisabled: '#a3a3a3',
        },
        // Secondary colors
        secondary: {
          base: '#9333ea',
          hover: '#7e22ce',
          active: '#6b21a8',
          disabled: '#d4d4d4',
          focus: '#9333ea',
          background: '#faf5ff',
          backgroundHover: '#f3e8ff',
          backgroundActive: '#e9d5ff',
          border: '#9333ea',
          borderHover: '#7e22ce',
          borderFocus: '#a855f7',
          text: '#ffffff',
          textHover: '#ffffff',
          textDisabled: '#a3a3a3',
        },
        // Accent colors
        accent: {
          base: '#db2777',
          hover: '#be185d',
          active: '#9f1239',
          disabled: '#d4d4d4',
          focus: '#db2777',
          background: '#fdf2f8',
          backgroundHover: '#fce7f3',
          backgroundActive: '#fbcfe8',
          border: '#db2777',
          borderHover: '#be185d',
          borderFocus: '#ec4899',
          text: '#ffffff',
          textHover: '#ffffff',
          textDisabled: '#a3a3a3',
        },
        // Background colors
        background: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          inverse: '#0a0a0f',
          overlay: 'rgba(0, 0, 0, 0.5)',
          muted: '#f9fafb',
        },
        // Surface colors
        surface: {
          primary: '#ffffff',
          secondary: '#fafafa',
          tertiary: '#f5f5f5',
          elevated: '#ffffff',
          overlay: 'rgba(0, 0, 0, 0.5)',
          hover: '#f9fafb',
          active: '#f3f4f6',
        },
        // Text colors
        text: {
          primary: '#171717',
          secondary: '#404040',
          tertiary: '#737373',
          inverse: '#ffffff',
          disabled: '#a3a3a3',
          link: '#0891b2',
          linkHover: '#0e7490',
          linkActive: '#155e75',
          linkVisited: '#7e22ce',
          onPrimary: '#ffffff',
          onSecondary: '#ffffff',
          onAccent: '#ffffff',
          onBackground: '#171717',
          onSurface: '#171717',
        },
        // Border colors
        border: {
          primary: '#e5e5e5',
          secondary: '#d4d4d4',
          tertiary: '#a3a3a3',
          focus: '#0891b2',
          focusRing: '#06b6d4',
          inverse: '#404040',
          hover: '#d4d4d4',
          active: '#a3a3a3',
          disabled: '#e5e5e5',
        },
        // Status colors
        success: {
          base: '#22c55e',
          hover: '#16a34a',
          active: '#15803d',
          background: '#f0fdf4',
          backgroundHover: '#dcfce7',
          border: '#86efac',
          text: '#ffffff',
          textOnBackground: '#166534',
        },
        warning: {
          base: '#f59e0b',
          hover: '#d97706',
          active: '#b45309',
          background: '#fffbeb',
          backgroundHover: '#fef3c7',
          border: '#fcd34d',
          text: '#ffffff',
          textOnBackground: '#92400e',
        },
        error: {
          base: '#ef4444',
          hover: '#dc2626',
          active: '#b91c1c',
          background: '#fef2f2',
          backgroundHover: '#fee2e2',
          border: '#fca5a5',
          text: '#ffffff',
          textOnBackground: '#991b1b',
        },
        info: {
          base: '#3b82f6',
          hover: '#2563eb',
          active: '#1d4ed8',
          background: '#eff6ff',
          backgroundHover: '#dbeafe',
          border: '#93c5fd',
          text: '#ffffff',
          textOnBackground: '#1e40af',
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","'Segoe UI'","Roboto","'Helvetica Neue'","Arial","'Noto Sans'","sans-serif","'Apple Color Emoji'","'Segoe UI Emoji'","'Segoe UI Symbol'","'Noto Color Emoji'"],
        serif: ["ui-serif","Georgia","Cambria","'Times New Roman'","Times","serif"],
        mono: ["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","'Liberation Mono'","'Courier New'","monospace"],
        display: 'var(--font-orbitron, ui-sans-serif)',
        body: 'var(--font-inter, ui-sans-serif)',
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: {
        ...tokens.shadows.light,
        'glow-cyan': '0 0 20px rgba(0, 230, 255, 0.5), 0 0 40px rgba(0, 230, 255, 0.3)',
        'glow-pink': '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(125, 0, 255, 0.5), 0 0 40px rgba(125, 0, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
      },
      keyframes: {
        'accordion-down': {
          'from': {
            height: '0',
          },
          'to': {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          'from': {
            height: 'var(--radix-accordion-content-height)',
          },
          'to': {
            height: '0',
          },
        },
        'slide-in': {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  darkMode: 'class',
} as const;

/**
 * Exportação padrão da configuração do Tailwind
 * 
 * @description
 * Exporta a configuração do Tailwind CSS como exportação padrão do módulo.
 * 
 * @type {typeof tailwindConfig}
 * @default tailwindConfig
 */
export default tailwindConfig;
