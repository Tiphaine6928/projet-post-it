// Importer le paquet express
const express = require('express');
// Importer le router
const path = require('path');
const { fileURLToPath } = require('url');
const userController = require('./src/controllers/userController.js');
const themeController = require('./src/controllers/themeController.js')
const db = require('./db.js');

// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory
const {
    getPost,
    createPost,
} = require('./src/controllers/postSubmitController.js');


//Création d'une application express 
const app = express();
app.use(express.urlencoded({extended : true}));
// app.use('./views', express.static(__dirname + '../node_modules/bootstrap/dist'))
app.use(express.static('public'))


//renseignement du port du serveur . recherche de variable d'environement ou sinon aller sur le port 5000
const port = process.env.PORT || 5000

//Middleware 

//Ajout de data dans toutes les vue 
app.use ((req,res) => {
    //récupère le thème du jour du model 
    const todayTheme = theme.Model.FindTheme();
    //garde en mémoire todayTheme pour les prochaines requête
    res.locals.theme = todayTheme;
})





//permet d'initialiser la vue sur pug 
app.set("view engine","pug");
app.set("views", path.join(__dirname, "./src/views"));

//Route racine c'est là que tout commence 
app.get("/", (req,res) => {
    res.render("accueil");
})

app.get("/themes", (req,res) => {
    res.render("themes");
})

app.get("/calendrier", (req,res) => {
    res.render("calendrier");
})

app.post("/postSubmit", (req, res) => {
    res.render('postSubmit');
});

app.get("/inscription", (req,res) => {
    res.render("inscription");
})

app.get("/connexion", (req,res) => {
    res.render("connexion");
})

app.get("/profil", (req,res) => {
    res.render("profil");
})

app.get("/posts", getPost)

app.get("/adminTheme", (req,res) => {
    res.render("adminTheme");
})



app.post("/givePseudo", userController.insSubmit);
app.post("/addTheme", themeController.addTheme);





//Activation du serveur sur le port défini en amont 
app.listen(port, () => {
    console.log (`Server connecté : http://localhost:${port}`);
});



