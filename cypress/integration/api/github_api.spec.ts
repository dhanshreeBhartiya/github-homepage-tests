describe('GitHub API Tests', () => {
    it('should fetch user profile data', () => {
      cy.request('https://api.github.com/users/octocat').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('login', 'octocat');
        expect(response.body).to.have.property('public_repos');
      });
    });
  });