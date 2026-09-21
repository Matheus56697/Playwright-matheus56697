# -*- coding: utf-8 -*-
from pathlib import Path

rows = []
DOCS = Path(__file__).resolve().parent


def add(tc, summary, desc, prio, action, data="", result=""):
    if summary:
        rows.append((str(tc), summary, desc, prio, "Manual", action, data, result))
    else:
        rows.append((str(tc), "", "", "", "", action, data, result))


def punch(tc, already_logged=True):
    if already_logged:
        add(
            tc,
            "",
            "",
            "",
            "Abra o aplicativo “Apponte.me Colaborador”, já autenticado da sessão anterior.",
            "Colaborador de referência desta bateria.",
        )
    add(tc, "", "", "", "Toque em “Marcar ponto”.", "")
    add(
        tc,
        "",
        "",
        "",
        "Selecione um tipo de marcação (Entrada, Saída para almoço, Retorno do almoço ou Saída).",
        "",
    )
    add(tc, "", "", "", "Toque no botão circular branco para capturar a foto.", "")
    add(tc, "", "", "", "Toque em “Confirmar”.", "")


def gps(tc, ativar=True):
    add(tc, "", "", "", "No aparelho, abra Configurações.", "")
    add(tc, "", "", "", "Procure por aplicativos ou Apps.", "")
    add(tc, "", "", "", "Procure o Apponte.me Colaborador.", "")
    add(tc, "", "", "", "Vá em permissões.", "")
    if ativar:
        add(
            tc,
            "",
            "",
            "",
            "Ative a permissão de “Localização” com “Permitir sempre” ou “Durante o uso”.",
            "Localização disponível.",
        )
    else:
        add(tc, "", "", "", "Desative a permissão de “Localização”.", "Localização indisponível.")


def historico(tc, last_result="", primeiro=False):
    if primeiro:
        add(
            tc,
            "",
            "",
            "",
            "Acesse o Painel Administrativo com um login e senha válido.",
            "Usuário Administrador.",
        )
    else:
        add(tc, "", "", "", "Acesse o Painel Administrativo.", "Usuário Administrador.")
    add(tc, "", "", "", "Clique em “Colaboradores” no menu lateral esquerdo.", "")
    add(tc, "", "", "", "Localize o departamento do colaborador de referência desta bateria.", "")
    add(tc, "", "", "", "Clique no símbolo de “+” no final do departamento.", "")
    add(tc, "", "", "", "Clique no colaborador de referência desta bateria.", "")
    add(tc, "", "", "", "Clique na aba “Histórico”.", "")
    add(tc, "", "", "", "Localize a marcação realizada pela data e pelo horário.", "", last_result)


def sim_vazio(tc):
    add(tc, "", "", "", "Deixe o campo de justificativa vazio.", "Justificativa vazia.")
    add(tc, "", "", "", "Toque em “Sim”.", "")
    add(tc, "", "", "", "Aguarde a conclusão e a sincronização da marcação.", "")


