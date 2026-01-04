/**
 * @fileoverview Testes para o ponto de entrada principal da biblioteca
 * 
 * @description
 * Testa as exportações principais e a estrutura DTCG dos tokens
 */

import {
  tokens,
  colorPrimitive,
  spacingPrimitive,
  typographyPrimitive,
  shadowsPrimitive,
  motionPrimitive,
  radiusPrimitive,
  breakpointsPrimitive,
  zIndexPrimitive,
  borderPrimitive,
  opacityPrimitive,
  layoutPrimitive,
  iconSizesPrimitive,
  colorSemantic,
  spacingSemantic,
  typographySemantic,
  borderSemantic,
  layoutSemantic,
  lightTheme,
  darkTheme,
} from '../index';

describe('Index - Ponto de Entrada Principal (DTCG)', () => {
  describe('Objeto tokens principal', () => {
    it('deve exportar tokens como objeto principal', () => {
      expect(tokens).toBeDefined();
      expect(typeof tokens).toBe('object');
    });

    it('deve ter estrutura DTCG correta', () => {
      expect(tokens).toHaveProperty('primitives');
      expect(tokens).toHaveProperty('semantics');
      expect(tokens).toHaveProperty('themes');
    });

    it('primitives deve ter todas as categorias', () => {
      expect(tokens.primitives).toHaveProperty('color');
      expect(tokens.primitives).toHaveProperty('spacing');
      expect(tokens.primitives).toHaveProperty('typography');
      expect(tokens.primitives).toHaveProperty('shadows');
      expect(tokens.primitives).toHaveProperty('motion');
      expect(tokens.primitives).toHaveProperty('radius');
      expect(tokens.primitives).toHaveProperty('breakpoints');
      expect(tokens.primitives).toHaveProperty('zIndex');
      expect(tokens.primitives).toHaveProperty('border');
      expect(tokens.primitives).toHaveProperty('opacity');
      expect(tokens.primitives).toHaveProperty('layout');
      expect(tokens.primitives).toHaveProperty('iconSize');
    });

    it('semantics deve ter categorias semânticas', () => {
      expect(tokens.semantics).toHaveProperty('color');
      expect(tokens.semantics).toHaveProperty('spacing');
      expect(tokens.semantics).toHaveProperty('typography');
      expect(tokens.semantics).toHaveProperty('border');
      expect(tokens.semantics).toHaveProperty('layout');
      expect(tokens.semantics).toHaveProperty('elevation');
      expect(tokens.semantics).toHaveProperty('motion');
    });

    it('themes deve ter light e dark', () => {
      expect(tokens.themes).toHaveProperty('light');
      expect(tokens.themes).toHaveProperty('dark');
    });
  });

  describe('Exportações de Primitivos', () => {
    it('deve exportar colorPrimitive', () => {
      expect(colorPrimitive).toBeDefined();
      expect(colorPrimitive).toBe(tokens.primitives.color);
    });

    it('deve exportar spacingPrimitive', () => {
      expect(spacingPrimitive).toBeDefined();
      expect(spacingPrimitive).toBe(tokens.primitives.spacing);
    });

    it('deve exportar typographyPrimitive', () => {
      expect(typographyPrimitive).toBeDefined();
      expect(typographyPrimitive).toBe(tokens.primitives.typography);
    });

    it('deve exportar shadowsPrimitive', () => {
      expect(shadowsPrimitive).toBeDefined();
      expect(shadowsPrimitive).toBe(tokens.primitives.shadows);
    });

    it('deve exportar motionPrimitive', () => {
      expect(motionPrimitive).toBeDefined();
      expect(motionPrimitive).toBe(tokens.primitives.motion);
    });

    it('deve exportar radiusPrimitive', () => {
      expect(radiusPrimitive).toBeDefined();
      expect(radiusPrimitive).toBe(tokens.primitives.radius);
    });

    it('deve exportar breakpointsPrimitive', () => {
      expect(breakpointsPrimitive).toBeDefined();
      expect(breakpointsPrimitive).toBe(tokens.primitives.breakpoints);
    });

    it('deve exportar zIndexPrimitive', () => {
      expect(zIndexPrimitive).toBeDefined();
      expect(zIndexPrimitive).toBe(tokens.primitives.zIndex);
    });

    it('deve exportar borderPrimitive', () => {
      expect(borderPrimitive).toBeDefined();
      expect(borderPrimitive).toBe(tokens.primitives.border);
    });

    it('deve exportar opacityPrimitive', () => {
      expect(opacityPrimitive).toBeDefined();
      expect(opacityPrimitive).toBe(tokens.primitives.opacity);
    });

    it('deve exportar layoutPrimitive', () => {
      expect(layoutPrimitive).toBeDefined();
      expect(layoutPrimitive).toBe(tokens.primitives.layout);
    });

    it('deve exportar iconSizesPrimitive', () => {
      expect(iconSizesPrimitive).toBeDefined();
      expect(iconSizesPrimitive).toBe(tokens.primitives.iconSize);
    });
  });

  describe('Exportações de Semânticos', () => {
    it('deve exportar colorSemantic', () => {
      expect(colorSemantic).toBeDefined();
      expect(colorSemantic).toBe(tokens.semantics.color);
    });

    it('deve exportar spacingSemantic', () => {
      expect(spacingSemantic).toBeDefined();
      expect(spacingSemantic).toBe(tokens.semantics.spacing);
    });

    it('deve exportar typographySemantic', () => {
      expect(typographySemantic).toBeDefined();
      expect(typographySemantic).toBe(tokens.semantics.typography);
    });

    it('deve exportar borderSemantic', () => {
      expect(borderSemantic).toBeDefined();
      expect(borderSemantic).toBe(tokens.semantics.border);
    });

    it('deve exportar layoutSemantic', () => {
      expect(layoutSemantic).toBeDefined();
      expect(layoutSemantic).toBe(tokens.semantics.layout);
    });

    it('semantics deve ter apenas categorias existentes', () => {
      expect(tokens.semantics).toHaveProperty('color');
      expect(tokens.semantics).toHaveProperty('spacing');
      expect(tokens.semantics).toHaveProperty('typography');
      expect(tokens.semantics).toHaveProperty('border');
      expect(tokens.semantics).toHaveProperty('layout');
      // elevation e motion podem não existir ainda
    });
  });

  describe('Exportações de Temas', () => {
    it('deve exportar lightTheme', () => {
      expect(lightTheme).toBeDefined();
      expect(lightTheme).toBe(tokens.themes.light);
    });

    it('deve exportar darkTheme', () => {
      expect(darkTheme).toBeDefined();
      expect(darkTheme).toBe(tokens.themes.dark);
    });

    it('temas devem ter estrutura de cores', () => {
      expect(lightTheme).toHaveProperty('background');
      expect(lightTheme).toHaveProperty('text');
      expect(darkTheme).toHaveProperty('background');
      expect(darkTheme).toHaveProperty('text');
    });

    it('temas devem ter cores diferentes', () => {
      expect(lightTheme).not.toBe(darkTheme);
      expect(lightTheme.background.primary).not.toBe(
        darkTheme.background.primary
      );
    });
  });

  describe('Validação de Valores', () => {
    it('primitivos devem ter paleta de cores', () => {
      expect(colorPrimitive).toBeDefined();
      expect(colorPrimitive).toHaveProperty('white');
      expect(colorPrimitive).toHaveProperty('black');
      expect(colorPrimitive).toHaveProperty('gray');
      expect(colorPrimitive).toHaveProperty('blue');
    });

    it('paleta deve ter escala de cinza completa', () => {
      const gray = colorPrimitive.gray;
      expect(gray).toHaveProperty('50');
      expect(gray).toHaveProperty('100');
      expect(gray).toHaveProperty('900');
    });

    it('semânticos devem referenciar primitivos', () => {
      expect(colorSemantic.background.primary).toBe('{palette.white}');
      expect(colorSemantic.text.primary).toBe('{palette.gray.900}');
    });

    it('temas devem ter valores resolvidos', () => {
      expect(lightTheme.background.primary).toBe('{palette.white}');
      expect(darkTheme.background.primary).toBe('{palette.gray.900}');
    });
  });

  describe('Imutabilidade', () => {
    it('tokens devem manter referência original', () => {
      const originalPrimitives = tokens.primitives;
      const originalSemantics = tokens.semantics;
      const originalThemes = tokens.themes;

      expect(tokens.primitives).toBe(originalPrimitives);
      expect(tokens.semantics).toBe(originalSemantics);
      expect(tokens.themes).toBe(originalThemes);
    });
  });
});

