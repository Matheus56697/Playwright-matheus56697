import { Locator, Page, expect } from '@playwright/test';

import { BasePage } from './BasePage';

import {
  Colaborador,
  ColaboradorFactory
} from '../utils/factories/ColaboradorFactory';

export class ColaboradorPage extends BasePage {

  constructor(page: Page) {

    super(page);
  }

  private campo(
    seletor: string
  ): Locator {

    return this.page.locator(seletor);
  }

  private async preencherSeVisivel(
    locator: Locator,
    texto: string,
    opcoes?: {
      pausaMs?: number;
      digitarDevagar?: boolean;
    }
  ) {

    const visivel =
      await locator.isVisible({ timeout: 3000 })
        .catch(() => false);

    if (!visivel) {
      return;
    }

    await this.preencherCampo(
      locator,
      texto,
      opcoes
    );
  }

  private extrairCompanyId(): string {

    const match = this.page.url().match(
      /companies\/(\d+)/
    );

    if (!match) {

      throw new Error(
        'Não foi possível identificar o ID da empresa na URL do painel.'
      );
    }

    return match[1];
  }

  async garantirAbaColaboradores() {

    await this.page.waitForURL(
      /employees/,
      { timeout: 60000 }
    );

    if (!/\/employees\/?$/.test(this.page.url())) {

      await this.page
        .getByRole('link', { name: /^colaboradores$/i })
        .first()
        .click();

      await this.page.waitForURL(
        /\/employees\/?$/,
        { timeout: 60000 }
      );
    }

    await this.page.waitForTimeout(1000);

    await this.screenshot(
      'aba-colaboradores'
    );
  }

  async abrirFormularioNovoColaborador() {

    await this.garantirAbaColaboradores();

    const companyId =
      this.extrairCompanyId();

      const baseUrl =
      process.env.PANEL_BASE_URL_STAGING ||
      'https://staging.apponte.me';
    
      await this.navegar(
        `${baseUrl}/painel/companies/${companyId}/employees/create`
      );

    console.log(
      'URL ATUAL:',
      await this.page.url()
    );
    
    await this.screenshot(
      'debug-formulario-colaborador'
    );

    await expect(
      this.campo('input[name="employee-name"]')
    ).toBeVisible({
      timeout: 60000
    });

    await this.page.waitForTimeout(
      this.pausaFormularioMs * 2
    );

    await this.screenshot(
      'formulario-novo-colaborador'
    );
  }

  async preencherColaborador(
    colaborador: Colaborador,
    opcoes: {
      autorizarAppColaborador?: boolean;
    } = {}
  ) {

    const {
      autorizarAppColaborador = true
    } = opcoes;

    await this.page.waitForLoadState(
      'domcontentloaded'
    );

    await this.preencherCampo(
      this.campo('input[name="employee-name"]'),
      colaborador.nome
    );

    await this.preencherSeVisivel(
      this.campo('input[name="employee-rg"]'),
      colaborador.rg
    );

    await this.preencherCampo(
      this.campo('input[name="employee-cpf"]'),
      colaborador.cpf,
      { digitarDevagar: true }
    );

    await this.preencherSeVisivel(
      this.campo('input[name="employee-pis"]'),
      colaborador.pis
    );

    await this.preencherSeVisivel(
      this.campo('input[name="employee-profession"]'),
      colaborador.cargo
    );

    await this.preencherCampo(
      this.campo('input[name="admission_at"]'),
      colaborador.dataAdmissao
    );

    await this.selecionarPrimeiraOpcao(
      this.campo('select[name="employee-department"]'),
      this.pausaFormularioMs + 200
    );

    const turno = this.campo(
      'select[name="employeeShift"]'
    );

    if (
      await turno.isVisible({ timeout: 5000 })
        .catch(() => false)
    ) {

      await this.selecionarPrimeiraOpcao(
        turno,
        this.pausaFormularioMs + 200
      );
    }

    await this.preencherCampo(
      this.campo('input[name="employee-enrollment"]'),
      colaborador.matricula,
      { digitarDevagar: true }
    );

    await this.preencherCampo(
      this.campo('input[name="employee-pin"]'),
      colaborador.pin,
      { digitarDevagar: true }
    );

    await this.preencherSeVisivel(
      this.campo('input[name="employee-phone"]'),
      colaborador.celular,
      { digitarDevagar: true }
    );

    if (autorizarAppColaborador) {

      const checkboxApp = this.campo(
        'input[name="mobile_authorized"]'
      );

      await checkboxApp.scrollIntoViewIfNeeded();

      await checkboxApp.check();

      await this.page.waitForTimeout(
        this.pausaFormularioMs * 2
      );

      await expect(
        this.campo('input[name="employee-email"]')
      ).toBeVisible({
        timeout: 15000
      });

      await this.preencherCampo(
        this.campo('input[name="employee-email"]'),
        colaborador.email
      );

      const camposSenha = this.page.locator(
        'input[type="password"]:visible'
      );

      await expect(camposSenha.first()).toBeVisible({
        timeout: 15000
      });

      await this.preencherCampo(
        camposSenha.first(),
        colaborador.senha
      );

      if (await camposSenha.count() > 1) {

        await this.preencherCampo(
          camposSenha.nth(1),
          colaborador.confirmarSenha
        );
      }

      const comprovanteEmail = this.campo(
        'input[name="is_email_notification_authorized"]'
      );

      if (
        await comprovanteEmail.isVisible({ timeout: 3000 })
          .catch(() => false)
      ) {

        await comprovanteEmail.scrollIntoViewIfNeeded();
        await comprovanteEmail.check();
        await this.page.waitForTimeout(
          this.pausaFormularioMs
        );
      }
    }

    await this.page.waitForTimeout(
      this.pausaFormularioMs
    );

    await this.screenshot(
      'colaborador-preenchido'
    );
  }

