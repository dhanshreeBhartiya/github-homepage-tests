// cypress/integration/github_login.spec.ts
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />,
describe('GitHub Login', () => {
  it('should login using custom command', () => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });
});