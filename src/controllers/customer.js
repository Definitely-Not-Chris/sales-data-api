

const service = require('../services/customer')

exports.getAllCustomers = async (ctx) => {
    ctx.body = await service.getAll();
};

exports.getCustomerById = async (ctx) => {
    ctx.body = await service.getById(ctx.params.id);
};

exports.createCustomer = async (ctx) => {
    const customer = ctx.request.body
    ctx.body = await service.create(customer);
};

exports.updateCustomer = async (ctx) => {
    const customer = ctx.request.body
    ctx.body = await service.update(customer);
};