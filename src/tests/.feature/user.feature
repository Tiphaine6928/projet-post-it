Feature: user managment 

  Scenario: sign-up user 
    Given a user without acount
    When  he submit the inscirption form with pseudo and password 
    Then an account is created into the database with his pseud and password 

  Scenario: sign in an already existed acount 
    Given a user present in the database 
    When  he submit form of connexion with right information 
    Then a session is created for this user with his ID 

  Scenario: Modify his icon  
    Given connected user 
    When he click on the "modifier mon profil" button 
    Then he is able to change his icon  

  Scenario: Modify his biography  
    Given connected user 
    When he click on the "modifier mon profil" button 
    Then he is able to change his biography

  Scenario: Delete his post
    Given connected user 
    When he click on the "modifier mon profil" button 
    Then he is able to delet his post 

  Scenario: delete his profile 
    Given a connected user 
    When he click on "Supprimer mon profil" and confirm with his password 
    Then his account is deleted for his database 