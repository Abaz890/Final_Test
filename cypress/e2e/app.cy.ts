describe('App Component E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders Vite and React logos with correct links', () => {
    cy.get('img[alt="Vite logo"]')
      .should('be.visible')
      .parent('a')
      .should('have.attr', 'href', 'https://vite.dev');

    cy.get('img[alt="React logo"]')
      .should('be.visible')
      .parent('a')
      .should('have.attr', 'href', 'https://react.dev');
  });

  it('displays heading and initial counter', () => {
    cy.contains('h1', 'Vite + React').should('be.visible');
    cy.contains('button', 'count is 0').should('be.visible');
  });

  it('increments counter when button is clicked', () => {
    cy.contains('button', 'count is 0')
      .click()
      .click()
      .should('have.text', 'count is 2');
  });

  it('renders instructional and read-the-docs text', () => {
    cy.contains('Edit src/App.tsx and save to test HMR').should('be.visible');
    cy.contains('Click on the Vite and React logos to learn more').should('be.visible');
  });
});
