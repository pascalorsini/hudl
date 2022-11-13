Feature: HUDL - Login Page

  Background: 
    Given I am on the login page
    When I click on the log in button

  Scenario: No email/password entered
    And no email and password are entered
    Then an error message should be displayed
    And I should not be logged in

  Scenario: Login form check
    Then the email and password input fields and labels should be displayed
    And I expect the input fields to be email and password types
    And a remember me checkbox and a need help link should be displayed
    And a log in button should be displayed
    And a log in with an organization button should be displayed

  Scenario Outline: As a user, I can log into the application
    And I login with <email> and <password>
    Then I should be logged in

    Examples: 
      | email        | password        |
      | replaceEmail | replacePassword |

  Scenario Outline: As a user, I cannot log into the application
    And I login with <email> and <password>
    Then an error message should be displayed
    And I should not be logged in

    Examples: 
      | email     | password     |
      | fakeEmail | fakePassword |
