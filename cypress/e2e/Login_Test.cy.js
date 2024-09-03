// Login Test for an E-commerce site
describe('Login Test', () => {

    // Test case: Login with valid credentials
    it('should login with valid credentials', () => {
      
      // Step 1: Visit the login page
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Step 2: Enter a valid email address
      cy.get('#username').type('student');
  
      // Step 3: Enter a valid password
      cy.get('#password').type('Password123');

      // Step 4: Click the login button to submit the form
      cy.get('#submit').click();

      // Validation: Verify that the user is redirected to the account page by checking the presence of 'My account'
      cy.get('#main-container').should('contain', 'Logged In Successfully');
    });
  
    // Test case: Login with invalid credentials
    it('should show error with invalid credentials', () => {
      
      // Step 1: Visit the login page
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Step 2: Enter a valid email address
      cy.get('#username').type('student');
  
      // Step 3: Enter a valid password
      cy.get('#password').type('Password12');
  
      // Validation: Verify that the user is redirected to the account page by checking the presence of 'My account'
      cy.get('#submit').click();
  
      // Validation: Verify that an error message is displayed for invalid login
      cy.get('#error').should('contain', 'Your password is invalid!')
      .should('be.visible')  // Assert that the element is visible
      .click({ force: true });  // Force click in case of any overlays or if the element is not interactable
    });
  });  