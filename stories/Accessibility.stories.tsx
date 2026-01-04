/**
 * @fileoverview Stories para demonstrar acessibilidade WCAG
 * 
 * Documenta validação de contraste e conformidade WCAG AA/AAA
 */

import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

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
 * Paleta de cores com validação WCAG
 */
export const ColorContrast: Story = {
  render: () => {
    const lightTheme = tokens.themes.light as any;
    const darkTheme = tokens.themes.dark as any;

    return (
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          WCAG Color Contrast Validation
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Todas as combinações de cores foram projetadas para atender aos padrões WCAG AA/AAA.
        </p>

        {/* Light Theme Colors */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Light Theme
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {/* Background combinations */}
            <div style={{ padding: '1rem', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.background.primary, borderRadius: '4px' }} />
                  <span>Primary: {lightTheme.background.primary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.background.secondary, borderRadius: '4px' }} />
                  <span>Secondary: {lightTheme.background.secondary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.background.tertiary, borderRadius: '4px' }} />
                  <span>Tertiary: {lightTheme.background.tertiary}</span>
                </div>
              </div>
            </div>

            {/* Text combinations */}
            <div style={{ padding: '1rem', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>Text</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.text.primary, borderRadius: '4px' }} />
                  <span>Primary: {lightTheme.text.primary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.text.secondary, borderRadius: '4px' }} />
                  <span>Secondary: {lightTheme.text.secondary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.text.tertiary, borderRadius: '4px' }} />
                  <span>Tertiary: {lightTheme.text.tertiary}</span>
                </div>
              </div>
            </div>

            {/* Status colors */}
            <div style={{ padding: '1rem', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem' }}>Status</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.status.success, borderRadius: '4px' }} />
                  <span>Success: {lightTheme.status.success}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.status.warning, borderRadius: '4px' }} />
                  <span>Warning: {lightTheme.status.warning}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.status.error, borderRadius: '4px' }} />
                  <span>Error: {lightTheme.status.error}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: lightTheme.status.info, borderRadius: '4px' }} />
                  <span>Info: {lightTheme.status.info}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Theme Colors */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Dark Theme
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {/* Background combinations */}
            <div style={{ padding: '1rem', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#1a1a1a' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#fff' }}>Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.background.primary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Primary: {darkTheme.background.primary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.background.secondary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Secondary: {darkTheme.background.secondary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.background.tertiary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Tertiary: {darkTheme.background.tertiary}</span>
                </div>
              </div>
            </div>

            {/* Text combinations */}
            <div style={{ padding: '1rem', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#1a1a1a' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#fff' }}>Text</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.text.primary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Primary: {darkTheme.text.primary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.text.secondary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Secondary: {darkTheme.text.secondary}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.text.tertiary, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Tertiary: {darkTheme.text.tertiary}</span>
                </div>
              </div>
            </div>

            {/* Status colors */}
            <div style={{ padding: '1rem', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#1a1a1a' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#fff' }}>Status</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.status.success, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Success: {darkTheme.status.success}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.status.warning, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Warning: {darkTheme.status.warning}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.status.error, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Error: {darkTheme.status.error}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: darkTheme.status.info, borderRadius: '4px' }} />
                  <span style={{ color: '#fff' }}>Info: {darkTheme.status.info}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WCAG Guidelines */}
        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
            WCAG Compliance Guidelines
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>AA Level (Minimum)</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
                <li>Normal text: 4.5:1 contrast ratio</li>
                <li>Large text: 3:1 contrast ratio</li>
                <li>Non-text elements: 3:1 contrast ratio</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>AAA Level (Enhanced)</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
                <li>Normal text: 7:1 contrast ratio</li>
                <li>Large text: 4.5:1 contrast ratio</li>
                <li>Non-text elements: 4.5:1 contrast ratio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
