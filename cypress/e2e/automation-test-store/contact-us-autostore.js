/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import Contact_PO from "../../support/pageObjects/automation-test-store/Contact_PO"; //importing from support file

describe('Own Testing Contact', () => {
    
    const contacts = new Contact_PO();

    //getting the json data in fixture file and fetch. 
    before(function () {
        cy.fixture('contact_autostore').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    });

    beforeEach(() => {
       contacts.accessHomepage();
       contacts.clickOn_Contact();
    });

    it('Contact-us', () => {
        
        contacts.fill_Form(data.firstName,data.email,data.Enquiry)
    });
});