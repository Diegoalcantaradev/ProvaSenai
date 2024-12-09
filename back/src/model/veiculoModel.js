const Sequelize = require('sequelize');
const connection = require('../database/connection');

const veiculo = connection.define('veiculo',{
    placa: {
        type: Sequelize.STRING,
        unique: true
      },
      capacidade: Sequelize.INTEGER
})
module.exports = veiculo;