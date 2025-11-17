# Guia de Contribuição

Obrigado por considerar contribuir para `@rainer/design-tokens`! Este documento fornece diretrizes e informações sobre como contribuir para o projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Adicionando Novos Tokens](#adicionando-novos-tokens)
- [Convenções de Código](#convenções-de-código)
- [Pull Requests](#pull-requests)
- [Testes](#testes)
- [Documentação](#documentação)

## 📜 Código de Conduta

Este projeto segue um código de conduta. Ao participar, você concorda em manter este código. Por favor, seja respeitoso e profissional em todas as interações.

## 🤝 Como Contribuir

### Reportar Bugs

Se você encontrou um bug:

1. Verifique se o bug já não foi reportado nas [Issues](https://github.com/rainer-teixeira/design-tokens/issues)
2. Se não foi reportado, crie uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. comportamento atual
   - Versão da biblioteca
   - Ambiente (Node.js, npm, etc.)

### Sugerir Funcionalidades

Para sugerir novas funcionalidades:

1. Verifique se a funcionalidade já não foi sugerida
2. Crie uma issue descrevendo:
   - O problema que a funcionalidade resolveria
   - Como você imagina que funcionaria
   - Exemplos de uso

### Contribuir com Código

1. **Fork o repositório**
2. **Crie uma branch** para sua feature ou correção:
   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/nome-da-correcao
   ```
3. **Faça suas alterações**
4. **Teste suas alterações**:
   ```bash
   npm run test
   npm run type-check
   npm run lint
   npm run build
   ```
5. **Commit suas mudanças** seguindo as [Convenções de Commit](#convenções-de-commit)
6. **Push para sua branch**:
   ```bash
   git push origin feature/nome-da-feature
   ```
7. **Abra um Pull Request** com descrição clara das mudanças

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0 (ou yarn/pnpm)
- Git

### Setup Inicial

```bash
# Clone o repositório
git clone https://github.com/rainer-teixeira/design-tokens.git
cd design-tokens

# Instale as dependências
npm install

# Verifique se tudo está funcionando
npm run build
npm run test
```

### Scripts Disponíveis

```bash
# Build de produção
npm run build

# Build em modo watch (desenvolvimento)
npm run dev

# Verificação de tipos TypeScript
npm run type-check

# Linting
npm run lint

# Testes
npm run test

# Testes em watch mode
npm run test:watch

# Testes com cobertura
npm run test:coverage

# Gerar tokens em diferentes formatos
npm run generate:tokens

# Validar tokens
npm run validate:tokens
```

## 📁 Estrutura do Projeto

```
@rainer-design-tokens/
├── src/
│   ├── index.ts                    # Exports principais (tokens legacy)
│   ├── css.ts                      # Utilitários CSS (re-export)
│   ├── tailwind.ts                 # Integração Tailwind CSS
│   ├── formats/                    # Formatos de exportação
│   │   ├── css.ts                  # Exportação CSS custom properties
│   │   └── w3c.ts                  # Exportação formato W3C
│   ├── tokens/                     # Tokens organizados
│   │   ├── primitives/             # Tokens primitivos
│   │   │   ├── colors.ts           # Cores primitivas
│   │   │   ├── spacing.ts          # Espaçamentos primitivos
│   │   │   ├── typography.ts       # Tipografia primitiva
│   │   │   └── index.ts            # Exports primitivos
│   │   └── semantic/               # Tokens semânticos
│   │       ├── colors.ts           # Cores semânticas
│   │       ├── spacing.ts          # Espaçamentos semânticos
│   │       ├── typography.ts       # Tipografia semântica
│   │       └── index.ts            # Exports semânticos
│   ├── types/                      # Definições de tipos
│   │   └── index.ts                # Tipos principais
│   └── utils/                      # Utilitários
│       └── validation.ts           # Validação de tokens
├── dist/                           # Build output (gerado)
├── docs/                           # Documentação
│   ├── ARCHITECTURE.md             # Arquitetura
│   ├── GUIDE.md                    # Guia de uso
│   ├── SETUP.md                    # Guia de setup
│   ├── PRIMITIVES.md               # Tokens primitivos
│   ├── SEMANTIC.md                 # Tokens semânticos
│   └── TOOLS.md                    # Ferramentas
├── tests/                          # Testes
│   ├── formats/                    # Testes de formatos
│   ├── tokens/                     # Testes de tokens
│   └── utils/                      # Testes de utilitários
├── scripts/                        # Scripts de build
└── package.json                    # Configuração do pacote
```

## ➕ Adicionando Novos Tokens

### Tokens Primitivos

Para adicionar novos tokens primitivos:

1. **Escolha o arquivo apropriado** em `src/tokens/primitives/`:
   - `colors.ts` - Para novas paletas de cores
   - `spacing.ts` - Para novos valores de espaçamento
   - `typography.ts` - Para novos valores tipográficos

2. **Siga o padrão existente**:
   ```typescript
   /**
    * Paleta de cores base - Cores [nome].
    * 
    * @description Descrição da paleta de cores
    */
   export const COLOR_NOME = {
     50: '#valor',
     100: '#valor',
     // ... seguindo a escala padrão
     950: '#valor',
   } as const;
   ```

3. **Exporte no index**:
   ```typescript
   // src/tokens/primitives/index.ts
   export * from './colors';
   export * from './spacing';
   export * from './typography';
   ```

### Tokens Semânticos

Para adicionar novos tokens semânticos:

1. **Escolha o arquivo apropriado** em `src/tokens/semantic/`:
   - `colors.ts` - Para cores semânticas
   - `spacing.ts` - Para espaçamentos semânticos
   - `typography.ts` - Para tipografia semântica

2. **Referencie tokens primitivos**:
   ```typescript
   import { COLOR_CYAN } from '../primitives/colors';
   
   export const SEMANTIC_COLORS = {
     light: {
       brand: {
         primary: COLOR_CYAN[600],
         // ...
       },
     },
     dark: {
       brand: {
         primary: COLOR_CYAN[400],
         // ...
       },
     },
   } as const;
   ```

### Tokens Legacy

Para manter compatibilidade retroativa, tokens legacy podem ser adicionados em `src/index.ts`:

```typescript
/**
 * Tokens de [Categoria] - [Descrição]
 * 
 * @description Descrição detalhada dos tokens
 */
export const TOKEN_NAME = {
  VALUE_1: 'valor1',
  VALUE_2: 'valor2',
} as const;
```

## 📝 Convenções de Código

### Nomenclatura

- **Constantes**: `UPPER_SNAKE_CASE` para valores de enum
- **Objetos de Tokens**: `PascalCase` para nomes de objetos
- **Funções**: `camelCase` para funções
- **Tipos**: `PascalCase` para tipos TypeScript

### TypeScript

- Use `as const` para todos os tokens
- Exporte tipos para todos os tokens quando apropriado
- Use tipos explícitos quando necessário
- Evite `any` - use `unknown` se necessário

### Documentação

- **JSDoc obrigatório** para todos os tokens exportados
- **Descrições claras** em português profissional
- **Exemplos de uso** quando apropriado
- **Tags apropriadas** (`@description`, `@example`, etc.)

Exemplo:

```typescript
/**
 * Tokens de Animação - Durações em Milissegundos
 * 
 * @description Fornece valores de duração de animação em milissegundos
 * para uso em bibliotecas de animação como Framer Motion.
 * 
 * @example
 * ```tsx
 * import { ANIMATION_DURATION_MS } from '@rainer/design-tokens';
 * 
 * <motion.div
 *   transition={{ duration: ANIMATION_DURATION_MS.NORMAL }}
 * >
 *   Conteúdo animado
 * </motion.div>
 * ```
 */
export const ANIMATION_DURATION_MS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;
```

### Formatação

- Use 2 espaços para indentação
- Use ponto e vírgula
- Use aspas simples para strings
- Mantenha linhas com máximo de 100 caracteres quando possível

## 🔄 Convenções de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula faltando, etc.
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Mudanças em build, dependências, etc.

### Exemplos

```bash
feat(tokens): adiciona novos tokens de gradiente
fix(validation): corrige validação de cores hex
docs(guide): atualiza guia de uso com novos exemplos
refactor(css): refatora geração de CSS custom properties
test(colors): adiciona testes para paleta de cores ciano
```

## 🔍 Pull Requests

### Checklist Antes de Submeter

- [ ] Código segue as convenções do projeto
- [ ] Testes passam (`npm run test`)
- [ ] Type check passa (`npm run type-check`)
- [ ] Lint passa (`npm run lint`)
- [ ] Build passa (`npm run build`)
- [ ] Documentação atualizada
- [ ] JSDoc adicionado/atualizado
- [ ] Commits seguem o padrão Conventional Commits

### Template de Pull Request

```markdown
## Descrição
Breve descrição das mudanças

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como Testar
Passos para testar as mudanças:
1. ...
2. ...

## Checklist
- [ ] Código testado
- [ ] Documentação atualizada
- [ ] Sem breaking changes (ou documentados)
```

## 🧪 Testes

### Adicionando Testes

1. **Crie arquivo de teste** em `tests/` seguindo a estrutura de `src/`
2. **Use Jest** como framework de testes
3. **Cubra casos importantes**:
   - Valores corretos
   - Casos extremos
   - Validações

Exemplo:

```typescript
import { COLOR_CYAN } from '../../src/tokens/primitives/colors';

describe('COLOR_CYAN', () => {
  it('deve ter todos os valores de escala', () => {
    expect(COLOR_CYAN[50]).toBe('#ecfeff');
    expect(COLOR_CYAN[500]).toBe('#06b6d4');
    expect(COLOR_CYAN[950]).toBe('#164e63');
  });

  it('deve ter valores hex válidos', () => {
    Object.values(COLOR_CYAN).forEach(color => {
      expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});
```

## 📚 Documentação

### Atualizando Documentação

Ao adicionar novos tokens ou funcionalidades:

1. **Atualize o README.md** se necessário
2. **Atualize os arquivos em `docs/`**:
   - `PRIMITIVES.md` - Para tokens primitivos
   - `SEMANTIC.md` - Para tokens semânticos
   - `GUIDE.md` - Para novos exemplos de uso
3. **Adicione exemplos** quando apropriado
4. **Mantenha consistência** com o estilo existente

### Estilo de Documentação

- Use português profissional
- Seja claro e conciso
- Inclua exemplos práticos
- Mantenha formatação consistente

## ❓ Dúvidas?

Se você tiver dúvidas sobre como contribuir:

1. Verifique a [documentação](./docs/)
2. Abra uma [issue](https://github.com/rainer-teixeira/design-tokens/issues) com a tag `question`
3. Entre em contato com os mantenedores

## 🙏 Agradecimentos

Obrigado por contribuir para `@rainer/design-tokens`! Sua contribuição ajuda a tornar esta biblioteca melhor para todos.
