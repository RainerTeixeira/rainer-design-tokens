# Convenções dos Design Tokens ✅

Resumo curto das convenções adotadas no repositório e novos tokens adicionados.

## Estrutura

- `primitives` — Valores atômicos (paleta, spacing, typography, opacity, etc.)
- `semantics` — Tokens com significado (colors, spacing-context, typography-roles)
- `themes` — Temas específicos (light, dark, ...)

## Naming

- Use `kebab-case` para propriedades geradas em CSS (ex.: `--color-gray-900`).
- Use `dot` ou `camel` nas referências internas: `{palette.gray.900}` ou `{typography.fontSize.base}`.
- Semantics devem referenciar primitives usando placeholders: `{palette.*}` ou `{opacity.*}`.

## Novos tokens adicionados

- `surface`: surface-0 / surface-1 / surface-2 e `on-surface` — representando superfícies e cor de texto sobre elas.
- `focus`: `ring` e `outline` — usado para estados de foco.
- `disabled`: `opacity`, `background`, `text` — conveniência para estados desabilitados.

## Acessibilidade

- Testes automatizados verificam contraste (WCAG >= 4.5) entre `text.primary` e `background.primary` para `light` e `dark`.

## Boas práticas

- Sempre referencie primitivos nos semânticos; evite duplicar valores hexos nos semânticos.
- Documente novos tokens em `docs/` com uso e exemplos.

---

**Versão:** 2.6.0
**Última Atualização:** 13 de Janeiro de 2026
**Autor:** [object Object]
**Licença:** MIT