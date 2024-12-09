const motorista = require('../model/motoristaModel')

module.exports = async(request, response) => {
    let user;
    console.log(request)
    try {
    user = await motorista.create(request.body);
    response.status(200);
    return response.json(user);
    } catch (error) {
    response.status(400)    
    return response.json({
        message: "Erro ao cadastrar usuario"
    });
    }
}
