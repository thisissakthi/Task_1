'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user_application_details,applications,comments}) {
      // define association here
      this.hasMany(user_application_details,{user_id})
      this.hasMany(applications,{user_id:app_owner_id})
      this.hasMany(comments,{user_id})
    }
  };
  user.init({
    user_id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      Unique:true,
      isEmail:true
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'user',
  });
  return user;
};
