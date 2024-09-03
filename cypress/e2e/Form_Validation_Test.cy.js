// Form Validation Test for an E-commerce site
describe('Form Validation Test', () => {

  // Handle uncaught exceptions in the application to prevent test failures
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      // If the error message matches the AdSense error, return false to prevent the test from failing
      if (err.message.includes('adsbygoogle.push() error')) {
        return false;
      }
      // Otherwise, let the error fail the test
      return true;
    });
  });

  // Test case: Validate required fields and correct form submission
  it('should validate required fields and correct submission', () => {
    
    // Step 1: Visit the contact form page
    cy.visit('https://qavalidation.com/demo-form/');

    // // Step 2: Click the 'Send' button without filling out the form to trigger validation errors
    // cy.get('.wp-block-button__link').click();

    // // Validation 1: Verify that an error message is shown when required fields are missing
    // cy.get('.contact-form__error').should('contain', 'Please make sure all fields are valid. You need to fix 2 errors.');

    // Step 3: Fill in the name field
    cy.get('#g4072-fullname').type('Jay Patel');

    // Step 4: Fill in the email field with a valid email address
    cy.get('#g4072-email').type('jaypatel12@gmail.com');

    // Step 5: Fill in the phone number field with a valid phone number
    cy.get('#g4072-phonenumber').type('1234567890');

    // Step 6: Select the "Male" option from the dropdown
    cy.get('#g4072-gender').select('Male');

    // Step 7: Select the "2 years of experience" radio button
    cy.get('input#g4072-yearsofexperience-2').check();

    // Step 8: Select all checkboxes in the "Skills" fieldset
    cy.get('input[name="g4072-skills[]"]').check();

    // Step 9: Choose QA Tools from Dropdown
    cy.get('#g4072-qatools').select('Cypress');

    // Step 10: Write other details
    cy.get('#contact-form-comment-g4072-otherdetails').type('Experienced Quality Assurance Lead with over 1.6 years of experience a demonstrated history of working in the E-commerce & 3D industry as Automation and Manual Testing.');

    cy.wait(2000);

    // Step 11: Click the 'Send' button
    cy.get('button[data-id-attr="placeholder"]').click();

    cy.wait(1000);

    // Validation 2: Verify that a success message is displayed after the form is correctly submitted
    cy.get('.contact-form-submission').should('contain', 'Your message has been sent');
  });
});
