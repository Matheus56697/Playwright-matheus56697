# features/cadastro/ — cadastro usuário

## Contexto

Fluxos de cadastro produção/staging. Staging valida e-mail no Mailhog; produção real é destrutivo.

## Deve

- `@cadastro-staging` só no fluxo feliz de staging (Mailhog)
- `@cadastro-validacao` só nas validações inválidas (sem criar conta)
- `@cadastro-sem-submit` / fluxos safe sem concluir cadastro real quando possível
- `@cadastro-real` somente com permissão e `CADASTRO_REAL=true`
- Mensagens de erro devem espelhar o texto real da UI (validar via MCP antes de inventar)

## Não pode

- Rodar `@cadastro-real` por padrão em CI sem secret/autorização explícita
- Misturar asserts de produção e staging no mesmo cenário sem tags claras
- Inventar textos de validação que não existem na tela

## Checklist

- [ ] Tag correta no cenário
- [ ] Steps em `steps/cadastro/`
- [ ] Page em `pages/cadastro/`
