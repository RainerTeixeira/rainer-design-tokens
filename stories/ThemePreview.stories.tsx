import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
    const theme = tokens.colors.light;

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
            borderRadius: tokens.radius.lg,
            padding: tokens.spacing['8'],
            boxShadow: tokens.shadows.light.md,
          }}
        >
          <h1
            style={{
              fontSize: tokens.typography.fontSize['4xl'],
              fontWeight: parseInt(tokens.typography.fontWeight.bold),
              color: theme.text.primary,
              marginBottom: tokens.spacing['4'],
            }}
          >
            Light Theme Preview
          </h1>
          <p
            style={{
              fontSize: tokens.typography.fontSize.base,
              color: theme.text.secondary,
              marginBottom: tokens.spacing['6'],
            }}
          >
            Este é um preview do tema claro mostrando como os tokens trabalham juntos.
          </p>

          <div style={{ display: 'flex', gap: tokens.spacing['4'], flexWrap: 'wrap' }}>
            <button
              style={{
                padding: `${tokens.spacing['3']} ${tokens.spacing['6']}`,
                backgroundColor: theme.brand.primary,
                color: theme.text.inverse,
                border: 'none',
                borderRadius: tokens.radius.md,
                fontSize: tokens.typography.fontSize.base,
                fontWeight: parseInt(tokens.typography.fontWeight.semibold),
                cursor: 'pointer',
              }}
            >
              Primary Button
            </button>
            <button
              style={{
                padding: `${tokens.spacing['3']} ${tokens.spacing['6']}`,
                backgroundColor: theme.brand.secondary,
                color: theme.text.inverse,
                border: 'none',
                borderRadius: tokens.radius.md,
                fontSize: tokens.typography.fontSize.base,
                fontWeight: parseInt(tokens.typography.fontWeight.semibold),
                cursor: 'pointer',
              }}
            >
              Secondary Button
            </button>
          </div>

          <div
            style={{
              marginTop: tokens.spacing['8'],
              padding: tokens.spacing['6'],
              backgroundColor: theme.surface.secondary,
              borderRadius: tokens.radius.md,
              border: `1px solid ${theme.border.secondary}`,
            }}
          >
            <h2
              style={{
                fontSize: tokens.typography.fontSize['2xl'],
                fontWeight: parseInt(tokens.typography.fontWeight.bold),
                marginBottom: tokens.spacing['4'],
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
    const theme = tokens.colors.dark;

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
            borderRadius: tokens.radius.lg,
            padding: tokens.spacing['8'],
            boxShadow: tokens.shadows.dark.md,
          }}
        >
          <h1
            style={{
              fontSize: tokens.typography.fontSize['4xl'],
              fontWeight: parseInt(tokens.typography.fontWeight.bold),
              color: theme.text.primary,
              marginBottom: tokens.spacing['4'],
              textShadow: theme.effects?.glowCyan || 'none',
            }}
          >
            Dark Theme Preview (Cyberpunk)
          </h1>
          <p
            style={{
              fontSize: tokens.typography.fontSize.base,
              color: theme.text.secondary,
              marginBottom: tokens.spacing['6'],
            }}
          >
            Este é um preview do tema escuro cyberpunk com efeitos neon e brilho.
          </p>

          <div style={{ display: 'flex', gap: tokens.spacing['4'], flexWrap: 'wrap' }}>
            <button
              style={{
                padding: `${tokens.spacing['3']} ${tokens.spacing['6']}`,
                backgroundColor: theme.brand.primary,
                color: theme.text.inverse,
                border: `1px solid ${theme.border.neon}`,
                borderRadius: tokens.radius.md,
                fontSize: tokens.typography.fontSize.base,
                fontWeight: parseInt(tokens.typography.fontWeight.semibold),
                cursor: 'pointer',
                boxShadow: theme.effects?.glowCyan || 'none',
              }}
            >
              Primary Button
            </button>
            <button
              style={{
                padding: `${tokens.spacing['3']} ${tokens.spacing['6']}`,
                backgroundColor: theme.brand.secondary,
                color: theme.text.inverse,
                border: `1px solid ${theme.border.neon}`,
                borderRadius: tokens.radius.md,
                fontSize: tokens.typography.fontSize.base,
                fontWeight: parseInt(tokens.typography.fontWeight.semibold),
                cursor: 'pointer',
                boxShadow: theme.effects?.glowPurple || 'none',
              }}
            >
              Secondary Button
            </button>
          </div>

          <div
            style={{
              marginTop: tokens.spacing['8'],
              padding: tokens.spacing['6'],
              backgroundColor: theme.surface.secondary,
              borderRadius: tokens.radius.md,
              border: `1px solid ${theme.border.secondary}`,
            }}
          >
            <h2
              style={{
                fontSize: tokens.typography.fontSize['2xl'],
                fontWeight: parseInt(tokens.typography.fontWeight.bold),
                marginBottom: tokens.spacing['4'],
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
                marginTop: tokens.spacing['8'],
                padding: tokens.spacing['8'],
                background: theme.gradients.primary,
                borderRadius: tokens.radius.lg,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontSize: tokens.typography.fontSize['2xl'],
                  fontWeight: parseInt(tokens.typography.fontWeight.bold),
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

