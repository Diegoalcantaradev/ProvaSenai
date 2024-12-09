const veiculo = require('../model/veiculoModel')
const motorista = require('../model/motoristaModel')
async function create(){
    await veiculo.sync();
    await motorista.sync();
}
create()