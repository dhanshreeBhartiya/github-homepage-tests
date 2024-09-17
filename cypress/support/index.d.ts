// cypress/support/index.d.ts
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login(username: string, password: string): Chainable<Subject>;
  }
}

declare module 'cypress' {
  interface Chainable {
    login(username: string, password: string): Chainable;
  }
}