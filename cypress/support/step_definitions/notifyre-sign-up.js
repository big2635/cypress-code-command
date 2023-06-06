import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
/// <reference types="cypress-xpath" />

Given('I am on the sign-in page {word}', (url)=>{
    cy.visit(url);
})
When("I click on the the Sign up button link", ()=> {
    cy.get("[href='\/sign-up']").click();
})
Then('I should be redirect to the sign-up page {word}', (url) => {
    cy.url().should('include', url);
})

When("I enter First name {word}", (firstName)=> {
     cy.xpath("//div[@class='mat-form-field-infix ng-tns-c46-0']").type(firstName)
 })

When("I enter the Last name {word}", (lastName)=> {
     cy.xpath("//div[@class='mat-form-field-infix ng-tns-c46-1']").type(lastName)
 })

When("I enter the email address {word}", (email)=> {
     cy.get(".mat-form-field-infix.ng-tns-c46-2").type(email)
 })

 When("I click the number Dropdown", ()=> {
    cy.xpath("//div[@class='mat-select-arrow-wrapper ng-tns-c50-6']").click()
 })

 When("I select country number", ()=> {
    cy.xpath("//span[.='Australia']").click()
 })

 When("I enter mobile number {word}", (number)=> {
    cy.xpath("//input[@placeholder='Mobile Number']").type(number)
 })

 When("I enter password {word}", (password)=> {
    cy.xpath("//div[@class='mat-form-field-infix ng-tns-c46-5']").type(password)
 })

 When("I Check the checkbox on the Accept our terms & Condition", ()=> {
    cy.get(".mat-checkbox-inner-container").click();
 })



 





