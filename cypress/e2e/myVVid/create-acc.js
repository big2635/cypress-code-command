/// <reference types="Cypress" />

describe('Create an account', () => {
    it('Click create and create account', () => {
        
        cy.visit('https://stage-myvvid.com/');
        cy.get('#createLink').click();

        cy.get('#firstName').type("Qa");
        cy.get('#lastName').type("Text");
        cy.get('#email').type("qatestmail00@gmail.com");
        cy.get('#confirmEmail').type("qatestmail00@gmail.com");
        cy.get('#nextBtn').click();
        cy.get('#inputMobileNumber').type("11111");
        cy.get('.p-button-icon').click();
        cy.get('[field="countryName"]').type("Ph");
        cy.get('#pr_id_1_list').click();

        cy.get('.p-autocomplete > .ng-tns-c31-1').type("Qa-Test");
        cy.get('#jobTitle').type("Qa-Test");


        cy.get('#password').type("&")
        cy.get('.p-autocomplete > .ng-tns-c31-1').click();
        cy.wait(5000)
        cy.get('.characters-label').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Lower case').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Upper case').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Numbers').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.get('#password').clear()
        cy.get('#password').type("1")
        cy.wait(3000)
        cy.contains('Symbols').should('have.css', 'color', 'rgb(240, 94, 107)')

//All valid
        cy.get('#password').clear()
        cy.get('#password').type("Temp1234!%")
        cy.get('.characters-label').should('have.css', 'color', 'rgb(142, 199, 63)')
        cy.contains('Lower case').should('have.css', 'color', 'rgb(142, 199, 63)')
        cy.contains('Upper case').should('have.css', 'color', 'rgb(142, 199, 63)')
        cy.contains('Numbers').should('have.css', 'color', 'rgb(142, 199, 63)')
        cy.contains('Symbols').should('have.css', 'color', 'rgb(142, 199, 63)')
    });
});