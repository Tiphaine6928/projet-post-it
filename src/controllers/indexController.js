import indexModel from "../models/indexModel.js";



export default{
   
    showInput: (req, res) => {
        //Récupération des donnée du formulaire
        const formData = req.body.champText; //Récupérationn des donnée du formulaire dans l'input champText
        console.log ('data', formData)

        //Appel du modèle pour agir sur les données 
        const action = indexModel.dataUsed(formData);
        console.log('action')

        //Renvoyer l aréponse à la vue avec les données traitées 
        res.render("index", {message : action});
    
    }
    // getInput: (req, res) => {
    //     const data = indexModel.dataUsed("formData");
    // },


}


