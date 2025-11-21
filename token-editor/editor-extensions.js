// Token Editor Extensions - Novas Funcionalidades
// Este arquivo contém extensões para o editor.js principal

// ============================================================================
// 1. VALIDAÇÃO DE SCHEMA JSON
// ============================================================================

// Schemas conhecidos para validação
const tokenSchemas = {
  'colors/light.json': {
    required: ['colors'],
    colorStructure: {
      primary: ['base', 'hover', 'active', 'disabled'],
      secondary: ['base', 'hover', 'active', 'disabled'],
      accent: ['base', 'hover', 'active', 'disabled']
    }
  },
  'colors/dark.json': {
    required: ['colors'],
    colorStructure: {
      primary: ['base', 'hover', 'active', 'disabled'],
      secondary: ['base', 'hover', 'active', 'disabled'],
      accent: ['base', 'hover', 'active', 'disabled']
    }
  },
  'typography.json': {
    required: ['typography'],
    typographyStructure: {
      fontFamily: true,
      fontSize: true,
      fontWeight: true,
      lineHeight: true
    }
  },
  'spacing.json': {
    required: ['spacing'],
    spacingPattern: /^(0|px|\d+(\.\d+)?)$/
  },
  'radius.json': {
    required: ['radius']
  },
  'shadows.json': {
    required: ['shadows']
  },
  'animations.json': {
    required: ['animations']
  }
};

// Validar schema JSON baseado no tipo de arquivo
function validateSchema(json, filePath) {
  const errors = [];
  const warnings = [];
  
  if (!json || typeof json !== 'object') {
    return { valid: false, errors: ['JSON deve ser um objeto'], warnings: [] };
  }
  
  // Detectar tipo de arquivo
  let schema = null;
  for (const [pattern, schemaDef] of Object.entries(tokenSchemas)) {
    if (filePath.includes(pattern)) {
      schema = schemaDef;
      break;
    }
  }
  
  if (!schema) {
    return { valid: true, errors: [], warnings: ['Schema não encontrado para este tipo de arquivo'] };
  }
  
  // Validar propriedades obrigatórias
  for (const required of schema.required) {
    if (!json[required]) {
      errors.push(`Propriedade obrigatória ausente: "${required}"`);
    }
  }
  
  // Validação específica para cores
  if (schema.colorStructure && json.colors) {
    for (const [colorName, requiredProps] of Object.entries(schema.colorStructure)) {
      if (json.colors[colorName]) {
        for (const prop of requiredProps) {
          if (!json.colors[colorName][prop]) {
            warnings.push(`Cor "${colorName}" está faltando a propriedade "${prop}"`);
          }
        }
      }
    }
  }
  
  // Validação específica para tipografia
  if (schema.typographyStructure && json.typography) {
    for (const [prop, required] of Object.entries(schema.typographyStructure)) {
      if (required && !json.typography[prop]) {
        warnings.push(`Tipografia está faltando a propriedade "${prop}"`);
      }
    }
  }
  
  // Validar formato de cores hex
  if (json.colors) {
    const validateColor = (value, path) => {
      if (typeof value === 'string') {
        if (value.startsWith('#')) {
          if (!/^#[0-9a-fA-F]{6}$/.test(value) && !/^#[0-9a-fA-F]{3}$/.test(value)) {
            warnings.push(`Cor inválida em "${path}": "${value}" (deve ser #RRGGBB ou #RGB)`);
          }
        } else if (value.startsWith('rgba') || value.startsWith('rgb')) {
          // Validação básica de rgba/rgb
          if (!/^rgba?\([^)]+\)$/.test(value)) {
            warnings.push(`Formato de cor inválido em "${path}": "${value}"`);
          }
        }
      }
    };
    
    const validateColorObject = (obj, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          validateColorObject(value, path);
        } else {
          validateColor(value, path);
        }
      }
    };
    
    validateColorObject(json.colors, 'colors');
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

