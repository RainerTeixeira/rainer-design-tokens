#!/usr/bin/env node

/**
 * Script para corrigir referências de tokens nos stories
 * Converte tokens.colors para tokens.themes e tokens.typography para tokens.primitives.typography
 */

const fs = require('fs');
const path = require('path');

function fixTokensInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Corrigir tokens.colors.light -> tokens.themes.light
    content = content.replace(/tokens\.colors\.light/g, 'tokens.themes.light');
    content = content.replace(/tokens\.colors\.dark/g, 'tokens.themes.dark');
    
    // Corrigir tokens.typography -> tokens.primitives.typography
    content = content.replace(/tokens\.typography/g, 'tokens.primitives.typography');
    
    // Corrigir outros tokens que podem estar no nível errado
    content = content.replace(/tokens\.spacing\./g, 'tokens.primitives.spacing.');
    content = content.replace(/tokens\.radius\./g, 'tokens.primitives.radius.');
    content = content.replace(/tokens\.shadows\./g, 'tokens.primitives.shadows.');
    content = content.replace(/tokens\.motion\./g, 'tokens.primitives.motion.');
    content = content.replace(/tokens\.breakpoints\./g, 'tokens.primitives.breakpoints.');
    content = content.replace(/tokens\.zIndex\./g, 'tokens.primitives.zIndex.');
    content = content.replace(/tokens\.border\./g, 'tokens.primitives.border.');
    content = content.replace(/tokens\.opacity\./g, 'tokens.primitives.opacity.');
    content = content.replace(/tokens\.layout\./g, 'tokens.primitives.layout.');
    content = content.replace(/tokens\.iconSize\./g, 'tokens.primitives.iconSize.');
    content = content.replace(/tokens\.gradients\./g, 'tokens.primitives.gradients.');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findStoriesFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.' && item !== 'node_modules')) {
          traverse(fullPath);
        } else if (stat.isFile() && item.endsWith('.stories.tsx')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Ignora erros de permissão
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const storiesDir = path.join(__dirname, '..', 'stories');
const files = findStoriesFiles(storiesDir);

console.log(`🔍 Fixing tokens references in ${files.length} story files...`);

let fixedCount = 0;
for (const file of files) {
  if (fixTokensInFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✨ Fixed ${fixedCount} story files with token references`);
