// UI Test for an E-commerce site
describe('UI Test', () => {

  // Global error handling
  beforeEach(() => {
      cy.on('fail', (error, runnable) => {
          Cypress.log({
              name: 'Error',
              message: error.message,
              consoleProps: () => ({ error, runnable })
          });
          throw error; // Ensure test fails after logging the error
      });
  });

  // Reusable function to validate visibility of elements
  function validateVisibility(selectors) {
      selectors.forEach(selector => {
          cy.get(selector).should('be.visible');
      });
  }

  // Test case: Verify key UI elements on the homepage
  it('should display key UI elements on the homepage', () => {
      cy.visit('https://www.amazon.in');
      
      // Validate key UI elements
      validateVisibility(['#twotabsearchtextbox', '#nav-belt', '.navLeftFooter']);
      
      cy.wait(2000);
      cy.scrollTo('bottom');
      cy.wait(2000);
  });
});
