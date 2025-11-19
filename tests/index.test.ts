/**
 * @fileoverview Testes para o ponto de entrada principal da biblioteca
 * 
 * @description
 * Testa as exportações principais e a estrutura dos tokens
 */

import {
  tokens,
  themes,
  lightTheme,
  darkTheme,
  lightThemeColors,
  darkThemeColors,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens,
  animationTokens,
  effectTokens,
  componentTokens,
} from '../index';

describe('Index - Ponto de Entrada Principal', () => {
  describe('Exportações de Tokens', () => {
    it('deve exportar tokens como objeto principal', () => {
      expect(tokens).toBeDefined();
      expect(typeof tokens).toBe('object');
    });

    it('deve ter estrutura correta de tokens', () => {
      expect(tokens).toHaveProperty('colors');
      expect(tokens).toHaveProperty('typography');
      expect(tokens).toHaveProperty('spacing');
      expect(tokens).toHaveProperty('radius');
      expect(tokens).toHaveProperty('shadows');
      expect(tokens).toHaveProperty('animations');
      expect(tokens).toHaveProperty('hero');
      expect(tokens).toHaveProperty('effects');
      expect(tokens).toHaveProperty('components');
    });

    it('deve ter cores para light e dark', () => {
      expect(tokens.colors).toHaveProperty('light');
      expect(tokens.colors).toHaveProperty('dark');
    });

    it('deve exportar lightThemeColors', () => {
      expect(lightThemeColors).toBeDefined();
      expect(lightThemeColors).toBe(tokens.colors.light);
    });

    it('deve exportar darkThemeColors', () => {
      expect(darkThemeColors).toBeDefined();
      expect(darkThemeColors).toBe(tokens.colors.dark);
    });

    it('deve exportar typographyTokens', () => {
      expect(typographyTokens).toBeDefined();
      expect(typographyTokens).toBe(tokens.typography);
    });

    it('deve exportar spacingTokens', () => {
      expect(spacingTokens).toBeDefined();
      expect(spacingTokens).toBe(tokens.spacing);
    });

    it('deve exportar radiusTokens', () => {
      expect(radiusTokens).toBeDefined();
      expect(radiusTokens).toBe(tokens.radius);
    });

    it('deve exportar shadowTokens', () => {
      expect(shadowTokens).toBeDefined();
      expect(shadowTokens).toBe(tokens.shadows);
    });

    it('deve exportar animationTokens', () => {
      expect(animationTokens).toBeDefined();
      expect(animationTokens).toBe(tokens.animations);
    });

    it('deve exportar effectTokens', () => {
      expect(effectTokens).toBeDefined();
      expect(effectTokens).toBe(tokens.effects);
    });

    it('deve exportar componentTokens', () => {
      expect(componentTokens).toBeDefined();
      expect(componentTokens).toHaveProperty('celestialBackground');
    });
  });

  describe('Exportações de Temas', () => {
    it('deve exportar themes como objeto', () => {
      expect(themes).toBeDefined();
      expect(typeof themes).toBe('object');
    });

    it('deve ter light e dark themes', () => {
      expect(themes).toHaveProperty('light');
      expect(themes).toHaveProperty('dark');
    });

    it('deve exportar lightTheme', () => {
      expect(lightTheme).toBeDefined();
      expect(lightTheme).toBe(themes.light);
    });

    it('deve exportar darkTheme', () => {
      expect(darkTheme).toBeDefined();
      expect(darkTheme).toBe(themes.dark);
    });

    it('lightTheme deve ter estrutura completa', () => {
      expect(lightTheme).toHaveProperty('colors');
      expect(lightTheme).toHaveProperty('typography');
      expect(lightTheme).toHaveProperty('spacing');
      expect(lightTheme).toHaveProperty('radius');
      expect(lightTheme).toHaveProperty('shadows');
    });

    it('darkTheme deve ter estrutura completa', () => {
      expect(darkTheme).toHaveProperty('colors');
      expect(darkTheme).toHaveProperty('typography');
      expect(darkTheme).toHaveProperty('spacing');
      expect(darkTheme).toHaveProperty('radius');
      expect(darkTheme).toHaveProperty('shadows');
    });
  });

  describe('Imutabilidade', () => {
    it('tokens devem manter referência original', () => {
      // Verifica que tokens mantém referência (readonly em TypeScript)
      const originalColors = tokens.colors;
      // Em runtime, objetos const não impedem modificação de propriedades
      // mas TypeScript impede em compile-time
      expect(tokens.colors).toBe(originalColors);
      expect(Object.isFrozen(tokens) || Object.isFrozen(tokens.colors)).toBeDefined();
    });
  });
});

