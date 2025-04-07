

const service = require('../services/sales')

exports.getAllSales = async (ctx) => {
    ctx.body = await service.getAll(ctx.request.body);
};

exports.getSalesById = async (ctx) => {
    ctx.body = await service.getById(ctx.params.id);
};

exports.createSales = async (ctx) => {
    const sales = ctx.request.body
    ctx.body = await service.create(sales);
};

exports.updateSales = async (ctx) => {
    const sales = ctx.request.body
    ctx.body = await service.update(sales);
};