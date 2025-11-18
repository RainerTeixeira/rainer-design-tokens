/**
 * @fileoverview Stories para demonstrar acessibilidade WCAG
 * 
 * Documenta validação de contraste e conformidade WCAG AA/AAA
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens, validateContrast, getContrastInfo } from '../tokens';

const meta = {
  title: 'Design Tokens/Accessibility',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Validação de contraste WCAG AA/AAA para garantir acessibilidade em todas as combinações de cores.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Validação de contraste para cores primárias
 */
export const PrimaryContrast: Story = {
  render: () => {
    const colors = tokens.colors.light;
    
    const combinations = [
      {
        name: 'Primary on Background',
        foreground: colors.primary.base,
        background: colors.background.primary,
      },
      {
        name: 'Primary Text on Primary',
        foreground: colors.primary.text,
        background: colors.primary.base,
      },
      {
        name: 'Text Primary on Background',
        foreground: colors.text.primary,
        background: colors.background.primary,
      },
      {
        name: 'Text Secondary on Background',
        foreground: colors.text.secondary,
        background: colors.background.primary,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Validação de Contraste - Primary Colors
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {combinations.map((combo) => {
            const info = getContrastInfo(combo.foreground, combo.background);
            const validationAA = validateContrast(combo.foreground, combo.background, {
              requireAAA: false,
              largeText: false,
            });
            const validationAALarge = validateContrast(combo.foreground, combo.background, {
              requireAAA: false,
              largeText: true,
            });

            return (
              <div
                key={combo.name}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  backgroundColor: combo.background,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: combo.foreground,
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 600, color: combo.foreground }}>
                      {combo.name}
                    </h3>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: combo.foreground }}>
                      Foreground: {combo.foreground}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: combo.foreground }}>
                      Background: {combo.background}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Contraste</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'monospace' }}>
                      {info.contrast.toFixed(2)}:1
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: validationAA.valid ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>WCAG AA</div>
                    <div style={{ fontSize: '0.875rem', color: validationAA.valid ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                      {validationAA.valid ? '✓ Passa' : '✗ Falha'}
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: validationAALarge.valid ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>WCAG AA (Large)</div>
                    <div style={{ fontSize: '0.875rem', color: validationAALarge.valid ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                      {validationAALarge.valid ? '✓ Passa' : '✗ Falha'}
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: info.meetsAAA ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>WCAG AAA</div>
                    <div style={{ fontSize: '0.875rem', color: info.meetsAAA ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                      {info.meetsAAA ? '✓ Passa' : '✗ Falha'}
                    </div>
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
 * Status colors contrast validation
 */
export const StatusColorsContrast: Story = {
  render: () => {
    const colors = tokens.colors.light;
    
    const statusColors = [
      {
        name: 'Success',
        base: colors.status.success.base,
        background: colors.status.success.background,
        text: colors.status.success.text,
        textOnBackground: colors.status.success.textOnBackground,
      },
      {
        name: 'Warning',
        base: colors.status.warning.base,
        background: colors.status.warning.background,
        text: colors.status.warning.text,
        textOnBackground: colors.status.warning.textOnBackground,
      },
      {
        name: 'Error',
        base: colors.status.error.base,
        background: colors.status.error.background,
        text: colors.status.error.text,
        textOnBackground: colors.status.error.textOnBackground,
      },
      {
        name: 'Info',
        base: colors.status.info.base,
        background: colors.status.info.background,
        text: colors.status.info.text,
        textOnBackground: colors.status.info.textOnBackground,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Validação de Contraste - Status Colors
        </h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {statusColors.map((status) => {
            const textOnBase = getContrastInfo(status.text, status.base);
            const textOnBackground = getContrastInfo(status.textOnBackground, status.background);

            return (
              <div
                key={status.name}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '1.5rem',
                }}
              >
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>
                  {status.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div
                    style={{
                      backgroundColor: status.base,
                      color: status.text,
                      padding: '1rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Text on Base</div>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                      {textOnBase.contrast.toFixed(2)}:1
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.9 }}>
                      {textOnBase.meetsAA ? '✓ WCAG AA' : '✗ Falha AA'}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: status.background,
                      color: status.textOnBackground,
                      padding: '1rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Text on Background</div>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                      {textOnBackground.contrast.toFixed(2)}:1
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', opacity: 0.9 }}>
                      {textOnBackground.meetsAA ? '✓ WCAG AA' : '✗ Falha AA'}
                    </div>
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
 * Interactive elements contrast
 */
export const InteractiveElements: Story = {
  render: () => {
    const colors = tokens.colors.light;

    const interactiveStates = [
      {
        name: 'Primary Button - Base',
        foreground: colors.primary.text,
        background: colors.primary.base,
      },
      {
        name: 'Primary Button - Hover',
        foreground: colors.primary.textHover,
        background: colors.primary.hover,
      },
      {
        name: 'Primary Button - Active',
        foreground: colors.primary.text,
        background: colors.primary.active,
      },
      {
        name: 'Primary Button - Disabled',
        foreground: colors.primary.textDisabled,
        background: colors.primary.disabled,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Contraste em Elementos Interativos
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {interactiveStates.map((state) => {
            const info = getContrastInfo(state.foreground, state.background);
            const validation = validateContrast(state.foreground, state.background, {
              requireAAA: false,
              largeText: false,
            });

            return (
              <div
                key={state.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              >
                <button
                  style={{
                    backgroundColor: state.background,
                    color: state.foreground,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {state.name}
                </button>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Contraste: {info.contrast.toFixed(2)}:1
                  </div>
                  <div style={{ fontSize: '0.875rem', color: validation.valid ? '#22c55e' : '#ef4444' }}>
                    {validation.message}
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

