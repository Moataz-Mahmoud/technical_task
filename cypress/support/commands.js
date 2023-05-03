Cypress.Commands.add('switchCountry', (country) => {
  cy.get('.head-links > .country-current').click();
  cy.contains(country).click()
})