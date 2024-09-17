// Example cypress/support/e2e.ts
import './commands'; // If you have custom commands
beforeEach(() => {
  cy.log('This will run before each test');
});
