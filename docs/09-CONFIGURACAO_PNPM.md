# Setup com pnpm - Design Tokens

## 🚀 Setup Inicial

### 1. Instalar pnpm (se necessário)

```bash
npm install -g pnpm
```

### 2. Limpar e Instalar Dependências

```bash
cd C:\Desenvolvimento\@rainer-design-tokens

# Limpar tudo
pnpm run clean:all

# Instalar dependências
pnpm install
```

### 3. Compilar Biblioteca

```bash
pnpm run build
```

### 4. Testar Storybook

```bash
# Opção 1: Script de teste completo
powershell -ExecutionPolicy Bypass -File scripts/test-storybook-complete.ps1

# Opção 2: Direto
pnpm run storybook
```

## 📋 Scripts Disponíveis

- `pnpm install` - Instalar dependências
- `pnpm run setup` - Alias para `pnpm install`
- `pnpm run setup:clean` - Limpar tudo e reinstalar
- `pnpm run build` - Compilar biblioteca
- `pnpm run storybook` - Iniciar Storybook
- `pnpm run build-storybook` - Build do Storybook para produção
- `pnpm run clean:all` - Limpar node_modules, lock files e dist

## ⚙️ Configuração pnpm

O arquivo `.npmrc` está configurado para:

- **Isolar dependências**: Não compartilhar com workspace do frontend
- **Hoist necessário**: Storybook e esbuild no topo
- **Instalar peers automaticamente**: React e outras dependências

## 🔧 Troubleshooting

### Erro: "No matching version found"

**Solução**: Verifique se as versões no `package.json` estão corretas:

- Storybook: `^10.0.8`
- Addons: `^10.0.8`

### Erro: "Host version does not match binary version" (esbuild)

**Solução**: Limpar e reinstalar:

```bash
pnpm run clean:all
pnpm install
```

### Erro: Storybook usando node_modules do frontend

**Solução**: O `.npmrc` deve ter:

```ini
link-workspace-packages=false
node-linker=isolated
```

### Dependências não instaladas

**Solução**:

```bash
# Limpar cache
pnpm store prune

# Reinstalar
pnpm install
```

## ✅ Checklist de Verificação

Antes de executar o Storybook:

- [ ] `pnpm --version` retorna versão (10.x)
- [ ] `node_modules` existe na biblioteca
- [ ] `pnpm-lock.yaml` existe
- [ ] `.npmrc` está configurado corretamente
- [ ] Versões do Storybook são 10.0.8
- [ ] Não há workspace link ativo

## 📚 Próximos Passos

Após setup bem-sucedido:
1. Execute `pnpm run storybook`
2. Acesse <http://localhost:6006>
3. Explore as stories de documentação:
   - Design Tokens/Color Palette
   - Design Tokens/Color States
   - Design Tokens/Typography Hierarchy
   - Design Tokens/Accessibility