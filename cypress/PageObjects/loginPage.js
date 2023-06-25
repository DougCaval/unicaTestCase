class LoginPage {

  //LoginPage components
  visit() {
    cy.visit('https://portal.zeusagro.com/login')// Visita a página de login
  }

  logo(){
    cy.get('[data-qa="logo_login"]')//Procura a Logo da Zeus na página
  }

  //EMAIL
  labelEmail(labelMail){
    cy.get(':nth-child(2) > .text-white').should('have.text',labelMail)
  }
  fillEmail(email) {
    cy.get('[data-qa="campo_email"]').type(email, { delay: 200}) // Preenche o campo de e-mail
  }

  emailObrigatório(emailObrigatorio){
    cy.get(':nth-child(2) > .justify-content-center > small').should('have.text', emailObrigatorio)
  }


  //SENHA
  labelPassword(labelPassword){
    cy.get('.mb-4 > .text-white').should('have.text',labelPassword)
  }
  fillPassword(password) {
    cy.get('[data-qa="campo_senha"]').type(password, {delay: 200}) // Preenche o campo de senha
  }

  labelEsqueciSenha(){
    cy.get('small').should('have.text','Esqueci a senha')
  }

  //ESQUECI SENHA
  botaoEsqueciSenha(){
    cy.get('small').click()
  }

  //ACESSAR
  botaoAcessar() {
    cy.get('[data-qa="botao_login"]').click() // Clica no botão de envio
  }

  confirmLoginPageUrl(){
    cy.url()
    
    
  }
  cypressWait(time){
    cy.wait(time)
  }

  domElements(mail){
    cy.get('[data-qa="campo_email"]')
      .type(mail).should('have.value', mail)
      

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type(mail, { delay: 100 })
      .should('have.value', mail)

    //cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      //.type('disabled error checking', { force: true })
      //.should('have.value', 'disabled error checking')
  }

  dadosDeLogin(){
    
  }
}

export default LoginPage
