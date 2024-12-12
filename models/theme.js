'use strict';
const {
  Model,DataTypes
} = require('sequelize');
const sequelize = require( "../db");
const { cloneDeep } = require('sequelize/lib/utils');
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static getDayIndex() {
      const today = new Date();  // Récupère la date actuelle
      const startOfYear = new Date(today.getFullYear(), 0, 0);  // Crée une date pour le 1er janvier de cette année
      const diff = today - startOfYear;  // Calcule la différence en millisecondes
      const oneDay = 1000 * 60 * 60 * 24;  // Nombre de millisecondes dans une journée
      return Math.floor(diff / oneDay);  // Divise la différence par le nombre de millisecondes dans une journée pour obtenir le todayIndex une valeur comprise entre 0 et 365
    }

    static async findTheme() {
      const todayIndex = Theme.getDayIndex(); //Calcul de l'indice du jour pour le faire matcher avec le day_index de la BDD
      console.log(todayIndex);
      const todayTheme = await Theme.findOne({where: {id: todayIndex}});
      console.log(todayTheme);
      return todayTheme;
    }
    

  }
  Theme.init(
    {
    id: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement : true,
    },
    name: DataTypes.STRING},
    {
    sequelize,
    modelName: 'Theme',
  });

module.exports =Theme

