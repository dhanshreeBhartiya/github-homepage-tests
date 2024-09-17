// cypress/integration/data-driven-tests.spec.ts
describe('Data-Driven API Tests', () => {
    it('should fetch user profile data based on fixture data', function () {
      cy.fixture('users').then((users) => {
        users.forEach((user: { username: string; expectedRepos: number; }) => {
          cy.request(`https://api.github.com/users/${user.username}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('public_repos', user.expectedRepos);
          });
        });
      });
    });
  });