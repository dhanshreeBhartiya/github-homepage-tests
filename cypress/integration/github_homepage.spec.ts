/// <reference types="cypress" />

describe('GitHub Homepage Tests', () => {

    beforeEach(() => {
      // Visit GitHub homepage
      cy.visit('https://github.com/');
    });
  
    it('Should display the GitHub logo', () => {
      // Verify GitHub logo is visible
      cy.get('a[href="/"]').should('be.visible');
    });
  
    it('Should have a functional "Sign up" button', () => {
      // Verify Sign up button and click it
      cy.contains('Sign up').should('be.visible').click();
      // Verify it redirects to the Sign Up page
      cy.url().should('include', '/signup');
    });
  
    it('Should correctly navigate through the header links', () => {
      // Verify Explore link navigation
      cy.contains('Explore').should('be.visible').click();
      cy.url().should('include', '/explore');
      
      // Verify Pricing link navigation
      cy.contains('Pricing').should('be.visible').click();
      cy.url().should('include', '/pricing');
    });
  });
  