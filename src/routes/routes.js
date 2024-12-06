
const express = require('express')
const routes = express.Router()


const getProduto = require('../controllers/getProduto')
routes.get('/produto', getProduto)



module.exports = routes;

// http://localhost:3000/produto