/// <reference types="Cypress" />

describe("test file upload via web", () => {
   
    it("upload a file.....", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png");

        cy.get('#submit-button').click();


    });

    it("upload no file.....", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#submit-button').click();


    });


})