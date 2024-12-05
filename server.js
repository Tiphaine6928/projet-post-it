//Import le paquet express
import express from 'express';
//import le router
import router from "./src/route/route.js";
import indexController from './src/controllers/indexController.js';


//Création d'une application express 
const app = express();
app.use(express.urlencoded({extended : true}));

//renseignement du port du serveur . recherche de variable d'environement ou sinon aller sur le port 5000
const port = process.env.PORT || 5000

//permet d'initialiser la vue sur pug 
app.set("view engine","pug");
app.set("views", "./src/views");

//Route racine c'est là que tout commence 
app.get("/", (req,res) => {
    res.render("index");
})

app.post("/submit", indexController.showInput);

//Utilisation du routeur
app.use(router);

//Activation du serveur sur le port défini en amont 
app.listen(port, () => {
    console.log (`Server connecté : http://localhost:${port}`);
});



