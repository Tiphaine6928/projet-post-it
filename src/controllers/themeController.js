const Theme = require('../../models/theme.js');

function calculateDateById(id) {
    const ourYear = new Date().getFullYear(); // Récupérer l'année actuelle
    const firstDayofTheYear = new Date(ourYear, 0); // Créer une date au premier janvier de l'année
    firstDayofTheYear.setDate(id); // Modifier la date en prenant en compte la valeur de l'id
    return firstDayofTheYear.toLocaleDateString(); // Corriger l'appel à `toLocaleDateString`
}

function getDayIndex() {
  const today = new Date();  // Récupère la date actuelle
  const startOfYear = new Date(today.getFullYear(), 0, 0);  // Crée une date pour le 1er janvier de cette année
  const diff = today - startOfYear;  // Calcule la différence en millisecondes
  const oneDay = 1000 * 60 * 60 * 24;  // Nombre de millisecondes dans une journée
  console.log ("index")
  console.log(Math.floor(diff / oneDay));
  console.log("index");
  return Math.floor(diff / oneDay);  // Divise la différence par le nombre de millisecondes dans une journée pour obtenir le todayIndex une valeur comprise entre 0 et 365
}

module.exports = {
    addTheme: async (req, res) => {
        try {
            const theme = req.body.theme;
            const existingTheme = await Theme.findOne({ where: { name: theme } });
            if (!existingTheme) {
                await Theme.create({ name: theme });
                res.render("adminTheme", { feedback: "Votre thème a bien été soumis" });
            } else {
                res.render("adminTheme", { feedback: "Votre thème existe déjà" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Vérifie addTheme dans themeController");
        }
    },

    showTheme: async (req, res) => {
        try {
            // Récupérer le thème du jour du modèle
            const todayTheme = await Theme.findByPk(getDayIndex()); // Modifier selon la logique de sélection du thème
            // Afficher la page avec le thème
            console.log("Theme")
            console.log(todayTheme);
            console.log("Theme");

            res.render("accueil", { theme: todayTheme.dataValues.name});
        } catch (error) {
            console.log(error);
            res.status(500).send("Vérifie showTheme dans themeController");
        }
    },

    showThemeSubmit: async (req, res) => {
      try {
          // Récupérer le thème du jour du modèle
          const todayTheme = await Theme.findByPk(getDayIndex()); // Modifier selon la logique de sélection du thème
          // Afficher la page avec le thème
          console.log("Theme")
          console.log(todayTheme);
          console.log("Theme");

          res.render("postSubmit", { theme: todayTheme.dataValues.name});
      } catch (error) {
          console.log(error);
          res.status(500).send("Vérifie showThemeSubmit dans themeController");
      }
  }
};
