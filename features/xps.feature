Feature: Validate if the xps laptops are displayed

    Scenario: xps laptops are being displayed
        Given I am on the dell home page
        Then I click on laptops
        Then I check the xps check box
        Then I should see xps laptops being displayed