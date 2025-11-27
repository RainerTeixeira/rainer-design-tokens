import type { Meta, StoryObj } from '@storybook/react-vite';
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
    const animations = tokens.animations;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          Design System Animations
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {Object.entries(animations).map(([key, animation]) => {
            const animationStyle: React.CSSProperties = {
              animationName: animation.name,
              animationDuration: animation.duration,
              animationTimingFunction: animation.timingFunction,
              animationIterationCount: 'infinite',
              animationDirection: 'alternate',
            };

            return (
              <div
                key={key}
                style={{
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              >
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {key.replace(/-/g, ' ')}
                </div>

                <div
                  style={{
                    padding: '2rem',
                    backgroundColor: '#fafafa',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    minHeight: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#0891b2',
                      borderRadius: '8px',
                      ...animationStyle,
                    }}
                  />
                </div>

                <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <strong>Duration:</strong> {animation.duration}
                </div>
                <div style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <strong>Timing:</strong> {animation.timingFunction}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace', marginTop: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>Animation:</strong>
                  </div>
                  <div style={{ wordBreak: 'break-all' }}>
                    {animation.name} {animation.duration} {animation.timingFunction}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};

/**
 * Accordion animations
 */
export const AccordionAnimations: Story = {
  render: () => {
    const accordionDown = tokens.animations['accordion-down'];
    const accordionUp = tokens.animations['accordion-up'];

    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          Accordion Animations
        </h1>

        <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
          <div
            style={{
              padding: '2rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Accordion Down
            </h2>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fafafa',
                borderRadius: '4px',
                overflow: 'hidden',
                height: '200px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0891b2',
                  borderRadius: '4px',
                  padding: '1rem',
                  color: 'white',
                  animation: `accordion-down ${accordionDown.duration} ${accordionDown.timingFunction} infinite alternate`,
                  height: 'var(--radix-accordion-content-height, 100px)',
                }}
              >
                Content expanding...
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace', marginTop: '1rem' }}>
              {accordionDown.name} {accordionDown.duration} {accordionDown.timingFunction}
            </div>
          </div>

          <div
            style={{
              padding: '2rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Accordion Up
            </h2>
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fafafa',
                borderRadius: '4px',
                overflow: 'hidden',
                height: '200px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#9333ea',
                  borderRadius: '4px',
                  padding: '1rem',
                  color: 'white',
                  animation: `accordion-up ${accordionUp.duration} ${accordionUp.timingFunction} infinite alternate`,
                  height: 'var(--radix-accordion-content-height, 100px)',
                }}
              >
                Content collapsing...
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace', marginTop: '1rem' }}>
              {accordionUp.name} {accordionUp.duration} {accordionUp.timingFunction}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Slide-in animation
 */
export const SlideInAnimation: Story = {
  render: () => {
    const slideIn = tokens.animations['slide-in'];

    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          Slide In Animation
        </h1>

        <div
          style={{
            padding: '2rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              padding: '3rem',
              backgroundColor: '#fafafa',
              borderRadius: '4px',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#0891b2',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                animation: `slide-in ${slideIn.duration} ${slideIn.timingFunction} infinite alternate`,
              }}
            >
              Slide In
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace', marginTop: '1rem' }}>
            {slideIn.name} {slideIn.duration} {slideIn.timingFunction}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Fade-in animation
 */
export const FadeInAnimation: Story = {
  render: () => {
    const fadeIn = tokens.animations['fade-in'];

    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          Fade In Animation
        </h1>

        <div
          style={{
            padding: '2rem',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              padding: '3rem',
              backgroundColor: '#fafafa',
              borderRadius: '4px',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#9333ea',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                animation: `fade-in ${fadeIn.duration} ${fadeIn.timingFunction} infinite alternate`,
              }}
            >
              Fade In
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#737373', fontFamily: 'monospace', marginTop: '1rem' }}>
            {fadeIn.name} {fadeIn.duration} {fadeIn.timingFunction}
          </div>
        </div>
      </div>
    );
  },
};



