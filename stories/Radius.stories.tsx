import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Border Radius',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Escala de raios de borda
 */
export const RadiusScale: Story = {
  render: () => {
    const radius = tokens.primitives.radius;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Border Radius Scale
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(radius).map(([key, value]) => (
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
                  minWidth: '100px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#737373',
                  textTransform: 'capitalize',
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
                {String(value)}
              </div>
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#0891b2',
                  borderRadius: String(value),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                {key}
              </div>
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
 * Exemplos de uso de raios de borda
 */
export const RadiusExamples: Story = {
  render: () => {
    const radius = tokens.primitives.radius;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Border Radius Examples
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Cards */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Card Examples
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {['sm', 'base', 'md', 'lg', 'xl', '2xl'].map((size) => (
                <div
                  key={size}
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #e5e5e5',
                    borderRadius: radius[size as keyof typeof radius],
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                    Card {size}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                    borderRadius: {radius[size as keyof typeof radius]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Button Examples
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['sm', 'base', 'md', 'lg', 'xl'].map((size) => (
                <button
                  key={size}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#0891b2',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: radius[size as keyof typeof radius],
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Button {size}
                </button>
              ))}
            </div>
          </div>

          {/* Full radius */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Full Radius (Pill Shape)
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#0891b2',
                  color: '#ffffff',
                  borderRadius: radius.full,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  display: 'inline-block',
                }}
              >
                Pill Button
              </div>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#0891b2',
                  borderRadius: radius.full,
                  display: 'inline-block',
                }}
              />
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#737373' }}>
              borderRadius: {radius.full}
            </p>
          </div>
        </div>
      </div>
    );
  },
};



