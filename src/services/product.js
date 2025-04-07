const { NotFoundError } = require('../types/error')
const repository = require('../repositories/product')

exports.getAll = () => {
    return repository.getAll();
};

exports.getById = async (id) => {
    const product = await repository.getById(id)

    if(!product) {
        throw new NotFoundError(`Product with ID ${id} not found`)
    }
    
    return product;
};


exports.create = (product) => {
    return repository.create(product)
}

exports.update = async (product) => {
    const rowsAffected = await repository.update(product)

    if(rowsAffected == 0) {
        throw new NotFoundError(`Product with ID ${product.id} not found`)
    }

    return rowsAffected
}