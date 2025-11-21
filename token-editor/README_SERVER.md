# 🚀 Servidor Token Editor

Servidor HTTP simples para rodar o Token Editor localmente.

## 📋 Como Usar

### Iniciar o Servidor

```bash
# Opção 1: Usando npm script
pnpm run dev:editor

# Opção 2: Usando npm script alternativo
pnpm run start:editor

# Opção 3: Diretamente com Node
node token-editor/server.js
```

### Acessar o Editor

Após iniciar o servidor, acesse:

**http://localhost:3000**

## ✨ Funcionalidades

O servidor serve todos os arquivos estáticos do Token Editor:
- `index.html` - Interface principal
- `editor.js` - Lógica do editor
- `editor-extensions.js` - Extensões (validação, preview, histórico)
- `export-formats.js` - Novos formatos de exportação
- `styles.css` - Estilos

## 🔧 Configuração

O servidor está configurado para:
- **Porta**: 3000
- **CORS**: Habilitado para desenvolvimento
- **MIME Types**: Suporta HTML, JS, CSS, JSON, imagens

## 📝 Notas

- O servidor é simples e adequado para desenvolvimento local
- Para produção, considere usar um servidor mais robusto (nginx, Apache, etc.)
- O editor também funciona abrindo o `index.html` diretamente no navegador (sem servidor)

