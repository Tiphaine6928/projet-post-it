Feature: post managment

  Scenario: making a post
    Given a connected user 
    When user submitted his picture with a form
    Then the picture is stored in the local file And his URL is stored on the database 

  Scenario: see all posts from a theme
    Given a user on the main page 
    When theme of the day is displayed 
    Then user see all posts about this theme

  Scenario: sort post (most recent) 
    Given a user on the feed
    When he choose to sort post from the most recent to least recent 
    Then post are displayed with the choosen sort 

    Scenario: sort post (least recent) 
    Given a user on the feed
    When  he choose to sort post from the least recent to most recent 
    Then post are displayed with the choosen sort 

    Scenario: sort (most like) 
    Given a user on the feed
    When  he choose to sort post from the most liked to least liked 
    Then post are displayed with the choosen sort 

  Scenario: Liking a post 
    Given a connected user 
    When he like a post 
    Then the number of like of this post is increase by 1

  Scenario: cancel a like 
    Given a connected user 
    When like an already liked post
    Then the number of like decrease by 1 