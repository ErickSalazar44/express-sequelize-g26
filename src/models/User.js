const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const User = sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false // allowNull => no puede quedar en blanco 
    },
    last_name: {
        type: DataTypes.STRING, // typo varchar()
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, // type num
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.STRING,
    }
});

module.exports = User;