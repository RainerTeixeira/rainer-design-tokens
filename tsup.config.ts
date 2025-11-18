/**
 * @fileoverview Configuração do tsup para build da biblioteca
 *
 * @description
 * Build moderno usando apenas ES Modules (ESM) e TypeScript.
 * Gera definições de tipos (.d.ts), sourcemaps e saída otimizada.
 * Nenhum formato legado (CommonJS) é incluído.
 *
 * @module tsup.config
 * @version 5.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

import { defineConfig } from 'tsup';

/**
 * Configuração do tsup para build da biblioteca
 * 
 * @description
 * Define as configurações de build moderno da biblioteca, usando apenas
 * ES Modules (ESM) com suporte completo a TypeScript, sourcemaps e minificação.
 * 
 * @type {import('tsup').Options}
 * @property {string[]} entry - Arquivo de entrada principal
 * @property {string[]} format - Formato de saída (apenas ESM)
 * @property {boolean} dts - Gera arquivos de definição TypeScript (.d.ts)
 * @property {boolean} sourcemap - Gera sourcemaps para debug
 * @property {boolean} clean - Limpa o diretório de saída antes do build
 * @property {boolean} minify - Minifica o código para produção
 * @property {string} target - Versão do ECMAScript alvo (ES2022)
 * @property {string} outDir - Diretório de saída dos arquivos compilados
 * 
 * @constant
 * 
 * @example
 * ```bash
 * # Build da biblioteca
 * pnpm run build
 * 
 * # Isso gerará arquivos em:
 * # - dist/index.mjs (ESM)
 * # - dist/index.d.ts (TypeScript definitions)
 * # - dist/index.mjs.map (Source maps)
 * ```
 */
export default defineConfig({
  entry: ['index.ts'],          // Arquivo de entrada principal
  format: ['esm'],              // Apenas ESM (moderno)
  dts: true,                    // Gera arquivos de definição TypeScript
  sourcemap: true,              // Gera sourcemaps para debug
  clean: true,                  // Limpa dist antes do build
  minify: true,                 // Minifica para produção
  target: 'es2022',             // ECMAScript alvo mais atual
  outDir: 'dist',               // Diretório de saída
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.js' };
  },
});
