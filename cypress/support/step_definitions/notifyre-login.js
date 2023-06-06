import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('I am on the sign-in page {word}', (url)=>{
    cy.visit(url);
})

When("I enter the email {word}", (username)=> {
    cy.get("#mat-input-0").type(username)
})

And('Click on the Next button', () => {
    cy.get(".mat-button-base.mat-flat-button.mat-primary.ng-star-inserted").click();
})

And('I enter the password {word}', (password) => {
    cy.get(".mat-form-field-infix.ng-tns-c68-1").type(password)
})

And('Click the Sign in button', () => {
    cy.get(".mat-button-base.mat-flat-button.mat-primary.ng-star-inserted").click();
})

Then('I should redirect to the Dashboard {word}', (url) => {
    cy.url().should('include', url)
})
