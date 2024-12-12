

const User = require('../../models/user');

// const connected = require('layout')


const connexion = async (req, res) => {
    try {
        const pseudoCheck = req.body.pseudoForm
        const passwordCheck = req.body.passwordForm

        let checkUser = await User.findAll({ 
            where: { pseudo : pseudoCheck, mdp : passwordCheck } 
        });
//     insSubmit: (req, res) => {
//         //Récupération des données du formulaire
//         const pseudoData = req.body.pseudo; //Récupérationn des donnée du formulaire dans l'input champText

//         //Appel du modèle pour agir sur les données 
//         const action = userModel.dataUsed(pseudoData);

        if (!pseudoCheck || !passwordCheck) {
            return res.render('connexion', { error: 'Veuillez remplir tous les champs.' });
        }
        

        if (checkUser) {
            console.log("connexion faite,", pseudoCheck)
            res.render('accueil', {connected: true, connectedUser: pseudoCheck})
        } else {
            console.log("connexion échouée")
            res.render('connexion', {error : 'Pseudo ou Mdp invalide'});
        }
    } catch (error) {
        console.error('Erreur lors de la connexion : ', error);
        res.status(500).send("erreur connexion");
    }

}

const createUser = async (req, res) => {
    try {
        const { pseudo, mdp } = req.body;
        const newUser = await User.create({
            pseudo,
            mdp
        });
        // res.status(201).json(newUser);
        res.redirect('connexion')

    } catch (error) {
        console.error('Erreur lors de la création du user : ', error);
        res.status(500).send(error);
    }
}

module.exports = {
    createUser,
    connexion
}









// module.exports = {

//     insSubmit: (req, res) => {
//         //Récupération des données du formulaire
//         const pseudoData = req.body.pseudo; //Récupérationn des donnée du formulaire dans l'input champText
//         console.log ('data', pseudoData)

//         //Appel du modèle pour agir sur les données 
//         const action = userModel.dataUsed(pseudoData);
//         console.log('action : ', action)

//         //Renvoyer l réponse à la vue avec les données traitées 
//         res.render("inscription", {pseudo : action});
    
//     }
//     // getInput: (req, res) => {
//     //     const data = indexModel.dataUsed("formData");
//     // },
// }


// export default {
//     dataUsed(data){
//         let nom = "";
//         console.log('dataModel', data);
//         nom = data;
//         console.log("nom : ",nom);
//         return nom;
//     }
// }
