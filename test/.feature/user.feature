Feature: Gestion des utilisateurs

  Scenario: Inscription d'un utilisateur
    Given un utilisateur n'a pas encore de compte
    When il soumet le formulaire d'inscription avec un pseudo et un mot de passe
    Then un compte est créé dans la base de données avec son pseudo et son mot de passe

  Scenario: Connexion d'un utilisateur existant
    Given un utilisateur existe dans la base de données
    When il soumet le formulaire de connexion avec les bonnes informations
    Then une session est créée pour cet utilisateur avec son ID

  Scenario: Modifier son profil
    Given l'utilisateur est connecté
    When il clique sur le bouton "Modifier mon profil"
    Then il peut changer son icône, sa biographie ou supprimer des photos

  Scenario: Supprimer son profil
    Given l'utilisateur est connecté
    When il clique sur "Supprimer mon profil" et confirme avec son mot de passe
    Then son compte est supprimé de la base de données
