const motoristaModel = require('../model/motoristaModel')

module.exports = async(request,response)=>{
    const motorista = await motoristaModel.findByPk(1);
    return response.json(motorista)
}


