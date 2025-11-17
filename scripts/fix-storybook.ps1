# Script para corrigir problemas do Storybook
Write-Host "Corrigindo problemas do Storybook..." -ForegroundColor Cyan

# Limpar node_modules e lock files
Write-Host "Limpando node_modules e lock files..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "node_modules removido" -ForegroundColor Green
}

if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "package-lock.json removido" -ForegroundColor Green
}

if (Test-Path "pnpm-lock.yaml") {
    Remove-Item -Force "pnpm-lock.yaml"
    Write-Host "pnpm-lock.yaml removido" -ForegroundColor Green
}

# Limpar cache do pnpm
Write-Host "Limpando cache do pnpm..." -ForegroundColor Yellow
pnpm store prune

# Reinstalar dependências com pnpm
Write-Host "Reinstalando dependencias com pnpm..." -ForegroundColor Yellow
pnpm install

Write-Host "Concluido! Tente executar 'pnpm run storybook' novamente." -ForegroundColor Green

