describe('Automation Practice Form', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('input data ', () => {
        cy.url().should('include', 'demoqa');
  
        cy.get('#firstName').type('TextFirstName');
        cy.get('#lastName').type('TestLastName');
        cy.get('#userEmail').type('test@gmail.com');
        cy.get('[for="gender-radio-2"]').click(); 
        cy.get('#userNumber').type('1234567890');
        cy.get('[for="hobbies-checkbox-3"]').click(); 
        cy.get('#currentAddress').type('Ankakhutyan str');
        cy.get('#submit').click();

        cy.contains('Thanks for submitting the form').should('be.visible');
        //cy.get('#closeLargeModal').click();
        cy.wait(1000)
        cy.get('#closeLargeModal').click({ force: true }); 
    
    });
  });