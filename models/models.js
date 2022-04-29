const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db.config')

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
})

const a = () => {
    console.log('aaa')
    console.log(User === sequelize.models.User)
}

module.exports = a