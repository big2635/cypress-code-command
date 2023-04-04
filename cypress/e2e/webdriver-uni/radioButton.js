/// <reference types="Cypress" />

describe("Verify checkboxes via web", () => {

    before(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    //Positive scenario
    it("Check and validate checkbox", () => {
    
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target') .click({
        //     force: true
        // });
        // cy.get('input[value="option-1"]').check()
        // cy.get('input[value="option-1"]').check().should('be.checked');

        cy.get('input[value="option-1"]').as('option-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("uncheck and validate checkbox", () => {
    
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target') .click({
        //     force: true
        // });

        cy.get('input[value="option-3"]').as('option-3')
        cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked');


    });
   
    it.only("Check multiple checkbox", () => {
    
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target') .click({
        //     force: true
        // });

       cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])
       .should('be.checked')

    });
   
})