Feature: Web driver login page

Scenario: Login using valid credentials
    Given I access the webdriverUniversity Login Portal
    When I enter a username webdriver
    And I enter a password webdriver123
    And i click on the login button
    Then I should be presented with the following message validation succeeded