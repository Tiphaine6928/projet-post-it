## Comment créer une BDD, la démarrer avec un serveur et la connecter à son front avec un ORM 


## INSTALLATIONS ET DEPENDANCES
1) D'abord, avoir sequelize, pg et pg-hstore installés. 
   "pg": "^8.13.1",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.5"

2) vérifier que pg_dump est installé avec pg_dump --version

3) installer l'outil de ligne de commande sequelize : sequelize-cli.
npm install --save-dev sequelize-cli
Il va s'installer dans les devDependancies dans le package.json.

4) Ensuite perso, quand j'ai téléchargé PostgreSQL sur internet et l'ai installé avec l'assistant d'installation, j'ai coché la case pgAdmin4 qui est l'outil de représentation graphique de PostgreSQL. (On peut le télécharger séparément aussi).


# c'est quoi ces dépendances
- pg-hstore est un module JS qui simplifie le travail avec le type de données hstore dans PostgreSQL (cela permet de stocker des paires clé-valeur dans une seule colonne). Ce module permet de transformer les objets JS en données compréhensibles par PostgreSQL

- pg est une librarie Node qui permet de se connecter à une BDD PostgreSQL de façon dynamique (il execute des requêtes).

- Sequelize est un ORM, c'est-à-dire un outil permettant de manipuler la BDD sans écrire en SQL. Sequelize crée des "modèles", qui sont des objets (écrits en POO) représentant des entités (ou des colonnes). Cela permet de gérer son back plus simplement. Cela permet aussi de réaliser des migrations, c'est-à-dire des imports de tables de BDD. 
Il existe plusieurs façons de créer des modèles avec Sequelize. Voir : https://sequelize.org/docs/v6/core-concepts/model-basics/
Sequelize va s'appuyer sur pg pour executer les requêtes SQL. pg-hstore est un truc en plus qui ne nous sert pas vraiment ici???
- pg_dump est un outil installé avec PostgreSQL qui sert à se connecter à son compte et à accéder à sa BDD.
-sequelize-cli : faire des lignes de commande sequelize



## COMMENT INITIALISER UNE BDD VIDE ET SE CONNECTER A POSTGRESQL ET A SA BDD

1) Créer une BDD vide (perso je l'ai fait sur pgAdmin4)

2) Repérer l'emplacement de PostgreSQL dans le PC ajouter ce chemin à la variable d'environnement (propriétés systeme, aller sur variable d'environnement, en bas dans variables systeme double-cliquer sur path, Nouveau, ajouter le chemin de POSTGRESQL. Moi c'était C:\ProgramData\Microsoft\Windows\Start Menu\Programs\PostgreSQL 17)

3) psql -U tonnomdutilisateurpsql -h localhost -d nomdelabdd pour se connecter

Si ça n'affiche rien, essaye de taper ton mdp

Si ça affiche tonnomdutilisateur=#, bravo, tu t'es connecté à la bdd avec ton terminal.



## COMMENT CREER UNE BDD AVEC DES MODELES SEQUELIZE

Pour créer la BDD avec Sequelize il existe plusieurs façons. Elles consistent toutes à créer un fichier modèle et son fichier de migration. Le fichier modèle contient un objet dont le nom sera le nom de la table et le contenu des paires clés-valeurs qui correpondent à des attributs/colonnes, et leurs types de données, ainsi qu'à des détails comme si c'est une clé primaire, si ça accete une valeur nulle etc.

Le fichier de migration permet d'appliquer les données sur PostgreSQL, donc de créer les entités. En gros, notre front va agir sur le modèle, qui va agir sur le fichier de migration, qui va agir avec la BDD. Le fichier de migration sera utile pour transmettre une BDD à quelqu'un d'autre comme on le verra plus tard.


1) Déjà on fait npx sequelize-cli init 
Ca crée des dossiers : config (infos sur username et password de l'auteur de la databse etc), models (dans lequel seront crées nos models), migrations et seeders ainsi qu'un fichier index.js (qui contient globalement la même chose que db.js, apparemment on avait pas besoin de creer un fichier db.js mais bon c'est en forgeant qu'on devient forgeron)


2) Placer les bonnes infos dans config. changer les valeurs de username, password, database et dialect si besoin.  


3) Créer les modèles.
Plusieurs méthodes existent. La méthode qu'on a finalement appliqué est celle-ci: "Creating the first Model sur https://sequelize.org/docs/v6/other-topics/migrations/". Cette méthode créé le modèle en même temps que le fichier de migration en ligne de commande.

Faire cette ligne de commande, avec les modifications expliquées juste en-dessous:
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Ici, à la place de User on met le nom de la table qu'on veut, puis après --attributes, à la place de firstName, on met le nom de la colonne qu'on veut, et en face le type de données qu'elle prend.
Attention, le vocabulaire de PostgreSQL n'est pas le même de celui d'SQL. Par exemple, ce sera int pour l'un et integer pour l'autre.
ATTENTION l'id est généré automatiquement. pas besoin de le mettre. Pareil pour created_at et updated_at.


Tadaa ça crée automatiquement un modèle et un fichier de migration.


4) Rajouter des précisions dans le fichier de migration
On va aller vérifier que les infos dans le fichier de migration sont bien exhaustives : est-ce que les infos de primary key, d'autoincremente ou d'allowNull sont là?

5) Migrer
Quand c'est tout bon, on peut enfin utiliser les fichiers de migration pour migrer.

npx sequelize-cli db:migrate

Cela crée automatiquement la bdd qu'on a créee avec les modèles dans PostgreSQL.
Cela rajoute aussi une table SequelizeMeta qui sert à enregistrer les migrations qui ont lieu sur la BDD.


## COMMENT PARTAGER SA BDD AVEC LES COPAINS?????

Leur passer ton code (avec un git clone ou un git pull tmtc) puis ils font juste une BDD vide comme au début, ils se connectent à psql, et puis la dernière étape 5) Migrer. Ils doivent modifier leur fichier config pour mettre leur nom de BDD username etc.


## AUTRE CHOSE??

Quand on a modifié sa db dans pgAdmin4 ou directement dans les modèles, il faut actualiser sa database en réexecutant la migration avec npx sequelize-cli db:migrate afin de synchroniser. On peut avoir le même résultat avec sequelize.sync mais c'est dans l'autre méthode.