'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_application_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_application_details.init({
    user_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    app_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    status_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    category_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    comment_by_user:
    {
      type:DataTypes.STRING,
      allowNull:true
    },
    rating_by_user:
    {
      type:DataTypes.INTEGER,
      allowNull:true
    }
  }, {
    sequelize,
    tableName:'user_application_details',
    modelName: 'user_application_details',
  });
  return user_application_details;
};
