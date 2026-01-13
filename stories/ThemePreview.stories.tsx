import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Theme Preview',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Preview completo dos temas Light e Dark mostrando como os tokens trabalham juntos.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview do tema claro
 */
export const LightThemePreview: Story = {
  render: () => {
    const theme = tokens.themes.light;

    return (
      <div
        style={{
          padding: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: theme.background.primary,
          color: theme.text.primary,
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            backgroundColor: theme.surface.primary,
            border: `1px solid ${theme.border.primary}`,
            borderRadius: tokens.primitives.radius.lg,
            padding: tokens.primitives.spacing['8'],
            boxShadow: tokens.primitives.shadows.light.md,
          }}
        >
          <h1
            style={{
              fontSize: tokens.primitives.typography.fontSize['4xl'],
              fontWeight: parseInt(tokens.primitives.typography.fontWeight.bold),
              color: theme.text.primary,
              marginBottom: tokens.primitives.spacing['4'],
            }}
          >
            Light Theme Preview
          </h1>
          <p
            style={{
              fontSize: tokens.primitives.typography.fontSize.base,
              color: theme.text.secondary,
              marginBottom: tokens.primitives.spacing['6'],
            }}
          >
            Este é um preview do tema claro mostrando como os tokens trabalham juntos.
          </p>

          <div style={{ display: 'flex', gap: tokens.primitives.spacing['4'], flexWrap: 'wrap' }}>
            <button
              style={{
                padding: `${tokens.primitives.spacing['3']} ${tokens.primitives.spacing['6']}`,
                backgroundColor: theme.primary.base,
                color: theme.text.inverse,
                border: 'none',
                borderRadius: tokens.primitives.radius.md,
                fontSize: tokens.primitives.typography.fontSize.base,
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.semibold),
                cursor: 'pointer',
              }}
            >
              Primary Button
            </button>
            <button
              style={{
                padding: `${tokens.primitives.spacing['3']} ${tokens.primitives.spacing['6']}`,
                backgroundColor: theme.secondary.base,
                color: theme.text.inverse,
                border: 'none',
                borderRadius: tokens.primitives.radius.md,
                fontSize: tokens.primitives.typography.fontSize.base,
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.semibold),
                cursor: 'pointer',
              }}
            >
              Secondary Button
            </button>
          </div>

          <div
            style={{
              marginTop: tokens.primitives.spacing['8'],
              padding: tokens.primitives.spacing['6'],
              backgroundColor: theme.surface.secondary,
              borderRadius: tokens.primitives.radius.md,
              border: `1px solid ${theme.border.secondary}`,
            }}
          >
            <h2
              style={{
                fontSize: tokens.primitives.typography.fontSize['2xl'],
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.bold),
                marginBottom: tokens.primitives.spacing['4'],
              }}
            >
              Card Example
            </h2>
            <p style={{ color: theme.text.secondary }}>
              Este card demonstra o uso de surface colors, spacing e border radius.
            </p>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Preview do tema escuro (Cyberpunk)
 */
export const DarkThemePreview: Story = {
  render: () => {
    const theme = tokens.themes.dark;

    return (
      <div
        style={{
          padding: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: theme.background.primary,
          color: theme.text.primary,
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            backgroundColor: theme.surface.primary,
            border: `1px solid ${theme.border.primary}`,
            borderRadius: tokens.primitives.radius.lg,
            padding: tokens.primitives.spacing['8'],
            boxShadow: tokens.primitives.shadows.dark.md,
          }}
        >
          <h1
            style={{
              fontSize: tokens.primitives.typography.fontSize['4xl'],
              fontWeight: parseInt(tokens.primitives.typography.fontWeight.bold),
              color: theme.text.primary,
              marginBottom: tokens.primitives.spacing['4'],
              textShadow: theme.effects?.glowCyan || 'none',
            }}
          >
            Dark Theme Preview (Cyberpunk)
          </h1>
          <p
            style={{
              fontSize: tokens.primitives.typography.fontSize.base,
              color: theme.text.secondary,
              marginBottom: tokens.primitives.spacing['6'],
            }}
          >
            Este é um preview do tema escuro cyberpunk com efeitos neon e brilho.
          </p>

          <div style={{ display: 'flex', gap: tokens.primitives.spacing['4'], flexWrap: 'wrap' }}>
            <button
              style={{
                padding: `${tokens.primitives.spacing['3']} ${tokens.primitives.spacing['6']}`,
                backgroundColor: theme.primary.base,
                color: theme.text.inverse,
                border: `1px solid ${theme.border.neon}`,
                borderRadius: tokens.primitives.radius.md,
                fontSize: tokens.primitives.typography.fontSize.base,
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.semibold),
                cursor: 'pointer',
                boxShadow: theme.effects?.glowCyan || 'none',
              }}
            >
              Primary Button
            </button>
            <button
              style={{
                padding: `${tokens.primitives.spacing['3']} ${tokens.primitives.spacing['6']}`,
                backgroundColor: theme.secondary.base,
                color: theme.text.inverse,
                border: `1px solid ${theme.border.neon}`,
                borderRadius: tokens.primitives.radius.md,
                fontSize: tokens.primitives.typography.fontSize.base,
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.semibold),
                cursor: 'pointer',
                boxShadow: theme.effects?.glowPurple || 'none',
              }}
            >
              Secondary Button
            </button>
          </div>

          <div
            style={{
              marginTop: tokens.primitives.spacing['8'],
              padding: tokens.primitives.spacing['6'],
              backgroundColor: theme.surface.secondary,
              borderRadius: tokens.primitives.radius.md,
              border: `1px solid ${theme.border.secondary}`,
            }}
          >
            <h2
              style={{
                fontSize: tokens.primitives.typography.fontSize['2xl'],
                fontWeight: parseInt(tokens.primitives.typography.fontWeight.bold),
                marginBottom: tokens.primitives.spacing['4'],
                color: theme.text.neonCyan,
              }}
            >
              Card Example
            </h2>
            <p style={{ color: theme.text.secondary }}>
              Este card demonstra o uso de surface colors, spacing e border radius no tema cyberpunk.
            </p>
          </div>

          {theme.gradients && (
            <div
              style={{
                marginTop: tokens.primitives.spacing['8'],
                padding: tokens.primitives.spacing['8'],
                background: theme.gradients.primary,
                borderRadius: tokens.primitives.radius.lg,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: tokens.primitives.typography.fontSize['2xl'],
                  fontWeight: parseInt(tokens.primitives.typography.fontWeight.bold),
                  color: theme.text.inverse,
                }}
              >
                Gradient Example
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  },
};



