/// <reference types="Cypress" />

describe("Test data picker via web", () => {
    
    beforeEach(() =>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', 'target') .click({
            force: true
        });
        cy.get('#datepicker').click();
    })

    it("select date from datepicker", () => {
        
        // let date = new Date();
        // date.setDate(date.getDate()) 
        // cy.log(date.getDate())//get current day ex 22

        // //get the future date
        // let date2 = new Date();
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate())//get current day ex 22 + 5 = 27

        var date = new Date()
        date.setDate(date.getDate() + 30) 

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleDateString('default', {month: "long"})
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        // to find the exact year
        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => { //to find the exact month
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        //to find the exact date.
        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();

    });
})