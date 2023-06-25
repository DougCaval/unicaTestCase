/// <reference types="cypress" />

import LoginPage from "../../PageObjects/loginPage"


describe('Portal Zeus Agro', () => {
  const loginPage = new LoginPage()
  //Ambiente de teste 
  const zeusHomologacao = 'https://portal.zeusagro.com/login'
  const zeusProd = 'https://portal.zeusagro.com/login'
  const zeusPlataforma = 'http://plataforma.zeusagro.com/login'

  //Dados para Login
  const user = 'dougcaval.reis@gmail.com'
  const password = 'teste@2023'

  


  beforeEach(() => {

    cy.visit(zeusPlataforma, { failOnStatusCode: false })
  })

  it('Deve consumir o JSON da URL e fazer asserções', () => {
    cy.request('https://run.mocky.io/v3/6ad7980e-5fc1-425e-a8a3-28f10358e270')
      .its('body')
      .then((dados) => {
        // Acesse os dados do JSON
        const name = dados.name;
        const email = dados.email;
        const phone = dados.phone;

        // Faça asserções nos dados
        expect(name).to.eq('Doug Caval');
        expect(email).to.eq('dougcavale.reis@gmail.com');
        expect(phone).to.eq('998360023');
      });
  });

  it('Confirmar que estou na página de login ', () => {
    loginPage.confirmLoginPageUrl
  })

  it('Confirmar que renderizou os componentes na página de login ', () => {
 

   
   

    loginPage.logo
    loginPage.labelEmail('E-mail:')
    
    loginPage.labelPassword('Senha:')
    

    loginPage.botaoEsqueciSenha
    loginPage.botaoAcessar


  })

  it('Confirmar que E-mail é um campo obrigatório', () => {


    loginPage.fillEmail(' ')
    loginPage.botaoAcessar()
    loginPage.cypressWait(5000)
    loginPage.emailObrigatório('email é um campo obrigatório.')
     


  })

  it('Confirmar se senha é um campo obrigatório', () => {


    cy.get('.mb-4 > .text-white').should('have.text', 'Senha:')
    cy.get('[data-qa="campo_senha"]')
    cy.get('small').should('have.text', 'Esqueci a senha')
    cy.get('[data-qa="botao_login"]').click()
    cy.get('.mb-4 > .justify-content-center > small').should('have.text', 'password é um campo obrigatório.')

  })

  it('Inserir um e-mail no Campo E-mail', () => {
   

    cy.get(':nth-child(2) > .text-white').should('have.text', 'E-mail:')
    //cy.get('[data-qa="campo_email"]').type('dougcaval,reis@gmail.com')
    loginPage.fillEmail(user)

  })

  it('Inserir uma senha no campo Senha', () => {


    cy.get('.mb-4 > .text-white').should('have.text', 'Senha:')
    loginPage.fillPassword('test@2023')
    cy.get('small').should('have.text', 'Esqueci a senha')
    loginPage.botaoAcessar()


  })

  it('Clicar no botão Avançar', () => {



    cy.get('[data-qa="botao_login"]').click()


  })

  it('Ir para página Esqueci a senha', () => {


    cy.get('small').click()
    cy.get('.text-light').should('have.text', 'Enviaremos um código de verificação para você redefinir sua senha.')
    cy.get(':nth-child(2) > .text-white').should('have.text', 'E-mail:')
    cy.get('[data-qa="campo_email"]').type('dougcaval,reis@gmail.com')
    cy.get('small').click()


  })

 


})
