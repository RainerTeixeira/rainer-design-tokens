#!/bin/bash

# Script para configurar e publicar @rainersoft/design-tokens no GitHub
# Uso: bash scripts/setup-github.sh

set -e

echo "🚀 Configurando @rainersoft/design-tokens para GitHub..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se Git está inicializado
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git não inicializado. Inicializando...${NC}"
    git init
fi

# Verificar se tem remote
if ! git remote | grep -q origin; then
    echo -e "${YELLOW}⚠️  Remote 'origin' não configurado.${NC}"
    echo "Por favor, execute:"
    echo "  git remote add origin https://github.com/RainerTeixeira/rainer-design-tokens.git"
    echo "Ou:"
    echo "  git remote add origin git@github.com:RainerTeixeira/rainer-design-tokens.git"
    exit 1
fi

# Build
echo -e "${GREEN}📦 Gerando build...${NC}"
pnpm run build

# Type check
echo -e "${GREEN}🔍 Verificando tipos...${NC}"
pnpm run type-check

# Adicionar arquivos
echo -e "${GREEN}📝 Adicionando arquivos ao Git...${NC}"
git add .

# Status
echo -e "${GREEN}📊 Status do Git:${NC}"
git status --short

echo ""
echo -e "${GREEN}✅ Pronto para commit!${NC}"
echo ""
echo "Próximos comandos:"
echo "  git commit -m 'feat: initial release - design tokens library v3.0.0'"
echo "  git branch -M main"
echo "  git push -u origin main"

