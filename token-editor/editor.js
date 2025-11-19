// Token Editor - JavaScript
// Interface para editar tokens e gerar formatos

let currentFile = '';
let originalContent = '';
let hasUnsavedChanges = false;

// Elementos DOM
const tokenFileSelect = document.getElementById('tokenFile');
const loadBtn = document.getElementById('loadBtn');
const saveBtn = document.getElementById('saveBtn');
const buildBtn = document.getElementById('buildBtn');
const jsonEditor = document.getElementById('jsonEditor');
const statusBar = document.getElementById('statusBar');
const statusText = document.getElementById('statusText');
const formatBtn = document.getElementById('formatBtn');
const validateBtn = document.getElementById('validateBtn');
const previewContainer = document.getElementById('previewContainer');
const closePreviewBtn = document.getElementById('closePreviewBtn');
const fileIndicator = document.getElementById('fileIndicator');
const editorInfo = document.getElementById('editorInfo');
const fileInput = document.getElementById('fileInput');
const loadFileBtn = document.getElementById('loadFileBtn');
const visualTab = document.getElementById('visualTab');
const codeTab = document.getElementById('codeTab');
const visualEditor = document.getElementById('visualEditor');
const codeEditor = document.getElementById('codeEditor');
const visualEditorContent = document.getElementById('visualEditorContent');
const searchInput = document.getElementById('searchInput');

// Atualizar status
function updateStatus(message, type = 'info') {
  statusText.textContent = message;
  statusBar.className = `status-bar ${type}`;
  
  if (type === 'success' || type === 'error') {
    setTimeout(() => {
      statusBar.className = 'status-bar';
      statusText.textContent = 'Pronto';
    }, 3000);
  }
}

// Carregar template padrão baseado no arquivo selecionado
// Esta função gera um template padrão, não carrega arquivo real
// Para carregar arquivo real, use "Abrir Arquivo"
function loadFile() {
  const filePath = tokenFileSelect.value;
  if (!filePath) {
    updateStatus('Selecione um template primeiro ou use "Abrir Arquivo" para carregar um arquivo real', 'warning');
    return;
  }

  try {
    updateStatus('Gerando template padrão...', 'info');
    
    // Tentar carregar do localStorage primeiro
    const localContent = localStorage.getItem(`token_${filePath}`);
    let content = '';
    
    if (localContent) {
      content = localContent;
      updateStatus('Carregado do cache local', 'info');
    } else {
      // Gerar template padrão baseado no tipo de arquivo
      content = getDefaultContent(filePath);
      updateStatus('Template padrão gerado. Use "Abrir Arquivo" para carregar arquivo real.', 'info');
    }

    originalContent = content;
    currentFile = filePath;
    
    // Formatar JSON
    const json = JSON.parse(content);
    jsonEditor.value = JSON.stringify(json, null, 2);
    jsonEditor.classList.remove('error');
    
    // Armazenar token para geração de formatos
    storeLoadedToken(filePath, content);
    
    // Renderizar editor visual
    renderVisualEditor(json);
    
    saveBtn.disabled = false;
    buildBtn.disabled = false;
    hasUnsavedChanges = false;
    updateFileIndicator();
    updateEditorInfo();
    tryRestoreBackup();
    
    updateStatus(`Template ${filePath.split('/').pop()} carregado com sucesso`, 'success');
  } catch (error) {
    updateStatus(`Erro ao gerar template: ${error.message}`, 'error');
    jsonEditor.classList.add('error');
    console.error('Erro ao gerar template:', error);
  }
}

