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

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = join(__dirname, '..', '..'); // aponta para a raiz do repositório (tests/.. -> repo root)

describe('build-tokens.ts', () => {
  const tokensDir = join(rootDir, 'tokens');
  const formatsDir = join(rootDir, 'formats');

  beforeAll(() => {
    // Garantir que o ambiente está limpo antes dos testes
    console.log('🧪 Preparando ambiente para testes de build-tokens.ts');
  });

  describe('🔧 Geração de Tokens Calculados', () => {
    it.skip('deve gerar radius-scale.json', () => {
      const radiusPath = join(tokensDir, 'primitives', 'radius-scale.json');

      // Usar caminho relativo ao invés de absoluto
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(radiusPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${radiusPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${radiusPath}`);
      }

      const content = JSON.parse(readFileSync(radiusPath, 'utf-8'));
      expect(content).toHaveProperty('radius');
      expect(content.radius).toHaveProperty('xs');
      expect(content.radius).toHaveProperty('sm');
      expect(content.radius).toHaveProperty('md');
      expect(content.radius).toHaveProperty('lg');
    });

    it.skip('deve gerar breakpoints.json', () => {
      const breakpointsPath = join(tokensDir, 'primitives', 'breakpoints.json');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(breakpointsPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${breakpointsPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${breakpointsPath}`);
      }

      const content = JSON.parse(readFileSync(breakpointsPath, 'utf-8'));
      expect(content).toHaveProperty('breakpoints');
      expect(content.breakpoints).toHaveProperty('sm');
      expect(content.breakpoints).toHaveProperty('md');
      expect(content.breakpoints).toHaveProperty('lg');
      expect(content.breakpoints).toHaveProperty('xl');
    });

    it.skip('deve gerar z-index-layers.json', () => {
      const zIndexPath = join(tokensDir, 'primitives', 'z-index-layers.json');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(zIndexPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${zIndexPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${zIndexPath}`);
      }

      const content = JSON.parse(readFileSync(zIndexPath, 'utf-8'));
      expect(content).toHaveProperty('zIndex');
      expect(content.zIndex).toHaveProperty('base');
      expect(content.zIndex).toHaveProperty('content');
      expect(content.zIndex).toHaveProperty('overlay');
      expect(content.zIndex).toHaveProperty('modal');
    });
  });

  describe('📦 Geração de Formatos', () => {
    it.skip('deve gerar css-vars.css', () => {
      const cssPath = join(formatsDir, 'css-vars.css');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(cssPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${cssPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${cssPath}`);
      }

      const content = readFileSync(cssPath, 'utf-8');
      expect(content).toContain(':root {');
      expect(content).toContain('--color-');
      expect(content).toContain('--spacing-');
      expect(content).toContain('--font-');
    });

    it.skip('deve gerar tailwind.config.ts', () => {
      const tailwindPath = join(formatsDir, 'tailwind.config.ts');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(tailwindPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${tailwindPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${tailwindPath}`);
      }

      const content = readFileSync(tailwindPath, 'utf-8');
      expect(content).toContain('export const tailwindConfig');
      expect(content).toContain('theme: {');
      expect(content).toContain('extend: {');
    });

    it.skip('deve gerar tokens.json', () => {
      const tokensPath = join(formatsDir, 'tokens.json');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(tokensPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${tokensPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${tokensPath}`);
      }

      const content = JSON.parse(readFileSync(tokensPath, 'utf-8'));
      expect(content).toHaveProperty('$schema');
      expect(content).toHaveProperty('$name');
      expect(content).toHaveProperty('$version');
      expect(content).toHaveProperty('primitives');
      expect(content).toHaveProperty('themes');
    });
  });

  describe('📝 Geração de Changelog', () => {
    it.skip('deve gerar CHANGELOG.md', () => {
      const changelogPath = join(rootDir, 'CHANGELOG.md');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      try {
        const content = readFileSync(changelogPath, 'utf-8');
        expect(content).toBeDefined();
      } catch (error) {
        console.error(`Erro ao ler arquivo ${changelogPath}:`, error);
        throw new Error(`Arquivo não encontrado: ${changelogPath}`);
      }

      const content = readFileSync(changelogPath, 'utf-8');
      expect(content).toContain('# Changelog');
      expect(content).toContain('## [');
    });
  });

  describe('🔄 Integridade dos Arquivos Gerados', () => {
    it.skip('deve manter JSON válido em todos os arquivos', () => {
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      // Verificar arquivos JSON
      const jsonFiles = [
        join(tokensDir, 'primitives', 'radius-scale.json'),
        join(tokensDir, 'primitives', 'breakpoints.json'),
        join(tokensDir, 'primitives', 'z-index-layers.json'),
        join(formatsDir, 'tokens.json'),
      ];

      const validateJsonFile = (filePath: string) => {
        try {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toBeDefined();
          expect(() => JSON.parse(content)).not.toThrow();
        } catch (error) {
          console.error(`Erro ao validar arquivo JSON ${filePath}:`, error);
          throw new Error(`Arquivo não encontrado: ${filePath}`);
        }
      };

      jsonFiles.forEach(validateJsonFile);
    });

    it.skip('deve gerar arquivos com conteúdo não vazio', () => {
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const files = [
        join(formatsDir, 'css-vars.css'),
        join(formatsDir, 'tailwind.config.ts'),
        join(formatsDir, 'tokens.json'),
        join(rootDir, 'docs', '98- CHANGELOG.md'),
      ];

      const validateFileContent = (filePath: string) => {
        try {
          const content = readFileSync(filePath, 'utf-8');
          expect(content).toBeDefined();
          expect(content.length).toBeGreaterThan(100);
        } catch (error) {
          console.error(`Erro ao validar conteúdo do arquivo ${filePath}:`, error);
          throw new Error(`Arquivo não encontrado: ${filePath}`);
        }
      };

      files.forEach(validateFileContent);
    });
  });

  describe('⚡ Performance e Erros', () => {
    it('deve executar sem erros', () => {
      expect(() => {
        execSync('npx tsx scripts/build-tokens.ts', {
          stdio: 'pipe',
          cwd: rootDir,
        });
      }).not.toThrow();
    });

    it('deve concluir em tempo razoável (< 5 segundos)', () => {
      const start = Date.now();
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(5000);
    });
  });

  describe('🔍 Validação de Conteúdo', () => {
    it.skip('deve incluir metadados corretos no tokens.json', () => {
      const tokensPath = join(formatsDir, 'tokens.json');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const content = JSON.parse(readFileSync(tokensPath, 'utf-8'));
      expect(content.$name).toBe('@rainersoft/design-tokens');
      expect(content.$version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(content.$generated).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });

    it.skip('deve gerar CSS com variáveis válidas', () => {
      const cssPath = join(formatsDir, 'css-vars.css');

      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const content = readFileSync(cssPath, 'utf-8');

      // Verificar padrões de variáveis CSS
      expect(content).toMatch(/--color-[a-z]+-\d+:\s*#[0-9a-fA-F]+/);
      expect(content).toMatch(/--spacing-\d+:\s*[0-9.]+(rem|px|em)/);
      expect(content).toMatch(/--font-[a-z]+:\s*[^;]+/);
    });
  });
});
