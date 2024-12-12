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

    static async findTheme() {
      const todayIndex = Theme.getDayIndex(); //Calcul de l'indice du jour pour le faire matcher avec le day_index de la BDD
      const todayTheme = await Theme.findOne({where: {id: todayIndex}});
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

