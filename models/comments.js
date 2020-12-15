'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  comments.init({
    app_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    user_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    comment: DataTypes.STRING
  }, {
    sequelize,
    tableName:'comments',
    modelName: 'comments',
  });
  return comments;
};
