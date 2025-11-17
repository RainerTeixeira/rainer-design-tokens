/**
 * @fileoverview Stories para demonstrar cores com estados completos
 * 
 * Documenta todos os estados disponíveis para primary, secondary e accent:
 * - base, hover, active, disabled, focus
 * - backgrounds, borders, text
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Color States',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Demonstração completa dos estados de cores: base, hover, active, disabled, focus, backgrounds, borders e text.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Estados da cor Primary
 */
export const PrimaryStates: Story = {
  render: () => {
    const primary = tokens.colors.light.primary;
    
    const states = [
      { name: 'Base', value: primary.base, text: primary.text },
      { name: 'Hover', value: primary.hover, text: primary.textHover },
      { name: 'Active', value: primary.active, text: primary.text },
      { name: 'Disabled', value: primary.disabled, text: primary.textDisabled },
      { name: 'Focus', value: primary.focus, text: primary.text },
    ];

    const backgrounds = [
      { name: 'Background', value: primary.background },
      { name: 'Background Hover', value: primary.backgroundHover },
      { name: 'Background Active', value: primary.backgroundActive },
    ];

    const borders = [
      { name: 'Border', value: primary.border },
      { name: 'Border Hover', value: primary.borderHover },
      { name: 'Border Focus', value: primary.borderFocus },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Primary Color States
        </h2>

        <section style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
            Main States
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {states.map((state) => (
              <div
                key={state.name}
                style={{
                  backgroundColor: state.value,
                  color: state.text,
                  padding: '1.5rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{state.name}</div>
                <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>{state.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
            Backgrounds
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {backgrounds.map((bg) => (
              <div
                key={bg.name}
                style={{
                  backgroundColor: bg.value,
                  padding: '1.5rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid rgba(0,0,0,0.1)',
                  color: tokens.colors.light.text.primary,
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{bg.name}</div>
                <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>{bg.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
            Borders
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {borders.map((border) => (
              <div
                key={border.name}
                style={{
                  border: `3px solid ${border.value}`,
                  padding: '1.5rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  backgroundColor: tokens.colors.light.background.primary,
                  color: tokens.colors.light.text.primary,
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{border.name}</div>
                <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>{border.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};

/**
 * Estados da cor Secondary
 */
export const SecondaryStates: Story = {
  render: () => {
    const secondary = tokens.colors.light.secondary;
    
    const states = [
      { name: 'Base', value: secondary.base, text: secondary.text },
      { name: 'Hover', value: secondary.hover, text: secondary.textHover },
      { name: 'Active', value: secondary.active, text: secondary.text },
      { name: 'Disabled', value: secondary.disabled, text: secondary.textDisabled },
      { name: 'Focus', value: secondary.focus, text: secondary.text },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Secondary Color States
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {states.map((state) => (
            <div
              key={state.name}
              style={{
                backgroundColor: state.value,
                color: state.text,
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{state.name}</div>
              <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>{state.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Estados da cor Accent
 */
export const AccentStates: Story = {
  render: () => {
    const accent = tokens.colors.light.accent;
    
    const states = [
      { name: 'Base', value: accent.base, text: accent.text },
      { name: 'Hover', value: accent.hover, text: accent.textHover },
      { name: 'Active', value: accent.active, text: accent.text },
      { name: 'Disabled', value: accent.disabled, text: accent.textDisabled },
      { name: 'Focus', value: accent.focus, text: accent.text },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Accent Color States
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {states.map((state) => (
            <div
              key={state.name}
              style={{
                backgroundColor: state.value,
                color: state.text,
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{state.name}</div>
              <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>{state.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Comparação entre Light e Dark themes
 */
export const ThemeComparison: Story = {
  render: () => {
    const lightPrimary = tokens.colors.light.primary;
    const darkPrimary = tokens.colors.dark.primary;

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Theme Comparison - Primary Color
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              Light Theme
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: lightPrimary.base,
                    borderRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>Base</div>
                  <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#666' }}>
                    {lightPrimary.base}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: lightPrimary.hover,
                    borderRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>Hover</div>
                  <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#666' }}>
                    {lightPrimary.hover}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              Dark Theme
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: darkPrimary.base,
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>Base</div>
                  <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#666' }}>
                    {darkPrimary.base}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: darkPrimary.hover,
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>Hover</div>
                  <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#666' }}>
                    {darkPrimary.hover}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

