# Guia do Storybook - Documentação de Design Tokens

## 📚 Visão Geral

O Storybook foi atualizado para documentar completamente os design tokens expandidos, incluindo:

- ✅ **Cores com Estados**: Primary, Secondary, Accent com todos os estados
- ✅ **Tipografia Hierárquica**: H1-H6, Subtítulos, Corpo, Legendas, Botões, Labels, Código
- ✅ **Acessibilidade WCAG**: Validação de contraste AA/AAA
- ✅ **Paletas Completas**: Light e Dark themes

## 🚀 Como Executar

```bash
# Na biblioteca
cd C:\Desenvolvimento\@rainer-design-tokens

# Instalar dependências (se necessário)
npm install

# Executar Storybook
npm run storybook

# Build do Storybook para produção
npm run build-storybook
```

O Storybook estará disponível em: `http://localhost:6006`

## 📖 Stories Disponíveis

### 1. Design Tokens/Color Palette
**Arquivo**: `stories/ColorPalette.stories.tsx`

Visualização completa das paletas de cores:
- **LightTheme**: Paleta completa do tema claro
- **DarkTheme**: Paleta completa do tema escuro (Cyberpunk)

Inclui:
- Primary, Secondary, Accent
- Background, Surface, Text, Border
- Status colors (success, warning, error, info)
- Interactive colors

### 2. Design Tokens/Color States
**Arquivo**: `stories/ColorStates.stories.tsx`

Demonstração dos estados completos de cores:
- **PrimaryStates**: Estados da cor primária (base, hover, active, disabled, focus, backgrounds, borders)
- **SecondaryStates**: Estados da cor secundária
- **AccentStates**: Estados da cor accent
- **ThemeComparison**: Comparação entre Light e Dark themes

### 3. Design Tokens/Typography Hierarchy
**Arquivo**: `stories/TypographyHierarchy.stories.tsx`

Hierarquia tipográfica completa:
- **Headings**: H1-H6 com todas as propriedades
- **Subtitles**: Large, Medium, Small
- **BodyText**: Large, Medium, Small
- **Captions**: Large, Medium, Small
- **Buttons**: Large, Medium, Small
- **Labels**: Large, Medium, Small
- **Code**: Inline e Block

### 4. Design Tokens/Accessibility
**Arquivo**: `stories/Accessibility.stories.tsx`

Validação de acessibilidade WCAG:
- **PrimaryContrast**: Validação de contraste para cores primárias
- **StatusColorsContrast**: Validação para status colors
- **InteractiveElements**: Contraste em elementos interativos

Mostra:
- Razão de contraste calculada
- Conformidade WCAG AA (normal e large text)
- Conformidade WCAG AAA
- Mensagens de validação

### 5. Design Tokens/Typography
**Arquivo**: `stories/Typography.stories.tsx`

Documentação das famílias de fontes e escalas tipográficas básicas.

### 6. Design Tokens/Radius
**Arquivo**: `stories/Radius.stories.tsx`

Documentação dos tokens de raio de borda.

### 7. Design Tokens/Shadows
**Arquivo**: `stories/Shadows.stories.tsx`

Documentação dos tokens de sombras e efeitos glow.

### 8. Design Tokens/Spacing
**Arquivo**: `stories/Spacing.stories.tsx`

Documentação dos tokens de espaçamento.

## 🎨 Recursos do Storybook

### Theme Switcher
O Storybook inclui um seletor de tema global que permite alternar entre:
- **Light**: Tema claro profissional
- **Dark**: Tema escuro cyberpunk

### Documentação Automática
Todas as stories estão marcadas com `tags: ['autodocs']`, gerando documentação automática com:
- Descrições dos componentes
- Exemplos de código
- Propriedades e tipos

### Controles Interativos
Algumas stories incluem controles para:
- Alternar entre temas
- Visualizar diferentes estados
- Testar combinações de cores

## 📝 Estrutura de Documentação

```
stories/
├── ColorPalette.stories.tsx          # Paletas completas
├── ColorStates.stories.tsx           # Estados de cores
├── TypographyHierarchy.stories.tsx   # Hierarquia tipográfica
├── Accessibility.stories.tsx         # Acessibilidade WCAG
├── Typography.stories.tsx            # Tipografia básica
├── Radius.stories.tsx                # Raios de borda
├── Shadows.stories.tsx                # Sombras
└── Spacing.stories.tsx                # Espaçamento
```

## 🔧 Configuração

### Preview Configuration
O arquivo `.storybook/preview.tsx` está configurado para:
- Usar os tokens de design no tema do Storybook
- Aplicar backgrounds baseados nos tokens
- Suportar alternância de temas Light/Dark

### Main Configuration
O arquivo `.storybook/main.ts` configura:
- Addons essenciais (docs, controls, backgrounds)
- Framework React + Vite
- Autodocs habilitado

## 📚 Exemplos de Uso

### Visualizar Cores
1. Abra o Storybook
2. Navegue até "Design Tokens/Color Palette"
3. Selecione "LightTheme" ou "DarkTheme"
4. Explore todas as cores disponíveis

### Verificar Acessibilidade
1. Navegue até "Design Tokens/Accessibility"
2. Veja a validação de contraste para cada combinação
3. Verifique conformidade WCAG AA/AAA

### Explorar Tipografia
1. Navegue até "Design Tokens/Typography Hierarchy"
2. Veja todos os níveis de hierarquia
3. Compare diferentes tamanhos e pesos

## 🎯 Boas Práticas

1. **Sempre verifique acessibilidade**: Use as stories de Accessibility para validar contraste
2. **Use os tokens corretos**: Consulte as stories para ver quais tokens usar
3. **Teste em ambos os temas**: Use o theme switcher para verificar em Light e Dark
4. **Consulte a documentação**: Cada story inclui descrições e exemplos

## 🐛 Troubleshooting

### Storybook não inicia
```bash
# Limpar cache e reinstalar
rm -rf node_modules .storybook-build
npm install
npm run storybook
```

### Tipos TypeScript não encontrados
Os erros de tipos são esperados se `@storybook/react-vite` não estiver instalado. O código funciona normalmente quando o Storybook é executado.

### Stories não aparecem
Verifique se os arquivos estão em `stories/*.stories.tsx` e têm a estrutura correta.

## 📖 Recursos Adicionais

- [Documentação do Storybook](https://storybook.js.org/docs)
- [Guia de Tokens Expandidos](./GUIDE_EXPANDED_TOKENS.md)
- [Guia de Migração](./MIGRATION_GUIDE.md)