  private botaoCadastrarFinal() {

    return this.page
      .getByRole('button', { name: /cadastrar/i })
      .last();
  }

  private async prepararBotaoCadastrar() {

    await expect(
      this.campo('input[name="employee-name"]')
    ).toHaveValue(/.+/, {
      timeout: 15000
    });

    const botaoCadastrar =
      this.botaoCadastrarFinal();

    await botaoCadastrar.scrollIntoViewIfNeeded();

    await expect(botaoCadastrar).toBeVisible({
      timeout: 30000
    });

    await expect(botaoCadastrar).toBeEnabled({
      timeout: 30000
    });

    await this.page.waitForTimeout(
      this.pausaFormularioMs
    );

    return botaoCadastrar;
  }

  private seletoresErrosValidacao(): string {

    return [
      '.alert-danger',
      '.text-danger',
      '.invalid-feedback',
      '.help-block',
      '[role="alert"]',
      '.toast-body',
      '.swal2-html-container',
      '.swal2-content'
    ].join(', ');
  }

  private async obterTextoErrosValidacao(): Promise<string> {

    const errosValidacao = this.page.locator(
      this.seletoresErrosValidacao()
    ).filter({ hasText: /.+/ });

    return (await errosValidacao.allTextContents())
      .map((t) => t.trim())
      .filter(Boolean)
      .join(' | ');
  }

  private textoIndicaMatriculaDuplicada(
    texto: string
  ): boolean {

    if (!texto) {
      return false;
    }

    const normalizado = texto.toLowerCase();

    if (
      /matr[ií]cula|enrollment|employee-enrollment|employee_enrollment/
        .test(normalizado)
      && /j[aá]|exist|cadastrad|utilizad|em uso|duplicad|informad|taken|unique|[uú]nic|repetid|mesma|already/
        .test(normalizado)
    ) {
      return true;
    }

    return /matr[ií]cula.*(j[aá]|exist|cadastrad|utilizad|em uso|duplicad|informad)/i
      .test(texto)
      || /(j[aá]|exist|cadastrad|utilizad|em uso|duplicad|informad).*matr[ií]cula/i
        .test(texto);
  }

  private textoIndicaCpfOuEmailDuplicado(
    texto: string
  ): boolean {

    if (!texto) {
      return false;
    }

    const normalizado = texto.toLowerCase();

    return (
      /cpf|e-?mail|email/.test(normalizado)
      && /j[aá]|exist|cadastrad|utilizad|em uso|duplicad|informad|taken|unique|[uú]nic|already/
        .test(normalizado)
    );
  }

  private async campoMatriculaInvalido(): Promise<boolean> {

    const campoMatricula =
      this.campo('input[name="employee-enrollment"]');

    return campoMatricula.evaluate((el) => (
      el.classList.contains('is-invalid')
      || el.getAttribute('aria-invalid') === 'true'
    )).catch(() => false);
  }

