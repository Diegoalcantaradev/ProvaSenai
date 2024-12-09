const motorista = require('../model/motoristaModel');
module.exports = async (request, response) => {
    let {body} = request;

    await motorista.update(body,{
        where:{
            id: request.params.id
        }
    });

    response.status(204).end();
}