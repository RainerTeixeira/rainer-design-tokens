// Novos Formatos de Exportação - Token Editor
// Figma Tokens, Android XML, iOS Swift

// Funções utilitárias (usar as do editor.js se disponíveis)
function toKebabCaseLocal(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCaseLocal(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Usar funções do editor.js se disponíveis globalmente
// Caso contrário, usar as funções locais
const useToKebabCase = (str) => {
  if (typeof window !== 'undefined' && window.toKebabCase) {
    return window.toKebabCase(str);
  }
  return toKebabCaseLocal(str);
};

const useToCamelCase = (str) => {
  if (typeof window !== 'undefined' && window.toCamelCase) {
    return window.toCamelCase(str);
  }
  return toCamelCaseLocal(str);
};

// ============================================================================
// 1. FIGMA TOKENS EXPORT
// ============================================================================

function generateFigmaTokens() {
  const tokens = loadedTokens;
  
  const figmaTokens = {
    $schema: "https://schemas.figma.com/tokens/v1",
    $version: "1.0.0",
    tokens: {}
  };
  
  // Cores
  if (tokens.colors && tokens.colors.light) {
    figmaTokens.tokens.color = {};
    
    const flattenColors = (obj, prefix = '') => {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}/${key}` : key;
        if (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgba') || value.startsWith('rgb'))) {
          result[newKey] = {
            $type: 'color',
            $value: value
          };
        } else if (typeof value === 'object' && value !== null) {
          Object.assign(result, flattenColors(value, newKey));
        }
      }
      return result;
    };
    
    figmaTokens.tokens.color = flattenColors(tokens.colors.light);
  }
  
  // Tipografia
  if (tokens.typography) {
    figmaTokens.tokens.typography = {};
    
    if (tokens.typography.fontSize) {
      for (const [key, value] of Object.entries(tokens.typography.fontSize)) {
        figmaTokens.tokens.typography[`fontSize/${key}`] = {
          $type: 'dimension',
          $value: value
        };
      }
    }
    
    if (tokens.typography.fontFamily) {
      for (const [key, value] of Object.entries(tokens.typography.fontFamily)) {
        figmaTokens.tokens.typography[`fontFamily/${key}`] = {
          $type: 'string',
          $value: value
        };
      }
    }
    
    if (tokens.typography.fontWeight) {
      for (const [key, value] of Object.entries(tokens.typography.fontWeight)) {
        figmaTokens.tokens.typography[`fontWeight/${key}`] = {
          $type: 'number',
          $value: parseInt(value) || value
        };
      }
    }
  }
  
  // Espaçamento
  if (tokens.spacing) {
    figmaTokens.tokens.spacing = {};
    for (const [key, value] of Object.entries(tokens.spacing)) {
      figmaTokens.tokens.spacing[key] = {
        $type: 'dimension',
        $value: value
      };
    }
  }
  
  // Radius
  if (tokens.radius) {
    figmaTokens.tokens.borderRadius = {};
    for (const [key, value] of Object.entries(tokens.radius)) {
      figmaTokens.tokens.borderRadius[key] = {
        $type: 'borderRadius',
        $value: value
      };
    }
  }
  
  return JSON.stringify(figmaTokens, null, 2);
}

// ============================================================================
// 2. ANDROID XML EXPORT
// ============================================================================

function generateAndroidXML() {
  const tokens = loadedTokens;
  const files = {};
  
  // colors.xml
  if (tokens.colors && tokens.colors.light) {
    let colorsXML = '<?xml version="1.0" encoding="utf-8"?>\n';
    colorsXML += '<resources>\n';
    colorsXML += '    <!-- Colors - Light Theme -->\n';
    
    const addColors = (obj, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const name = prefix ? `${prefix}_${key}` : key;
        if (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgba') || value.startsWith('rgb'))) {
          // Converter rgba para formato Android
          let androidColor = value;
          if (value.startsWith('rgba')) {
            const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const r = parseInt(match[1]);
              const g = parseInt(match[2]);
              const b = parseInt(match[3]);
              const a = match[4] ? Math.round(parseFloat(match[4]) * 255) : 255;
              androidColor = `#${a.toString(16).padStart(2, '0')}${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            }
          }
          const xmlName = useToKebabCase(name).replace(/-/g, '_');
          colorsXML += `    <color name="${xmlName}">${androidColor}</color>\n`;
        } else if (typeof value === 'object' && value !== null) {
          addColors(value, name);
        }
      }
    };
    
    addColors(tokens.colors.light);
    colorsXML += '</resources>\n';
    files['colors.xml'] = colorsXML;
  }
  
  // dimens.xml
  if (tokens.spacing) {
    let dimensXML = '<?xml version="1.0" encoding="utf-8"?>\n';
    dimensXML += '<resources>\n';
    dimensXML += '    <!-- Spacing -->\n';
    
    for (const [key, value] of Object.entries(tokens.spacing)) {
      // Converter rem/px para dp (Android)
      let dpValue = value;
      if (value.endsWith('rem')) {
        const rem = parseFloat(value);
        dpValue = `${(rem * 16)}dp`; // Assumindo 16px = 1rem
      } else if (value.endsWith('px')) {
        const px = parseFloat(value);
        dpValue = `${px}dp`; // Simplificado - em produção, converter px para dp
      }
      
      const xmlName = `spacing_${useToKebabCase(key).replace(/-/g, '_')}`;
      dimensXML += `    <dimen name="${xmlName}">${dpValue}</dimen>\n`;
    }
    
    dimensXML += '</resources>\n';
    files['dimens.xml'] = dimensXML;
  }
  
  // typography.xml (valores de texto)
  if (tokens.typography) {
    let typoXML = '<?xml version="1.0" encoding="utf-8"?>\n';
    typoXML += '<resources>\n';
    typoXML += '    <!-- Typography Sizes -->\n';
    
    if (tokens.typography.fontSize) {
      for (const [key, value] of Object.entries(tokens.typography.fontSize)) {
        let spValue = value;
        if (value.endsWith('rem')) {
          const rem = parseFloat(value);
          spValue = `${(rem * 16)}sp`; // Converter para sp
        }
        const xmlName = `font_size_${useToKebabCase(key).replace(/-/g, '_')}`;
        typoXML += `    <dimen name="${xmlName}">${spValue}</dimen>\n`;
      }
    }
    
    typoXML += '</resources>\n';
    files['typography.xml'] = typoXML;
  }
  
  return files;
}

