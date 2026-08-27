# language: pt

@cadastro
@cadastro-validacao
@negativo
@regression
Funcionalidade: Cadastro staging — validações inválidas

  Como visitante da plataforma
  Quero ser bloqueado ao informar dados inválidos
  Para não criar conta com contato incorreto em staging

  Contexto:
    Dado que acesso a página de cadastro staging

  Cenario: Contato inválido - formulário vazio
    Quando tento avançar o cadastro sem preencher o contato
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Campo obrigatorio"

  Cenario: Contato inválido - sem nome
    Quando preencho os dados do novo usuário com
      | campo | valor |
      | nome  |       |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Campo obrigatorio"

  Cenario: Contato inválido - e-mail inválido
    Quando preencho os dados do novo usuário com
      | campo | valor          |
      | email | email-invalido |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "E-mail inválido"

  Cenario: Contato inválido - sem e-mail
    Quando preencho os dados do novo usuário com
      | campo | valor |
      | email |       |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Campo obrigatorio"

  Cenario: Contato inválido - CPF inválido
    Quando preencho os dados do novo usuário com
      | campo | valor       |
      | cpf   | 11111111111 |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "CPF inválido"

  Cenario: Contato inválido - sem CPF
    Quando preencho os dados do novo usuário com
      | campo | valor |
      | cpf   |       |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Campo obrigatorio"

  Cenario: Contato inválido - senha sem letra
    Quando preencho os dados do novo usuário com
      | campo          | valor    |
      | senha          | 12345678 |
      | confirmarSenha | 12345678 |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "A senha deve conter ao menos uma letra"

  Cenario: Contato inválido - senhas não coincidem
    Quando preencho os dados do novo usuário com
      | campo          | valor      |
      | senha          | Teste@1234 |
      | confirmarSenha | Outra@1234 |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "As senhas não coincidem, por favor tente novamente"

  Cenario: Contato inválido - celular inválido
    Quando preencho os dados do novo usuário com
      | campo   | valor |
      | celular | 11    |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Este número não parece correto"

  Cenario: Contato inválido - telefone inválido
    Quando preencho os dados do novo usuário com
      | campo    | valor |
      | telefone | 11    |
    E confirmo o cadastro
    Entao devo permanecer na etapa de contato
    E devo ver a mensagem de erro "Este número não parece correto"
