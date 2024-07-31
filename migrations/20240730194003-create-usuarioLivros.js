'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarioLivros', {
      idUsuario: {
      type: Sequelize.DataTypes.STRING(255),
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    idLivro: {
      type: Sequelize.DataTypes.STRING(255),
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
      references: {
        model: 'livros',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    dataUltimaLeitura: {
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    },
    updatedAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarioLivros');
  }
};
