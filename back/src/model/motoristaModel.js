
const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const Motorista = connection.define('motorista', {
    nome: {
      type: DataTypes.STRING(45),
      allowNull:false
    },
    cnh: {
      type: DataTypes.STRING(45),
      allowNull:false
    },
    senha:{
      type: DataTypes.STRING(255),
      allowNull:false
    } 
  });

module.exports = Motorista;