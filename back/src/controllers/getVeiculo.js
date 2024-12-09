const veiculoModel = require('../model/veiculoModel')

module.exports = async(request,response)=>{
    const veiculo = await veiculoModel.findByPk(1);
    return response.json(veiculo)
}