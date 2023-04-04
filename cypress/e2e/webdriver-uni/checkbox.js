/// <reference types="Cypress" />

describe("Verify checkboxes via web", () => {

    beforeEach(function () {
      //  cy.navigateTo_Webdriver_Homepage(); //you can see the url in command.js
        cy.navigateTo_Webdriver_CheckBox_Page();
    }) 


    it("Check and validate checkbox", () => {
    
        // cy.get('input[value="option-1"]').check()
        // cy.get('input[value="option-1"]').check().should('be.checked');

        cy.get('input[value="option-1"]').as('option-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("uncheck and validate checkbox", () => {
    
        cy.get('input[value="option-3"]').as('option-3')
        cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked');

    });
   
    it("Check multiple checkbox", () => {    
       cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])
       .should('be.checked')

    });
   
})