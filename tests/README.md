# 🧪 Testes - rainer-design-tokens

Estrutura de testes completa que espelha a organização do código fonte.

## 📁 Estrutura

```
tests/
├── index.test.ts              # Testes do ponto de entrada principal
├── tokens/
│   ├── index.test.ts          # Testes da estrutura de tokens
│   ├── utilities.test.ts       # Testes dos tokens utilitários (Tailwind)
│   └── accessibility.test.ts  # Testes dos utilitários WCAG
├── themes/
│   └── index.test.ts          # Testes da estrutura de temas
└── token-editor/
    └── editor.test.ts         # Testes do Token Editor (geração de formatos)
```

## 🚀 Executando os Testes

### Todos os testes
```bash
pnpm test
```

### Modo watch (desenvolvimento)
```bash
pnpm test:watch
```

### Com cobertura
```bash
pnpm test:coverage
```

## 📋 Cobertura de Testes

### ✅ Coberto

- **index.ts** - Ponto de entrada principal
  - Exportações de tokens
  - Exportações de temas
  - Imutabilidade

- **tokens/index.ts** - Estrutura de tokens
  - Objeto tokens completo
  - Cores (light/dark)
  - Tipografia
  - Espaçamento
  - Radius
  - Shadows
  - Animações
  - Efeitos
  - Componentes
  - TypeScript types

- **tokens/utilities.ts** - Tokens utilitários
  - GRADIENT_DIRECTIONS
  - GRADIENTS
  - GRADIENT_COMPOSITES
  - GRADIENT_COLORS
  - BACKGROUND
  - TypeScript types

- **tokens/accessibility.ts** - Utilitários WCAG
  - hexToRgb
  - getLuminance
  - getContrast
  - meetsWCAGAA
  - meetsWCAGAAA
  - getContrastInfo
  - validateContrast

- **themes/index.ts** - Estrutura de temas
  - Objeto themes
  - lightTheme
  - darkTheme
  - Consistência entre temas
  - Imutabilidade

- **token-editor/editor.js** - Token Editor (100% de cobertura)
  - Funções utilitárias (toKebabCase, toCamelCase, flattenToCSSVars, toTailwindObject)
  - Geração de CSS Variables (generateCSS) - 9 testes
  - Geração de Tailwind Config (generateTailwindConfig) - 9 testes
  - Geração de Tokens JSON (generateTokensJSON) - 10 testes
  - Funções auxiliares (getDefaultContent, storeLoadedToken, escapeHtml, getValueType) - 20+ testes
  - Manipulação de JSON (addNewProperty, removeProperty, addArrayItem, removeArrayItem, moveProperty) - 10+ testes
  - Casos de borda e erros - 20+ testes
  - Validações e integrações - 15+ testes
  - **Total: 136 testes para o Token Editor**

## 🎯 Padrões de Teste

### Estrutura
- Cada arquivo de código tem um arquivo de teste correspondente
- Testes organizados por funcionalidade (describe blocks)
- Casos de teste específicos e bem nomeados (it blocks)

### Boas Práticas
- ✅ Testa estrutura e tipos
- ✅ Testa valores e formatos
- ✅ Testa casos de erro
- ✅ Testa imutabilidade
- ✅ Testa TypeScript types
- ✅ Testa casos de uso reais

### Exemplo
```typescript
describe('Nome do Módulo', () => {
  describe('Funcionalidade Específica', () => {
    it('deve fazer algo específico', () => {
      // Arrange
      const input = 'valor';
      
      // Act
      const result = functionToTest(input);
      
      // Assert
      expect(result).toBe('esperado');
    });
  });
});
```

## 📊 Relatórios

### Cobertura
Após executar `pnpm test:coverage`, os relatórios são gerados em:
- `coverage/` - Relatórios HTML e LCOV

### Visualizar Relatório HTML
```bash
# Abrir coverage/lcov-report/index.html no navegador
```

## 🔧 Configuração

### Jest Config
Configuração em `jest.config.js`:
- Preset: `ts-jest/presets/default-esm`
- Suporte a ESM
- Coverage de `tokens/`, `themes/`, `index.ts`
- Exclui arquivos gerados (`formats/`, `dist/`)

## 📝 Adicionando Novos Testes

1. **Criar arquivo de teste** espelhando a estrutura do código:
   - `src/tokens/colors.ts` → `tests/tokens/colors.test.ts`

2. **Seguir padrão de nomenclatura**:
   - Arquivo: `*.test.ts`
   - Describe: Nome do módulo/funcionalidade
   - It: Descrição clara do que está sendo testado

3. **Importar do código fonte**:
   ```typescript
   import { functionToTest } from '../../path/to/source';
   ```

4. **Executar testes**:
   ```bash
   pnpm test
   ```

## 🎓 Documentação

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ts-jest Documentation](https://kulshekhar.github.io/ts-jest/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

**Última atualização**: 2025-11-19  
**Cobertura atual**: Estrutura principal, tokens, utilities, accessibility, themes, token-editor (100% de cobertura)  
**Total de testes**: 270 testes passando