// Obter conteúdo padrão baseado no tipo de arquivo
function getDefaultContent(filePath) {
  const fileName = filePath.split('/').pop();
  
  if (fileName.includes('light.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Light theme color palette",
      "colors": {
        "primary": {
          "base": "#0891b2",
          "hover": "#0e7490",
          "active": "#155e75"
        },
        "secondary": {
          "base": "#9333ea",
          "hover": "#7e22ce"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('dark.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Dark theme color palette",
      "colors": {
        "primary": {
          "base": "#06b6d4",
          "hover": "#0891b2"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('typography.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Typography tokens",
      "typography": {
        "fontFamily": {
          "sans": "Inter, system-ui, sans-serif"
        },
        "fontSize": {
          "sm": "0.875rem",
          "base": "1rem",
          "lg": "1.125rem"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('spacing.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Spacing tokens",
      "spacing": {
        "0": "0px",
        "1": "0.25rem",
        "2": "0.5rem",
        "4": "1rem",
        "8": "2rem"
      }
    }, null, 2);
  }
  
  if (fileName.includes('radius.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Border radius tokens",
      "radius": {
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem"
      }
    }, null, 2);
  }
  
  if (fileName.includes('shadows.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Shadow tokens",
      "shadows": {
        "light": {
          "sm": "0 1px 2px rgba(0,0,0,0.05)",
          "md": "0 4px 6px rgba(0,0,0,0.1)"
        },
        "dark": {
          "sm": "0 1px 2px rgba(0,0,0,0.3)"
        }
      }
    }, null, 2);
  }
  
  if (fileName.includes('animations.json')) {
    return JSON.stringify({
      "$schema": "https://json.schemastore.org/theme.json",
      "$description": "Animation tokens",
      "animations": {
        "fade-in": {
          "name": "fadeIn",
          "duration": "200ms",
          "timingFunction": "ease-in-out"
        }
      }
    }, null, 2);
  }
  
  // Template genérico
  return JSON.stringify({
    "$schema": "https://json.schemastore.org/theme.json",
    "$description": "Design tokens",
    "data": {}
  }, null, 2);
}

// Carregar arquivo do sistema de arquivos
function loadFileFromSystem() {
  fileInput.click();
}

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.name.endsWith('.json')) {
    updateStatus('Por favor, selecione um arquivo JSON', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const content = event.target.result;
      const json = JSON.parse(content);
      
      originalContent = JSON.stringify(json, null, 2);
      currentFile = `local/${file.name}`;
      jsonEditor.value = originalContent;
      jsonEditor.classList.remove('error');
      
      // Renderizar editor visual
      renderVisualEditor(json);
      
      // Armazenar token para geração de formatos
      storeLoadedToken(currentFile, originalContent);
      
      saveBtn.disabled = false;
      buildBtn.disabled = false;
      hasUnsavedChanges = false;
      updateFileIndicator();
      updateEditorInfo();
      
      // Salvar no localStorage
      localStorage.setItem(`token_${currentFile}`, originalContent);
      
      updateStatus(`Arquivo ${file.name} carregado com sucesso`, 'success');
    } catch (error) {
      updateStatus(`Erro ao ler arquivo: ${error.message}`, 'error');
      jsonEditor.classList.add('error');
    }
  };
  
  reader.onerror = () => {
    updateStatus('Erro ao ler arquivo', 'error');
  };
  
  reader.readAsText(file);
});

// Salvar arquivo (download como arquivo JSON)
// Funciona 100% localmente - não requer servidor
function saveFile() {
  if (!currentFile) {
    updateStatus('Nenhum arquivo carregado', 'warning');
    return;
  }

  try {
    const content = jsonEditor.value.trim();
    if (!content) {
      updateStatus('Editor vazio', 'warning');
      return;
    }

    // Validar JSON
    JSON.parse(content);

    // Criar blob e fazer download
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFile.split('/').pop() || 'tokens.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Salvar também no localStorage como backup
    localStorage.setItem(`token_${currentFile}`, content);
    originalContent = content;
    hasUnsavedChanges = false;
    updateFileIndicator();
    updateStatus(`Arquivo ${currentFile.split('/').pop()} salvo e baixado com sucesso`, 'success');
  } catch (error) {
    if (error instanceof SyntaxError) {
      updateStatus('JSON inválido. Corrija os erros antes de salvar', 'error');
      jsonEditor.classList.add('error');
    } else {
      updateStatus(`Erro ao salvar: ${error.message}`, 'error');
    }
    console.error('Erro ao salvar arquivo:', error);
  }
}

// Armazenar todos os tokens carregados
let loadedTokens = {
  colors: { light: null, dark: null },
  typography: null,
  spacing: null,
  radius: null,
  shadows: null,
  animations: null
};

// Detectar tipo de arquivo e armazenar
function storeLoadedToken(filePath, content) {
  try {
    const json = JSON.parse(content);
    
    if (filePath.includes('colors/light.json')) {
      loadedTokens.colors.light = json.colors || json;
    } else if (filePath.includes('colors/dark.json')) {
      loadedTokens.colors.dark = json.colors || json;
    } else if (filePath.includes('typography.json')) {
      loadedTokens.typography = json.typography || json;
    } else if (filePath.includes('spacing.json')) {
      loadedTokens.spacing = json.spacing || json;
    } else if (filePath.includes('radius.json')) {
      loadedTokens.radius = json.radius || json;
    } else if (filePath.includes('shadows.json')) {
      loadedTokens.shadows = json.shadows || json;
    } else if (filePath.includes('animations.json')) {
      loadedTokens.animations = json.animations || json;
    }
  } catch (e) {
    // Ignorar erros de parsing
  }
}

// Gerar formatos (100% local - sem backend)
function buildFormats() {
  if (!currentFile) {
    updateStatus('Nenhum arquivo carregado', 'warning');
    return;
  }

  try {
    updateStatus('Gerando formatos...', 'info');
    buildBtn.disabled = true;
    
    // Armazenar token atual
    storeLoadedToken(currentFile, jsonEditor.value);
    
    // Tentar carregar outros tokens do localStorage
    const tokenFiles = [
      'tokens/colors/light.json',
      'tokens/colors/dark.json',
      'tokens/typography.json',
      'tokens/spacing.json',
      'tokens/radius.json',
      'tokens/shadows.json',
      'tokens/animations.json'
    ];
    
    tokenFiles.forEach(filePath => {
      const cached = localStorage.getItem(`token_${filePath}`);
      if (cached) {
        storeLoadedToken(filePath, cached);
      }
    });
    
    // Gerar formatos
    const formats = {
      css: generateCSS(),
      tailwind: generateTailwindConfig(),
      tokensJson: generateTokensJSON()
    };
    
    // Mostrar preview e permitir download
    showBuildResults(formats);
    
    updateStatus('Formatos gerados com sucesso!', 'success');
  } catch (error) {
    updateStatus(`Erro ao gerar formatos: ${error.message}`, 'error');
    console.error('Erro ao gerar formatos:', error);
  } finally {
    buildBtn.disabled = false;
  }
}

// Formatar JSON
function formatJSON() {
  try {
    const content = jsonEditor.value.trim();
    const json = JSON.parse(content);
    jsonEditor.value = JSON.stringify(json, null, 2);
    jsonEditor.classList.remove('error');
    updateStatus('JSON formatado', 'success');
  } catch (error) {
    updateStatus('JSON inválido. Não foi possível formatar', 'error');
    jsonEditor.classList.add('error');
  }
}

// Validar JSON
function validateJSON(showSuccess = false) {
  try {
    const content = jsonEditor.value.trim();
    if (!content) {
      jsonEditor.classList.remove('error');
      return;
    }
    
    JSON.parse(content);
    jsonEditor.classList.remove('error');
    
    // Só mostrar mensagem de sucesso se solicitado explicitamente
    if (showSuccess) {
      updateStatus('JSON válido ✓', 'success');
    }
  } catch (error) {
    jsonEditor.classList.add('error');
    
    // Extrair linha do erro se possível
    const match = error.message.match(/position (\d+)/);
    if (match) {
      const pos = parseInt(match[1]);
      const text = jsonEditor.value;
      const textBeforeError = text.substring(0, pos);
      const line = textBeforeError.split('\n').length;
      updateStatus(`JSON inválido na linha ${line}: ${error.message}`, 'error');
    } else {
      updateStatus(`JSON inválido: ${error.message}`, 'error');
    }
  }
}

// Mostrar preview (mantida para compatibilidade)
function showPreview(data) {
  previewContainer.style.display = 'block';
  const previewContent = document.getElementById('previewContent');
  
  let html = '<h3>Arquivos Gerados:</h3><ul>';
  if (data.files) {
    data.files.forEach(file => {
      html += `<li>✅ ${file}</li>`;
    });
  } else {
    html += '<li>✅ formats/css-vars.css</li>';
    html += '<li>✅ formats/tailwind.config.ts</li>';
    html += '<li>✅ formats/tokens.json</li>';
  }
  html += '</ul>';
  
  previewContent.innerHTML = html;
}

// Mostrar resultados do build com opção de download
function showBuildResults(formats) {
  previewContainer.style.display = 'block';
  const previewContent = document.getElementById('previewContent');
  
  previewContent.innerHTML = `
    <h3>✅ Formatos Gerados com Sucesso!</h3>
    <p style="margin-bottom: 20px; color: #6b7280;">Clique nos botões abaixo para baixar os arquivos gerados:</p>
    
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #0891b2;">
        <h4 style="margin: 0 0 10px 0; color: #212529;">📄 CSS Variables</h4>
        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">Variáveis CSS para uso em qualquer projeto</p>
        <button class="btn btn-primary" onclick="downloadFormat('css-vars.css', window.formats.css, 'text/css')">
          💾 Baixar css-vars.css
        </button>
        <details style="margin-top: 10px;">
          <summary style="cursor: pointer; color: #0891b2; font-size: 14px;">👁️ Preview</summary>
          <pre style="margin-top: 10px; padding: 10px; background: #1e1e1e; color: #d4d4d4; border-radius: 4px; overflow-x: auto; font-size: 12px; max-height: 300px; overflow-y: auto;">${escapeHtml(formats.css.substring(0, 2000))}${formats.css.length > 2000 ? '\n... (arquivo truncado no preview)' : ''}</pre>
        </details>
      </div>
      
      <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #9333ea;">
        <h4 style="margin: 0 0 10px 0; color: #212529;">⚡ Tailwind Config</h4>
        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">Configuração do Tailwind CSS</p>
        <button class="btn btn-primary" onclick="downloadFormat('tailwind.config.ts', window.formats.tailwind, 'text/typescript')">
          💾 Baixar tailwind.config.ts
        </button>
        <details style="margin-top: 10px;">
          <summary style="cursor: pointer; color: #9333ea; font-size: 14px;">👁️ Preview</summary>
          <pre style="margin-top: 10px; padding: 10px; background: #1e1e1e; color: #d4d4d4; border-radius: 4px; overflow-x: auto; font-size: 12px; max-height: 300px; overflow-y: auto;">${escapeHtml(formats.tailwind.substring(0, 2000))}${formats.tailwind.length > 2000 ? '\n... (arquivo truncado no preview)' : ''}</pre>
        </details>
      </div>
      
      <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #10b981;">
        <h4 style="margin: 0 0 10px 0; color: #212529;">📦 Tokens JSON Consolidado</h4>
        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">JSON consolidado com referências</p>
        <button class="btn btn-primary" onclick="downloadFormat('tokens.json', window.formats.tokensJson, 'application/json')">
          💾 Baixar tokens.json
        </button>
        <details style="margin-top: 10px;">
          <summary style="cursor: pointer; color: #10b981; font-size: 14px;">👁️ Preview</summary>
          <pre style="margin-top: 10px; padding: 10px; background: #1e1e1e; color: #d4d4d4; border-radius: 4px; overflow-x: auto; font-size: 12px; max-height: 300px; overflow-y: auto;">${escapeHtml(formats.tokensJson.substring(0, 2000))}${formats.tokensJson.length > 2000 ? '\n... (arquivo truncado no preview)' : ''}</pre>
        </details>
      </div>
    </div>
    
    <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        <strong>💡 Dica:</strong> Para gerar formatos completos, carregue todos os arquivos de tokens (colors/light.json, colors/dark.json, typography.json, spacing.json, radius.json, shadows.json, animations.json).
      </p>
    </div>
  `;
  
  // Tornar formats disponível globalmente para download
  window.formats = formats;
}

// Função global para download
window.downloadFormat = function(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  updateStatus(`Arquivo ${filename} baixado com sucesso`, 'success');
};

// Escapar HTML para preview seguro
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Fechar preview
function closePreview() {
  previewContainer.style.display = 'none';
}

// Renderizar editor visual
function renderVisualEditor(json, container = visualEditorContent, path = '') {
  container.innerHTML = '';
  
  if (!json || typeof json !== 'object') {
    // Se JSON vazio ou inválido, mostrar botão para criar
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'empty-message';
    emptyMsg.innerHTML = `
      <p>JSON vazio ou inválido</p>
      <button class="btn btn-primary" onclick="createNewJSON()" style="margin-top: 15px;">
        ➕ Criar Novo JSON
      </button>
    `;
    container.appendChild(emptyMsg);
    return;
  }
  
  // Se for array, renderizar itens do array
  if (Array.isArray(json)) {
    json.forEach((item, index) => {
      const itemPath = `${path}[${index}]`;
      const itemDiv = document.createElement('div');
      itemDiv.className = 'json-item array-item';
      itemDiv.dataset.path = itemPath;
      itemDiv.draggable = true;
      
      // Drag and Drop handlers
      itemDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', itemPath);
        itemDiv.classList.add('dragging');
      });
      
      itemDiv.addEventListener('dragend', () => {
        itemDiv.classList.remove('dragging');
        document.querySelectorAll('.json-item').forEach(item => {
          item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
        });
      });
      
      itemDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        const rect = itemDiv.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        
        document.querySelectorAll('.json-item').forEach(item => {
          item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
        });
        
        if (e.clientY < midY) {
          itemDiv.classList.add('drag-over-top');
        } else {
          itemDiv.classList.add('drag-over-bottom');
        }
      });
      
      itemDiv.addEventListener('dragleave', () => {
        itemDiv.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
      });
      
      itemDiv.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedPath = e.dataTransfer.getData('text/plain');
        
        if (draggedPath === itemPath) return;
        
        const rect = itemDiv.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const insertBefore = e.clientY < midY;
        
        moveProperty(draggedPath, itemPath, insertBefore);
        
        itemDiv.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
      });
      
      // Ícone de arrastar
      const dragHandle = document.createElement('span');
      dragHandle.className = 'drag-handle';
      dragHandle.textContent = '☰';
      dragHandle.title = 'Arraste para reordenar';
      dragHandle.draggable = false;
      
      const indexLabel = document.createElement('span');
      indexLabel.className = 'json-key';
      indexLabel.textContent = `[${index}]`;
      
      const valueInput = createValueInput(item, getValueType(item), itemPath);
      
      const typeBadge = document.createElement('span');
      typeBadge.className = 'json-value-type';
      typeBadge.textContent = getValueType(item);
      
      const removeItemBtn = document.createElement('button');
      removeItemBtn.className = 'json-action-btn remove';
      removeItemBtn.textContent = '×';
      removeItemBtn.title = 'Remover item';
      removeItemBtn.onclick = (e) => {
        e.stopPropagation();
        removeArrayItem(path, index);
      };
      
      const keyValueDiv = document.createElement('div');
      keyValueDiv.className = 'json-key-value';
      keyValueDiv.appendChild(dragHandle);
      keyValueDiv.appendChild(indexLabel);
      keyValueDiv.appendChild(valueInput);
      keyValueDiv.appendChild(typeBadge);
      keyValueDiv.appendChild(removeItemBtn);
      
      itemDiv.appendChild(keyValueDiv);
      container.appendChild(itemDiv);
    });
    
    // Botão para adicionar item ao array (se for raiz)
    if (!path) {
      const addBtn = document.createElement('button');
      addBtn.className = 'btn btn-secondary';
      addBtn.textContent = '+ Adicionar Item';
      addBtn.style.marginTop = '15px';
      addBtn.onclick = () => addArrayItem('');
      container.appendChild(addBtn);
    }
    return;
  }
  
  const items = Object.entries(json);
  
  // Botão para adicionar propriedade (sempre mostrar)
  const addPropertyBtn = document.createElement('button');
  addPropertyBtn.className = 'btn btn-secondary';
  addPropertyBtn.textContent = '+ Adicionar Propriedade';
  addPropertyBtn.style.marginBottom = '15px';
  addPropertyBtn.onclick = () => addNewProperty(path, container);
  container.appendChild(addPropertyBtn);
  
  if (items.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'empty-message';
    emptyMsg.textContent = 'Objeto vazio - Adicione propriedades usando o botão acima';
    container.appendChild(emptyMsg);
  } else {
    items.forEach(([key, value]) => {
      const itemPath = path ? `${path}.${key}` : key;
      const item = createVisualItem(key, value, itemPath, container);
      container.appendChild(item);
    });
  }
  
  // Aplicar filtro de busca se houver
  if (searchInput && searchInput.value.trim()) {
    filterVisualEditor(searchInput.value.trim());
  }
}

