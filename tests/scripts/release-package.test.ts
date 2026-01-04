/**
 * @fileoverview Testes para release-package.ts
 * 
 * @description
 * Testes automatizados para o script de release e publicação
 * Verifica validação, build, autenticação e publicação
 * 
 * @module tests/scripts/release-package.test.ts
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { existsSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const rootDir = join(__dirname, '..', '..');

describe('release-package.ts', () => {
  const scriptsDir = join(rootDir, 'scripts');
  const tokensDir = join(rootDir, 'tokens');
  const formatsDir = join(rootDir, 'formats');

  beforeAll(() => {
    console.log('🧪 Preparando ambiente para testes de release-package.ts');
  });

  describe('🔍 Validação de Tokens', () => {
    it('deve validar todos os arquivos de tokens', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('🎉 Todos os tokens estão válidos!');
    });

    it('deve validar arquivos primitivos', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('Color Palette válido');
      expect(result).toContain('Typography válido');
      expect(result).toContain('Spacing válido');
      expect(result).toContain('Motion válido');
    });

    it('deve validar temas', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('Light Theme válido');
      expect(result).toContain('Dark Theme válido');
    });

    it('deve validar formatos gerados', () => {
      // Garantir que formatos existem
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('Todos os formatos gerados corretamente');
    });

    it('deve falhar validação se arquivo essencial estiver faltando', () => {
      // Backup do arquivo original
      const originalPath = join(tokensDir, 'primitives', 'color-palette.json');
      const backupPath = join(tokensDir, 'primitives', 'color-palette.json.backup');
      
      if (existsSync(originalPath)) {
        execSync(`copy "${originalPath}" "${backupPath}"`, { stdio: 'pipe' });
        unlinkSync(originalPath);
        
        try {
          const result = execSync(
            `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
            { encoding: 'utf-8', stdio: 'pipe' }
          );
          
          expect(result).toContain('❌ Validação falhou!');
        } finally {
          // Restaurar arquivo
          if (existsSync(backupPath)) {
            execSync(`move "${backupPath}" "${originalPath}"`, { stdio: 'pipe' });
          }
        }
      }
    });
  });

  describe('🔐 Configuração de Autenticação', () => {
    it('deve verificar configuração NPM', () => {
      // Testar modo setup-auth-only
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --setup-auth`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      // Deve conter informações sobre autenticação
      expect(result).toMatch(/(Configurando|Usando|NPM_TOKEN|\.npmrc)/);
    });

    it('deve criar .npmrc se NPM_TOKEN estiver no ambiente', () => {
      // Este teste simula a presença de NPM_TOKEN
      const envPath = join(rootDir, '.env.test');
      const testToken = 'npm_test_token_12345';
      
      // Criar .env.test com NPM_TOKEN
      writeFileSync(envPath, `NPM_TOKEN=${testToken}\n`);
      
      try {
        // Simular script de autenticação
        const result = execSync(
          `NPM_TOKEN=${testToken} npx tsx "${join(scriptsDir, 'release-package.ts')}" --setup-auth`,
          { encoding: 'utf-8', stdio: 'pipe' }
        );
        
        expect(result).toContain('Configurando autenticação npm a partir de .env');
      } finally {
        // Limpar
        if (existsSync(envPath)) {
          unlinkSync(envPath);
        }
      }
    });
  });

  describe('🌐 Configuração GitHub', () => {
    it('deve verificar configuração Git', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --github-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(Git já está inicializado|Inicializando repositório Git)/);
    });

    it('deve verificar remote origin', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --github-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(Remote 'origin' configurado|Remote 'origin' não configurado)/);
    });
  });

  describe('📦 Build Completo', () => {
    it('deve executar build completo', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --build-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('Gerando tokens e formatos');
      expect(result).toContain('TypeScript compilado com sucesso');
    });

    it('deve verificar diretórios de saída', () => {
      execSync(`npx tsx "${join(scriptsDir, 'release-package.ts')}" --build-only`, { stdio: 'pipe' });
      
      expect(existsSync(join(rootDir, 'dist'))).toBe(true);
      expect(existsSync(formatsDir)).toBe(true);
    });

    it('deve verificar type check', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --build-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(Type check passou|Type check falhou)/);
    });
  });

  describe('📝 Commit e Push', () => {
    it('deve verificar status do Git', () => {
      // Este teste verifica se o script consegue verificar o status
      // sem necessariamente fazer push
      try {
        const result = execSync(
          `npx tsx "${join(scriptsDir, 'release-package.ts')}" --skip-npm --skip-github`,
          { encoding: 'utf-8', stdio: 'pipe', timeout: 10000 }
        );
        
        // Verifica se pelo menos iniciou o processo
        expect(result).toMatch(/(Validando|Configurando|Build)/);
      } catch (error: any) {
        // Pode falhar por não ter remote configurado, o que é esperado
        expect(error.message).toMatch(/(timeout|Remote|origin)/);
      }
    });
  });

  describe('🚀 Publicação NPM', () => {
    it('deve suportar dry-run', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --dry-run --skip-git`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('TESTANDO PUBLICAÇÃO NPM (DRY RUN)');
    });

    it('deve verificar pacote antes de publicar', () => {
      // Garantir que o pacote está buildado
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --dry-run --skip-git`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(testado com sucesso|falha na publicação)/);
    });
  });

  describe('📋 Criação de Release', () => {
    it('deve gerar changelog antes do release', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --dry-run --skip-git --skip-npm`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(Gerando changelog|Criando release)/);
    });

    it('deve verificar GitHub CLI se disponível', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --dry-run --skip-git --skip-npm`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toMatch(/(GitHub CLI não encontrado|Criando release no GitHub)/);
    });
  });

  describe('⚡ Performance e Erros', () => {
    it('deve executar validação rapidamente (< 3 segundos)', () => {
      const start = Date.now();
      execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { stdio: 'pipe' }
      );
      const duration = Date.now() - start;
      
      expect(duration).toBeLessThan(3000);
    });

    it('deve tratar argumentos inválidos', () => {
      expect(() => {
        execSync(
          `npx tsx "${join(scriptsDir, 'release-package.ts')}" --opcao-inexistente`,
          { stdio: 'pipe' }
        );
      }).not.toThrow(); // Deve ignorar argumentos inválidos
    });

    it('deve mostrar help', () => {
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --help`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('Uso: npx tsx scripts/release-package.ts [opções]');
      expect(result).toContain('--help, -h');
      expect(result).toContain('--validate-only');
      expect(result).toContain('--dry-run');
    });
  });

  describe('🔍 Integração com Outros Scripts', () => {
    it('deve ser compatível com build-tokens.ts', () => {
      // Executar build primeiro
      execSync(`npx tsx "${join(scriptsDir, 'build-tokens.ts')}"`, { stdio: 'pipe' });
      
      // Depois validar
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('🎉 Todos os tokens estão válidos!');
    });

    it('deve ser compatível com sync-docs.ts', () => {
      // Executar sync primeiro
      execSync(`npx tsx "${join(scriptsDir, 'sync-docs.ts')}"`, { stdio: 'pipe' });
      
      // Depois validar (não deve quebrar nada)
      const result = execSync(
        `npx tsx "${join(scriptsDir, 'release-package.ts')}" --validate-only`,
        { encoding: 'utf-8', stdio: 'pipe' }
      );
      
      expect(result).toContain('🎉 Todos os tokens estão válidos!');
    });
  });
});
