const { DataTypes } = require('sequelize')
const { database } = require('../configs/database')

exports.Customer = database.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: { type: DataTypes.DATEONLY, allowNull: true },
    address: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamps: true
});