// Criar novo JSON vazio (global para acesso via onclick)
window.createNewJSON = function() {
  const newJson = {};
  jsonEditor.value = JSON.stringify(newJson, null, 2);
  originalContent = jsonEditor.value;
  currentFile = 'new.json';
  hasUnsavedChanges = false;
  saveBtn.disabled = false;
  buildBtn.disabled = false;
  updateFileIndicator();
  updateEditorInfo();
  renderVisualEditor(newJson);
  updateStatus('Novo JSON criado. Adicione propriedades usando o botão "+ Adicionar Propriedade"', 'success');
};

// Adicionar nova propriedade
function addNewProperty(parentPath, container) {
  const keyName = prompt('Nome da propriedade:');
  if (!keyName || !keyName.trim()) return;
  
  const cleanKey = keyName.trim();
  
  // Validar nome da propriedade
  if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(cleanKey)) {
    updateStatus('Nome inválido. Use apenas letras, números, _ e $ (começando com letra)', 'error');
    return;
  }
  
  try {
    const json = JSON.parse(jsonEditor.value);
    const keys = parentPath ? parentPath.split('.') : [];
    let current = json;
    
    // Navegar até o objeto pai
    for (const key of keys) {
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    }
    
    // Adicionar nova propriedade com valor padrão
    current[cleanKey] = '';
    
    // Atualizar JSON
    jsonEditor.value = JSON.stringify(json, null, 2);
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
    
    // Re-renderizar
    renderVisualEditor(json);
    
    updateStatus(`Propriedade "${cleanKey}" adicionada`, 'success');
  } catch (error) {
    updateStatus(`Erro ao adicionar propriedade: ${error.message}`, 'error');
  }
}

// Remover propriedade
function removeProperty(path) {
  if (!confirm('Tem certeza que deseja remover esta propriedade?')) return;
  
  try {
    const json = JSON.parse(jsonEditor.value);
    const keys = path.split('.');
    let current = json;
    
    // Navegar até o penúltimo nível
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    
    // Remover propriedade
    const lastKey = keys[keys.length - 1];
    delete current[lastKey];
    
    // Atualizar JSON
    jsonEditor.value = JSON.stringify(json, null, 2);
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
    
    // Re-renderizar
    renderVisualEditor(json);
    
    updateStatus(`Propriedade removida`, 'success');
  } catch (error) {
    updateStatus(`Erro ao remover propriedade: ${error.message}`, 'error');
  }
}

// Adicionar item ao array
function addArrayItem(arrayPath) {
  const valueType = prompt('Tipo do valor:\n1 - String\n2 - Number\n3 - Boolean\n4 - Object\n5 - Array', '1');
  if (!valueType) return;
  
  let defaultValue;
  switch (valueType) {
    case '1': defaultValue = ''; break;
    case '2': defaultValue = 0; break;
    case '3': defaultValue = false; break;
    case '4': defaultValue = {}; break;
    case '5': defaultValue = []; break;
    default: defaultValue = '';
  }
  
  try {
    const json = JSON.parse(jsonEditor.value);
    const keys = arrayPath ? arrayPath.split('.') : [];
    let current = json;
    
    // Navegar até o array
    for (const key of keys) {
      if (!current[key]) {
        current[key] = [];
      }
      current = current[key];
    }
    
    if (!Array.isArray(current)) {
      updateStatus('Erro: caminho não aponta para um array', 'error');
      return;
    }
    
    // Adicionar item
    current.push(defaultValue);
    
    // Atualizar JSON
    jsonEditor.value = JSON.stringify(json, null, 2);
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
    
    // Re-renderizar
    renderVisualEditor(json);
    
    updateStatus('Item adicionado ao array', 'success');
  } catch (error) {
    updateStatus(`Erro ao adicionar item: ${error.message}`, 'error');
  }
}

