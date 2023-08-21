'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    static associate(models) {
      this.belongsTo(models.District);
    }
  }
  Ward.init(
    {
      name: DataTypes.STRING,
      districtId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Ward',
    },
  );
  return Ward;
};
