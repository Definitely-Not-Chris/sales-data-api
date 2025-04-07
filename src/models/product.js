const { DataTypes } = require('sequelize')
const database = require('../configs/database');

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

exports.Product = Product