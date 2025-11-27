import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Color Palette',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Visualização completa da paleta de cores dos design tokens. Inclui temas Light e Dark (Cyberpunk).',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Paleta completa do tema claro
 */
export const LightTheme: Story = {
  render: () => {
    const colors = tokens.colors.light;

    const NestedColorGroup = ({ title, colorObj }: { title: string; colorObj: any }) => (
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
          {title}
        </h3>
        {Object.entries(colorObj).map(([groupKey, groupValue]) => {
          if (typeof groupValue === 'object' && groupValue !== null) {
            return (
              <div key={groupKey} style={{ marginBottom: '1.5rem' }}>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {groupKey}
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {Object.entries(groupValue as Record<string, string>).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        style={{
                          border: '1px solid #e5e5e5',
                          borderRadius: '8px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '80px',
                            backgroundColor: value,
                          }}
                        />
                        <div style={{ padding: '0.75rem' }}>
                          <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                            {key}
                          </div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#737373',
                              fontFamily: 'monospace',
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );

    return (
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Light Theme Color Palette
        </h1>
        <p style={{ color: '#737373', marginBottom: '2rem' }}>
          Paleta completa de cores do tema claro profissional.
        </p>

        <NestedColorGroup title="Primary" colorObj={colors.primary} />
        <NestedColorGroup title="Secondary" colorObj={colors.secondary} />
        <NestedColorGroup title="Accent" colorObj={colors.accent} />
        <NestedColorGroup title="Background" colorObj={colors.background} />
        <NestedColorGroup title="Surface" colorObj={colors.surface} />
        <NestedColorGroup title="Text" colorObj={colors.text} />
        <NestedColorGroup title="Border" colorObj={colors.border} />
        <NestedColorGroup title="Status" colorObj={colors.status} />
        <NestedColorGroup title="Interactive" colorObj={colors.interactive} />
      </div>
    );
  },
};

/**
 * Paleta completa do tema escuro (Cyberpunk)
 */
export const DarkTheme: Story = {
  render: () => {
    const colors = tokens.colors.dark;

    const NestedColorGroup = ({ title, colorObj }: { title: string; colorObj: any }) => (
      <div style={{ marginBottom: '2rem' }}>
        <h3
          style={{
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#b3ffff',
          }}
        >
          {title}
        </h3>
        {Object.entries(colorObj).map(([groupKey, groupValue]) => {
          if (typeof groupValue === 'object' && groupValue !== null) {
            return (
              <div key={groupKey} style={{ marginBottom: '1.5rem' }}>
                <h4
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '0.75rem',
                    textTransform: 'capitalize',
                    color: '#4dffff',
                  }}
                >
                  {groupKey}
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {Object.entries(groupValue as Record<string, string>).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        style={{
                          border: '1px solid #262626',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          background: '#171717',
                        }}
                      >
                        <div
                          style={{
                            height: '80px',
                            backgroundColor: value,
                          }}
                        />
                        <div style={{ padding: '0.75rem' }}>
                          <div
                            style={{
                              fontWeight: 600,
                              marginBottom: '0.25rem',
                              color: '#b3ffff',
                            }}
                          >
                            {key}
                          </div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#00e6ff',
                              fontFamily: 'monospace',
                            }}
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );

    return (
      <div
        style={{
          padding: '2rem',
          maxWidth: '1400px',
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
          Dark Theme Color Palette (Cyberpunk)
        </h1>
        <p style={{ color: '#4dffff', marginBottom: '2rem' }}>
          Paleta completa de cores do tema escuro com estilo cyberpunk e efeitos neon.
        </p>

        <NestedColorGroup title="Primary" colorObj={colors.primary} />
        <NestedColorGroup title="Secondary" colorObj={colors.secondary} />
        <NestedColorGroup title="Accent" colorObj={colors.accent} />
        <NestedColorGroup title="Background" colorObj={colors.background} />
        <NestedColorGroup title="Surface" colorObj={colors.surface} />
        <NestedColorGroup title="Text" colorObj={colors.text} />
        <NestedColorGroup title="Border" colorObj={colors.border} />
        <NestedColorGroup title="Status" colorObj={colors.status} />
        <NestedColorGroup title="Interactive" colorObj={colors.interactive} />
        {colors.effects && (
          <NestedColorGroup title="Effects" colorObj={colors.effects} />
        )}
        {colors.gradients && (
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#b3ffff',
              }}
            >
              Gradients
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1rem',
              }}
            >
              {Object.entries(colors.gradients).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    border: '1px solid #262626',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#171717',
                  }}
                >
                  <div
                    style={{
                      height: '120px',
                      background: value as string,
                    }}
                  />
                  <div style={{ padding: '0.75rem' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: '0.25rem',
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
                      }}
                    >
                      {value as string}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};



