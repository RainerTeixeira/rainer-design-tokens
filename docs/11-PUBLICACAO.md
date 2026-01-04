# 📦 Guia de Publicação

## 📦 Publicação no GitHub

### 1. Criar repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `rainer-design-tokens` (sem o @ - GitHub não permite @ no nome)
3. Descrição: "Enterprise-grade design tokens library for modern design systems"
4. Visibilidade: **Public** (para poder publicar no npm)
5. Não inicialize com README, .gitignore ou license (já temos)

### 2. Configurar repositório local

```bash
cd C:\Desenvolvimento\rainer-design-tokens

# Adicionar remote
git remote add origin https://github.com/RainerTeixeira/rainer-design-tokens.git

# Ou se preferir SSH
git remote add origin git@github.com:RainerTeixeira/rainer-design-tokens.git
```

### 3. Fazer commit e push inicial

```bash
# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: initial release - design tokens library v2.0.0"

# Push para GitHub
git push -u origin main
```

## 📤 Publicação no npm

### Preparação

1. **Criar conta no npm** (se ainda não tiver):
   - Acesse https://www.npmjs.com/signup
   - Verifique o email

2. **Login no npm**:
   ```bash
   npm login
   ```

3. **Verificar nome do pacote**:
    - O nome `@rainersoft/design-tokens` está correto (com escopo @rainersoft)

### Publicação

```bash
# Build final
pnpm run build

# Verificar o que será publicado
pnpm pack --dry-run

# Publicar (com escopo, requer --access public)
pnpm publish --access public
```

**Nota**: O pacote `@rainersoft/design-tokens` é com escopo e requer `--access public` para publicação pública no npm.

### Atualizações futuras

1. Atualizar versão no `package.json`
2. Fazer commit e push
3. Criar release no GitHub
4. O GitHub Actions publicará automaticamente no npm

## 🔄 Atualizar Frontend para Usar do GitHub

Após publicar no GitHub, atualize o `package.json` do frontend:

```json
{
  "dependencies": {
    "@rainersoft/design-tokens": "github:RainerTeixeira/rainer-design-tokens"
  }
}
```

Depois execute:

```bash
cd C:\Desenvolvimento\rainer-portfolio-frontend
pnpm install
```

## 🌐 Uso na Vercel

Após publicar no GitHub, você pode usar na Vercel de duas formas:

### Opção 1: Via GitHub (Recomendado para Vercel)

```json
{
  "dependencies": {
    "@rainersoft/design-tokens": "github:RainerTeixeira/rainer-design-tokens"
  }
}
```

### Opção 2: Via npm (Após publicação no npm)

```json
{
  "dependencies": {
    "@rainersoft/design-tokens": "^2.0.0"
  }
}
```

## 📝 Checklist antes de publicar

- [ ] Versão atualizada no `package.json`
- [ ] README.md completo e atualizado
- [ ] LICENSE presente
- [ ] Build funcionando (`pnpm run build`)
- [ ] Testes passando (`pnpm test`)
- [ ] Type check passando (`pnpm run type-check`)
- [ ] `.npmignore` configurado corretamente
- [ ] `files` no `package.json` inclui todos os arquivos necessários
- [ ] Repository URL correto no `package.json`
- [ ] **`dist/` commitado e atualizado** (veja seção abaixo)

## 📦 Por que `dist/` está commitado?

### ❓ Pergunta Comum

> **"Por que o diretório `dist/` (arquivos compilados) está commitado no Git? Não deveria estar no `.gitignore`?"**

### ✅ Resposta: `dist/` DEVE estar commitado

O diretório `dist/` **NÃO está no `.gitignore`** e **deve ser commitado** pelos seguintes motivos:

#### 1. **Instalação via npm/npm packages**

Quando alguém instala o pacote via `pnpm add @rainersoft/design-tokens`, o npm não executa build - ele apenas baixa e instala os arquivos publicados. Os arquivos em `dist/` são os que serão instalados.

**Sem `dist/` commitado:**
```bash
pnpm add @rainersoft/design-tokens
# ❌ Erro: Arquivos não encontrados (dist/index.js, dist/index.d.ts)
```

**Com `dist/` commitado:**
```bash
pnpm add @rainersoft/design-tokens
# ✅ Funciona: Arquivos compilados prontos para uso
```

#### 2. **Instalação via GitHub Packages/GitHub**

Quando alguém instala via `pnpm add github:RainerTeixeira/rainer-design-tokens`, o pnpm/clone pode não ter todas as dependências de build instaladas ou pode não executar o build automaticamente.

**Sem `dist/` commitado:**
- Instalação pode falhar se dependências de build não estiverem disponíveis
- TypeScript definitions não estariam disponíveis
- Consumidores precisariam executar build manualmente

**Com `dist/` commitado:**
- Instalação funciona imediatamente
- TypeScript definitions disponíveis automaticamente
- Sem necessidade de executar build no projeto consumidor

#### 3. **TypeScript Definitions (.d.ts)**

Os arquivos `.d.ts` em `dist/` são essenciais para:
- Autocomplete em IDEs
- Type checking em projetos TypeScript
- Importação correta dos tipos

**Sem `dist/` commitado:**
```typescript
import { tokens } from '@rainersoft/design-tokens';
// ❌ Erro: Cannot find module '@rainersoft/design-tokens' or its type definitions
```

**Com `dist/` commitado:**
```typescript
import { tokens } from '@rainersoft/design-tokens';
// ✅ Funciona: Tipos disponíveis automaticamente
```

#### 4. **Package.json `files` field**

O `package.json` especifica `dist` no campo `files`:

```json
{
  "files": [
    "dist",
    "formats",
    "tokens",
    "themes",
    "README.md",
    "LICENSE"
  ]
}
```

Isso significa que o npm **só publicará** os arquivos listados. Se `dist/` não estiver commitado, não estará disponível para publicação.

### ⚠️ Importante: Sempre Build antes de Commit

**SEMPRE execute o build antes de commitar:**

```bash
# 1. Fazer alterações no código
# 2. Executar build
pnpm run build

# 3. Verificar se dist/ foi atualizado
git status

# 4. Commit incluindo dist/
git add dist/
git commit -m "feat: nova feature"
```

### 🔍 Verificação

Antes de fazer push, verifique:

```bash
# Verificar se dist/ tem os arquivos esperados
ls dist/
# Deve mostrar: index.js, index.mjs, index.d.ts, index.d.mts, etc.

# Verificar se dist/ está no commit
git status
# dist/ deve aparecer como modificado ou novo

# Verificar se será publicado
pnpm pack --dry-run
# Deve mostrar dist/ na lista de arquivos
```

### 📚 Comparação com Outras Estratégias

| Estratégia | Prós | Contras | Usado por |
|------------|------|---------|-----------|
| **Commit `dist/`** ✅ | - Instalação funciona imediatamente<br>- Sem build no consumidor<br>- TypeScript definitions disponíveis | - Repositório maior<br>- Precisa rebuild antes de commit | @rainersoft/design-tokens, react, vue |
| **Ignorar `dist/`** | - Repositório menor<br>- Sem arquivos gerados | - Consumidor precisa executar build<br>- Pode falhar se dependências não disponíveis | Alguns projetos internos |

**Decisão**: Para uma biblioteca pública, **commit `dist/`** é a prática recomendada e amplamente usada na comunidade npm.

---

**Versão:** 2.6.0
**Última Atualização:** 04 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT