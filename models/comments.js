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
    static associate(user_application_details) {
      // define association here
      //this.belongsTo(user_application_details,{app_id,user_id})
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
