describe('Home Page Tests', () => {
  it('should load the home page successfully', () => {
    cy.visit('https://www.conqt.com/');
    cy.url().should('include', 'conqt.com');
  });

  it('should validate API endpoint', () => {
    cy.request('GET', 'https://api.conqt.com/home')
      .its('status')
      .should('equal', 200);
  });

  it('should check data consistency', () => {
    cy.request('GET', 'https://api.conqt.com/home').then((response) => {
      const apiData = response.body;
      cy.visit('https://www.conqt.com/');
      cy.get('.some-element').should('contain', apiData.someValue);
    });
  });

  it('should have sufficient color contrast', () => {
    cy.visit('https://www.conqt.com/');
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('.text-element').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('should have discernible link names', () => {
    cy.visit('https://www.conqt.com/');
    cy.get('a').each(($el) => {
      cy.wrap($el).should('have.attr', 'aria-label').and('not.be.empty');
    });
  });
});
