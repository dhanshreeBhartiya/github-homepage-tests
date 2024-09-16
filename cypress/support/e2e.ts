// Example cypress/support/e2e.ts
import './commands'; // If you have custom commands

// You can also add global hooks like before, beforeEach, etc.
beforeEach(() => {
  cy.log('This will run before each test');
});
