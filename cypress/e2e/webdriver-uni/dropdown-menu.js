/// <reference types="Cypress" />

describe("Interact with dropdown list via web", () => {
    //Positive scenario
    it("select specific values via select dropdown lists", () => {
    
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value' , 'maven')
        cy.get('#dropdowm-menu-3').select('css').contains('CSS')

        cy.get('#dropdowm-menu-2').select('Maven').should('have.value' , 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')

    });

  
})