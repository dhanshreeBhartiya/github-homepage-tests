// cypress/support/commands.ts
import '@percy/cypress';
// <reference path="./index.d.ts" />
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('input[name="login"]').type(username);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('input[name="commit"]').click();
});
