/// <reference types="cypress" />

describe("Alias and Invoke", () => {

    it("Validate a specific hair product ", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()


        //to find or select the specific headers in menu of hair care
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt' , 5)
        cy.get('@productThumbnail').should('include' , 'Seaweed Conditioner')
    });

    it("Validate product thumbnails ", () => {
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('productThumbnail')

        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr' , 'title').should('include' , 'Add to Cart')

    });

    it.only("Calculate total of normal prods  ", () => {
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('productThumbnail')

        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) =>{
        //     // cy.log("Index: " + index + " : " +$el.text())
        //     cy.log($el.text())
        // });

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        

        //sum of price
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText =>{

            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;

            for(i = 0; i < itemPrice.length; i++)
            {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }

            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " +  itemsPriceTotal)
        })  
        
        //sum of sale price but simple
        cy.get('@saleItemPrice').then($linkText =>{
            
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;

            for(i = 0; i < saleItemPrice.length; i++)
            {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Non sale price items total: " +  saleItemsPrice)
        }) 
        . then(() =>{
            cy.log("The Total price of all product: " + itemsTotal)
            expect(itemsTotal).to.equal(669)
        })
    });
})
