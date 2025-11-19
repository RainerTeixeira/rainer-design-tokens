/**
 * @fileoverview Testes para tokens/index.ts
 * 
 * @description
 * Testa a estrutura e exportações dos tokens de design
 */

import {
  tokens,
  lightThemeColors,
  darkThemeColors,
  typographyTokens,
  spacingTokens,
  radiusTokens,
  shadowTokens,
  animationTokens,
  effectTokens,
  componentTokens,
  type Tokens,
  type LightColors,
  type DarkColors,
  type Typography,
  type Spacing,
  type Radius,
  type Shadows,
  type Animations,
} from '../../tokens';

describe('Tokens - Estrutura Principal', () => {
  describe('Objeto tokens', () => {
    it('deve ter todas as propriedades principais', () => {
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
      expect(tokens.colors.light).toBeDefined();
      expect(tokens.colors.dark).toBeDefined();
      expect(typeof tokens.colors.light).toBe('object');
      expect(typeof tokens.colors.dark).toBe('object');
    });
  });

  describe('Cores - Light Theme', () => {
    it('deve exportar lightThemeColors', () => {
      expect(lightThemeColors).toBeDefined();
      expect(lightThemeColors).toBe(tokens.colors.light);
    });

    it('deve ter estrutura de cores completa', () => {
      expect(lightThemeColors).toHaveProperty('primary');
      expect(lightThemeColors).toHaveProperty('secondary');
      expect(lightThemeColors).toHaveProperty('accent');
      expect(lightThemeColors).toHaveProperty('background');
      expect(lightThemeColors).toHaveProperty('text');
      expect(lightThemeColors).toHaveProperty('border');
    });

    it('deve ter cores primárias com estados', () => {
      expect(lightThemeColors.primary).toHaveProperty('base');
      expect(lightThemeColors.primary).toHaveProperty('hover');
      expect(lightThemeColors.primary).toHaveProperty('active');
      expect(lightThemeColors.primary).toHaveProperty('disabled');
    });

    it('cores devem ser strings hex válidas', () => {
      const primaryBase = lightThemeColors.primary.base;
      expect(primaryBase).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });

  describe('Cores - Dark Theme', () => {
    it('deve exportar darkThemeColors', () => {
      expect(darkThemeColors).toBeDefined();
      expect(darkThemeColors).toBe(tokens.colors.dark);
    });

    it('deve ter estrutura de cores completa', () => {
      expect(darkThemeColors).toHaveProperty('primary');
      expect(darkThemeColors).toHaveProperty('secondary');
      expect(darkThemeColors).toHaveProperty('accent');
      expect(darkThemeColors).toHaveProperty('background');
      expect(darkThemeColors).toHaveProperty('text');
    });

    it('cores devem ser strings hex válidas', () => {
      const primaryBase = darkThemeColors.primary.base;
      expect(primaryBase).toMatch(/^#[0-9a-fA-F]{6}$/);
    });
  });

  describe('Tipografia', () => {
    it('deve exportar typographyTokens', () => {
      expect(typographyTokens).toBeDefined();
      expect(typographyTokens).toBe(tokens.typography);
    });

    it('deve ter estrutura de tipografia completa', () => {
      expect(typographyTokens).toHaveProperty('fontFamily');
      expect(typographyTokens).toHaveProperty('fontSize');
      expect(typographyTokens).toHaveProperty('fontWeight');
      expect(typographyTokens).toHaveProperty('lineHeight');
      expect(typographyTokens).toHaveProperty('letterSpacing');
    });

    it('deve ter tamanhos de fonte válidos', () => {
      expect(typographyTokens.fontSize).toBeDefined();
      expect(typeof typographyTokens.fontSize).toBe('object');
    });
  });

  describe('Espaçamento', () => {
    it('deve exportar spacingTokens', () => {
      expect(spacingTokens).toBeDefined();
      expect(spacingTokens).toBe(tokens.spacing);
    });

    it('deve ter valores de espaçamento', () => {
      expect(spacingTokens).toBeDefined();
      expect(typeof spacingTokens).toBe('object');
    });

    it('deve ter espaçamento base (4 = 1rem)', () => {
      expect(spacingTokens['4']).toBeDefined();
      expect(spacingTokens['4']).toContain('rem');
    });
  });

  describe('Radius', () => {
    it('deve exportar radiusTokens', () => {
      expect(radiusTokens).toBeDefined();
      expect(radiusTokens).toBe(tokens.radius);
    });

    it('deve ter valores de raio', () => {
      expect(radiusTokens).toBeDefined();
      expect(typeof radiusTokens).toBe('object');
    });
  });

  describe('Shadows', () => {
    it('deve exportar shadowTokens', () => {
      expect(shadowTokens).toBeDefined();
      expect(shadowTokens).toBe(tokens.shadows);
    });

    it('deve ter sombras para light e dark', () => {
      expect(shadowTokens).toHaveProperty('light');
      expect(shadowTokens).toHaveProperty('dark');
    });
  });

  describe('Animações', () => {
    it('deve exportar animationTokens', () => {
      expect(animationTokens).toBeDefined();
      expect(animationTokens).toBe(tokens.animations);
    });

    it('deve ter estrutura de animações', () => {
      expect(animationTokens).toBeDefined();
      expect(typeof animationTokens).toBe('object');
    });
  });

  describe('Efeitos', () => {
    it('deve exportar effectTokens', () => {
      expect(effectTokens).toBeDefined();
      expect(effectTokens).toBe(tokens.effects);
    });

    it('deve ter estrutura de efeitos', () => {
      expect(effectTokens).toBeDefined();
      expect(typeof effectTokens).toBe('object');
    });
  });

  describe('Componentes', () => {
    it('deve exportar componentTokens', () => {
      expect(componentTokens).toBeDefined();
    });

    it('deve ter celestialBackground', () => {
      expect(componentTokens).toHaveProperty('celestialBackground');
    });
  });

  describe('TypeScript Types', () => {
    it('deve ter tipo Tokens', () => {
      const testTokens: Tokens = tokens;
      expect(testTokens).toBe(tokens);
    });

    it('deve ter tipo LightColors', () => {
      const testColors: LightColors = lightThemeColors;
      expect(testColors).toBe(lightThemeColors);
    });

    it('deve ter tipo DarkColors', () => {
      const testColors: DarkColors = darkThemeColors;
      expect(testColors).toBe(darkThemeColors);
    });

    it('deve ter tipo Typography', () => {
      const testTypography: Typography = typographyTokens;
      expect(testTypography).toBe(typographyTokens);
    });

    it('deve ter tipo Spacing', () => {
      const testSpacing: Spacing = spacingTokens;
      expect(testSpacing).toBe(spacingTokens);
    });

    it('deve ter tipo Radius', () => {
      const testRadius: Radius = radiusTokens;
      expect(testRadius).toBe(radiusTokens);
    });

    it('deve ter tipo Shadows', () => {
      const testShadows: Shadows = shadowTokens;
      expect(testShadows).toBe(shadowTokens);
    });

    it('deve ter tipo Animations', () => {
      const testAnimations: Animations = animationTokens;
      expect(testAnimations).toBe(animationTokens);
    });
  });
});

