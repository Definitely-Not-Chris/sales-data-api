

const service = require('../services/product')

exports.getAllProducts = async (ctx) => {
    ctx.body = await service.getAll();
};

exports.getProductById = async (ctx) => {
    ctx.body = await service.getById(ctx.params.id);
};

exports.createProduct = async (ctx) => {
    const product = ctx.request.body
    ctx.body = await service.create(product);
};

exports.updateProduct = async (ctx) => {
    const product = ctx.request.body
    ctx.body = await service.update(product);
};