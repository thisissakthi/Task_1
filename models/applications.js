'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  applications.init({
    app_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    app_name:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    app_url:
    {
      types:DataTypes.STRING,
      allowNull:false,
      isUrl:true
    },
    app_owner_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    category_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    rating:
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      max:5,
      min:0
    }
  }, {
    sequelize,
    tableName:'applications',
    modelName: 'applications',
  });
  return applications;
};
