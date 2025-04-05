const { DataTypes } = require('sequelize')
const { database } = require('../configs/database')

exports.Product = database.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, {
    timestamps: true
});