// Remover item do array
function removeArrayItem(arrayPath, index) {
  if (!confirm('Tem certeza que deseja remover este item do array?')) return;
  
  try {
    const json = JSON.parse(jsonEditor.value);
    const keys = arrayPath ? arrayPath.split('.') : [];
    let current = json;
    
    // Navegar até o array
    for (const key of keys) {
      current = current[key];
    }
    
    if (!Array.isArray(current)) {
      updateStatus('Erro: caminho não aponta para um array', 'error');
      return;
    }
    
    // Remover item
    current.splice(index, 1);
    
    // Atualizar JSON
    jsonEditor.value = JSON.stringify(json, null, 2);
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
    
    // Re-renderizar
    renderVisualEditor(json);
    
    updateStatus('Item removido do array', 'success');
  } catch (error) {
    updateStatus(`Erro ao remover item: ${error.message}`, 'error');
  }
}

// Mover propriedade/item (reordenar)
function moveProperty(fromPath, toPath, insertBefore) {
  try {
    const json = JSON.parse(jsonEditor.value);
    
    // Extrair caminhos e chaves
    const fromKeys = fromPath.split('.');
    const toKeys = toPath.split('.');
    
    // Verificar se são do mesmo nível (mesmo pai)
    if (fromKeys.length !== toKeys.length) {
      updateStatus('Só é possível reordenar itens do mesmo nível', 'warning');
      return;
    }
    
    // Verificar se são do mesmo objeto pai
    const fromParent = fromKeys.slice(0, -1).join('.');
    const toParent = toKeys.slice(0, -1).join('.');
    
    if (fromParent !== toParent) {
      updateStatus('Só é possível reordenar itens do mesmo objeto', 'warning');
      return;
    }
    
    // Navegar até o objeto pai
    let parent = json;
    const parentKeys = fromParent ? fromParent.split('.') : [];
    for (const key of parentKeys) {
      parent = parent[key];
    }
    
    const fromKey = fromKeys[fromKeys.length - 1];
    const toKey = toKeys[toKeys.length - 1];
    
    // Verificar se é array ou objeto
    if (Array.isArray(parent)) {
      // Reordenar array
      const fromMatch = fromKey.match(/\[(\d+)\]/);
      const toMatch = toKey.match(/\[(\d+)\]/);
      
      if (!fromMatch || !toMatch) {
        updateStatus('Erro ao reordenar array', 'error');
        return;
      }
      
      const fromIndex = parseInt(fromMatch[1]);
      const toIndex = parseInt(toMatch[1]);
      
      if (isNaN(fromIndex) || isNaN(toIndex)) {
        updateStatus('Erro ao reordenar array', 'error');
        return;
      }
      
      if (fromIndex === toIndex) return;
      
      const item = parent[fromIndex];
      parent.splice(fromIndex, 1);
      
      // Ajustar índice se necessário (porque removemos um item antes)
      let newIndex = toIndex;
      if (fromIndex < toIndex) {
        newIndex = toIndex - 1;
      }
      
      const finalIndex = insertBefore ? newIndex : newIndex + 1;
      parent.splice(finalIndex, 0, item);
      
    } else {
      // Reordenar objeto (criar novo objeto com ordem correta)
      const entries = Object.entries(parent);
      const fromIndex = entries.findIndex(([key]) => key === fromKey);
      const toIndex = entries.findIndex(([key]) => key === toKey);
      
      if (fromIndex === -1 || toIndex === -1) {
        updateStatus('Erro ao encontrar propriedades', 'error');
        return;
      }
      
      if (fromIndex === toIndex) return;
      
      // Remover item da posição original
      const [movedEntry] = entries.splice(fromIndex, 1);
      
      // Inserir na nova posição
      const newIndex = insertBefore ? toIndex : toIndex + 1;
      entries.splice(newIndex, 0, movedEntry);
      
      // Reconstruir objeto na ordem correta
      const newParent = {};
      entries.forEach(([key, value]) => {
        newParent[key] = value;
      });
      
      // Atualizar no JSON
      if (parentKeys.length === 0) {
        // É a raiz
        Object.keys(json).forEach(key => delete json[key]);
        Object.assign(json, newParent);
      } else {
        // É um objeto aninhado
        let current = json;
        for (let i = 0; i < parentKeys.length - 1; i++) {
          current = current[parentKeys[i]];
        }
        current[parentKeys[parentKeys.length - 1]] = newParent;
      }
    }
    
    // Atualizar JSON
    jsonEditor.value = JSON.stringify(json, null, 2);
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
    
    // Re-renderizar
    renderVisualEditor(json);
    
    updateStatus('Propriedade reordenada', 'success');
  } catch (error) {
    updateStatus(`Erro ao reordenar: ${error.message}`, 'error');
    console.error('Erro ao reordenar:', error);
  }
}

