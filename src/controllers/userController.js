



module.exports = {

    insSubmit: (req, res) => {
        //Récupération des données du formulaire
        const pseudoData = req.body.pseudo; //Récupérationn des donnée du formulaire dans l'input champText

        //Appel du modèle pour agir sur les données 
        const action = userModel.dataUsed(pseudoData);

        //Renvoyer l réponse à la vue avec les données traitées 
        res.render("inscription", {pseudo : action});
    
    }
    // getInput: (req, res) => {
    //     const data = indexModel.dataUsed("formData");
    // },
}


