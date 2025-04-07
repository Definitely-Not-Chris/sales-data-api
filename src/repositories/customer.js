const { Customer } = require("../models/customer");


exports.getAll = () => {
    return Customer.findAndCountAll();
};

exports.getById = (id) => {
    return Customer.findOne({ where: { id: id } });
};


exports.create = async (customer) => {
    const instance = await Customer.create(customer)
    return await instance.save()
}

exports.update = async (customer) => {
    const [rowsAffected] = await Customer.update(
        customer, 
        {
            where: {
                id: customer.id
            },
        }
    )
    return rowsAffected
}