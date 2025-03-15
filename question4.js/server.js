const express = require('express');
const User = require('./models/User');  // Import User model
const sequelize = require('./database');  // Import DB connection

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Sync Sequelize models with MySQL
sequelize.sync()
    .then(() => {
        console.log('✅ Database synchronized');
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error('❌ Error syncing database:', err));