// Criar item visual
function createVisualItem(key, value, path, parentContainer) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'json-item';
  itemDiv.dataset.path = path;
  itemDiv.draggable = true;
  
  // Drag and Drop handlers
  itemDiv.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', path);
    itemDiv.classList.add('dragging');
  });
  
  itemDiv.addEventListener('dragend', () => {
    itemDiv.classList.remove('dragging');
    // Remover todas as classes de drag
    document.querySelectorAll('.json-item').forEach(item => {
      item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
    });
  });
  
  itemDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const rect = itemDiv.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    
    // Remover classes anteriores
    document.querySelectorAll('.json-item').forEach(item => {
      item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
    });
    
    if (e.clientY < midY) {
      itemDiv.classList.add('drag-over-top');
    } else {
      itemDiv.classList.add('drag-over-bottom');
    }
  });
  
  itemDiv.addEventListener('dragleave', () => {
    itemDiv.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
  });
  
  itemDiv.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedPath = e.dataTransfer.getData('text/plain');
    
    if (draggedPath === path) return; // Não fazer nada se for o mesmo item
    
    const rect = itemDiv.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const insertBefore = e.clientY < midY;
    
    moveProperty(draggedPath, path, insertBefore);
    
    itemDiv.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
  });
  
  const isNested = typeof value === 'object' && value !== null && !Array.isArray(value);
  const isArray = Array.isArray(value);
  const valueType = getValueType(value);
  
  if (isArray) {
    // Array - mostrar itens do array
    const header = document.createElement('div');
    header.className = 'json-item-header';
    
    const toggle = document.createElement('button');
    toggle.className = 'json-nested-toggle';
    toggle.textContent = '▼';
    toggle.onclick = () => toggleNested(toggle, content);
    
    const label = document.createElement('span');
    label.className = 'json-item-label';
    label.textContent = `${key} [${value.length} itens]`;
    
    const typeBadge = document.createElement('span');
    typeBadge.className = 'json-value-type';
    typeBadge.textContent = 'array';
    
    header.appendChild(toggle);
    header.appendChild(label);
    header.appendChild(typeBadge);
    
    const content = document.createElement('div');
    content.className = 'json-nested-content';
    
    // Botão para adicionar item ao array
    const addBtn = document.createElement('button');
    addBtn.className = 'json-action-btn add';
    addBtn.textContent = '+';
    addBtn.title = 'Adicionar item ao array';
    addBtn.onclick = (e) => {
      e.stopPropagation();
      addArrayItem(path);
    };
    
    // Botão para remover array
    const removeBtn = document.createElement('button');
    removeBtn.className = 'json-action-btn remove';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remover array';
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeProperty(path);
    };
    
    const actions = document.createElement('div');
    actions.className = 'json-actions';
    actions.appendChild(addBtn);
    actions.appendChild(removeBtn);
    header.appendChild(actions);
    
    // Renderizar itens do array
    value.forEach((item, index) => {
      const arrayItem = document.createElement('div');
      arrayItem.className = 'json-item array-item';
      arrayItem.dataset.path = `${path}[${index}]`;
      arrayItem.draggable = true;
      
      // Drag and Drop handlers para arrays
      arrayItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${path}[${index}]`);
        arrayItem.classList.add('dragging');
      });
      
      arrayItem.addEventListener('dragend', () => {
        arrayItem.classList.remove('dragging');
        document.querySelectorAll('.json-item').forEach(item => {
          item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
        });
      });
      
      arrayItem.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        const rect = arrayItem.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        
        document.querySelectorAll('.json-item').forEach(item => {
          item.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
        });
        
        if (e.clientY < midY) {
          arrayItem.classList.add('drag-over-top');
        } else {
          arrayItem.classList.add('drag-over-bottom');
        }
      });
      
      arrayItem.addEventListener('dragleave', () => {
        arrayItem.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
      });
      
      arrayItem.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedPath = e.dataTransfer.getData('text/plain');
        
        if (draggedPath === `${path}[${index}]`) return;
        
        const rect = arrayItem.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const insertBefore = e.clientY < midY;
        
        moveProperty(draggedPath, `${path}[${index}]`, insertBefore);
        
        arrayItem.classList.remove('drag-over', 'drag-over-top', 'drag-over-bottom');
      });
      
      // Ícone de arrastar para arrays
      const dragHandle = document.createElement('span');
      dragHandle.className = 'drag-handle';
      dragHandle.textContent = '☰';
      dragHandle.title = 'Arraste para reordenar';
      dragHandle.draggable = false;
      
      const indexLabel = document.createElement('span');
      indexLabel.className = 'json-key';
      indexLabel.textContent = `[${index}]`;
      
      const valueInput = createValueInput(item, getValueType(item), `${path}[${index}]`);
      
      const typeBadge = document.createElement('span');
      typeBadge.className = 'json-value-type';
      typeBadge.textContent = getValueType(item);
      
      // Botão para remover item do array
      const removeItemBtn = document.createElement('button');
      removeItemBtn.className = 'json-action-btn remove';
      removeItemBtn.textContent = '×';
      removeItemBtn.title = 'Remover item';
      removeItemBtn.onclick = (e) => {
        e.stopPropagation();
        removeArrayItem(path, index);
      };
      
      const keyValueDiv = document.createElement('div');
      keyValueDiv.className = 'json-key-value';
      keyValueDiv.appendChild(dragHandle);
      keyValueDiv.appendChild(indexLabel);
      keyValueDiv.appendChild(valueInput);
      keyValueDiv.appendChild(typeBadge);
      keyValueDiv.appendChild(removeItemBtn);
      
      arrayItem.appendChild(keyValueDiv);
      content.appendChild(arrayItem);
    });
    
    itemDiv.appendChild(header);
    itemDiv.appendChild(content);
    
  } else if (isNested) {
    // Objeto aninhado
    const header = document.createElement('div');
    header.className = 'json-item-header';
    
    // Ícone de arrastar
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = '☰';
    dragHandle.title = 'Arraste para reordenar';
    dragHandle.draggable = false;
    
    const toggle = document.createElement('button');
    toggle.className = 'json-nested-toggle';
    toggle.textContent = '▼';
    toggle.onclick = () => toggleNested(toggle, content);
    
    const label = document.createElement('span');
    label.className = 'json-item-label';
    label.textContent = key;
    
    const typeBadge = document.createElement('span');
    typeBadge.className = 'json-value-type';
    typeBadge.textContent = 'object';
    
    // Botão para adicionar propriedade
    const addBtn = document.createElement('button');
    addBtn.className = 'json-action-btn add';
    addBtn.textContent = '+';
    addBtn.title = 'Adicionar propriedade';
    addBtn.onclick = (e) => {
      e.stopPropagation();
      addNewProperty(path, content);
    };
    
    // Botão para remover objeto
    const removeBtn = document.createElement('button');
    removeBtn.className = 'json-action-btn remove';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remover objeto';
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeProperty(path);
    };
    
    const actions = document.createElement('div');
    actions.className = 'json-actions';
    actions.appendChild(addBtn);
    actions.appendChild(removeBtn);
    
    header.appendChild(dragHandle);
    header.appendChild(toggle);
    header.appendChild(label);
    header.appendChild(typeBadge);
    header.appendChild(actions);
    
    const content = document.createElement('div');
    content.className = 'json-nested-content';
    
    itemDiv.appendChild(header);
    itemDiv.appendChild(content);
    
    // Renderizar conteúdo aninhado
    renderVisualEditor(value, content, path);
    
  } else {
    // Valor simples
    const keyValueDiv = document.createElement('div');
    keyValueDiv.className = 'json-key-value';
    
    // Ícone de arrastar
    const dragHandle = document.createElement('span');
    dragHandle.className = 'drag-handle';
    dragHandle.textContent = '☰';
    dragHandle.title = 'Arraste para reordenar';
    dragHandle.draggable = false;
    
    const keySpan = document.createElement('span');
    keySpan.className = 'json-key';
    keySpan.textContent = key;
    
    const valueInput = createValueInput(value, valueType, path);
    
    const typeBadge = document.createElement('span');
    typeBadge.className = 'json-value-type';
    typeBadge.textContent = valueType;
    
    // Botão para remover propriedade
    const removeBtn = document.createElement('button');
    removeBtn.className = 'json-action-btn remove';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remover propriedade';
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeProperty(path);
    };
    
    keyValueDiv.appendChild(dragHandle);
    keyValueDiv.appendChild(keySpan);
    keyValueDiv.appendChild(valueInput);
    keyValueDiv.appendChild(typeBadge);
    keyValueDiv.appendChild(removeBtn);
    
    itemDiv.appendChild(keyValueDiv);
  }
  
  return itemDiv;
}

// Criar input para valor
function createValueInput(value, type, path) {
  const wrapper = document.createElement('div');
  wrapper.className = 'color-input-wrapper';
  
  if (type === 'color') {
    // Input de cor com preview
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    
    // Converter valor para hex se necessário
    let hexValue = value;
    if (/^#[0-9a-fA-F]{3}$/i.test(value)) {
      // Expandir #RGB para #RRGGBB
      hexValue = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
    } else if (!/^#[0-9a-fA-F]{6}$/i.test(value)) {
      // Se não for hex válido, tentar converter ou usar valor padrão
      hexValue = '#0891b2';
    }
    
    colorInput.value = hexValue;
    
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.className = 'json-value-input';
    textInput.value = value;
    textInput.placeholder = '#RRGGBB ou rgba(...)';
    
    // Event listeners
    colorInput.onchange = (e) => {
      textInput.value = e.target.value;
      updateValueFromVisual(path, e.target.value);
    };
    
    textInput.oninput = (e) => {
      const newValue = e.target.value;
      // Atualizar em tempo real
      updateValueFromVisual(path, newValue);
      
      // Se for hex válido, atualizar color picker
      if (/^#[0-9a-fA-F]{6}$/i.test(newValue)) {
        colorInput.value = newValue;
      } else if (/^#[0-9a-fA-F]{3}$/i.test(newValue)) {
        // Expandir #RGB
        const expanded = '#' + newValue[1] + newValue[1] + newValue[2] + newValue[2] + newValue[3] + newValue[3];
        colorInput.value = expanded;
      }
    };
    
    wrapper.appendChild(colorInput);
    wrapper.appendChild(textInput);
    
  } else if (type === 'boolean') {
    // Checkbox para boolean
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = value === true;
    checkbox.onchange = (e) => updateValueFromVisual(path, e.target.checked);
    checkbox.style.width = '20px';
    checkbox.style.height = '20px';
    wrapper.appendChild(checkbox);
    
  } else if (type === 'number') {
    // Input number com slider para valores pequenos
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '8px';
    container.style.alignItems = 'center';
    container.style.flex = '1';
    
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'json-value-input';
    input.value = value;
    input.step = value % 1 === 0 ? '1' : '0.01';
    input.style.flex = '1';
    input.oninput = (e) => {
      const numValue = e.target.value === '' ? 0 : (e.target.value.includes('.') ? parseFloat(e.target.value) : parseInt(e.target.value));
      if (!isNaN(numValue)) {
        updateValueFromVisual(path, numValue);
        if (slider) {
          slider.value = numValue;
        }
      }
    };
    
    // Slider para valores entre 0 e 100
    let slider = null;
    if (typeof value === 'number' && value >= 0 && value <= 100) {
      slider = document.createElement('input');
      slider.type = 'range';
      slider.min = '0';
      slider.max = '100';
      slider.step = value % 1 === 0 ? '1' : '0.1';
      slider.value = value;
      slider.style.width = '100px';
      slider.oninput = (e) => {
        const numValue = parseFloat(e.target.value);
        input.value = numValue;
        updateValueFromVisual(path, numValue);
      };
      container.insertBefore(slider, input);
    }
    
    container.appendChild(input);
    wrapper.appendChild(container);
    
  } else {
    // Input text para string
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'json-value-input';
    input.value = String(value);
    input.oninput = (e) => {
      // Atualizar em tempo real enquanto digita
      updateValueFromVisual(path, e.target.value);
    };
    input.onblur = (e) => {
      // Ao sair do campo, tentar converter para número se possível
      let newValue = e.target.value;
      if (!isNaN(newValue) && newValue !== '' && newValue.trim() !== '') {
        const numValue = newValue.includes('.') ? parseFloat(newValue) : parseInt(newValue);
        if (!isNaN(numValue)) {
          e.target.value = numValue;
          updateValueFromVisual(path, numValue);
        }
      }
    };
    wrapper.appendChild(input);
  }
  
  return wrapper;
}

// Detectar tipo de valor
function getValueType(value) {
  if (typeof value === 'string') {
    // Detectar cores hex
    if (/^#[0-9a-fA-F]{6}$/i.test(value)) return 'color';
    // Detectar cores rgba/rgb
    if (/^rgba?\(/.test(value)) return 'color';
    // Detectar valores que parecem cores (palavras-chave comuns)
    if (/^(rem|px|em|%|vh|vw|s|ms)$/.test(value)) return 'string';
    return 'string';
  }
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'object' && value !== null) return 'object';
  return 'unknown';
}

// Atualizar valor do JSON a partir do editor visual
function updateValueFromVisual(path, newValue) {
  try {
    const json = JSON.parse(jsonEditor.value);
    
    // Suportar arrays: path[0], path[1], etc
    if (path.includes('[') && path.includes(']')) {
      const arrayMatch = path.match(/^(.+)\[(\d+)\]$/);
      if (arrayMatch) {
        const arrayPath = arrayMatch[1];
        const index = parseInt(arrayMatch[2]);
        const keys = arrayPath ? arrayPath.split('.') : [];
        let current = json;
        
        for (const key of keys) {
          if (!current[key] || typeof current[key] !== 'object') {
            current[key] = [];
          }
          current = current[key];
        }
        
        if (Array.isArray(current)) {
          current[index] = newValue;
        }
      }
    } else {
      // Objeto normal
      const keys = path.split('.');
      let current = json;
      
      // Navegar até o penúltimo nível
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== 'object') {
          current[key] = {};
        }
        current = current[key];
      }
      
      // Atualizar valor
      const lastKey = keys[keys.length - 1];
      current[lastKey] = newValue;
    }
    
    // Atualizar JSON no editor de código
    const newJsonString = JSON.stringify(json, null, 2);
    jsonEditor.value = newJsonString;
    hasUnsavedChanges = newJsonString !== originalContent;
    updateFileIndicator();
    updateEditorInfo();
    
    // Validar JSON (sem mostrar mensagem a cada mudança)
    try {
      JSON.parse(newJsonString);
      jsonEditor.classList.remove('error');
    } catch (e) {
      jsonEditor.classList.add('error');
    }
    
    // Atualizar o input visual que foi modificado (feedback visual)
    const item = document.querySelector(`[data-path="${path}"]`);
    if (item) {
      // Adicionar classe de "modificado" temporariamente
      item.style.background = '#dbeafe';
      setTimeout(() => {
        item.style.background = '';
      }, 300);
    }
    
  } catch (error) {
    console.error('Erro ao atualizar valor:', error);
    updateStatus(`Erro ao atualizar: ${error.message}`, 'error');
    jsonEditor.classList.add('error');
  }
}

// Toggle conteúdo aninhado
function toggleNested(toggle, content) {
  const isCollapsed = content.classList.contains('collapsed');
  if (isCollapsed) {
    content.classList.remove('collapsed');
    toggle.classList.remove('collapsed');
    toggle.textContent = '▼';
  } else {
    content.classList.add('collapsed');
    toggle.classList.add('collapsed');
    toggle.textContent = '▶';
  }
}

// Alternar entre visual e código
function switchToVisual() {
  visualTab.classList.add('active');
  codeTab.classList.remove('active');
  visualEditor.style.display = 'block';
  codeEditor.style.display = 'none';
  
  // Re-renderizar se houver JSON
  if (jsonEditor.value) {
    try {
      const json = JSON.parse(jsonEditor.value);
      renderVisualEditor(json);
    } catch (e) {
      // Ignorar se JSON inválido
    }
  }
}

function switchToCode() {
  codeTab.classList.add('active');
  visualTab.classList.remove('active');
  codeEditor.style.display = 'block';
  visualEditor.style.display = 'none';
}

// Debounce para re-renderizar visual (evitar renderizar a cada tecla)
let renderTimeout = null;
function debounceRender() {
  if (renderTimeout) clearTimeout(renderTimeout);
  renderTimeout = setTimeout(() => {
    if (visualTab.classList.contains('active') && jsonEditor.value) {
      try {
        const json = JSON.parse(jsonEditor.value);
        renderVisualEditor(json);
      } catch (e) {
        // Ignorar se JSON inválido durante digitação
      }
    }
  }, 500); // Aguarda 500ms após última mudança
}

// Event listeners
loadBtn.addEventListener('click', loadFile);
loadFileBtn.addEventListener('click', loadFileFromSystem);
saveBtn.addEventListener('click', saveFile);
buildBtn.addEventListener('click', buildFormats);
formatBtn.addEventListener('click', formatJSON);
validateBtn.addEventListener('click', () => validateJSON(true));
closePreviewBtn.addEventListener('click', closePreview);
visualTab.addEventListener('click', switchToVisual);
codeTab.addEventListener('click', switchToCode);

// Atualizar indicador de arquivo
function updateFileIndicator() {
  if (!currentFile) {
    fileIndicator.style.display = 'none';
    return;
  }
  
  fileIndicator.style.display = 'inline-block';
  const fileName = currentFile.split('/').pop();
  
  if (hasUnsavedChanges) {
    fileIndicator.textContent = `● ${fileName} (não salvo)`;
    fileIndicator.className = 'file-indicator modified';
  } else {
    fileIndicator.textContent = `✓ ${fileName}`;
    fileIndicator.className = 'file-indicator saved';
  }
}

// Atualizar informações do editor (linha/coluna)
function updateEditorInfo() {
  if (!jsonEditor.value) {
    editorInfo.textContent = '';
    return;
  }
  
  const text = jsonEditor.value;
  const cursorPos = jsonEditor.selectionStart;
  const textBeforeCursor = text.substring(0, cursorPos);
  const lines = textBeforeCursor.split('\n');
  const line = lines.length;
  const col = lines[lines.length - 1].length + 1;
  const totalLines = text.split('\n').length;
  const totalChars = text.length;
  
  editorInfo.textContent = `Linha ${line}, Col ${col} • ${totalLines} linhas • ${totalChars} caracteres`;
}

// Detectar mudanças no editor (código)
jsonEditor.addEventListener('input', () => {
  hasUnsavedChanges = jsonEditor.value !== originalContent;
  updateFileIndicator();
  updateEditorInfo();
  validateJSON();
  
  // Sincronizar com visual se estiver ativo (com debounce)
  debounceRender();
});

// Atualizar info ao mover cursor
jsonEditor.addEventListener('keyup', updateEditorInfo);
jsonEditor.addEventListener('click', updateEditorInfo);

// Auto-salvar no localStorage periodicamente
setInterval(() => {
  if (currentFile && jsonEditor.value && hasUnsavedChanges) {
    try {
      JSON.parse(jsonEditor.value); // Só salva se JSON válido
      localStorage.setItem(`token_backup_${currentFile}`, jsonEditor.value);
      localStorage.setItem(`token_backup_time_${currentFile}`, new Date().toISOString());
    } catch (e) {
      // Ignora se JSON inválido
    }
  }
}, 30000); // A cada 30 segundos

// Tentar restaurar backup ao carregar
function tryRestoreBackup() {
  if (currentFile) {
    const backup = localStorage.getItem(`token_backup_${currentFile}`);
    const backupTime = localStorage.getItem(`token_backup_time_${currentFile}`);
    if (backup && backupTime) {
      const time = new Date(backupTime);
      const now = new Date();
      const diffMinutes = (now - time) / (1000 * 60);
      
      if (diffMinutes < 60) { // Backup com menos de 1 hora
        if (confirm(`Encontrado backup não salvo de ${Math.round(diffMinutes)} minutos atrás. Deseja restaurar?`)) {
          jsonEditor.value = backup;
          hasUnsavedChanges = true;
          updateFileIndicator();
          updateEditorInfo();
          validateJSON();
        }
      }
    }
  }
}

// Filtrar editor visual por busca
function filterVisualEditor(searchTerm) {
  const items = visualEditorContent.querySelectorAll('.json-item');
  const term = searchTerm.toLowerCase();
  let visibleCount = 0;
  
  items.forEach(item => {
    const path = item.dataset.path || '';
    const key = item.querySelector('.json-key, .json-item-label')?.textContent || '';
    const value = item.querySelector('.json-value-input, input')?.value || '';
    
    const matches = 
      path.toLowerCase().includes(term) ||
      key.toLowerCase().includes(term) ||
      value.toLowerCase().includes(term);
    
    if (matches) {
      item.style.display = '';
      visibleCount++;
      // Expandir pais para mostrar resultado
      let parent = item.parentElement;
      while (parent && parent.classList.contains('json-nested-content')) {
        parent.style.display = '';
        const toggle = parent.previousElementSibling?.querySelector('.json-nested-toggle');
        if (toggle) {
          toggle.textContent = '▼';
          toggle.classList.remove('collapsed');
          parent.classList.remove('collapsed');
        }
        parent = parent.parentElement;
      }
    } else {
      item.style.display = 'none';
    }
  });
  
  if (searchTerm && visibleCount === 0) {
    const noResults = document.createElement('p');
    noResults.className = 'empty-message';
    noResults.textContent = `Nenhum resultado encontrado para "${searchTerm}"`;
    if (!visualEditorContent.querySelector('.empty-message')) {
      visualEditorContent.appendChild(noResults);
    }
  } else {
    const noResults = visualEditorContent.querySelector('.empty-message');
    if (noResults && noResults.textContent.includes('Nenhum resultado')) {
      noResults.remove();
    }
  }
}

// Busca em tempo real
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.trim();
    if (term) {
      filterVisualEditor(term);
    } else {
      // Mostrar todos quando busca está vazia
      const items = visualEditorContent.querySelectorAll('.json-item');
      items.forEach(item => {
        item.style.display = '';
      });
      const noResults = visualEditorContent.querySelector('.empty-message');
      if (noResults && noResults.textContent.includes('Nenhum resultado')) {
        noResults.remove();
      }
    }
  });
  
  // Limpar busca com Escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      filterVisualEditor('');
      searchInput.blur();
    }
  });
}

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
  // Ctrl+S para salvar
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    if (!saveBtn.disabled) {
      saveFile();
    }
  }
  
  // Ctrl+F para buscar (no editor visual)
  if (e.ctrlKey && e.key === 'f' && visualTab.classList.contains('active')) {
    e.preventDefault();
    searchInput?.focus();
    searchInput?.select();
  }
  
  // Ctrl+Shift+F para formatar
  if (e.ctrlKey && e.shiftKey && e.key === 'F') {
    e.preventDefault();
    formatJSON();
  }
  
  // Ctrl+B para build
  if (e.ctrlKey && e.key === 'b') {
    e.preventDefault();
    if (!buildBtn.disabled) {
      buildFormats();
    }
  }
  
  // Tab para indentação
  if (e.key === 'Tab' && e.target === jsonEditor) {
    e.preventDefault();
    const start = jsonEditor.selectionStart;
    const end = jsonEditor.selectionEnd;
    const value = jsonEditor.value;
    
    if (e.shiftKey) {
      // Shift+Tab: remover indentação
      const lines = value.substring(0, start).split('\n');
      const currentLine = lines[lines.length - 1];
      if (currentLine.startsWith('  ')) {
        const newValue = value.substring(0, start - 2) + value.substring(start);
        jsonEditor.value = newValue;
        jsonEditor.setSelectionRange(start - 2, end - 2);
      }
    } else {
      // Tab: adicionar indentação
      const newValue = value.substring(0, start) + '  ' + value.substring(start);
      jsonEditor.value = newValue;
      jsonEditor.setSelectionRange(start + 2, end + 2);
    }
    
    hasUnsavedChanges = jsonEditor.value !== originalContent;
    updateFileIndicator();
  }
});

// ============================================
// FUNÇÕES DE GERAÇÃO DE FORMATOS (100% LOCAL)
// ============================================

// Converter camelCase para kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Converter kebab-case para camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Flatten objeto aninhado para CSS vars
function flattenToCSSVars(obj, prefix = '', separator = '-') {
  const vars = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = toKebabCase(key);
    const varName = prefix ? `${prefix}${separator}${cssKey}` : cssKey;
    
    if (typeof value === 'string') {
      vars.push(`  --${varName}: ${value};`);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      vars.push(...flattenToCSSVars(value, varName, separator));
    }
  }
  
  return vars;
}

// Gerar CSS Variables
function generateCSS() {
  const tokens = loadedTokens;
  
  if (!tokens.colors.light || !tokens.colors.dark) {
    throw new Error('Cores light e dark são necessárias para gerar CSS');
  }
  
  const lines = [
    '/**',
    ' * CSS Custom Properties (CSS Variables)',
    ' * ',
    ' * Generated from design tokens for use in any CSS context.',
    ' * Supports light and dark themes via .dark class.',
    ' * ',
    ' * @fileoverview Global CSS variables for Rainer Design System',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' */',
    '',
    ':root {',
    '  /* ===== LIGHT THEME COLORS ===== */',
    '',
  ];
  
  // Light theme
  if (tokens.colors.light.background) {
    lines.push('  /* Background */');
    lines.push(...flattenToCSSVars(tokens.colors.light.background, 'color-background'));
    lines.push('');
  }
  
  if (tokens.colors.light.surface) {
    lines.push('  /* Surface */');
    lines.push(...flattenToCSSVars(tokens.colors.light.surface, 'color-surface'));
    lines.push('');
  }
  
  if (tokens.colors.light.text) {
    lines.push('  /* Text */');
    lines.push(...flattenToCSSVars(tokens.colors.light.text, 'color-text'));
    lines.push('');
  }
  
  if (tokens.colors.light.border) {
    lines.push('  /* Border */');
    lines.push(...flattenToCSSVars(tokens.colors.light.border, 'color-border'));
    lines.push('');
  }
  
  if (tokens.colors.light.brand) {
    lines.push('  /* Brand */');
    lines.push(...flattenToCSSVars(tokens.colors.light.brand, 'color-brand'));
    lines.push('');
  }
  
  if (tokens.colors.light.status) {
    lines.push('  /* Status */');
    lines.push(...flattenToCSSVars(tokens.colors.light.status, 'color-status'));
    lines.push('');
  }
  
  if (tokens.shadows && tokens.shadows.light) {
    lines.push('  /* Shadows */');
    lines.push(...flattenToCSSVars(tokens.shadows.light, 'shadow'));
    lines.push('');
  }
  
  if (tokens.typography && tokens.typography.fontFamily) {
    lines.push('  /* Typography */');
    lines.push(...flattenToCSSVars(tokens.typography.fontFamily, 'font'));
    lines.push('');
  }
  
  if (tokens.radius) {
    lines.push('  /* Border Radius */');
    lines.push(...flattenToCSSVars(tokens.radius, 'radius'));
    lines.push('');
  }
  
  lines.push('}');
  lines.push('');
  lines.push('/* ===== DARK THEME (CYBERPUNK) ===== */');
  lines.push('.dark {');
  
  // Dark theme
  if (tokens.colors.dark.background) {
    lines.push('  /* Background */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.background, 'color-background'));
    lines.push('');
  }
  
  if (tokens.colors.dark.surface) {
    lines.push('  /* Surface */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.surface, 'color-surface'));
    lines.push('');
  }
  
  if (tokens.colors.dark.text) {
    lines.push('  /* Text */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.text, 'color-text'));
    lines.push('');
  }
  
  if (tokens.colors.dark.border) {
    lines.push('  /* Border */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.border, 'color-border'));
    lines.push('');
  }
  
  if (tokens.colors.dark.brand) {
    lines.push('  /* Brand */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.brand, 'color-brand'));
    lines.push('');
  }
  
  if (tokens.colors.dark.status) {
    lines.push('  /* Status */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.status, 'color-status'));
    lines.push('');
  }
  
  if (tokens.shadows && tokens.shadows.dark) {
    lines.push('  /* Shadows */');
    const darkShadows = { ...tokens.shadows.dark };
    if (darkShadows.glow) {
      const glow = darkShadows.glow;
      delete darkShadows.glow;
      lines.push(...flattenToCSSVars(darkShadows, 'shadow'));
      lines.push('');
      lines.push('  /* Glow Effects */');
      lines.push(...flattenToCSSVars(glow, 'shadow-glow'));
    } else {
      lines.push(...flattenToCSSVars(darkShadows, 'shadow'));
    }
    lines.push('');
  }
  
  if (tokens.colors.dark.gradients) {
    lines.push('  /* Gradients */');
    lines.push(...flattenToCSSVars(tokens.colors.dark.gradients, 'gradient'));
    lines.push('');
  }
  
  lines.push('}');
  lines.push('');
  
  return lines.join('\n');
}

// Converter objeto para formato Tailwind
function toTailwindObject(obj, indent = 8) {
  const spaces = ' '.repeat(indent);
  const lines = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = toCamelCase(key);
    
    if (typeof value === 'string') {
      lines.push(`${spaces}${camelKey}: '${value}',`);
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      lines.push(`${spaces}${camelKey}: {`);
      lines.push(toTailwindObject(value, indent + 2));
      lines.push(`${spaces}},`);
    }
  }
  
  return lines.join('\n');
}

// Gerar Tailwind Config
function generateTailwindConfig() {
  const tokens = loadedTokens;
  
  if (!tokens.colors.light) {
    throw new Error('Tokens de cores são necessários para gerar Tailwind config');
  }
  
  const lines = [
    '/**',
    ' * @fileoverview Configuração do Tailwind CSS gerada a partir dos design tokens',
    ' * ',
    ' * @generated This file is auto-generated. Do not edit manually.',
    ' * @source tokens/*.json',
    ' */',
    '',
    "import { tokens } from '@rainersoft/design-tokens';",
    '',
    'export const tailwindConfig = {',
    '  theme: {',
    '    extend: {',
    '      colors: {',
  ];
  
  // Colors
  if (tokens.colors.light.primary) {
    lines.push('        primary: {');
    lines.push(toTailwindObject(tokens.colors.light.primary, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.secondary) {
    lines.push('        secondary: {');
    lines.push(toTailwindObject(tokens.colors.light.secondary, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.accent) {
    lines.push('        accent: {');
    lines.push(toTailwindObject(tokens.colors.light.accent, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.background) {
    lines.push('        background: {');
    lines.push(toTailwindObject(tokens.colors.light.background, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.surface) {
    lines.push('        surface: {');
    lines.push(toTailwindObject(tokens.colors.light.surface, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.text) {
    lines.push('        text: {');
    lines.push(toTailwindObject(tokens.colors.light.text, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.border) {
    lines.push('        border: {');
    lines.push(toTailwindObject(tokens.colors.light.border, 10));
    lines.push('        },');
  }
  
  if (tokens.colors.light.status) {
    const status = tokens.colors.light.status;
    if (status.success) {
      lines.push('        success: {');
      lines.push(toTailwindObject(status.success, 10));
      lines.push('        },');
    }
    if (status.warning) {
      lines.push('        warning: {');
      lines.push(toTailwindObject(status.warning, 10));
      lines.push('        },');
    }
    if (status.error) {
      lines.push('        error: {');
      lines.push(toTailwindObject(status.error, 10));
      lines.push('        },');
    }
    if (status.info) {
      lines.push('        info: {');
      lines.push(toTailwindObject(status.info, 10));
      lines.push('        },');
    }
  }
  
  lines.push('      },');
  lines.push('      fontFamily: {');
  
  // Font families
  if (tokens.typography && tokens.typography.fontFamily) {
    const fontFamily = tokens.typography.fontFamily;
    if (fontFamily.sans) {
      lines.push(`        sans: ${JSON.stringify(fontFamily.sans.split(', '))},`);
    }
    if (fontFamily.serif) {
      lines.push(`        serif: ${JSON.stringify(fontFamily.serif.split(', '))},`);
    }
    if (fontFamily.mono) {
      lines.push(`        mono: ${JSON.stringify(fontFamily.mono.split(', '))},`);
    }
  }
  
  lines.push('      },');
  
  if (tokens.typography) {
    lines.push('      fontSize: tokens.typography.fontSize,');
    lines.push('      fontWeight: tokens.typography.fontWeight,');
    lines.push('      lineHeight: tokens.typography.lineHeight,');
    lines.push('      letterSpacing: tokens.typography.letterSpacing,');
  }
  
  if (tokens.spacing) {
    lines.push('      spacing: tokens.spacing,');
  }
  
  if (tokens.radius) {
    lines.push('      borderRadius: tokens.radius,');
  }
  
  // Box shadows
  lines.push('      boxShadow: {');
  if (tokens.shadows && tokens.shadows.light) {
    lines.push('        ...tokens.shadows.light,');
  }
  if (tokens.shadows && tokens.shadows.dark && tokens.shadows.dark.glow) {
    const glow = tokens.shadows.dark.glow;
    for (const [key, value] of Object.entries(glow)) {
      lines.push(`        'glow-${key}': '${value}',`);
    }
  }
  lines.push('      },');
  
  // Animations
  if (tokens.animations) {
    lines.push('      animation: {');
    for (const [key, animation] of Object.entries(tokens.animations)) {
      const animationValue = `${animation.name} ${animation.duration} ${animation.timingFunction}`;
      lines.push(`        '${key}': '${animationValue}',`);
    }
    lines.push('      },');
    
    lines.push('      keyframes: {');
    for (const [, animation] of Object.entries(tokens.animations)) {
      lines.push(`        '${animation.name}': {`);
      for (const [frame, properties] of Object.entries(animation.keyframes)) {
        lines.push(`          '${frame}': {`);
        for (const [prop, value] of Object.entries(properties)) {
          const valueStr = typeof value === 'string' ? `'${value}'` : value;
          lines.push(`            ${prop}: ${valueStr},`);
        }
        lines.push(`          },`);
      }
      lines.push(`        },`);
    }
    lines.push('      },');
  }
  
  lines.push('    },');
  lines.push('  },');
  lines.push("  darkMode: 'class',");
  lines.push('} as const;');
  lines.push('');
  lines.push('export default tailwindConfig;');
  lines.push('');
  
  return lines.join('\n');
}

// Gerar Tokens JSON Consolidado
function generateTokensJSON() {
  const tokens = loadedTokens;
  
  const consolidated = {
    $schema: 'https://json.schemastore.org/rainer-design-tokens.json',
    name: '@rainersoft/design-tokens',
    version: '2.0.0',
    description: 'Universal design tokens export for Rainer Design System',
    $generated: 'This file is auto-generated. Do not edit manually.',
    $source: 'tokens/*.json',
    colors: {
      light: tokens.colors.light ? {
        $type: 'color',
        $value: 'See tokens/colors/light.json',
        $path: 'tokens/colors/light.json',
      } : null,
      dark: tokens.colors.dark ? {
        $type: 'color',
        $value: 'See tokens/colors/dark.json',
        $path: 'tokens/colors/dark.json',
      } : null,
    },
    typography: tokens.typography ? {
      $type: 'typography',
      $value: 'See tokens/typography.json',
      $path: 'tokens/typography.json',
    } : null,
    spacing: tokens.spacing ? {
      $type: 'dimension',
      $value: 'See tokens/spacing.json',
      $path: 'tokens/spacing.json',
    } : null,
    radius: tokens.radius ? {
      $type: 'dimension',
      $value: 'See tokens/radius.json',
      $path: 'tokens/radius.json',
    } : null,
    shadows: tokens.shadows ? {
      $type: 'shadow',
      $value: 'See tokens/shadows.json',
      $path: 'tokens/shadows.json',
    } : null,
    animations: tokens.animations ? {
      $type: 'animation',
      $value: 'See tokens/animations.json',
      $path: 'tokens/animations.json',
    } : null,
    meta: {
      repository: 'https://github.com/RainerTeixeira/rainer-design-tokens',
      author: 'Rainer Teixeira',
      license: 'MIT',
      generatedAt: new Date().toISOString(),
    },
  };
  
  // Remover nulls
  Object.keys(consolidated).forEach(key => {
    if (consolidated[key] === null) {
      delete consolidated[key];
    }
  });
  
  return JSON.stringify(consolidated, null, 2);
}

// Avisar antes de sair se houver mudanças não salvas
window.addEventListener('beforeunload', (e) => {
  if (hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = 'Você tem alterações não salvas. Deseja realmente sair?';
    return e.returnValue;
  }
});

// Inicialização
updateStatus('Pronto para começar', 'info');
updateEditorInfo();

