Comment se connecter à la BDD



avoir sequelize, pg et pg-hstore installés. 
 "pg": "^8.13.1",
    "pg-hstore": "^2.3.4",
    "pug": "^3.0.3",
    "pug-cli": "^1.0.0-alpha6",
    "sequelize": "^6.37.5"


Dans pgAdmin4, créer une BDD vide. 



Ensuite, il faut trouver le chemin de PosteGreSQL dans le PC, et ajouter ce chemin à la variable d'environnement (taper variable environnement dans la barre de recherche du PC et ça amene vers les propriétés systeme, aller sur variable d'environnement, en abs dans variables systeme double-cliquer sur path, clique sur nouveau,  ajouter le chemin de POSTGRESQL. Moi c'était C:\ProgramData\Microsoft\Windows\Start Menu\Programs\PostgreSQL 17 )

Puis, vérifier que pg_dump est installé avec pg_dump --version, puis faire un test de connexion : 
psql -U tonnomdutilisateurpsql -h localhost


Si ça n'affiche rien, essaye de taper ton mdp

Si ça affiche tonnomdutilisateur=#, bravo, tu es connecté à la bdd avec ton terminal.

Maintenant la comande magique : npx sequelize-cli migration:generate --name add-users-table

Ca crée un fichier migrations à la racine du projet. 



____________________________________________________________

création de la bdd de A à Z

- créer une bdd table par table avec sequelize, en ligne de commande. Chaque table faite crée automatiquement un fichier model (écrit en POO) et un fichier migration. ces fichiers migration peuvent etre envoyés à d'autrs pour recréer une BDD
