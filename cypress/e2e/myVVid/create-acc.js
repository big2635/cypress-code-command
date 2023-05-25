/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import Create_Acct_PO from "../../support/pageObjects/myVVid/Create_Acct_PO";
describe('Create an account', () => {

    const creatingAcct_myVid = new Create_Acct_PO();
    
    //getting the json data in fixture file and fetch. 
    before(function () {
        cy.fixture('myVvid_createAcct').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    });

    beforeEach(() => {
        creatingAcct_myVid.mainPage();
        cy.wait(5000);
    });

    it('create account using own script', () => {
        creatingAcct_myVid.creatingAcct(data.firstName, data.lastName, data.email, data.confirmEmail);

        creatingAcct_myVid.acctInfo(data.mobileNum, data.country, data.organization, data.jobTitle);

        creatingAcct_myVid.passwordInfo(data.password, data.confirmPassword);
    });

//     it('Click create and create account', () => {
        
//         cy.visit('https://stage-myvvid.com/');
//         cy.get('#createLink').click();

//         cy.get('#firstName').type("Qa");
//         cy.get('#lastName').type("Text");
//         cy.get('#email').type("qatestmail00@gmail.com");
//         cy.get('#confirmEmail').type("qatestmail00@gmail.com");
//         cy.get('#nextBtn').click();
//         cy.get('#inputMobileNumber').type("11111");
//         cy.get('.p-button-icon').click();
//         cy.get('[field="countryName"]').type("Ph");
//         cy.get('#pr_id_1_list').click();

//         cy.get('.p-autocomplete > .ng-tns-c31-1').type("Qa-Test");
//         cy.get('#jobTitle').type("Qa-Test");


//         cy.get('#password').type("&")
//         cy.get('.p-autocomplete > .ng-tns-c31-1').click();
//         cy.wait(5000)
//         cy.get('.characters-label').should('have.css', 'color', 'rgb(240, 94, 107)')
//         cy.contains('Lower case').should('have.css', 'color', 'rgb(240, 94, 107)')
//         cy.contains('Upper case').should('have.css', 'color', 'rgb(240, 94, 107)')
//         cy.contains('Numbers').should('have.css', 'color', 'rgb(240, 94, 107)')
//         cy.get('#password').clear()
//         cy.get('#password').type("1")
//         cy.wait(3000)
//         cy.contains('Symbols').should('have.css', 'color', 'rgb(240, 94, 107)')

// //All valid
//         cy.get('#password').clear()
//         cy.get('#password').type("Temp1234!%")
//         cy.get('.characters-label').should('have.css', 'color', 'rgb(142, 199, 63)')
//         cy.contains('Lower case').should('have.css', 'color', 'rgb(142, 199, 63)')
//         cy.contains('Upper case').should('have.css', 'color', 'rgb(142, 199, 63)')
//         cy.contains('Numbers').should('have.css', 'color', 'rgb(142, 199, 63)')
//         cy.contains('Symbols').should('have.css', 'color', 'rgb(142, 199, 63)')
//     });
});