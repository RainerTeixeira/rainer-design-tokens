/**
 * @fileoverview Testes para tokens/index.ts
 * 
 * @description
 * Testa a estrutura DTCG e exportações dos tokens de design
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
} from '../../index';

describe('Tokens - Estrutura DTCG', () => {
  describe('Objeto tokens principal', () => {
    it('deve ter estrutura DTCG correta', () => {
      expect(tokens).toHaveProperty('primitives');
      expect(tokens).toHaveProperty('semantics');
      expect(tokens).toHaveProperty('themes');
    });

    it('primitives deve ter todas as categorias fundamentais', () => {
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

    it('semantics deve ter categorias com significado', () => {
      expect(tokens.semantics).toHaveProperty('color');
      expect(tokens.semantics).toHaveProperty('spacing');
      expect(tokens.semantics).toHaveProperty('typography');
      expect(tokens.semantics).toHaveProperty('border');
      expect(tokens.semantics).toHaveProperty('layout');
      expect(tokens.semantics).toHaveProperty('elevation');
      expect(tokens.semantics).toHaveProperty('motion');
    });

    it('themes deve ter implementações completas', () => {
      expect(tokens.themes).toHaveProperty('light');
      expect(tokens.themes).toHaveProperty('dark');
    });
  });

  describe('Primitivos - Cores', () => {
    it('deve exportar colorPrimitive', () => {
      expect(colorPrimitive).toBeDefined();
      expect(colorPrimitive).toBe(tokens.primitives.color);
    });

    it('deve ter paleta de cores completa', () => {
      expect(colorPrimitive).toBeDefined();
      expect(colorPrimitive).toHaveProperty('white');
      expect(colorPrimitive).toHaveProperty('black');
      expect(colorPrimitive).toHaveProperty('gray');
      expect(colorPrimitive).toHaveProperty('blue');
      expect(colorPrimitive).toHaveProperty('purple');
      expect(colorPrimitive).toHaveProperty('red');
      expect(colorPrimitive).toHaveProperty('green');
    });

    it('paleta deve ter escala de cinza completa', () => {
      const gray = colorPrimitive.gray;
      expect(gray).toHaveProperty('50');
      expect(gray).toHaveProperty('100');
      expect(gray).toHaveProperty('200');
      expect(gray).toHaveProperty('300');
      expect(gray).toHaveProperty('400');
      expect(gray).toHaveProperty('500');
      expect(gray).toHaveProperty('600');
      expect(gray).toHaveProperty('700');
      expect(gray).toHaveProperty('800');
      expect(gray).toHaveProperty('900');
    });

    it('cores devem ser strings hex válidas', () => {
      expect(colorPrimitive.white).toBe('#ffffff');
      expect(colorPrimitive.black).toBe('#000000');
      expect(colorPrimitive.gray[900]).toBe('#111827');
    });
  });

  describe('Primitivos - Espaçamento', () => {
    it('deve exportar spacingPrimitive', () => {
      expect(spacingPrimitive).toBeDefined();
      expect(spacingPrimitive).toBe(tokens.primitives.spacing);
    });

    it('deve ter escala de espaçamento', () => {
      expect(spacingPrimitive).toBeDefined();
      expect(spacingPrimitive).toHaveProperty('0');
      expect(spacingPrimitive).toHaveProperty('1');
      expect(spacingPrimitive).toHaveProperty('2');
      expect(spacingPrimitive).toHaveProperty('4');
      expect(spacingPrimitive).toHaveProperty('8');
    });

    it('espaçamento deve usar valores rem', () => {
      expect(spacingPrimitive['4']).toBe('1rem');
      expect(spacingPrimitive['8']).toBe('2rem');
    });
  });

  describe('Primitivos - Tipografia', () => {
    it('deve exportar typographyPrimitive', () => {
      expect(typographyPrimitive).toBeDefined();
      expect(typographyPrimitive).toBe(tokens.primitives.typography);
    });

    it('deve ter estrutura de tipografia completa', () => {
      expect(typographyPrimitive).toHaveProperty('fontFamily');
      expect(typographyPrimitive).toHaveProperty('fontSize');
      expect(typographyPrimitive).toHaveProperty('fontWeight');
      expect(typographyPrimitive).toHaveProperty('lineHeight');
      expect(typographyPrimitive).toHaveProperty('letterSpacing');
    });

    it('deve ter font families padrão', () => {
      expect(typographyPrimitive.fontFamily).toHaveProperty('sans');
      expect(typographyPrimitive.fontFamily).toHaveProperty('serif');
      expect(typographyPrimitive.fontFamily).toHaveProperty('mono');
    });
  });

  describe('Primitivos - Motion', () => {
    it('deve exportar motionPrimitive', () => {
      expect(motionPrimitive).toBeDefined();
      expect(motionPrimitive).toBe(tokens.primitives.motion);
    });

    it('deve ter durações e easings', () => {
      expect(motionPrimitive).toHaveProperty('duration');
      expect(motionPrimitive).toHaveProperty('easing');
      expect(motionPrimitive).toHaveProperty('delay');
    });

    it('durações devem ser strings ms', () => {
      expect(motionPrimitive.duration.instant).toBe('0ms');
      expect(motionPrimitive.duration.fast).toBe('100ms');
      expect(motionPrimitive.duration.normal).toBe('200ms');
    });
  });

  describe('Primitivos - Outros', () => {
    it('deve exportar radiusPrimitive', () => {
      expect(radiusPrimitive).toBeDefined();
      expect(radiusPrimitive).toBe(tokens.primitives.radius);
    });

    it('deve exportar shadowsPrimitive', () => {
      expect(shadowsPrimitive).toBeDefined();
      expect(shadowsPrimitive).toBe(tokens.primitives.shadows);
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

  describe('Semânticos', () => {
    it('deve exportar colorSemantic', () => {
      expect(colorSemantic).toBeDefined();
      expect(colorSemantic).toBe(tokens.semantics.color);
    });

    it('cores semânticas devem referenciar primitivos', () => {
      expect(colorSemantic.background.primary).toBe('{palette.white}');
      expect(colorSemantic.text.primary).toBe('{palette.gray.900}');
      expect(colorSemantic.button.primary.default).toBe('{palette.blue.500}');
    });

    it('deve ter estrutura semântica completa', () => {
      expect(colorSemantic).toHaveProperty('background');
      expect(colorSemantic).toHaveProperty('text');
      expect(colorSemantic).toHaveProperty('button');
      expect(colorSemantic).toHaveProperty('border');
      expect(colorSemantic).toHaveProperty('status');
      expect(colorSemantic).toHaveProperty('interactive');
      expect(colorSemantic).toHaveProperty('surface');
    });

    it('deve exportar outros semânticos', () => {
      expect(spacingSemantic).toBeDefined();
      expect(typographySemantic).toBeDefined();
      expect(borderSemantic).toBeDefined();
      expect(layoutSemantic).toBeDefined();
      // elevationSemantic e motionSemantic podem não existir ainda
    });
  });

  describe('Temas', () => {
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
      expect(darkTheme).toHaveProperty('background');
    });

    it('temas devem ter valores específicos', () => {
      expect(lightTheme.background.primary).toBe('{palette.white}');
      expect(darkTheme.background.primary).toBe('{palette.gray.900}');
      expect(lightTheme.text.primary).toBe('{palette.gray.900}');
      expect(darkTheme.text.primary).toBe('{palette.gray.50}');
    });

    it('temas devem ter cores diferentes', () => {
      expect(lightTheme).not.toBe(darkTheme);
      expect(lightTheme.background.primary).not.toBe(
        darkTheme.background.primary
      );
    });
  });

  describe('Consistência DTCG', () => {
    it('primitivos devem ser a base de tudo', () => {
      expect(colorPrimitive).toBeDefined();
      expect(typeof colorPrimitive).toBe('object');
    });

    it('semânticos devem referenciar primitivos', () => {
      expect(colorSemantic.background.primary).toContain('{palette.');
      expect(colorSemantic.text.primary).toContain('{palette.');
    });

    it('temas devem referenciar primitivos diretamente', () => {
      expect(lightTheme.background.primary).toContain('{palette.');
      expect(darkTheme.background.primary).toContain('{palette.');
    });

    it('hierarquia deve ser mantida', () => {
      // Primitivos → Semânticos → Temas
      expect(colorPrimitive).toBeDefined();
      expect(colorSemantic).toBeDefined();
      expect(lightTheme).toBeDefined();
      expect(darkTheme).toBeDefined();
    });
  });
});

