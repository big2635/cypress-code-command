/// <reference types="cypress" />

describe('The iframe test', () => {

    it('The iFrame h1 should be visible', () => {

        it("Using 'contentDocument' property and its() - Nested iFrames", function() {
            cy.visit("https://www.play1.automationcamp.ir/frames.html")
            cy.get("#frame1")
                .its('0.contentDocument')
                .its('body')
                .find("#frame2")
                .its('0.contentDocument')
                .its('body')
                .find("#click_me_2").click()
    
        })
    })

})