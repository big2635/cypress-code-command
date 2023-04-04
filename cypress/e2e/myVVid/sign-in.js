/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
/// <reference types="cypress-iframe" />

describe('Create an account', () => {
  beforeEach(() => {
    cy.visit('https://stage-myvvid.com/');
  })


  it('Click create and create account', function () {

    cy.get('#txtEmail').type("qatestmail00@gmail.com");
    cy.get('#btnContinue').click();
    cy.get('#txtPassword').type("Temp1234!!");
    cy.wait(5000);


    //  cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    //  .its('0.contentDocument.body').should('not.exist')
    //  .find('span[role="checkbox"]');


    cy.get('app-button').click();
    cy.wait(30000);

    cy.on('window:alert', (str) => {
      return true;
    })

    
    cy.get('.alert-danger').contains('Incorrect email or password.')
    // cy.get('.alert-danger').should('have.text', 'Incorrect email or password.');

    //cy.get('[style="width: 304px; height: 78px;"] > div > iframe', {timeout:5000})

  })

})