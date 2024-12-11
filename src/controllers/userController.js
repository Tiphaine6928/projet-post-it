

const User = require('../../models/user');

// const connectUser = async (req, res) => {
//     try {
//         const posts = await User.findAll();
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Erreur lors de la récupération des infos user : ', error);
//         res.status(500).json({ message : 'Erreur serveur'});
//     }
// }

createUser = async (req, res) => {
    try {
        const { pseudo, mdp } = req.body;
        const newUser = await User.create({
            pseudo,
            mdp
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Erreur lors de la création du user : ", error);
        res.status(500).send({ message : "Erreur serveur" });
    }
}

module.exports = {
    // connectUser,
    createUser
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
