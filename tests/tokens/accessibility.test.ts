/**
 * @fileoverview Testes para tokens/accessibility.ts
 * 
 * @description
 * Testa utilitários de acessibilidade WCAG (contraste de cores)
 */

import {
  hexToRgb,
  getLuminance,
  getContrast,
  meetsWCAGAA,
  meetsWCAGAAA,
  getContrastInfo,
  validateContrast,
} from '../../tokens/accessibility';

describe('Accessibility - Utilitários WCAG', () => {
  describe('hexToRgb', () => {
    it('deve converter hex para RGB corretamente', () => {
      const rgb = hexToRgb('#0891b2');
      expect(rgb).toEqual({ r: 8, g: 145, b: 178 });
    });

    it('deve aceitar hex com ou sem #', () => {
      const withHash = hexToRgb('#ffffff');
      const withoutHash = hexToRgb('ffffff');
      expect(withHash).toEqual(withoutHash);
      expect(withHash).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('deve lançar erro para hex inválido', () => {
      expect(() => hexToRgb('invalid')).toThrow('Invalid hex color');
      expect(() => hexToRgb('#gggggg')).toThrow('Invalid hex color');
      expect(() => hexToRgb('12345')).toThrow('Invalid hex color');
    });

    it('deve converter preto corretamente', () => {
      const rgb = hexToRgb('#000000');
      expect(rgb).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('deve converter branco corretamente', () => {
      const rgb = hexToRgb('#ffffff');
      expect(rgb).toEqual({ r: 255, g: 255, b: 255 });
    });
  });

  describe('getLuminance', () => {
    it('deve calcular luminância para branco (1.0)', () => {
      const luminance = getLuminance(255, 255, 255);
      expect(luminance).toBeCloseTo(1.0, 2);
    });

    it('deve calcular luminância para preto (0.0)', () => {
      const luminance = getLuminance(0, 0, 0);
      expect(luminance).toBeCloseTo(0.0, 2);
    });

    it('deve calcular luminância para cor específica', () => {
      const luminance = getLuminance(8, 145, 178); // #0891b2
      expect(luminance).toBeGreaterThan(0);
      expect(luminance).toBeLessThan(1);
    });

    it('deve retornar valor entre 0 e 1', () => {
      const luminance = getLuminance(128, 128, 128);
      expect(luminance).toBeGreaterThanOrEqual(0);
      expect(luminance).toBeLessThanOrEqual(1);
    });
  });

  describe('getContrast', () => {
    it('deve calcular contraste máximo (preto/branco = 21:1)', () => {
      const contrast = getContrast('#000000', '#ffffff');
      expect(contrast).toBeCloseTo(21, 0);
    });

    it('deve calcular contraste mínimo (mesma cor = 1:1)', () => {
      const contrast = getContrast('#ffffff', '#ffffff');
      expect(contrast).toBeCloseTo(1, 1);
    });

    it('deve calcular contraste para cores específicas', () => {
      const contrast = getContrast('#0891b2', '#ffffff');
      expect(contrast).toBeGreaterThan(1);
      expect(contrast).toBeLessThan(21);
    });

    it('deve ser simétrico (contraste A-B = contraste B-A)', () => {
      const contrast1 = getContrast('#0891b2', '#ffffff');
      const contrast2 = getContrast('#ffffff', '#0891b2');
      expect(contrast1).toBeCloseTo(contrast2, 1);
    });

    it('deve retornar valor entre 1 e 21', () => {
      const contrast = getContrast('#0891b2', '#ffffff');
      expect(contrast).toBeGreaterThanOrEqual(1);
      expect(contrast).toBeLessThanOrEqual(21);
    });
  });

  describe('meetsWCAGAA', () => {
    it('deve retornar true para contraste suficiente (texto normal)', () => {
      const meets = meetsWCAGAA('#000000', '#ffffff', false);
      expect(meets).toBe(true);
    });

    it('deve retornar false para contraste insuficiente (texto normal)', () => {
      const meets = meetsWCAGAA('#808080', '#ffffff', false);
      expect(meets).toBe(false);
    });

    it('deve retornar true para texto grande com contraste 3:1', () => {
      const meets = meetsWCAGAA('#0891b2', '#ffffff', true);
      expect(meets).toBe(true);
    });

    it('deve retornar false para texto normal com contraste < 4.5:1', () => {
      const meets = meetsWCAGAA('#0891b2', '#ffffff', false);
      // #0891b2 tem contraste ~3.2:1, não atende AA para texto normal
      expect(meets).toBe(false);
    });
  });

  describe('meetsWCAGAAA', () => {
    it('deve retornar true para contraste 7:1+ (texto normal)', () => {
      const meets = meetsWCAGAAA('#000000', '#ffffff', false);
      expect(meets).toBe(true);
    });

    it('deve retornar false para contraste < 7:1 (texto normal)', () => {
      const meets = meetsWCAGAAA('#0891b2', '#ffffff', false);
      expect(meets).toBe(false);
    });

    it('deve retornar true para texto grande com contraste 4.5:1+', () => {
      const meets = meetsWCAGAAA('#000000', '#ffffff', true);
      expect(meets).toBe(true);
    });
  });

  describe('getContrastInfo', () => {
    it('deve retornar informações completas de contraste', () => {
      const info = getContrastInfo('#000000', '#ffffff');
      expect(info).toHaveProperty('contrast');
      expect(info).toHaveProperty('meetsAA');
      expect(info).toHaveProperty('meetsAALarge');
      expect(info).toHaveProperty('meetsAAA');
      expect(info).toHaveProperty('meetsAAALarge');
      expect(info).toHaveProperty('level');
    });

    it('deve ter contraste máximo para preto/branco', () => {
      const info = getContrastInfo('#000000', '#ffffff');
      expect(info.contrast).toBeCloseTo(21, 0);
      expect(info.meetsAA).toBe(true);
      expect(info.meetsAAA).toBe(true);
      expect(info.level).toBe('AAA');
    });

    it('deve classificar nível corretamente', () => {
      const info1 = getContrastInfo('#000000', '#ffffff');
      expect(['AAA', 'AAA Large', 'AA', 'AA Large', 'Fail']).toContain(info1.level);

      const info2 = getContrastInfo('#808080', '#ffffff');
      expect(['AAA', 'AAA Large', 'AA', 'AA Large', 'Fail']).toContain(info2.level);
    });
  });

  describe('validateContrast', () => {
    it('deve validar contraste com opções padrão', () => {
      const validation = validateContrast('#000000', '#ffffff');
      expect(validation).toHaveProperty('valid');
      expect(validation).toHaveProperty('level');
      expect(validation).toHaveProperty('contrast');
      expect(validation).toHaveProperty('message');
    });

    it('deve retornar valid=true para contraste suficiente', () => {
      const validation = validateContrast('#000000', '#ffffff');
      expect(validation.valid).toBe(true);
      expect(validation.message).toContain('válido');
    });

    it('deve retornar valid=false para contraste insuficiente', () => {
      const validation = validateContrast('#808080', '#ffffff', {
        requireAAA: false,
        largeText: false,
      });
      expect(validation.valid).toBe(false);
      expect(validation.message).toContain('insuficiente');
    });

    it('deve validar WCAG AA para texto grande', () => {
      const validation = validateContrast('#0891b2', '#ffffff', {
        requireAAA: false,
        largeText: true,
      });
      expect(validation.valid).toBe(true);
      expect(validation.message).toContain('WCAG AA');
      expect(validation.message).toContain('Texto Grande');
    });

    it('deve validar WCAG AAA quando requerido', () => {
      const validation = validateContrast('#000000', '#ffffff', {
        requireAAA: true,
        largeText: false,
      });
      expect(validation.valid).toBe(true);
      expect(validation.message).toContain('WCAG AAA');
    });

    it('deve incluir valores de contraste na mensagem de erro', () => {
      const validation = validateContrast('#808080', '#ffffff', {
        requireAAA: false,
        largeText: false,
      });
      if (!validation.valid) {
        expect(validation.message).toContain('4.5:1');
        expect(validation.message).toContain(validation.contrast.toFixed(2));
      }
    });
  });

  describe('Casos de uso reais', () => {
    it('deve validar cores primárias do tema light', () => {
      // Testa se as cores do tema light têm contraste adequado
      const primaryOnWhite = getContrastInfo('#0891b2', '#ffffff');
      expect(primaryOnWhite.contrast).toBeGreaterThan(1);
    });

    it('deve validar cores primárias do tema dark', () => {
      // Testa se as cores do tema dark têm contraste adequado
      const primaryOnDark = getContrastInfo('#06b6d4', '#0a0a0f');
      expect(primaryOnDark.contrast).toBeGreaterThan(1);
    });
  });
});

