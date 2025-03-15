const { DataTypes } = require('sequelize');
const sequelize = require('../database');  // Import database connection

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    }
}, {
    tableName: 'users', // Ensure it matches your MySQL table name
    timestamps: false
});

module.exports = User;
