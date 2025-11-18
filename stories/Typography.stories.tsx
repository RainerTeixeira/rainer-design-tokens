import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Famílias de fontes disponíveis
 */
export const FontFamilies: Story = {
  render: () => {
    const { fontFamily } = tokens.typography;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Font Families
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(fontFamily).map(([key, value]) => (
            <div
              key={key}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#737373',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {key}
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontFamily: value,
                  marginBottom: '0.75rem',
                }}
              >
                The quick brown fox jumps over the lazy dog
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
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Tamanhos de fonte
 */
export const FontSizes: Story = {
  render: () => {
    const { fontSize } = tokens.typography;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Font Sizes
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(fontSize)
            .sort((a, b) => {
              const aValue = parseFloat(a[1]);
              const bValue = parseFloat(b[1]);
              return aValue - bValue;
            })
            .map(([key, value]) => (
              <div
                key={key}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                }}
              >
                <div
                  style={{
                    minWidth: '100px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#737373',
                    textTransform: 'uppercase',
                  }}
                >
                  {key}
                </div>
                <div
                  style={{
                    fontSize: value,
                    flex: 1,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div
                  style={{
                    minWidth: '80px',
                    fontSize: '0.875rem',
                    color: '#737373',
                    fontFamily: 'monospace',
                    textAlign: 'right',
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
 * Pesos de fonte
 */
export const FontWeights: Story = {
  render: () => {
    const { fontWeight } = tokens.typography;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Font Weights
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(fontWeight).map(([key, value]) => (
            <div
              key={key}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  minWidth: '120px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#737373',
                  textTransform: 'capitalize',
                }}
              >
                {key}
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: parseInt(value),
                  flex: 1,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
              <div
                style={{
                  minWidth: '60px',
                  fontSize: '0.875rem',
                  color: '#737373',
                  fontFamily: 'monospace',
                  textAlign: 'right',
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
 * Alturas de linha
 */
export const LineHeights: Story = {
  render: () => {
    const { lineHeight } = tokens.typography;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Line Heights
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(lineHeight).map(([key, value]) => (
            <div
              key={key}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#737373',
                  marginBottom: '0.75rem',
                  textTransform: 'capitalize',
                }}
              >
                {key} ({value})
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  lineHeight: value,
                  maxWidth: '600px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Espaçamento entre letras
 */
export const LetterSpacing: Story = {
  render: () => {
    const { letterSpacing } = tokens.typography;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Letter Spacing
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {Object.entries(letterSpacing).map(([key, value]) => (
            <div
              key={key}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#737373',
                  marginBottom: '0.75rem',
                  textTransform: 'capitalize',
                }}
              >
                {key} ({value})
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  letterSpacing: value,
                  fontWeight: 600,
                }}
              >
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

