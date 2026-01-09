import {
  colorPrimitive,
  colorSemantic,
  lightTheme,
  darkTheme,
} from '../../index';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
const { readFileSync } = require('node:fs');

// Helpers: resolve references like {palette.gray.900} or {opacity.50}
function resolveTokenReferences(value: any, palette: any, opacity: any): any {
  if (typeof value === 'string') {
    const referenceRegex = /\{([^}]+)\}/g;
    return value.replaceAll(referenceRegex, (match: string, path: string) => {
      const keys = path.split('.');
      let resolved: any;

      if (keys[0] === 'palette') {
        resolved = palette;
      } else if (keys[0] === 'opacity') {
        resolved = opacity;
      } else {
        resolved = undefined;
      }

      const start = keys[0] === 'palette' || keys[0] === 'opacity' ? 1 : 0;

      for (let i = start; i < keys.length; i++) {
        const key = keys[i];
        if (resolved && typeof resolved === 'object' && key in resolved) {
          resolved = resolved[key];
        } else {
          return match; // Return original if can't resolve
        }
      }

      return typeof resolved === 'string' || typeof resolved === 'number'
        ? String(resolved)
        : match;
    });
  }
  if (Array.isArray(value)) {
    return value.map(v => resolveTokenReferences(v, palette, opacity));
  }
  if (typeof value === 'object' && value !== null) {
    const result: any = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = resolveTokenReferences(v, palette, opacity);
    }
    return result;
  }
  return value;
}

// Contrast utils (WCAG)
function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const bigint = Number.parseInt(
    h.length === 3
      ? h
          .split('')
          .map(c => c + c)
          .join('')
      : h,
    16
  );
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function srgbToLinear(c: number) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(hexA: string, hexB: string) {
  const L1 = relativeLuminance(hexA);
  const L2 = relativeLuminance(hexB);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('Design Tokens - Acessibilidade e Resolução', () => {
  it('deve resolver referências e não deixar placeholders em temas', () => {
    const palette = colorPrimitive.palette || colorPrimitive;
    const opacity = (
      require('../../tokens/primitives/opacity-scale.json') as any
    ).opacity;

    const resolvedLight = resolveTokenReferences(lightTheme, palette, opacity);
    const resolvedDark = resolveTokenReferences(darkTheme, palette, opacity);

    const containsPlaceholder = (obj: any) => {
      if (typeof obj === 'string')
        return obj.includes('{palette') || obj.includes('{opacity');
      if (typeof obj === 'object' && obj !== null)
        return Object.values(obj).some(containsPlaceholder);
      return false;
    };

    expect(containsPlaceholder(resolvedLight)).toBe(false);
    expect(containsPlaceholder(resolvedDark)).toBe(false);
  });

  it('deve garantir contraste mínimo (>= 4.5) entre text.primary e background.primary', () => {
    const palette = colorPrimitive.palette || colorPrimitive;
    const opacity = (
      require('../../tokens/primitives/opacity-scale.json') as any
    ).opacity;

    const resolvedLight = resolveTokenReferences(lightTheme, palette, opacity);
    const resolvedDark = resolveTokenReferences(darkTheme, palette, opacity);

    // pegar valores aplicados
    const lightText = resolvedLight.text?.primary;
    const lightBg = resolvedLight.background?.primary;
    const darkText = resolvedDark.text?.primary;
    const darkBg = resolvedDark.background?.primary;

    // Aceitar hex ou rgb/rgba; se rgba com alpha < 1, essa verificação apenas extrai rgb (se necessário considerar alpha, ajustar o teste)
    const colorToHex = (s: string) => {
      if (typeof s !== 'string') return null;
      const hexMatch = s.match(/^#([A-Fa-f0-9]{3}){1,2}$/);
      if (hexMatch) return s;
      const rgbaMatch = s.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[0-9.]+)?\)/
      );
      if (rgbaMatch) {
        const r = Number.parseInt(rgbaMatch[1], 10);
        const g = Number.parseInt(rgbaMatch[2], 10);
        const b = Number.parseInt(rgbaMatch[3], 10);
        return (
          '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('')
        );
      }
      return null;
    };

    const lt = colorToHex(lightText);
    const lb = colorToHex(lightBg);
    const dt = colorToHex(darkText);
    const db = colorToHex(darkBg);

    expect(lt).not.toBeNull();
    expect(lb).not.toBeNull();
    expect(dt).not.toBeNull();
    expect(db).not.toBeNull();

    const contrastLight = contrastRatio(lt as string, lb as string);
    const contrastDark = contrastRatio(dt as string, db as string);

    expect(contrastLight).toBeGreaterThanOrEqual(4.5);
    expect(contrastDark).toBeGreaterThanOrEqual(4.5);
  });

  it.skip('deve gerar `formats/tokens.json` com estrutura mínima', () => {
    const rootDir = join(__dirname, '..', '..');

    // Garantir que o build já foi executado antes da verificação
    try {
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });
    } catch (err: any) {
      console.log('Build execution error:', err.toString());
      throw err; // Propagar erro para diagnóstico
    }

    const filePath = join(rootDir, 'formats', 'tokens.json');
    // Tentar ler o arquivo para verificar se existe
    const parsed = JSON.parse(readFileSync(filePath, 'utf-8'));
    expect(parsed).toBeDefined();
    expect(parsed).toHaveProperty('primitives');
    expect(parsed.primitives).toHaveProperty('color');
    expect(parsed).toHaveProperty('themes');
    expect(parsed.themes).toHaveProperty('light');
    expect(parsed.themes).toHaveProperty('dark');
  });

  it('semantics devem referenciar primitivos (placeholders esperados)', () => {
    const containsPaletteRef = (obj: any): boolean => {
      if (typeof obj === 'string') return obj.includes('{palette');
      if (typeof obj === 'object' && obj !== null)
        return Object.values(obj).some(containsPaletteRef);
      return false;
    };

    expect(containsPaletteRef(colorSemantic)).toBe(true);
  });
});
