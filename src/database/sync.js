const productModel = require('../model/productModel')

async function create(){
    await productModel.sync
}
create()