# Testes manuais — Alertas no Apponte.me Colaborador (T4)

Fluxo de alerta e confirmação **somente no Apponte.me Colaborador**. Sem Relógio (issue separada). Sem associação em lote.
**16 testes**. Login do colaborador só no **TC 1**. Permissão de localização só quando o estado muda (desligar no TC 3 e no TC 10; religar no TC 4 e no TC 11). Login do Painel só no **TC 11** (primeiro Histórico).
Massa: cerca de referência desta bateria ativa e vigente no colaborador de referência desta bateria.

## Regras da suíte

- Action em imperativo (`Acesse`, `Toque`, `Observe`, `Preencha`).
- Result somente na última linha de cada TC.
- Não repetir e-mail, senha e Entrar se o teste anterior não pediu para deslogar.
- TC 12 deixa o alerta aberto; o TC 13 parte desse alerta e toca em “Não”.

| TCID | Test Summary | Description | Test Priority | Test Type | Action | Data | Result |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Marque ponto fora da cerca. | Verificar se o Apponte.me Colaborador exibe o alerta quando a marcação ocorre fora da cerca. | High | Manual | Acesse o aplicativo “Apponte.me Colaborador”. | Colaborador de referência desta bateria, com a cerca de referência desta bateria ativa e vigente. |  |
| 1 |  |  |  |  | Preencha o campo “E-mail” com o e-mail do colaborador válido. |  |  |
| 1 |  |  |  |  | Preencha o campo “Senha” com a senha correta do colaborador. |  |  |
| 1 |  |  |  |  | Toque em “Entrar”. |  |  |
| 1 |  |  |  |  | Quando o sistema solicitar a permissão da câmera, selecione “Permitir sempre” ou “Durante o uso do app”. |  |  |
| 1 |  |  |  |  | Na permissão de localização, clique em “Permitir sempre”. Caso não exista essa opção, clique em “Permitir durante o uso”. |  |  |
| 1 |  |  |  |  | Certifique-se de que o dispositivo esteja conectado à internet. | Internet disponível. |  |
| 1 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. Localização disponível. |  |
| 1 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 1 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 1 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 1 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 1 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 1 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 1 |  |  |  |  | Toque em “Sim”. |  |  |
| 1 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 1 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema deve exibir o alerta de marcação fora da cerca no Apponte.me Colaborador. |
| 2 | Marque ponto dentro da cerca. | Verificar se o Apponte.me Colaborador não exibe o alerta de fora da cerca quando a marcação ocorre dentro da área. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. Cerca de referência desta bateria ativa e vigente. |  |
| 2 |  |  |  |  | Posicione o dispositivo dentro de uma área da cerca de referência desta bateria. | Dentro da cerca. |  |
| 2 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 2 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 2 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 2 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 2 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 2 |  |  |  |  | Observe se o aplicativo apresenta alerta de Cerca Virtual. |  |  |
| 2 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  | O sistema não deve exibir o alerta de marcação fora da cerca. |
| 3 | Marque ponto sem localização. | Verificar se o Apponte.me Colaborador exibe o alerta quando não é possível coletar a geolocalização. | High | Manual | No aparelho, abra Configurações. |  |  |
| 3 |  |  |  |  | Procure por aplicativos ou Apps. |  |  |
| 3 |  |  |  |  | Procure o Apponte.me Colaborador. |  |  |
| 3 |  |  |  |  | Vá em permissões. |  |  |
| 3 |  |  |  |  | Desative a permissão de “Localização”. | Localização indisponível. |  |
| 3 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 3 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 3 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 3 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 3 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 3 |  |  |  |  | Observe o alerta de localização inconsistente, informando que a marcação não possui dados de geolocalização. |  |  |
| 3 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 3 |  |  |  |  | Toque em “Sim”. |  |  |
| 3 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 3 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema deve exibir o alerta de que não foi possível coletar a localização. |
| 4 | Marque ponto com localização disponível. | Verificar se o Apponte.me Colaborador não exibe o alerta de localização inconsistente quando a geolocalização é coletada. | High | Manual | No aparelho, abra Configurações. |  |  |
| 4 |  |  |  |  | Procure por aplicativos ou Apps. |  |  |
| 4 |  |  |  |  | Procure o Apponte.me Colaborador. |  |  |
| 4 |  |  |  |  | Vá em permissões. |  |  |
| 4 |  |  |  |  | Ative a permissão de “Localização” com “Permitir sempre” ou “Durante o uso”. | Localização disponível. |  |
| 4 |  |  |  |  | Posicione o dispositivo dentro de uma área da cerca de referência desta bateria. | Dentro da cerca. |  |
| 4 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 4 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 4 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 4 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 4 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 4 |  |  |  |  | Observe se o aplicativo apresenta alerta de localização inconsistente. |  |  |
| 4 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  | O sistema não deve exibir o alerta de localização inconsistente quando houver geolocalização. |
| 5 | Observe o campo de justificativa no alerta. | Verificar se o alerta fora da cerca exibe o campo de justificativa opcional. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 5 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 5 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 5 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 5 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 5 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 5 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 5 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 5 |  |  |  |  | Observe o campo “Justificativa (opcional)”. |  |  |
| 5 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 5 |  |  |  |  | Toque em “Sim”. |  |  |
| 5 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 5 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema deve exibir o campo de justificativa opcional no alerta. |
| 6 | Marque ponto dentro da cerca sem o campo de justificativa. | Verificar se o campo de justificativa do alerta não aparece quando a marcação ocorre dentro da cerca. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 6 |  |  |  |  | Posicione o dispositivo dentro de uma área da cerca de referência desta bateria. | Dentro da cerca. |  |
| 6 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 6 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 6 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 6 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 6 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 6 |  |  |  |  | Observe se o aplicativo apresenta o campo “Justificativa (opcional)”. |  |  |
| 6 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  | O sistema não deve exibir o campo de justificativa do alerta quando a marcação ocorre dentro da cerca. |
| 7 | Observe os botões Sim e Não no alerta. | Verificar se o alerta fora da cerca exibe os botões “Sim” e “Não”. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 7 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 7 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 7 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 7 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 7 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 7 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 7 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 7 |  |  |  |  | Observe os botões “Sim” e “Não”. |  |  |
| 7 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 7 |  |  |  |  | Toque em “Sim”. |  |  |
| 7 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 7 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema deve exibir os botões “Sim” e “Não” no alerta. |
| 8 | Marque ponto dentro da cerca sem os botões do alerta. | Verificar se os botões “Sim” e “Não” do alerta de Cerca Virtual não aparecem quando a marcação ocorre dentro da cerca. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 8 |  |  |  |  | Posicione o dispositivo dentro de uma área da cerca de referência desta bateria. | Dentro da cerca. |  |
| 8 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 8 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 8 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 8 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 8 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 8 |  |  |  |  | Observe se o aplicativo apresenta os botões “Sim” e “Não” do alerta de Cerca Virtual. |  |  |
| 8 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  | O sistema não deve exibir os botões “Sim” e “Não” do alerta de Cerca Virtual quando a marcação ocorre dentro da cerca. |
| 9 | Observe o alerta sem o nome da cerca. | Verificar se o alerta fora da cerca não exibe o nome da cerca ao colaborador. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 9 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 9 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 9 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 9 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 9 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 9 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 9 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 9 |  |  |  |  | Observe se o alerta apresenta o nome da cerca de referência desta bateria. | Nome da cerca de referência desta bateria. |  |
| 9 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 9 |  |  |  |  | Toque em “Sim”. |  |  |
| 9 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 9 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema não deve exibir o nome da cerca no alerta ao colaborador. |
| 10 | Observe o alerta sem localização sem o nome da cerca. | Verificar se o alerta sem geolocalização também não exibe o nome da cerca ao colaborador. | High | Manual | No aparelho, abra Configurações. |  |  |
| 10 |  |  |  |  | Procure por aplicativos ou Apps. |  |  |
| 10 |  |  |  |  | Procure o Apponte.me Colaborador. |  |  |
| 10 |  |  |  |  | Vá em permissões. |  |  |
| 10 |  |  |  |  | Desative a permissão de “Localização”. | Localização indisponível. |  |
| 10 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 10 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 10 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 10 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 10 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 10 |  |  |  |  | Observe o alerta de localização inconsistente, informando que a marcação não possui dados de geolocalização. |  |  |
| 10 |  |  |  |  | Observe se o alerta apresenta o nome da cerca de referência desta bateria. | Nome da cerca de referência desta bateria. |  |
| 10 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 10 |  |  |  |  | Toque em “Sim”. |  |  |
| 10 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 10 |  |  |  |  | Observe o retorno à tela inicial de marcação. |  | O sistema não deve exibir o nome da cerca no alerta sem geolocalização. |
| 11 | Confirme a marcação com Sim. | Verificar se o toque em “Sim” no alerta conclui a marcação no Apponte.me Colaborador. | High | Manual | No aparelho, abra Configurações. |  |  |
| 11 |  |  |  |  | Procure por aplicativos ou Apps. |  |  |
| 11 |  |  |  |  | Procure o Apponte.me Colaborador. |  |  |
| 11 |  |  |  |  | Vá em permissões. |  |  |
| 11 |  |  |  |  | Ative a permissão de “Localização” com “Permitir sempre” ou “Durante o uso”. | Localização disponível. |  |
| 11 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 11 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 11 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 11 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 11 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 11 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 11 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 11 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 11 |  |  |  |  | Toque em “Sim”. |  |  |
| 11 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 11 |  |  |  |  | Acesse o Painel Administrativo com um login e senha válido. | Usuário Administrador. |  |
| 11 |  |  |  |  | Clique em “Colaboradores” no menu lateral esquerdo. |  |  |
| 11 |  |  |  |  | Localize o departamento do colaborador de referência desta bateria. |  |  |
| 11 |  |  |  |  | Clique no símbolo de “+” no final do departamento. |  |  |
| 11 |  |  |  |  | Clique no colaborador de referência desta bateria. |  |  |
| 11 |  |  |  |  | Clique na aba “Histórico”. |  |  |
| 11 |  |  |  |  | Localize a marcação realizada pela data e pelo horário. |  | O sistema deve concluir a marcação ao tocar em “Sim” e registrar o evento no Histórico. |
| 12 | Tente concluir a marcação sem tocar em Sim. | Verificar se a marcação não é concluída enquanto o colaborador permanece no alerta sem tocar em “Sim”. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 12 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 12 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 12 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 12 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 12 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 12 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 12 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 12 |  |  |  |  | Mantenha o alerta aberto sem tocar em “Sim”. |  | O sistema não deve concluir a marcação sem o toque em “Sim”. |
| 13 | Cancele a marcação com Não. | Verificar se o toque em “Não” cancela a marcação e retorna à tela principal. | High | Manual | Observe o alerta de marcação fora da área esperada ainda aberto da sessão anterior. |  |  |
| 13 |  |  |  |  | Toque em “Não”. |  |  |
| 13 |  |  |  |  | Observe a tela inicial de marcação do Apponte.me Colaborador. |  | O sistema deve cancelar a marcação e retornar à tela principal. |
| 14 | Consulte o Histórico após cancelar com Não. | Verificar se a marcação cancelada com “Não” não é registrada no Histórico. | High | Manual | Acesse o Painel Administrativo. | Usuário Administrador. |  |
| 14 |  |  |  |  | Clique em “Colaboradores” no menu lateral esquerdo. |  |  |
| 14 |  |  |  |  | Localize o departamento do colaborador de referência desta bateria. |  |  |
| 14 |  |  |  |  | Clique no símbolo de “+” no final do departamento. |  |  |
| 14 |  |  |  |  | Clique no colaborador de referência desta bateria. |  |  |
| 14 |  |  |  |  | Clique na aba “Histórico”. |  |  |
| 14 |  |  |  |  | Localize se existe marcação no horário do cancelamento com “Não”. | Horário da tentativa cancelada. | O sistema não deve registrar no Histórico a marcação cancelada com “Não”. |
| 15 | Confirme a marcação sem justificativa. | Verificar se o Apponte.me Colaborador conclui a marcação com o campo de justificativa vazio. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 15 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 15 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 15 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 15 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 15 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 15 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 15 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 15 |  |  |  |  | Deixe o campo de justificativa vazio. | Justificativa vazia. |  |
| 15 |  |  |  |  | Toque em “Sim”. |  |  |
| 15 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 15 |  |  |  |  | Acesse o Painel Administrativo. | Usuário Administrador. |  |
| 15 |  |  |  |  | Clique em “Colaboradores” no menu lateral esquerdo. |  |  |
| 15 |  |  |  |  | Localize o departamento do colaborador de referência desta bateria. |  |  |
| 15 |  |  |  |  | Clique no símbolo de “+” no final do departamento. |  |  |
| 15 |  |  |  |  | Clique no colaborador de referência desta bateria. |  |  |
| 15 |  |  |  |  | Clique na aba “Histórico”. |  |  |
| 15 |  |  |  |  | Localize a marcação realizada pela data e pelo horário. |  | O sistema deve concluir a marcação mesmo com a justificativa vazia. |
| 16 | Confirme a marcação com justificativa. | Verificar se o campo de justificativa permanece opcional e ainda aceita texto quando preenchido. | High | Manual | Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo. | Localização disponível. |  |
| 16 |  |  |  |  | Posicione o dispositivo fora da área da cerca de referência desta bateria. | Fora da cerca. |  |
| 16 |  |  |  |  | Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior. | Colaborador de referência desta bateria. |  |
| 16 |  |  |  |  | Toque em “Marcar ponto”. |  |  |
| 16 |  |  |  |  | Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída). |  |  |
| 16 |  |  |  |  | Toque no botão circular branco para capturar a foto. |  |  |
| 16 |  |  |  |  | Toque em “Confirmar”. |  |  |
| 16 |  |  |  |  | Observe o alerta de marcação fora da área esperada. |  |  |
| 16 |  |  |  |  | Preencha o campo “Justificativa (opcional)”. | Texto de justificativa. |  |
| 16 |  |  |  |  | Toque em “Sim”. |  |  |
| 16 |  |  |  |  | Aguarde a conclusão e a sincronização da marcação. |  |  |
| 16 |  |  |  |  | Acesse o Painel Administrativo. | Usuário Administrador. |  |
| 16 |  |  |  |  | Clique em “Colaboradores” no menu lateral esquerdo. |  |  |
| 16 |  |  |  |  | Localize o departamento do colaborador de referência desta bateria. |  |  |
| 16 |  |  |  |  | Clique no símbolo de “+” no final do departamento. |  |  |
| 16 |  |  |  |  | Clique no colaborador de referência desta bateria. |  |  |
| 16 |  |  |  |  | Clique na aba “Histórico”. |  |  |
| 16 |  |  |  |  | Localize a marcação realizada pela data e pelo horário. |  | O sistema deve concluir a marcação com a justificativa preenchida e manter o campo como opcional. |
