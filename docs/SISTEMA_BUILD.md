# 🔧 Sistema de Build - Design Tokens

Este documento explica como funciona o sistema de build automatizado da biblioteca.

## 🎯 Princípio Fundamental

**JSON como Fonte Única de Verdade**

- ✅ **Edite apenas**: `tokens/*.json`
- ✅ **Formats são gerados automaticamente**: Execute `pnpm run build:formats`
- ❌ **NÃO edite manualmente**: `formats/*` (serão sobrescritos)

## 📦 Scripts Disponíveis

### Scripts Principais

```bash
# Gera todos os formatos (CSS, Tailwind, JSON)
pnpm run build:formats

# Gera formatos individuais
pnpm run build:css          # Gera formats/css-vars.css
pnpm run build:tailwind     # Gera formats/tailwind.config.ts
pnpm run build:tokens-json  # Gera formats/tokens.json

# Build completo (formats + TypeScript)
pnpm run build
```

## 🔄 Fluxo de Build

```
tokens/*.json (FONTE ÚNICA)
    ↓
scripts/build-*.ts (GERADORES)
    ↓
formats/* (FORMATOS GERADOS)
    ↓
dist/* (SAÍDA COMPILADA)
```

## 📝 Scripts de Build

### `scripts/build-formats.ts`

**Orquestrador principal** que executa todos os geradores em sequência.

**O que faz**:
1. Executa `build-css.ts`
2. Executa `build-tailwind.ts`
3. Executa `build-tokens-json.ts`

**Uso**:
```bash
pnpm run build:formats
```

### `scripts/build-css.ts`

**Gera `formats/css-vars.css`** a partir dos tokens JSON.

**O que faz**:
- Lê `tokens/colors/light.json` e `tokens/colors/dark.json`
- Lê `tokens/typography.json`, `tokens/spacing.json`, `tokens/radius.json`, `tokens/shadows.json`
- Gera variáveis CSS para tema claro (`:root`)
- Gera variáveis CSS para tema escuro (`.dark`)
- Converte camelCase para kebab-case automaticamente

**Saída**: `formats/css-vars.css`

**Uso**:
```bash
pnpm run build:css
```

### `scripts/build-tailwind.ts`

**Gera `formats/tailwind.config.ts`** a partir dos tokens JSON.

**O que faz**:
- Lê todos os tokens JSON
- Gera configuração do Tailwind CSS com:
  - Cores (brand, background, surface, text, border, status)
  - Tipografia (fontFamily, fontSize, fontWeight, lineHeight, letterSpacing)
  - Espaçamento (spacing)
  - Raios de borda (borderRadius)
  - Sombras (boxShadow, incluindo efeitos glow)
- Converte kebab-case para camelCase automaticamente

**Saída**: `formats/tailwind.config.ts`

**Uso**:
```bash
pnpm run build:tailwind
```

### `scripts/build-tokens-json.ts`

**Gera `formats/tokens.json`** consolidado com referências.

**O que faz**:
- Lê todos os tokens JSON
- Lê `package.json` para pegar versão e metadados
- Gera JSON consolidado com:
  - Referências para cada arquivo de token
  - Metadados do pacote
  - Timestamp de geração

**Saída**: `formats/tokens.json`

**Uso**:
```bash
pnpm run build:tokens-json
```

## 🚀 Workflow de Desenvolvimento

### 1. Editar Tokens

Edite os arquivos JSON em `tokens/`:

```json
// tokens/colors/light.json
{
  "colors": {
    "brand": {
      "primary": "#0891b2",
      "primaryHover": "#0e7490"
    }
  }
}
```

### 2. Gerar Formatos

Execute o build de formatos:

```bash
pnpm run build:formats
```

Isso irá:
- ✅ Gerar `formats/css-vars.css` com `--color-brand-primary: #0891b2;`
- ✅ Gerar `formats/tailwind.config.ts` com `brand: { primary: '#0891b2' }`
- ✅ Gerar `formats/tokens.json` com referências atualizadas

### 3. Compilar TypeScript

Execute o build completo:

```bash
pnpm run build
```

Isso irá:
- ✅ Executar `build:formats` automaticamente
- ✅ Compilar TypeScript para `dist/`

## 📋 Estrutura de Arquivos

```
@rainer-design-tokens/
│
├── tokens/                    # 🎯 FONTE ÚNICA DE VERDADE
│   ├── colors/
│   │   ├── light.json
│   │   └── dark.json
│   ├── typography.json
│   ├── spacing.json
│   ├── radius.json
│   └── shadows.json
│
├── scripts/                    # 🔧 GERADORES
│   ├── build-formats.ts      # Orquestrador
│   ├── build-css.ts          # Gera CSS
│   ├── build-tailwind.ts     # Gera Tailwind
│   └── build-tokens-json.ts  # Gera JSON
│
├── formats/                   # 📤 FORMATOS GERADOS (NÃO EDITAR)
│   ├── css-vars.css          # ← Gerado por build-css.ts
│   ├── tailwind.config.ts    # ← Gerado por build-tailwind.ts
│   └── tokens.json           # ← Gerado por build-tokens-json.ts
│
└── dist/                      # 📦 SAÍDA COMPILADA
    ├── index.js
    ├── index.mjs
    └── index.d.ts
```

## 🔍 Como Funciona

### Conversão de Nomes

Os scripts fazem conversão automática de nomes:

**camelCase → kebab-case** (para CSS):
```typescript
primaryHover → primary-hover
```

**kebab-case → camelCase** (para Tailwind):
```typescript
primary-hover → primaryHover
```

### Estrutura Aninhada

Os scripts preservam a estrutura aninhada dos tokens:

```json
// tokens/colors/light.json
{
  "colors": {
    "brand": {
      "primary": "#0891b2",
      "primaryHover": "#0e7490"
    }
  }
}
```

Gera:

```css
/* formats/css-vars.css */
:root {
  --color-brand-primary: #0891b2;
  --color-brand-primary-hover: #0e7490;
}
```

```typescript
// formats/tailwind.config.ts
colors: {
  brand: {
    primary: '#0891b2',
    primaryHover: '#0e7490'
  }
}
```

## ⚠️ Avisos Importantes

1. **NÃO edite manualmente** os arquivos em `formats/`
   - Eles são gerados automaticamente
   - Suas alterações serão perdidas no próximo build

2. **Sempre edite** os arquivos em `tokens/*.json`
   - Estes são a fonte única de verdade
   - Todos os formatos são gerados a partir deles

3. **Execute `build:formats`** após qualquer mudança em `tokens/`
   - Isso garante que todos os formatos estejam sincronizados

## 🐛 Troubleshooting

### Erro: "Cannot find module"

**Problema**: Scripts não encontram os arquivos JSON.

**Solução**: Verifique se os arquivos existem em `tokens/`:
```bash
ls tokens/colors/light.json
ls tokens/typography.json
```

### Erro: "Permission denied"

**Problema**: Sem permissão para escrever em `formats/`.

**Solução**: Verifique permissões:
```bash
chmod -R 755 formats/
```

### Formatos não atualizados

**Problema**: Formatos não refletem mudanças nos tokens.

**Solução**: Execute o build novamente:
```bash
pnpm run build:formats
```

## 📚 Referências

- [README.md](../README.md) - Documentação principal
- [STRUCTURE.md](./STRUCTURE.md) - Estrutura da biblioteca
- [Guidelines](./guidelines.md) - Como usar os tokens

