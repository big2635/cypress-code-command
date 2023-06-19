Feature: Sending Fax
As a Notifyre user
I want to be able to send a  fax using My Fax Number

Scenario: Sending Fax using my Fax Number
    Given I am on the sign-in page https://app.notifyre.com/login
    When I enter the email marben.dimson+staging@gologic.com.au
    And Click on the Next button
    And I enter the password Temp1234!!
    And Click the Sign in button
    Then I should redirect to the Dashboard https://app.notifyre.com/dashboard
    When I click no thanks maybe later
    When I click the Send
    When I select the fax
    Then I should redirect to the Send Fax page https://app.notifyre.com/dashboard/send/fax
    When I click on the country number dropdown
    When I select the country number
    When I enter the number 411111111
    When I click the add button
    Then i should see the number displayed
    When I enter message reference test
    When I toggle the include cover page
    When I click the select file
    When I click the Send button
    Then I should see a success message Fax Submitted Successfully

    