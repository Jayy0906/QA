// Login Test for an E-commerce site
describe('Login Test', () => {

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

  // Reusable function for logging in
  function login(username, password) {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('#submit').click();
  }

  // Test case: Login with valid credentials
  it('should login with valid credentials', () => {
      login('student', 'Password123');  // Valid credentials
      cy.get('#main-container').should('contain', 'Logged In Successfully');
  });

  // Test case: Login with invalid credentials
  it('should show error with invalid credentials', () => {
      login('student', 'Password12');  // Invalid credentials
      cy.get('#error').should('contain', 'Your password is invalid!').should('be.visible').click({ force: true });
  });
});
