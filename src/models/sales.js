const { DataTypes } = require('sequelize')
const { database } = require('../configs/database');

const Sales = database.define('Sales', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    timestamps: true
});


exports.Sales = Sales