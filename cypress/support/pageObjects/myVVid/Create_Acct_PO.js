/// <reference types="cypress-xpath" />

class Create_Acct_PO {


    mainPage() {
        cy.visit('https://stage-myvvid.com/');
    }

    creatingAcct(firstName, lastName, email, confirmEmail) {

        cy.get('#createLink').click();

        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#email').type(email);
        cy.get('#confirmEmail').type(confirmEmail);
        cy.get('#nextBtn').click();
    }

    acctInfo(mobileNum, country, organization, jobTitle) {

        //phone number
        cy.get('#mobileNumberCode').click();
        cy.get('#scroll-to-ph').click();
        cy.get('#inputMobileNumber').type(mobileNum);

        // //location
        cy.get('.mb-4 > .form-group > .ui-fluid > .p-inputwrapper > .p-autocomplete > .p-autocomplete-input').type(country)
        cy.get('.country-item').click();

        //org
        cy.get('.p-autocomplete > .ng-tns-c31-1').type(organization);
        cy.get('#pr_id_2_list > :nth-child(1) > .ng-tns-c31-1').click();

        //job title
        cy.get('#jobTitle').type(jobTitle);
        cy.wait(2000);
    }

    passwordInfo(password,confirmPassword) {

        cy.get('#password').type("#");
        cy.get('.left-side_vv-logo-container > .vv-logo').click();
        cy.wait(5000)
        cy.get('.characters-label').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Lower case').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Upper case').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Numbers').should('have.css', 'color', 'rgb(240, 94, 107)')
        cy.contains('Symbols').should('have.css', 'color', 'rgb(142, 199, 63)')

        cy.get('#password').clear();

        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(confirmPassword);
        
    }

}
export default Create_Acct_PO;