
const motorista = require('../model/motoristaModel')

module.exports = async (request, response) => {
    try {
        await motorista.destroy({
        where:{
                id:request.params.id
            }
        })
        response.status(200)
        return response.json({
            message: "Usuario deletado com sucesso!"
        })
    } catch (error) {
        response.status(400)
        return response.json({
            message: "Erro ao deletar usuario"
        })
    }
}