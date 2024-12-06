const productModel = require('../model/productModel')

module.exports = async(request,response)=>{
    const product = await productModel.findByPk(1);
    return response.json(product)
}

