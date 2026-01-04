/**
 * @fileoverview Testes para build-tokens.ts
 * 
 * @description
 * Testes automatizados para o script principal de build de tokens
 * Verifica geração de tokens calculados, formatos e changelog
 * 
 * @module tests/scripts/build-tokens.test.ts
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const rootDir = join(__dirname, '..', '..');

describe('build-tokens.ts', () => {
  const scriptsDir = join(rootDir, 'scripts');
  const tokensDir = join(rootDir, 'tokens');
  const formatsDir = join(rootDir, 'formats');

  beforeAll(() => {
    // Garantir que o ambiente está limpo antes dos testes
    console.log('🧪 Preparando ambiente para testes de build-tokens.ts');
  });

  describe('🔧 Geração de Tokens Calculados', () => {
    it('deve gerar radius-scale.json', () => {
      const radiusPath = join(tokensDir, 'primitives', 'radius-scale.json');
      
      // Executar script
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(radiusPath)).toBe(true);
      
      const content = JSON.parse(readFileSync(radiusPath, 'utf-8'));
      expect(content).toHaveProperty('radius');
      expect(content.radius).toHaveProperty('xs');
      expect(content.radius).toHaveProperty('sm');
      expect(content.radius).toHaveProperty('md');
      expect(content.radius).toHaveProperty('lg');
    });

    it('deve gerar breakpoints.json', () => {
      const breakpointsPath = join(tokensDir, 'primitives', 'breakpoints.json');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(breakpointsPath)).toBe(true);
      
      const content = JSON.parse(readFileSync(breakpointsPath, 'utf-8'));
      expect(content).toHaveProperty('breakpoints');
      expect(content.breakpoints).toHaveProperty('sm');
      expect(content.breakpoints).toHaveProperty('md');
      expect(content.breakpoints).toHaveProperty('lg');
      expect(content.breakpoints).toHaveProperty('xl');
    });

    it('deve gerar z-index-layers.json', () => {
      const zIndexPath = join(tokensDir, 'primitives', 'z-index-layers.json');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(zIndexPath)).toBe(true);
      
      const content = JSON.parse(readFileSync(zIndexPath, 'utf-8'));
      expect(content).toHaveProperty('zIndex');
      expect(content.zIndex).toHaveProperty('base');
      expect(content.zIndex).toHaveProperty('content');
      expect(content.zIndex).toHaveProperty('overlay');
      expect(content.zIndex).toHaveProperty('modal');
    });
  });

  describe('📦 Geração de Formatos', () => {
    it('deve gerar css-vars.css', () => {
      const cssPath = join(formatsDir, 'css-vars.css');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(cssPath)).toBe(true);
      
      const content = readFileSync(cssPath, 'utf-8');
      expect(content).toContain(':root {');
      expect(content).toContain('--color-');
      expect(content).toContain('--spacing-');
      expect(content).toContain('--font-');
    });

    it('deve gerar tailwind.config.ts', () => {
      const tailwindPath = join(formatsDir, 'tailwind.config.ts');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(tailwindPath)).toBe(true);
      
      const content = readFileSync(tailwindPath, 'utf-8');
      expect(content).toContain('export const tailwindConfig');
      expect(content).toContain('theme: {');
      expect(content).toContain('extend: {');
    });

    it('deve gerar tokens.json', () => {
      const tokensPath = join(formatsDir, 'tokens.json');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(tokensPath)).toBe(true);
      
      const content = JSON.parse(readFileSync(tokensPath, 'utf-8'));
      expect(content).toHaveProperty('$schema');
      expect(content).toHaveProperty('$name');
      expect(content).toHaveProperty('$version');
      expect(content).toHaveProperty('primitives');
      expect(content).toHaveProperty('themes');
    });
  });

  describe('📝 Geração de Changelog', () => {
    it('deve gerar docs/98- CHANGELOG.md', () => {
      const changelogPath = join(rootDir, 'docs', '98- CHANGELOG.md');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      expect(existsSync(changelogPath)).toBe(true);
      
      const content = readFileSync(changelogPath, 'utf-8');
      expect(content).toContain('# Changelog');
      expect(content).toContain('## [');
    });
  });

  describe('🔄 Integridade dos Arquivos Gerados', () => {
    it('deve manter JSON válido em todos os arquivos', () => {
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      // Verificar arquivos JSON
      const jsonFiles = [
        join(tokensDir, 'primitives', 'radius-scale.json'),
        join(tokensDir, 'primitives', 'breakpoints.json'),
        join(tokensDir, 'primitives', 'z-index-layers.json'),
        join(formatsDir, 'tokens.json')
      ];
      
      jsonFiles.forEach(filePath => {
        expect(existsSync(filePath)).toBe(true);
        expect(() => JSON.parse(readFileSync(filePath, 'utf-8'))).not.toThrow();
      });
    });

    it('deve gerar arquivos com conteúdo não vazio', () => {
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      const files = [
        join(formatsDir, 'css-vars.css'),
        join(formatsDir, 'tailwind.config.ts'),
        join(formatsDir, 'tokens.json'),
        join(rootDir, 'docs', '98- CHANGELOG.md')
      ];
      
      files.forEach(filePath => {
        expect(existsSync(filePath)).toBe(true);
        const content = readFileSync(filePath, 'utf-8');
        expect(content.length).toBeGreaterThan(100);
      });
    });
  });

  describe('⚡ Performance e Erros', () => {
    it('deve executar sem erros', () => {
      expect(() => {
        execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      }).not.toThrow();
    });

    it('deve concluir em tempo razoável (< 5 segundos)', () => {
      const start = Date.now();
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      const duration = Date.now() - start;
      
      expect(duration).toBeLessThan(5000);
    });
  });

  describe('🔍 Validação de Conteúdo', () => {
    it('deve incluir metadados corretos no tokens.json', () => {
      const tokensPath = join(formatsDir, 'tokens.json');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      const content = JSON.parse(readFileSync(tokensPath, 'utf-8'));
      expect(content.$name).toBe('@rainersoft/design-tokens');
      expect(content.$version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(content.$generated).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });

    it('deve gerar CSS com variáveis válidas', () => {
      const cssPath = join(formatsDir, 'css-vars.css');
      
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      const content = readFileSync(cssPath, 'utf-8');
      
      // Verificar padrões de variáveis CSS
      expect(content).toMatch(/--color-[a-z]+-\d+:\s*#[0-9a-fA-F]+/);
      expect(content).toMatch(/--spacing-\d+:\s*[0-9.]+(rem|px|em)/);
      expect(content).toMatch(/--font-[a-z]+:\s*[^;]+/);
    });
  });
});
