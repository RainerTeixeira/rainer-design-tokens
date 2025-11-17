/**
 * Script para preparar publicação no GitHub/npm
 * 
 * Este script garante que todos os arquivos necessários estejam prontos
 * para publicação: build, formatos gerados, etc.
 * 
 * @fileoverview Script de preparação para publicação
 * @author Rainer Teixeira
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando @rainer/design-tokens para publicação...\n');

// 1. Build dos formatos
console.log('📦 Gerando formatos (CSS, Tailwind, JSON)...');
try {
  execSync('pnpm run build:formats', { stdio: 'inherit' });
  console.log('✅ Formatos gerados com sucesso\n');
} catch (error) {
  console.error('❌ Erro ao gerar formatos:', error.message);
  process.exit(1);
}

// 2. Build do TypeScript
console.log('🔨 Compilando TypeScript...');
try {
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('✅ TypeScript compilado com sucesso\n');
} catch (error) {
  console.error('❌ Erro ao compilar TypeScript:', error.message);
  process.exit(1);
}

// 3. Type check
console.log('🔍 Verificando tipos...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passou\n');
} catch (error) {
  console.error('❌ Erro no type check:', error.message);
  process.exit(1);
}

// 4. Verificar se dist/ existe
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ Diretório dist/ não encontrado após build');
  process.exit(1);
}

// 5. Verificar se formats/ existe
const formatsPath = path.join(__dirname, '..', 'formats');
if (!fs.existsSync(formatsPath)) {
  console.error('❌ Diretório formats/ não encontrado após build');
  process.exit(1);
}

console.log('✅ Tudo pronto para publicação!');
console.log('\n📝 Próximos passos:');
console.log('   1. git add .');
console.log('   2. git commit -m "chore: prepare for release"');
console.log('   3. git push origin main');
console.log('   4. Criar release no GitHub');
console.log('   5. npm publish (se quiser publicar no npm)');

