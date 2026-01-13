# Harmonizar seções da home com padrão TechnicalHighlight
Resumo: alinhar estrutura, constantes, comentários e uso de tokens em todos os componentes da home para seguir o template do TechnicalHighlight, garantindo consistência visual e sem redundâncias.

## Escopo
- Arquivos: carousel.tsx, contact-section.tsx, cta-section.tsx, hero-section.tsx, highlights.tsx, newsletter-section.tsx, portfolio-showcase.tsx, stats-showcase.tsx, tech-stack.tsx, index.ts.

## Padrão a aplicar
- Header JSDoc completo (module, fileoverview, author, version, since, exemplo, lista de features).
- Seções comentadas: CONSTANTS & TOKENS, CSS CLASSES, TYPES, UTILITIES, MOTION PRESETS, DATA, SUBCOMPONENTS (se houver), MAIN COMPONENT.
- Desestruturar tokens.primitives (cores, spacing, typography, breakpoints) e criar objetos de opacidade/tamanhos/gradientes conforme o contexto de cada componente.
- motionPresets centralizados (fade/scale/card/etc.) conforme necessidade do componente.
- containerStyles memoizados quando houver muitos estilos inline.
- Uso de corPorTema/criarGradiente helpers para temas claro/escuro.

## Passos
1) Carousel: refatorar topo (use client + imports), alinhar comentários, substituir cores hardcoded por tokens/gradientes, consolidar helpers e motion presets.
2) Contact Section: aplicar estrutura de seções, tokens e helpers; simplificar comentários redundantes.
3) CTA Section: padronizar header e blocos, tokens e motion presets.
4) Hero Section: aplicar seções, tokens, motion presets; alinhar imports/constantes; manter lógica de carousel.
5) Highlights: reorganizar constantes/tokens, motion presets e header JSDoc.
6) Newsletter Section: padronizar header, tokens, motion presets, comentários.
7) Portfolio Showcase: alinhar constantes, classes, motion presets e JSDoc.
8) Stats Showcase: padronizar tokens, motion presets, JSDoc e classes reutilizáveis.
9) Tech Stack: aplicar padrão de seções, tokens e motion presets.
10) Index.ts: manter JSDoc e ordem de exportações já ajustada.

## Validação
- Rodar `npm run -s tsc -- --noEmit` no frontend ao final e reportar resultados.

## Observações
- Evitar alterar lógica funcional; foco em formatação/padrão e uso de tokens.
- Manter estilos/efeitos existentes, apenas reorganizando para consistência.
