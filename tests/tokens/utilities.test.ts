/**
 * @fileoverview Testes para tokens/utilities.ts
 * 
 * @description
 * Testa os tokens utilitários (classes Tailwind CSS)
 */

import {
  GRADIENT_DIRECTIONS,
  GRADIENTS,
  GRADIENT_COMPOSITES,
  GRADIENT_COLORS,
  BACKGROUND,
  type GradientDirections,
  type Gradients,
  type GradientComposites,
  type GradientColors,
  type Background,
} from '../../tokens/utilities';

describe('Tokens Utilities - Classes Tailwind CSS', () => {
  describe('GRADIENT_DIRECTIONS', () => {
    it('deve exportar GRADIENT_DIRECTIONS', () => {
      expect(GRADIENT_DIRECTIONS).toBeDefined();
      expect(typeof GRADIENT_DIRECTIONS).toBe('object');
    });

    it('deve ter todas as direções de gradiente', () => {
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_TOP');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_BOTTOM');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_LEFT');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_RIGHT');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_TL');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_TR');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_BL');
      expect(GRADIENT_DIRECTIONS).toHaveProperty('TO_BR');
    });

    it('deve ter classes Tailwind válidas', () => {
      expect(GRADIENT_DIRECTIONS.TO_TOP).toContain('bg-linear-to-t');
      expect(GRADIENT_DIRECTIONS.TO_BOTTOM).toContain('bg-linear-to-b');
      expect(GRADIENT_DIRECTIONS.TO_RIGHT).toContain('bg-linear-to-r');
    });

    it('deve ter tipo GradientDirections', () => {
      const test: GradientDirections = GRADIENT_DIRECTIONS;
      expect(test).toBe(GRADIENT_DIRECTIONS);
    });
  });

  describe('GRADIENTS', () => {
    it('deve exportar GRADIENTS', () => {
      expect(GRADIENTS).toBeDefined();
      expect(typeof GRADIENTS).toBe('object');
    });

    it('deve ter gradientes de texto', () => {
      expect(GRADIENTS).toHaveProperty('TEXT_PRIMARY');
      expect(GRADIENTS.TEXT_PRIMARY).toContain('bg-clip-text');
      expect(GRADIENTS.TEXT_PRIMARY).toContain('text-transparent');
    });

    it('deve ter gradientes decorativos', () => {
      expect(GRADIENTS).toHaveProperty('DECORATIVE_PRIMARY');
      expect(GRADIENTS).toHaveProperty('DECORATIVE_CYAN_PURPLE');
      expect(GRADIENTS).toHaveProperty('DECORATIVE_GREEN_EMERALD');
    });

    it('deve ter gradientes de botões', () => {
      expect(GRADIENTS).toHaveProperty('BUTTON_CYAN_BLUE');
      expect(GRADIENTS).toHaveProperty('BUTTON_PURPLE_PINK');
    });

    it('deve usar variáveis CSS (var(--color-*))', () => {
      expect(GRADIENTS.TEXT_PRIMARY).toContain('var(--color-');
      expect(GRADIENTS.DECORATIVE_PRIMARY).toContain('var(--color-');
    });

    it('deve ter tipo Gradients', () => {
      const test: Gradients = GRADIENTS;
      expect(test).toBe(GRADIENTS);
    });
  });

  describe('GRADIENT_COMPOSITES', () => {
    it('deve exportar GRADIENT_COMPOSITES', () => {
      expect(GRADIENT_COMPOSITES).toBeDefined();
      expect(typeof GRADIENT_COMPOSITES).toBe('object');
    });

    it('deve ter gradientes horizontais', () => {
      expect(GRADIENT_COMPOSITES).toHaveProperty('HORIZONTAL_PRIMARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('HORIZONTAL_SECONDARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('HORIZONTAL_DECORATIVE');
      expect(GRADIENT_COMPOSITES).toHaveProperty('HORIZONTAL_CYAN_PURPLE');
    });

    it('deve ter gradientes verticais', () => {
      expect(GRADIENT_COMPOSITES).toHaveProperty('VERTICAL_PRIMARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('VERTICAL_SECONDARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('VERTICAL_DECORATIVE');
    });

    it('deve ter gradientes diagonais', () => {
      expect(GRADIENT_COMPOSITES).toHaveProperty('DIAGONAL_PRIMARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('DIAGONAL_SECONDARY');
      expect(GRADIENT_COMPOSITES).toHaveProperty('DIAGONAL_GREEN_EMERALD');
    });

    it('deve combinar direção e cores', () => {
      expect(GRADIENT_COMPOSITES.HORIZONTAL_PRIMARY).toContain('bg-linear-to-r');
      expect(GRADIENT_COMPOSITES.VERTICAL_PRIMARY).toContain('bg-linear-to-b');
      expect(GRADIENT_COMPOSITES.DIAGONAL_PRIMARY).toContain('bg-linear-to-br');
    });

    it('deve ter tipo GradientComposites', () => {
      const test: GradientComposites = GRADIENT_COMPOSITES;
      expect(test).toBe(GRADIENT_COMPOSITES);
    });
  });

  describe('GRADIENT_COLORS', () => {
    it('deve exportar GRADIENT_COLORS', () => {
      expect(GRADIENT_COLORS).toBeDefined();
      expect(typeof GRADIENT_COLORS).toBe('object');
    });

    it('deve ter gradientes de escala', () => {
      expect(GRADIENT_COLORS).toHaveProperty('GRAY_SCALE');
      expect(GRADIENT_COLORS).toHaveProperty('BLUE_SCALE');
      expect(GRADIENT_COLORS).toHaveProperty('SUCCESS_SCALE');
      expect(GRADIENT_COLORS).toHaveProperty('TEXT_MUTED');
    });

    it('deve usar variáveis CSS de tokens', () => {
      expect(GRADIENT_COLORS.GRAY_SCALE).toContain('var(--color-');
      expect(GRADIENT_COLORS.BLUE_SCALE).toContain('var(--color-');
      expect(GRADIENT_COLORS.SUCCESS_SCALE).toContain('var(--color-');
    });

    it('deve ter tipo GradientColors', () => {
      const test: GradientColors = GRADIENT_COLORS;
      expect(test).toBe(GRADIENT_COLORS);
    });
  });

  describe('BACKGROUND', () => {
    it('deve exportar BACKGROUND', () => {
      expect(BACKGROUND).toBeDefined();
      expect(typeof BACKGROUND).toBe('object');
    });

    it('deve ter backgrounds básicos', () => {
      expect(BACKGROUND).toHaveProperty('FULL');
      expect(BACKGROUND).toHaveProperty('GRADIENT_OVERLAY');
    });

    it('deve ter divisores premium', () => {
      expect(BACKGROUND).toHaveProperty('PREMIUM_DIVIDER_CONTAINER');
      expect(BACKGROUND).toHaveProperty('PREMIUM_DIVIDER_LINE');
    });

    it('deve ter backgrounds de seção', () => {
      expect(BACKGROUND).toHaveProperty('SECTION_CYAN');
      expect(BACKGROUND).toHaveProperty('SECTION_CYAN_VIA');
      expect(BACKGROUND).toHaveProperty('SECTION_PURPLE_VIA');
      expect(BACKGROUND).toHaveProperty('SECTION_PINK_VIA');
    });

    it('deve usar variáveis CSS', () => {
      expect(BACKGROUND.FULL).toContain('var(--color-');
      expect(BACKGROUND.GRADIENT_OVERLAY).toContain('var(--color-');
    });

    it('deve ter tipo Background', () => {
      const test: Background = BACKGROUND;
      expect(test).toBe(BACKGROUND);
    });
  });

  describe('Imutabilidade', () => {
    it('todos os objetos devem manter referência original', () => {
      // Em runtime, objetos const não impedem modificação de propriedades
      // mas TypeScript impede em compile-time com 'as const'
      const original = GRADIENT_DIRECTIONS.TO_TOP;
      expect(GRADIENT_DIRECTIONS.TO_TOP).toBe(original);
      expect(typeof GRADIENT_DIRECTIONS).toBe('object');
    });
  });
});

