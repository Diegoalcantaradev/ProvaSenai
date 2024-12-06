const {Sequelize} =require('sequelize')
const connection = new Sequelize ({
    database:'SuperSelect',
    username:'root',
    password:'',
    dialect:'mysql',
    host:'localhost',
    port:3306
})
module.exports = connection