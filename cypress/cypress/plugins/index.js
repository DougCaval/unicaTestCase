const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  // Adicione quaisquer outras configurações necessárias

  return config
}
