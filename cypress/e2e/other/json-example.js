/// <reference types="cypress" />

describe("JSON Object", () => {
    it("JSON Object examples", () => {
        
        const exampleObject = {"key": "Tim" , "key2": "Jones"}
        const exampleArray = ["Big", "Josh", "Nics"]
        const exampleArrayObject = [{"key": "Luka"}, {"key2": "Big"}, {"key3": "22"}]

        //JSON example object
        const users ={
            "firstName": "Joe",
            "lastName": "Qa",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Test"
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker"
                }
            ]
        }

        //this code is to extract the json object
        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key);

        cy.log(exampleArray[0]);
        cy.log(exampleArray[1]);
        cy.log(exampleArray[2]);

        cy.log(users.lastName);
        cy.log(users.Students[0].lastName);
        cy.log(users.Students[1].lastName);

        cy.log(exampleArrayObject[0].key);
        cy.log(exampleArrayObject[1].key2);
        cy.log(exampleArrayObject[2].key3);


    });
})