'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('uploads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      app_name: {
        type: Sequelize.STRING
      },
      app_zip_url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      icon_url: {
        type: Sequelize.STRING
      },
      screenshots_url: {
        type: Sequelize.STRING
      },
      related_website_url: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      visibility: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('uploads');
  }
};