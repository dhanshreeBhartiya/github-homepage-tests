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