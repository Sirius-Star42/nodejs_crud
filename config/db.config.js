const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_db', 'root', 'bildes21', {
    host: 'localhost',
    dialect: 'mysql',
})

const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('Database Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

exports.sequelize = sequelize
exports.connectDb = connectDb
