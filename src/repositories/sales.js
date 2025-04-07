const database = require("../configs/database");
const { Customer } = require("../models/customer");
const { Product } = require("../models/product");
const { Sales } = require("../models/sales");
const { SalesProducts } = require('../models/sales-products') 

exports.getAll = (query) => {
    let where = {}
    let whereCustomer = {}

    if(query.date) {
        where = Sales.sequelize.where(
            Sales.sequelize.fn('strftime', '%m', Sales.sequelize.col('Sales.createdAt')),
            query.date.substring(5, 7)
        )
    }

    if(query.customerId) {
        whereCustomer = {
            id: query.customerId
        }
    }

    return Sales.findAndCountAll({
        where,
        include: [
            {
                model: Product,
                as: 'products',
                required: true,
            },
            { 
                model: Customer, 
                where: whereCustomer, 
                required: true,
                as: 'customer'
            }
        ],
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