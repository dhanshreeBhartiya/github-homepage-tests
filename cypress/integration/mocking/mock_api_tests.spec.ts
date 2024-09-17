describe('Mock API Tests', () => {
  it('should mock a successful API response', () => {
    cy.intercept('GET', 'https://api.github.com/users/octocat', {
      statusCode: 200,
      body: {
        login: 'octocat',
        public_repos: 8,
      },
    }).as('getUser');

    cy.request('GET', 'https://api.github.com/users/octocat').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include({ login: 'octocat' });
      expect(response.body).to.include({ public_repos: 8 });
    });
  });
});

describe('Mock API Tests with Failure and Slow Responses', () => {
  it('should mock a failure API response', () => {
    cy.intercept('GET', 'https://api.github.com/users/brazilrararararaaa', {
      statusCode: 404,
      body: {
        message: 'Not Found',
      },
    }).as('getUserError');
    
    cy.request({
      method: 'GET',
      url: 'https://api.github.com/users/brazilrararararaaa',
      failOnStatusCode: false,
    }).then((response) => {
      cy.wrap(response).should('have.property', 'status', 404);
      cy.wrap(response.body).should('have.property', 'message', 'Not Found');
    });
  });

  it('should mock a slow API response', () => {
    cy.intercept('GET', 'https://api.github.com/users/octocat', {
      statusCode: 200,
      body: {
        login: 'octocat',
        public_repos: 8,
      },
      delay: 3000, // simulate a slow response
    }).as('getSlowUser');

    cy.request({
      method: 'GET',
      url: 'https://api.github.com/users/octocat',
    }).then((response) => {
      cy.wrap(response).should('have.property', 'status', 200);
      cy.wrap(response.body).should('have.property', 'login', 'octocat');
      cy.wrap(response.body).should('have.property', 'public_repos', 8);
    });
  });
});  
