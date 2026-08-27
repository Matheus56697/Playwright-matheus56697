# language: pt

@cadastro
@cadastro-staging
@smoke
@regression
Funcionalidade: Cadastro staging — fluxo feliz

  Como visitante da plataforma
  Quero concluir um cadastro válido em staging
  Para acessar o sistema Apponte.me

  Cenario: Realizar cadastro completo staging com validação de email no Mailhog
    Dado que acesso a página de cadastro staging
    Quando preencho os dados do novo usuário
    E confirmo o cadastro
    E preencho os dados de endereço
    E confirmo o endereço
    E preencho os documentos da empresa
    E confirmo os documentos
    E preencho os termos
    E confirmo os termos
    Entao o usuário deve ser cadastrado com sucesso
    E valido o email enviado no mailhog
