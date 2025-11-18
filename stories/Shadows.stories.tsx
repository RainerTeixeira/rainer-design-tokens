import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Shadows',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Sombras do tema claro
 */
export const LightShadows: Story = {
  render: () => {
    const shadows = tokens.shadows.light;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Light Theme Shadows
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {Object.entries(shadows).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: '2rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                boxShadow: value,
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {key}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#737373',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all',
                  marginTop: '1rem',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Sombras do tema escuro
 */
export const DarkShadows: Story = {
  render: () => {
    const shadows = tokens.shadows.dark;

    return (
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#0a0a0f',
          minHeight: '100vh',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#b3ffff',
          }}
        >
          Dark Theme Shadows
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {Object.entries(shadows).map(([key, value]) => {
            if (typeof value === 'string') {
              return (
                <div
                  key={key}
                  style={{
                    padding: '2rem',
                    backgroundColor: '#171717',
                    border: '1px solid #262626',
                    borderRadius: '8px',
                    boxShadow: value,
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      color: '#b3ffff',
                    }}
                  >
                    {key}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#00e6ff',
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                      marginTop: '1rem',
                    }}
                  >
                    {value}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  },
};

/**
 * Efeitos de brilho (glow) do tema escuro
 */
export const GlowEffects: Story = {
  render: () => {
    const shadows = tokens.shadows.dark;
    const glow = shadows.glow as Record<string, string> | undefined;

    if (!glow) {
      return (
        <div style={{ padding: '2rem' }}>
          <p>No glow effects available</p>
        </div>
      );
    }

    return (
      <div
        style={{
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#0a0a0f',
          minHeight: '100vh',
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#b3ffff',
          }}
        >
          Glow Effects (Cyberpunk)
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {Object.entries(glow).map(([key, value]) => {
            const colorMap: Record<string, string> = {
              cyan: '#00e6ff',
              pink: '#ff00ff',
              purple: '#7d00ff',
              green: '#00ff00',
            };

            return (
              <div
                key={key}
                style={{
                  padding: '2rem',
                  backgroundColor: '#171717',
                  border: `2px solid ${colorMap[key] || '#00e6ff'}`,
                  borderRadius: '8px',
                  boxShadow: value,
                }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    textTransform: 'capitalize',
                    color: colorMap[key] || '#00e6ff',
                  }}
                >
                  {key} Glow
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#00e6ff',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                    marginTop: '1rem',
                  }}
                >
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

