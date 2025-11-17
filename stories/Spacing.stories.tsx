import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Spacing',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Escala de espaçamento (8pt grid)
 */
export const SpacingScale: Story = {
  render: () => {
    const spacing = tokens.spacing;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Spacing Scale (8pt Grid)
        </h1>
        <p style={{ color: '#737373', marginBottom: '2rem' }}>
          Sistema de espaçamento baseado em grid de 8 pontos para consistência
          visual.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(spacing)
            .sort((a, b) => {
              const aValue = parseFloat(a[1]) || 0;
              const bValue = parseFloat(b[1]) || 0;
              return aValue - bValue;
            })
            .map(([key, value]) => (
              <div
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  padding: '1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    minWidth: '80px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#737373',
                    fontFamily: 'monospace',
                  }}
                >
                  {key}
                </div>
                <div
                  style={{
                    minWidth: '100px',
                    fontSize: '0.875rem',
                    color: '#737373',
                    fontFamily: 'monospace',
                    textAlign: 'right',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    width: value,
                    height: '40px',
                    backgroundColor: '#0891b2',
                    borderRadius: '4px',
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    fontSize: '0.875rem',
                    color: '#737373',
                  }}
                >
                  Visual representation
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  },
};

/**
 * Exemplos de uso de espaçamento
 */
export const SpacingExamples: Story = {
  render: () => {
    const spacing = tokens.spacing;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Spacing Examples
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Padding examples */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Padding Examples
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['2', '4', '6', '8', '12', '16'].map((size) => (
                <div
                  key={size}
                  style={{
                    padding: spacing[size],
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                  }}
                >
                  p-{size} ({spacing[size]})
                </div>
              ))}
            </div>
          </div>

          {/* Margin examples */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Margin Examples
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['2', '4', '6', '8'].map((size) => (
                <div
                  key={size}
                  style={{
                    marginLeft: spacing[size],
                    padding: spacing['4'],
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                  }}
                >
                  ml-{size} ({spacing[size]})
                </div>
              ))}
            </div>
          </div>

          {/* Gap examples */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Gap Examples
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: spacing['4'],
                padding: spacing['4'],
                backgroundColor: '#f5f5f5',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: spacing['4'],
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e5e5',
                    borderRadius: '4px',
                    textAlign: 'center',
                  }}
                >
                  Item {item}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#737373' }}>
              gap-4 ({spacing['4']})
            </p>
          </div>
        </div>
      </div>
    );
  },
};

