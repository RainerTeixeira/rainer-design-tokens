/**
 * @fileoverview Stories para demonstrar hierarquia tipográfica completa
 * 
 * Documenta todos os tokens de tipografia:
 * - Headings (H1-H6)
 * - Subtítulos (large, medium, small)
 * - Corpo de texto (large, medium, small)
 * - Legendas (large, medium, small)
 * - Botões e Labels
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Typography Hierarchy',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Hierarquia tipográfica completa com Headings (H1-H6), Subtítulos, Corpo de Texto, Legendas, Botões e Labels.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Headings (H1-H6)
 */
export const Headings: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const headings = [
      { level: 'H1', token: typography.headings.h1 },
      { level: 'H2', token: typography.headings.h2 },
      { level: 'H3', token: typography.headings.h3 },
      { level: 'H4', token: typography.headings.h4 },
      { level: 'H5', token: typography.headings.h5 },
      { level: 'H6', token: typography.headings.h6 },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Headings (H1-H6)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {headings.map((heading) => (
            <div key={heading.level}>
              <div
                style={{
                  fontFamily: heading.token.fontFamily,
                  fontSize: heading.token.fontSize,
                  fontWeight: heading.token.fontWeight,
                  lineHeight: heading.token.lineHeight,
                  letterSpacing: heading.token.letterSpacing,
                  color: colors.text.primary,
                  marginBottom: heading.token.marginBottom || '0.5rem',
                }}
              >
                {heading.level} - {heading.level === 'H1' ? 'Título Principal' : 
                 heading.level === 'H2' ? 'Seção Principal' :
                 heading.level === 'H3' ? 'Subseção' :
                 heading.level === 'H4' ? 'Título de Card' :
                 heading.level === 'H5' ? 'Subtítulo Menor' : 'Título Mínimo'}
              </div>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace', marginTop: '0.5rem' }}>
                Font: {heading.token.fontFamily} | Size: {heading.token.fontSize} | Weight: {heading.token.fontWeight} | Line Height: {heading.token.lineHeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Subtítulos
 */
export const Subtitles: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const subtitles = [
      { name: 'Large', token: typography.subtitle.large },
      { name: 'Medium', token: typography.subtitle.medium },
      { name: 'Small', token: typography.subtitle.small },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Subtítulos
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {subtitles.map((subtitle) => (
            <div key={subtitle.name}>
              <div
                style={{
                  fontFamily: subtitle.token.fontFamily,
                  fontSize: subtitle.token.fontSize,
                  fontWeight: subtitle.token.fontWeight,
                  lineHeight: subtitle.token.lineHeight,
                  letterSpacing: subtitle.token.letterSpacing,
                  color: colors.text.secondary,
                  marginBottom: subtitle.token.marginBottom || '0.5rem',
                }}
              >
                Subtítulo {subtitle.name} - Ideal para descrições de seções e informações secundárias
              </div>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace' }}>
                Font: {subtitle.token.fontFamily} | Size: {subtitle.token.fontSize} | Weight: {subtitle.token.fontWeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Corpo de Texto
 */
export const BodyText: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const bodySizes = [
      { name: 'Large', token: typography.body.large },
      { name: 'Medium', token: typography.body.medium },
      { name: 'Small', token: typography.body.small },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Corpo de Texto
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {bodySizes.map((body) => (
            <div key={body.name}>
              <p
                style={{
                  fontFamily: body.token.fontFamily,
                  fontSize: body.token.fontSize,
                  fontWeight: body.token.fontWeight,
                  lineHeight: body.token.lineHeight,
                  letterSpacing: body.token.letterSpacing,
                  color: colors.text.primary,
                  marginBottom: '0.5rem',
                }}
              >
                Este é um exemplo de texto {body.name.toLowerCase()} usando o token body.{body.name.toLowerCase()}. 
                Ideal para conteúdo principal, descrições e parágrafos que precisam de boa legibilidade. 
                A altura de linha confortável garante uma leitura agradável em diferentes dispositivos.
              </p>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace' }}>
                Font: {body.token.fontFamily} | Size: {body.token.fontSize} | Line Height: {body.token.lineHeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Legendas
 */
export const Captions: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const captions = [
      { name: 'Large', token: typography.caption.large },
      { name: 'Medium', token: typography.caption.medium },
      { name: 'Small', token: typography.caption.small },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Legendas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {captions.map((caption) => (
            <div key={caption.name}>
              <div
                style={{
                  fontFamily: caption.token.fontFamily,
                  fontSize: caption.token.fontSize,
                  fontWeight: caption.token.fontWeight,
                  lineHeight: caption.token.lineHeight,
                  letterSpacing: caption.token.letterSpacing,
                  color: colors.text.tertiary,
                }}
              >
                Legenda {caption.name} - Para notas, referências, timestamps e informações auxiliares
              </div>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace', marginTop: '0.25rem' }}>
                Size: {caption.token.fontSize} | Letter Spacing: {caption.token.letterSpacing}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Botões
 */
export const Buttons: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const buttonSizes = [
      { name: 'Large', token: typography.button.large },
      { name: 'Medium', token: typography.button.medium },
      { name: 'Small', token: typography.button.small },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Tipografia de Botões
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {buttonSizes.map((button) => (
            <div key={button.name}>
              <button
                style={{
                  fontFamily: button.token.fontFamily,
                  fontSize: button.token.fontSize,
                  fontWeight: button.token.fontWeight,
                  lineHeight: button.token.lineHeight,
                  letterSpacing: button.token.letterSpacing,
                  backgroundColor: colors.primary.base,
                  color: colors.primary.text,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Botão {button.name}
              </button>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace', marginTop: '0.5rem' }}>
                Font: {button.token.fontFamily} | Size: {button.token.fontSize} | Weight: {button.token.fontWeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Labels
 */
export const Labels: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    const labelSizes = [
      { name: 'Large', token: typography.label.large },
      { name: 'Medium', token: typography.label.medium },
      { name: 'Small', token: typography.label.small },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Labels
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {labelSizes.map((label) => (
            <div key={label.name}>
              <label
                style={{
                  fontFamily: label.token.fontFamily,
                  fontSize: label.token.fontSize,
                  fontWeight: label.token.fontWeight,
                  lineHeight: label.token.lineHeight,
                  letterSpacing: label.token.letterSpacing,
                  color: colors.text.primary,
                  display: 'block',
                }}
              >
                Label {label.name}
              </label>
              <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace', marginTop: '0.25rem' }}>
                Size: {label.token.fontSize} | Weight: {label.token.fontWeight}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Código
 */
export const Code: Story = {
  render: () => {
    const typography = tokens.typography;
    const colors = tokens.colors.light;

    return (
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 700 }}>
          Tipografia de Código
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              Inline Code
            </h3>
            <p style={{ color: colors.text.primary, marginBottom: '0.5rem' }}>
              Use <code
                style={{
                  fontFamily: typography.code.inline.fontFamily,
                  fontSize: typography.code.inline.fontSize,
                  fontWeight: typography.code.inline.fontWeight,
                  lineHeight: typography.code.inline.lineHeight,
                  backgroundColor: colors.surface.secondary,
                  padding: '0.125rem 0.375rem',
                  borderRadius: '4px',
                  color: colors.text.primary,
                }}
              >inline code</code> para referências a código dentro de parágrafos.
            </p>
            <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace' }}>
              Font: {typography.code.inline.fontFamily} | Size: {typography.code.inline.fontSize}
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>
              Code Block
            </h3>
            <pre
              style={{
                fontFamily: typography.code.block.fontFamily,
                fontSize: typography.code.block.fontSize,
                fontWeight: typography.code.block.fontWeight,
                lineHeight: typography.code.block.lineHeight,
                backgroundColor: colors.surface.secondary,
                padding: '1rem',
                borderRadius: '8px',
                color: colors.text.primary,
                overflow: 'auto',
              }}
            >
{`function example() {
  return "Code block example";
}`}
            </pre>
            <div style={{ fontSize: '0.875rem', color: colors.text.tertiary, fontFamily: 'monospace', marginTop: '0.5rem' }}>
              Font: {typography.code.block.fontFamily} | Size: {typography.code.block.fontSize} | Line Height: {typography.code.block.lineHeight}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

