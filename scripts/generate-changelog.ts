/**
 * @fileoverview Gerador automático de changelog
 * 
 * @description
 * Gera changelog baseado em commits e tags do Git
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Commit {
  hash: string;
  type: string;
  scope?: string;
  message: string;
  breaking?: boolean;
}

const COMMIT_TYPES = {
  feat: '✨ Features',
  fix: '🐛 Bug Fixes',
  docs: '📚 Documentation',
  style: '💄 Styles',
  refactor: '♻️ Refactoring',
  perf: '⚡ Performance',
  test: '🧪 Tests',
  chore: '🔧 Chores',
  build: '📦 Build',
  ci: '🔄 CI/CD'
};

function parseCommit(commitLine: string): Commit | null {
  // Formato: hash|type(scope): message
  const match = commitLine.match(/^([a-f0-9]+)\|([a-z]+)(?:\(([^)]+)\))?(!)?:\s*(.+)$/);
  
  if (!match) return null;
  
  const [, hash, type, scope, breaking, message] = match;
  
  return {
    hash: hash.substring(0, 7),
    type,
    scope,
    message,
    breaking: !!breaking
  };
}

function getCommitsSinceTag(tag?: string): Commit[] {
  try {
    const range = tag ? `${tag}..HEAD` : 'HEAD';
    const log = execSync(
      `git log ${range} --pretty=format:"%h|%s" --no-merges`,
      { encoding: 'utf-8' }
    );
    
    return log
      .split('\n')
      .map(parseCommit)
      .filter((commit): commit is Commit => commit !== null);
  } catch (error) {
    console.warn('Erro ao obter commits:', error);
    return [];
  }
}

function getLatestTag(): string | null {
  try {
    return execSync('git describe --tags --abbrev=0', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}

function generateChangelog(commits: Commit[]): string {
  const grouped = commits.reduce((acc, commit) => {
    const type = commit.type || 'chore';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(commit);
    return acc;
  }, {} as Record<string, Commit[]>);
  
  const sections: string[] = [];
  
  // Breaking changes primeiro
  const breaking = commits.filter(c => c.breaking);
  if (breaking.length > 0) {
    sections.push('## ⚠️ Breaking Changes\n');
    breaking.forEach(commit => {
      sections.push(`- **${commit.scope || 'general'}**: ${commit.message}`);
    });
    sections.push('');
  }
  
  // Outros tipos
  for (const [type, typeCommits] of Object.entries(grouped)) {
    if (typeCommits.length === 0 || typeCommits.some(c => c.breaking)) continue;
    
    const title = COMMIT_TYPES[type as keyof typeof COMMIT_TYPES] || `📝 ${type}`;
    sections.push(`## ${title}\n`);
    
    typeCommits.forEach(commit => {
      const scope = commit.scope ? `**${commit.scope}**: ` : '';
      sections.push(`- ${scope}${commit.message}`);
    });
    
    sections.push('');
  }
  
  return sections.join('\n');
}

function main() {
  const packageJson = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
  );
  const version = packageJson.version;
  
  const latestTag = getLatestTag();
  const commits = getCommitsSinceTag(latestTag || undefined);
  
  if (commits.length === 0) {
    console.log('Nenhum commit novo desde a última tag');
    return;
  }
  
  const changelog = generateChangelog(commits);
  const fullChangelog = `# Changelog - v${version}\n\n${changelog}`;
  
  // Atualizar CHANGELOG.md
  const changelogPath = join(process.cwd(), 'CHANGELOG.md');
  let existingChangelog = '';
  
  try {
    existingChangelog = readFileSync(changelogPath, 'utf-8');
  } catch {
    // Arquivo não existe, criar novo
  }
  
  const updatedChangelog = `${fullChangelog}\n\n---\n\n${existingChangelog}`;
  writeFileSync(changelogPath, updatedChangelog, 'utf-8');
  
  console.log(`✅ Changelog gerado para v${version}`);
  console.log(`📝 ${commits.length} commits processados`);
}

if (require.main === module) {
  main();
}

export { generateChangelog, getCommitsSinceTag };

