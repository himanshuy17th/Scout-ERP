// backend/config/db.js
require('dotenv').config();  // Load environment variables

const mysql = require('mysql2');

// Create a connection to the database using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Test the database connection
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        process.exit(1);  // Exit the process if the database connection fails
    }
    console.log('Connected to the database');
});

module.exports = connection;
