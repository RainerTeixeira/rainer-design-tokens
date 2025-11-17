# 🚀 Guia de Publicação no GitHub

Este guia explica como publicar o `@rainer/design-tokens` no GitHub para uso na Vercel e futura publicação no npm.

## 📋 Pré-requisitos

- Conta no GitHub
- Git configurado localmente
- pnpm instalado

## 🔧 Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Repository name**: `@rainer-design-tokens`
3. **Description**: "Enterprise-grade design tokens library for modern design systems - TypeScript, Tailwind CSS, CSS Variables"
4. **Visibility**: **Public** (necessário para npm público)
5. **NÃO** marque "Add a README file" (já temos)
6. Clique em **Create repository**

### 2. Configurar Repositório Local

```bash
cd C:\Desenvolvimento\@rainer-design-tokens

# Verificar se já tem Git inicializado
git status

# Se não tiver, inicializar
git init

# Adicionar remote
git remote add origin https://github.com/RainerTeixeira/@rainer-design-tokens.git

# Ou se preferir SSH
git remote add origin git@github.com:RainerTeixeira/@rainer-design-tokens.git
```

### 3. Preparar Build

```bash
# Gerar build e formatos
pnpm run prepare:publish

# Ou manualmente:
pnpm run build
```

### 4. Fazer Commit Inicial

```bash
# Adicionar todos os arquivos
git add .

# Verificar o que será commitado
git status

# Commit inicial
git commit -m "feat: initial release - design tokens library v3.0.0

- Cores expandidas (primary, secondary, accent com estados)
- Tipografia hierárquica completa
- Tokens de acessibilidade WCAG AA
- Integração Tailwind CSS
- CSS Variables
- Storybook documentation"

# Push para GitHub
git branch -M main
git push -u origin main
```

### 5. Verificar no GitHub

Acesse: https://github.com/RainerTeixeira/@rainer-design-tokens

Verifique se:
- ✅ README.md está visível
- ✅ LICENSE está presente
- ✅ Diretório `dist/` está presente
- ✅ Diretório `formats/` está presente
- ✅ `package.json` está correto

## 🔄 Uso na Vercel

### Opção 1: Via GitHub (Durante desenvolvimento)

No `package.json` do frontend:

```json
{
  "dependencies": {
    "@rainer/design-tokens": "github:RainerTeixeira/@rainer-design-tokens"
  }
}
```

### Opção 2: Via npm (Após publicação)

```json
{
  "dependencies": {
    "@rainer/design-tokens": "^3.0.0"
  }
}
```

## 📦 Publicação no npm (Futuro)

### Preparação

1. **Criar conta no npm**: https://www.npmjs.com/signup
2. **Login**:
   ```bash
   npm login
   ```
3. **Verificar nome**: O escopo `@rainer` precisa estar disponível

### Publicação

```bash
# Build final
pnpm run prepare:publish

# Verificar o que será publicado
npm pack --dry-run

# Publicar
npm publish --access public
```

**Nota**: `--access public` é necessário para pacotes com escopo.

### Atualizações Futuras

1. Atualizar versão no `package.json`
2. `git add . && git commit -m "chore: bump version to X.X.X"`
3. `git push`
4. Criar release no GitHub
5. GitHub Actions publicará automaticamente no npm (se configurado)

## 🔍 Verificação

Após publicar, teste a instalação:

```bash
# Em outro projeto
npm install @rainer/design-tokens

# Ou via GitHub
npm install github:RainerTeixeira/@rainer-design-tokens
```

## 📝 Checklist

Antes de fazer push:

- [ ] Versão atualizada no `package.json`
- [ ] README.md completo
- [ ] LICENSE presente
- [ ] Build funcionando (`pnpm run build`)
- [ ] Type check passando (`pnpm run type-check`)
- [ ] `.gitignore` configurado
- [ ] `.npmignore` configurado
- [ ] `files` no `package.json` correto
- [ ] Repository URL correto no `package.json`
- [ ] GitHub Actions workflows criados

## 🎯 Próximos Passos

1. ✅ Criar repositório no GitHub
2. ✅ Fazer push inicial
3. ✅ Configurar GitHub Actions (já criados)
4. ⏳ Testar uso na Vercel
5. ⏳ Publicar no npm quando estiver pronto

