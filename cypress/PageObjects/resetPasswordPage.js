class ResetPasswordPage{
  

  visit() {
    cy.visit('https://portal.zeusagro.com/login')// Visita a página de login
  }

  logo(){
    cy.get('[data-qa="logo_login"]')//Procura a Logo da Zeus na página
  }

  confirmResetPage(labelConfirResetPage){
    cy.get('.text-light').should('have.text', labelConfirResetPage)
  }
   confirmTokenSended(tokenSended){
    cy.get('.text-center').should('have.text',tokenSended)
   }
   labelEmail(labelMail){
    cy.get(':nth-child(2) > .text-white').should('have.text',labelMail)
  }
  fillEmail(email) {
    cy.get('[data-qa="campo_email"]').type(email) // Preenche o campo de e-mail
  }

  labelPassword(){
    cy.get('.mb-4 > .text-white').should('have.text','Senha:')
  }
  fillPassword(password) {
    cy.get('[data-qa="campo_senha"]').type(password) // Preenche o campo de senha
  }

  labelEsqueciSenha(){
    cy.get('small').should('have.text','Esqueci a senha')
  }

  botaoEsqueciSenha(){
    cy.get('small').click()
  }
  botaoAcessar() {
    cy.get('[data-qa="botao_login"]').click() // Clica no botão de envio
  }

  labelCampoCodigo(labelCodigo){
    cy.get(':nth-child(2) > .text-white').should('have.text',labelCodigo)
  }
  inputCampoCodigo(newToken){
    cy.get('[data-qa="campo_codigo"]').type(newToken)
  }

  botaoEnviar() {
    cy.get('[data-qa="botao_enviar"]').click() // Clica no botão de envio
  }

  


}

export default ResetPasswordPage
