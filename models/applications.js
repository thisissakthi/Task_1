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
    static associate(user_application_details,categories,comments) {
      // define association here
      this.hasMany(user_application_details,{app_id})
      this.hasMany(comments,{app_id})
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