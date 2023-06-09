/// <reference types="Cypress" />

describe("Handle js Alert", () => {

    it("Confirm js alert containes the correct text", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#button1').click();

        cy.on('window:alert', (str) =>{
            expect(str).to.eq('I am an alert box!')
        })
    });

    it("validate js confirm alert box works correctly when clicking ok", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#button4').click();

        cy.on('window:alert', (str) =>{
           return true;
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it("validate js confirm alert box works correctly when clicking cancel", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target') .click({
            force: true
        });

        cy.get('#button4').click();

        cy.on('window:confirm', (str) =>{
           return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it("validate js confirm alert box using a stub", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
         cy.get('#popup-alerts').invoke('removeAttr', 'target') .click({
            force: true
        });

        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }) 
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })

        
    });

})