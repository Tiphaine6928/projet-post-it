Feature: post managment

  Scenario: making a post
    Given a connected user 
    When user submitted his picture with a form
    Then the picture is stored in the local file And his URL is stored on the database 

  Scenario: see all post from a theme
    Given un utilisateur est sur la page d'accueil
    When le thème du jour est affiché
    Then il voit toutes les photos postées sur ce thème

  Scenario: Trier les photos
    Given un utilisateur est sur le feed
    When il choisit de trier les photos par {plus récent || plus ancien || plus liké}
    Then les photos sont affichées dans l'ordre sélectionné

  Scenario: Liker une photo
    Given un utilisateur connecté
    When il like une photo
    Then le nombre de likes de cette photo augmente de 1

  Scenario: Annuler un like
    Given un utilisateur connecté
    When il relike une photo déjà likée
    Then le nombre de likes de cette photo diminue de 1