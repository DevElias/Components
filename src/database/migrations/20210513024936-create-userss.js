'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1, /* 0 - Administradores, 1 - Clientes */
      },
      status:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1, /* 0 - Inativos, 1 - Ativos */
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
