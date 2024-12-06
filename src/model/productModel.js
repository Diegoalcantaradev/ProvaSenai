const Sequelize = require('sequelize');
const connection = require('../database/connection');

const product = connection.define('produto',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true,
    },
    nome:{
        type: Sequelize.STRING(255),
        allowNull:false,
    },
    descricao:{
        type: Sequelize.STRING(255),
        allowNull:false,
    },
    categoria:{
        type: Sequelize.STRING(255),
        allowNull:false,
    },
    preco:Sequelize.DECIMAL,
    validade:Sequelize.DATE
})
module.exports = product;