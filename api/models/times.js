'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Times.belongsTo(models.Occurrences,{
        foreignKey: 'occurrence_id'
      })
    }
  };
  Times.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Times',
  });
  return Times;
};