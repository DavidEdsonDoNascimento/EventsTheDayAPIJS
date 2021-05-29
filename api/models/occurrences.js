'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Occurrences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Occurrences.belongsTo(models.Categories, {
        foreignKey: 'category_id'
      })
      
    }
  };
  Occurrences.init({
    summary: DataTypes.STRING,
    obs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Occurrences',
  });
  return Occurrences;
};