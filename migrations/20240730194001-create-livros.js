'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        type: Sequelize.DataTypes.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      nome: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      capitulos: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      novoTestamento: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      ordemBiblica: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};
