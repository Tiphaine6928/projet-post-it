const Theme = require('../../models');

function calculateDateById(id) {
    const ourYear = new Date().getFullYear(); //récupérer l'année actuelle
    const firstDayofTheYear = new Date(year,0); //Créer une date au premier janvier de l'année (notre point de départ)
    firstDayofTheYear.setDate(id); // modifier la date en prenant en compte la valeur de l'id 
    return date.toLocalDateString();
  }

module.exports={

     addTheme : async (req, res) => {
        
        const theme = req.body.theme ; 

        const newTheme = await theme.create({name: theme})

        const displayTheme = await theme.findAll();

        const ThemeWithDates = allThemes.map((theme) => {
            theme.date = Theme.calculateDateByID(theme.id);
            return theme; 
        });

        res.render("adminTheme", {themes: allThemesllThemes})
        }
    }
