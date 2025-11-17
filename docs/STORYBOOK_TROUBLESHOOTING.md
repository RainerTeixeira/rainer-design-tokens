# Troubleshooting do Storybook

## 🔧 Problemas Comuns e Soluções

### Erro: "Could not resolve addon"

**Problema**: Addons do Storybook não encontrados.

**Solução**:
```bash
# Na biblioteca
cd C:\Desenvolvimento\@rainer-design-tokens

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Host version does not match binary version" (esbuild)

**Problema**: Conflito de versões do esbuild entre projetos.

**Solução**:
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Se usar pnpm no frontend, garantir que a biblioteca use npm
npm install --no-package-lock
```

### Erro: "Missing entry-preview.mjs"

**Problema**: Storybook tentando usar node_modules do frontend.

**Solução**:
1. Verificar se há `npm link` ativo:
```bash
npm unlink @rainer/design-tokens
```

2. Garantir que a biblioteca tenha suas próprias dependências:
```bash
cd C:\Desenvolvimento\@rainer-design-tokens
npm install
```

3. Se usar workspace (pnpm), criar `.npmrc` na biblioteca:
```ini
shamefully-hoist=true
```

### Erro: TypeScript types não encontrados

**Problema**: Tipos do Storybook não encontrados.

**Solução**:
```bash
# Instalar tipos se necessário
npm install --save-dev @types/react @types/react-dom
```

## ✅ Checklist de Verificação

Antes de executar o Storybook, verifique:

- [ ] `node_modules` existe na biblioteca
- [ ] Todas as dependências estão instaladas (`npm install`)
- [ ] Não há `npm link` ativo que possa causar conflitos
- [ ] Versões do Storybook são consistentes (todas 10.0.7)
- [ ] Não há conflitos com node_modules do frontend

## 🚀 Comando de Correção Rápida

Execute este comando para corrigir a maioria dos problemas:

```bash
cd C:\Desenvolvimento\@rainer-design-tokens
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run storybook
```

## 📝 Notas Importantes

1. **Isolamento**: A biblioteca deve ter suas próprias dependências, não compartilhar com o frontend
2. **Versões**: Todas as dependências do Storybook devem ter a mesma versão (10.0.7)
3. **Addons**: `@storybook/addon-essentials` já inclui muitos addons (controls, backgrounds, docs, etc.)

## 🔗 Recursos

- [Documentação do Storybook](https://storybook.js.org/docs)
- [Guia do Storybook](./STORYBOOK_GUIDE.md)

