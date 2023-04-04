// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//checkbox.js start
Cypress.Commands.add('navigateTo_Webdriver_Homepage', () => {
    cy.visit("/") //you can see the url in config.js baseUrl
});

Cypress.Commands.add('navigateTo_Webdriver_CheckBox_Page', () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html") 
});
//checkbox.js end


Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        // cy.log("Index: " + index + " : " +$el.text())

        if ($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
})

Cypress.Commands.add('webdriverUni_ContactForm', (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})


Cypress.Commands.add('addProductToBasket', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
       
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
    });
})


// or
require('cypress-iframe');
import 'cypress-iframe';