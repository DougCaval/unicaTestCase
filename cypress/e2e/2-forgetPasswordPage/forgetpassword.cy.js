/// <reference types="cypress" />

import ForgetPasswordPage from "../../PageObjects/forgetPasswordPage"

describe('Pagina Esqueci a senha', () => {
  const forgetPasswordPage = new ForgetPasswordPage()
  beforeEach(() => {

    cy.visit('https://portal.zeusagro.com/login')
  })



  it('Ir para página Esqueci a senha', () => {

    forgetPasswordPage.labelEsqueciSenha
    forgetPasswordPage.botaoEsqueciSenha()
    forgetPasswordPage.labelEmail
    forgetPasswordPage.fillEmail('dougcaval.reis@gmail.com')
    forgetPasswordPage.botaoEnviar()
    forgetPasswordPage.labelEnvioToken()
    forgetPasswordPage.mensagemTokenEnviado()


  })


})
