/// <reference types="cypress" />
import ResetPasswordPage from "../../PageObjects/resetPasswordPage"

describe('Reset Password', () => {
 const resetPasswordPage = new ResetPasswordPage()
  
  //Ambiente de teste 
  const zeusHomologacao = 'https://portal.zeusagro.com/login'
  const zeusProd = 'https://portal.zeusagro.com/login'
  
  //Dados User
  const usermail = 'dougcaval.reis@gmail.com'
  
  //Dados para cadastrar de nova senha 
  const newPassword = 'newpassword'
  const confirmNewPassword = newPassword

  //Recuperar token
  const token = '1234567'
  const msgtokensended =  'Insira o código de verificação recebido e redefina sua senha.'
  beforeEach(() => {

    cy.visit(zeusHomologacao)
  })

  it('Ir para página Esqueci a senha', () => {

    
    resetPasswordPage.botaoEsqueciSenha()
    resetPasswordPage.confirmResetPage('Enviaremos um código de verificação para você redefinir sua senha.')
    resetPasswordPage.labelEmail('E-mail:')
    resetPasswordPage.fillEmail(usermail)
    resetPasswordPage.botaoEnviar()
    resetPasswordPage.confirmTokenSended(msgtokensended)
    resetPasswordPage.labelCampoCodigo('Código de verificação:')
    resetPasswordPage.inputCampoCodigo(token)
    cy.get('[data-qa="campo_nova_senha"]').type('NovaSenha')
    cy.get('[data-qa="campo_nova_senha_check"]').type('NovaSenha')
    cy.get('[data-qa="botao_redefinir"]').click()
    cy.get('.justify-content-center > small').should('have.text','Código de verificação inválido!')


  })


})
