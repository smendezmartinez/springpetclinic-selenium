Feature: Browsing around

  Scenario: The home page
    Given I am on the home page
    Then I should see "PetClinic"


  Scenario: Owners
    Given I am on the home page
    And I follow "/owners/find.html"
    When I fill in "lastName" with "Franklin"
    And I press "Find Owners"
    Then I should see "George"
    And I should see "Franklin"