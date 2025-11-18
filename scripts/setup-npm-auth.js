/**
 * Script para configurar autenticação npm a partir de .env local
 * Usa NPM_TOKEN do .env se existir, caso contrário usa o .npmrc existente
 * 
 * @fileoverview Script de configuração de autenticação npm
 * @author Rainer Teixeira
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Lê .env manualmente (sem dependência dotenv)
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return {};
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      env[match[1].trim()] = match[2].trim();
    }
  });
  return env;
}

const env = loadEnv();
const npmrcPath = path.join(__dirname, '..', '.npmrc');
const envToken = env.NPM_TOKEN || process.env.NPM_TOKEN;

if (envToken) {
  console.log('🔐 Configurando autenticação npm a partir de .env...');
  const npmrcContent = `//registry.npmjs.org/:_authToken=${envToken}\n`;
  fs.writeFileSync(npmrcPath, npmrcContent);
  console.log('✅ .npmrc configurado com sucesso');
} else if (fs.existsSync(npmrcPath)) {
  console.log('ℹ️  Usando .npmrc existente');
} else {
  console.log('⚠️  NPM_TOKEN não encontrado no .env e .npmrc não existe');
  console.log('   Configure NPM_TOKEN no .env ou faça login manualmente: npm login');
}

