(async() => {

    const database = require('./db')
    const product = require('./src/model/productModel')
    await database.sync();
    //criar produto
    const newProduct = product.create({
        nome:'produto',
        descricao:'descrição do produto',
        categoria:'categoria',
        preco:30,
        validade:'2024-12-06'
    })
    console.log(newProduct);
    //Ler produto por id

    console.log(product)
    //alterar produto
    const AlteProduct = await product.findByPk(1);
    AlteProduct.descricao = 'descrição alterada'
    await AlteProduct.save();
    //deletar produto 
    await product.destroy({
        where:{
            id:1
        }
    })
})();