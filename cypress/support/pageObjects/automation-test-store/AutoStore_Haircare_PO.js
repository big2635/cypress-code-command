class AutoStore_Haircare_PO {
    
    addHaircareProduct(){
        
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() =>{
                //debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();
    }
    
}
export default AutoStore_Haircare_PO;