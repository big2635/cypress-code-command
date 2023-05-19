/// <reference types="cypress" />

describe("Iterate over elements", () => {

    beforeEach(function(){
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    

    it("Log info of all hair care", () => {
       
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) =>{
            cy.log("Index: " + index + " : " +$el.text())
             
        });
    });

    it("Add another specific product to basket", () => {
       
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) =>{
        //    // cy.log("Index: " + index + " : " +$el.text())
             
        //    if($el.text().includes("Curls to straight Shampoo")){

        //     cy.wrap($el).click()
        //    }
        // });

        cy.selectProduct("Curls to straight Shampoo");

    });

    it("Add specific product to basket", () => {
       
        cy.selectProduct("Seaweed Conditioner");

    });

    it.only("Add specific product to basket 2", () => {
        

        cy.selectProduct("Eau Parfumee au The Vert Shampoo");

    });
})