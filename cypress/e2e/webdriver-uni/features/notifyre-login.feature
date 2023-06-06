Feature: Sign -In to Notifyre app
As a Notifyre user
I want to be able to sign in to the app
So that i can access my account and use the app features


Scenario: Successful sign - in
    Given I am on the sign-in page https://app.notifyre.com/login
    When I enter the email marben.dimson@gologic.com.au
    And Click on the Next button
    And I enter the password Temp1234!!
    And Click the Sign in button
    Then I should redirect to the Dashboard https://app.notifyre.com/dashboard