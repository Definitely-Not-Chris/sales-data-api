const { DataTypes } = require('sequelize')
const { database } = require('../configs/database');
const { Sales } = require('./sales');

const Product = database.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: true
});

Product.hasMany(Sales, { 
    foreignKey: {
        name: 'productId',
        allowNull: false
    }, 
    as: 'products',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

exports.Product = Product