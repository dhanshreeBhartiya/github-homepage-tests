describe('Visual Regression Tests', () => {
    it('should capture a snapshot of the GitHub logo', () => {
      cy.visit('/');
      cy.get('a[href="/"] svg').should('be.visible');
      cy.percySnapshot('github-logo');
    });
  });
  