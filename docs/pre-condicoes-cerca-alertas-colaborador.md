# Pré-condições — Alertas no Apponte.me Colaborador (T4)

Regra: **1 pré-condição por teste**. As PCs são gerais e reaproveitadas.

Massa: cerca de referência desta bateria já cadastrada, ativa e vigente no colaborador de referência desta bateria. Somente Apponte.me Colaborador.

---

## PC-01 — Base do Administrador no Painel

**Título:** Administrador autenticado no Painel Administrativo

**Descrição:**

Eu como QA,  
Gostaria de estar logado no Painel Administrativo com e-mail e senha válidos de um usuário Administrador, com conexão à internet ativa,  
Porque assim consigo consultar o Histórico sem repetir o login.

---

## PC-02 — Primeiro acesso do Colaborador

**Título:** Aplicativo Colaborador aberto na tela de login

**Descrição:**

Eu como QA,  
Gostaria de estar com o aplicativo Apponte.me Colaborador aberto na tela de login, com o colaborador de referência desta bateria cadastrado, cerca de referência desta bateria ativa e vigente, dispositivo com câmera funcionando e conexão à internet ativa,  
Porque assim consigo validar o primeiro acesso, as permissões e o alerta fora da cerca.

---

## PC-03 — Colaborador autenticado com localização disponível

**Título:** Colaborador autenticado no Apponte.me Colaborador com localização disponível

**Descrição:**

Eu como QA,  
Gostaria de estar logado no aplicativo Apponte.me Colaborador com e-mail e senha válidos do colaborador de referência desta bateria, permissão de localização concedida (Permitir sempre ou Durante o uso), conexão à internet ativa e cerca vigente,  
Porque assim consigo marcar ponto e observar o alerta sem repetir o login.

---

## PC-04 — Colaborador autenticado com localização desativada

**Título:** Colaborador autenticado no Apponte.me Colaborador com localização desativada

**Descrição:**

Eu como QA,  
Gostaria de estar logado no Apponte.me Colaborador, com a permissão de Localização desativada nas Configurações do aparelho,  
Porque assim consigo validar o alerta sem geolocalização sem repetir o login.

---

## PC-05 — Alerta fora da cerca ainda aberto

**Título:** Alerta de Cerca Virtual aberto no Apponte.me Colaborador

**Descrição:**

Eu como QA,  
Gostaria de estar com o alerta de marcação fora da área esperada ainda visível no Apponte.me Colaborador, após o TC anterior ter pedido para não tocar em “Sim”,  
Porque assim consigo tocar em “Não” sem repetir a marcação.

---

## Mapeamento (1 PC por teste)

| TCID | Test Summary | PC |
| --- | --- | --- |
| 1 | Marque ponto fora da cerca. | PC-02 |
| 2 | Marque ponto dentro da cerca. | PC-03 |
| 3 | Marque ponto sem localização. | PC-03 |
| 4 | Marque ponto com localização disponível. | PC-04 |
| 5 | Observe o campo de justificativa no alerta. | PC-03 |
| 6 | Marque ponto dentro da cerca sem o campo de justificativa. | PC-03 |
| 7 | Observe os botões Sim e Não no alerta. | PC-03 |
| 8 | Marque ponto dentro da cerca sem os botões do alerta. | PC-03 |
| 9 | Observe o alerta sem o nome da cerca. | PC-03 |
| 10 | Observe o alerta sem localização sem o nome da cerca. | PC-03 |
| 11 | Confirme a marcação com Sim. | PC-04 |
| 12 | Tente concluir a marcação sem tocar em Sim. | PC-03 |
| 13 | Cancele a marcação com Não. | PC-05 |
| 14 | Consulte o Histórico após cancelar com Não. | PC-01 |
| 15 | Confirme a marcação sem justificativa. | PC-03 |
| 16 | Confirme a marcação com justificativa. | PC-03 |
