/**
 * @fileoverview Configuração do tsup para build da biblioteca
 * 
 * @description
 * Configuração do tsup (TypeScript bundler) para compilar a biblioteca
 * em múltiplos formatos (CommonJS e ESM) com suporte a TypeScript.
 * 
 * @module tsup.config
 * @version 4.0.0
 * @author Rainer Teixeira
 * @since 1.0.0
 */

import { defineConfig } from 'tsup';

/**
 * Configuração do tsup para build da biblioteca
 * 
 * @description
 * Define as configurações de build da biblioteca, incluindo formatos
 * de saída, geração de tipos TypeScript, sourcemaps e outras opções.
 * 
 * @type {import('tsup').Options}
 * @property {string[]} entry - Arquivo de entrada principal
 * @property {string[]} format - Formatos de saída (CommonJS e ESM)
 * @property {boolean} dts - Gera arquivos de definição TypeScript (.d.ts)
 * @property {boolean} splitting - Habilita code splitting (desabilitado)
 * @property {boolean} sourcemap - Gera sourcemaps para debug
 * @property {boolean} clean - Limpa o diretório de saída antes do build
 * @property {boolean} minify - Minifica o código (desabilitado)
 * @property {string} target - Versão do ECMAScript alvo (ES2020)
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
 * # - dist/index.js (CommonJS)
 * # - dist/index.mjs (ESM)
 * # - dist/index.d.ts (TypeScript definitions)
 * ```
 */
export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'es2020',
  outDir: 'dist',
});
