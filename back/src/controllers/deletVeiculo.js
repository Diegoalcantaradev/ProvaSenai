const veiculo = require('../model/veiculoModel')

module.exports = async (request, response) => {
    try {
        await veiculo.destroy({
        where:{
                id:request.params.id
            }
        })
        response.status(200)
        return response.json({
            message: "veiculo deletado com sucesso!"
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao deletar veiculo"
        })
    }
}