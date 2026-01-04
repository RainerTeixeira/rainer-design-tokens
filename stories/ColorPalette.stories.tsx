import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Color Palette',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Visualização completa da paleta de cores dos design tokens. Inclui temas Light e Dark.',
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
    const colors = tokens.themes.light;

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
                  {Object.entries(groupValue).map(([colorKey, colorValue]) => (
                    <div
                      key={colorKey}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        backgroundColor: '#fafafa',
                      }}
                    >
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: colorValue as string,
                          borderRadius: '8px',
                          marginBottom: '0.5rem',
                          border: '1px solid #e5e5e5',
                        }}
                      />
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'center' }}>
                        {colorKey}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#737373', textAlign: 'center' }}>
                        {colorValue as string}
                      </div>
                    </div>
                  ))}
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

        <NestedColorGroup title="Background" colorObj={colors.background} />
        <NestedColorGroup title="Surface" colorObj={colors.surface} />
        <NestedColorGroup title="Text" colorObj={colors.text} />
        <NestedColorGroup title="Border" colorObj={colors.border} />
        <NestedColorGroup title="Status" colorObj={colors.status} />
        <NestedColorGroup title="Interactive" colorObj={colors.interactive} />
        <NestedColorGroup title="Button" colorObj={colors.button} />
      </div>
    );
  },
};

/**
 * Paleta completa do tema escuro
 */
export const DarkTheme: Story = {
  render: () => {
    const colors = tokens.themes.dark;

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
                  {Object.entries(groupValue).map(([colorKey, colorValue]) => (
                    <div
                      key={colorKey}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '1px solid #333',
                        borderRadius: '8px',
                        backgroundColor: '#1a1a1a',
                      }}
                    >
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          backgroundColor: colorValue as string,
                          borderRadius: '8px',
                          marginBottom: '0.5rem',
                          border: '1px solid #333',
                        }}
                      />
                      <div style={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'center', color: '#fff' }}>
                        {colorKey}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center' }}>
                        {colorValue as string}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );

    return (
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#0a0a0f' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#fff' }}>
          Dark Theme Color Palette
        </h1>
        <p style={{ color: '#4dffff', marginBottom: '2rem' }}>
          Paleta completa de cores do tema escuro profissional.
        </p>

        <NestedColorGroup title="Background" colorObj={colors.background} />
        <NestedColorGroup title="Surface" colorObj={colors.surface} />
        <NestedColorGroup title="Text" colorObj={colors.text} />
        <NestedColorGroup title="Border" colorObj={colors.border} />
        <NestedColorGroup title="Status" colorObj={colors.status} />
        <NestedColorGroup title="Interactive" colorObj={colors.interactive} />
        <NestedColorGroup title="Button" colorObj={colors.button} />
      </div>
    );
  },
};