# --- 1 alerta fora da cerca ---
add(
    1,
    "Marque ponto fora da cerca.",
    "Verificar se o Apponte.me Colaborador exibe o alerta quando a marcação ocorre fora da cerca.",
    "High",
    "Acesse o aplicativo “Apponte.me Colaborador”.",
    "Colaborador de referência desta bateria, com a cerca de referência desta bateria ativa e vigente.",
)
add(1, "", "", "", "Preencha o campo “E-mail” com o e-mail do colaborador válido.", "")
add(1, "", "", "", "Preencha o campo “Senha” com a senha correta do colaborador.", "")
add(1, "", "", "", "Toque em “Entrar”.", "")
add(1, "", "", "", "Quando o sistema solicitar a permissão da câmera, selecione “Permitir sempre” ou “Durante o uso do app”.", "")
add(1, "", "", "", "Na permissão de localização, clique em “Permitir sempre”. Caso não exista essa opção, clique em “Permitir durante o uso”.", "")
add(1, "", "", "", "Certifique-se de que o dispositivo esteja conectado à internet.", "Internet disponível.")
add(1, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca. Localização disponível.")
punch(1, already_logged=False)
add(1, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
sim_vazio(1)
add(
    1,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema deve exibir o alerta de marcação fora da cerca no Apponte.me Colaborador.",
)

# --- 2 sem alerta dentro da cerca ---
add(
    2,
    "Marque ponto dentro da cerca.",
    "Verificar se o Apponte.me Colaborador não exibe o alerta de fora da cerca quando a marcação ocorre dentro da área.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível. Cerca de referência desta bateria ativa e vigente.",
)
add(2, "", "", "", "Posicione o dispositivo dentro de uma área da cerca de referência desta bateria.", "Dentro da cerca.")
punch(2)
add(2, "", "", "", "Observe se o aplicativo apresenta alerta de Cerca Virtual.", "")
add(
    2,
    "",
    "",
    "",
    "Aguarde a conclusão e a sincronização da marcação.",
    "",
    "O sistema não deve exibir o alerta de marcação fora da cerca.",
)

# --- 3 alerta sem localização ---
add(
    3,
    "Marque ponto sem localização.",
    "Verificar se o Apponte.me Colaborador exibe o alerta quando não é possível coletar a geolocalização.",
    "High",
    "No aparelho, abra Configurações.",
    "",
)
add(3, "", "", "", "Procure por aplicativos ou Apps.", "")
add(3, "", "", "", "Procure o Apponte.me Colaborador.", "")
add(3, "", "", "", "Vá em permissões.", "")
add(3, "", "", "", "Desative a permissão de “Localização”.", "Localização indisponível.")
punch(3)
add(
    3,
    "",
    "",
    "",
    "Observe o alerta de localização inconsistente, informando que a marcação não possui dados de geolocalização.",
    "",
)
sim_vazio(3)
add(
    3,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema deve exibir o alerta de que não foi possível coletar a localização.",
)

# --- 4 sem alerta de localização inconsistente ---
add(
    4,
    "Marque ponto com localização disponível.",
    "Verificar se o Apponte.me Colaborador não exibe o alerta de localização inconsistente quando a geolocalização é coletada.",
    "High",
    "No aparelho, abra Configurações.",
    "",
)
add(4, "", "", "", "Procure por aplicativos ou Apps.", "")
add(4, "", "", "", "Procure o Apponte.me Colaborador.", "")
add(4, "", "", "", "Vá em permissões.", "")
add(4, "", "", "", "Ative a permissão de “Localização” com “Permitir sempre” ou “Durante o uso”.", "Localização disponível.")
add(4, "", "", "", "Posicione o dispositivo dentro de uma área da cerca de referência desta bateria.", "Dentro da cerca.")
punch(4)
add(4, "", "", "", "Observe se o aplicativo apresenta alerta de localização inconsistente.", "")
add(
    4,
    "",
    "",
    "",
    "Aguarde a conclusão e a sincronização da marcação.",
    "",
    "O sistema não deve exibir o alerta de localização inconsistente quando houver geolocalização.",
)

# --- 5 campo justificativa ---
add(
    5,
    "Observe o campo de justificativa no alerta.",
    "Verificar se o alerta fora da cerca exibe o campo de justificativa opcional.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(5, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(5)
add(5, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
add(5, "", "", "", "Observe o campo “Justificativa (opcional)”.", "")
sim_vazio(5)
add(
    5,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema deve exibir o campo de justificativa opcional no alerta.",
)

# --- 6 sem campo justificativa dentro ---
add(
    6,
    "Marque ponto dentro da cerca sem o campo de justificativa.",
    "Verificar se o campo de justificativa do alerta não aparece quando a marcação ocorre dentro da cerca.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(6, "", "", "", "Posicione o dispositivo dentro de uma área da cerca de referência desta bateria.", "Dentro da cerca.")
punch(6)
add(6, "", "", "", "Observe se o aplicativo apresenta o campo “Justificativa (opcional)”.", "")
add(
    6,
    "",
    "",
    "",
    "Aguarde a conclusão e a sincronização da marcação.",
    "",
    "O sistema não deve exibir o campo de justificativa do alerta quando a marcação ocorre dentro da cerca.",
)

# --- 7 botões Sim e Não ---
add(
    7,
    "Observe os botões Sim e Não no alerta.",
    "Verificar se o alerta fora da cerca exibe os botões “Sim” e “Não”.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(7, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(7)
add(7, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
add(7, "", "", "", "Observe os botões “Sim” e “Não”.", "")
sim_vazio(7)
add(
    7,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema deve exibir os botões “Sim” e “Não” no alerta.",
)

# --- 8 sem botões do alerta dentro ---
add(
    8,
    "Marque ponto dentro da cerca sem os botões do alerta.",
    "Verificar se os botões “Sim” e “Não” do alerta de Cerca Virtual não aparecem quando a marcação ocorre dentro da cerca.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(8, "", "", "", "Posicione o dispositivo dentro de uma área da cerca de referência desta bateria.", "Dentro da cerca.")
punch(8)
add(8, "", "", "", "Observe se o aplicativo apresenta os botões “Sim” e “Não” do alerta de Cerca Virtual.", "")
add(
    8,
    "",
    "",
    "",
    "Aguarde a conclusão e a sincronização da marcação.",
    "",
    "O sistema não deve exibir os botões “Sim” e “Não” do alerta de Cerca Virtual quando a marcação ocorre dentro da cerca.",
)

# --- 9 sem nome da cerca (fora) ---
add(
    9,
    "Observe o alerta sem o nome da cerca.",
    "Verificar se o alerta fora da cerca não exibe o nome da cerca ao colaborador.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(9, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(9)
add(9, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
add(
    9,
    "",
    "",
    "",
    "Observe se o alerta apresenta o nome da cerca de referência desta bateria.",
    "Nome da cerca de referência desta bateria.",
)
sim_vazio(9)
add(
    9,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema não deve exibir o nome da cerca no alerta ao colaborador.",
)

# --- 10 sem nome da cerca (sem GPS) ---
add(
    10,
    "Observe o alerta sem localização sem o nome da cerca.",
    "Verificar se o alerta sem geolocalização também não exibe o nome da cerca ao colaborador.",
    "High",
    "No aparelho, abra Configurações.",
    "",
)
add(10, "", "", "", "Procure por aplicativos ou Apps.", "")
add(10, "", "", "", "Procure o Apponte.me Colaborador.", "")
add(10, "", "", "", "Vá em permissões.", "")
add(10, "", "", "", "Desative a permissão de “Localização”.", "Localização indisponível.")
punch(10)
add(
    10,
    "",
    "",
    "",
    "Observe o alerta de localização inconsistente, informando que a marcação não possui dados de geolocalização.",
    "",
)
add(
    10,
    "",
    "",
    "",
    "Observe se o alerta apresenta o nome da cerca de referência desta bateria.",
    "Nome da cerca de referência desta bateria.",
)
sim_vazio(10)
add(
    10,
    "",
    "",
    "",
    "Observe o retorno à tela inicial de marcação.",
    "",
    "O sistema não deve exibir o nome da cerca no alerta sem geolocalização.",
)

# --- 11 Sim conclui ---
add(
    11,
    "Confirme a marcação com Sim.",
    "Verificar se o toque em “Sim” no alerta conclui a marcação no Apponte.me Colaborador.",
    "High",
    "No aparelho, abra Configurações.",
    "",
)
add(11, "", "", "", "Procure por aplicativos ou Apps.", "")
add(11, "", "", "", "Procure o Apponte.me Colaborador.", "")
add(11, "", "", "", "Vá em permissões.", "")
add(11, "", "", "", "Ative a permissão de “Localização” com “Permitir sempre” ou “Durante o uso”.", "Localização disponível.")
add(11, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(11)
add(11, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
sim_vazio(11)
historico(
    11,
    "O sistema deve concluir a marcação ao tocar em “Sim” e registrar o evento no Histórico.",
    primeiro=True,
)

# --- 12 sem Sim não conclui ---
add(
    12,
    "Tente concluir a marcação sem tocar em Sim.",
    "Verificar se a marcação não é concluída enquanto o colaborador permanece no alerta sem tocar em “Sim”.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(12, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(12)
add(12, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
add(
    12,
    "",
    "",
    "",
    "Mantenha o alerta aberto sem tocar em “Sim”.",
    "",
    "O sistema não deve concluir a marcação sem o toque em “Sim”.",
)

# --- 13 Não volta à tela principal ---
add(
    13,
    "Cancele a marcação com Não.",
    "Verificar se o toque em “Não” cancela a marcação e retorna à tela principal.",
    "High",
    "Observe o alerta de marcação fora da área esperada ainda aberto da sessão anterior.",
    "",
)
add(13, "", "", "", "Toque em “Não”.", "")
add(
    13,
    "",
    "",
    "",
    "Observe a tela inicial de marcação do Apponte.me Colaborador.",
    "",
    "O sistema deve cancelar a marcação e retornar à tela principal.",
)

# --- 14 Histórico após Não ---
add(
    14,
    "Consulte o Histórico após cancelar com Não.",
    "Verificar se a marcação cancelada com “Não” não é registrada no Histórico.",
    "High",
    "Acesse o Painel Administrativo.",
    "Usuário Administrador.",
)
add(14, "", "", "", "Clique em “Colaboradores” no menu lateral esquerdo.", "")
add(14, "", "", "", "Localize o departamento do colaborador de referência desta bateria.", "")
add(14, "", "", "", "Clique no símbolo de “+” no final do departamento.", "")
add(14, "", "", "", "Clique no colaborador de referência desta bateria.", "")
add(14, "", "", "", "Clique na aba “Histórico”.", "")
add(
    14,
    "",
    "",
    "",
    "Localize se existe marcação no horário do cancelamento com “Não”.",
    "Horário da tentativa cancelada.",
    "O sistema não deve registrar no Histórico a marcação cancelada com “Não”.",
)

# --- 15 Sim sem justificativa ---
add(
    15,
    "Confirme a marcação sem justificativa.",
    "Verificar se o Apponte.me Colaborador conclui a marcação com o campo de justificativa vazio.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(15, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(15)
add(15, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
sim_vazio(15)
historico(
    15,
    "O sistema deve concluir a marcação mesmo com a justificativa vazia.",
)

# --- 16 Sim com justificativa ---
add(
    16,
    "Confirme a marcação com justificativa.",
    "Verificar se o campo de justificativa permanece opcional e ainda aceita texto quando preenchido.",
    "High",
    "Certifique-se de que a localização do dispositivo esteja disponível para o aplicativo.",
    "Localização disponível.",
)
add(16, "", "", "", "Posicione o dispositivo fora da área da cerca de referência desta bateria.", "Fora da cerca.")
punch(16)
add(16, "", "", "", "Observe o alerta de marcação fora da área esperada.", "")
add(16, "", "", "", "Preencha o campo “Justificativa (opcional)”.", "Texto de justificativa.")
add(16, "", "", "", "Toque em “Sim”.", "")
add(16, "", "", "", "Aguarde a conclusão e a sincronização da marcação.", "")
historico(
    16,
    "O sistema deve concluir a marcação com a justificativa preenchida e manter o campo como opcional.",
)


def esc(c):
    return str(c).replace("|", "\\|").replace("\n", " ")


header = ["TCID", "Test Summary", "Description", "Test Priority", "Test Type", "Action", "Data", "Result"]
tsv = DOCS / "testes-manuais-cerca-alertas-colaborador.tsv"
md = DOCS / "testes-manuais-cerca-alertas-colaborador.md"

with tsv.open("w", encoding="utf-8") as f:
    f.write("\t".join(header) + "\n")
    for r in rows:
        f.write("\t".join(r) + "\n")

md_lines = [
    "# Testes manuais — Alertas no Apponte.me Colaborador (T4)",
    "",
    "Fluxo de alerta e confirmação **somente no Apponte.me Colaborador**. Sem Relógio (issue separada). Sem associação em lote.",
    "**16 testes**. Login do colaborador só no **TC 1**. Permissão de localização só quando o estado muda (desligar no TC 3 e no TC 10; religar no TC 4 e no TC 11). Login do Painel só no **TC 11** (primeiro Histórico).",
    "Massa: cerca de referência desta bateria ativa e vigente no colaborador de referência desta bateria.",
    "",
    "## Regras da suíte",
    "",
    "- Action em imperativo (`Acesse`, `Toque`, `Observe`, `Preencha`).",
    "- Result somente na última linha de cada TC.",
    "- Não repetir e-mail, senha e Entrar se o teste anterior não pediu para deslogar.",
    "- TC 12 deixa o alerta aberto; o TC 13 parte desse alerta e toca em “Não”.",
    "",
    "| " + " | ".join(header) + " |",
    "| " + " | ".join(["---"] * 8) + " |",
]
for r in rows:
    cells = list(r) + [""] * (8 - len(r))
    md_lines.append("| " + " | ".join(esc(c) for c in cells[:8]) + " |")
md.write_text("\n".join(md_lines) + "\n", encoding="utf-8")
print(len(rows), "rows", sorted({int(r[0]) for r in rows if r[1]}))
