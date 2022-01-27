'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorites.belongsTo(models.User)
    }
  }
  Favorites.init({
    ArtsyId: DataTypes.TEXT,
    name: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
    nationality: DataTypes.TEXT,
    biography: DataTypes.TEXT,
    image: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};