  private async erroMatriculaDuplicadaNaPagina(): Promise<boolean> {

    if (await this.campoMatriculaInvalido()) {
      return true;
    }

    const textoErros =
      await this.obterTextoErrosValidacao();

    if (this.textoIndicaMatriculaDuplicada(textoErros)) {
      return true;
    }

    const textosEnrollment = await this.page
      .locator(
        '[name="employee-enrollment"] ~ .invalid-feedback, ' +
        '[name="employee-enrollment"] + .invalid-feedback, ' +
        '[name="employee-enrollment"] ~ .text-danger, ' +
        'input[name="employee-enrollment"] ~ small'
      )
      .allTextContents()
      .catch(() => [] as string[]);

    return textosEnrollment.some((texto) =>
      this.textoIndicaMatriculaDuplicada(texto.trim())
    );
  }

  private respostaIndicaMatriculaDuplicada(
    corpoResposta: string
  ): boolean {

    if (!corpoResposta) {
      return false;
    }

    if (this.textoIndicaMatriculaDuplicada(corpoResposta)) {
      return true;
    }

    const normalizado = corpoResposta.toLowerCase();

    return (
      /employee-enrollment|employee_enrollment|"enrollment"/
        .test(normalizado)
      && /unique|taken|duplicat|already|exist|cadastrad/
        .test(normalizado)
    );
  }

  private async cadastroSalvoComSucesso(): Promise<boolean> {

    const url = this.page.url();

    if (/\/employees\/\d+/.test(url)) {
      return true;
    }

    if (/\/employees\/?$/.test(url)) {
      return true;
    }

    return this.page
      .getByText(
        /cadastrado|salvo|sucesso|criado com sucesso/i
      )
      .isVisible({ timeout: 3000 })
      .catch(() => false);
  }

  private async aguardarResultadoCadastro(
    corpoResposta?: string
  ): Promise<
    'sucesso' | 'matricula_duplicada' | 'falha'
  > {

    if (
      corpoResposta
      && this.respostaIndicaMatriculaDuplicada(corpoResposta)
    ) {
      return 'matricula_duplicada';
    }

    const limite = Date.now() + 35000;

    while (Date.now() < limite) {

      if (await this.cadastroSalvoComSucesso()) {
        return 'sucesso';
      }

      if (this.page.url().includes('/employees/create')) {

        if (await this.erroMatriculaDuplicadaNaPagina()) {
          return 'matricula_duplicada';
        }
      }

      await this.page.waitForTimeout(500);
    }

    if (await this.cadastroSalvoComSucesso()) {
      return 'sucesso';
    }

    if (
      this.page.url().includes('/employees/create')
      && await this.erroMatriculaDuplicadaNaPagina()
    ) {
      return 'matricula_duplicada';
    }

    return 'falha';
  }

  private async deveRetentarComNovaMatricula(): Promise<boolean> {

    if (!this.page.url().includes('/employees/create')) {
      return false;
    }

    if (await this.erroMatriculaDuplicadaNaPagina()) {
      return true;
    }

    const textoErros =
      await this.obterTextoErrosValidacao();

    if (this.textoIndicaCpfOuEmailDuplicado(textoErros)) {
      return false;
    }

    if (this.textoIndicaMatriculaDuplicada(textoErros)) {
      return true;
    }

    // CPF e e-mail são únicos no teste; permanecer no create indica matrícula duplicada.
    return !textoErros.trim();
  }

  private async atualizarMatricula(
    matricula: string
  ) {

    await this.preencherCampo(
      this.campo('input[name="employee-enrollment"]'),
      matricula,
      { digitarDevagar: true }
    );

    await this.page.waitForTimeout(
      this.pausaFormularioMs
    );
  }

  private async clicarCadastrarEAguardar(): Promise<
    'sucesso' | 'matricula_duplicada' | 'falha'
  > {

    const botaoCadastrar =
      await this.prepararBotaoCadastrar();

    const respostaPromise = this.page
      .waitForResponse(
        (resp) => {
          const url = resp.url().toLowerCase();
          const metodo = resp.request().method();

          return (
            (url.includes('/employees') || url.includes('/employee'))
            && ['POST', 'PUT', 'PATCH'].includes(metodo)
          );
        },
        { timeout: 35000 }
      )
      .catch(() => null);

    await botaoCadastrar.click();

    const resposta = await respostaPromise;

    const corpoResposta = resposta
      ? await resposta.text().catch(() => '')
      : '';

    return this.aguardarResultadoCadastro(corpoResposta);
  }

