// UI Test for an E-commerce site
describe('UI Test', () => {

    // Test case: Verify key UI elements on the homepage
    it('should display key UI elements on the homepage', () => {
      
      // Step 1: Visit the home page of the e-commerce site
      cy.visit('https://www.amazon.in');
  
      // Validation 1: Check if the search bar is visible
      cy.get('#twotabsearchtextbox').should('be.visible');
  
      // Validation 2: Check if the navigation menu is visible
      cy.get('#nav-belt').should('be.visible');

      cy.wait(2000);

      // Scroll to the bottom of the page
      cy.scrollTo('bottom');

      cy.wait(2000)
  
      // Validation 3: Check if the footer is visible
      cy.get('.navLeftFooter').should('be.visible');
    });
  });  