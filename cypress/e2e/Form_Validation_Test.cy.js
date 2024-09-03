// Form Validation Test for an E-commerce site
describe('Form Validation Test', () => {

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

  // Handle uncaught exceptions in the application to prevent test failures
  beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('adsbygoogle.push() error')) {
              return false; // Prevent the test from failing
          }
          return true; // Allow other errors to fail the test
      });
  });

  // Reusable function to fill the form with a delay for smoother execution
  function fillForm({ fullname, email, phoneNumber, gender, experience, skills, qaTool, otherDetails }) {
      cy.get('#g4072-fullname').type(fullname, { delay: 100 }); // Adjust delay for typing speed
      cy.get('#g4072-email').type(email, { delay: 100 });
      cy.get('#g4072-phonenumber').type(phoneNumber, { delay: 100 });
      cy.get('#g4072-gender').select(gender, { delay: 100 });
      cy.get(`input#g4072-yearsofexperience-${experience}`).check({ delay: 100 });
      cy.get('input[name="g4072-skills[]"]').check({ delay: 100 });
      cy.get('#g4072-qatools').select(qaTool, { delay: 100 });
      cy.get('#contact-form-comment-g4072-otherdetails').type(otherDetails, { delay: 100 });
  }

  // Test case: Validate required fields and correct submission
  it('should validate required fields and correct submission', () => {
      cy.visit('https://qavalidation.com/demo-form/');

      cy.wait(2000);

      fillForm({
          fullname: 'Jay Patel',
          email: 'jaypatel12@gmail.com',
          phoneNumber: '1234567890',
          gender: 'Male',
          experience: 2,
          skills: ['Functional testing', 'Automation testing', 'API testing', 'DB testing'],
          qaTool: 'Cypress',
          otherDetails: 'Experienced Quality Assurance Lead with over 1.6 years of experience...'
      });

      cy.wait(2000);
      cy.get('button[data-id-attr="placeholder"]').click();
      cy.wait(1000);
      cy.get('.contact-form-submission').should('contain', 'Your message has been sent');
  });
});
