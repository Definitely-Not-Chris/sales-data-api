const { DataTypes } = require('sequelize')
const { database } = require('../configs/database');
const { Sales } = require('./sales');

const Customer = database.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: DataTypes.DATEONLY,
    address: DataTypes.DATEONLY
}, {
    timestamps: true
});

Customer.hasOne(Sales, { 
    foreignKey: {
        name: 'customerId',
        allowNull: false
    }, 
    as: 'customer',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
})

exports.Customer = Customer