// ============================================================================
// 3. iOS SWIFT EXPORT
// ============================================================================

function generateiOSSwift() {
  const tokens = loadedTokens;
  
  let swiftCode = '// Design Tokens - iOS Swift\n';
  swiftCode += '// Generated automatically - Do not edit manually\n\n';
  swiftCode += 'import UIKit\n\n';
  swiftCode += 'enum DesignTokens {\n';
  
  // Cores
  if (tokens.colors && tokens.colors.light) {
    swiftCode += '    // MARK: - Colors\n';
    swiftCode += '    enum Color {\n';
    
    const addSwiftColors = (obj, prefix = '', indent = 8) => {
      const spaces = ' '.repeat(indent);
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = useToCamelCase(key);
        const name = prefix ? `${prefix}.${camelKey}` : camelKey;
        
        if (typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgba') || value.startsWith('rgb'))) {
          // Converter para UIColor
          let uiColor = '';
          if (value.startsWith('#')) {
            const hex = value.substring(1);
            if (hex.length === 6) {
              const r = parseInt(hex.substring(0, 2), 16) / 255.0;
              const g = parseInt(hex.substring(2, 4), 16) / 255.0;
              const b = parseInt(hex.substring(4, 6), 16) / 255.0;
              uiColor = `UIColor(red: ${r}, green: ${g}, blue: ${b}, alpha: 1.0)`;
            }
          } else if (value.startsWith('rgba')) {
            const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const r = parseInt(match[1]) / 255.0;
              const g = parseInt(match[2]) / 255.0;
              const b = parseInt(match[3]) / 255.0;
              const a = match[4] ? parseFloat(match[4]) : 1.0;
              uiColor = `UIColor(red: ${r}, green: ${g}, blue: ${b}, alpha: ${a})`;
            }
          }
          
          if (uiColor) {
            swiftCode += `${spaces}static let ${camelKey}: UIColor = ${uiColor}\n`;
          }
        } else if (typeof value === 'object' && value !== null) {
          swiftCode += `${spaces}enum ${camelKey.charAt(0).toUpperCase() + camelKey.slice(1)} {\n`;
          addSwiftColors(value, name, indent + 4);
          swiftCode += `${spaces}}\n`;
        }
      }
    };
    
    addSwiftColors(tokens.colors.light);
    swiftCode += '    }\n\n';
  }
  
  // Espaçamento
  if (tokens.spacing) {
    swiftCode += '    // MARK: - Spacing\n';
    swiftCode += '    enum Spacing {\n';
    
    for (const [key, value] of Object.entries(tokens.spacing)) {
      const camelKey = toCamelCase(key);
      let cgFloat = value;
      if (value.endsWith('rem')) {
        const rem = parseFloat(value);
        cgFloat = `${rem * 16}.0`; // Converter para pontos
      } else if (value.endsWith('px')) {
        cgFloat = parseFloat(value).toString();
      }
      
      swiftCode += `        static let ${camelKey}: CGFloat = ${cgFloat}\n`;
    }
    
    swiftCode += '    }\n\n';
  }
  
  // Tipografia
  if (tokens.typography) {
    swiftCode += '    // MARK: - Typography\n';
    swiftCode += '    enum Typography {\n';
    
    if (tokens.typography.fontSize) {
      swiftCode += '        enum FontSize {\n';
      for (const [key, value] of Object.entries(tokens.typography.fontSize)) {
        const camelKey = useToCamelCase(key);
        let cgFloat = value;
        if (value.endsWith('rem')) {
          const rem = parseFloat(value);
          cgFloat = `${rem * 16}.0`;
        }
        swiftCode += `            static let ${camelKey}: CGFloat = ${cgFloat}\n`;
      }
      swiftCode += '        }\n';
    }
    
    if (tokens.typography.fontFamily) {
      swiftCode += '        enum FontFamily {\n';
      for (const [key, value] of Object.entries(tokens.typography.fontFamily)) {
        const camelKey = useToCamelCase(key);
        swiftCode += `            static let ${camelKey} = "${value}"\n`;
      }
      swiftCode += '        }\n';
    }
    
    swiftCode += '    }\n\n';
  }
  
  swiftCode += '}\n';
  
  return swiftCode;
}

