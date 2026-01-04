/**
 * @fileoverview Testes para themes/index.ts
 * 
 * @description
 * Testa as exportações e estrutura dos temas DTCG
 */

import {
  tokens,
  lightTheme,
  darkTheme,
} from '../../index';

describe('Themes - Estrutura DTCG', () => {
  describe('Objeto themes principal', () => {
    it('deve ter themes dentro de tokens', () => {
      expect(tokens).toHaveProperty('themes');
      expect(tokens.themes).toBeDefined();
      expect(typeof tokens.themes).toBe('object');
    });

    it('deve ter light e dark themes', () => {
      expect(tokens.themes).toHaveProperty('light');
      expect(tokens.themes).toHaveProperty('dark');
    });
  });

  describe('Light Theme', () => {
    it('deve exportar lightTheme', () => {
      expect(lightTheme).toBeDefined();
      expect(lightTheme).toBe(tokens.themes.light);
    });

    it('deve ter estrutura de cores DTCG', () => {
      expect(lightTheme).toHaveProperty('background');
      expect(typeof lightTheme.background).toBe('object');
    });

    it('deve ter categorias de cores completas', () => {
      expect(lightTheme).toHaveProperty('background');
      expect(lightTheme).toHaveProperty('text');
      expect(lightTheme).toHaveProperty('button');
      expect(lightTheme).toHaveProperty('border');
      expect(lightTheme).toHaveProperty('status');
      expect(lightTheme).toHaveProperty('interactive');
      expect(lightTheme).toHaveProperty('surface');
    });

    it('deve ter background com variantes', () => {
      expect(lightTheme.background).toHaveProperty('primary');
      expect(lightTheme.background).toHaveProperty('secondary');
      expect(lightTheme.background).toHaveProperty('tertiary');
      expect(lightTheme.background).toHaveProperty('disabled');
      expect(lightTheme.background).toHaveProperty('overlay');
      expect(lightTheme.background).toHaveProperty('inverse');
    });

    it('deve ter text com variantes', () => {
      expect(lightTheme.text).toHaveProperty('primary');
      expect(lightTheme.text).toHaveProperty('secondary');
      expect(lightTheme.text).toHaveProperty('tertiary');
      expect(lightTheme.text).toHaveProperty('disabled');
      expect(lightTheme.text).toHaveProperty('inverse');
      expect(lightTheme.text).toHaveProperty('link');
      expect(lightTheme.text).toHaveProperty('linkHover');
    });

    it('deve ter buttons com estados', () => {
      expect(lightTheme.button).toHaveProperty('primary');
      expect(lightTheme.button).toHaveProperty('secondary');
      expect(lightTheme.button).toHaveProperty('tertiary');
      expect(lightTheme.button).toHaveProperty('danger');
      expect(lightTheme.button).toHaveProperty('success');

      // Cada button deve ter estados
      expect(lightTheme.button.primary).toHaveProperty('default');
      expect(lightTheme.button.primary).toHaveProperty('hover');
      expect(lightTheme.button.primary).toHaveProperty('active');
      expect(lightTheme.button.primary).toHaveProperty('text');
    });

    it('deve ter border com variantes', () => {
      expect(lightTheme.border).toHaveProperty('default');
      expect(lightTheme.border).toHaveProperty('light');
      expect(lightTheme.border).toHaveProperty('medium');
      expect(lightTheme.border).toHaveProperty('dark');
      expect(lightTheme.border).toHaveProperty('focus');
      expect(lightTheme.border).toHaveProperty('error');
      expect(lightTheme.border).toHaveProperty('success');
      expect(lightTheme.border).toHaveProperty('warning');
    });

    it('deve ter status com variantes', () => {
      expect(lightTheme.status).toHaveProperty('success');
      expect(lightTheme.status).toHaveProperty('error');
      expect(lightTheme.status).toHaveProperty('warning');
      expect(lightTheme.status).toHaveProperty('info');

      // Cada status deve ter variantes
      expect(lightTheme.status.success).toHaveProperty('default');
      expect(lightTheme.status.success).toHaveProperty('light');
      expect(lightTheme.status.success).toHaveProperty('dark');
      expect(lightTheme.status.success).toHaveProperty('text');
    });

    it('deve ter interactive com links', () => {
      expect(lightTheme.interactive).toHaveProperty('link');
      expect(lightTheme.interactive).toHaveProperty('focus');

      expect(lightTheme.interactive.link).toHaveProperty('default');
      expect(lightTheme.interactive.link).toHaveProperty('hover');
      expect(lightTheme.interactive.link).toHaveProperty('visited');
      expect(lightTheme.interactive.link).toHaveProperty('active');
    });

    it('deve ter surface com elevações', () => {
      expect(lightTheme.surface).toHaveProperty('elevated');
      expect(lightTheme.surface).toHaveProperty('raised');
      expect(lightTheme.surface).toHaveProperty('sunken');
    });
  });

  describe('Dark Theme', () => {
    it('deve exportar darkTheme', () => {
      expect(darkTheme).toBeDefined();
      expect(darkTheme).toBe(tokens.themes.dark);
    });

    it('deve ter estrutura de cores DTCG', () => {
      expect(darkTheme).toHaveProperty('background');
      expect(typeof darkTheme.background).toBe('object');
    });

    it('deve ter mesma estrutura que light theme', () => {
      const lightKeys = Object.keys(lightTheme);
      const darkKeys = Object.keys(darkTheme);
      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });

    it('deve ter background com valores escuros', () => {
      expect(darkTheme.background.primary).toBe('{palette.gray.900}');
      expect(darkTheme.background.secondary).toBe('{palette.gray.800}');
      expect(darkTheme.background.tertiary).toBe('{palette.gray.700}');
    });

    it('deve ter text com valores claros', () => {
      expect(darkTheme.text.primary).toBe('{palette.gray.50}');
      expect(darkTheme.text.secondary).toBe('{palette.gray.300}');
      expect(darkTheme.text.tertiary).toBe('{palette.gray.400}');
    });

    it('deve ter buttons com cores adaptadas', () => {
      expect(darkTheme.button.primary.default).toBe('{palette.blue.500}');
      expect(darkTheme.button.primary.hover).toBe('{palette.blue.400}');
      expect(darkTheme.button.primary.active).toBe('{palette.blue.300}');
    });

    it('deve ter border com cores adaptadas', () => {
      expect(darkTheme.border.default).toBe('{palette.gray.700}');
      expect(darkTheme.border.light).toBe('{palette.gray.600}');
      expect(darkTheme.border.medium).toBe('{palette.gray.500}');
    });
  });

  describe('Consistência entre Temas', () => {
    it('light e dark devem ter mesma estrutura', () => {
      const lightKeys = Object.keys(lightTheme);
      const darkKeys = Object.keys(darkTheme);
      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });

    it('cores devem ser diferentes entre temas', () => {
      expect(lightTheme).not.toBe(darkTheme);
      expect(lightTheme.background.primary).not.toBe(
        darkTheme.background.primary
      );
    });

    it('overlay deve ter opacidades diferentes', () => {
      expect(lightTheme.background.overlay).toBe('rgba(0, 0, 0, 0.5)');
      expect(darkTheme.background.overlay).toBe('rgba(0, 0, 0, 0.8)');
    });

    it('links devem ter cores diferentes', () => {
      expect(lightTheme.text.link).toBe('{palette.blue.600}');
      expect(darkTheme.text.link).toBe('{palette.blue.400}');
      expect(lightTheme.text.linkHover).toBe('{palette.blue.700}');
      expect(darkTheme.text.linkHover).toBe('{palette.blue.300}');
    });
  });

  describe('Referências DTCG', () => {
    it('temas devem referenciar primitivos diretamente', () => {
      expect(lightTheme.background.primary).toBe('{palette.white}');
      expect(darkTheme.background.primary).toBe('{palette.gray.900}');
    });

    it('todas as cores devem referenciar palette', () => {
      const checkReferences = (obj: any, path = '') => {
        for (const [key, value] of Object.entries(obj)) {
          const currentPath = path ? `${path}.${key}` : key;
          if (typeof value === 'string') {
            if (value.includes('{palette.')) {
              expect(value).toMatch(/^\{palette\.[a-zA-Z]+[\d\.]*\}$/);
            }
          } else if (typeof value === 'object' && value !== null) {
            checkReferences(value, currentPath);
          }
        }
      };

      checkReferences(lightTheme);
      checkReferences(darkTheme);
    });

    it('não deve ter referências circulares', () => {
      const checkCircular = (obj: any, seen = new WeakSet()): boolean => {
        if (seen.has(obj)) return true;
        seen.add(obj);
        
        for (const value of Object.values(obj)) {
          if (typeof value === 'object' && value !== null) {
            if (checkCircular(value, seen)) return true;
          }
        }
        return false;
      };

      expect(checkCircular(lightTheme)).toBe(false);
      expect(checkCircular(darkTheme)).toBe(false);
    });
  });

  describe('Imutabilidade', () => {
    it('themes deve manter referência original', () => {
      const originalLight = tokens.themes.light;
      const originalDark = tokens.themes.dark;

      expect(tokens.themes.light).toBe(originalLight);
      expect(tokens.themes.dark).toBe(originalDark);
    });
  });
});