// Função melhorada de validação JSON com schema
function validateJSONWithSchema(showSuccess = false) {
  try {
    const content = jsonEditor.value.trim();
    if (!content) {
      jsonEditor.classList.remove('error');
      return;
    }
    
    const json = JSON.parse(content);
    jsonEditor.classList.remove('error');
    
    // Validação de schema
    const schemaResult = validateSchema(json, currentFile || '');
    
    if (schemaResult.valid) {
      if (showSuccess) {
        let message = 'JSON válido ✓';
        if (schemaResult.warnings.length > 0) {
          message += ` (${schemaResult.warnings.length} aviso(s))`;
        }
        updateStatus(message, schemaResult.warnings.length > 0 ? 'warning' : 'success');
      }
      
      // Mostrar avisos se houver
      if (schemaResult.warnings.length > 0) {
        console.warn('Avisos de validação:', schemaResult.warnings);
      }
    } else {
      jsonEditor.classList.add('error');
      const errorMsg = schemaResult.errors.join('; ');
      updateStatus(`Erros de schema: ${errorMsg}`, 'error');
      return;
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

// ============================================================================
// 2. PREVIEW VISUAL DOS TOKENS
// ============================================================================

// Criar preview visual dos tokens
function createTokenPreview(json, filePath) {
  const preview = document.createElement('div');
  preview.className = 'token-preview';
  preview.innerHTML = '<h3>👁️ Preview Visual</h3>';
  
  // Preview de cores
  if (json.colors) {
    const colorsPreview = document.createElement('div');
    colorsPreview.className = 'preview-section';
    colorsPreview.innerHTML = '<h4>🎨 Cores</h4>';
    
    const colorsGrid = document.createElement('div');
    colorsGrid.className = 'colors-grid';
    
    const renderColor = (name, value, path = '') => {
      if (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgba') || value.startsWith('rgb'))) {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.innerHTML = `
          <div class="color-swatch" style="background-color: ${value}"></div>
          <div class="color-info">
            <div class="color-name">${path || name}</div>
            <div class="color-value">${value}</div>
          </div>
        `;
        colorsGrid.appendChild(colorItem);
      } else if (typeof value === 'object' && value !== null) {
        for (const [key, val] of Object.entries(value)) {
          renderColor(key, val, path ? `${path}.${key}` : key);
        }
      }
    };
    
    for (const [key, value] of Object.entries(json.colors)) {
      renderColor(key, value, key);
    }
    
    colorsPreview.appendChild(colorsGrid);
    preview.appendChild(colorsPreview);
  }
  
  // Preview de tipografia
  if (json.typography) {
    const typoPreview = document.createElement('div');
    typoPreview.className = 'preview-section';
    typoPreview.innerHTML = '<h4>📝 Tipografia</h4>';
    
    if (json.typography.fontSize) {
      const fontSizeDemo = document.createElement('div');
      fontSizeDemo.className = 'typography-demo';
      
      for (const [size, value] of Object.entries(json.typography.fontSize)) {
        const demoItem = document.createElement('div');
        demoItem.className = 'typography-item';
        demoItem.style.fontSize = value;
        demoItem.textContent = `Tamanho ${size}: ${value}`;
        fontSizeDemo.appendChild(demoItem);
      }
      
      typoPreview.appendChild(fontSizeDemo);
    }
    
    if (json.typography.fontFamily) {
      const fontFamilyDemo = document.createElement('div');
      fontFamilyDemo.className = 'typography-demo';
      
      for (const [name, value] of Object.entries(json.typography.fontFamily)) {
        const demoItem = document.createElement('div');
        demoItem.className = 'typography-item';
        demoItem.style.fontFamily = value;
        demoItem.textContent = `Fonte ${name}: ${value}`;
        fontFamilyDemo.appendChild(demoItem);
      }
      
      typoPreview.appendChild(fontFamilyDemo);
    }
    
    preview.appendChild(typoPreview);
  }
  
  // Preview de espaçamento
  if (json.spacing) {
    const spacingPreview = document.createElement('div');
    spacingPreview.className = 'preview-section';
    spacingPreview.innerHTML = '<h4>📏 Espaçamento</h4>';
    
    const spacingGrid = document.createElement('div');
    spacingGrid.className = 'spacing-grid';
    
    for (const [name, value] of Object.entries(json.spacing)) {
      const spacingItem = document.createElement('div');
      spacingItem.className = 'spacing-item';
      spacingItem.innerHTML = `
        <div class="spacing-bar" style="width: ${value}"></div>
        <div class="spacing-label">${name}: ${value}</div>
      `;
      spacingGrid.appendChild(spacingItem);
    }
    
    spacingPreview.appendChild(spacingGrid);
    preview.appendChild(spacingPreview);
  }
  
  return preview;
}

// Mostrar preview visual
function showTokenPreview() {
  try {
    const json = JSON.parse(jsonEditor.value);
    const preview = createTokenPreview(json, currentFile);
    
    // Adicionar preview ao container visual
    const existingPreview = document.getElementById('tokenPreview');
    if (existingPreview) {
      existingPreview.remove();
    }
    
    preview.id = 'tokenPreview';
    visualEditorContent.insertBefore(preview, visualEditorContent.firstChild);
  } catch (error) {
    console.error('Erro ao criar preview:', error);
  }
}

// ============================================================================
// 3. HISTÓRICO DE ALTERAÇÕES
// ============================================================================

// Histórico de alterações
let changeHistory = [];
let historyIndex = -1;
const MAX_HISTORY = 50;

// Salvar estado no histórico
function saveToHistory(content) {
  // Remover estados futuros se estivermos no meio do histórico
  if (historyIndex < changeHistory.length - 1) {
    changeHistory = changeHistory.slice(0, historyIndex + 1);
  }
  
  // Adicionar novo estado
  changeHistory.push({
    content: content,
    timestamp: new Date().toISOString(),
    file: currentFile
  });
  
  // Limitar tamanho do histórico
  if (changeHistory.length > MAX_HISTORY) {
    changeHistory.shift();
  } else {
    historyIndex++;
  }
  
  // Salvar no localStorage
  localStorage.setItem('tokenEditor_history', JSON.stringify(changeHistory));
  localStorage.setItem('tokenEditor_historyIndex', historyIndex.toString());
}

// Carregar histórico do localStorage
function loadHistory() {
  const saved = localStorage.getItem('tokenEditor_history');
  const savedIndex = localStorage.getItem('tokenEditor_historyIndex');
  
  if (saved) {
    try {
      changeHistory = JSON.parse(saved);
      historyIndex = savedIndex ? parseInt(savedIndex) : changeHistory.length - 1;
    } catch (e) {
      changeHistory = [];
      historyIndex = -1;
    }
  }
}

// Navegar no histórico (undo/redo)
function navigateHistory(direction) {
  if (direction === 'undo' && historyIndex > 0) {
    historyIndex--;
    const state = changeHistory[historyIndex];
    jsonEditor.value = state.content;
    // Atualizar editor visual se estiver na tab visual
    if (visualTab.classList.contains('active')) {
      debounceRender();
    }
    updateStatus('Desfeito', 'info');
  } else if (direction === 'redo' && historyIndex < changeHistory.length - 1) {
    historyIndex++;
    const state = changeHistory[historyIndex];
    jsonEditor.value = state.content;
    // Atualizar editor visual se estiver na tab visual
    if (visualTab.classList.contains('active')) {
      debounceRender();
    }
    updateStatus('Refeito', 'info');
  }
}

// Comparar versões
function compareVersions(index1, index2) {
  if (index1 < 0 || index2 < 0 || index1 >= changeHistory.length || index2 >= changeHistory.length) {
    return null;
  }
  
  const v1 = changeHistory[index1].content;
  const v2 = changeHistory[index2].content;
  
  // Comparação simples (pode ser melhorada com diff library)
  const lines1 = v1.split('\n');
  const lines2 = v2.split('\n');
  
  const diff = [];
  const maxLines = Math.max(lines1.length, lines2.length);
  
  for (let i = 0; i < maxLines; i++) {
    const line1 = lines1[i] || '';
    const line2 = lines2[i] || '';
    
    if (line1 !== line2) {
      diff.push({
        line: i + 1,
        old: line1,
        new: line2
      });
    }
  }
  
  return diff;
}

// ============================================================================
// 4. SUPORTE A MÚLTIPLOS ARQUIVOS
// ============================================================================

// Gerenciamento de múltiplos arquivos
let openFiles = [];
let activeFileIndex = 0;

// Estrutura de arquivo aberto
function createFileTab(filePath, content) {
  return {
    path: filePath,
    content: content,
    originalContent: content,
    hasChanges: false,
    history: []
  };
}

// Adicionar arquivo
function addFile(filePath, content) {
  const file = createFileTab(filePath, content);
  openFiles.push(file);
  activeFileIndex = openFiles.length - 1;
  updateFileTabs();
  return file;
}

// Remover arquivo
function removeFile(index) {
  if (openFiles[index].hasChanges) {
    if (!confirm('Arquivo tem alterações não salvas. Deseja realmente fechar?')) {
      return false;
    }
  }
  
  openFiles.splice(index, 1);
  
  if (activeFileIndex >= openFiles.length) {
    activeFileIndex = openFiles.length - 1;
  }
  
  if (openFiles.length > 0) {
    switchToFile(activeFileIndex);
  } else {
    currentFile = '';
    jsonEditor.value = '';
    updateValueFromCode();
  }
  
  updateFileTabs();
  return true;
}

// Trocar para arquivo
function switchToFile(index) {
  if (index < 0 || index >= openFiles.length) return;
  
  // Salvar estado atual
  if (openFiles[activeFileIndex]) {
    openFiles[activeFileIndex].content = jsonEditor.value;
  }
  
  // Carregar novo arquivo
  activeFileIndex = index;
  const file = openFiles[index];
  currentFile = file.path;
  jsonEditor.value = file.content;
  originalContent = file.originalContent;
  hasUnsavedChanges = file.hasChanges;
  
  // Atualizar editor visual se estiver na tab visual
  if (visualTab.classList.contains('active')) {
    debounceRender();
  }
  updateFileIndicator();
}

// Atualizar tabs de arquivos
function updateFileTabs() {
  // Esta função será implementada quando adicionarmos a UI de tabs
  // Por enquanto, apenas mantém o estado interno
}

// Mostrar painel de histórico
function showHistoryPanel() {
  let panel = document.getElementById('historyPanel');
  
  if (!panel) {
    // Criar painel se não existir
    panel = document.createElement('div');
    panel.id = 'historyPanel';
    panel.className = 'history-panel';
    panel.innerHTML = `
      <div class="history-header">
        <h3>📜 Histórico de Alterações</h3>
        <button class="btn btn-secondary" onclick="closeHistoryPanel()">✕ Fechar</button>
      </div>
      <div class="history-list" id="historyList"></div>
    `;
    document.body.appendChild(panel);
  }
  
  // Atualizar lista
  updateHistoryList();
  
  // Mostrar painel
  panel.classList.add('open');
}

// Fechar painel de histórico
function closeHistoryPanel() {
  const panel = document.getElementById('historyPanel');
  if (panel) {
    panel.classList.remove('open');
  }
}

// Atualizar lista de histórico
function updateHistoryList() {
  const list = document.getElementById('historyList');
  if (!list) return;
  
  list.innerHTML = '';
  
  if (changeHistory.length === 0) {
    list.innerHTML = '<p style="padding: 20px; color: #6c757d;">Nenhum histórico disponível</p>';
    return;
  }
  
  // Mostrar histórico em ordem reversa (mais recente primeiro)
  for (let i = changeHistory.length - 1; i >= 0; i--) {
    const item = changeHistory[i];
    const historyItem = document.createElement('div');
    historyItem.className = `history-item ${i === historyIndex ? 'active' : ''}`;
    
    const date = new Date(item.timestamp);
    const timeStr = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = date.toLocaleDateString('pt-BR');
    
    historyItem.innerHTML = `
      <div style="font-weight: 600; color: #212529;">${item.file || 'Sem arquivo'}</div>
      <div class="history-timestamp">${dateStr} ${timeStr}</div>
    `;
    
    historyItem.addEventListener('click', () => {
      if (i !== historyIndex) {
        historyIndex = i;
        jsonEditor.value = item.content;
        if (visualTab.classList.contains('active')) {
          debounceRender();
        }
        updateHistoryList();
        updateStatus(`Restaurado para versão de ${dateStr} ${timeStr}`, 'info');
      }
    });
    
    list.appendChild(historyItem);
  }
}

// Fechar painel ao clicar fora
document.addEventListener('click', (e) => {
  const panel = document.getElementById('historyPanel');
  const historyBtn = document.getElementById('historyBtn');
  
  if (panel && panel.classList.contains('open')) {
    if (!panel.contains(e.target) && e.target !== historyBtn) {
      closeHistoryPanel();
    }
  }
});

// ============================================================================
// EXPORTAR FUNÇÕES PARA USO GLOBAL
// ============================================================================

// As funções serão adicionadas ao escopo global quando este arquivo for carregado
// após o editor.js principal

