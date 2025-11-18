import type { Preview } from '@storybook/react';
import '../formats/css-vars.css';

// Helper para acessar tokens com fallback seguro
// Usando valores padrão para evitar erros de carregamento
const getColor = (_path: string[], fallback: string = '#000000'): string => {
  // Retorna fallback diretamente - tokens serão carregados nas stories
  return fallback;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: getColor(['light', 'background', 'primary'], '#ffffff'),
        },
        {
          name: 'dark',
          value: getColor(['dark', 'background', 'primary'], '#0a0a0f'),
        },
      ],
    },
    docs: {
      theme: {
        // Customize Storybook theme with design tokens
        colorPrimary: getColor(['light', 'primary', 'base'], '#0891b2'),
        colorSecondary: getColor(['light', 'secondary', 'base'], '#9333ea'),
        appBg: getColor(['light', 'background', 'primary'], '#ffffff'),
        appContentBg: getColor(['light', 'surface', 'primary'], '#ffffff'),
        appBorderColor: getColor(['light', 'border', 'primary'], '#e5e5e5'),
        textColor: getColor(['light', 'text', 'primary'], '#171717'),
        textInverseColor: getColor(['light', 'text', 'inverse'], '#ffffff'),
        barTextColor: getColor(['light', 'text', 'secondary'], '#404040'),
        barSelectedColor: getColor(['light', 'primary', 'base'], '#0891b2'),
        barBg: getColor(['light', 'surface', 'secondary'], '#fafafa'),
        inputBg: getColor(['light', 'surface', 'primary'], '#ffffff'),
        inputBorder: getColor(['light', 'border', 'primary'], '#e5e5e5'),
        inputTextColor: getColor(['light', 'text', 'primary'], '#171717'),
        inputBorderRadius: '8px',
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const isDark = theme === 'dark';
      
      const bgColor = isDark
        ? getColor(['dark', 'background', 'primary'], '#0a0a0f')
        : getColor(['light', 'background', 'primary'], '#ffffff');
      
      const textColor = isDark
        ? getColor(['dark', 'text', 'primary'], '#ffffff')
        : getColor(['light', 'text', 'primary'], '#171717');
      
      return (
        <div
          className={isDark ? 'dark' : ''}
          style={{
            minHeight: '100vh',
            backgroundColor: bgColor,
            color: textColor,
            padding: '2rem',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

