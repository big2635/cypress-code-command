Feature: Sign - Up to Notifyre app
As a Notifyre user
I want to be able to sign up to the app


Scenario: Create an account
    Given I am on the sign-in page https://app.notifyre.com/login
    When I click on the the Sign up button link
    Then I should be redirect to the sign-up page https://notifyre.com/signup/
    When I enter First name Qa
    When I enter the Last name Test
    When I enter the email address qatest00@gmail.com   
    When I click the number Dropdown
    When I select country number
    When I enter mobile number 411111111
    When I enter password Temp1234!!
    When I Check the checkbox on the Accept our terms & Condition
    