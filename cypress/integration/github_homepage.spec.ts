/// <reference types="cypress" />

describe('GitHub Homepage Tests', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the GitHub logo', () => {
      cy.get('a[href="/"] > img').should('be.visible');
      debugger; // Execution will pause here
    });
  
    it('Should have a functional "Sign up" button', () => {
      cy.contains('Sign up').scrollIntoView().should('be.visible').click();
      cy.url().should('include', '/signup');
    });
  
    it('Should correctly navigate through the header links', () => {
      cy.contains('Explore').click();
      cy.url().should('include', '/explore');
      
      cy.contains('Pricing').click();
      cy.url().should('include', '/pricing');
    });
  });
  