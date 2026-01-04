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
          primary: '{palette.white}',
          secondary: '{palette.gray.50}',
          tertiary: '{palette.gray.100}',
          disabled: '{palette.gray.100}',
          overlay: 'rgba(0, 0, 0, 0.5)',
          inverse: '{palette.black}',
        },
        text: {
          primary: '{palette.gray.900}',
          secondary: '{palette.gray.600}',
          tertiary: '{palette.gray.400}',
          disabled: '{palette.gray.300}',
          inverse: '{palette.white}',
          onPrimary: '{palette.white}',
          onSecondary: '{palette.gray.900}',
          link: '{palette.blue.600}',
          linkHover: '{palette.blue.700}',
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