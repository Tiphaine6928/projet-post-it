

const User = require('../../models/user');

// const connected = require('layout')


const connexion = async (req, res) => {
    // try {
        const { pseudoco, passwordco } = req.body;
        username = pseudoco
        // const pseudoco = req.body.name

        let checkUser = await User.findAll({ where: { pseudo : pseudoco, mdp : passwordco } });

        if (checkUser) {
            console.log("connexion faite,", pseudoco)
            res.render('accueil', {connected: true, pseudo: pseudoco})
        } else {
            console.log("connexion échouée, ")
            res.render('connexion', {error : 'Pseudo ou Mdp invalide'});
        }

//     // } catch (error) {
//     //     // const { pseudoco, passwordco } = req.body.name;
//     //     // console.error("pseudo donné par le user : ", pseudoco);
//     //     // console.error("pseudo inscrit dans la BDD : ", pseudo);
//     //     // console.error("mdp donné par le user : ", passwordco);
//     //     // console.error("mdp inscrit dans la BDD : ", mdp);
//     //     res.status(500).json({ message : 'Erreur serveur'});
//     // }
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
