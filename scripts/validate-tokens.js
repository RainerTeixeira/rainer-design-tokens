#!/usr/bin/env node

/**
 * Script de Validação - Design Tokens
 * 
 * Verifica integridade dos tokens
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateTokenFile(filePath, name) {
  if (!fs.existsSync(filePath)) {
    log(`❌ ${name} não encontrado: ${filePath}`, 'red');
    return false;
  }
  
  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    log(`✅ ${name} válido`, 'green');
    return true;
  } catch (e) {
    log(`❌ ${name} com erro de JSON: ${e.message}`, 'red');
    return false;
  }
}

function main() {
  log('🔍 Validando estrutura de tokens...', 'yellow');
  
  const tokensDir = path.join(__dirname, '..', 'tokens');
  const results = [];
  
  // Validate token files
  results.push(validateTokenFile(path.join(tokensDir, 'colors', 'light.json'), 'Light Colors'));
  results.push(validateTokenFile(path.join(tokensDir, 'colors', 'dark.json'), 'Dark Colors'));
  results.push(validateTokenFile(path.join(tokensDir, 'typography.json'), 'Typography'));
  results.push(validateTokenFile(path.join(tokensDir, 'spacing.json'), 'Spacing'));
  results.push(validateTokenFile(path.join(tokensDir, 'motion.json'), 'Motion'));
  results.push(validateTokenFile(path.join(tokensDir, 'breakpoints.json'), 'Breakpoints'));
  results.push(validateTokenFile(path.join(tokensDir, 'z-index.json'), 'Z-Index'));
  
  // Check if formats are generated
  const formatsDir = path.join(__dirname, '..', 'formats');
  const hasCssVars = fs.existsSync(path.join(formatsDir, 'css-vars.css'));
  const hasTokensJson = fs.existsSync(path.join(formatsDir, 'tokens.json'));
  
  if (hasCssVars && hasTokensJson) {
    log('✅ Formatos gerados corretamente', 'green');
    results.push(true);
  } else {
    log('⚠️  Formatos não gerados. Execute: pnpm run build', 'yellow');
  }
  
  const allValid = results.every(r => r);
  
  if (allValid) {
    log('\n🎉 Todos os tokens estão válidos!', 'green');
    process.exit(0);
  } else {
    log('\n❌ Validação falhou!', 'red');
    process.exit(1);
  }
}

main();
