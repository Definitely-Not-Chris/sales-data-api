const { Sales } = require("../models/sales");
const { SalesProducts } = require('../models/sales-products') 

exports.getAll = () => {
    return Sales.findAndCountAll({
        include: ['products']
    });
};

exports.getById = (id) => {
    return Sales.findOne({ where: { id: id } });
};


exports.create = async (sales) => {
    const instance = await Sales.create(sales)

    const salesProducts = sales.productIds.map(id => ({ 
        salesId: instance.dataValues.id, 
        productId: id 
    }))

    await SalesProducts.bulkCreate(salesProducts)
    return instance.dataValues
}

exports.update = async (sales) => {
    const [rowsAffected] = await Sales.update(
        sales, 
        {
            where: {
                id: sales.id
            },
        }
    )
    return rowsAffected
}