# T4 — Fluxo de Alertas no App Colaborador

Fonte: ticket de aceite. Detalhes de mensagem e botões: PRD 001, seção 7.4.

**Escopo desta bateria:** somente **Apponte.me Colaborador**. O fluxo equivalente no Relógio fica em issue separada.

## Descrição

Implementar fluxo de alerta e confirmação no App Colaborador para marcações fora da cerca ou sem geolocalização.

## Critérios de Aceitação

- Exibir alerta quando marcação ocorrer fora da cerca.
- Exibir alerta quando não for possível coletar localização.
- Exibir campo de justificativa opcional.
- Exibir botões “Sim” e “Não”.
- Não exibir nome da cerca ao colaborador.
- Ao clicar “Sim”, concluir marcação.
- Ao clicar “Não”, cancelar marcação e retornar à tela principal.
- Permitir marcação sem justificativa preenchida.

## Mensagens (PRD 001)

Fora da cerca: *Você está realizando uma marcação fora da área esperada pela empresa. Deseja continuar?*

Sem geolocalização: *Não foi possível coletar sua geolocalização no momento. Deseja continuar mesmo assim?*

Campo: *Justificativa (opcional)*

Botões: **Sim** (conclui) e **Não** (cancela e volta à tela principal).
