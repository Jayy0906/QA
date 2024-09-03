// Functional Test for an E-commerce site
describe('E-commerce Functional Test', () => {

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

  // Reusable function to search for a product
  function searchAndAddToCart(productName) {
      cy.visit('https://www.amazon.in');
      cy.get('#twotabsearchtextbox').type(productName);
      cy.get('.nav-search-submit').click();
      cy.get('.sg-col-20-of-24').first().find('#a-autoid-1').click();
  }

  // Test case: Search for a product, add it to the cart, and proceed to checkout
  it('should search for a product, add to cart, and proceed to checkout', () => {
      searchAndAddToCart('iPhone');  // Using the function for product 'iPhone'

      cy.get('#nav-cart-count-container').click();
      cy.get('#sc-active-cart').should('be.visible');
      cy.url().should('include', 'nav_cart');
  });

  // Test case: Reuse function to search and add another product to the cart
  it('should search for another product and add to cart', () => {
      searchAndAddToCart('Laptop');  // Using the function for product 'Laptop'

      cy.get('#nav-cart-count-container').click();
      cy.get('#sc-active-cart').should('be.visible');
      cy.url().should('include', 'nav_cart');
  });
});
