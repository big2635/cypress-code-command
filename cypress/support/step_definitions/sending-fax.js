import {
    Given,
    When,
    And,
    Then
} from "cypress-cucumber-preprocessor/steps"
/// <reference types="cypress-xpath" />


//login to notifyre
Given('I am on the sign-in page {word}', (url) => {
    cy.visit(url);
})

When("I enter the email {word}", (username) => {
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
    cy.url().should('include', url);
})

When('I click no thanks maybe later', () => {
    cy.get('.text-note').click();
})
//Sending Fax
When('I click the Send', () => {
    cy.xpath("//mat-expansion-panel[@id='internal-side-nav-send-btn']").click();
})

When('I select the fax', () => {
    cy.xpath("//mat-expansion-panel[@id='internal-side-nav-send-btn']/div[@role='region']/div/button[2]").click();
})

Then('I should redirect to the Send Fax page {word}', (url) => {
    cy.url().should('include', url);
})

When('I click on the country number dropdown', () => {
    cy.xpath("//app-input-send-to[@id='app-input-send-to-0']//mat-select[@role='combobox']").click();
})

When('I select the country number', () => {
    cy.xpath("//mat-option[1]").click();
})

When('I enter the number {word}',(number) => {
    cy.get("input[role='combobox']").type(number);
})

When('I click the add button',() => {
    cy.get(".send-to-input [color]").click();
})

Then('i should see the number displayed',() => {
    cy.get("mat-chip").contains("411111111");
})

When('I enter message reference {word}',(message) => {
    cy.xpath("//form/div[2]/mat-form-field//input").type(message);
})

When('I toggle the include cover page',() => {
    cy.get("[for='mat-slide-toggle-4-input']").click();
})

When('I click the select file',() => {
    cy.get('input[type=file]').selectFile("cypress/fixtures/laptop.png", {
        force: true
    })
    cy.wait(10000);
})













