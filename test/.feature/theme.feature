Feature: Theme managment 

  Scenario: Check if theme match with day
    Given the date is {06/12/2024}
    When a user is in home or calendar or post or themes
    Then the theme is the one of {06/12/2024}

  Scenario: Naviguate into the calendar 
    Given a user is in the calendar page 
    When he click on a date 
    Then he can see theme of de date and post related to the them 
