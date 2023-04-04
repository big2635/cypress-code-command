import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO"; //importing from support file
import AutoStore_Haircare_PO from "../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO"; //importing from support file
/// <reference types="cypress" />

describe("Add mutiple items to the basket", () => {

     // you can see this code in support file
    const autoStore_homepage = new AutoStore_HomePage_PO(); //global variable
    const autoStore_HairCare = new AutoStore_Haircare_PO(); //global variable

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        // cy.visit("https://automationteststore.com/")
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.clearLocalStorage() //clear storage
        cy.clearAllCookies() //to clear the cookiesclea
        autoStore_homepage.accessHomepage(); //you can see this code at support file
        autoStore_homepage.clickOn_HairCare_Link(); //you can see this code at support file
    })


    it("Add specific item to basket", () => {

        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)   
        // })
        // cy.get('.dropdown-toggle > .fa').click();
        // cy.addProductToBasket(data.productName)
        
        //support file
        autoStore_HairCare.addHaircareProduct();
    });
});

