const { Product } = require("../models/product");


exports.getAll = () => {
    return Product.findAndCountAll();
};

exports.getById = (id) => {
    return Product.findOne({ where: { id: id } });
};


exports.create = async (product) => {
    const instance = await Product.create(product)
    return await instance.save()
}

exports.update = async (product) => {
    const [rowsAffected] = await Product.update(
        product, 
        {
            where: {
                id: product.id
            },
        }
    )
    return rowsAffected
}