  async salvarColaborador(
    colaborador?: Colaborador
  ) {

    const maxTentativasMatricula = 30;
    let tentativa = 0;

    while (tentativa < maxTentativasMatricula) {

      tentativa++;

      let resultado =
        await this.clicarCadastrarEAguardar();

      if (
        resultado === 'falha'
        && colaborador
        && await this.deveRetentarComNovaMatricula()
      ) {
        resultado = 'matricula_duplicada';
      }

      if (resultado === 'sucesso') {

        await this.page.waitForLoadState(
          'domcontentloaded'
        );

        await this.screenshot(
          'colaborador-salvo'
        );

        if (tentativa > 1 && colaborador) {

          console.log(
            `Cadastro concluído na tentativa ${tentativa} ` +
            `com matrícula ${colaborador.matricula}`
          );
        }

        return;
      }

      if (
        resultado === 'matricula_duplicada'
        && colaborador
      ) {

        const novaMatricula =
          ColaboradorFactory.gerarMatricula();

        console.log(
          `Matrícula ${colaborador.matricula} já existe. ` +
          `Tentando ${novaMatricula} (tentativa ${tentativa}/${maxTentativasMatricula})`
        );

        colaborador.matricula = novaMatricula;

        await this.atualizarMatricula(novaMatricula);

        await this.screenshot(
          `matricula-duplicada-tentativa-${tentativa}`
        );

        continue;
      }

      const textoErros =
        await this.obterTextoErrosValidacao();

      throw new Error(
        textoErros
          ? `Cadastro não concluído: ${textoErros}`
          : `Cadastro não concluído após ${tentativa} tentativa(s). ` +
            'Verifique CPF, matrícula ou e-mail duplicados.'
      );
    }

    throw new Error(
      `Cadastro não concluído após ${maxTentativasMatricula} tentativas ` +
      `de matrícula${colaborador ? ` (última: ${colaborador.matricula})` : ''}.`
    );
  }

  async validarColaboradorCadastrado(
    colaborador: Colaborador
  ) {

    if (this.page.url().includes('/employees/create')) {

      const errosValidacao = this.page.locator(
        '.alert-danger, .text-danger, .invalid-feedback'
      ).filter({ hasText: /.+/ });

      const textoErros =
        (await errosValidacao.allTextContents())
          .map((t) => t.trim())
          .filter(Boolean)
          .join(' | ');

      throw new Error(
        textoErros
          ? `Cadastro não concluído: ${textoErros}`
          : 'Cadastro não concluído. Verifique CPF, matrícula ou e-mail duplicados.'
      );
    }

    await expect(this.page).toHaveURL(
      /\/employees\/\d+/,
      { timeout: 60000 }
    );

    await expect(
      this.page.getByText(colaborador.nome).first()
    ).toBeVisible({
      timeout: 60000
    });

    await this.screenshot(
      'colaborador-cadastrado-sucesso'
    );
  }

  async validarFormularioProntoParaSalvar() {

    await expect(
      this.campo('input[name="employee-name"]')
    ).toHaveValue(/.+/);

    await expect(
      this.botaoCadastrarFinal()
    ).toBeVisible();

    await this.screenshot(
      'colaborador-pronto-salvar'
    );
  }

  async acessarAbaColaboradores() {
    await this.page.waitForLoadState('domcontentloaded');
  
    let companyId: string;
  
    try {
      companyId = this.extrairCompanyId();
    } catch {
      const urlAtual = this.page.url();
  
      const match = urlAtual.match(/companies\/(\d+)/);
  
      if (!match) {
        throw new Error(
          `Não foi possível identificar o ID da empresa pela URL atual: ${urlAtual}`
        );
      }
  
      companyId = match[1];
    }
  
    const baseUrl =
  process.env.PANEL_BASE_URL_STAGING ||
  'https://staging.apponte.me';

  await this.navegar(
    `${baseUrl}/painel/companies/${companyId}/employees/create`
  );
  
  await this.page.waitForURL(
    /\/employees\/?$/,
    { timeout: 60000 }
  );
  
    await this.page.waitForLoadState('domcontentloaded');
  
    await this.screenshot('aba-colaboradores-evento');
  }
  
