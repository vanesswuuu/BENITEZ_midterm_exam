const { Sequelize } = require('sequelize');

// Create Sequelize instance (Replace with your MySQL credentials)
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully!'))
    .catch(err => console.error('❌ Unable to connect to the database:', err));

module.exports = sequelize;
    