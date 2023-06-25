import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the login page', () => {
  cy.visit('/login')
})

When('I fill in the email field with {string}', (email) => {
  cy.get('#email').type(email)
})

When('I fill in the password field with {string}', (password) => {
  cy.get('#password').type(password)
})

When('I submit the form', () => {
  cy.get('button[type="submit"]').click()
})

Then('I should be logged in', () => {
  // Realize asserções ou continue com o fluxo do teste
})
