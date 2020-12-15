'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(applications) {
      // define association here
      this.belongsTo(applications,{category_id})
    }
  };
  categories.init({
    category_id:
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    category:
    {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'categories',
    modelName: 'categories',
  });
  return categories;
};
