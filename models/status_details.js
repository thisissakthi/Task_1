'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  status_details.init({
    status_id:
    {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false
    },
    status:
    {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'status_details',
    modelName: 'status_details',
  });
  return status_details;
};
