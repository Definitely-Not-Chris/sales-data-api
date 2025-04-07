const { NotFoundError } = require('../types/error')
const repository = require('../repositories/customer')

exports.getAll = () => {
    return repository.getAll();
};

exports.getById = async (id) => {
    const customer = await repository.getById(id)

    if(!customer) {
        throw new NotFoundError(`Customer with ID ${id} not found`)
    }
    
    return customer;
};


exports.create = (customer) => {
    return repository.create(customer)
}

exports.update = async (customer) => {
    const rowsAffected = await repository.update(customer)

    if(rowsAffected == 0) {
        throw new NotFoundError(`Customer with ID ${customer.id} not found`)
    }

    return rowsAffected
}