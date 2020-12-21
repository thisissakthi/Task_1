'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uploads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  uploads.init({
    app_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    app_name: {
      type:DataTypes.STRING,
      allowNUll:false
    },
    app_zip_url: {
      type:DataTypes.STRING,
      isUrl:true,
      allowNull:false
    },
    owner_id:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    description: {
      type:DataTypes.STRING,
      len:[150,1500],
      allowNull:false
    },
    icon_url: {
      type:DataTypes.STRING,
      allowNull:false,
      isUrl:true
    },
    screenshots_url:{
      type: DataTypes.STRING,
      isUrl:true,
      allowNull:false
    },
    related_website_url:{
      type:DataTypes.STRING,
      isUrl:true
    },
    category: {
      type:DataTypes.STRING,
      allowNull:false
    },
    language: {
      type:DataTypes.STRING,
      allowNull:false
    },
    visibility: {
      type:DataTypes.STRING,
      allowNull:false
  }, {
    sequelize,
    modelName: 'uploads',
  });
  return uploads;
};
