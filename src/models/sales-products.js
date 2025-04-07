const { DataTypes } = require('sequelize')
const database = require('../configs/database');
const { Sales } = require('../models/sales');
const { Product } = require('../models/product');

const SalesProducts = database.define('SalesProducts', {}, {
    timestamps: false
});

Sales.belongsToMany(Product, { 
    through: SalesProducts,
    as: 'products',
    foreignKey: {
        allowNull: false,
        name: 'salesId'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

Product.belongsToMany(Sales, { 
    through: SalesProducts,
    as: 'sales',
    foreignKey: {
        allowNull: false,
        name: 'productId'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

exports.SalesProducts = SalesProducts