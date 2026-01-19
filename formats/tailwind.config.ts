/**
 * @fileoverview Configuração do Tailwind CSS gerada a partir dos design tokens
 * 
 * @description
 * Configuração do Tailwind CSS gerada automaticamente a partir dos design tokens
 * para integração perfeita. Use esta configuração no seu tailwind.config.js
 * através de theme.extend para ter acesso a todos os tokens como classes utilitárias.
 * 
 * @module formats/tailwind.config
 * @version 2.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 * @generated This file is auto-generated. Do not edit manually.
 * @source tokens/*.json
 */

import { tokens } from '@rainersoft/design-tokens';

export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#ffffff',
          secondary: '#f9fafb',
          tertiary: '#f3f4f6',
          disabled: '#f3f4f6',
          overlay: 'rgba(0, 0, 0, 0.5)',
          inverse: '#000000',
        },
        text: {
          primary: '#111827',
          secondary: '#4b5563',
          tertiary: '#9ca3af',
          disabled: '#d1d5db',
          inverse: '#ffffff',
          onPrimary: '#ffffff',
          onSecondary: '#111827',
          link: '#2563eb',
          linkHover: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","'Segoe UI'","Roboto","'Helvetica Neue'","Arial","'Noto Sans'","sans-serif","'Apple Color Emoji'","'Segoe UI Emoji'","'Segoe UI Symbol'","'Noto Color Emoji'"],
        mono: ["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","'Liberation Mono'","'Courier New'","monospace"],
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
    },
  },
  darkMode: 'class',
} as const;

export default tailwindConfig;