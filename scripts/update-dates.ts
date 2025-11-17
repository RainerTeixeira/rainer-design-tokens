/**
 * @fileoverview Script para atualizar datas nos documentos
 * 
 * @description
 * Este script atualiza automaticamente as datas de última atualização
 * em todos os documentos da biblioteca.
 * 
 * @module scripts/update-dates
 * @version 1.0.0
 * @author Rainer Teixeira
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Obtém a data atual formatada
 */
function getCurrentDate(): { iso: string; ptBR: string; monthYear: string } {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  return {
    iso: `${year}-${month}-${day}`,
    ptBR: `${day} de ${meses[now.getMonth()]} de ${year}`,
    monthYear: `${meses[now.getMonth()]} de ${year}`,
  };
}

/**
 * Atualiza datas em um arquivo
 */
function updateDatesInFile(filePath: string): boolean {
  if (!existsSync(filePath)) {
    console.warn(`⚠️  Arquivo não encontrado: ${filePath}`);
    return false;
  }

  const dates = getCurrentDate();
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // Substituir datas antigas específicas
  content = content.replace(/2024-11-14/g, dates.iso);
  content = content.replace(/2024-11-15/g, dates.iso);
  content = content.replace(/14 de Novembro de 2024/g, dates.ptBR);
  content = content.replace(/15 de Novembro de 2024/g, dates.ptBR);
  content = content.replace(/Novembro 2024/g, dates.monthYear);
  content = content.replace(/Atualizado automaticamente/g, dates.ptBR);

  // Atualizar padrão: Versão Atual: 4.0.0 (YYYY-MM-DD)
  content = content.replace(
    /Versão Atual:\s*4\.0\.0\s*\(\d{4}-\d{2}-\d{2}\)/g,
    `Versão Atual: 4.0.0 (${dates.iso})`
  );

  // Atualizar padrão: **Última Atualização:** ou Última Atualização:
  content = content.replace(
    /(\*\*Última Atualização:\*\*|Última Atualização:)\s*[^\n]*/g,
    `$1 ${dates.ptBR}`
  );

  // Atualizar padrão: **Data**: (mas não se tiver outras informações na linha)
  content = content.replace(
    /(\*\*Data\*\*:|Data:)\s*([^\n]*)/g,
    (match, prefix, rest) => {
      // Se a linha contém "Versão" ou "revisão", manter como está
      if (rest.includes('Versão') || rest.includes('revisão')) {
        return match;
      }
      // Caso contrário, atualizar
      return `${prefix} ${dates.monthYear}`;
    }
  );

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Atualizado: ${filePath}`);
    return true;
  }
  
  return false;
}

/**
 * Função principal
 */
function main() {
  try {
    console.log('📅 Atualizando datas nos documentos...\n');

    const dates = getCurrentDate();
    console.log(`📆 Data atual: ${dates.ptBR} (${dates.iso})\n`);

    const docsDir = join(__dirname, '..', 'docs');
    const files = [
      'roadmap.md',
      'README.md',
      'guidelines.md',
      'STRUCTURE.md',
      'BUILD_SYSTEM.md',
      'STORYBOOK.md',
      'STORYBOOK_STRUCTURE.md',
      'STRUCTURE_SUMMARY.md',
    ];

    let updatedCount = 0;
    for (const file of files) {
      const filePath = join(docsDir, file);
      if (updateDatesInFile(filePath)) {
        updatedCount++;
      }
    }

    // Atualizar README principal
    const readmePath = join(__dirname, '..', 'README.md');
    if (updateDatesInFile(readmePath)) {
      updatedCount++;
    }

    console.log(`\n✅ Processo concluído! ${updatedCount} arquivo(s) atualizado(s).`);
  } catch (error) {
    console.error('❌ Erro ao atualizar datas:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { getCurrentDate, updateDatesInFile };
