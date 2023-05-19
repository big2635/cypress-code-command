class Contact_PO {

    accessHomepage() {
        cy.visit("https://automationteststore.com/")
    }

    clickOn_Contact() {
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Click on Link using text: " + linkText.text())
        })
    }

    fill_Form(firstName,email,inquiry) {

        cy.get('#ContactUsFrm_first_name').type(firstName);
        cy.get('#ContactUsFrm_email').type(email);
        cy.get('#ContactUsFrm_enquiry').type(inquiry);

        cy.get('.col-md-6 > .btn').click()

    }
}
export default Contact_PO;