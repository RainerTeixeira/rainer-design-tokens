# Guia de Publicação

## 📦 Publicação no GitHub

### 1. Criar repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `@rainer-design-tokens`
3. Descrição: "Enterprise-grade design tokens library for modern design systems"
4. Visibilidade: **Public** (para poder publicar no npm)
5. Não inicialize com README, .gitignore ou license (já temos)

### 2. Configurar repositório local

```bash
cd C:\Desenvolvimento\@rainer-design-tokens

# Adicionar remote
git remote add origin https://github.com/RainerTeixeira/@rainer-design-tokens.git

# Ou se preferir SSH
git remote add origin git@github.com:RainerTeixeira/@rainer-design-tokens.git
```

### 3. Fazer commit e push inicial

```bash
# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: initial release - design tokens library v3.0.0"

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
   - O nome `@rainer/design-tokens` requer escopo
   - Certifique-se de que o escopo `@rainer` está disponível ou use outro

### Publicação

```bash
# Build final
pnpm run build

# Verificar o que será publicado
npm pack --dry-run

# Publicar
npm publish --access public
```

**Nota**: O `--access public` é necessário para pacotes com escopo (`@rainer/`).

### Atualizações futuras

1. Atualizar versão no `package.json`
2. Fazer commit e push
3. Criar release no GitHub
4. O GitHub Actions publicará automaticamente no npm

## 🔄 Uso na Vercel

Após publicar no GitHub, você pode usar na Vercel de duas formas:

### Opção 1: Via npm (Recomendado)

```json
{
  "dependencies": {
    "@rainer/design-tokens": "^3.0.0"
  }
}
```

### Opção 2: Via GitHub (Durante desenvolvimento)

```json
{
  "dependencies": {
    "@rainer/design-tokens": "github:RainerTeixeira/@rainer-design-tokens"
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

