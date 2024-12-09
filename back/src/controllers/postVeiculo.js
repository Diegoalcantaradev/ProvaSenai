const veiculoModel = require('../model/veiculoModel')

module.exports = async(request, response)=>{
    console.log(request)
    try {
        let {body} = request
        veiculo = await veiculoModel.create(body)
        response.status(200)
        return response.json(veiculo)
    } catch (error) {
        return response.json({
            message: "Erro ao cadastrar veiculo"
        });
    }
}