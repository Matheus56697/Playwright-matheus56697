import {
  When,
  Then
} from '@cucumber/cucumber';

import { page } from '../hooks/hooks';

import { EmailPage } from '../pages/EmailPage';

import { testData } from '../utils/testData';

When(
  'acesso a caixa de e-mail do responsável fiscal',
  async () => {

    const emailPage = new EmailPage(page);

    await emailPage.abrirCaixaEmail();

  }
);

Then(
  'devo localizar o e-mail de validação do responsável fiscal',
  async () => {

    const emailPage = new EmailPage(page);

    await emailPage.validarEmailRecebido(
      testData.responsavelFiscalEmail
    );

  }
);

Then(
  'devo validar o e-mail do responsável fiscal',
  async () => {

    const emailPage = new EmailPage(page);

    await emailPage.validarEmailDoResponsavelFiscal(
      testData.responsavelFiscalEmail
    );

  }
);

Then(
  'devo visualizar a confirmação de e-mail validado',
  async () => {

    const emailPage = new EmailPage(page);

    await emailPage.validarConfirmacaoEmailValidado();

  }
);

When(
  'realizo login novamente no painel',
  async () => {

    const emailPage = new EmailPage(page);

    await emailPage.realizarLoginNovamente();

  }
);