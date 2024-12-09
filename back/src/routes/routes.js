
const express = require('express');
const cors = require('cors')
const routes = express.Router();
const veiculo = require('../controllers/getVeiculo');
const motorista = require('../controllers/getMotorista');
const createVeiculo = require('../controllers/postVeiculo')
const encriptPassword = require('../midleware/encript-password');
const createMotorista = require('../controllers/postMotorista');
const updateMotorista = require('../controllers/updateMotorista');
const updateVeiculo = require('../controllers/updateVeiculo');
const deletVeiculo = require('../controllers/deletVeiculo');
const deletMotorista = require('../controllers/deletMotorista');
//vier
routes.get('/veiculos/:id', veiculo);
routes.get('/motoristas', motorista);
//create
routes.post('/Cadastrarmotorista',encriptPassword,createMotorista);
routes.post('/Cadastrarveiculo',createVeiculo)
//update
routes.put('/motorista/:id',updateMotorista)
routes.put('/veiculo/:id',updateVeiculo)
//delete
routes.delete('/veiculo/:id',deletVeiculo)
routes.delete('/motorista/:id',deletMotorista)

module.exports = routes;

// http://localhost:3000/produto