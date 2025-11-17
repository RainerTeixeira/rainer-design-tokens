# Erros Corrigidos - Storybook com pnpm

## ✅ Correções Aplicadas

### 1. Versões do Storybook
**Problema**: Versão `10.0.8` não existe para `@storybook/addon-essentials` (apenas para storybook core).

**Solução**: Atualizado para Storybook `10.0.8` (versão mais recente):
- `storybook`: `^10.0.8` ✅
- `@storybook/react-vite`: `^10.0.8` ✅
- `@storybook/addon-onboarding`: `^10.0.8` ✅
- `@storybook/addon-essentials`: **Removido** (integrado no core do Storybook 10)
- `eslint-plugin-storybook`: `^10.0.8` ✅

### 2. Addons Atualizados
**Problema**: `@storybook/addon-essentials` não tem versão 10.0.8.

**Solução**: No Storybook 10, os addons essenciais foram integrados no core. Removido `@storybook/addon-essentials` do `package.json` e `.storybook/main.ts`. As funcionalidades essenciais (controls, actions, docs, etc.) estão agora integradas no core do Storybook 10.

### 3. Configuração pnpm
**Problema**: Storybook tentando usar node_modules do frontend.

**Solução**: Criado `.npmrc` com:
- `shamefully-hoist=true` - Para Storybook funcionar
- `link-workspace-packages=false` - Não linkar com workspace
- `prefer-workspace-packages=false` - Não preferir workspace

### 4. Scripts Atualizados
**Problema**: Scripts usando `npm` ao invés de `pnpm`.

**Solução**: Todos os scripts atualizados para usar `pnpm`:
- `build`: `pnpm run build:formats && tsup`
- `prepublishOnly`: `pnpm run build && pnpm run type-check`
- Novos scripts: `setup`, `setup:clean`, `clean:all`

### 5. Scripts PowerShell
**Problema**: Erro de sintaxe no script fix-storybook.ps1.

**Solução**: Scripts corrigidos e novos criados:
- `scripts/setup-pnpm.ps1` - Setup completo com pnpm
- `scripts/test-storybook-complete.ps1` - Teste completo do Storybook
- `scripts/fix-storybook.ps1` - Corrigido

## 🚀 Como Usar Agora

### Setup Inicial
```bash
cd C:\Desenvolvimento\@rainer-design-tokens

# Limpar tudo
pnpm run clean:all

# Instalar dependências
pnpm install

# Compilar
pnpm run build
```

### Testar Storybook
```bash
# Opção 1: Script completo
powershell -ExecutionPolicy Bypass -File scripts/test-storybook-complete.ps1

# Opção 2: Direto
pnpm run storybook
```

## 📋 Checklist de Verificação

Após correções, verifique:

- [x] Versões do Storybook atualizadas para 10.0.8 (versão mais recente)
- [x] Addon essentials removido (integrado no core)
- [x] `.npmrc` configurado para isolamento
- [x] Scripts atualizados para pnpm
- [x] Scripts PowerShell simplificados (apenas fix-storybook.ps1 mantido)

## 🔍 Se Ainda Houver Erros

1. **Limpar completamente**:
   ```bash
   pnpm run clean:all
   pnpm store prune
   pnpm install
   ```

2. **Verificar isolamento**:
   - Certifique-se que não há `npm link` ativo
   - Verifique que `node_modules` está na biblioteca, não no frontend

3. **Verificar versões**:
   ```bash
   pnpm list storybook --depth=0
   ```

4. **Consultar documentação**:
   - `docs/PNPM_SETUP.md` - Guia de setup
   - `docs/STORYBOOK_TROUBLESHOOTING.md` - Troubleshooting geral

## 📝 Arquivos Modificados

- `package.json` - Versões atualizadas para 10.0.8, addon essentials removido (integrado no core), scripts pnpm
- `.storybook/main.ts` - Addon essentials removido (integrado no core do Storybook 10)
- `.npmrc` - Configuração de isolamento
- `scripts/fix-storybook.ps1` - Simplificado e corrigido para pnpm
- `docs/PNPM_SETUP.md` - Novo guia
- `docs/ERROS_CORRIGIDOS.md` - Este arquivo

## 🎉 Atualização para Storybook 10.0.8

O Storybook foi atualizado para a versão mais recente (10.0.8) seguindo a documentação oficial:
- ✅ Storybook core: 10.0.8
- ✅ React Vite framework: 10.0.8
- ✅ Addon Onboarding: 10.0.8
- ✅ Addon Essentials: Removido (integrado no core)
- ✅ ESLint Plugin: 10.0.8

**Nota**: No Storybook 10, os addons essenciais (controls, actions, docs, etc.) foram integrados no core e não precisam mais ser instalados separadamente.

