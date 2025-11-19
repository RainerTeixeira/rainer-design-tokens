# 🎨 Token Editor

Interface web **100% local** para editar design tokens visualmente, sem necessidade de servidor backend.

## ✨ Características Principais

- 🚀 **100% Local** - Funciona abrindo o HTML diretamente no navegador
- 🎨 **Editor Visual** - Edite propriedades JSON usando inputs HTML
- 📝 **Editor de Código** - Edição tradicional de JSON
- 💾 **Download de Arquivos** - Salve arquivos JSON diretamente
- 🔄 **Auto-backup** - Salva automaticamente no localStorage
- ✅ **Validação em Tempo Real** - Detecta erros de JSON instantaneamente
- 🎯 **Zero Dependencies** - Apenas HTML, CSS e JavaScript puro

## 📋 Funcionalidades

### Editor Visual 🎨
- ✅ **Editor Visual Estruturado** - Edite propriedades JSON usando inputs HTML
- ✅ **Detecção Automática de Tipos** - Inputs específicos para cores, números, booleanos, strings
- ✅ **Input de Cor com Preview** - Seletor de cor visual para valores hex (#RRGGBB)
- ✅ **Objetos Aninhados** - Expanda/colapse objetos aninhados com toggle
- ✅ **Atualização em Tempo Real** - Veja mudanças no JSON enquanto edita
- ✅ **Sincronização Bidirecional** - Mudanças no visual atualizam o código e vice-versa
- ✅ **Feedback Visual** - Destaque animado quando valores são modificados

### Editor de Código 📝
- ✅ Carregar arquivos JSON de tokens
- ✅ Editar tokens com editor JSON formatado
- ✅ Validar JSON em tempo real
- ✅ Salvar alterações
- ✅ **Gerar formatos 100% local** - CSS Variables, Tailwind Config, Tokens JSON (sem backend!)
- ✅ Preview e download dos arquivos gerados

### Geração de Formatos 🚀
- ✅ **100% Local** - Gera formatos diretamente no navegador, sem backend
- ✅ **CSS Variables** - Gera arquivo `css-vars.css` com variáveis CSS
- ✅ **Tailwind Config** - Gera arquivo `tailwind.config.ts` completo
- ✅ **Tokens JSON** - Gera arquivo `tokens.json` consolidado
- ✅ **Download Direto** - Baixe os arquivos gerados com um clique
- ✅ **Preview** - Visualize o conteúdo antes de baixar
- ✅ **Cache Inteligente** - Usa tokens carregados anteriormente do localStorage

### Funcionalidades Gerais
- ✅ **Alternância Visual/Código** - Tabs para alternar entre editor visual e código
- ✅ **Auto-backup** - Salva automaticamente no localStorage a cada 30s
- ✅ **Restauração de Backup** - Oferece restaurar backup ao carregar arquivo
- ✅ **Indicador de Mudanças** - Mostra se há alterações não salvas
- ✅ **Informações do Editor** - Contador de linha/coluna, total de linhas/caracteres
- ✅ **Atalhos de Teclado** - Ctrl+S (salvar), Ctrl+Shift+F (formatar), Ctrl+B (build)

## 🚀 Como Usar

### ⚡ Modo Local (Recomendado - Sem Servidor)

**O editor funciona 100% localmente!** Basta abrir o arquivo HTML diretamente no navegador:

1. **Abra o arquivo** `index.html` diretamente no navegador:
   - **Windows**: Clique duas vezes no arquivo ou arraste para o navegador
   - **Mac/Linux**: `open index.html` ou `xdg-open index.html`
   - Ou use `file:///caminho/completo/para/token-editor/index.html`

2. **Carregue um arquivo JSON**:
   - Clique em "📁 Abrir Arquivo"
   - Selecione qualquer arquivo JSON do seu computador
   - Ou use "📂 Carregar" para gerar um template padrão

3. **Edite visualmente**:
   - Use a tab "🎨 Visual" para editar com inputs HTML
   - Ou use a tab "📝 Código" para editar JSON diretamente

4. **Salve o arquivo**:
   - Clique em "💾 Salvar" ou pressione `Ctrl+S`
   - O arquivo será baixado automaticamente

5. **Gere formatos** (100% local, sem servidor!):
   - Clique em "🔨 Gerar Formatos" ou pressione `Ctrl+B`
   - Os formatos serão gerados diretamente no navegador
   - Baixe os arquivos gerados (CSS, Tailwind Config, Tokens JSON)
   - **Dica**: Para formatos completos, carregue todos os arquivos de tokens primeiro

## 📁 Estrutura

```
token-editor/
├── index.html      # Interface principal (HTML comentado e acessível)
├── styles.css      # Estilos CSS
├── editor.js       # Lógica do editor (JavaScript puro)
└── README.md       # Este arquivo
```

### 📝 Comentários HTML

O arquivo `index.html` está completamente comentado seguindo padrões de documentação HTML:
- Comentários de cabeçalho explicando o propósito do arquivo
- Comentários inline para cada seção importante
- Atributos ARIA para acessibilidade
- Estrutura semântica HTML5

## 🔧 Funcionamento Local

O editor funciona **100% localmente** porque:

1. **Carregamento de Arquivos**: Usa `FileReader` API do navegador
2. **Salvamento**: Usa `Blob` API para download de arquivos
3. **Armazenamento**: Usa `localStorage` para cache e backup
4. **Geração de Formatos**: Processa tokens diretamente no navegador usando JavaScript puro
5. **Sem Dependências**: Apenas APIs nativas do navegador

### ✅ Funcionalidades Completas (100% Local)

- ✅ Carregar, editar, validar, salvar (download)
- ✅ Gerar formatos (CSS Variables, Tailwind Config, Tokens JSON)
- ✅ Preview e download dos arquivos gerados
- ✅ Editor visual com inputs HTML
- ✅ Sincronização bidirecional entre visual e código

## ⌨️ Atalhos de Teclado

- `Ctrl + S` - Salvar arquivo
- `Ctrl + Shift + F` - Formatar JSON
- `Ctrl + B` - Gerar formatos
- `Tab` - Adicionar indentação (no editor de código)
- `Shift + Tab` - Remover indentação (no editor de código)

## 🎨 Editor Visual

O editor visual permite editar JSON de forma estruturada, evitando erros de sintaxe:

### Tipos de Input Automáticos

- **Cores Hex** (`#RRGGBB`) → Input de cor + campo de texto
- **Números** → Input numérico com step apropriado
- **Booleanos** → Checkbox
- **Strings** → Input de texto
- **Objetos** → Seção expansível/colapsável

### Como Usar

1. **Carregue um arquivo** usando o dropdown ou "Abrir Arquivo"
2. **Alternar para Visual** clicando na tab "🎨 Visual"
3. **Edite valores** diretamente nos inputs
4. **Veja mudanças em tempo real** no JSON (tab "📝 Código")
5. **Objetos aninhados** podem ser expandidos/colapsados com o botão ▼/▶

## 🔧 Melhorias Futuras

- [ ] Validação de schema JSON
- [ ] Preview visual dos tokens
- [ ] Histórico de alterações
- [ ] Comparação de versões
- [ ] Exportar/Importar tokens
- [ ] Suporte a múltiplos arquivos simultâneos
