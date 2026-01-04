import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Animations',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Preview de todas as animações disponíveis
 */
export const AllAnimations: Story = {
  render: () => {
    const motion = tokens.primitives.motion as any;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Design System Animations
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Durations */}
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Durations
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {Object.entries(motion.duration).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>
                    {key}
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      color: '#666',
                    }}
                  >
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Easings */}
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Easings
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {Object.entries(motion.easing).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>
                    {key}
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: '#666',
                      maxWidth: '150px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delays */}
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Delays
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {Object.entries(motion.delay).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>
                    {key}
                  </span>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      color: '#666',
                    }}
                  >
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Examples */}
        <div style={{ marginTop: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            Animation Examples
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Fade In Example */}
            <div
              style={{
                padding: '1.5rem',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>
                Fade In
              </h3>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#0891b2',
                  borderRadius: '8px',
                  margin: '0 auto 1rem',
                  animation: `fadeIn ${motion.duration.normal} ${motion.easing.easeInOut}`,
                }}
              />
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#666',
                  backgroundColor: '#f8f9fa',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  display: 'block',
                }}
              >
                {motion.duration.normal} {motion.easing.easeInOut}
              </code>
            </div>

            {/* Slide In Example */}
            <div
              style={{
                padding: '1.5rem',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>
                Slide In
              </h3>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#9333ea',
                  borderRadius: '8px',
                  margin: '0 auto 1rem',
                  animation: `slideIn ${motion.duration.slow} ${motion.easing.easeOut}`,
                }}
              />
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#666',
                  backgroundColor: '#f8f9fa',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  display: 'block',
                }}
              >
                {motion.duration.slow} {motion.easing.easeOut}
              </code>
            </div>

            {/* Bounce Example */}
            <div
              style={{
                padding: '1.5rem',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>
                Bounce
              </h3>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#dc2626',
                  borderRadius: '8px',
                  margin: '0 auto 1rem',
                  animation: `bounce ${motion.duration.normal} ${motion.easing.spring}`,
                }}
              />
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#666',
                  backgroundColor: '#f8f9fa',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  display: 'block',
                }}
              >
                {motion.duration.normal} {motion.easing.spring}
              </code>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}</style>
      </div>
    );
  },
};
