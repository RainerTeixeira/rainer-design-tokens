/**
 * @fileoverview Testes para sync-docs.ts
 *
 * @description
 * Testes automatizados para o script de sincronização de documentação
 * Verifica atualização de versão, datas e rodapé em documentos
 *
 * @module tests/scripts/sync-docs.test.ts
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = join(__dirname, '..', '..');

describe('sync-docs.ts', () => {
  const docsDir = join(rootDir, 'docs');
  const readmePath = join(rootDir, 'README.md');

  beforeAll(() => {
    console.log('🧪 Preparando ambiente para testes de sync-docs.ts');
  });

  describe('📦 Informações do Pacote', () => {
    it('deve ler informações do package.json', () => {
      const result = execSync('npx tsx scripts/sync-docs.ts --dry-run', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      expect(result).toContain('@rainersoft/design-tokens');
      expect(result).toMatch(/\d+\.\d+\.\d+/); // versão
      expect(result).toMatch(/\d{1,2} de [A-Za-zçÇ]+ de \d{4}/); // data
    });

    it.skip('deve obter data atual em múltiplos formatos', () => {
      const result = execSync('npx tsx scripts/sync-docs.ts --dry-run', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      expect(result).toMatch(/\d{4}-\d{2}-\d{2}/); // ISO
      expect(result).toMatch(/\d{1,2} de [A-Za-zçÇ]+ de \d{4}/); // PT-BR
      expect(result).toMatch(/[A-Za-zçÇ]+ de \d{4}/); // Mês/Ano
    });
  });

  describe('📝 Atualização de Versão', () => {
    it.skip('deve atualizar versão no README.md', () => {
      // Garantir que README existe
      if (!existsSync(readmePath)) {
        writeFileSync(readmePath, '# Test README\n\nVersion: 1.0.0\n');
      }

      const result = execSync('npx tsx scripts/sync-docs.ts --version-only', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      expect(result).toMatch(
        /(Versão atualizada no README\.md|README\.md já está atualizado)/
      );
    });

    it.skip('deve atualizar badges de versão', () => {
      // Criar README com badge antigo
      const testContent = `
# Test README

![Version](https://img.shields.io/badge/version-1.0.0-blue)

## Installation
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts --version-only', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toMatch(/version-\d+\.\d+\.\d+/);
    });

    it.skip('deve atualizar links de versão', () => {
      const testContent = `
# Test README

See [version-1.0.0](link) for details.
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts --version-only', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toMatch(/version-\d+\.\d+\.\d+/);
    });
  });

  describe('📅 Atualização de Datas', () => {
    it.skip('deve atualizar datas no README.md', () => {
      const testContent = `
# Test README

**Última Atualização:** 01 de Janeiro de 2020

## Content
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts --dates-only', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toMatch(
        /\*\*Última Atualização:\*\* \d{1,2} de [A-Za-zçÇ]+ de \d{4}/
      );
    });

    it.skip('deve atualizar múltiplos formatos de data', () => {
      const testContent = `
# Test README

Updated: 2020-01-01
Last modified: 01 de Janeiro de 2020
Month: Janeiro 2020

## Content
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts --dates-only', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toMatch(/\d{4}-\d{2}-\d{2}/); // ISO
      expect(updatedContent).toMatch(/\d{1,2} de [A-Za-zçÇ]+ de \d{4}/); // PT-BR
      expect(updatedContent).toMatch(/[A-Za-zçÇ]+ de \d{4}/); // Mês/Ano
    });

    it.skip('deve preservar datas com contexto de versão', () => {
      const testContent = `
# Test README

**Data:** Versão 2.0.0 (2024-01-01)

## Content
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts --dates-only', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      // Não deve atualizar se tiver "Versão" na mesma linha
      expect(updatedContent).toMatch(
        /\*\*Data:\*\* Versão \d+\.\d+\.\d+ \(\d{4}-\d{2}-\d{2}\)/
      );
    });
  });

  describe('📋 Atualização de Rodapé', () => {
    it.skip('deve gerar rodapé padrão', () => {
      const testContent = `
# Test README

## Content

Some content here.
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts', { stdio: 'pipe', cwd: rootDir });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toContain('---');
      expect(updatedContent).toContain('**Versão:**');
      expect(updatedContent).toContain('**Última Atualização:**');
      expect(updatedContent).toContain('**Autor:**');
      expect(updatedContent).toContain('**Licença:**');
    });

    it.skip('deve substituir rodapé antigo', () => {
      const testContent = `
# Test README

## Content

Content here.

---

**Versão:** 1.0.0  
**Última Atualização:** 01 de Janeiro de 2020
**Autor:** Old Author  
**Licença:** OLD
`;
      writeFileSync(readmePath, testContent);

      execSync('npx tsx scripts/sync-docs.ts', { stdio: 'pipe', cwd: rootDir });

      const updatedContent = readFileSync(readmePath, 'utf-8');
      expect(updatedContent).toMatch(/\*\*Versão:\*\* \d+\.\d+\.\d+/);
      expect(updatedContent).toMatch(/\*\*Autor:\*\* Rainer Teixeira/);
      expect(updatedContent).toMatch(/\*\*Licença:\*\* MIT/);
    });
  });

  describe('📁 Processamento de Documentos', () => {
    it('deve encontrar arquivos Markdown em docs/', () => {
      execSync('npx tsx scripts/sync-docs.ts --docs-only', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      // Se não lançou erro, está funcionando
      expect(true).toBe(true);
    });

    it.skip('deve atualizar arquivos em docs/', () => {
      // Criar arquivo de teste
      const testDocPath = join(docsDir, 'test-sync.md');
      const testContent = `
# Test Document

**Versão:** 1.0.0  
**Última Atualização:** 01 de Janeiro de 2020

## Content
`;

      // Garantir que docs/ existe
      if (!existsSync(docsDir)) {
        const { mkdirSync } = require('node:fs');
        mkdirSync(docsDir, { recursive: true });
      }

      writeFileSync(testDocPath, testContent);

      try {
        const result = execSync('npx tsx scripts/sync-docs.ts --docs-only', {
          encoding: 'utf-8',
          stdio: 'pipe',
          cwd: rootDir,
        });

        expect(result).toMatch(
          /(Atualizado: test-sync\.md|Nenhum arquivo precisou de atualização)/
        );

        const updatedContent = readFileSync(testDocPath, 'utf-8');
        expect(updatedContent).toMatch(/\*\*Versão:\*\* \d+\.\d+\.\d+/);
      } finally {
        // Limpar
        if (existsSync(testDocPath)) {
          unlinkSync(testDocPath);
        }
      }
    });

    it('deve ignorar diretórios que começam com .', () => {
      // Criar diretório oculto com arquivo
      const hiddenDir = join(docsDir, '.hidden');
      const hiddenFile = join(hiddenDir, 'hidden.md');

      if (!existsSync(hiddenDir)) {
        const { mkdirSync } = require('node:fs');
        mkdirSync(hiddenDir, { recursive: true });
      }
      writeFileSync(hiddenFile, '# Hidden file');

      try {
        const result = execSync('npx tsx scripts/sync-docs.ts --docs-only', {
          encoding: 'utf-8',
          stdio: 'pipe',
          cwd: rootDir,
        });

        // Não deve mencionar arquivos ocultos
        expect(result).not.toContain('hidden.md');
      } finally {
        // Limpar
        if (existsSync(hiddenFile)) {
          unlinkSync(hiddenFile);
        }
        if (existsSync(hiddenDir)) {
          const { rmSync } = require('node:fs');
          rmSync(hiddenDir, { recursive: true, force: true });
        }
      }
    });
  });

  describe('⚡ Performance e Opções', () => {
    it('deve suportar modo dry-run', () => {
      const result = execSync('npx tsx scripts/sync-docs.ts --dry-run', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      expect(result).toContain('MODO DRY RUN');
      expect(result).toContain('Nenhuma alteração será salva');
    });

    it('deve executar rapidamente (< 3 segundos)', () => {
      const start = Date.now();
      execSync('npx tsx scripts/sync-docs.ts --dry-run', {
        stdio: 'pipe',
        cwd: rootDir,
      });
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(3000);
    });

    it('deve mostrar help', () => {
      const result = execSync('npx tsx scripts/sync-docs.ts --help', {
        encoding: 'utf-8',
        stdio: 'pipe',
        cwd: rootDir,
      });

      expect(result).toContain('Uso: npx tsx scripts/sync-docs.ts [opções]');
      expect(result).toContain('--version-only');
      expect(result).toContain('--dates-only');
      expect(result).toContain('--dry-run');
    });
  });

  describe('🔍 Integração com Outros Scripts', () => {
    it('deve ser compatível com build-tokens.ts', () => {
      // Executar build primeiro
      execSync('npx tsx scripts/build-tokens.ts', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      // Depois sync (não deve quebrar nada)
      expect(() => {
        execSync('npx tsx scripts/sync-docs.ts --dry-run', {
          stdio: 'pipe',
          cwd: rootDir,
        });
      }).not.toThrow();
    });

    it('deve ser compatível com release-package.ts', () => {
      // Executar validação primeiro
      execSync('npx tsx scripts/release-package.ts --validate-only', {
        stdio: 'pipe',
        cwd: rootDir,
      });

      // Depois sync (não deve quebrar nada)
      expect(() => {
        execSync('npx tsx scripts/sync-docs.ts --dry-run', {
          stdio: 'pipe',
          cwd: rootDir,
        });
      }).not.toThrow();
    });
  });
});
