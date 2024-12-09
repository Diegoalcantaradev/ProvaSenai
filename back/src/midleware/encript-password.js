const bcrypt = require('bcrypt')

module.exports = (request, response, next) => {
    let salt = bcrypt.genSaltSync(Number(1234));
    request.body.senha = bcrypt.hashSync(
        request.body.senha,
        salt);
    next();
}
