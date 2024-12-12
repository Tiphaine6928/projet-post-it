

const Post = require('../../models/post');

const getPost = async (req,res) => {
    try {
        const posts = await Post.findAll(); // Récupère tous les posts depuis la db
        res.status(200).json(posts);
    } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}

const createPost = async (req,res) => {
    try {
        const { name, image, legend, likes } = req.body; // Données reçues depuis le front
        const newPost = await Post.create({
            name,     // Il y a pas l'id, c'est normal il est auto-incrémenté par sequelize
            image,
            legend,
            likes,
        }); // Crée et sauvegarde le post dans la db
        res.status(201).json(newPost); // Renvoie le post créé
    } catch (error) {
        console.error("Erreur lors de la création du post :", error);
        res.status(500).send({ message: "Erreur serveur" });
    }
}

module.exports = {
    getPost,
    createPost,
}