// ============================================================================
// INTEGRAÇÃO COM buildFormats
// ============================================================================

// Esta função será chamada de buildFormats para incluir os novos formatos
function buildAllFormats() {
  const formats = {
    css: null,
    tailwind: null,
    tokensJson: null,
    figma: null,
    android: null,
    ios: null
  };
  
  const errors = [];
  
  // Formatos existentes
  try {
    if (loadedTokens.colors && loadedTokens.colors.light && loadedTokens.colors.dark) {
      formats.css = generateCSS();
    }
  } catch (e) {
    errors.push(`CSS: ${e.message}`);
  }
  
  try {
    if (loadedTokens.colors && loadedTokens.colors.light) {
      formats.tailwind = generateTailwindConfig();
    }
  } catch (e) {
    errors.push(`Tailwind: ${e.message}`);
  }
  
  try {
    formats.tokensJson = generateTokensJSON();
  } catch (e) {
    errors.push(`Tokens JSON: ${e.message}`);
  }
  
  // Novos formatos
  try {
    formats.figma = generateFigmaTokens();
  } catch (e) {
    errors.push(`Figma: ${e.message}`);
  }
  
  try {
    formats.android = generateAndroidXML();
  } catch (e) {
    errors.push(`Android: ${e.message}`);
  }
  
  try {
    formats.ios = generateiOSSwift();
  } catch (e) {
    errors.push(`iOS: ${e.message}`);
  }
  
  return { formats, errors };
}

