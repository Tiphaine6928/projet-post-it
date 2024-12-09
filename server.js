//Import le paquet express
import express from 'express';
//import le router
import router from "./src/route/route.js";
import path from 'path'
import { fileURLToPath } from 'url'
import indexController from './src/controllers/indexController.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


//Création d'une application express 
const app = express();
app.use(express.urlencoded({extended : true}));
// app.use('./views', express.static(__dirname + '../node_modules/bootstrap/dist'))
app.use(express.static('public'))

//renseignement du port du serveur . recherche de variable d'environement ou sinon aller sur le port 5000
const port = process.env.PORT || 5000





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

app.get("/postSubmit", (req,res) => {
    res.render("postSubmit");
})

app.get("/inscription", (req,res) => {
    res.render("inscription");
})

app.get("/connexion", (req,res) => {
    res.render("connexion");
})

app.get("/profil", (req,res) => {
    res.render("profil");
})




app.get("/post", (req,res) => {
    res.render("post");
})



app.post("/submit", indexController.showInput);
// app.get ('/', indexController.getInput )
//Utilisation du routeur
app.use(router);

//Activation du serveur sur le port défini en amont 
app.listen(port, () => {
    console.log (`Server connecté : http://localhost:${port}`);
});



