'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const sequelize = require( "../db")
// module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: DataTypes.STRING,
    mdp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  module.exports =User