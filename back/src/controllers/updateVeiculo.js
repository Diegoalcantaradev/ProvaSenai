const veiculoModel = require('../model/veiculoModel')
module.exports = async (request, response) => {
    let {body} = request;

    await veiculoModel.update(body,{
        where:{
            id: request.params.id
        }
    });

    response.status(204).end();
}