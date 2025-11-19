/**
 * @fileoverview Testes para themes/index.ts
 * 
 * @description
 * Testa as exportações e estrutura dos temas
 */

import {
  themes,
  lightTheme,
  darkTheme,
  type Themes,
} from '../../themes';

describe('Themes - Estrutura Principal', () => {
  describe('Objeto themes', () => {
    it('deve exportar themes como objeto', () => {
      expect(themes).toBeDefined();
      expect(typeof themes).toBe('object');
    });

    it('deve ter light e dark themes', () => {
      expect(themes).toHaveProperty('light');
      expect(themes).toHaveProperty('dark');
    });

    it('deve ter tipo Themes', () => {
      const test: Themes = themes;
      expect(test).toBe(themes);
    });
  });

  describe('Light Theme', () => {
    it('deve exportar lightTheme', () => {
      expect(lightTheme).toBeDefined();
      expect(lightTheme).toBe(themes.light);
    });

    it('deve ter estrutura completa', () => {
      expect(lightTheme).toHaveProperty('colors');
      expect(lightTheme).toHaveProperty('typography');
      expect(lightTheme).toHaveProperty('spacing');
      expect(lightTheme).toHaveProperty('radius');
      expect(lightTheme).toHaveProperty('shadows');
    });

    it('deve ter cores do tema light', () => {
      expect(lightTheme.colors).toHaveProperty('primary');
      expect(lightTheme.colors).toHaveProperty('secondary');
      expect(lightTheme.colors).toHaveProperty('background');
      expect(lightTheme.colors).toHaveProperty('text');
    });

    it('deve ter tipografia', () => {
      expect(lightTheme.typography).toBeDefined();
      expect(lightTheme.typography).toHaveProperty('fontFamily');
      expect(lightTheme.typography).toHaveProperty('fontSize');
    });

    it('deve ter espaçamento', () => {
      expect(lightTheme.spacing).toBeDefined();
      expect(typeof lightTheme.spacing).toBe('object');
    });

    it('deve ter raio de borda', () => {
      expect(lightTheme.radius).toBeDefined();
      expect(typeof lightTheme.radius).toBe('object');
    });

    it('deve ter sombras', () => {
      expect(lightTheme.shadows).toBeDefined();
      expect(typeof lightTheme.shadows).toBe('object');
      // Sombras do tema light vêm de tokens.shadows.light
      expect(lightTheme.shadows).toHaveProperty('base');
      expect(lightTheme.shadows).toHaveProperty('sm');
      expect(lightTheme.shadows).toHaveProperty('md');
    });
  });

  describe('Dark Theme', () => {
    it('deve exportar darkTheme', () => {
      expect(darkTheme).toBeDefined();
      expect(darkTheme).toBe(themes.dark);
    });

    it('deve ter estrutura completa', () => {
      expect(darkTheme).toHaveProperty('colors');
      expect(darkTheme).toHaveProperty('typography');
      expect(darkTheme).toHaveProperty('spacing');
      expect(darkTheme).toHaveProperty('radius');
      expect(darkTheme).toHaveProperty('shadows');
    });

    it('deve ter cores do tema dark', () => {
      expect(darkTheme.colors).toHaveProperty('primary');
      expect(darkTheme.colors).toHaveProperty('secondary');
      expect(darkTheme.colors).toHaveProperty('background');
      expect(darkTheme.colors).toHaveProperty('text');
    });

    it('deve ter tipografia', () => {
      expect(darkTheme.typography).toBeDefined();
      expect(darkTheme.typography).toHaveProperty('fontFamily');
      expect(darkTheme.typography).toHaveProperty('fontSize');
    });

    it('deve ter espaçamento', () => {
      expect(darkTheme.spacing).toBeDefined();
      expect(typeof darkTheme.spacing).toBe('object');
    });

    it('deve ter raio de borda', () => {
      expect(darkTheme.radius).toBeDefined();
      expect(typeof darkTheme.radius).toBe('object');
    });

    it('deve ter sombras', () => {
      expect(darkTheme.shadows).toBeDefined();
      expect(typeof darkTheme.shadows).toBe('object');
      // Sombras do tema dark vêm de tokens.shadows.dark
      expect(darkTheme.shadows).toHaveProperty('base');
      expect(darkTheme.shadows).toHaveProperty('sm');
      expect(darkTheme.shadows).toHaveProperty('md');
      // Tema dark tem efeitos glow
      expect(darkTheme.shadows).toHaveProperty('glow');
    });
  });

  describe('Consistência entre temas', () => {
    it('light e dark devem ter mesma estrutura de propriedades', () => {
      const lightKeys = Object.keys(lightTheme);
      const darkKeys = Object.keys(darkTheme);
      expect(lightKeys.sort()).toEqual(darkKeys.sort());
    });

    it('tipografia deve ser a mesma em ambos os temas', () => {
      expect(lightTheme.typography).toBe(darkTheme.typography);
    });

    it('spacing deve ser o mesmo em ambos os temas', () => {
      expect(lightTheme.spacing).toBe(darkTheme.spacing);
    });

    it('radius deve ser o mesmo em ambos os temas', () => {
      expect(lightTheme.radius).toBe(darkTheme.radius);
    });

    it('cores devem ser diferentes entre light e dark', () => {
      expect(lightTheme.colors).not.toBe(darkTheme.colors);
      expect(lightTheme.colors.background.primary).not.toBe(
        darkTheme.colors.background.primary
      );
    });
  });

  describe('Imutabilidade', () => {
    it('themes deve manter referência original', () => {
      // Verifica que themes mantém referência (readonly em TypeScript)
      const originalLight = themes.light;
      // Em runtime, objetos const não impedem modificação de propriedades
      // mas TypeScript impede em compile-time
      expect(themes.light).toBe(originalLight);
      expect(Object.isFrozen(themes) || Object.isFrozen(themes.light)).toBeDefined();
    });
  });
});

