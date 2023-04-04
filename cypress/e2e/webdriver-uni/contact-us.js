import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"; //importing from support file
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO"; //importing from support file
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni!", () => {

    // you can see this code in support file
    const homepage_PO = new HomePage_PO(); //set the function class
    const contact_Us_PO = new Contact_Us_PO(); //set the function class

    //getting the json data and fetch 
    before(function () {
        cy.fixture('example').then(function (data) {
            // this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        //cy.visit('/' + "Contact-Us/contactus.html") // look for the url in cyprss.config

        //this code belongs to support file.
        //call the function class
        homepage_PO.visitHomepage();
        cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause();
    })


    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

        //To validates if the property are correct
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        // cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("Hello World")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

        //Custom Command
        cy.webdriverUni_ContactForm(Cypress.env("first_name"), data.last_name, data.email, "Hello World", 'h1', 'Thank You for your Message!');


        //support file
       // contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Hello World", 'h1', 'Thank You for your Message!');
    });
    //Negative scenario
    it("Should not be able to submit a successful submission via contact us form as all fields are requireds", () => {
        if(Cypress.isBrowser('firefox'))
        {
            
        }
        else
        {
            contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "Hello World", 'body', 'Error: Invalid email address');
        }
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type("Hello World")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')

        // cy.webdriverUni_ContactForm(data.first_name, data.last_name, " ", "Hello World", 'body', 'Error: Invalid email address'); //you can see this code in command.js

        //support file
      

    });
})