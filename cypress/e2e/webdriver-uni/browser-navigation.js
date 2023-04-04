/// <reference types="Cypress" />

describe("Validate webdriver homepage links", () => {
    //Positive scenario
    it("Confirms links redirect to the correct page", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        cy.get('#contact-us').invoke('removeAttr', 'target').click({
            force: true
        });

        cy.url().should('include', 'contactus')

        //back function
        cy.go('back')
        cy.reload();
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        // cy.reload(true); //reload w/o using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')

        cy.get('#login-portal').invoke('removeAttr', 'target').click({
            force: true
        });

        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({
            force: true
        });
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    });

})