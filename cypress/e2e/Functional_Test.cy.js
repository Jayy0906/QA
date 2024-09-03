// Functional Test for an E-commerce site
describe('E-commerce Functional Test', () => {

    // Test case: Search for a product, add it to the cart, and proceed to checkout
    it('should search for a product, add to cart, and proceed to checkout', () => {
      
      // Step 1: Visit the home page of the e-commerce site
      cy.visit('https://www.amazon.in');
      
      // Step 2: Find the search input field and type the product name (e.g., 'dress')
      cy.get('#twotabsearchtextbox').type('iPhone');
      // cy.get('.nav-search-field').type('iPhone');

      // Step 3: Click the search button to perform the search
      cy.get('.nav-search-submit').click();

      // Step 5: From the search results, select the first product and add it to the cart
      cy.get('.sg-col-20-of-24').first().find('#a-autoid-1').click();  // Click on the first product in the list

      // Step 5: After adding to the cart, click 'Cart' button
      cy.get('#nav-cart-count-container').click();

      // Step 6: Continue to checkout from the cart summary page
      cy.get('#sc-active-cart').should('be.visible');

      // Step 7: After adding to the cart, click 'Proceed to checkout' button
      cy.get('#desktop-ptc-button-celWidget').click();

      // Validation: Verify that the URL includes 'controller=order', indicating that you're on the checkout page
      cy.url().should('include', 'nav_cart');
    });
  });  