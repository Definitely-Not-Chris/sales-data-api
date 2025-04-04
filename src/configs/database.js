const { Sequelize } = require('sequelize')

let databaseURL = process.env.DATABASE_URL
databaseURL = databaseURL ?? 'sqlite::memory:' //just for the simplicity of this activity

exports.database = new Sequelize(databaseURL);

