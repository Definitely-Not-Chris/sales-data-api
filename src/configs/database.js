const { Sequelize } = require('sequelize')

let databaseURL = process.env.DATABASE_URL
databaseURL = databaseURL ?? 'sqlite::memory:' //just for the simplicity of this activity

const database = new Sequelize(databaseURL, {
    logging: true
});

module.exports = database