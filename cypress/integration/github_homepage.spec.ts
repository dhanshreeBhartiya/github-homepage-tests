/// <reference types="cypress" />

describe('GitHub Homepage Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the GitHub logo', () => {
        cy.wait(1000);  // Wait for 2 seconds
        cy.get('a[href="/"] svg').should('be.visible');
      });
  
    it('Should have a functional "Sign up" button', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click();
        cy.get('.HeaderMenu-link--sign-up').should('be.visible').click();
        cy.url().should('include', '/signup');
    });
  });

  describe('Github Navigation Links Tests', () => {
    beforeEach(() => {
        cy.visit('/');
      });

    it('Should correctly navigate through the explore features link', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click();
        cy.get(':nth-child(1) > .HeaderMenu-link').click();
        cy.get('#product-explore-heading').should('be.visible');
        cy.get('.open > .HeaderMenu-dropdown > :nth-child(2) > .list-style-none > :nth-child(1) > .HeaderMenu-dropdown-link').click();
        cy.url().should('include', '/features');
    });

    it('Should correctly navigate through the pricing link', () => {
        cy.get('.js-details-target > .Button-content > .Button-label').click();
        cy.get(':nth-child(6) > .HeaderMenu-link').click();
        cy.url().should('include', '/pricing');
    });
});
  