  async acessarPerfilPrimeiroColaborador() {
    await this.page.waitForLoadState('domcontentloaded');
  
    await this.page.waitForTimeout(1000);
  
    const linkColaborador = this.page
      .locator('a[href*="/employees/"]')
      .filter({
        hasNot: this.page.locator('a[href*="/employees/create"]')
      })
      .first();
  
    await expect(linkColaborador).toHaveAttribute(
      'href',
      /\/employees\/\d+/,
      { timeout: 60000 }
    );
  
    const href = await linkColaborador.getAttribute('href');
  
    if (!href) {
      throw new Error('Não foi possível capturar o link do perfil do colaborador.');
    }
  
    const baseUrl =
  process.env.PANEL_BASE_URL_STAGING ||
  'https://staging.apponte.me';

const urlPerfil = href.startsWith('http')
  ? href
  : `${baseUrl}${href}`;
  
    await this.navegar(urlPerfil);
  
    await this.page.waitForURL(
      /\/employees\/\d+/,
      { timeout: 60000 }
    );
  
    await this.page.waitForLoadState('domcontentloaded');
  
    await this.screenshot('perfil-colaborador-evento');
  }
  
  async filtrarDataValidaNoPerfil() {
    await this.page.waitForLoadState('domcontentloaded');
  
    const filtroPeriodo = this.page
      .getByText(/período|periodo/i)
      .first();
  
    const filtroVisivel = await filtroPeriodo
      .isVisible({ timeout: 8000 })
      .catch(() => false);
  
    if (filtroVisivel) {
      await filtroPeriodo.click();
  
      const botaoAplicar = this.page
        .getByRole('button', { name: /aplicar/i })
        .first();
  
      const aplicarVisivel = await botaoAplicar
        .isVisible({ timeout: 8000 })
        .catch(() => false);
  
      if (aplicarVisivel) {
        await botaoAplicar.click();
      }
    } else {
      console.log(
        'Filtro Período não encontrado. Seguindo com a data padrão do perfil.'
      );
    }
  
    await this.page.waitForTimeout(1500);
  
    await this.screenshot('data-filtrada-perfil-colaborador');
  }
  
  async clicarAdicionarEvento() {
    const botaoAdicionarEvento = this.page
      .getByRole('button', { name: /adicionar evento/i })
      .first();
  
    await expect(botaoAdicionarEvento).toBeVisible({
      timeout: 60000
    });
  
    await botaoAdicionarEvento.click();
  
    await this.screenshot('adicionar-evento-aberto');
  }
  
  async selecionarMarcacaoManual() {
    const opcaoMarcacaoManual = this.page
      .getByText(/marcação manual|marcacao manual/i)
      .first();
  
    await expect(opcaoMarcacaoManual).toBeVisible({
      timeout: 30000
    });
  
    await opcaoMarcacaoManual.click();
  
    await this.screenshot('marcacao-manual-selecionada');
  }
  
  async salvarMarcacaoManualSemCamposObrigatorios() {
    const botaoSalvar = this.page
      .getByRole('button', { name: /salvar/i })
      .last();
  
    await expect(botaoSalvar).toBeVisible({
      timeout: 30000
    });
  
    await botaoSalvar.click();
  
    await this.page.waitForTimeout(1000);
  
    await this.screenshot('marcacao-manual-validacoes');
  }
  
  async validarObrigatoriedadeMarcacaoManual() {
    const mensagensValidacao = this.page.locator(
      [
        '.invalid-feedback',
        '.text-danger',
        '.alert-danger',
        '.help-block',
        '[role="alert"]',
        'small'
      ].join(', ')
    ).filter({
      hasText: /obrigatório|obrigatoria|obrigatória|required|campo/i
    });
  
    await expect(mensagensValidacao.first()).toBeVisible({
      timeout: 30000
    });
  
    const textos = await mensagensValidacao.allTextContents();
  
    console.log(
      'VALIDAÇÕES ENCONTRADAS:',
      textos
        .map(texto => texto.trim())
        .filter(Boolean)
    );
  
    expect(
      textos
        .join(' ')
        .toLowerCase()
    ).toMatch(/obrigat|required|campo/);
  
    await this.screenshot('validacoes-obrigatorias-marcacao-manual');
  }
  
}
