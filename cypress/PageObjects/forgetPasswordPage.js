class ForgetPasswordPage {
    visit() {
        cy.visit('https://portal.zeusagro.com/login')// Visita a página de login
    }

    labelEmail() {
        cy.get('[data-qa="logo_login"]').should('have.text', 'Email:')
    }
    fillEmail(email) {
        cy.get('[data-qa="campo_email"]').type(email) // Preenche o campo de e-mail
    }

    labelEsqueciSenha() {
        cy.get('small').should('have.text', 'Esqueci a senha')
    }

    botaoEsqueciSenha() {
        cy.get('small').click()
    }

    botaoEnviar() {
        cy.get('[data-qa="botao_enviar"]').click() // Clica no botão de envio
    }

    labelEnvioToken() {
        cy.get('.text-light').should('have.text', 'Enviaremos um código de verificação para você redefinir sua senha.')
    }

    confirmLoginPageUrl() {
        cy.url()
    }
    mensagemTokenEnviado() {
        cy.get('.text-center').should('have.text', 'Insira o código de verificação recebido e redefina sua senha.')
    }
}

export default ForgetPasswordPage
