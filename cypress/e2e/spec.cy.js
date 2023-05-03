describe('validate subscription packages', () => {
  const env = Cypress.env();

  before(() => {
    cy.visit('/');
    cy.get('#jawwy-logo-web'); // make sure that the page loaded successfully
  });

  context('validate packages for UAE', () => {
    before(() => {
      cy.switchCountry(env.countries.ae);
    });

    it('validate the lite package', () => {
      cy.get('#name-lite').contains('Lite'); // validate the package type
      
      cy.get('#currency-lite > b').contains(env.packages.ae.lite_price); // validate the price
      cy.get('#currency-lite > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the classic package', () => {
      cy.get('#name-classic').contains('Classic'); // validate the package type
      
      cy.get('#currency-classic > b').contains(env.packages.ae.classic_price); // validate the price
      cy.get('#currency-classic > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the premium package', () => {
      cy.get('#name-premium').contains('Premium'); // validate the package type
      
      cy.get('#currency-premium > b').contains(env.packages.ae.premium_price); // validate the price
      cy.get('#currency-premium > i').contains(env.packages.currency); // validate the currency
    });
  });
  
  context('validate packages for Morocco', () => {
    before(() => {
      cy.switchCountry(env.countries.ma);
    });

    it('validate the lite package', () => {
      cy.get('#name-lite').contains('Lite'); // validate the package type
      
      cy.get('#currency-lite > b').contains(env.packages.ma.lite_price); // validate the price
      cy.get('#currency-lite > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the classic package', () => {
      cy.get('#name-classic').contains('Classic'); // validate the package type
      
      cy.get('#currency-classic > b').contains(env.packages.ma.classic_price); // validate the price
      cy.get('#currency-classic > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the premium package', () => {
      cy.get('#name-premium').contains('Premium'); // validate the package type
      
      cy.get('#currency-premium > b').contains(env.packages.ma.premium_price); // validate the price
      cy.get('#currency-premium > i').contains(env.packages.currency); // validate the currency
    });
  });

  context('validate packages for Palestine', () => {
    before(() => {
      cy.switchCountry(env.countries.ps);
    });

    it('validate the lite package', () => {
      cy.get('#name-lite').contains('Lite'); // validate the package type
      
      cy.get('#currency-lite > b').contains(env.packages.ps.lite_price); // validate the price
      cy.get('#currency-lite > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the classic package', () => {
      cy.get('#name-classic').contains('Classic'); // validate the package type
      
      cy.get('#currency-classic > b').contains(env.packages.ps.classic_price); // validate the price
      cy.get('#currency-classic > i').contains(env.packages.currency); // validate the currency
    });

    it('validate the premium package', () => {
      cy.get('#name-premium').contains('Premium'); // validate the package type
      
      cy.get('#currency-premium > b').contains(env.packages.ps.premium_price); // validate the price
      cy.get('#currency-premium > i').contains(env.packages.currency); // validate the currency
    });
  });
});