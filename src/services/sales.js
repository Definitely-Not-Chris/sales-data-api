const { NotFoundError } = require('../types/error')
const repository = require('../repositories/sales')

exports.getAll = () => {
    return repository.getAll();
};

exports.getById = async (id) => {
    const sales = await repository.getById(id)

    if(!sales) {
        throw new NotFoundError(`Sales with ID ${id} not found`)
    }
    
    return sales;
};


exports.create = (sales) => {
    sales.productIds = sales.productIds ?? []
    return repository.create(sales)
}

exports.update = async (sales) => {
    const rowsAffected = await repository.update(sales)

    if(rowsAffected == 0) {
        throw new NotFoundError(`Sales with ID ${sales.id} not found`)
    }

    return rowsAffected
}